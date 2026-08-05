"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <span className="inline-block px-3 py-1 mb-4 text-xs font-mono font-medium tracking-widest uppercase text-indigo-400 border border-indigo-500/30 bg-indigo-500/10 rounded-full">
        {badge}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-400 text-lg max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
