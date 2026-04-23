import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chrome Extensions",
  description:
    "Browse Chrome extensions by Disruptive Apps — data extraction, automation, and productivity tools for your browser.",
};

const extensions = [
  {
    name: "Google Reviews Extractor",
    tagline: "Download all Google Maps reviews to CSV in one click.",
    status: "Live",
    pricing: "Free (30 reviews) / Pro $9.99",
    href: "/extensions/google-reviews-extractor",
    icon: "&#9733;",
  },
  // Add more extensions here as you build them
];

export default function ExtensionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
        Chrome Extensions
      </p>
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
        Browser tools that{" "}
        <span className="text-cyan-400">just work.</span>
      </h1>
      <p className="text-lg text-gray-400 max-w-2xl mb-16">
        Chrome extensions built with Manifest V3 — lightweight, secure, and
        designed to solve one problem really well.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {extensions.map((ext) => (
          <Link
            key={ext.name}
            href={ext.href}
            className="group bg-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-cyan-500/30 hover:bg-white/[0.04] transition flex flex-col"
          >
            <div className="w-14 h-14 bg-[#16213e] rounded-xl flex items-center justify-center text-2xl border border-white/10 mb-4">
              <span dangerouslySetInnerHTML={{ __html: ext.icon }} />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                {ext.name}
              </h2>
              <span className="text-[10px] font-bold bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full uppercase tracking-wider">
                {ext.status}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4 flex-1">
              {ext.tagline}
            </p>
            <p className="text-xs text-gray-600">{ext.pricing}</p>
          </Link>
        ))}

        {/* Coming soon placeholder */}
        <div className="bg-white/[0.01] border border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
          <p className="text-gray-600 text-sm">More extensions coming soon.</p>
          <p className="text-gray-700 text-xs mt-1">
            Have an idea?{" "}
            <a
              href="mailto:contact@disruptiveapps.dev"
              className="text-cyan-400/60 hover:text-cyan-400"
            >
              Let us know
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
