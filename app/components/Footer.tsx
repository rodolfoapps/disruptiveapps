import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-lg font-bold text-white tracking-tight">
              Disruptive<span className="text-cyan-400">Apps</span>
            </span>
            <p className="text-sm text-gray-500 mt-2 max-w-xs">
              Custom software solutions and browser extensions that solve real
              problems.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/extensions"
                  className="text-sm text-gray-500 hover:text-gray-300 transition"
                >
                  Chrome Extensions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-sm text-gray-500 hover:text-gray-300 transition"
                >
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 hover:text-gray-300 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@disruptiveapps.dev"
                  className="text-sm text-gray-500 hover:text-gray-300 transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-sm text-gray-500 hover:text-gray-300 transition"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Disruptive Apps. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
