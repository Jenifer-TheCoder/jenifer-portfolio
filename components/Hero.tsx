export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4">
          Welcome
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Jenifer Rajendren
        </h1>
        <p className="text-xl md:text-2xl text-amber-600 font-medium mb-6">
          CTO · Software Architect · Founder
        </p>
        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
          Architecting scalable systems, shipping real products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
