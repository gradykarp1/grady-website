import { anthropic } from "@ai-sdk/anthropic";
import {
  streamText,
  convertToModelMessages,
  UIMessage,
  createUIMessageStreamResponse,
} from "ai";
import { buildSystemPrompt } from "@/lib/profile-context";
import { logConversation, ChatMessage } from "@/lib/chat-logger";

function extractTextFromUIMessage(message: UIMessage): string {
  return message.parts
    .filter((part): part is { type: "text"; text: string } => part.type === "text")
    .map((part) => part.text)
    .join("");
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const userAgent = req.headers.get("user-agent") || undefined;

    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid request body", { status: 400 });
    }

    const systemPrompt = buildSystemPrompt();

    // Convert UIMessage format (parts array) to ModelMessage format (content)
    const modelMessages = await convertToModelMessages(messages as UIMessage[]);

    // Extract conversation history for logging
    const conversationHistory: ChatMessage[] = (messages as UIMessage[]).map(
      (msg) => ({
        role: msg.role as "user" | "assistant",
        content: extractTextFromUIMessage(msg),
      })
    );

    const result = streamText({
      model: anthropic("claude-sonnet-4-20250514"),
      system: systemPrompt,
      messages: modelMessages,
      maxOutputTokens: 1024,
      temperature: 0.7,
      onFinish: async ({ text }) => {
        // Log the complete conversation including the assistant's response
        const fullConversation: ChatMessage[] = [
          ...conversationHistory,
          { role: "assistant", content: text },
        ];
        await logConversation(fullConversation, userAgent);
      },
    });

    // Return in UIMessage stream format for DefaultChatTransport
    return createUIMessageStreamResponse({
      stream: result.toUIMessageStream(),
    });
  } catch (error) {
    console.error("Chat API error:", error);

    if (error instanceof Error && error.message.includes("rate limit")) {
      return new Response("Rate limit exceeded. Please try again later.", {
        status: 429,
      });
    }

    return new Response("Internal server error", { status: 500 });
  }
}
