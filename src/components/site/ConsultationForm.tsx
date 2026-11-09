"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send,
  CheckCircle2,
  Loader2,
  User,
  Building2,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/store/language-store";
import { useT } from "./LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const schema = z.object({
  fullName: z.string().min(2).max(120),
  company: z.string().max(200).optional().or(z.literal("")),
  phone: z.string().min(7).max(20),
  email: z.string().email(),
  projectType: z.string().min(1),
  projectSize: z.string().min(1),
  location: z.string().max(200).optional().or(z.literal("")),
  message: z.string().max(3000).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

export function ConsultationForm() {
  const t = useT();
  const { language } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      company: "",
      phone: "",
      email: "",
      projectType: "",
      projectSize: "",
      location: "",
      message: "",
    },
  });

  const projectTypeValue = watch("projectType");
  const projectSizeValue = watch("projectSize");

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setServerError(null);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, language }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Request failed");
      }
      setSuccess(true);
      reset();
    } catch (err) {
      setServerError(t.form.error);
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, label: t.contact.address, value: t.contact.addressValue },
    { icon: Phone, label: t.contact.phone, value: t.contact.phoneValue },
    { icon: Mail, label: t.contact.email, value: t.contact.emailValue },
    { icon: Clock, label: t.contact.hours, value: t.contact.hoursValue },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
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
            {t.form.tag}
            <span className="w-8 h-px bg-brand-gold" />
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-5 leading-tight">
            {t.form.title}
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            {t.form.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Contact info side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="bg-brand-gradient rounded-3xl p-6 lg:p-8 text-white h-full relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-brand-gold/15 blur-2xl pointer-events-none" />
              <h3 className="text-xl lg:text-2xl font-bold mb-6 relative">
                {t.contact.title}
              </h3>

              <div className="space-y-5 relative">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-white/60 mb-1">{info.label}</div>
                      <div className="text-sm lg:text-base text-white font-medium leading-snug">
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/201001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold transition-colors relative"
              >
                <MessageCircle className="w-5 h-5" />
                {t.contact.whatsappValue}
              </a>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <Card className="p-6 lg:p-8 border-border/50">
              {success ? (
                <div className="flex flex-col items-center justify-center text-center py-12 lg:py-16">
                  <div className="w-16 h-16 rounded-full bg-brand-bright/15 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-9 h-9 text-brand-bright" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                    {language === "ar" ? "تم استلام طلبك!" : "Request received!"}
                  </h3>
                  <p className="text-muted-foreground max-w-md mb-6">{t.form.success}</p>
                  <Button
                    variant="outline"
                    onClick={() => setSuccess(false)}
                  >
                    {language === "ar" ? "إرسال طلب آخر" : "Submit another request"}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Full name */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-sm font-medium">
                        {t.form.fullName} <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute top-1/2 -translate-y-1/2 start-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <Input
                          id="fullName"
                          className="ps-9 rtl:ps-3 rtl:pe-9"
                          placeholder={t.form.fullNamePlaceholder}
                          {...register("fullName")}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-xs text-destructive">{t.form.required}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium">
                        {t.form.company}
                      </Label>
                      <div className="relative">
                        <Building2 className="absolute top-1/2 -translate-y-1/2 start-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <Input
                          id="company"
                          className="ps-9 rtl:ps-3 rtl:pe-9"
                          placeholder={t.form.companyPlaceholder}
                          {...register("company")}
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        {t.form.phone} <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Phone className="absolute top-1/2 -translate-y-1/2 start-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <Input
                          id="phone"
                          type="tel"
                          dir="ltr"
                          className="ps-9 rtl:ps-3 rtl:pe-9 text-start"
                          placeholder={t.form.phonePlaceholder}
                          {...register("phone")}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-destructive">{t.form.invalidPhone}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        {t.form.email} <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute top-1/2 -translate-y-1/2 start-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <Input
                          id="email"
                          type="email"
                          dir="ltr"
                          className="ps-9 rtl:ps-3 rtl:pe-9 text-start"
                          placeholder={t.form.emailPlaceholder}
                          {...register("email")}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-destructive">{t.form.invalidEmail}</p>
                      )}
                    </div>

                    {/* Project type */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        {t.form.projectType} <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={projectTypeValue}
                        onValueChange={(v) => setValue("projectType", v, { shouldValidate: true })}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={t.form.projectType} />
                        </SelectTrigger>
                        <SelectContent>
                          {t.form.projectTypes.map((pt) => (
                            <SelectItem key={pt} value={pt}>
                              {pt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.projectType && (
                        <p className="text-xs text-destructive">{t.form.required}</p>
                      )}
                    </div>

                    {/* Project size */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        {t.form.projectSize} <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={projectSizeValue}
                        onValueChange={(v) => setValue("projectSize", v, { shouldValidate: true })}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={t.form.projectSize} />
                        </SelectTrigger>
                        <SelectContent>
                          {t.form.projectSizes.map((ps) => (
                            <SelectItem key={ps} value={ps}>
                              {ps}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.projectSize && (
                        <p className="text-xs text-destructive">{t.form.required}</p>
                      )}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm font-medium">
                      {t.form.location}
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute top-1/2 -translate-y-1/2 start-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                      <Input
                        id="location"
                        className="ps-9 rtl:ps-3 rtl:pe-9"
                        placeholder={t.form.locationPlaceholder}
                        {...register("location")}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      {t.form.message}
                    </Label>
                    <div className="relative">
                      <MessageSquare className="absolute top-3.5 start-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                      <Textarea
                        id="message"
                        rows={4}
                        className="ps-9 rtl:ps-3 rtl:pe-9 resize-none scrollbar-brand"
                        placeholder={t.form.messagePlaceholder}
                        {...register("message")}
                      />
                    </div>
                  </div>

                  {/* Server error */}
                  {serverError && (
                    <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
                      {serverError}
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={submitting}
                    size="lg"
                    className="w-full sm:w-auto bg-brand-primary hover:bg-brand-deep text-primary-foreground font-bold h-12 px-8"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 animate-spin" />
                        {t.form.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                        {t.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
