"use client";

import { useState, useEffect, useCallback } from "react";
import LoginForm from "@/components/admin/LoginForm";
import ExperienceList from "@/components/admin/ExperienceList";
import ExperienceForm from "@/components/admin/ExperienceForm";
import type { ExperienceWithId, Experience } from "@/types/experience";

type View = "list" | "add" | "edit";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [experiences, setExperiences] = useState<ExperienceWithId[]>([]);
  const [view, setView] = useState<View>("list");
  const [editingExperience, setEditingExperience] =
    useState<ExperienceWithId | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchExperiences = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/experience");
      if (res.ok) {
        const data = await res.json();
        setExperiences(data);
        setIsAuthenticated(true);
      } else if (res.status === 401) {
        setIsAuthenticated(false);
      }
    } catch {
      setError("Failed to fetch experiences");
    }
  }, []);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/login");
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
          fetchExperiences();
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, [fetchExperiences]);

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
    fetchExperiences();
  }

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setIsAuthenticated(false);
    setExperiences([]);
    setView("list");
  }

  async function handleAdd(experience: Experience) {
    const res = await fetch("/api/admin/experience", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(experience),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to add experience");
    }

    await fetchExperiences();
    setView("list");
  }

  async function handleUpdate(id: number, experience: Experience) {
    const res = await fetch(`/api/admin/experience/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(experience),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to update experience");
    }

    await fetchExperiences();
    setEditingExperience(null);
    setView("list");
  }

  async function handleDelete(id: number) {
    const res = await fetch(`/api/admin/experience/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to delete experience");
    }

    await fetchExperiences();
  }

  async function handleReorder(order: number[]) {
    const res = await fetch("/api/admin/experience/reorder", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to reorder experiences");
    }

    await fetchExperiences();
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
          <h1 className="text-3xl font-bold text-neutral-900">
            Manage Experience
          </h1>
          <div className="flex gap-4">
            {view === "list" && (
              <button
                onClick={() => setView("add")}
                className="rounded-lg bg-neutral-900 px-4 py-2 font-medium text-white transition-colors hover:bg-neutral-800"
              >
                Add Experience
              </button>
            )}
            <button
              onClick={handleLogout}
              className="rounded-lg border border-neutral-300 px-4 py-2 font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
            >
              Logout
            </button>
          </div>
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

        {view === "list" && (
          <ExperienceList
            experiences={experiences}
            onEdit={(exp) => {
              setEditingExperience(exp);
              setView("edit");
            }}
            onDelete={handleDelete}
            onReorder={handleReorder}
          />
        )}

        {view === "add" && (
          <ExperienceForm onSubmit={handleAdd} onCancel={() => setView("list")} />
        )}

        {view === "edit" && editingExperience && (
          <ExperienceForm
            experience={editingExperience}
            onSubmit={(exp) => handleUpdate(editingExperience.id, exp)}
            onCancel={() => {
              setEditingExperience(null);
              setView("list");
            }}
          />
        )}
      </div>
    </div>
  );
}
