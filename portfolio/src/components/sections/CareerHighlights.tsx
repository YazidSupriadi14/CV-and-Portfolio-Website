"use client";

import { motion } from "framer-motion";
import { Target, Rocket, GraduationCap, Award } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { HIGHLIGHTS } from "@/data";

const ICON_MAP = {
  Target,
  Rocket,
  GraduationCap,
  Award,
};

const CARD_GRADIENTS = [
  "from-indigo-500/10 to-indigo-500/5",
  "from-violet-500/10 to-violet-500/5",
  "from-cyan-500/10 to-cyan-500/5",
  "from-purple-500/10 to-purple-500/5",
];

const BORDER_GRADIENTS = [
  "border-indigo-500/20",
  "border-violet-500/20",
  "border-cyan-500/20",
  "border-purple-500/20",
];

const ICON_COLORS = [
  "text-indigo-400 bg-indigo-500/10",
  "text-violet-400 bg-violet-500/10",
  "text-cyan-400 bg-cyan-500/10",
  "text-purple-400 bg-purple-500/10",
];

const VALUE_COLORS = [
  "from-indigo-400 to-indigo-300",
  "from-violet-400 to-violet-300",
  "from-cyan-400 to-cyan-300",
  "from-purple-400 to-purple-300",
];

export default function CareerHighlights() {
  return (
    <section id="highlights" className="section-padding">
      <div className="container-base">
        <SectionHeader
          badge="Career Highlights"
          title="Results That Speak for Themselves"
          subtitle="Key achievements across enterprise engineering, AI development, and education."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative p-6 rounded-2xl border bg-gradient-to-b ${CARD_GRADIENTS[i]} ${BORDER_GRADIENTS[i]} overflow-hidden group cursor-default`}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                {/* Icon */}
                <div className={`inline-flex p-2.5 rounded-xl mb-4 ${ICON_COLORS[i]}`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Animated number */}
                <div
                  className={`text-4xl font-bold mb-1 bg-gradient-to-r ${VALUE_COLORS[i]} bg-clip-text text-transparent`}
                >
                  {item.animateValue === 393 ? (
                    /* GPA: display as 3.93 */
                    <AnimatedCounter
                      value={393}
                      suffix={item.suffix}
                      duration={2}
                      isDecimal={true}
                    />
                  ) : (
                    <AnimatedCounter
                      value={item.animateValue}
                      suffix={item.suffix}
                      duration={2}
                    />
                  )}
                </div>

                {/* Label */}
                <p className="text-sm font-semibold text-white mb-3">{item.label}</p>

                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
