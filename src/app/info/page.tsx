"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BrandWatermark } from "@/components/BrandWatermark";
import { useT } from "@/i18n/context";
import { photos } from "@/lib/photos";
import { Reveal, SplitReveal } from "@/components/Reveal";

export default function InfoPage() {
  const { t } = useT();
  return (
    <main className="bg-bone">
      <Navigation variant="page" />

      <section className="container-wide pt-[calc(var(--header-h)+clamp(3rem,10vw,7rem))] pb-[clamp(2rem,6vw,4rem)]">
        <Reveal>
          <Link
            href="/"
            className="eyebrow mb-12 inline-flex items-center gap-2 text-ink/60 transition-colors hover:text-ink"
          >
            ← {t.info.back}
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-8">
            <h1
              className="display text-balance leading-[0.95]"
              style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)" }}
            >
              <SplitReveal text={t.info.title} />
            </h1>
          </div>
          <Reveal delay={0.2} className="md:col-span-4 md:self-end">
            <p className="text-ink/70">{t.info.sub}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-wide pb-[clamp(4rem,10vw,8rem)]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5 md:sticky md:top-32 md:self-start">
            <div className="relative aspect-[4/5] overflow-hidden bg-bone-deep">
              <Image
                src={photos.gallery[0].src}
                alt={photos.gallery[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover photo-mood"
              />
            </div>
          </Reveal>

          <div className="md:col-span-7">
            <ol className="border-t hairline">
              {t.info.sections.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={i * 0.05}
                  className="border-b hairline"
                >
                  <li className="grid grid-cols-12 gap-4 py-8">
                    <span className="eyebrow col-span-12 text-ink/40 md:col-span-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="col-span-12 md:col-span-10">
                      <h2
                        className="display mb-4"
                        style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                      >
                        {s.title}
                      </h2>
                      <ul className="space-y-2 text-ink/75">
                        {s.body.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <BrandWatermark />
      <Footer />
    </main>
  );
}
