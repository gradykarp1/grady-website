import { NextResponse } from "next/server";
import { validateSession } from "@/lib/auth";
import { getChatLogs } from "@/lib/chat-logger";

export async function GET(req: Request) {
  try {
    const isValid = await validateSession();
    if (!isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const limit = parseInt(url.searchParams.get("limit") || "50", 10);

    const logs = await getChatLogs(limit);

    return NextResponse.json(logs);
  } catch (error) {
    console.error("Get chat logs error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to fetch chat logs: ${message}` },
      { status: 500 }
    );
  }
}
