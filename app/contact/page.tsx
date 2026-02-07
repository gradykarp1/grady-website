import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Contact | Grady Karp",
  description:
    "Get in touch with Grady Karp for consulting inquiries, speaking engagements, or to schedule a consultation.",
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold text-neutral-900">
            Get in Touch
          </h1>
          <p className="text-lg text-neutral-600">
            I&apos;m always interested in hearing about new opportunities and
            challenges. Whether you have a specific project in mind or just want
            to explore how we might work together, I&apos;d love to hear from
            you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-neutral-900">
              Send a Message
            </h2>
            <ContactForm />

            <div className="mt-8 border-t border-neutral-200 pt-8">
              <h3 className="mb-4 text-lg font-semibold text-neutral-900">
                Other Ways to Connect
              </h3>
              <ul className="space-y-3 text-neutral-600">
                <li>
                  <a
                    href="mailto:grady@gradykarp.com"
                    className="inline-flex items-center transition-colors hover:text-neutral-900"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gradykarp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center transition-colors hover:text-neutral-900"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Calendly Embed */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-neutral-900">
              Schedule a Call
            </h2>
            <p className="mb-6 text-neutral-600">
              Prefer to talk directly? Book a time that works for you using my
              calendar below.
            </p>
            <CalendlyEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}
