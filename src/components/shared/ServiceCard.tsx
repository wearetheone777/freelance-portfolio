"use client";

import { Service } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";
import { t, translations } from "@/utils/i18n";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  TabletSmartphone,
  Brain,
  Server,
  Palette,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  TabletSmartphone,
  Brain,
  Server,
  Palette,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
  className?: string;
}

export function ServiceCard({ service, index = 0, className }: ServiceCardProps) {
  const { locale } = useLanguage();
  const IconComponent = iconMap[service.icon] || Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10",
        "transition-all duration-500 hover:-translate-y-1",
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-pink-500/30 transition-all duration-300">
          <IconComponent className="w-6 h-6 text-cyan-400" />
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {t(service.title, locale)}
        </h3>

        <p className="text-sm text-white/60 mb-4">
          {t(service.description, locale)}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {service.price
              ? t(service.price, locale)
              : t(translations.services.contactForPrice, locale)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
