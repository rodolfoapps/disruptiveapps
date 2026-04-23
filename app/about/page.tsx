import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Disruptive Apps builds custom software solutions, Chrome extensions, and automation tools. Learn about our approach.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
        About Us
      </p>
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
        We build tools that <span className="text-cyan-400">get out of the way.</span>
      </h1>
      <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
        Disruptive Apps is a software studio focused on building practical,
        no-nonsense tools. We specialize in Chrome extensions, web applications,
        and automation — anything that takes a painful workflow and makes it
        disappear.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
        {[
          {
            num: "01",
            title: "Identify the Pain",
            desc: "We find workflows that waste time — things people do manually that software should handle.",
          },
          {
            num: "02",
            title: "Build the Solution",
            desc: "Clean code, modern stack, fast execution. No bloat, no unnecessary features. Just what works.",
          },
          {
            num: "03",
            title: "Ship & Iterate",
            desc: "We ship fast, listen to users, and improve. Every update is driven by real feedback.",
          },
        ].map((step) => (
          <div
            key={step.num}
            className="bg-white/[0.02] border border-white/10 rounded-xl p-6"
          >
            <span className="text-cyan-400 text-sm font-mono font-bold">
              {step.num}
            </span>
            <h3 className="text-white font-semibold mt-2 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-500">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-12">
        <h2 className="text-xl font-bold text-white mb-4">Our Stack</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "TypeScript",
            "Next.js",
            "React",
            "Tailwind CSS",
            "Chrome Extensions (MV3)",
            "Node.js",
            "Vercel",
            "PostgreSQL",
          ].map((tech) => (
            <span
              key={tech}
              className="text-xs text-gray-400 border border-white/10 rounded-full px-3 py-1.5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 pt-12 mt-12">
        <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
        <p className="text-gray-400">
          Have a project in mind or want to collaborate?
        </p>
        <a
          href="mailto:contact@disruptiveapps.dev"
          className="inline-block mt-4 bg-cyan-500 hover:bg-cyan-400 text-[#0a0a0f] font-semibold px-6 py-3 rounded-lg transition text-sm"
        >
          contact@disruptiveapps.dev
        </a>
      </div>
    </div>
  );
}
