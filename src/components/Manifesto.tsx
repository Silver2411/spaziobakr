"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useT } from "@/i18n/context";
import { photos } from "@/lib/photos";
import { Reveal, SplitReveal } from "./Reveal";

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
      className="relative bg-bone py-[clamp(5rem,12vw,9rem)]"
    >
      <div className="container-wide grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-2">
          <div className="eyebrow text-ink/60">{t.manifesto.eyebrow}</div>
        </Reveal>

        <div className="md:col-span-7">
          <h2 className="display text-balance leading-[0.96]" style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}>
            <span className="block">
              <SplitReveal text={t.manifesto.line1} />
            </span>
            <span className="block">
              <SplitReveal text={t.manifesto.line2} delay={0.15} />
            </span>
            <span className="display-italic block text-raw">
              <SplitReveal text={t.manifesto.line3} delay={0.3} />
            </span>
          </h2>
        </div>

        <Reveal delay={0.4} className="md:col-span-3">
          <div className="relative aspect-[3/4] overflow-hidden bg-bone-deep">
            <motion.div style={{ y: imgY }} className="absolute inset-0 -mt-[12%] h-[124%]">
              <Image
                src={photos.intro.src}
                alt={photos.intro.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover photo-mood"
              />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
