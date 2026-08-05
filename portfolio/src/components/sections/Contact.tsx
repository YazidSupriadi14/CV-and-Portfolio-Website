"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, ExternalLink, Copy, Check, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PERSONAL } from "@/data";

const CONTACT_LINKS = [
  {
    label: "LinkedIn",
    handle: "muhammad-yazid-supriadi",
    href: PERSONAL.linkedin,
    cta: "Connect on LinkedIn",
    icon: Linkedin,
    description: "Best for professional inquiries & opportunities",
    color: "from-blue-600/20 to-blue-600/5 border-blue-500/20 hover:border-blue-400/40",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    label: "Email",
    handle: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    cta: "Send an Email",
    icon: Mail,
    description: "For detailed discussions or CV requests",
    color: "from-indigo-600/20 to-indigo-600/5 border-indigo-500/20 hover:border-indigo-400/40",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
  },
  {
    label: "GitHub",
    handle: "YazidSupriadi14",
    href: PERSONAL.github,
    cta: "View My Code",
    icon: Github,
    description: "Source code, projects & contributions",
    color: "from-gray-600/20 to-gray-600/5 border-gray-500/20 hover:border-gray-400/40",
    iconBg: "bg-gray-500/10",
    iconColor: "text-gray-300",
  },
  {
    label: "Hugging Face",
    handle: "yazidsupriadi",
    href: PERSONAL.huggingface,
    cta: "See My AI Models",
    icon: ExternalLink,
    description: "NLP models & live AI demos",
    color: "from-yellow-600/20 to-yellow-600/5 border-yellow-500/20 hover:border-yellow-400/40",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
  },
];

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-indigo-400 transition-colors duration-200"
      aria-label="Copy email address"
    >
      {copied ? (
        <><Check className="w-3.5 h-3.5 text-emerald-400" /><span className="text-emerald-400">Copied!</span></>
      ) : (
        <><Copy className="w-3.5 h-3.5" />Copy</>
      )}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-base">
        <SectionHeader
          badge="Contact"
          title="Let's Build Something That Matters"
          subtitle="I'm actively exploring opportunities in AI Engineering, Data Science, Business Analysis, and Software Engineering. Open to remote & on-site roles."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Availability banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-start gap-3"
          >
            <span className="flex-shrink-0 mt-1 relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-emerald-300">Available for new opportunities</p>
              <p className="text-xs text-emerald-700 mt-0.5">{PERSONAL.availability}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {PERSONAL.openTo.map((role) => (
                <span key={role} className="inline-flex items-center gap-1 text-xs text-gray-400">
                  <ArrowRight className="w-3 h-3 text-indigo-400" />{role}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Contact link cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {CONTACT_LINKS.map(({ label, handle, href, cta, icon: Icon, description, color, iconBg, iconColor }, i) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className={`flex flex-col gap-4 p-5 rounded-2xl border bg-gradient-to-b ${color} transition-all duration-200 group`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl ${iconBg}`}>
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-700 group-hover:text-gray-400 transition-colors" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">{label}</p>
                  <p className="text-xs text-gray-500 mt-0.5 truncate font-mono">{handle}</p>
                  <p className="text-xs text-gray-600 mt-1.5">{description}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                  <span className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    {cta} →
                  </span>
                  {label === "Email" && (
                    <span onClick={(e) => e.preventDefault()}>
                      <CopyEmailButton />
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Location note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-sm text-gray-600"
          >
            <MapPin className="w-4 h-4" />
            <span>{PERSONAL.location} · Usually responds within 24 hours</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
