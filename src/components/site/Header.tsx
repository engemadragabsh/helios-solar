"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Languages, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/store/language-store";
import { useT } from "./LanguageProvider";
import { cn } from "@/lib/utils";

const NAV_IDS = ["home", "about", "services", "projects", "calculator", "contact"] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-[#031a12]/90 backdrop-blur-md shadow-sm border-b border-border/40"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-2.5 group"
            aria-label={t.companyFullName}
          >
            <div className="relative w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-brand-gradient flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Sun className="w-5 h-5 lg:w-6 lg:h-6 text-brand-gold" />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-gold animate-pulse-sun" />
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span
                className={cn(
                  "font-bold text-lg lg:text-xl transition-colors",
                  scrolled ? "text-foreground" : "text-foreground"
                )}
              >
                {t.companyName}
              </span>
              <span
                className={cn(
                  "text-[10px] lg:text-xs font-medium",
                  scrolled ? "text-muted-foreground" : "text-muted-foreground"
                )}
              >
                {language === "ar" ? "للطاقة الشمسية" : "Solar Energy"}
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_IDS.map((id) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/60 transition-colors"
              >
                {t.nav[id]}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-border/60 hover:border-brand-primary/40 hover:bg-secondary/60 transition-colors text-sm font-semibold"
              aria-label="Toggle language"
            >
              <Languages className="w-4 h-4 text-brand-primary" />
              <span>{t.common.languageSwitch}</span>
            </button>

            <Button
              onClick={() => handleNav("contact")}
              className="hidden sm:inline-flex bg-brand-primary hover:bg-brand-deep text-primary-foreground shadow-md"
              size="default"
            >
              <Phone className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
              {t.nav.contact}
            </Button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary/60 transition-colors"
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-[#031a12] border-b border-border/40"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_IDS.map((id) => (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className="text-start px-4 py-3 rounded-lg text-sm font-medium hover:bg-secondary/60 transition-colors"
                >
                  {t.nav[id]}
                </button>
              ))}
              <div className="flex items-center gap-2 mt-2 pt-2 border-t border-border/40">
                <button
                  onClick={toggleLanguage}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border/60 text-sm font-semibold"
                >
                  <Languages className="w-4 h-4 text-brand-primary" />
                  {t.common.languageSwitch}
                </button>
                <Button
                  onClick={() => handleNav("contact")}
                  className="flex-1 bg-brand-primary hover:bg-brand-deep text-primary-foreground"
                >
                  {t.nav.contact}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
