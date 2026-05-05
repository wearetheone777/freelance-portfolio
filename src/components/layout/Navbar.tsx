"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { t, translations } from "@/utils/i18n";
import { cn } from "@/utils/cn";
import { LanguageSwitch } from "@/components/shared/LanguageSwitch";
import { Menu, X } from "lucide-react";

const navItems = [
  { key: "home" as const, href: "/" },
  { key: "projects" as const, href: "/projects" },
  { key: "services" as const, href: "/services" },
  { key: "testimonials" as const, href: "/testimonials" },
  { key: "contact" as const, href: "/contact" },
];

export function Navbar() {
  const { locale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-pink-300 transition-all"
          >
            &lt;DEV /&gt;
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="px-3 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {t(translations.nav[item.key], locale)}
              </Link>
            ))}
            <div className="ml-2">
              <LanguageSwitch />
            </div>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitch />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white/70 hover:text-white cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/5">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {t(translations.nav[item.key], locale)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
