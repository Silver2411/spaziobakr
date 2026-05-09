"use client";

import Link from "next/link";
import { useT } from "@/i18n/context";
import { LanguageSwitch } from "./LanguageSwitch";
import { CircularStamp } from "./Stamp";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="bg-ink text-bone">
      <div className="container-wide py-[clamp(3rem,8vw,6rem)]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="relative md:col-span-6">
            <Logo variant="red" height={120} className="!h-[clamp(48px,12vw,120px)]" />
            <div className="mt-8 hidden text-bone/55 md:block">
              <CircularStamp size={108} />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-4 text-bone/50">Studio</div>
            <ul className="space-y-1 text-bone/80">
              {t.footer.address.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-4 text-bone/50">Contact</div>
            <ul className="space-y-1 text-bone/80">
              {t.footer.contact.map((line) => (
                <li key={line}>
                  {line.includes("@") ? (
                    <a
                      href={`mailto:${line}`}
                      data-cursor="@"
                      className="border-b border-transparent transition-colors hover:border-bone/50"
                    >
                      {line}
                    </a>
                  ) : (
                    line
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-4 text-bone/50">Follow</div>
            <ul className="space-y-1 text-bone/80">
              {t.footer.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="↗"
                    className="border-b border-transparent transition-colors hover:border-bone/50"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[clamp(3rem,8vw,6rem)] flex flex-col gap-6 border-t border-bone/15 pt-8 text-sm text-bone/60 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <span>{t.footer.legal}</span>
            <span className="eyebrow text-bone/40">
              Visual Identity / V.01 — MMXXVI
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/info" className="transition-colors hover:text-bone">
              {t.nav.info}
            </Link>
            <Link href="/booking" className="transition-colors hover:text-bone">
              {t.nav.book}
            </Link>
            <LanguageSwitch className="text-bone/70" />
          </div>
        </div>
      </div>
    </footer>
  );
}
