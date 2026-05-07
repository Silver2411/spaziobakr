"use client";

import { useT } from "@/i18n/context";
import { Reveal, SplitReveal } from "./Reveal";
import { FloorPlan } from "./FloorPlan";

export function Specs() {
  const { t } = useT();

  return (
    <section
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
            <p className="max-w-prose text-base text-bone/70">
              {t.specs.note}
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <div className="mb-12 rounded-sm border border-bone/15 bg-shadow/40 p-6 md:p-10">
              <FloorPlan />
            </div>
          </Reveal>
          <dl className="border-t border-bone/15">
            {t.specs.rows.map((row, i) => (
              <Reveal
                key={row.label}
                delay={i * 0.05}
                className="border-b border-bone/15"
              >
                <div className="grid grid-cols-12 items-baseline gap-4 py-5">
                  <dt
                    className="display col-span-5 text-bone md:col-span-5"
                    style={{ fontSize: "clamp(1.125rem, 2vw, 1.625rem)" }}
                  >
                    {row.label}
                  </dt>
                  <dd className="col-span-7 text-sm text-bone/65 md:col-span-7 md:text-base">
                    {row.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
