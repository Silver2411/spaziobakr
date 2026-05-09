"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

/**
 * Photo-Wall variant — watermark stays SOLID WHITE through Hero + 2 photos
 * (the dark zone). Scroll fade ENDS with the last photo so the watermark
 * is gone by the time the manifesto arrives.
 *
 * Dark zone: Hero (~1vh) + 2 PhotoWall images (~80vh each = 1.6vh) ≈ 2.6vh
 */
export function StickyWatermark() {
  const [opacity, setOpacity] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const compute = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const darkZoneEnd = vh * 2.4; // Hero + 2 photos
      const fadeEnd = vh * 2.6; // Quick fade-out at the end of photos

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
