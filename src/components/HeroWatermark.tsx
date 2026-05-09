"use client";

import { Logo } from "./Logo";

/**
 * Acne-Studios-style giant wordmark — full-bleed centered, sits in the page
 * flow between Hero and Manifesto. Static (scrolls with content), HUGE, center.
 *
 * `mix-blend-difference` ensures legibility regardless of section bg above
 * or below, but here it sits on bone (white) so the wordmark prints in near-
 * black without inversion needed.
 */
export function HeroWatermark() {
  return (
    <section
      aria-hidden="true"
      className="relative flex h-[60vh] items-center justify-center overflow-hidden bg-bone"
    >
      <Logo
        className="!h-auto w-full text-ink px-[clamp(0.5rem,2vw,2rem)]"
      />
    </section>
  );
}
