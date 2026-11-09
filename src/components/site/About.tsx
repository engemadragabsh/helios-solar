"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Headphones, CheckCircle2 } from "lucide-react";
import { useT } from "./LanguageProvider";
import { AnimatedCounter } from "./AnimatedCounter";

export function About() {
  const t = useT();

  const stats = [
    { value: 180, suffix: "+", label: t.stats.projects },
    { value: 25, suffix: " MW", label: t.stats.mw },
    { value: 12, suffix: "+", label: t.stats.experience },
    { value: 3200, suffix: "+", label: t.stats.co2 },
  ];

  const highlights = [
    { icon: Award, label: t.about.highlight1 },
    { icon: ShieldCheck, label: t.about.highlight2 },
    { icon: Headphones, label: t.about.highlight3 },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary mb-3">
            <span className="w-8 h-px bg-brand-gold" />
            {t.about.tag}
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-5 leading-tight">
            {t.about.title}
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-4"
          >
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                {p}
              </p>
            ))}

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-3 pt-6">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/40"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <h.icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{h.label}</span>
                </div>
              ))}
            </div>

            {/* Trust list */}
            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2">
              {[
                t.about.highlight1,
                t.about.highlight2,
                t.about.highlight3,
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-brand-bright" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-brand-gradient p-6 lg:p-8 text-white shadow-2xl shadow-brand-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-brand-gold/15 blur-3xl pointer-events-none" />
              <div className="relative">
                <h3 className="text-xl lg:text-2xl font-bold mb-1">
                  {useT().stats.experience.includes("خبرة")
                    ? "أرقام تتحدث عنّا"
                    : "Numbers speak for us"}
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  {useT().stats.experience.includes("خبرة")
                    ? "نتائج ملموسة على مدى أكثر من عقد من العمل"
                    : "Tangible results across more than a decade of work"}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-white/10 backdrop-blur-sm p-4 lg:p-5 border border-white/15"
                    >
                      <div className="text-3xl lg:text-4xl font-bold text-brand-gold mb-1">
                        <AnimatedCounter
                          to={s.value}
                          suffix={s.suffix}
                        />
                      </div>
                      <div className="text-xs lg:text-sm text-white/70 leading-tight">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
