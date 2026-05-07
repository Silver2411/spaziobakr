"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

type SplitProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  by?: "word" | "char";
  once?: boolean;
};

export function SplitReveal({
  text,
  className,
  delay = 0,
  stagger = 0.05,
  by = "word",
  once = true,
}: SplitProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const tokens = by === "word" ? text.split(/(\s+)/) : Array.from(text);

  return (
    <span ref={ref} className={clsx("inline-block", className)} aria-label={text}>
      {tokens.map((tok, i) =>
        /^\s+$/.test(tok) ? (
          <span key={i} aria-hidden>
            {tok}
          </span>
        ) : (
          <span
            key={i}
            aria-hidden
            className="inline-block overflow-hidden align-baseline"
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "115%" }}
              animate={inView ? { y: "0%" } : { y: "115%" }}
              transition={{
                duration: 1.0,
                delay: delay + i * stagger,
                ease: [0.7, 0, 0.2, 1],
              }}
            >
              {tok}
            </motion.span>
          </span>
        )
      )}
    </span>
  );
}
