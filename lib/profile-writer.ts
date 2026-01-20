import fs from "fs/promises";
import path from "path";
import type { Experience } from "@/types/experience";

const PROFILE_PATH = path.join(process.cwd(), "data", "grady-profile.ts");

interface ProfileData {
  name: string;
  title: string;
  location: string;
  status: string;
  summary: string;
  experience: Experience[];
  skills: {
    strong: string[];
    moderate: string[];
    gaps: string[];
  };
  education: { school: string; degree: string }[];
  suggestedQuestions: string[];
}

export async function readProfileData(): Promise<ProfileData> {
  const content = await fs.readFile(PROFILE_PATH, "utf-8");

  // Extract the object from the TypeScript export
  const startIndex = content.indexOf("{");
  const endIndex = content.lastIndexOf("}");
  if (startIndex === -1 || endIndex === -1) {
    throw new Error("Could not parse profile data");
  }

  const objectStr = content.slice(startIndex, endIndex + 1);

  // Use Function constructor to evaluate the object (safe since we control the file)
  const fn = new Function(`return ${objectStr}`);
  return fn() as ProfileData;
}

export async function writeProfileData(profile: ProfileData): Promise<void> {
  const content = `export const gradyProfile = ${formatObject(profile, 0)};

export type GradyProfile = typeof gradyProfile;
`;

  await fs.writeFile(PROFILE_PATH, content, "utf-8");
}

export async function getExperiences(): Promise<Experience[]> {
  const profile = await readProfileData();
  return profile.experience;
}

export async function updateExperiences(
  experiences: Experience[]
): Promise<void> {
  const profile = await readProfileData();
  profile.experience = experiences;
  await writeProfileData(profile);
}

function formatObject(obj: unknown, indent: number): string {
  const spaces = "  ".repeat(indent);
  const innerSpaces = "  ".repeat(indent + 1);

  if (obj === null || obj === undefined) {
    return "null";
  }

  if (typeof obj === "string") {
    // Use template literals for multi-line strings
    if (obj.includes("\n")) {
      return `\`${obj.replace(/`/g, "\\`").replace(/\$/g, "\\$")}\``;
    }
    return `"${obj.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }

  if (typeof obj === "number" || typeof obj === "boolean") {
    return String(obj);
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) return "[]";

    // For simple string arrays that fit on one line, keep them compact
    if (
      obj.every(
        (item) =>
          typeof item === "string" && !item.includes("\n") && item.length < 50
      )
    ) {
      const items = obj.map(
        (item) => `"${(item as string).replace(/"/g, '\\"')}"`
      );
      const compact = `[${items.join(", ")}]`;
      if (compact.length < 80) return compact;
    }

    const items = obj.map(
      (item) => `${innerSpaces}${formatObject(item, indent + 1)}`
    );
    return `[\n${items.join(",\n")},\n${spaces}]`;
  }

  if (typeof obj === "object") {
    const entries = Object.entries(obj as Record<string, unknown>);
    if (entries.length === 0) return "{}";

    const props = entries.map(([key, value]) => {
      const formattedValue = formatObject(value, indent + 1);
      // Use quotes for keys with special characters
      const formattedKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)
        ? key
        : `"${key}"`;
      return `${innerSpaces}${formattedKey}: ${formattedValue}`;
    });

    return `{\n${props.join(",\n")},\n${spaces}}`;
  }

  return String(obj);
}
