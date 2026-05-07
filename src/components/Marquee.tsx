"use client";

import { useT } from "@/i18n/context";

export function Marquee() {
  const { t } = useT();
  const items = t.marquee;

  // Repeat enough to ensure seamless loop
  const repeated = Array.from({ length: 4 }, () => items).flat();

  return (
    <div
      className="overflow-hidden border-y hairline bg-bone py-6"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {repeated.concat(repeated).map((s, i) => (
          <span key={i} className="flex items-center gap-12">
            <span
              className="display text-raw"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            >
              {i % 2 === 0 ? <span className="display-italic">{s}</span> : s}
            </span>
            <span
              className="text-raw/40"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
            >
              ✶
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
