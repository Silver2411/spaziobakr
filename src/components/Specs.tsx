"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useT } from "@/i18n/context";
import { photos } from "@/lib/photos";
import { Reveal, SplitReveal } from "./Reveal";

const materialPhotos = photos.materia;

function MaterialPhoto({
  src,
  alt,
  index,
  total,
}: {
  src: string;
  alt: string;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div ref={ref} className="relative aspect-[4/5] overflow-hidden bg-shadow/60">
      <motion.div style={{ y }} className="absolute inset-0 -mt-[15%] h-[130%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`(max-width: 768px) 100vw, ${Math.floor(100 / total)}vw`}
          className="object-cover photo-mood-strong"
        />
      </motion.div>
    </div>
  );
}

export function Specs() {
  const { t } = useT();

  return (
    <section
      id="specs"
      className="relative bg-shadow py-[clamp(4rem,10vw,8rem)] text-bone"
    >
      <div className="container-wide">
        <div className="mb-[clamp(2.5rem,6vw,5rem)] grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="md:col-span-2">
            <Reveal>
              <div className="eyebrow text-bone/60">{t.specs.eyebrow}</div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <h2
              className="display text-balance"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
            >
              <SplitReveal text={t.specs.title} />
            </h2>
          </div>
          <Reveal delay={0.3} className="md:col-span-3 md:self-end">
            <p className="text-base italic text-bone/60">{t.specs.note}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {t.specs.rows.map((row, i) => {
            const photo = materialPhotos[i] ?? materialPhotos[0];
            return (
              <Reveal key={row.label} delay={i * 0.12}>
                <figure className="flex flex-col gap-5">
                  <MaterialPhoto
                    src={photo.src}
                    alt={`${row.label} — ${photo.alt}`}
                    index={i}
                    total={t.specs.rows.length}
                  />
                  <figcaption className="flex items-baseline justify-between gap-4 border-t border-bone/15 pt-4">
                    <span
                      className="display"
                      style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)" }}
                    >
                      {row.label}
                    </span>
                    <span className="eyebrow text-bone/55">
                      0{i + 1} / 0{t.specs.rows.length}
                    </span>
                  </figcaption>
                  <p className="text-sm text-bone/65">{row.value}</p>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
