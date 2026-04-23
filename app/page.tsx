import Link from "next/link";

const categories = [
  {
    title: "Chrome Extensions",
    desc: "Browser tools that automate tedious tasks and extract valuable data from the web.",
    href: "/extensions",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Web Applications",
    desc: "Full-stack web apps built with modern frameworks, optimized for performance and scale.",
    href: "/solutions",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Data & Automation",
    desc: "Scrapers, pipelines, and automation tools that turn manual work into one-click workflows.",
    href: "/solutions",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "SEO & Marketing Tools",
    desc: "Software that helps businesses rank higher, convert more, and understand their market.",
    href: "/solutions",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Disruptive Apps
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
            Software that solves problems{" "}
            <span className="text-cyan-400">others ignore.</span>
          </h1>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl leading-relaxed">
            We build Chrome extensions, web applications, and automation tools
            that turn complex workflows into one-click solutions. Clean code,
            fast delivery, real results.
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              href="/extensions"
              className="bg-cyan-500 hover:bg-cyan-400 text-[#0a0a0f] font-semibold px-6 py-3 rounded-lg transition text-sm"
            >
              Browse Extensions
            </Link>
            <Link
              href="/solutions"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-lg transition text-sm"
            >
              Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-[#16213e] to-[#1a1a2e] border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 bg-[#1a1a2e] rounded-2xl flex items-center justify-center text-4xl border border-white/10 flex-shrink-0">
            &#9733;
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
              Featured Extension
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Google Reviews Extractor
            </h2>
            <p className="text-gray-400 mt-2">
              Download every Google Maps review into a clean CSV file — names,
              ratings, dates, and full review text. No API needed.
            </p>
          </div>
          <Link
            href="/extensions/google-reviews-extractor"
            className="bg-cyan-500 hover:bg-cyan-400 text-[#0a0a0f] font-semibold px-6 py-3 rounded-lg transition text-sm whitespace-nowrap"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white mb-2">What We Build</h2>
        <p className="text-gray-500 mb-10">
          Tools and software across four categories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group bg-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-white/[0.04] transition"
            >
              <div className="text-cyan-400 mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
