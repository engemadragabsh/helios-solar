"use client";

import { motion } from "framer-motion";
import { MapPin, Zap, Factory, Building2, Wheat, Hotel, Store, HardHat } from "lucide-react";
import { useT } from "./LanguageProvider";

const TYPE_ICONS = [Factory, Building2, Wheat, Hotel, Store, HardHat];

// Tailwind gradient pairs for project cards
const CARD_GRADIENTS = [
  "from-emerald-600 to-green-800",
  "from-amber-500 to-orange-700",
  "from-lime-600 to-emerald-800",
  "from-teal-600 to-cyan-800",
  "from-green-600 to-teal-800",
  "from-yellow-600 to-amber-800",
];

export function Projects() {
  const t = useT();

  return (
    <section id="projects" className="py-20 lg:py-28 bg-secondary/30">
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
            {t.projects.tag}
            <span className="w-8 h-px bg-brand-gold" />
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-5 leading-tight">
            {t.projects.title}
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {t.projects.items.map((project, i) => {
            const Icon = TYPE_ICONS[i % TYPE_ICONS.length];
            const gradient = CARD_GRADIENTS[i % CARD_GRADIENTS.length];
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl overflow-hidden border border-border/50 bg-card hover:shadow-2xl hover:shadow-brand-primary/10 hover:border-brand-primary/30 transition-all duration-300"
              >
                {/* Header gradient banner */}
                <div className={`relative h-40 lg:h-44 bg-gradient-to-br ${gradient} overflow-hidden`}>
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Solar panel pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-1 opacity-40 transform rotate-12">
                      {Array.from({ length: 16 }).map((_, k) => (
                        <div
                          key={k}
                          className="w-8 h-8 bg-blue-900/40 border border-white/30"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Big icon */}
                  <div className="absolute top-4 end-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Capacity badge */}
                  <div className="absolute bottom-4 start-4 px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-brand-gold" />
                      <span className="text-sm font-bold text-white">{project.capacity}</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-bold text-foreground mb-1.5 leading-tight">
                    {project.name}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                    <span>{project.location}</span>
                  </div>

                  <span className="inline-block px-2.5 py-1 rounded-md bg-brand-primary/10 text-brand-primary text-xs font-semibold mb-3">
                    {project.type}
                  </span>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
