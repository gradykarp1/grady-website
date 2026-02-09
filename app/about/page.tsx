import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Grady Karp",
  description:
    "Learn about Grady Karp's background, experience, and expertise in engineering leadership.",
};

export default function AboutPage() {
  const experience = [
    {
      role: "Engineering Leader",
      company: "Indeed.com",
      location: "Seattle, Washington",
      description:
        "Leading engineering initiatives focused on operational excellence and team development.",
    },
  ];

  const education = [
    {
      institution: "INSEAD",
      program: "Executive Education",
      year: "2005",
      courses: [
        "Blue Ocean Strategy",
        "Economics of Strategy",
        "Product Development and Innovation",
      ],
    },
  ];

  const skills = [
    "Engineering Leadership",
    "Technical Strategy",
    "Team Development",
    "Operational Excellence",
    "System Architecture",
    "Cross-functional Alignment",
    "Mentorship",
    "Production Reliability",
  ];

  const languages = [
    { name: "English", level: "Native" },
    { name: "French", level: "Full Professional Proficiency" },
    { name: "Spanish", level: "Limited Working Proficiency" },
    { name: "Italian", level: "Limited Working Proficiency" },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="mb-8 text-4xl font-bold text-neutral-900">About Me</h1>

        {/* Bio Section */}
        <section className="mb-16">
          <p className="mb-6 text-lg leading-relaxed text-neutral-600">
            I&apos;m an executive-level technical and business leader with a
            track record of success in engineering leadership and operational
            excellence. Based in Seattle, Washington, I specialize in helping
            organizations build high-performing engineering teams and achieve
            technical excellence.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-neutral-600">
            My expertise spans strategic engineering leadership, technical
            systems architecture, and operational excellence. I&apos;m passionate
            about unifying cross-functional teams, establishing quality
            governance structures, and mentoring engineers across organizational
            domains.
          </p>
          <p className="text-lg leading-relaxed text-neutral-600">
            Throughout my career, I&apos;ve focused on setting R&D objectives,
            improving system reliability, and developing people and teams. I
            believe that great engineering organizations are built on a
            foundation of clear communication, continuous improvement, and a
            commitment to excellence.
          </p>
          <div className="mt-10">
            <Image
              src="/grady-profile.png"
              alt="Grady Karp"
              width={400}
              height={400}
              className="rounded-lg grayscale"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
