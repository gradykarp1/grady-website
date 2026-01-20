import { NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";
import { getExperiences, updateExperiences } from "@/lib/profile-writer";
import type { Experience } from "@/types/experience";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isValid = await validateSession();
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const index = parseInt(id, 10);
    const experiences = await getExperiences();

    if (isNaN(index) || index < 0 || index >= experiences.length) {
      return NextResponse.json(
        { error: "Invalid experience ID" },
        { status: 400 }
      );
    }

    const updatedExperience: Experience = await req.json();

    if (
      !updatedExperience.company ||
      !updatedExperience.role ||
      !updatedExperience.period
    ) {
      return NextResponse.json(
        { error: "Company, role, and period are required" },
        { status: 400 }
      );
    }

    const updatedExperiences = [...experiences];
    updatedExperiences[index] = updatedExperience;
    await updateExperiences(updatedExperiences);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update experience error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to update experience: ${message}` },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isValid = await validateSession();
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const index = parseInt(id, 10);
    const experiences = await getExperiences();

    if (isNaN(index) || index < 0 || index >= experiences.length) {
      return NextResponse.json(
        { error: "Invalid experience ID" },
        { status: 400 }
      );
    }

    const updatedExperiences = experiences.filter((_, i) => i !== index);
    await updateExperiences(updatedExperiences);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete experience error:", error);
    return NextResponse.json(
      { error: "Failed to delete experience" },
      { status: 500 }
    );
  }
}
