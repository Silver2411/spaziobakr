"use client";

import { useT } from "@/i18n/context";
import clsx from "clsx";

export function LanguageSwitch({ className }: { className?: string }) {
  const { locale, setLocale } = useT();
  return (
    <div
      className={clsx(
        "eyebrow inline-flex items-center gap-[2px] text-ink/70",
        className
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("it")}
        data-cursor="IT"
        className={clsx(
          "px-1 py-0.5 transition-colors duration-300",
          locale === "it" ? "text-ink" : "hover:text-ink"
        )}
        aria-pressed={locale === "it"}
      >
        IT
      </button>
      <span aria-hidden className="text-ink/30">·</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        data-cursor="EN"
        className={clsx(
          "px-1 py-0.5 transition-colors duration-300",
          locale === "en" ? "text-ink" : "hover:text-ink"
        )}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}
