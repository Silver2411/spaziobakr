"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { photos } from "@/lib/photos";

/**
 * Photo-heavy second section — replaces text-dominant manifesto in this
 * variant. Stacks 4 dark architectural photos full-bleed with parallax,
 * creating a "dark zone" of ~3 viewports so the white watermark stays
 * legible without color/opacity hacks.
 */
function ParallaxImage({
  src,
  alt,
  amount = 12,
}: {
  src: string;
  alt: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className="relative h-[clamp(60vh,80vh,100vh)] w-full overflow-hidden bg-shadow">
      <motion.div style={{ y }} className="absolute inset-0 -mt-[15%] h-[130%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover photo-mood-strong"
        />
      </motion.div>
    </div>
  );
}

export function PhotoWall() {
  return (
    <section
      aria-label="Photo wall"
      className="relative bg-shadow"
    >
      <ParallaxImage
        src={photos.gallery[2].src}
        alt={photos.gallery[2].alt}
      />
      <ParallaxImage
        src={photos.intro.src}
        alt={photos.intro.alt}
      />
      <ParallaxImage
        src={photos.gallery[0].src}
        alt={photos.gallery[0].alt}
      />
      <ParallaxImage
        src={photos.gallery[3].src}
        alt={photos.gallery[3].alt}
      />
    </section>
  );
}
