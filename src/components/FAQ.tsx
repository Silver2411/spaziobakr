"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "@/i18n/context";
import { Reveal, SplitReveal } from "./Reveal";

export function FAQ() {
  const { t } = useT();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-bone py-[clamp(4rem,10vw,8rem)]">
      <div className="container-wide grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <Reveal>
            <div className="eyebrow mb-6 text-ink/60">{t.faq.eyebrow}</div>
            <h2
              className="display text-balance"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            >
              <SplitReveal text={t.faq.title} />
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <ul className="border-t hairline">
            {t.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal
                  key={item.q}
                  delay={i * 0.04}
                  className="border-b hairline"
                >
                  <li>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      data-cursor={isOpen ? "−" : "+"}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className="display block max-w-[36ch] flex-1"
                        style={{ fontSize: "clamp(1.125rem, 2.4vw, 1.75rem)" }}
                      >
                        {item.q}
                      </span>
                      <span
                        className="relative mt-2 inline-flex h-6 w-6 shrink-0 items-center justify-center"
                        aria-hidden
                      >
                        <span className="absolute h-px w-4 bg-ink" />
                        <motion.span
                          className="absolute h-px w-4 origin-center bg-ink"
                          animate={{ rotate: isOpen ? 0 : 90 }}
                          transition={{ duration: 0.4, ease: [0.7, 0, 0.2, 1] }}
                        />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.55,
                            ease: [0.7, 0, 0.2, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[60ch] pb-6 pr-10 text-ink/70">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
