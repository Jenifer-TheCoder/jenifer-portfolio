const projects = [
  {
    name: "Aceinterview AI",
    description:
      "An AI-powered interview preparation platform that helps candidates ace their technical and behavioral interviews. Features personalized coaching, real-time feedback, and adaptive practice sessions tailored to each user's target role and company.",
    tech: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "AWS"],
    liveUrl: "https://aceinterviewai.com",
    githubUrl: "#",
    featured: true,
  },
  {
    name: "Tansu AI",
    description:
      "An intelligent AI assistant platform built for developers and teams. Streamlines workflows, automates repetitive tasks, and integrates seamlessly with existing developer toolchains.",
    tech: ["React", "TypeScript", "Node.js", "AI/ML"],
    liveUrl: "https://tansuai.com",
    githubUrl: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-amber-600" />
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest">
            Projects
          </p>
        </div>
        <h2 className="text-4xl font-bold text-white mb-12">
          What I&apos;ve shipped.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`bg-zinc-900 border rounded-xl p-6 flex flex-col gap-4 hover:border-amber-600 transition-colors ${
                project.featured
                  ? "border-amber-600/40 md:col-span-2"
                  : "border-zinc-800"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  {project.featured && (
                    <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2 block">
                      Featured Project
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs bg-zinc-800 text-gray-300 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-amber-600 hover:text-amber-500 transition-colors flex items-center gap-1"
                >
                  Live Site
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-400 hover:text-gray-300 transition-colors flex items-center gap-1"
                >
                  GitHub
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
