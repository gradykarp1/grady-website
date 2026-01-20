import { NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";
import { getExperiences, updateExperiences } from "@/lib/profile-writer";

export async function PUT(req: Request) {
  try {
    const isValid = await validateSession();
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { order } = await req.json();
    const experiences = await getExperiences();

    if (!Array.isArray(order) || order.length !== experiences.length) {
      return NextResponse.json(
        { error: "Invalid order array" },
        { status: 400 }
      );
    }

    // Validate all indices are valid
    const indices = new Set(order);
    if (
      indices.size !== order.length ||
      order.some((i: number) => i < 0 || i >= experiences.length)
    ) {
      return NextResponse.json(
        { error: "Invalid order indices" },
        { status: 400 }
      );
    }

    const reorderedExperiences = order.map(
      (index: number) => experiences[index]
    );
    await updateExperiences(reorderedExperiences);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Reorder experiences error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to reorder experiences: ${message}` },
      { status: 500 }
    );
  }
}
