"use client";

import { Logo } from "./Logo";

/**
 * Giant edge-to-edge BAKR wordmark — sits above the footer as a final brand
 * stamp. Inspired by Acne Studios' page-end signature.
 *
 * Uses bg-ink + text-bone so the logo prints in cream on near-black, full-bleed.
 */
export function BrandWatermark() {
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden bg-ink py-[clamp(1.5rem,3vw,3rem)] text-bone"
    >
      <Logo className="!h-auto block w-full px-[clamp(1rem,3vw,3rem)]" />
    </section>
  );
}
