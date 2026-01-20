"use client";

import { useState } from "react";
import type { ExperienceWithId } from "@/types/experience";

interface ExperienceListProps {
  experiences: ExperienceWithId[];
  onEdit: (experience: ExperienceWithId) => void;
  onDelete: (id: number) => Promise<void>;
  onReorder: (order: number[]) => Promise<void>;
}

export default function ExperienceList({
  experiences,
  onEdit,
  onDelete,
  onReorder,
}: ExperienceListProps) {
  const [items, setItems] = useState(experiences);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Update items when experiences prop changes
  if (
    items.length !== experiences.length ||
    items.some((item, i) => item.id !== experiences[i]?.id)
  ) {
    setItems(experiences);
  }

  function handleDragStart(e: React.DragEvent, index: number) {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  }

  function handleDragOver(e: React.DragEvent, index: number) {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const reordered = [...items];
    const [removed] = reordered.splice(draggedIndex, 1);
    reordered.splice(index, 0, removed);
    setItems(reordered);
    setDraggedIndex(index);
  }

  async function handleDragEnd() {
    if (draggedIndex !== null) {
      const newOrder = items.map((item) => item.id);
      await onReorder(newOrder);
    }
    setDraggedIndex(null);
  }

  async function handleDelete(id: number) {
    setIsDeleting(true);
    try {
      await onDelete(id);
      setDeleteConfirm(null);
    } finally {
      setIsDeleting(false);
    }
  }

  async function moveItem(fromIndex: number, direction: "up" | "down") {
    const toIndex = direction === "up" ? fromIndex - 1 : fromIndex + 1;
    if (toIndex < 0 || toIndex >= items.length) return;

    const reordered = [...items];
    const [removed] = reordered.splice(fromIndex, 1);
    reordered.splice(toIndex, 0, removed);
    setItems(reordered);

    const newOrder = reordered.map((item) => item.id);
    await onReorder(newOrder);
  }

  if (items.length === 0) {
    return (
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 text-center">
        <p className="text-neutral-600">
          No experiences yet. Add your first one!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-neutral-500">
        Drag to reorder or use arrow buttons. Changes save automatically.
      </p>
      {items.map((exp, index) => (
        <div
          key={exp.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnd={handleDragEnd}
          className={`cursor-move rounded-lg border bg-white p-4 transition-shadow hover:shadow-sm ${
            draggedIndex === index
              ? "border-neutral-400 shadow-md"
              : "border-neutral-200"
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-neutral-900">{exp.role}</h3>
              <p className="text-neutral-600">
                {exp.company} | {exp.period}
              </p>
              {exp.highlights.length > 0 && (
                <p className="mt-1 truncate text-sm text-neutral-500">
                  {exp.highlights[0]}
                  {exp.highlights.length > 1 &&
                    ` (+${exp.highlights.length - 1} more)`}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => moveItem(index, "up")}
                  disabled={index === 0}
                  className="p-1 text-neutral-400 hover:text-neutral-600 disabled:opacity-30"
                  title="Move up"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <button
                  onClick={() => moveItem(index, "down")}
                  disabled={index === items.length - 1}
                  className="p-1 text-neutral-400 hover:text-neutral-600 disabled:opacity-30"
                  title="Move down"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <button
                onClick={() => onEdit(exp)}
                className="rounded px-3 py-1 text-sm text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              >
                Edit
              </button>

              {deleteConfirm === exp.id ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDelete(exp.id)}
                    disabled={isDeleting}
                    className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700 disabled:opacity-50"
                  >
                    {isDeleting ? "..." : "Confirm"}
                  </button>
                  <button
                    onClick={() => setDeleteConfirm(null)}
                    disabled={isDeleting}
                    className="rounded px-3 py-1 text-sm text-neutral-600 hover:bg-neutral-100"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setDeleteConfirm(exp.id)}
                  className="rounded px-3 py-1 text-sm text-red-600 hover:bg-red-50 hover:text-red-700"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
