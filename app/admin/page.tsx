"use client";

import { useState, useEffect } from "react";
import LoginForm from "@/components/admin/LoginForm";
import ChatLogsViewer from "@/components/admin/ChatLogsViewer";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/login");
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  async function handleLogin(password: string) {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      throw new Error("Invalid password");
    }

    setIsAuthenticated(true);
  }

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setIsAuthenticated(false);
  }

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-neutral-600">Loading...</div>
      </div>
    );
  }

  // Login form
  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  // Main admin interface
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-neutral-900">Admin</h1>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-neutral-300 px-4 py-2 font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
          >
            Logout
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-700">
            {error}
            <button
              onClick={() => setError(null)}
              className="ml-4 text-sm underline"
            >
              Dismiss
            </button>
          </div>
        )}

        <ChatLogsViewer />
      </div>
    </div>
  );
}
