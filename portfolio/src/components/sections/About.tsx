"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PERSONAL } from "@/data";

const ABOUT_STATS = [
  { value: "4+", label: "Years Enterprise Experience" },
  { value: "250+", label: "Students Mentored" },
  { value: "6", label: "Enterprise Apps Managed" },
];

const ABOUT_PARAGRAPHS = [
  `I'm an engineer based in Jakarta with a background spanning enterprise application engineering, data analytics, and natural language processing. For over four years, I supported mission-critical systems at PT Pelindo Solusi Digital — one of Indonesia's largest state-owned port operators — where I learned that the most powerful technology is the kind that actually keeps a business running.`,
  `That enterprise foundation shapes how I approach AI. I don't just build models — I build solutions grounded in real operational context. My work in NLP covers the full lifecycle: from raw text preprocessing and feature engineering to transformer-based modeling using Hugging Face, all the way to production deployment.`,
  `Outside of engineering, I teach. I currently lecture NLP and AI at STT Nurul Fikri, mentoring students through end-to-end AI project development based on real-world business cases. I've guided 250+ students across programming, data systems, ML, and NLP. I believe the ability to explain complex AI clearly is not a soft skill — it's a technical advantage.`,
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-base">
        <SectionHeader
          badge="About Me"
          title="Engineer by Training. Educator by Choice."
          subtitle="AI Practitioner by Passion."
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: stats card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <div className="card-base p-8 space-y-6">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl overflow-hidden ring-1 ring-white/[0.08]">
                <Image
                  src="/profile.jpg"
                  alt={PERSONAL.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">{PERSONAL.name}</h3>
                <p className="text-sm text-indigo-400 font-mono mt-0.5">{PERSONAL.title}</p>
                <p className="text-sm text-gray-500 mt-1">{PERSONAL.location}</p>
              </div>

              {/* Stat grid */}
              <div className="grid grid-cols-1 gap-4 pt-4 border-t border-white/[0.06]">
                {ABOUT_STATS.map((s) => (
                  <div key={s.label} className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{s.label}</span>
                    <span className="text-sm font-bold text-white">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Open to */}
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-mono">
                  Open to
                </p>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL.openTo.map((role) => (
                    <span
                      key={role}
                      className="px-2.5 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-lg"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 pt-4 border-t border-white/[0.06]">
                {[
                  { href: PERSONAL.linkedin, icon: Linkedin, label: "LinkedIn" },
                  { href: PERSONAL.github, icon: Github, label: "GitHub" },
                  { href: PERSONAL.huggingface, icon: ExternalLink, label: "Hugging Face" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-lg text-gray-400 hover:text-indigo-400 hover:bg-white/[0.05] border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: bio text */}
          <div className="lg:col-span-3 space-y-5">
            {ABOUT_PARAGRAPHS.map((para, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="text-gray-300 leading-relaxed text-[1.05rem]"
              >
                {para}
              </motion.p>
            ))}

            {/* Availability callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-3"
            >
              <span className="flex-shrink-0 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <p className="text-sm text-emerald-300">
                Currently open to AI Engineering, Data Science, Business Analyst, and Software Engineering roles.{" "}
                <span className="text-emerald-400 font-medium">{PERSONAL.availability}.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
