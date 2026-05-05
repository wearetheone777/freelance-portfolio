"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { t, translations } from "@/utils/i18n";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

export function Testimonials() {
  const { locale } = useLanguage();

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t(translations.testimonials.title, locale)}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            {t(translations.testimonials.subtitle, locale)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(0, 2).map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
