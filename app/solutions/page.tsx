import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Custom software solutions — web applications, automation tools, data pipelines, and SEO software built by Disruptive Apps.",
};

const solutions = [
  {
    title: "Web Applications",
    desc: "Full-stack web apps with modern React frameworks. From SaaS dashboards to marketing sites, built for speed and scale.",
    features: [
      "Next.js / React",
      "Server-side rendering",
      "Database design",
      "Authentication & payments",
      "Vercel / AWS deployment",
    ],
  },
  {
    title: "Chrome Extensions",
    desc: "Browser extensions that add superpowers to Chrome. Data extraction, workflow automation, and productivity tools.",
    features: [
      "Manifest V3",
      "Content scripts",
      "Popup & sidebar UIs",
      "Chrome Web Store publishing",
      "Freemium monetization",
    ],
    cta: { label: "See Our Extensions", href: "/extensions" },
  },
  {
    title: "Data & Automation",
    desc: "Scrapers, ETL pipelines, and automation tools that eliminate repetitive work and turn raw data into actionable insights.",
    features: [
      "Web scraping",
      "API integrations",
      "Scheduled pipelines",
      "CSV / Excel exports",
      "Database population",
    ],
  },
  {
    title: "SEO & Marketing Tools",
    desc: "Software built for digital marketers — rank tracking, content tools, competitor analysis, and local SEO solutions.",
    features: [
      "Programmatic SEO pages",
      "Topical authority sites",
      "Schema & structured data",
      "Sitemap generation",
      "Performance optimization",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
        Solutions
      </p>
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
        Custom software,{" "}
        <span className="text-cyan-400">built to order.</span>
      </h1>
      <p className="text-lg text-gray-400 max-w-2xl mb-16">
        We develop tailored solutions across four categories. Every project
        starts with the problem, not the technology.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((sol) => (
          <div
            key={sol.title}
            className="bg-white/[0.02] border border-white/10 rounded-xl p-8"
          >
            <h2 className="text-xl font-bold text-white mb-3">{sol.title}</h2>
            <p className="text-sm text-gray-400 mb-5">{sol.desc}</p>
            <ul className="space-y-2">
              {sol.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="text-cyan-400">&#10003;</span>
                  <span className="text-gray-300">{f}</span>
                </li>
              ))}
            </ul>
            {sol.cta && (
              <Link
                href={sol.cta.href}
                className="inline-block mt-6 text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition"
              >
                {sol.cta.label} &rarr;
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-xl font-bold text-white mb-3">
          Have a project in mind?
        </h2>
        <p className="text-gray-500 mb-6">
          Tell us what you need and we&apos;ll scope it out.
        </p>
        <a
          href="mailto:contact@disruptiveapps.dev"
          className="inline-block bg-cyan-500 hover:bg-cyan-400 text-[#0a0a0f] font-semibold px-6 py-3 rounded-lg transition text-sm"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
