"use client";

import { Github, Linkedin, ExternalLink, ArrowUp } from "lucide-react";
import { PERSONAL } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050510]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold font-mono bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {PERSONAL.initials}
            </span>
            <p className="text-sm text-gray-500 mt-1">
              © {new Date().getFullYear()} {PERSONAL.name}. Designed & built with intention.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-gray-500 hover:text-indigo-400 hover:bg-white/[0.05] transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg text-gray-500 hover:text-indigo-400 hover:bg-white/[0.05] transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL.huggingface}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hugging Face"
              className="p-2 rounded-lg text-gray-500 hover:text-indigo-400 hover:bg-white/[0.05] transition-all duration-200"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="p-2 rounded-lg text-gray-500 hover:text-indigo-400 hover:bg-white/[0.05] transition-all duration-200"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
