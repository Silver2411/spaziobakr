"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "@/i18n/context";
import { Reveal, SplitReveal } from "./Reveal";

export function UseCases() {
  const { t } = useT();
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section
      id="uses"
      className="relative border-y hairline bg-bone py-[clamp(4rem,10vw,8rem)]"
    >
      <div className="container-wide mb-[clamp(2rem,6vw,5rem)] grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-2">
          <Reveal>
            <div className="eyebrow text-ink/60">{t.useCases.eyebrow}</div>
          </Reveal>
        </div>
        <div className="md:col-span-9">
          <h2
            className="display text-balance"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)" }}
          >
            <SplitReveal text={t.useCases.title} />
          </h2>
        </div>
      </div>

      <div className="container-wide">
        <ul className="border-t hairline">
          {t.useCases.items.map((item, i) => (
            <Reveal
              key={item.num}
              delay={i * 0.04}
              className="border-b hairline"
            >
              <li
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="group relative grid grid-cols-12 items-baseline gap-4 py-6 md:py-8"
              >
                <span className="eyebrow col-span-2 text-ink/40 md:col-span-1">
                  {item.num}
                </span>
                <h3
                  className="display col-span-7 transition-transform duration-700 ease-out md:col-span-5 md:group-hover:-translate-x-2"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
                >
                  {item.label}
                </h3>
                <p className="col-span-12 text-sm text-ink/70 md:col-span-5 md:text-base">
                  {item.body}
                </p>
                <span className="col-span-3 hidden justify-end text-right md:col-span-1 md:flex">
                  <AnimatePresence mode="wait">
                    {hover === i ? (
                      <motion.span
                        key="arrow"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        className="display-italic text-clay"
                        style={{ fontSize: "1.75rem" }}
                      >
                        →
                      </motion.span>
                    ) : (
                      <motion.span
                        key="dot"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-ink/30"
                      >
                        ✶
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
