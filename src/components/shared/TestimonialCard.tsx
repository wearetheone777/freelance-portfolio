"use client";

import { Testimonial } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/utils/i18n";
import { cn } from "@/utils/cn";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  index = 0,
  className,
}: TestimonialCardProps) {
  const { locale } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/10",
        "transition-all duration-500",
        className
      )}
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-white/5" />

      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-white/10"
          style={{ backgroundImage: `url(${testimonial.avatar})` }}
        />
        <div>
          <p className="text-sm font-semibold text-white">
            {t(testimonial.name, locale)}
          </p>
          <p className="text-xs text-white/50">{t(testimonial.role, locale)}</p>
        </div>
      </div>

      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-3.5 h-3.5",
              i < testimonial.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-white/20"
            )}
          />
        ))}
      </div>

      <p className="text-sm text-white/70 leading-relaxed">
        &ldquo;{t(testimonial.content, locale)}&rdquo;
      </p>
    </motion.div>
  );
}
