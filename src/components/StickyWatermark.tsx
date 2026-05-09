"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

/**
 * Acne-Studios style watermark — giant SPAZIO BAKR wordmark fixed at the
 * center of the viewport, visible during the first viewport of scroll
 * (Hero), then smoothly fades out as the user passes mid-page.
 *
 * Uses `position: fixed` + scroll-driven opacity (NOT sticky), so the
 * wordmark literally stays put while content scrolls underneath it,
 * matching the Acne pattern.
 *
 * `mix-blend-difference` keeps the white SVG legible against any backdrop.
 * `pointer-events-none` so it never intercepts clicks.
 */
export function StickyWatermark() {
  const [opacity, setOpacity] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const compute = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      // Fully visible until 80vh of scroll. Linear fade from 80vh → 180vh.
      const fadeStart = vh * 0.8;
      const fadeEnd = vh * 1.8;
      const t = (y - fadeStart) / (fadeEnd - fadeStart);
      setOpacity(Math.max(0, Math.min(1, 1 - t)));
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
      className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center mix-blend-difference"
      style={{ opacity }}
    >
      <Logo className="!h-auto w-full text-bone px-[clamp(0.5rem,2vw,2rem)]" />
    </div>
  );
}
