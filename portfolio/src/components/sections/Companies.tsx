"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Briefcase } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { COMPANIES } from "@/data";
import { cn } from "@/lib/utils";

export default function Companies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = COMPANIES[activeIndex];

  return (
    <section id="companies" className="section-padding">
      <div className="container-base">
        <SectionHeader
          badge="Experience"
          title="Where I've Made an Impact"
          subtitle="Enterprise-grade engineering meets AI and education across leading Indonesian institutions."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Timeline: left column */}
          <div className="lg:col-span-2 flex flex-col gap-1">
            {COMPANIES.map((company, i) => (
              <button
                key={company.id}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "group relative flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-200",
                  activeIndex === i
                    ? "bg-white/[0.06] border border-indigo-500/30"
                    : "hover:bg-white/[0.03] border border-transparent"
                )}
              >
                {/* Timeline dot + line */}
                <div className="flex flex-col items-center flex-shrink-0 pt-1">
                  <div
                    className={cn(
                      "w-3 h-3 rounded-full border-2 transition-all duration-300",
                      activeIndex === i
                        ? "bg-indigo-500 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]"
                        : company.isCurrent
                        ? "bg-emerald-400 border-emerald-400"
                        : "bg-gray-600 border-gray-600 group-hover:border-indigo-400"
                    )}
                  />
                  {i < COMPANIES.length - 1 && (
                    <div className="w-px h-full min-h-[32px] mt-2 bg-white/[0.06]" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-mono text-gray-500">{company.year}</span>
                    {company.isCurrent && (
                      <span className="px-1.5 py-0.5 text-[10px] font-medium text-emerald-400 bg-emerald-400/10 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p
                    className={cn(
                      "text-sm font-semibold transition-colors duration-200",
                      activeIndex === i ? "text-white" : "text-gray-300 group-hover:text-white"
                    )}
                  >
                    {company.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{company.role}</p>
                </div>

                <ChevronRight
                  className={cn(
                    "w-4 h-4 flex-shrink-0 mt-1 transition-all duration-200",
                    activeIndex === i ? "text-indigo-400 translate-x-0" : "text-gray-700 -translate-x-1"
                  )}
                />
              </button>
            ))}
          </div>

          {/* Detail panel: right column */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="card-base p-8 h-full"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">{active.name}</h3>
                      {active.isCurrent && (
                        <span className="px-2 py-0.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
                          Present
                        </span>
                      )}
                    </div>
                    <p className="text-indigo-300 font-medium text-sm">{active.role}</p>
                    <p className="text-gray-500 text-xs font-mono mt-0.5">{active.period}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {active.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  {active.achievements.map((ach, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300 leading-relaxed">{ach}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-white/[0.04] border border-white/[0.08] rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
