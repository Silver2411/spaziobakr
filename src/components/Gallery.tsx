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
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  amount?: number;
  sizes?: string;
  priority?: boolean;
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
          priority={priority}
        />
      </motion.div>
    </div>
  );
}

export function Gallery() {
  const { t } = useT();
  const captions = t.gallery.captions;

  return (
    <section
      id="space"
      className="relative bg-bone py-[clamp(4rem,10vw,8rem)]"
    >
      <div className="container-wide mb-[clamp(3rem,8vw,6rem)] grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <div className="eyebrow mb-6 text-ink/60">{t.gallery.eyebrow}</div>
            <h2
              className="display text-balance"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)" }}
            >
              <SplitReveal text={t.gallery.title} />
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Row 1 — left big image + caption right */}
      <div className="container-wide mb-[clamp(3rem,7vw,5rem)] grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-8">
          <ParallaxImage
            src={photos.gallery[0].src}
            alt={photos.gallery[0].alt}
            sizes="(max-width: 768px) 100vw, 66vw"
            className="aspect-[4/5] md:aspect-[5/6]"
          />
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:self-end">
          <Caption
            num="01"
            title={captions[0].title}
            body={captions[0].body}
          />
        </Reveal>
      </div>

      {/* Row 2 — right big image + caption left, sticky */}
      <div className="container-wide mb-[clamp(3rem,7vw,5rem)] grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
        <Reveal className="order-2 md:order-1 md:col-span-4 md:self-start md:pt-12">
          <Caption
            num="02"
            title={captions[1].title}
            body={captions[1].body}
          />
        </Reveal>
        <Reveal delay={0.1} className="order-1 md:order-2 md:col-span-8">
          <ParallaxImage
            src={photos.gallery[1].src}
            alt={photos.gallery[1].alt}
            sizes="(max-width: 768px) 100vw, 66vw"
            className="aspect-[3/4] md:aspect-[3/4]"
          />
        </Reveal>
      </div>

      {/* Row 3 — full-bleed wide */}
      <Reveal>
        <ParallaxImage
          src={photos.gallery[2].src}
          alt={photos.gallery[2].alt}
          sizes="100vw"
          className="aspect-[16/9] md:aspect-[16/7]"
          amount={8}
        />
      </Reveal>

      {/* Row 4 — three-up grid */}
      <div className="container-wide mt-[clamp(3rem,7vw,5rem)] grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
        <Reveal className="col-span-2 md:col-span-5">
          <ParallaxImage
            src={photos.gallery[3].src}
            alt={photos.gallery[3].alt}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="aspect-[4/5]"
          />
        </Reveal>
        <Reveal delay={0.1} className="col-span-1 md:col-span-4 md:mt-24">
          <ParallaxImage
            src={photos.gallery[4].src}
            alt={photos.gallery[4].alt}
            sizes="(max-width: 768px) 50vw, 33vw"
            className="aspect-[3/4]"
          />
        </Reveal>
        <Reveal delay={0.2} className="col-span-1 md:col-span-3 md:mt-12">
          <Caption
            num="03"
            title={captions[2].title}
            body={captions[2].body}
            small
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
  small,
}: {
  num: string;
  title: string;
  body: string;
  small?: boolean;
}) {
  return (
    <div>
      <div className="eyebrow mb-3 text-ink/40">{num}</div>
      <h3
        className="display mb-3"
        style={{ fontSize: small ? "1.25rem" : "clamp(1.5rem, 2.5vw, 2.25rem)" }}
      >
        {title}
      </h3>
      <p className={`text-ink/70 ${small ? "text-sm" : "text-base"}`}>{body}</p>
    </div>
  );
}
