"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Languages } from "lucide-react";

export function LanguageSwitch() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
        bg-white/5 border border-white/10 backdrop-blur-sm
        hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
    >
      <Languages className="w-4 h-4 text-cyan-400" />
      <span className="text-white/80">{locale === "zh" ? "EN" : "中"}</span>
    </button>
  );
}
