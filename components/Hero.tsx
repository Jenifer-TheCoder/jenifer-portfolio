import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-16 overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid" />

      {/* Amber glow blob */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-16">
        {/* Left: Text */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-4">
            Hey, I&apos;m
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Jenifer<br />
            <span className="text-amber-600">Rajendren</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium mb-3">
            CTO · Software Architect · Founder
          </p>
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-lg mx-auto md:mx-0">
            Architecting scalable systems, shipping real products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors text-center shadow-lg shadow-amber-600/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-colors text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-4 rounded-full bg-amber-600/15 blur-2xl" />
            {/* Amber ring */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-amber-600/70 shadow-2xl shadow-amber-600/20">
              <Image
                src="/profile.jpg"
                alt="Jenifer Rajendren"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-2 -left-4 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 shadow-xl">
              <p className="text-xs text-gray-400">Founder of</p>
              <p className="text-sm font-semibold text-amber-600">Aceinterview AI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
