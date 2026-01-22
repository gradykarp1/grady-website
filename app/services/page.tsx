import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Grady Karp",
  description:
    "Professional consulting services in engineering leadership, technical strategy, and organizational development.",
};

export default function ServicesPage() {
  const services = [
    
    {
      title: "Technical Strategy Consulting",
      description:
        "Help organizations define their technical direction and build roadmaps that align technology investments with business objectives.",
      features: [
        "Technology roadmap development",
        "Architecture reviews",
        "Build vs. buy analysis",
        "Technical debt assessment",
      ],
    },
    {
      title: "Leadership Coaching",
      description:
        "One-on-one leadership coaching for leaders. Develop your leadership skills, navigate complex organizational challenges, and accelerate your career growth.",
      features: [
        "Personalized coaching sessions",
        "Leadership style assessment",
        "Strategic thinking development",
        "Communication skills enhancement",
      ],
    },
    {
      title: "Engineering Organization Assessment",
      description:
        "Comprehensive evaluation of your engineering team's structure, processes, and culture. Identify strengths, opportunities, and actionable improvements.",
      features: [
        "Team structure analysis",
        "Process evaluation",
        "Culture assessment",
        "Recommendations report",
      ],
    },
    {
      title: "Fractional CTO / VP Engineering",
      description:
        "Part-time executive leadership for startups and growing companies. Get experienced engineering leadership without the full-time commitment.",
      features: [
        "Strategic technical direction",
        "Team building and hiring",
        "Process implementation",
        "Board and investor support",
      ],
    },
    {
      title: "Technical Due Diligence",
      description:
        "M&A technical assessment and risk evaluation. Understand the technical health, scalability, and risks of potential acquisitions or investments.",
      features: [
        "Codebase evaluation",
        "Architecture assessment",
        "Team capability review",
        "Risk identification",
      ],
    },
    {
      title: "Production Reliability Consulting",
      description:
        "Improve system reliability and operational excellence. Implement best practices for monitoring, incident response, and continuous improvement.",
      features: [
        "SRE practice implementation",
        "Incident management setup",
        "Monitoring strategy",
        "Post-mortem processes",
      ],
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold text-neutral-900">Services</h1>
          <p className="text-lg text-neutral-600">
            I offer a range of consulting services to help organizations build
            high-performing engineering teams and achieve technical excellence.
            Each engagement is tailored to your specific needs and goals.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="rounded-lg bg-neutral-900 p-8 text-center md:p-12">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Let&apos;s Work Together
          </h2>
          <p className="mb-8 text-neutral-300">
            Have a specific challenge or need something not listed here? I&apos;m
            happy to discuss custom engagements tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
