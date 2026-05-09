"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

/**
 * Acne-Studios style watermark — giant SPAZIO BAKR wordmark fixed at the
 * center of the viewport.
 *
 * Adaptive color & opacity per scroll phase:
 *   1. Hero (0 → 85vh): solid white, opacity 1 (legible on dark photo)
 *   2. Manifesto / Marquee (85vh → 160vh): switches to dark, opacity ~0.18
 *      (a faint watermark behind the manifesto type, doesn't compete)
 *   3. Past 160vh: opacity 0 (out of the way for gallery onward)
 *
 * Responsive size:
 *   - Mobile (<640px): height clamped to 56px (small, doesn't crowd content)
 *   - Tablet/desktop: scales with viewport, capped at 280px
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
      // Section boundaries (rough viewport-multiples)
      const heroEnd = vh * 0.9;        // hero ≈ 100vh
      const manifestoEnd = vh * 2.05;  // manifesto + marquee ≈ ~120vh after hero
      const exitEnd = vh * 2.2;        // short fade-out before gallery

      if (y < heroEnd) {
        // Phase 1 — solid white over dark hero
        setColor("#ffffff");
        setOpacity(1);
      } else if (y < manifestoEnd) {
        // Phase 2 — faint dark watermark, CONSTANT opacity throughout
        // the manifesto + marquee section
        setColor("#0a0a0a");
        setOpacity(0.12);
      } else if (y < exitEnd) {
        // Quick fade-out before gallery
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

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center"
      style={{ opacity, color, transition: "opacity 200ms linear, color 250ms linear" }}
    >
      <Logo className="block h-[clamp(36px,18vw,280px)] w-auto px-[clamp(0.5rem,2vw,2rem)]" />
    </div>
  );
}
