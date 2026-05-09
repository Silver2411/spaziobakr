"use client";

import Image from "next/image";
import clsx from "clsx";

/**
 * Spazio BAKR official wordmark — extracted 1:1 from brand identity PDF.
 * Variants:
 *  - light: cream  (#E1DBD1) — for dark backgrounds
 *  - dark:  near-black (#0B0B0B) — for cream/light backgrounds
 *  - white: pure white — for photo overlays
 *  - slate: brand slate (#4E4C50)
 *  - red:   brand red (#EB1505)
 */
type Variant = "dark" | "light" | "white" | "slate" | "red";

const SRC: Record<Variant, string> = {
  dark: "/logo/spaziobakr-black.png",
  light: "/logo/spaziobakr-cream.png",
  white: "/logo/spaziobakr-white.png",
  slate: "/logo/spaziobakr-slate.png",
  red: "/logo/spaziobakr-red.png",
};

export function Logo({
  variant = "dark",
  className,
  height = 28,
  priority,
}: {
  variant?: Variant;
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  // Source image is 1800x377 → ratio ≈ 4.77
  const width = Math.round(height * (1800 / 377));
  return (
    <Image
      src={SRC[variant]}
      alt="Spazio BAKR"
      width={width}
      height={height}
      priority={priority}
      className={clsx("inline-block h-auto select-none", className)}
      style={{ width: "auto", height }}
      unoptimized
    />
  );
}
