"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

/** Brand stamp / live time in Milano — editorial brand-identity micro-detail. */
export function MilanoTime({ className }: { className?: string }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    function update() {
      const now = new Date();
      const t = new Intl.DateTimeFormat("it-IT", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Rome",
      }).format(now);
      setTime(t);
    }
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return (
    <span className={`eyebrow tabular-nums ${className ?? ""}`}>
      Milano · {time}
    </span>
  );
}

/** Circular rotating wordmark — refined editorial seal. Used in footer. */
export function CircularStamp({
  text = "Spazio BAKR · Studio · Loft · Milano · IT · ",
  size = 120,
}: {
  text?: string;
  size?: number;
}) {
  const id = "circ-stamp";
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="overflow-visible"
      >
        <defs>
          <path
            id={id}
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <text
          fill="currentColor"
          style={{
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            fontSize: 12,
            letterSpacing: "0.16em",
          }}
        >
          <textPath href={`#${id}`}>{text.repeat(3)}</textPath>
        </text>
        <circle
          cx="100"
          cy="100"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="100"
          y1="86"
          x2="100"
          y2="114"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="86"
          y1="100"
          x2="114"
          y2="100"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </motion.div>
  );
}
