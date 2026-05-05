"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { t, translations } from "@/utils/i18n";
import { Heart } from "lucide-react";

export function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-white/5 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            {t(translations.footer.rights, locale)}
          </p>
          <p className="flex items-center gap-1 text-sm text-white/40">
            {t(translations.footer.builtWith, locale)} <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
