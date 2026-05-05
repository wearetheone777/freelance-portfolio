"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { t, translations } from "@/utils/i18n";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { GradientButton } from "@/components/shared/GradientButton";
import Link from "next/link";

export function Services() {
  const { locale } = useLanguage();
  const featured = services.filter((s) => s.featured);

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t(translations.services.title, locale)}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            {t(translations.services.subtitle, locale)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <GradientButton variant="outline">
              {locale === "zh" ? "查看全部服务" : "View All Services"}
            </GradientButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
