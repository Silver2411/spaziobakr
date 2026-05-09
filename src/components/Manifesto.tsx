"use client";

import { useT } from "@/i18n/context";
import { Reveal, SplitReveal } from "./Reveal";

/**
 * Photo-wall variant manifesto — dark bg (matches PhotoWall preceding) +
 * light text. Text-only, brief brand statement.
 */
export function Manifesto() {
  const { t } = useT();
  return (
    <section className="relative bg-shadow text-bone py-[clamp(6rem,16vw,12rem)]">
      <div className="container-wide grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-3">
          <div className="eyebrow text-bone/55">{t.manifesto.eyebrow}</div>
        </Reveal>
        <div className="md:col-span-8">
          <h2
            className="display text-balance leading-[0.96]"
            style={{ fontSize: "clamp(2rem, 4.4vw, 4rem)" }}
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
