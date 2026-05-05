"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { t, translations } from "@/utils/i18n";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { motion } from "framer-motion";

export default function TestimonialsPage() {
  const { locale } = useLanguage();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t(translations.testimonials.title, locale)}
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            {t(translations.testimonials.subtitle, locale)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
