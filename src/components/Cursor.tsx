"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 50, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 50, mass: 0.4 });
  const rafRef = useRef(0);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || reduce) return;
    setEnabled(true);

    function onMove(e: MouseEvent) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
        const target = e.target as HTMLElement | null;
        const interactive = target?.closest(
          "[data-cursor], a, button, input, textarea, select, label[for]"
        ) as HTMLElement | null;
        if (interactive) {
          setHover(true);
          const cur = interactive.dataset.cursor;
          setLabel(cur ?? null);
        } else {
          setHover(false);
          setLabel(null);
        }
      });
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden select-none md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="relative -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: hover ? 1 : 0.32 }}
        transition={{ type: "spring", stiffness: 500, damping: 40 }}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-ink text-bone">
          {label ? (
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium">
              {label}
            </span>
          ) : (
            <span className="block h-2 w-2 rounded-full bg-bone" />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
