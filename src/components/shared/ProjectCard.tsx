"use client";

import { Project } from "@/types";
import { useLanguage } from "@/hooks/useLanguage";
import { t } from "@/utils/i18n";
import { cn } from "@/utils/cn";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index?: number;
  className?: string;
}

export function ProjectCard({ project, index = 0, className }: ProjectCardProps) {
  const { locale } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10",
        "transition-all duration-500",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        {project.featured && (
          <span className="absolute top-3 right-3 px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white">
            ✦ {locale === "zh" ? "精选" : "Featured"}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {t(project.title, locale)}
        </h3>
        <p className="text-sm text-white/60 mb-4 line-clamp-2">
          {t(project.description, locale)}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-white/10 text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {locale === "zh" ? "查看详情" : "View Details"}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
