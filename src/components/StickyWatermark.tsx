"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

/**
 * Acne-Studios-style watermark — visible only during the intro phase
 * (Hero → Manifesto), then disappears for the rest of the page.
 *
 * Behaviour, by scroll phase:
 *   1. Hero (0 → ~0.9vh):       solid white,  opacity 1   — over dark photo
 *   2. Manifesto (~0.9 → ~1.7vh): solid dark, opacity 0.12 — faint behind type
 *   3. Exit fade (1.7 → 1.9vh):   ramps to 0
 *   4. Past 1.9vh:                opacity 0, hidden — gallery onward is clean
 *
 * The watermark is a brand statement at the top of the page, NOT a
 * persistent overlay. Once the user is past the manifesto it gets out of
 * the way of the editorial content below.
 */
export function StickyWatermark() {
  const [opacity, setOpacity] = useState(1);
  const [color, setColor] = useState("#ffffff");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const compute = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const heroEnd = vh * 0.9;
      const manifestoEnd = vh * 1.7;
      const exitEnd = vh * 1.9;

      if (y < heroEnd) {
        setColor("#ffffff");
        setOpacity(1);
      } else if (y < manifestoEnd) {
        setColor("#0a0a0a");
        setOpacity(0.12);
      } else if (y < exitEnd) {
        setColor("#0a0a0a");
        const t = (y - manifestoEnd) / (exitEnd - manifestoEnd);
        setOpacity(0.12 * (1 - t));
      } else {
        setOpacity(0);
      }
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  if (!mounted) return null;

  // When fully invisible, also remove the element from interaction stack
  // (defensive — `pointer-events-none` already prevents clicks).
  const visible = opacity > 0.001;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center"
      style={{
        opacity,
        color,
        visibility: visible ? "visible" : "hidden",
        transition: "opacity 200ms linear, color 250ms linear",
      }}
    >
      <Logo className="block h-[clamp(36px,18vw,280px)] w-auto px-[clamp(0.5rem,2vw,2rem)]" />
    </div>
  );
}
