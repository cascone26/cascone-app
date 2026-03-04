"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-warm-200/50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl text-bark hover:text-hearth transition-colors"
        >
          The Cascones
        </Link>
        <div className="flex items-center gap-4">
          {!isHome && (
            <Link
              href="/"
              className="text-sm text-bark/60 hover:text-bark transition-colors"
            >
              Home
            </Link>
          )}
          <Link
            href="/family"
            className={`text-sm transition-colors ${
              pathname === "/family"
                ? "text-hearth font-medium"
                : "text-bark/60 hover:text-bark"
            }`}
          >
            Family
          </Link>
        </div>
      </div>
    </nav>
  );
}
