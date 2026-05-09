"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useT } from "@/i18n/context";
import { photos } from "@/lib/photos";
import { Reveal, SplitReveal } from "./Reveal";

function ParallaxImage({
  src,
  alt,
  className,
  amount = 12,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  amount?: number;
  sizes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-bone-deep ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 -mt-[15%] h-[130%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "100vw"}
          className="object-cover photo-mood"
        />
      </motion.div>
    </div>
  );
}

/**
 * Minimal gallery — 4 photos, 2 captions. Streamlined layout:
 *   Row 1: full-bleed wide hero shot
 *   Row 2: photo + single caption
 *   Row 3: photo + single caption
 *   Row 4: full-width detail
 */
export function Gallery() {
  const { t } = useT();
  const captions = t.gallery.captions;

  return (
    <section
      id="space"
      className="relative bg-bone py-[clamp(4rem,10vw,8rem)]"
    >
      <div className="container-wide mb-[clamp(3rem,8vw,6rem)] grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-3">
          <Reveal>
            <div className="eyebrow text-ink/55">{t.gallery.eyebrow}</div>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <h2
            className="display text-balance"
            style={{ fontSize: "clamp(2rem, 4.4vw, 4rem)" }}
          >
            <SplitReveal text={t.gallery.title} />
          </h2>
        </div>
      </div>

      {/* Row 1 — full-bleed wide */}
      <Reveal>
        <ParallaxImage
          src={photos.gallery[2].src}
          alt={photos.gallery[2].alt}
          sizes="100vw"
          className="aspect-[16/9] md:aspect-[16/7]"
          amount={8}
        />
      </Reveal>

      {/* Row 2 — image left + caption right */}
      <div className="container-wide mt-[clamp(3rem,7vw,5rem)] grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-7">
          <ParallaxImage
            src={photos.gallery[0].src}
            alt={photos.gallery[0].alt}
            sizes="(max-width: 768px) 100vw, 58vw"
            className="aspect-[4/5]"
          />
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:col-start-9 md:self-end">
          <Caption
            num="01"
            title={captions[0].title}
            body={captions[0].body}
          />
        </Reveal>
      </div>

      {/* Row 3 — caption left + image right */}
      <div className="container-wide mt-[clamp(3rem,7vw,5rem)] grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <Reveal className="order-2 md:order-1 md:col-span-4 md:self-end">
          <Caption
            num="02"
            title={captions[1].title}
            body={captions[1].body}
          />
        </Reveal>
        <Reveal delay={0.1} className="order-1 md:order-2 md:col-span-7 md:col-start-6">
          <ParallaxImage
            src={photos.gallery[1].src}
            alt={photos.gallery[1].alt}
            sizes="(max-width: 768px) 100vw, 58vw"
            className="aspect-[3/4]"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Caption({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <div className="eyebrow mb-3 text-ink/40">{num}</div>
      <h3
        className="display mb-3"
        style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}
      >
        {title}
      </h3>
      <p className="max-w-[36ch] text-ink/65">{body}</p>
    </div>
  );
}
