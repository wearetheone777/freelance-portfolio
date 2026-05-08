"use client";

import { use } from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { t, translations } from "@/utils/i18n";
import { projects } from "@/data/projects";
import { GradientButton } from "@/components/shared/GradientButton";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  ChevronLeft,
  Store,
  CreditCard,
  BarChart3,
  Package,
  FileText,
  Image,
  Music,
  Zap,
  MapPin,
  FolderOpen,
  Download,
  WifiOff,
  Database,
  PieChart,
  Target,
  Tag,
  Upload,
  Edit3,
  MessageSquare,
  Shield,
  Bell,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Store,
  CreditCard,
  BarChart3,
  Package,
  FileText,
  Image,
  Music,
  Zap,
  MapPin,
  FolderOpen,
  Download,
  WifiOff,
  Database,
  PieChart,
  Target,
  Tag,
  Upload,
  Edit3,
  MessageSquare,
  Shield,
  Bell,
};

export function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { locale } = useLanguage();
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              {t(translations.projects.notFound, locale)}
            </h1>
            <p className="text-white/50 mb-8">
              {t(translations.projects.notFoundDesc, locale)}
            </p>
            <Link href="/projects">
              <GradientButton variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t(translations.projects.back, locale)}
              </GradientButton>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  const screenshots = project.screenshots || [];

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors mb-4"
              >
                <ChevronLeft className="w-4 h-4" />
                {t(translations.projects.back, locale)}
              </Link>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                {t(project.title, locale)}
              </h1>
              <p className="text-white/60 max-w-2xl text-lg">
                {t(project.description, locale)}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-pink-500" />
                {t(translations.projects.overview, locale)}
              </h2>
              <p className="text-white/70 leading-relaxed text-base">
                {t(project.overview, locale)}
              </p>
            </motion.section>

            {/* Screenshots */}
            {screenshots.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-1 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-pink-500" />
                  {t(translations.projects.screenshots, locale)}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {screenshots.map((src, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 group cursor-pointer"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${src})` }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {t(translations.projects.techStack, locale)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {t(translations.projects.features, locale)}
              </h3>
              <div className="space-y-3">
                {project.features.map((feature, i) => {
                  const Icon = iconMap[feature.icon] || Zap;
                  return (
                    <div
                      key={i}
                      className="flex gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/20 hover:bg-white/[0.04] transition-all"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-pink-500/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white mb-0.5">
                          {t(feature.title, locale)}
                        </p>
                        <p className="text-xs text-white/50">
                          {t(feature.description, locale)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Live Link */}
            {project.link && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <GradientButton variant="primary" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t(translations.projects.visitLive, locale)}
                  </GradientButton>
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
