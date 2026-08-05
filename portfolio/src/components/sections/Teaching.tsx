"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Clock, FolderOpen, CheckCircle2, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { TEACHING } from "@/data";
import { cn } from "@/lib/utils";

const STAT_ICONS = [Users, Clock, BookOpen, FolderOpen];

export default function Teaching() {
  return (
    <section id="teaching" className="section-padding">
      <div className="container-base">
        <SectionHeader
          badge="Teaching & Mentoring"
          title="The Best Engineers Are the Ones Who Can Teach"
          subtitle="7+ years of turning technical complexity into learning that actually sticks."
        />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {TEACHING.stats.map((stat, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <div
                key={stat.label}
                className="card-base p-5 flex flex-col items-center text-center gap-2"
              >
                <div className="p-2.5 rounded-xl bg-indigo-500/10">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.8} />
                </div>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Sparkles className="w-6 h-6 text-indigo-400 mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-semibold text-gray-200 italic max-w-2xl mx-auto leading-relaxed">
            "When you can teach a concept clearly enough for a beginner to build something real with it, you've truly mastered it."
          </p>
        </motion.blockquote>

        {/* Courses grid */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            Courses Taught
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEACHING.courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={cn(
                  "card-base card-hover p-5",
                  course.isCurrent && "border-indigo-500/30 bg-indigo-500/[0.04]"
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {course.isCurrent && (
                        <span className="px-1.5 py-0.5 text-[10px] font-medium text-emerald-400 bg-emerald-400/10 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-white leading-snug">
                      {course.title}
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-1 font-mono">{course.institution}</p>
                <p className="text-xs text-gray-600 mb-3">{course.period}</p>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Student Projects */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-base p-8"
        >
          <h3 className="text-base font-semibold text-white mb-6 flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-indigo-400" />
            Student Projects I've Supervised
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {TEACHING.studentProjects.map((project, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">{project}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-6 pt-6 border-t border-white/[0.06] italic">
            I don't just teach tools. I teach how to think about problems — and how to build solutions that go beyond the classroom.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
