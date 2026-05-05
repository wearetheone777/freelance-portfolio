"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/utils/i18n";
import { t } from "@/utils/i18n";
import { GradientButton } from "@/components/shared/GradientButton";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ContactCTA() {
  const { locale } = useLanguage();

  return (
    <section className="py-24 relative">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 p-12 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t(translations.contact.title, locale)}
            </h2>
            <p className="text-white/50 max-w-lg mx-auto mb-8">
              {t(translations.contact.subtitle, locale)}
            </p>
            <Link href="/contact">
              <GradientButton variant="primary" size="lg">
                {t(translations.hero.cta, locale)}
                <ArrowRight className="w-4 h-4 ml-2" />
              </GradientButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
