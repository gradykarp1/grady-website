"use client";

import { useState } from "react";
import type { Experience, ExperienceWithId, AIContext } from "@/types/experience";

interface ExperienceFormProps {
  experience?: ExperienceWithId;
  onSubmit: (experience: Experience) => Promise<void>;
  onCancel: () => void;
}

const emptyAiContext: AIContext = {
  title: "",
  situation: "",
  approach: "",
  technicalWork: "",
  lessonsLearned: "",
};

export default function ExperienceForm({
  experience,
  onSubmit,
  onCancel,
}: ExperienceFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [company, setCompany] = useState(experience?.company ?? "");
  const [role, setRole] = useState(experience?.role ?? "");
  const [period, setPeriod] = useState(experience?.period ?? "");
  const [highlights, setHighlights] = useState<string[]>(
    experience?.highlights ?? [""]
  );
  const [aiContexts, setAiContexts] = useState<AIContext[]>(
    experience?.aiContext?.length ? experience.aiContext : [{ ...emptyAiContext }]
  );

  function addHighlight() {
    setHighlights([...highlights, ""]);
  }

  function removeHighlight(index: number) {
    if (highlights.length > 1) {
      setHighlights(highlights.filter((_, i) => i !== index));
    }
  }

  function updateHighlight(index: number, value: string) {
    const updated = [...highlights];
    updated[index] = value;
    setHighlights(updated);
  }

  function addAiContext() {
    setAiContexts([...aiContexts, { ...emptyAiContext }]);
  }

  function removeAiContext(index: number) {
    if (aiContexts.length > 1) {
      setAiContexts(aiContexts.filter((_, i) => i !== index));
    }
  }

  function updateAiContext(index: number, field: keyof AIContext, value: string) {
    const updated = [...aiContexts];
    updated[index] = { ...updated[index], [field]: value };
    setAiContexts(updated);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Filter out empty contexts and clean up empty titles
      const cleanedContexts = aiContexts
        .filter(
          (ctx) =>
            ctx.situation.trim() ||
            ctx.approach.trim() ||
            ctx.technicalWork.trim() ||
            ctx.lessonsLearned.trim()
        )
        .map((ctx) => ({
          ...ctx,
          title: ctx.title?.trim() || undefined,
        }));

      await onSubmit({
        company,
        role,
        period,
        highlights: highlights.filter((h) => h.trim() !== ""),
        aiContext: cleanedContexts.length ? cleanedContexts : [{ ...emptyAiContext }],
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to save experience"
      );
    }
  }

  const inputClassName =
    "w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500";
  const labelClassName = "mb-2 block text-sm font-medium text-neutral-700";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold text-neutral-900">
        {experience ? "Edit Experience" : "Add Experience"}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClassName}>
            Company *
          </label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            className={inputClassName}
            placeholder="Company name"
          />
        </div>

        <div>
          <label htmlFor="role" className={labelClassName}>
            Role *
          </label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className={inputClassName}
            placeholder="Job title"
          />
        </div>
      </div>

      <div>
        <label htmlFor="period" className={labelClassName}>
          Period *
        </label>
        <input
          type="text"
          id="period"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          required
          className={inputClassName}
          placeholder="e.g., January 2020 - Present"
        />
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className={labelClassName}>Highlights</label>
          <button
            type="button"
            onClick={addHighlight}
            className="text-sm text-neutral-600 hover:text-neutral-900"
          >
            + Add highlight
          </button>
        </div>
        <div className="space-y-3">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={highlight}
                onChange={(e) => updateHighlight(index, e.target.value)}
                className={inputClassName}
                placeholder="Key achievement or responsibility"
              />
              {highlights.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeHighlight(index)}
                  className="px-3 text-neutral-400 hover:text-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-200 pt-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-medium text-neutral-900">
            AI Context (for chatbot)
          </h3>
          <button
            type="button"
            onClick={addAiContext}
            className="text-sm text-neutral-600 hover:text-neutral-900"
          >
            + Add context
          </button>
        </div>
        <p className="mb-4 text-sm text-neutral-500">
          Add multiple contexts for different projects, initiatives, or phases within this role.
        </p>

        <div className="space-y-6">
          {aiContexts.map((ctx, index) => (
            <div
              key={index}
              className="rounded-lg border border-neutral-200 bg-neutral-50 p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-700">
                  Context {index + 1}
                </span>
                {aiContexts.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeAiContext(index)}
                    className="text-sm text-neutral-400 hover:text-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className={labelClassName}>
                    Title (optional)
                  </label>
                  <input
                    type="text"
                    value={ctx.title ?? ""}
                    onChange={(e) => updateAiContext(index, "title", e.target.value)}
                    className={inputClassName}
                    placeholder="e.g., Project Alpha, Phase 2, Platform Migration"
                  />
                </div>

                <div>
                  <label className={labelClassName}>
                    Situation
                  </label>
                  <textarea
                    value={ctx.situation}
                    onChange={(e) => updateAiContext(index, "situation", e.target.value)}
                    rows={2}
                    className={inputClassName}
                    placeholder="What was the context or challenge?"
                  />
                </div>

                <div>
                  <label className={labelClassName}>
                    Approach
                  </label>
                  <textarea
                    value={ctx.approach}
                    onChange={(e) => updateAiContext(index, "approach", e.target.value)}
                    rows={2}
                    className={inputClassName}
                    placeholder="How did you tackle the challenge?"
                  />
                </div>

                <div>
                  <label className={labelClassName}>
                    Technical Work
                  </label>
                  <textarea
                    value={ctx.technicalWork}
                    onChange={(e) => updateAiContext(index, "technicalWork", e.target.value)}
                    rows={2}
                    className={inputClassName}
                    placeholder="What technical skills or tools were involved?"
                  />
                </div>

                <div>
                  <label className={labelClassName}>
                    Lessons Learned
                  </label>
                  <textarea
                    value={ctx.lessonsLearned}
                    onChange={(e) => updateAiContext(index, "lessonsLearned", e.target.value)}
                    rows={2}
                    className={inputClassName}
                    placeholder="What key insights did you gain?"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          {errorMessage || "Something went wrong. Please try again."}
        </p>
      )}

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex-1 rounded-lg bg-neutral-900 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting"
            ? "Saving..."
            : experience
              ? "Update Experience"
              : "Add Experience"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          disabled={status === "submitting"}
          className="rounded-lg border border-neutral-300 px-6 py-3 font-medium text-neutral-700 transition-colors hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
