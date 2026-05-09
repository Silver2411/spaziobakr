"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useT } from "@/i18n/context";
import { photos } from "@/lib/photos";
import { Reveal, SplitReveal } from "./Reveal";

/**
 * Inverted Manifesto — dark bg + light text, type pushed to the LEFT/RIGHT
 * margins so the central watermark stays unobstructed. Image moved to the
 * far right column for layout balance.
 */
export function Manifesto() {
  const { t } = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative bg-shadow text-bone py-[clamp(5rem,12vw,9rem)]"
    >
      <div className="container-wide grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-12">
        {/* Eyebrow + image — LEFT column, narrow */}
        <div className="md:col-span-3 md:flex md:flex-col md:gap-10">
          <Reveal>
            <div className="eyebrow text-bone/60">{t.manifesto.eyebrow}</div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="relative aspect-[3/4] overflow-hidden bg-shadow/60">
              <motion.div
                style={{ y: imgY }}
                className="absolute inset-0 -mt-[12%] h-[124%]"
              >
                <Image
                  src={photos.intro.src}
                  alt={photos.intro.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover photo-mood-strong"
                />
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* Empty middle — leaves room for the centered fixed watermark */}
        <div className="hidden md:col-span-3 md:block" aria-hidden="true" />

        {/* Type — RIGHT column, smaller scale, doesn't compete with watermark */}
        <div className="md:col-span-6">
          <h2
            className="display text-balance leading-[0.96]"
            style={{ fontSize: "clamp(1.75rem, 3.4vw, 3.4rem)" }}
          >
            <span className="block">
              <SplitReveal text={t.manifesto.line1} />
            </span>
            <span className="block">
              <SplitReveal text={t.manifesto.line2} delay={0.15} />
            </span>
            <span className="block text-bone/55">
              <SplitReveal text={t.manifesto.line3} delay={0.3} />
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
