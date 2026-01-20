"use client";

import { useState, useEffect } from "react";
import type { ChatLog } from "@/lib/chat-logger";

export default function ChatLogsViewer() {
  const [logs, setLogs] = useState<ChatLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLogs() {
      try {
        const res = await fetch("/api/admin/chat-logs?limit=100");
        if (!res.ok) {
          throw new Error("Failed to fetch logs");
        }
        const data = await res.json();
        setLogs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load logs");
      } finally {
        setLoading(false);
      }
    }
    fetchLogs();
  }, []);

  if (loading) {
    return (
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center">
        <p className="text-neutral-600">Loading chat logs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (logs.length === 0) {
    return (
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center">
        <p className="text-neutral-600">No chat logs yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-neutral-500">
        Showing {logs.length} most recent conversations
      </p>
      {logs.map((log) => (
        <div
          key={log.id}
          className="rounded-lg border border-neutral-200 bg-white overflow-hidden"
        >
          <button
            onClick={() => setExpandedId(expandedId === log.id ? null : log.id)}
            className="w-full p-4 text-left hover:bg-neutral-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-900">
                  {new Date(log.timestamp).toLocaleString()}
                </p>
                <p className="text-sm text-neutral-500">
                  {log.messages.length} messages
                  {log.messages[0] && (
                    <span className="ml-2 text-neutral-400">
                      &ldquo;{log.messages[0].content.slice(0, 50)}
                      {log.messages[0].content.length > 50 ? "..." : ""}&rdquo;
                    </span>
                  )}
                </p>
              </div>
              <svg
                className={`w-5 h-5 text-neutral-400 transition-transform ${
                  expandedId === log.id ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          {expandedId === log.id && (
            <div className="border-t border-neutral-200 p-4 space-y-3 bg-neutral-50">
              {log.userAgent && (
                <p className="text-xs text-neutral-400 mb-2">
                  User Agent: {log.userAgent}
                </p>
              )}
              {log.messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-neutral-900 text-white ml-8"
                      : "bg-white border border-neutral-200 mr-8"
                  }`}
                >
                  <p className="text-xs font-medium mb-1 opacity-70">
                    {msg.role === "user" ? "User" : "Assistant"}
                  </p>
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
