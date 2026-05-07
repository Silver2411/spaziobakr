"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { defaultLocale, dictionaries, type Locale } from "./dictionaries";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (typeof dictionaries)[Locale];
};

const LanguageCtx = createContext<Ctx | null>(null);

const STORAGE_KEY = "bakr.locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && (saved === "it" || saved === "en")) {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    } catch {}
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    } catch {}
  }, []);

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale]
  );

  return (
    <LanguageCtx.Provider value={value}>{children}</LanguageCtx.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageCtx);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
}
