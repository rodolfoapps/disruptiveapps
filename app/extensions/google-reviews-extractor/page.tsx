import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Reviews Extractor — Download Google Maps Reviews to CSV",
  description:
    "Extract all Google reviews to CSV in one click. Names, ratings, dates & full review text. No API needed — works directly from Google Maps.",
  openGraph: {
    title: "Google Reviews Extractor — Download Google Maps Reviews to CSV",
    description:
      "Extract all Google reviews to CSV in one click. Names, ratings, dates & full review text. No API needed.",
  },
};

const features = [
  {
    title: "One-Click Export",
    desc: "Open any business on Google Maps, click Extract, get a CSV. That simple.",
  },
  {
    title: "Auto-Scrolling",
    desc: "Automatically scrolls through all reviews to load them — even businesses with thousands.",
  },
  {
    title: "Full Review Text",
    desc: "Expands truncated reviews to capture every word, not just the preview snippet.",
  },
  {
    title: "Sort Before Export",
    desc: "Sort by newest, highest rated, lowest rated, or most relevant before downloading.",
  },
  {
    title: "Clean CSV Output",
    desc: "Excel-compatible CSV with proper encoding. No weird characters, no broken formatting.",
  },
  {
    title: "No API Keys Required",
    desc: "Works directly from your browser. No account, no setup, no API configuration.",
  },
];

const useCases = [
  {
    who: "Business Owners",
    what: "Monitor your reputation, track review trends, and respond to feedback with full data exports.",
  },
  {
    who: "Marketing Agencies",
    what: "Run competitor analysis, build review reports for clients, and identify market opportunities.",
  },
  {
    who: "SEO Professionals",
    what: "Audit local business listings, analyze review sentiment, and benchmark against competitors.",
  },
  {
    who: "Researchers",
    what: "Collect review datasets for analysis — sentiment, ratings distribution, and customer feedback patterns.",
  },
];

export default function GoogleReviewsExtractorPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-[#16213e] rounded-xl flex items-center justify-center text-2xl border border-white/10">
              &#9733;
            </div>
            <div>
              <span className="text-[10px] font-bold bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Available Now
              </span>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
            Google Reviews Extractor
          </h1>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl">
            Download every Google Maps review into a clean CSV file — names,
            star ratings, dates, and full review text. No API needed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://disruptiveapps.lemonsqueezy.com/checkout/buy/6bf5d144-81b6-4578-ba96-7447f68bc78a"
              className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-[#0a0a0f] font-bold px-8 py-4 rounded-lg transition text-center"
            >
              Get Pro — $9.99 (Unlimited)
            </a>
            <a
              href="#install"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-lg transition text-sm text-center"
            >
              Install Free Version
            </a>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-8">
            <h3 className="text-lg font-bold text-white">Free</h3>
            <p className="text-3xl font-bold text-white mt-2">
              $0<span className="text-sm text-gray-500 font-normal"> forever</span>
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Up to 30 reviews per export",
                "Name, stars, date, review text",
                "CSV download",
                "Sort reviews",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="text-cyan-400">&#10003;</span>
                  <span className="text-gray-300">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div className="bg-gradient-to-br from-amber-500/10 to-yellow-400/5 border border-amber-500/30 rounded-xl p-8 relative">
            <span className="absolute top-4 right-4 text-[10px] font-bold bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Most Popular
            </span>
            <h3 className="text-lg font-bold text-white">Pro</h3>
            <p className="text-3xl font-bold text-white mt-2">
              $9.99
              <span className="text-sm text-gray-500 font-normal">
                {" "}one-time
              </span>
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Unlimited reviews per export",
                "Name, stars, date, review text",
                "CSV download",
                "Sort reviews",
                "Lifetime access — no subscription",
                "Works on up to 5 devices",
                "Priority support",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="text-amber-400">&#10003;</span>
                  <span className="text-gray-300">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://disruptiveapps.lemonsqueezy.com/checkout/buy/6bf5d144-81b6-4578-ba96-7447f68bc78a"
              className="block mt-6 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-[#0a0a0f] font-bold px-6 py-3 rounded-lg transition text-center text-sm"
            >
              Get Pro — $9.99
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/[0.02] border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Go to Google Maps",
              desc: 'Open any business profile and click the "Reviews" tab.',
            },
            {
              step: "2",
              title: "Click Extract",
              desc: "Click the extension icon, choose your sort order, and hit Extract All Reviews.",
            },
            {
              step: "3",
              title: "Download CSV",
              desc: "The extension scrolls, loads, and extracts every review into a clean CSV file.",
            },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 font-bold text-lg mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="text-white font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CSV columns */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white mb-6">
          What You Get in the CSV
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">
                  Column
                </th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">
                  Example
                </th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-mono text-cyan-400">Name</td>
                <td className="py-3 px-4">Sarah Johnson</td>
                <td className="py-3 px-4 text-gray-500">Reviewer&apos;s display name</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-mono text-cyan-400">Stars</td>
                <td className="py-3 px-4">5</td>
                <td className="py-3 px-4 text-gray-500">Rating from 1-5</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 px-4 font-mono text-cyan-400">Date</td>
                <td className="py-3 px-4">3 months ago</td>
                <td className="py-3 px-4 text-gray-500">When the review was posted</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-mono text-cyan-400">Review</td>
                <td className="py-3 px-4">Excellent service, very professional...</td>
                <td className="py-3 px-4 text-gray-500">Full review text (expanded)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Use cases */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white mb-10">Who It&apos;s For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.who}
              className="bg-white/[0.02] border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-white font-semibold mb-2">{uc.who}</h3>
              <p className="text-sm text-gray-500">{uc.what}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Install section */}
      <section id="install" className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-[#16213e] to-[#1a1a2e] border border-white/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to extract reviews?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Install the extension from the Chrome Web Store. Start with 30 free
            reviews — upgrade to Pro anytime for unlimited exports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Update this href with your Chrome Web Store URL once published */}
            <a
              href="#"
              className="bg-cyan-500 hover:bg-cyan-400 text-[#0a0a0f] font-semibold px-8 py-4 rounded-lg transition text-sm"
            >
              Add to Chrome — Free
            </a>
            <a
              href="https://disruptiveapps.lemonsqueezy.com/checkout/buy/6bf5d144-81b6-4578-ba96-7447f68bc78a"
              className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-[#0a0a0f] font-bold px-8 py-4 rounded-lg transition text-sm"
            >
              Get Pro — $9.99
            </a>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="text-xl font-bold text-white mb-4">Privacy</h2>
        <ul className="space-y-2">
          {[
            "No data is collected or sent to any server.",
            "Reviews are extracted locally in your browser.",
            "The extension only runs when you click it — nothing runs in the background.",
            "No account required for the free version.",
          ].map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm">
              <span className="text-green-400">&#10003;</span>
              <span className="text-gray-400">{p}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
