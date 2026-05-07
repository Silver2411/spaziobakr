"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useT } from "@/i18n/context";
import { photos } from "@/lib/photos";
import { Reveal, SplitReveal } from "./Reveal";

export function CTA() {
  const { t } = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section
      ref={ref}
      className="relative h-[80svh] overflow-hidden bg-shadow text-bone"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={photos.cta.src}
          alt={photos.cta.alt}
          fill
          sizes="100vw"
          className="object-cover photo-mood-strong opacity-90"
        />
      </motion.div>
      <div className="absolute inset-0 bg-shadow/50" />

      <div className="container-wide relative z-10 flex h-full flex-col justify-center">
        <Reveal>
          <div className="eyebrow mb-8 text-bone/70">{t.cta.eyebrow}</div>
        </Reveal>
        <h2
          className="display max-w-[12ch] text-balance"
          style={{ fontSize: "clamp(2.6rem, 8vw, 8rem)" }}
        >
          <span className="block">
            <SplitReveal text={t.cta.title} />
          </span>
        </h2>
        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
            <Link
              href="/booking"
              data-cursor="→"
              className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-bone px-7 py-4 text-base font-medium"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-shadow">
                {t.cta.button}
              </span>
              <span className="relative z-10 text-clay transition-colors duration-500 group-hover:text-shadow">
                →
              </span>
              <span
                aria-hidden
                className="absolute inset-0 -z-0 translate-y-full bg-bone transition-transform duration-500 group-hover:translate-y-0"
              />
            </Link>
            <span className="eyebrow text-bone/70">{t.cta.sub}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
