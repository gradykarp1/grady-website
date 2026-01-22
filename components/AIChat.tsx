"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, UIMessage } from "ai";
import { useEffect, useRef, useState, useMemo } from "react";
import { gradyProfile } from "@/data/grady-profile";
import ReactMarkdown from "react-markdown";

function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((part): part is { type: "text"; text: string } => part.type === "text")
    .map((part) => part.text)
    .join("");
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

type Tab = "ask" | "assess";

export default function AIChat({ isOpen, onClose }: AIChatProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("ask");
  const [jobDescription, setJobDescription] = useState("");

  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat" }),
    []
  );

  const { messages, sendMessage, status, error, clearError } = useChat({
    transport,
  });

  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    sendMessage({ text: input });
    setInput("");
  };

  const handleSuggestedQuestion = (question: string) => {
    if (isLoading) return;
    sendMessage({ text: question });
  };

  const handleAssessFit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobDescription.trim() || isLoading) return;

    const prompt = `Please assess Grady's fit for the following role. Be honest about both strengths and potential gaps. Consider the job requirements and how they align with Grady's experience, skills, and career trajectory.

Job Description:
${jobDescription}`;

    sendMessage({ text: prompt });
    setJobDescription("");
    setActiveTab("ask"); // Switch to chat view to see the response
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl h-[80vh] bg-white border border-neutral-200 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white font-semibold">
              GK
            </div>
            <div>
              <p className="text-neutral-900 font-medium">
                Ask AI About Grady
              </p>
              <p className="text-xs text-neutral-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Powered by Claude AI
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors rounded-lg hover:bg-neutral-100"
            aria-label="Close chat"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-neutral-200">
          <button
            onClick={() => setActiveTab("ask")}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === "ask"
                ? "text-neutral-900 border-b-2 border-neutral-900 -mb-px"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            Ask Questions
          </button>
          <button
            onClick={() => setActiveTab("assess")}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === "assess"
                ? "text-neutral-900 border-b-2 border-neutral-900 -mb-px"
                : "text-neutral-500 hover:text-neutral-700"
            }`}
          >
            Assess Fit for Role
          </button>
        </div>

        {/* Ask Questions Tab */}
        {activeTab === "ask" && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && !isLoading && (
                <div className="h-full flex flex-col items-center justify-center text-center px-6">
                  <svg
                    className="w-12 h-12 text-neutral-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    What would you like to know?
                  </h3>
                  <p className="text-neutral-500 text-sm mb-6 max-w-md">
                    Ask about Grady&apos;s experience, skills, or fit for your role.
                    Get honest, detailed answers.
                  </p>
                  <div className="w-full max-w-md space-y-2">
                    {gradyProfile.suggestedQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSuggestedQuestion(q)}
                        className="w-full text-left p-3 bg-neutral-50 rounded-xl text-sm text-neutral-700 hover:bg-neutral-100 transition-colors border border-neutral-200 hover:border-neutral-300"
                      >
                        &ldquo;{q}&rdquo;
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-neutral-900 text-white rounded-br-md"
                        : "bg-neutral-100 text-neutral-900 rounded-bl-md"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">
                        {getMessageText(msg)}
                      </p>
                    ) : (
                      <div className="text-sm leading-relaxed prose prose-sm prose-neutral max-w-none prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-0.5 prose-strong:text-neutral-900 prose-headings:text-neutral-900 prose-headings:mt-3 prose-headings:mb-2">
                        <ReactMarkdown>{getMessageText(msg)}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] bg-neutral-100 text-neutral-900 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" />
                      <div
                        className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="flex justify-center">
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Something went wrong.</span>
                    <button
                      onClick={() => clearError()}
                      className="underline hover:no-underline"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-neutral-200">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question about Grady..."
                  disabled={isLoading}
                  className="flex-1 bg-neutral-50 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 border border-neutral-200 focus:border-neutral-400 focus:outline-none transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="px-4 py-3 bg-neutral-900 text-white rounded-xl font-medium disabled:opacity-50 hover:bg-neutral-800 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </>
        )}

        {/* Assess Fit Tab */}
        {activeTab === "assess" && (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="max-w-lg mx-auto">
              <div className="text-center mb-6">
                <svg
                  className="w-12 h-12 text-neutral-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Assess Grady&apos;s Fit for Your Role
                </h3>
                <p className="text-neutral-500 text-sm">
                  Paste a job description below to get an honest assessment of how
                  Grady&apos;s experience aligns with your requirements.
                </p>
              </div>

              <form onSubmit={handleAssessFit} className="space-y-4">
                <div>
                  <label
                    htmlFor="job-description"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Job Description
                  </label>
                  <textarea
                    id="job-description"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the job description here..."
                    rows={12}
                    disabled={isLoading}
                    className="w-full bg-neutral-50 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 border border-neutral-200 focus:border-neutral-400 focus:outline-none transition-colors disabled:opacity-50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!jobDescription.trim() || isLoading}
                  className="w-full px-4 py-3 bg-neutral-900 text-white rounded-xl font-medium disabled:opacity-50 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        />
                      </svg>
                      Assess Fit
                    </>
                  )}
                </button>
              </form>

              <p className="mt-4 text-xs text-neutral-400 text-center">
                The AI will provide an honest assessment including both strengths
                and potential gaps based on Grady&apos;s actual experience.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
