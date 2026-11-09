"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { useT } from "./LanguageProvider";
import { cn } from "@/lib/utils";

const SLIDE_IMAGES = [
  "/slider/slide-1-power-station.png",
  "/slider/slide-2-installation.png",
  "/slider/slide-3-panels.png",
  "/slider/slide-4-control.png",
  "/slider/slide-5-carport.png",
];

const AUTO_PLAY_MS = 3000; // 3 seconds

export function ImageSlider() {
  const t = useT();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const total = SLIDE_IMAGES.length;

  const goNext = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  // Auto-play every 3 seconds (pauses on hover/focus)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, AUTO_PLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, total]);

  // Preload all images on mount
  useEffect(() => {
    SLIDE_IMAGES.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () =>
        setLoadedImages((prev) => ({ ...prev, [i]: true }));
      img.onerror = () =>
        setFailedImages((prev) => ({ ...prev, [i]: true }));
    });
  }, []);

  const handleImageError = (i: number) => {
    setFailedImages((prev) => ({ ...prev, [i]: true }));
  };

  return (
    <section
      id="showcase"
      className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden"
      aria-roledescription="carousel"
      aria-label={t.slider.title}
    >
      {/* Decorative blob */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-bright/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-gold/8 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary mb-3">
            <span className="w-8 h-px bg-brand-gold" />
            {t.slider.tag}
            <span className="w-8 h-px bg-brand-gold" />
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-5 leading-tight">
            {t.slider.title}
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            {t.slider.subtitle}
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-primary/15 border border-border/40"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            {/* Slides */}
            <div className="relative aspect-[16/9] sm:aspect-[2/1] w-full bg-brand-deep">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  {failedImages[current] ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/60 bg-brand-gradient">
                      <ImageOff className="w-10 h-10 mb-2" />
                      <span className="text-sm">
                        {t.slider.slides[current]?.title || "Image"}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={SLIDE_IMAGES[current]}
                      alt={t.slider.slides[current]?.title || `Slide ${current + 1}`}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(current)}
                      loading="eager"
                    />
                  )}

                  {/* Gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/60 via-transparent to-transparent rtl:bg-gradient-to-l" />

                  {/* Caption */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`caption-${current}`}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="max-w-2xl"
                      >
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                          {t.slider.slides[current]?.title}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed">
                          {t.slider.slides[current]?.desc}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Slide counter */}
                  <div className="absolute top-4 end-4 sm:top-6 sm:end-6 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                    <span className="text-xs sm:text-sm font-semibold text-white tabular-nums" dir="ltr">
                      {current + 1} / {total}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goPrev}
              aria-label={t.slider.prev}
              className="absolute top-1/2 -translate-y-1/2 start-3 sm:start-5 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-light border border-white/30 hover:bg-white/25 transition-all flex items-center justify-center group"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={goNext}
              aria-label={t.slider.next}
              className="absolute top-1/2 -translate-y-1/2 end-3 sm:end-5 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-light border border-white/30 hover:bg-white/25 transition-all flex items-center justify-center group"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Indicators / progress bars */}
            <div className="absolute bottom-0 inset-x-0 flex items-center justify-center gap-2 p-3 z-10">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`${t.slider.indicator} ${i + 1}`}
                  aria-current={i === current}
                  className="group/dot relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                  style={{
                    width: i === current ? "36px" : "12px",
                    background: "rgba(255,255,255,0.35)",
                  }}
                >
                  {i === current && !paused && (
                    <motion.div
                      key={`prog-${current}-${paused}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTO_PLAY_MS / 1000, ease: "linear" }}
                      className="absolute inset-y-0 start-0 bg-brand-gold"
                    />
                  )}
                  {i === current && paused && (
                    <div className="absolute inset-y-0 start-0 w-full bg-brand-gold/80" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
            {SLIDE_IMAGES.map((src, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`${t.slider.indicator} ${i + 1}`}
                className={cn(
                  "relative aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all",
                  i === current
                    ? "border-brand-gold ring-2 ring-brand-gold/30"
                    : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                {!failedImages[i] && (
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(i)}
                  />
                )}
                {failedImages[i] && (
                  <div className="w-full h-full bg-brand-gradient flex items-center justify-center">
                    <ImageOff className="w-4 h-4 text-white/60" />
                  </div>
                )}
                {!loadedImages[i] && !failedImages[i] && (
                  <div className="absolute inset-0 bg-secondary animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
