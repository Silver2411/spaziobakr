"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useT } from "@/i18n/context";
import { photos } from "@/lib/photos";

export function Hero() {
  const { t } = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.12, 0.4]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] w-full overflow-hidden bg-shadow text-bone"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover photo-mood-strong"
        />
      </motion.div>

      <motion.div
        aria-hidden
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/70"
      />

      {/* Top-right: coordinates only — minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="container-wide absolute left-0 right-0 top-[calc(var(--header-h)+1.5rem)] z-10 flex justify-end text-bone/55"
      >
        <div className="eyebrow hidden md:block">N 45°27'51" · E 9°11'24"</div>
      </motion.div>

      {/* Bottom row: minimal split — eyebrow left, location stamp right */}
      <div className="container-wide relative z-10 flex h-full flex-col justify-end pb-[clamp(2.5rem,7vh,5rem)]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="eyebrow flex items-center gap-3 text-bone/75">
            <span className="block h-px w-10 bg-bone/35" />
            {t.hero.eyebrow}
          </div>

          <div className="eyebrow flex flex-col gap-1 text-bone/55 md:items-end md:text-right">
            <span>Spazio BAKR</span>
            <span>{t.hero.location}</span>
            <span>Est. MMXXVI</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="eyebrow text-bone/55">{t.hero.scroll}</span>
          <motion.div
            className="block h-10 w-px origin-top bg-bone/40"
            animate={{ scaleY: [0.2, 1, 0.2] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
