"use client";

import { useEffect, type ReactNode } from "react";
import { useLanguage } from "@/store/language-store";
import { translations } from "@/lib/i18n/translations";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useLanguage((s) => s.language);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = language;
    html.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  // Pre-hydration: apply direction from localStorage to avoid FOUC
  useEffect(() => {
    try {
      const stored = localStorage.getItem("helios-language");
      if (stored) {
        const parsed = JSON.parse(stored);
        const lang = parsed?.state?.language as "ar" | "en" | undefined;
        if (lang) {
          document.documentElement.lang = lang;
          document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        }
      }
    } catch {
      // ignore
    }
  }, []);

  return <>{children}</>;
}

export function useT() {
  const language = useLanguage((s) => s.language);
  return translations[language];
}
