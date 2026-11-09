"use client";

import { Sun, MapPin, Phone, Mail, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { useT } from "./LanguageProvider";

const NAV_IDS = ["home", "about", "services", "projects", "calculator", "contact"] as const;

const SERVICE_LIST_KEYS = [0, 1, 2, 3] as const;

export function Footer() {
  const t = useT();

  const handleNav = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <footer className="mt-auto bg-brand-deep text-white relative overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="h-1 bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold" />

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-brand-gold/8 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center shadow-md">
                <Sun className="w-6 h-6 text-brand-gold" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-lg">{t.companyName}</div>
                <div className="text-xs text-white/60">
                  {t.companyTagline}
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-5 max-w-md">
              {t.footer.about}
            </p>

            {/* Social */}
            <div className="flex items-center gap-2">
              {[Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-gold hover:text-brand-deep transition-colors flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {NAV_IDS.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => handleNav(id)}
                    className="text-sm text-white/70 hover:text-brand-gold transition-colors"
                  >
                    {t.nav[id]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-4">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_LIST_KEYS.map((k) => (
                <li key={k}>
                  <button
                    onClick={() => handleNav("services")}
                    className="text-start text-sm text-white/70 hover:text-brand-gold transition-colors"
                  >
                    {t.services.items[k].title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-4">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/70 leading-snug">
                  {t.contact.addressValue}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span
                  className="text-sm text-white/70"
                  dir="ltr"
                >
                  {t.contact.phoneValue}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span
                  className="text-sm text-white/70"
                  dir="ltr"
                >
                  {t.contact.emailValue}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 lg:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">{t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/50 hover:text-brand-gold transition-colors">
              {t.footer.policy}
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-brand-gold transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
