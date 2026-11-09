"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Calculator, Sun, Zap, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/store/language-store";
import { useT } from "./LanguageProvider";

export function Hero() {
  const t = useT();
  const { language } = useLanguage();
  const ArrowIcon = language === "ar" ? ArrowLeft : ArrowRight;

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const heroStats = [
    { value: "180+", label: t.hero.stat2 },
    { value: "25 MW", label: t.hero.stat1 },
    { value: "150+", label: t.hero.stat3 },
    { value: "12+", label: t.hero.stat4 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center pt-24 lg:pt-28 pb-16 overflow-hidden bg-brand-radial"
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Animated sun glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-gold/20 blur-[120px] animate-pulse-sun pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-bright/15 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-white"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
              <Sun className="w-4 h-4 text-brand-gold" />
              <span className="text-sm font-medium text-white/90">{t.hero.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] text-white mb-6">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
              <Button
                onClick={() => scrollTo("contact")}
                size="lg"
                className="bg-brand-gold hover:bg-brand-gold-light text-brand-deep font-semibold text-base px-6 h-12 shadow-lg shadow-brand-gold/20"
              >
                {t.hero.ctaPrimary}
                <ArrowIcon className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
              </Button>
              <Button
                onClick={() => scrollTo("calculator")}
                size="lg"
                variant="outline"
                className="bg-white/5 border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold text-base px-6 h-12 backdrop-blur-sm"
              >
                <Calculator className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                {t.hero.ctaSecondary}
              </Button>
            </div>

            {/* Hero stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 max-w-2xl">
              {heroStats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="border-s-2 border-brand-gold/60 ps-3 rtl:border-s-0 rtl:border-e-2 rtl:ps-0 rtl:pe-3"
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand-gold">
                    {s.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1 leading-tight">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Sun in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-brand-gold via-amber-400 to-orange-500 shadow-[0_0_80px_rgba(245,181,10,0.5)] animate-pulse-sun">
                  {/* Sun rays */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 360) / 12;
                    return (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 origin-left h-1 w-16 lg:w-20 bg-gradient-to-r from-brand-gold to-transparent rounded-full"
                        style={{
                          transform: `rotate(${angle}deg) translateX(110px)`,
                          transformOrigin: "left center",
                        }}
                      />
                    );
                  })}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 opacity-90 flex items-center justify-center">
                    <Sun className="w-20 h-20 lg:w-24 lg:h-24 text-amber-900" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Floating feature cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-8 left-0 lg:-left-6 glass-light rounded-2xl p-3 lg:p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-brand-bright/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60 font-medium">
                      {language === "ar" ? "كفاءة" : "Efficiency"}
                    </div>
                    <div className="text-sm text-white font-bold">98.5%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-12 right-0 lg:-right-6 glass-light rounded-2xl p-3 lg:p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-brand-bright/20 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60 font-medium">
                      {language === "ar" ? "ضمان" : "Warranty"}
                    </div>
                    <div className="text-sm text-white font-bold">
                      {language === "ar" ? "٢٥ سنة" : "25 yrs"}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute top-1/2 -translate-y-1/2 right-0 lg:-right-4 glass-light rounded-2xl p-3 lg:p-4 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-brand-bright/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60 font-medium">
                      {language === "ar" ? "عائد سنوي" : "Annual ROI"}
                    </div>
                    <div className="text-sm text-white font-bold">22%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
