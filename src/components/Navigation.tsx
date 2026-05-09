"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useT } from "@/i18n/context";
import { LanguageSwitch } from "./LanguageSwitch";
import clsx from "clsx";

/**
 * Acne-Studios-inspired minimal navigation: text-only labels, no logo
 * (the logo lives as a giant wordmark in the page flow). Two columns —
 * primary nav left, booking + lang right.
 */
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
          { href: "/", label: "Home" },
          { href: "/#space", label: t.nav.spaces },
          { href: "/#uses", label: t.nav.services },
          { href: "/info", label: t.nav.info },
        ];

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled
            ? "bg-bone/85 text-ink backdrop-blur-md"
            : variant === "home"
              ? "bg-transparent text-bone"
              : "bg-transparent text-ink"
        )}
      >
        <nav className="container-wide flex h-[var(--header-h)] items-center justify-between gap-6">
          {/* Left: minimal text-only links */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="eyebrow opacity-80 transition-opacity hover:opacity-100"
                data-cursor="↓"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile: hamburger left */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-10 w-10 items-center justify-center md:hidden"
            data-cursor="Menu"
          >
            <span
              className={clsx(
                "absolute h-px w-6 bg-current transition-transform duration-500",
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              className={clsx(
                "absolute h-px w-6 bg-current transition-transform duration-500",
                open ? "-translate-y-0 -rotate-45" : "translate-y-1.5"
              )}
            />
          </button>

          {/* Right: book + lang */}
          <div className="flex items-center gap-5">
            <LanguageSwitch />
            <Link
              href="/booking"
              data-cursor="→"
              className="eyebrow border-b border-current pb-0.5 opacity-90 transition-opacity hover:opacity-100"
            >
              {t.nav.book} →
            </Link>
          </div>
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
            className="fixed inset-0 z-40 bg-bone text-ink md:hidden"
          >
            <div className="container-wide flex h-full flex-col justify-between pt-[calc(var(--header-h)+2rem)] pb-12">
              <div className="flex flex-col gap-6">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + i * 0.06,
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
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                  }}
                >
                  <Link
                    href="/booking"
                    onClick={() => setOpen(false)}
                    className="display mt-2 block text-5xl"
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
                <div className="eyebrow opacity-60">Milano · IT</div>
                <LanguageSwitch />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
