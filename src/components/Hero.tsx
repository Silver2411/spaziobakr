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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.18, 0.5]);

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
        className="absolute inset-0 bg-gradient-to-b from-shadow/40 via-shadow/10 to-shadow/85"
      />

      {/* Magazine-style microtype top row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="container-wide absolute left-0 right-0 top-[calc(var(--header-h)+1.25rem)] z-10 flex items-start justify-between text-bone/60"
      >
        <div className="eyebrow flex flex-col gap-1">
          <span>BAKR / Studio · Loft</span>
          <span className="tag-bracket">File 01 — Cover</span>
        </div>
        <div className="eyebrow hidden text-right md:flex md:flex-col md:gap-1">
          <span>N 45°27'51" · E 9°11'24"</span>
          <span className="tag-bracket">Milano · IT</span>
        </div>
      </motion.div>

      {/* Big editorial title */}
      <div className="container-wide relative z-10 flex h-full flex-col justify-end pb-[clamp(2.5rem,7vh,5rem)]">
        <h1 className="display text-bone">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.0, delay: 0.4, ease: [0.7, 0, 0.2, 1] }}
              style={{ fontSize: "clamp(3.5rem, 14vw, 14rem)" }}
            >
              Spazio
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-clay"
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.0, delay: 0.55, ease: [0.7, 0, 0.2, 1] }}
              style={{ fontSize: "clamp(3.5rem, 14vw, 14rem)" }}
            >
              BAKR
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-bone/20 pt-6"
        >
          <div className="eyebrow flex flex-wrap items-center gap-x-6 gap-y-2 text-bone/65">
            <span className="tag-bracket">Cemento</span>
            <span className="tag-bracket">Acciaio</span>
            <span className="tag-bracket">Vetro</span>
            <span className="tag-bracket">Luce</span>
          </div>
          <div className="eyebrow flex flex-col gap-1 text-bone/55 md:items-end md:text-right">
            <span>Est. MMXXVI</span>
            <span>Ref. BAKR-001</span>
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
