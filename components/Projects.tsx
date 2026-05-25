const featuredProjects = [
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
      "An AI-powered operational platform built for F&B businesses. Automates daily operations, streamlines order management, and provides intelligent insights to help restaurant and food-service teams run more efficiently.",
    tech: ["React", "TypeScript", "Node.js", "AI/ML", "PostgreSQL"],
    liveUrl: "https://tansuai.com",
    githubUrl: "#",
    featured: false,
  },
];

const githubRepos = [
  {
    name: "Build-a-Weather-Console-App-Using-Rust",
    description: "Real-time weather application using Rust, async Tokio, and the reqwest crate. A beginner-friendly deep dive into Rust and API interactions.",
    language: "Rust",
    stars: 3,
    url: "https://github.com/Jenifer-TheCoder/Build-a-Weather-Console-App-Using-Rust",
  },
  {
    name: "Realtime-Collaborative-Text-Editor-in-Rust",
    description: "Realtime collaborative text editor built in Rust — demonstrates CRDT-style conflict resolution and WebSocket-based sync.",
    language: "Rust",
    stars: 3,
    url: "https://github.com/Jenifer-TheCoder/Realtime-Collaborative-Text-Editor-in-Rust",
  },
  {
    name: "AI-Interview-Coach-using-Python-and-OpenAI-API",
    description: "AI-powered interview coaching tool using Python and the OpenAI API. Provides adaptive questions and feedback to prep candidates for real interviews.",
    language: "Python",
    stars: 2,
    url: "https://github.com/Jenifer-TheCoder/AI-Interview-Coach-using-Python-and-OpenAI-API",
  },
  {
    name: "Real-Time-Chat-App-in-Rust",
    description: "Real-time chat application using Rust and WebSockets, with a lightweight HTML/JS client interface.",
    language: "Rust",
    stars: 1,
    url: "https://github.com/Jenifer-TheCoder/Real-Time-Chat-App-in-Rust",
  },
  {
    name: "a-Rust-Full-Stack-Web-App-with-Yew-and-Actix-Web",
    description: "A full-stack Rust web application built with Yew (frontend WASM framework) and Actix-Web on the backend.",
    language: "Rust",
    stars: 0,
    url: "https://github.com/Jenifer-TheCoder/a-Rust-Full-Stack-Web-App-with-Yew-and-Actix-Web",
  },
  {
    name: "Video-Chat-App-With-WebRTC",
    description: "Peer-to-peer video chat application built with WebRTC — demonstrates signaling, ICE negotiation, and media streams.",
    language: "HTML/JS",
    stars: 0,
    url: "https://github.com/Jenifer-TheCoder/Video-Chat-App-With-WebRTC",
  },
];

const languageColors: Record<string, string> = {
  Rust: "text-orange-400 bg-orange-400/10 border-orange-400/20",
  Python: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  TypeScript: "text-blue-300 bg-blue-300/10 border-blue-300/20",
  "HTML/JS": "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Featured Products */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-amber-600" />
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest">
            Projects
          </p>
        </div>
        <h2 className="text-4xl font-bold text-white mb-12">
          What I&apos;ve shipped.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {featuredProjects.map((project) => (
            <div
              key={project.name}
              className={`relative bg-zinc-900 border rounded-xl p-6 flex flex-col gap-4 hover:border-amber-600/60 transition-all hover:shadow-lg hover:shadow-amber-600/5 ${
                project.featured
                  ? "border-amber-600/40 md:col-span-2 shadow-md shadow-amber-600/10"
                  : "border-zinc-800"
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold text-amber-600 bg-amber-600/10 border border-amber-600/20 px-2 py-1 rounded-md uppercase tracking-wider">
                    Featured
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs bg-zinc-800 text-gray-300 rounded-md border border-zinc-700">
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
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Open Source / GitHub */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-amber-600" />
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest">
            Open Source
          </p>
        </div>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-white">From GitHub.</h3>
          <a
            href="https://github.com/Jenifer-TheCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-amber-600 transition-colors flex items-center gap-1"
          >
            View all repos
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {githubRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex flex-col gap-3 hover:border-amber-600/50 transition-all hover:shadow-md hover:shadow-amber-600/5 group"
            >
              <div className="flex items-start justify-between gap-2">
                <svg className="w-5 h-5 text-gray-500 shrink-0 mt-0.5 group-hover:text-amber-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                {repo.stars > 0 && (
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {repo.stars}
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-gray-200 leading-snug group-hover:text-white transition-colors">
                {repo.name.replace(/-/g, " ").replace(/a /, "").trim()}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed flex-1">{repo.description}</p>
              <span className={`self-start text-xs px-2 py-0.5 rounded border font-medium ${languageColors[repo.language] || "text-gray-400 bg-gray-400/10 border-gray-400/20"}`}>
                {repo.language}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
