const videos = [
  {
    id: "MU25RAORpCM",
    title: "The Ultimate Python Programming Roadmap Before You Start",
  },
  {
    id: "leANqVJnH7w",
    title: "Don't Make These SQL Interview Mistakes",
  },
  {
    id: "nwGhADvFbW8",
    title: "One Year Of Entrepreneurship — Software Engineer to Tech Founder",
  },
  {
    id: "0L_BBwZcnuU",
    title: "Web Developer Roadmap 2026 | Frontend Foundation",
  },
  {
    id: "fHGNJ6PRARM",
    title: "Web Development Roadmap 2026 | The AI Powered Path",
  },
  {
    id: "QeaEWQYGVjY",
    title: "LLMs vs AI Agents — Differences Explained in Tamil",
  },
];

export default function YouTubeContent() {
  return (
    <section id="content" className="py-24 px-6 bg-zinc-900/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-0.5 bg-amber-600" />
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest">
            Content
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white">Let Us Code Together.</h2>
            <p className="text-gray-400 mt-2">
              I teach system design, software engineering, and career growth on YouTube.
            </p>
          </div>
          <a
            href="https://youtube.com/@letuscodetogetherofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-red-600/10 border border-red-600/30 text-red-400 hover:bg-red-600/20 hover:border-red-600/50 rounded-lg transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-amber-600/50 transition-all hover:shadow-lg hover:shadow-amber-600/5"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-video overflow-hidden bg-zinc-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Title */}
              <div className="p-4">
                <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors leading-snug line-clamp-2">
                  {video.title}
                </p>
                <p className="text-xs text-amber-600 mt-2 font-medium">Let Us Code Together</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
