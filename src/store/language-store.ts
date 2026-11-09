"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { translations, type Language } from "@/lib/i18n/translations";

type LanguageStore = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof translations.ar;
};

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: "ar",
      setLanguage: (lang) => set({ language: lang }),
      toggleLanguage: () =>
        set({ language: get().language === "ar" ? "en" : "ar" }),
      t: translations.ar,
    }),
    {
      name: "helios-language",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ language: state.language }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.t = translations[state.language];
        }
      },
    }
  )
);

// Helper hook to get the active translation object
export function useTranslation() {
  const language = useLanguage((s) => s.language);
  return translations[language];
}
