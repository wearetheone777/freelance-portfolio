"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { t, translations } from "@/utils/i18n";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { GradientButton } from "@/components/shared/GradientButton";
import Link from "next/link";

export function Projects() {
  const { locale } = useLanguage();
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t(translations.projects.title, locale)}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            {t(translations.projects.subtitle, locale)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <GradientButton variant="outline">
              {t(translations.projects.viewAll, locale)}
            </GradientButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
