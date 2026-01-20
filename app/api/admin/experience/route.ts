import { NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";
import { getExperiences, updateExperiences } from "@/lib/profile-writer";
import type { Experience } from "@/types/experience";

export async function GET() {
  try {
    const isValid = await validateSession();
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const experiences = await getExperiences();
    const experiencesWithIds = experiences.map((exp, index) => ({
      ...exp,
      id: index,
    }));

    return NextResponse.json(experiencesWithIds);
  } catch (error) {
    console.error("Get experiences error:", error);
    return NextResponse.json(
      { error: "Failed to fetch experiences" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const isValid = await validateSession();
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const newExperience: Experience = await req.json();

    if (
      !newExperience.company ||
      !newExperience.role ||
      !newExperience.period
    ) {
      return NextResponse.json(
        { error: "Company, role, and period are required" },
        { status: 400 }
      );
    }

    const experiences = await getExperiences();
    const updatedExperiences = [newExperience, ...experiences];
    await updateExperiences(updatedExperiences);

    return NextResponse.json({ success: true, id: 0 });
  } catch (error) {
    console.error("Add experience error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to add experience: ${message}` },
      { status: 500 }
    );
  }
}
