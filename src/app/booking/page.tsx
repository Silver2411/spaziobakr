"use client";

import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookingForm } from "@/components/BookingForm";
import { useT } from "@/i18n/context";
import { Reveal, SplitReveal } from "@/components/Reveal";

export default function BookingPage() {
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
            ← {t.booking.back}
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-8">
            <h1
              className="display text-balance leading-[0.95]"
              style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)" }}
            >
              <SplitReveal text={t.booking.title} />
            </h1>
          </div>
          <Reveal delay={0.2} className="md:col-span-4 md:self-end">
            <p className="text-ink/70">{t.booking.sub}</p>
          </Reveal>
        </div>
      </section>

      <section className="container-wide pb-[clamp(4rem,10vw,8rem)]">
        <div className="md:ml-[8.333%] md:max-w-[83%]">
          <BookingForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
