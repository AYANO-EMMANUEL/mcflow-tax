import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b border-green-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src="/mcflow_logo.png" alt="" className="w-8 h-8" />
            <span className="text-xl font-bold text-green-800">McFlow</span>
            <span className="text-xs text-green-600">API</span>
          </Link>
          <div className="flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Ask AI or search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-green-50 border border-green-200 rounded-lg text-sm text-green-900 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <svg
                className="absolute left-3 top-2.5 w-4 h-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/guides"
              className={`text-sm transition-colors ${
                isActive("/guides")
                  ? "text-green-600 font-semibold"
                  : "text-green-700 hover:text-green-600"
              }`}
            >
              Guides
            </Link>
            <Link
              to="/api-reference"
              className={`text-sm transition-colors ${
                isActive("/api-reference")
                  ? "text-green-600 font-semibold"
                  : "text-green-700 hover:text-green-600"
              }`}
            >
              API Reference
            </Link>
            <Link
              to="/pricing"
              className={`text-sm transition-colors ${
                isActive("/pricing")
                  ? "text-green-600 font-semibold"
                  : "text-green-700 hover:text-green-600"
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className={`text-sm transition-colors ${
                isActive("/about")
                  ? "text-green-600 font-semibold"
                  : "text-green-700 hover:text-green-600"
              }`}
            >
              About
            </Link>
            <a
              href="https://dashboard.mcflow.ng"
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
