import { put, list } from "@vercel/blob";
import type { Experience } from "@/types/experience";

const EXPERIENCES_BLOB_PATH = "profile/experiences.json";

// In-memory cache with TTL
let experiencesCache: { data: Experience[]; url: string; timestamp: number } | null = null;
const CACHE_TTL_MS = 60 * 1000; // 60 seconds

export async function getExperiencesFromBlob(): Promise<Experience[] | null> {
  // Check cache first
  if (
    experiencesCache &&
    Date.now() - experiencesCache.timestamp < CACHE_TTL_MS
  ) {
    return experiencesCache.data;
  }

  // Check if blob token is configured
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("BLOB_READ_WRITE_TOKEN is not configured");
    throw new Error("Blob storage not configured - missing BLOB_READ_WRITE_TOKEN");
  }

  try {
    // List blobs to find our experiences file
    const { blobs } = await list({ prefix: "profile/" });
    const experiencesBlob = blobs.find((b) =>
      b.pathname === EXPERIENCES_BLOB_PATH
    );

    if (!experiencesBlob) {
      // Blob doesn't exist yet
      return null;
    }

    const response = await fetch(experiencesBlob.url, { cache: "no-store" });

    if (!response.ok) {
      return null;
    }

    const experiences = (await response.json()) as Experience[];

    // Update cache
    experiencesCache = {
      data: experiences,
      url: experiencesBlob.url,
      timestamp: Date.now(),
    };

    return experiences;
  } catch (error) {
    console.error("Failed to read experiences from blob:", error);
    throw error; // Re-throw so callers know about the failure
  }
}

export async function saveExperiencesToBlob(
  experiences: Experience[]
): Promise<string> {
  const { url } = await put(
    EXPERIENCES_BLOB_PATH,
    JSON.stringify(experiences, null, 2),
    {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
    }
  );

  // Update cache with new data
  experiencesCache = {
    data: experiences,
    url,
    timestamp: Date.now(),
  };

  return url;
}

export async function experiencesBlobExists(): Promise<boolean> {
  try {
    const { blobs } = await list({ prefix: "profile/" });
    return blobs.some((b) => b.pathname === EXPERIENCES_BLOB_PATH);
  } catch {
    return false;
  }
}

export function invalidateExperiencesCache(): void {
  experiencesCache = null;
}
