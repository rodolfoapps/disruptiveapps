import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Disruptive Apps products and Chrome extensions.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">
        Last updated: April 23, 2026
      </p>

      <div className="space-y-8 text-sm text-gray-400 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Overview</h2>
          <p>
            Disruptive Apps (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
            operates the disruptiveapps.dev website and publishes Chrome
            extensions on the Chrome Web Store. This privacy policy explains how
            we handle information in connection with our products and services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            Data We Collect
          </h2>
          <p className="font-semibold text-white mb-2">
            Short answer: We do not collect, store, or transmit your personal
            data.
          </p>
          <p>
            Our Chrome extensions operate entirely within your browser. No data
            is sent to our servers or any third-party service. Specifically:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400">
            <li>
              We do not collect personally identifiable information (name, email,
              address, etc.) through our extensions.
            </li>
            <li>
              We do not collect browsing history, cookies, or web activity.
            </li>
            <li>
              We do not track your location, IP address, or device information.
            </li>
            <li>
              We do not use analytics, tracking pixels, or telemetry in our
              extensions.
            </li>
            <li>
              All data extracted by our extensions (such as Google Maps reviews)
              is processed locally in your browser and saved directly to your
              device as a file download. It is never transmitted to us or any
              third party.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            Chrome Storage
          </h2>
          <p>
            Our extensions may use{" "}
            <code className="text-cyan-400 bg-white/5 px-1 rounded">
              chrome.storage.sync
            </code>{" "}
            to store your license key locally if you purchase a Pro upgrade. This
            data is:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400">
            <li>Stored locally on your device and synced via your Chrome profile.</li>
            <li>Limited to your license key only — no personal information.</li>
            <li>Never transmitted to our servers.</li>
            <li>
              Validated against the LemonSqueezy licensing API only when you
              manually click &quot;Activate&quot; — this sends only the license
              key, not any personal data.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            Third-Party Services
          </h2>
          <p>
            When you purchase a Pro license, the transaction is handled by{" "}
            <a
              href="https://www.lemonsqueezy.com/privacy"
              className="text-cyan-400 hover:text-cyan-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LemonSqueezy
            </a>
            , our payment processor. LemonSqueezy collects your payment
            information (email, billing details) to process the transaction. We
            do not have access to your full payment details. Please review
            LemonSqueezy&apos;s privacy policy for information on how they
            handle your data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Permissions</h2>
          <p>Our Chrome extensions request the following permissions:</p>
          <ul className="mt-3 space-y-4 text-gray-400">
            <li>
              <span className="text-white font-medium">activeTab</span> — To
              read content from the current tab only when you click the
              extension. We never access other tabs or browse in the background.
            </li>
            <li>
              <span className="text-white font-medium">scripting</span> — To
              inject a script into the active tab that reads page content (e.g.,
              review data). This only runs when you explicitly trigger it.
            </li>
            <li>
              <span className="text-white font-medium">storage</span> — To save
              your license key locally so you don&apos;t have to re-enter it
              every time.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            Data Sharing
          </h2>
          <p>
            We do not sell, transfer, or share user data with any third parties.
            We do not use user data for advertising, analytics, or
            creditworthiness purposes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">
            Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated date. Continued use of
            our products after changes constitutes acceptance of the updated
            policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <p>
            If you have questions about this privacy policy, contact us at:{" "}
            <a
              href="mailto:support@disruptiveapps.dev"
              className="text-cyan-400 hover:text-cyan-300"
            >
              support@disruptiveapps.dev
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
