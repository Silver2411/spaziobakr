"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "@/i18n/context";
import { LanguageSwitch } from "./LanguageSwitch";
import { MilanoTime } from "./Stamp";
import clsx from "clsx";

export function Navigation({ variant = "home" }: { variant?: "home" | "page" }) {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links =
    variant === "home"
      ? [
          { href: "#space", label: t.nav.spaces },
          { href: "#uses", label: t.nav.services },
          { href: "/info", label: t.nav.info },
        ]
      : [
          { href: "/#space", label: t.nav.spaces },
          { href: "/#uses", label: t.nav.services },
          { href: "/info", label: t.nav.info },
        ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-bone/85 backdrop-blur-md hairline border-b"
            : "bg-transparent"
        )}
      >
        <nav className="container-wide flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link
            href="/"
            data-cursor="Home"
            className="display flex items-baseline gap-1.5 text-[1.5rem] leading-none tracking-[-0.025em]"
          >
            <span>Spazio</span>
            <span className="display-italic text-clay">BAKR</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="eyebrow text-ink/70 transition-colors hover:text-ink"
                data-cursor="↓"
              >
                {l.label}
              </Link>
            ))}
            <MilanoTime className="text-ink/55" />
            <LanguageSwitch />
            <Link
              href="/booking"
              data-cursor="→"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-ink px-4 py-2 text-[0.8125rem] font-medium tracking-wide"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-bone">
                {t.nav.book}
              </span>
              <span
                aria-hidden
                className="absolute inset-0 -z-0 translate-y-full bg-ink transition-transform duration-500 group-hover:translate-y-0"
              />
            </Link>
          </div>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-10 w-10 items-center justify-center md:hidden"
            data-cursor="Menu"
          >
            <span
              className={clsx(
                "absolute h-px w-6 bg-ink transition-transform duration-500",
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              className={clsx(
                "absolute h-px w-6 bg-ink transition-transform duration-500",
                open ? "-translate-y-0 -rotate-45" : "translate-y-1.5"
              )}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobilemenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-bone md:hidden"
          >
            <div className="container-wide flex h-full flex-col justify-between pt-[calc(var(--header-h)+2rem)] pb-12">
              <div className="flex flex-col gap-6">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + i * 0.08,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="display block text-5xl"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link
                    href="/booking"
                    onClick={() => setOpen(false)}
                    className="display-italic mt-2 block text-5xl text-clay"
                  >
                    {t.nav.book} →
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-end justify-between"
              >
                <div className="eyebrow text-ink/60">Milano · IT</div>
                <LanguageSwitch />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
