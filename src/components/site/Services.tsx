"use client";

import { motion } from "framer-motion";
import {
  PencilRuler,
  Wrench,
  Lightbulb,
  Settings,
  BatteryCharging,
  FileText,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { useT } from "./LanguageProvider";
import { Card } from "@/components/ui/card";

const ICONS = [
  PencilRuler,
  Wrench,
  Lightbulb,
  Settings,
  BatteryCharging,
  FileText,
];

const ICON_COLORS = [
  "text-emerald-700 bg-emerald-100",
  "text-amber-700 bg-amber-100",
  "text-teal-700 bg-teal-100",
  "text-lime-700 bg-lime-100",
  "text-yellow-700 bg-yellow-100",
  "text-green-700 bg-green-100",
];

export function Services() {
  const t = useT();

  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-bright/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-gold/8 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            {t.services.tag}
            <span className="w-8 h-px bg-brand-gold" />
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-5 leading-tight">
            {t.services.title}
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {t.services.items.map((service, i) => {
            const Icon = ICONS[i] || PencilRuler;
            const colorClass = ICON_COLORS[i % ICON_COLORS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="group h-full p-6 lg:p-7 border-border/60 hover:border-brand-primary/40 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300 relative overflow-hidden">
                  {/* Number badge */}
                  <span className="absolute top-4 end-4 text-5xl font-bold text-brand-primary/5 group-hover:text-brand-primary/10 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${colorClass}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-brand-bright mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover arrow */}
                  <div className="mt-5 pt-5 border-t border-border/40 flex items-center justify-between">
                    <span className="text-sm font-semibold text-brand-primary group-hover:text-brand-deep transition-colors">
                      {t.common.learnMore}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-brand-primary group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
