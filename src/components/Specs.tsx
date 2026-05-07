"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useT } from "@/i18n/context";
import { photos } from "@/lib/photos";
import { Reveal, SplitReveal } from "./Reveal";

export function Specs() {
  const { t } = useT();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      id="specs"
      className="relative bg-shadow py-[clamp(4rem,10vw,8rem)] text-bone"
    >
      <div className="container-wide grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
          <Reveal>
            <div className="eyebrow mb-6 text-bone/60">{t.specs.eyebrow}</div>
            <h2
              className="display mb-8 text-balance"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
            >
              <SplitReveal text={t.specs.title} />
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-[5/6] overflow-hidden">
              <motion.div
                style={{ y: imgY }}
                className="absolute inset-0 -mt-[15%] h-[130%]"
              >
                <Image
                  src={photos.specs.src}
                  alt={photos.specs.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover photo-mood-strong"
                />
              </motion.div>
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <dl className="border-t border-bone/15">
            {t.specs.rows.map((row, i) => (
              <Reveal
                key={row.label}
                delay={i * 0.04}
                className="border-b border-bone/15"
              >
                <div className="grid grid-cols-12 gap-4 py-5">
                  <dt className="col-span-5 text-sm text-bone/60 md:col-span-4">
                    {row.label}
                  </dt>
                  <dd
                    className="display col-span-7 text-bone md:col-span-8"
                    style={{ fontSize: "clamp(1.125rem, 2vw, 1.625rem)" }}
                  >
                    {row.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-prose text-sm italic text-bone/60">
              {t.specs.note}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
