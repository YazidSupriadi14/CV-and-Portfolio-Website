"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  type ProjectCategory,
  type Project,
} from "@/data";
import { cn } from "@/lib/utils";

const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  "All": "",
  "AI & Machine Learning": "text-violet-400 bg-violet-500/10 border-violet-500/20",
  "Web Development": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "Data Analytics": "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
};

function ProjectCard({ project }: { project: Project }) {
  const catColor = CATEGORY_COLORS[project.category as ProjectCategory] || "";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="card-base card-hover flex flex-col group h-full"
    >
      {/* Top accent */}
      <div
        className={cn(
          "h-0.5 w-full rounded-t-2xl",
          project.category === "AI & Machine Learning"
            ? "bg-gradient-to-r from-violet-500 to-purple-500"
            : project.category === "Web Development"
            ? "bg-gradient-to-r from-emerald-500 to-teal-500"
            : "bg-gradient-to-r from-cyan-500 to-blue-500"
        )}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Category badge + featured */}
        <div className="flex items-center justify-between mb-4">
          <span className={cn("px-2.5 py-1 text-xs font-medium rounded-lg border", catColor)}>
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2 py-0.5 text-[10px] font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white mb-4 leading-snug group-hover:text-indigo-300 transition-colors duration-200">
          {project.title}
        </h3>

        {/* Problem / Solution / Outcome */}
        <div className="space-y-3 mb-5 flex-1">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-gray-600 mb-1">
              Problem
            </p>
            <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{project.problem}</p>
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-gray-600 mb-1">
              Outcome
            </p>
            <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">{project.outcome}</p>
          </div>
        </div>

        {/* Category tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.categoryTags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-medium text-gray-500 bg-white/[0.03] border border-white/[0.06] rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5 pb-5 border-b border-white/[0.06]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          ) : (
            <span className="text-xs text-gray-700 cursor-not-allowed">
              Private Repo
            </span>
          )}
          {project.demo && (
            <>
              <span className="text-gray-700">·</span>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            </>
          )}
          {project.github && (
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ArrowUpRight className="w-4 h-4 text-indigo-400" />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-base">
        <SectionHeader
          badge="Projects"
          title="Applied NLP from Research to Deployment"
          subtitle="End-to-end AI projects built on real business problems — not toy datasets."
        />

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                activeFilter === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "text-gray-400 border border-white/[0.08] bg-white/[0.03] hover:text-white hover:border-white/20"
              )}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({PROJECTS.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-gray-600 mt-10"
        >
          More projects on{" "}
          <a
            href="https://github.com/YazidSupriadi14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://huggingface.co/yazidsupriadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
          >
            Hugging Face
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
