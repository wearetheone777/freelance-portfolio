"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { t, translations } from "@/utils/i18n";
import { GradientButton } from "@/components/shared/GradientButton";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const { locale } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-cyan-400 mb-8">
            <Sparkles className="w-4 h-4" />
            <span>{locale === "zh" ? "接单中 · 快速响应" : "Available · Fast Response"}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg sm:text-xl text-white/60 mb-2">
            {t(translations.hero.greeting, locale)}
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t(translations.hero.name, locale)}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl sm:text-2xl font-medium text-white/80 mb-4">
            {t(translations.hero.role, locale)}
          </p>
          <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-10">
            {t(translations.hero.description, locale)}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <GradientButton variant="primary" size="lg">
              {t(translations.hero.cta, locale)}
            </GradientButton>
          </Link>
          <Link href="/projects">
            <GradientButton variant="secondary" size="lg">
              {t(translations.hero.viewProjects, locale)}
            </GradientButton>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#services"
          className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
