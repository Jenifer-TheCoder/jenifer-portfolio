const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "AWS",
  "System Design",
  "AI / ML",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "REST & GraphQL",
  "Microservices",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-amber-600" />
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest">
                About
              </p>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Building what matters.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I&apos;m Jenifer Rajendren — a CTO and Software Architect with a passion
                for building systems that scale. I specialize in designing robust,
                high-performance architectures and leading engineering teams to ship
                products that create real impact.
              </p>
              <p>
                As the Founder of{" "}
                <span className="text-amber-600 font-medium">Aceinterview AI</span>,
                I&apos;m building the next generation of AI-powered interview preparation —
                helping candidates land their dream jobs through intelligent, personalized
                coaching.
              </p>
              <p>
                Beyond building products, I share my knowledge through my YouTube channel{" "}
                <span className="text-amber-600 font-medium">Let Us Code Together</span>,
                where I teach software engineering, system design, and career growth to
                thousands of developers.
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-amber-600" />
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest">
                Tech Stack
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-zinc-900 border border-zinc-700 text-gray-300 rounded-md hover:border-amber-600 hover:text-amber-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
