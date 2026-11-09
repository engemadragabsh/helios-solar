"use client";

import { motion } from "framer-motion";
import {
  Award,
  Package,
  TrendingUp,
  Activity,
  ShieldCheck,
  CalendarClock,
} from "lucide-react";
import { useT } from "./LanguageProvider";

const ICONS = [Award, Package, TrendingUp, Activity, ShieldCheck, CalendarClock];

export function WhyUs() {
  const t = useT();

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary mb-3">
            <span className="w-8 h-px bg-brand-gold" />
            {t.whyUs.tag}
            <span className="w-8 h-px bg-brand-gold" />
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-5 leading-tight">
            {t.whyUs.title}
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            {t.whyUs.subtitle}
          </p>
        </motion.div>

        {/* Grid of features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {t.whyUs.items.map((item, i) => {
            const Icon = ICONS[i] || Award;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative p-6 lg:p-7 rounded-2xl border border-border/50 bg-card hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <span className="text-3xl font-bold text-brand-primary/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
