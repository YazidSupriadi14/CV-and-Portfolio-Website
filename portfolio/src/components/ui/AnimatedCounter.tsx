"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
  isDecimal?: boolean;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 2,
  className = "",
  isDecimal = false,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);

  const display = useTransform(count, (v) => {
    if (isDecimal) return (v / 100).toFixed(2);
    return Math.round(v).toString();
  });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    });
    return controls.stop;
  }, [isInView, value, count, duration]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
