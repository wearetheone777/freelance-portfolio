"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { t, translations } from "@/utils/i18n";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const { locale } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const allTechs = Array.from(new Set(projects.flatMap((p) => p.techStack)));
  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.techStack.includes(filter));

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
            {t(translations.projects.title, locale)}
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            {t(translations.projects.subtitle, locale)}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={cn(
              "px-4 py-1.5 text-sm rounded-full border transition-all duration-200 cursor-pointer",
              filter === "all"
                ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white border-transparent"
                : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
            )}
          >
            {t(translations.projects.filterAll, locale)}
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={cn(
                "px-4 py-1.5 text-sm rounded-full border transition-all duration-200 cursor-pointer",
                filter === tech
                  ? "bg-gradient-to-r from-cyan-500 to-pink-500 text-white border-transparent"
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
              )}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
