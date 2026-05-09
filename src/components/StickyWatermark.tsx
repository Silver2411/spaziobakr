"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

/**
 * Photo-Wall variant — watermark stays SOLID WHITE for the entire dark
 * zone (Hero + PhotoWall + inverted Manifesto), then quickly fades out
 * before the marquee/gallery section. No color switching needed.
 */
export function StickyWatermark() {
  const [opacity, setOpacity] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const compute = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      // Dark zone: Hero (1vh) + PhotoWall (~4×80vh = 3.2vh) + Manifesto (~1vh) ≈ 5.2vh
      const darkZoneEnd = vh * 5.0;
      const fadeEnd = vh * 5.4;

      if (y < darkZoneEnd) {
        setOpacity(1);
      } else if (y < fadeEnd) {
        const t = (y - darkZoneEnd) / (fadeEnd - darkZoneEnd);
        setOpacity(1 - t);
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
      className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center text-bone"
      style={{ opacity, transition: "opacity 200ms linear" }}
    >
      <Logo className="block h-[clamp(36px,18vw,280px)] w-auto px-[clamp(0.5rem,2vw,2rem)]" />
    </div>
  );
}
