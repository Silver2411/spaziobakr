"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

type Mode = "solid-white" | "solid-dark" | "blend";

/**
<<<<<<< HEAD
 * Photo-Wall variant — watermark stays SOLID WHITE through Hero + 2 photos
 * (the dark zone). Scroll fade ENDS with the last photo so the watermark
 * is gone by the time the manifesto arrives.
 *
 * Dark zone: Hero (~1vh) + 2 PhotoWall images (~80vh each = 1.6vh) ≈ 2.6vh
 */
export function StickyWatermark() {
  const [opacity, setOpacity] = useState(1);
=======
 * Acne-Studios style watermark — adaptive across the entire page:
 *   1. Hero (0 → ~0.9vh): solid white, opacity 1 — over dark photo.
 *   2. Manifesto (~0.9vh → ~1.7vh): solid dark, opacity 0.12 — faint
 *      watermark behind the bold manifesto type so it doesn't compete.
 *   3. Gallery → Specs → FAQ → Footer (>1.7vh): mix-blend-difference,
 *      white text, opacity 0.7 — auto-inverts: white over photos / dark
 *      sections, dark over plain bone bg. Always visible, never garish.
 */
export function StickyWatermark() {
  const [opacity, setOpacity] = useState(1);
  const [color, setColor] = useState("#ffffff");
  const [mode, setMode] = useState<Mode>("solid-white");
>>>>>>> main
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const compute = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
<<<<<<< HEAD
      const darkZoneEnd = vh * 2.4; // Hero + 2 photos
      const fadeEnd = vh * 2.6; // Quick fade-out at the end of photos

      if (y < darkZoneEnd) {
        setOpacity(1);
      } else if (y < fadeEnd) {
        const t = (y - darkZoneEnd) / (fadeEnd - darkZoneEnd);
        setOpacity(1 - t);
=======
      const heroEnd = vh * 0.9;
      const manifestoEnd = vh * 1.7;

      if (y < heroEnd) {
        setMode("solid-white");
        setColor("#ffffff");
        setOpacity(1);
      } else if (y < manifestoEnd) {
        setMode("solid-dark");
        setColor("#0a0a0a");
        setOpacity(0.12);
>>>>>>> main
      } else {
        // Past manifesto — over gallery, specs, FAQ, footer.
        // mix-blend-difference auto-inverts so the wordmark is WHITE on
        // dark photos and faint dark on light bg.
        setMode("blend");
        setColor("#ffffff");
        setOpacity(0.7);
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

  const blendClass = mode === "blend" ? "mix-blend-difference" : "";

  return (
    <div
      aria-hidden="true"
<<<<<<< HEAD
      className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center text-bone"
      style={{ opacity, transition: "opacity 200ms linear" }}
=======
      className={`pointer-events-none fixed inset-0 z-30 flex items-center justify-center ${blendClass}`}
      style={{
        opacity,
        color,
        transition: "opacity 200ms linear, color 250ms linear",
      }}
>>>>>>> main
    >
      <Logo className="block h-[clamp(36px,18vw,280px)] w-auto px-[clamp(0.5rem,2vw,2rem)]" />
    </div>
  );
}
