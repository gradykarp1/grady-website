"use client";

import { useState, useEffect, useCallback } from "react";
import { gradyProfile } from "@/data/grady-profile";

const DISPLAY_DURATION_MS = 8000; // 8 seconds per quotation
const FADE_DURATION_MS = 500;

export default function QuotationCarousel() {
  const testimonials = gradyProfile.testimonials;
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * testimonials.length)
  );
  const [isVisible, setIsVisible] = useState(true);

  const selectNextQuotation = useCallback(() => {
    if (testimonials.length <= 1) return;

    // Fade out
    setIsVisible(false);

    // After fade out, select new random quotation and fade in
    setTimeout(() => {
      let newIndex: number;
      do {
        newIndex = Math.floor(Math.random() * testimonials.length);
      } while (newIndex === currentIndex && testimonials.length > 1);

      setCurrentIndex(newIndex);
      setIsVisible(true);
    }, FADE_DURATION_MS);
  }, [testimonials.length, currentIndex]);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(selectNextQuotation, DISPLAY_DURATION_MS);
    return () => clearInterval(interval);
  }, [testimonials.length, selectNextQuotation]);

  // Don't render if no testimonials
  if (testimonials.length === 0) {
    return null;
  }

  const current = testimonials[currentIndex];

  return (
    <section className="pt-8 pb-16 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className={`text-center transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            className="mx-auto mb-6 h-10 w-10 text-neutral-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-xl md:text-2xl text-neutral-700 italic leading-relaxed">
            &ldquo;{current.text}&rdquo;
          </blockquote>
          <p className="mt-6 text-neutral-500 font-medium">
            &mdash; {current.attribution}
          </p>
        </div>

        {/* Dots indicator */}
        {testimonials.length > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsVisible(false);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsVisible(true);
                  }, FADE_DURATION_MS);
                }}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-neutral-900"
                    : "bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
