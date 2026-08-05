"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { EDUCATION } from "@/data";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-base">
        <SectionHeader
          badge="Education"
          title="Academic Foundation for Real-World AI"
          subtitle="Near-perfect academic records across both degrees — completed alongside full-time professional work."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="card-base card-hover p-8 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.04] to-transparent pointer-events-none" />

              {/* Top icon */}
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                    <GraduationCap className="w-6 h-6 text-indigo-400" />
                  </div>

                  {/* GPA badge */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-500/30">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span className="text-lg font-bold text-white font-mono">{edu.gpa}</span>
                  </div>
                </div>

                {/* Degree */}
                <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-indigo-400 font-semibold text-sm mb-4">{edu.institution}</p>

                {/* Meta info */}
                <div className="flex flex-col gap-2 mb-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </div>
                </div>

                {/* Focus */}
                <div className="mb-5 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <p className="text-[10px] font-mono text-gray-600 uppercase tracking-wider mb-1">
                    Focus Areas
                  </p>
                  <p className="text-xs text-indigo-300 font-medium">{edu.focus}</p>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-gray-600 mt-10 max-w-2xl mx-auto"
        >
          Both degrees completed with near-perfect GPAs while working professionally — demonstrating the ability to perform under real-world constraints, not just academic ones.
        </motion.p>
      </div>
    </section>
  );
}
