import { put, list } from "@vercel/blob";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatLog {
  id: string;
  timestamp: string;
  messages: ChatMessage[];
  userAgent?: string;
}

const CHAT_LOGS_PREFIX = "chat-logs/";

export async function logConversation(
  messages: ChatMessage[],
  userAgent?: string
): Promise<string> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.error("BLOB_READ_WRITE_TOKEN not configured, skipping chat log");
    return "";
  }

  const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  const timestamp = new Date().toISOString();

  const chatLog: ChatLog = {
    id,
    timestamp,
    messages,
    userAgent,
  };

  const pathname = `${CHAT_LOGS_PREFIX}${id}.json`;

  try {
    const { url } = await put(pathname, JSON.stringify(chatLog, null, 2), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
      token,
    });
    console.log("Chat logged:", id);
    return url;
  } catch (error) {
    console.error("Failed to log chat:", error);
    return "";
  }
}

export async function getChatLogs(limit = 50): Promise<ChatLog[]> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    throw new Error("BLOB_READ_WRITE_TOKEN not configured");
  }

  try {
    const { blobs } = await list({ prefix: CHAT_LOGS_PREFIX, token });

    // Sort by pathname (which includes timestamp) descending
    const sortedBlobs = blobs
      .sort((a, b) => b.pathname.localeCompare(a.pathname))
      .slice(0, limit);

    const logs: ChatLog[] = [];

    for (const blob of sortedBlobs) {
      try {
        const response = await fetch(blob.url);
        if (response.ok) {
          const log = (await response.json()) as ChatLog;
          logs.push(log);
        }
      } catch {
        console.error("Failed to fetch log:", blob.pathname);
      }
    }

    return logs;
  } catch (error) {
    console.error("Failed to get chat logs:", error);
    throw error;
  }
}
