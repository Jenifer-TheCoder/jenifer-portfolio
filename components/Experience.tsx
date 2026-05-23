const experiences = [
    {
    role: "Co-Founder & CTO",
    company: "Tansu AI",
    period: "2025 – Present",
    description:
      "Founded and lead the engineering of an AI-powered Operational platform for F&B businesses. Responsible for product vision, system architecture, team building, and end-to-end delivery of the platform serving clients already.",
  },
  {
    role: "Founder & CTO",
    company: "Aceinterview AI",
    period: "2025 – Present",
    description:
      "Founded and lead the engineering of an AI-powered interview preparation platform. Responsible for product vision, system architecture, team building, and end-to-end delivery of the platform serving thousands of users.",
  },
  {
    role: "Software Architect",
    company: "Enterprise & Startup Engagements",
    period: "2018 – 2023",
    description:
      "Designed and delivered scalable backend systems, microservices architectures, and cloud-native solutions for multiple organizations. Led cross-functional engineering teams across domains including fintech, healthtech, and SaaS.",
  },
  {
    role: "Creator & Educator",
    company: "Let Us Code Together (YouTube)",
    period: "2020 – Present",
    description:
      "Produce technical content on software engineering, system design, and career development. Built a community of developers learning to grow their engineering skills and break into top-tier companies.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-zinc-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-amber-600" />
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest">
            Experience
          </p>
        </div>
        <h2 className="text-4xl font-bold text-white mb-12">
          What I&apos;ve built.
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-zinc-700" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-16">
                {/* Dot */}
                <div className="absolute left-[-4px] md:left-[12px] top-1.5 w-3 h-3 rounded-full bg-amber-600 border-2 border-zinc-950" />

                <p className="text-sm text-gray-500 mb-1">{exp.period}</p>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-amber-600 font-medium text-sm mb-3">
                  {exp.company}
                </p>
                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
