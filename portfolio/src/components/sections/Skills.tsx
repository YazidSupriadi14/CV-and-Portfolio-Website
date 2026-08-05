"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, BarChart3, Code2, Settings2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { SKILLS } from "@/data";

const ICON_MAP = {
  Brain,
  Cpu,
  BarChart3,
  Code2,
  Settings2,
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-base">
        <SectionHeader
          badge="Skills & Expertise"
          title="Full-Stack AI Skill Set"
          subtitle="From raw data and feature engineering to deployed production models — and the business intelligence to bridge them."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS.map((skill) => {
            const Icon = ICON_MAP[skill.iconName as keyof typeof ICON_MAP];
            return (
              <motion.div
                key={skill.category}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-base card-hover overflow-hidden group"
                style={{
                  boxShadow: `0 0 0 0 ${skill.glowColor}`,
                  transition: "box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 40px ${skill.glowColor}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${skill.glowColor}`;
                }}
              >
                {/* Gradient header bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${skill.gradient}`} />

                <div className="p-6">
                  {/* Icon + category */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`p-2.5 rounded-xl bg-gradient-to-br ${skill.gradient} bg-opacity-10`}
                      style={{ background: `linear-gradient(135deg, ${skill.glowColor}, transparent)` }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white text-sm">{skill.category}</h3>
                  </div>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-xs text-gray-400 bg-white/[0.04] border border-white/[0.07] rounded-lg group-hover:border-white/[0.12] transition-colors duration-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
