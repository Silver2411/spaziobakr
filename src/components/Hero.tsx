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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.18, 0.55]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

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
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/85"
      />

      {/* Editorial corner marks — restrained, brand-identity tone */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="container-wide absolute left-0 right-0 top-[calc(var(--header-h)+1.5rem)] z-10 flex items-center justify-between text-bone/65"
      >
        <div className="eyebrow flex items-center gap-3">
          <span className="blink block h-1 w-1 rounded-full bg-clay" />
          File 01/06 · Cover
        </div>
        <div className="eyebrow hidden md:block">N 45°27'51" · E 9°11'24"</div>
      </motion.div>

      <motion.div
        style={{ y: titleY }}
        className="container-wide relative z-10 flex h-full flex-col justify-end pb-[clamp(2.5rem,8vh,7rem)]"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="eyebrow mb-8 flex items-center gap-3 text-bone/80"
        >
          <span className="block h-px w-10 bg-bone/40" />
          {t.hero.eyebrow}
        </motion.div>

        <h1 className="display text-bone">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.55, ease: [0.7, 0, 0.2, 1] }}
              style={{ fontSize: "clamp(4rem, 14vw, 14rem)" }}
            >
              {t.hero.title}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="display-italic block text-clay"
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.7, ease: [0.7, 0, 0.2, 1] }}
              style={{ fontSize: "clamp(4rem, 14vw, 14rem)" }}
            >
              {t.hero.titleAlt}
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 flex justify-end"
        >
          <div className="eyebrow flex flex-col gap-1 text-bone/65 md:items-end md:text-right">
            <span>Spazio BAKR</span>
            <span>{t.hero.location}</span>
            <span>Est. MMXXVI</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.3 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="eyebrow text-bone/70">{t.hero.scroll}</span>
          <motion.div
            className="block h-10 w-px origin-top bg-bone/50"
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
