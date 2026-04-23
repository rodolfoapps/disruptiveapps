import type { Metadata } from "next";
import { SupportForm } from "./SupportForm";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Disruptive Apps products. Report issues, request features, or ask questions about our Chrome extensions and tools.",
};

export default function SupportPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
        Support
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        How can we help?
      </h1>
      <p className="text-gray-400 mb-12">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      <SupportForm />

      <div className="border-t border-white/10 mt-16 pt-8">
        <h2 className="text-lg font-bold text-white mb-4">
          Common Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "How do I activate my Pro license?",
              a: 'Click the extension icon in Chrome, click "Enter license key", paste the key from your purchase email, and click Activate.',
            },
            {
              q: "I didn't receive my license key",
              a: "Check your spam folder for an email from LemonSqueezy. If you still can't find it, submit a support request above with your purchase email.",
            },
            {
              q: "The extension isn't extracting reviews",
              a: 'Make sure you\'re on a Google Maps business page and have clicked the "Reviews" tab so the reviews section is visible.',
            },
            {
              q: "Can I use my license on multiple devices?",
              a: "Yes — your Pro license works on up to 5 devices. Just enter the same license key on each one.",
            },
          ].map((faq) => (
            <div key={faq.q}>
              <h3 className="text-sm font-semibold text-white">{faq.q}</h3>
              <p className="text-sm text-gray-500 mt-1">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
