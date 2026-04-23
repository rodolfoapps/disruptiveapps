"use client";

import { useState } from "react";

export function SupportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Send via mailto fallback — opens user's email client with pre-filled fields
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const product = data.get("product") as string;
    const type = data.get("type") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`[${type}] ${product} — Support Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProduct: ${product}\nType: ${type}\n\n${message}`
    );

    window.location.href = `mailto:support@disruptiveapps.dev?subject=${subject}&body=${body}`;

    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
        <span className="text-green-400 text-3xl">&#10003;</span>
        <h3 className="text-white font-semibold mt-3 mb-2">
          Email client opened!
        </h3>
        <p className="text-sm text-gray-400">
          Send the pre-filled email and we&apos;ll respond within 24 hours. If
          your email client didn&apos;t open, email us directly at{" "}
          <a
            href="mailto:support@disruptiveapps.dev"
            className="text-cyan-400 hover:text-cyan-300"
          >
            support@disruptiveapps.dev
          </a>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-gray-500 hover:text-gray-300 underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">Product</label>
          <select
            name="product"
            required
            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition"
          >
            <option value="" className="bg-[#0a0a0f]">
              Select a product
            </option>
            <option
              value="Google Reviews Extractor"
              className="bg-[#0a0a0f]"
            >
              Google Reviews Extractor
            </option>
            <option value="Other" className="bg-[#0a0a0f]">
              Other
            </option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            Request Type
          </label>
          <select
            name="type"
            required
            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition"
          >
            <option value="" className="bg-[#0a0a0f]">
              Select type
            </option>
            <option value="Bug Report" className="bg-[#0a0a0f]">
              Bug Report
            </option>
            <option value="License Issue" className="bg-[#0a0a0f]">
              License Issue
            </option>
            <option value="Feature Request" className="bg-[#0a0a0f]">
              Feature Request
            </option>
            <option value="General Question" className="bg-[#0a0a0f]">
              General Question
            </option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1.5">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition resize-none"
          placeholder="Describe your issue or question in detail..."
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-[#0a0a0f] font-semibold py-3 rounded-lg transition text-sm"
      >
        {sending ? "Opening email..." : "Submit Support Request"}
      </button>

      <p className="text-xs text-gray-600 text-center">
        Or email us directly at{" "}
        <a
          href="mailto:support@disruptiveapps.dev"
          className="text-cyan-400/60 hover:text-cyan-400"
        >
          support@disruptiveapps.dev
        </a>
      </p>
    </form>
  );
}
