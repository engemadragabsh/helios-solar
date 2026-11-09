"use client";

import { motion } from "framer-motion";
import { Factory, Building2, Hotel, Wheat, Store, HardHat } from "lucide-react";
import { useLanguage } from "@/store/language-store";

const PARTNERS = [
  { icon: Factory, ar: "المصانع", en: "Factories" },
  { icon: Building2, ar: "المبانى التجارية", en: "Commercial Buildings" },
  { icon: Hotel, ar: "الفنادق والمنتجعات", en: "Hotels & Resorts" },
  { icon: Wheat, ar: "المزارع", en: "Farms" },
  { icon: Store, ar: "المولات", en: "Malls" },
  { icon: HardHat, ar: "المقاولات", en: "Contracting" },
];

export function ClientStrip() {
  const { language } = useLanguage();
  return (
    <section className="py-10 lg:py-14 bg-background border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs lg:text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8"
        >
          {language === "ar"
            ? "نثق بنا في مختلف القطاعات"
            : "Trusted across diverse sectors"}
        </motion.p>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 lg:gap-8">
          {PARTNERS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col items-center gap-2 text-center group"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-secondary/60 border border-border/40 flex items-center justify-center group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 transition-colors">
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-brand-primary" />
                </div>
                <span className="text-xs lg:text-sm font-medium text-muted-foreground">
                  {language === "ar" ? p.ar : p.en}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
