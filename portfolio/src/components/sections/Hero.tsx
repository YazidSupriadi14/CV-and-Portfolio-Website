"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, ExternalLink, MapPin } from "lucide-react";
import { PERSONAL } from "@/data";

const ROLES = ["NLP Engineer", "AI Practitioner", "Data Scientist", "Educator"];

const HERO_STATS = [
  { value: "4+", label: "Years Enterprise Exp." },
  { value: "250+", label: "Students Mentored" },
  { value: "35+", label: "System Enhancements" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((prev) => (prev + 1) % ROLES.length),
      2800
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background: grid + gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050510]" />

        {/* Orb 1 */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full bg-indigo-600/8 blur-[140px]"
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "0%", left: "10%" }}
        />
        {/* Orb 2 */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[120px]"
          animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "5%", right: "10%" }}
        />
        {/* Orb 3 */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/6 blur-[80px]"
          animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "40%", right: "25%" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-indigo-300 border border-indigo-500/30 bg-indigo-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <MapPin className="w-3.5 h-3.5" />
            {PERSONAL.location} · {PERSONAL.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
            <span className="text-white">Muhammad</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Yazid Supriadi
            </span>
          </h1>
        </motion.div>

        {/* Rotating role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="font-mono text-lg md:text-xl text-indigo-300 font-medium"
            >
              &gt;&nbsp;{ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4"
        >
          {PERSONAL.tagline}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10"
        >
          {PERSONAL.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 hover:border-indigo-500/50 text-white hover:bg-white/[0.04] rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-14"
        >
          {HERO_STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
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
              className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors duration-200 text-sm"
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-600 text-xs uppercase tracking-[0.2em] font-mono">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
