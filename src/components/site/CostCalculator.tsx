"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon, Zap, Coins, TrendingUp, Leaf, SunMedium, AlertCircle } from "lucide-react";
import { useT } from "./LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SystemType = "onGrid" | "hybrid" | "offGrid";

const ELECTRICITY_TARIFF = 1.65; // EGP per kWh (commercial average)
const AVERAGE_YIELD = 1700; // kWh per kW per year in Egypt
const PANEL_WATTAGE = 0.55; // kW per panel (550W)
const CO2_FACTOR = 0.5; // kg CO2 per kWh avoided

// Cost per installed kW (EGP) — varies by system type
const COST_PER_KW: Record<SystemType, number> = {
  onGrid: 24000,
  hybrid: 38000,
  offGrid: 52000,
};

export function CostCalculator() {
  const t = useT();
  const [bill, setBill] = useState<string>("15000");
  const [consumption, setConsumption] = useState<string>("");
  const [roofArea, setRoofArea] = useState<string>("");
  const [systemType, setSystemType] = useState<SystemType>("onGrid");
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(() => {
    // Determine monthly consumption in kWh
    let monthlyKwh: number | null = null;
    const parsedConsumption = parseFloat(consumption);
    const parsedBill = parseFloat(bill);

    if (!isNaN(parsedConsumption) && parsedConsumption > 0) {
      monthlyKwh = parsedConsumption;
    } else if (!isNaN(parsedBill) && parsedBill > 0) {
      monthlyKwh = parsedBill / ELECTRICITY_TARIFF;
    }

    if (!monthlyKwh || monthlyKwh <= 0) {
      return null;
    }

    // Annual consumption
    const annualKwh = monthlyKwh * 12;

    // Recommended system size (kW)
    const systemSizeKw = annualKwh / AVERAGE_YIELD;

    // Cap by roof area if provided (assume 10 m² per kW)
    const parsedRoof = parseFloat(roofArea);
    let finalSizeKw = systemSizeKw;
    if (!isNaN(parsedRoof) && parsedRoof > 0) {
      const roofCapacity = parsedRoof / 10;
      finalSizeKw = Math.min(systemSizeKw, roofCapacity);
    }

    // Round to 1 decimal
    finalSizeKw = Math.max(0.5, Math.round(finalSizeKw * 10) / 10);

    // Number of panels
    const panelsCount = Math.ceil(finalSizeKw / PANEL_WATTAGE);

    // Estimated cost
    const cost = Math.round(finalSizeKw * COST_PER_KW[systemType]);

    // Annual savings
    const annualSavings = Math.round(finalSizeKw * AVERAGE_YIELD * ELECTRICITY_TARIFF);

    // Payback period (years)
    const payback = Math.round((cost / annualSavings) * 10) / 10;

    // CO2 reduction (tons/year)
    const co2Tons = Math.round((finalSizeKw * AVERAGE_YIELD * CO2_FACTOR) / 10) / 100;

    return {
      size: finalSizeKw,
      panels: panelsCount,
      cost,
      annualSavings,
      payback,
      co2Tons,
    };
  }, [bill, consumption, roofArea, systemType]);

  const formatNumber = (n: number) => n.toLocaleString("en-US");

  const resultCards = results
    ? [
        {
          icon: SunMedium,
          label: t.calculator.recommendedSize,
          value: `${formatNumber(results.size)} ${t.calculator.kw}`,
          color: "text-amber-600 bg-amber-50",
        },
        {
          icon: Zap,
          label: t.calculator.panelsCount,
          value: `${formatNumber(results.panels)} ${t.calculator.panels}`,
          color: "text-emerald-700 bg-emerald-50",
        },
        {
          icon: Coins,
          label: t.calculator.estimatedCost,
          value: `${formatNumber(results.cost)} ${t.calculator.currency}`,
          color: "text-yellow-700 bg-yellow-50",
        },
        {
          icon: TrendingUp,
          label: t.calculator.annualSavings,
          value: `${formatNumber(results.annualSavings)} ${t.calculator.currency}`,
          color: "text-green-700 bg-green-50",
        },
        {
          icon: CalcIcon,
          label: t.calculator.payback,
          value: `${formatNumber(results.payback)} ${t.calculator.years}`,
          color: "text-teal-700 bg-teal-50",
        },
        {
          icon: Leaf,
          label: t.calculator.co2Reduction,
          value: `${formatNumber(results.co2Tons)} ${t.calculator.tons}`,
          color: "text-lime-700 bg-lime-50",
        },
      ]
    : [];

  return (
    <section
      id="calculator"
      className="py-20 lg:py-28 bg-brand-radial text-white relative overflow-hidden"
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-14"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold mb-3">
            <CalcIcon className="w-4 h-4" />
            {t.calculator.tag}
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-5 leading-tight">
            {t.calculator.title}
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <Card className="p-6 lg:p-7 bg-white/10 border-white/20 backdrop-blur-md text-white">
              <div className="space-y-5">
                {/* Monthly bill */}
                <div className="space-y-2">
                  <Label htmlFor="bill" className="text-white text-sm font-medium">
                    {t.calculator.monthlyBill}
                  </Label>
                  <Input
                    id="bill"
                    type="number"
                    inputMode="decimal"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    placeholder="15000"
                    className="bg-white/10 border-white/25 text-white placeholder:text-white/50 focus:border-brand-gold"
                  />
                </div>

                {/* Or monthly consumption */}
                <div className="space-y-2">
                  <Label htmlFor="consumption" className="text-white text-sm font-medium">
                    {t.calculator.consumptionLabel}
                  </Label>
                  <Input
                    id="consumption"
                    type="number"
                    inputMode="decimal"
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
                    placeholder="9000"
                    className="bg-white/10 border-white/25 text-white placeholder:text-white/50 focus:border-brand-gold"
                  />
                </div>

                {/* Roof area */}
                <div className="space-y-2">
                  <Label htmlFor="roof" className="text-white text-sm font-medium">
                    {t.calculator.roofArea}
                  </Label>
                  <Input
                    id="roof"
                    type="number"
                    inputMode="decimal"
                    value={roofArea}
                    onChange={(e) => setRoofArea(e.target.value)}
                    placeholder="200"
                    className="bg-white/10 border-white/25 text-white placeholder:text-white/50 focus:border-brand-gold"
                  />
                </div>

                {/* System type */}
                <div className="space-y-2">
                  <Label className="text-white text-sm font-medium">
                    {t.calculator.systemType}
                  </Label>
                  <RadioGroup
                    value={systemType}
                    onValueChange={(v) => setSystemType(v as SystemType)}
                    className="space-y-2"
                  >
                    {[
                      { value: "onGrid", label: t.calculator.onGrid },
                      { value: "hybrid", label: t.calculator.hybrid },
                      { value: "offGrid", label: t.calculator.offGrid },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        htmlFor={`sys-${opt.value}`}
                        className={cn(
                          "flex items-center gap-3 px-4 py-2.5 rounded-lg border cursor-pointer transition-colors",
                          systemType === opt.value
                            ? "border-brand-gold bg-brand-gold/15"
                            : "border-white/20 hover:border-white/40 bg-white/5"
                        )}
                      >
                        <RadioGroupItem
                          id={`sys-${opt.value}`}
                          value={opt.value}
                          className="border-white/40 text-brand-gold data-[state=checked]:border-brand-gold"
                        />
                        <span className="text-sm font-medium text-white">{opt.label}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                <Button
                  onClick={() => setSubmitted(true)}
                  size="lg"
                  className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-deep font-bold h-12"
                >
                  <CalcIcon className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  {t.calculator.calculate}
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <Card className="h-full p-6 lg:p-8 bg-white text-foreground shadow-2xl">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">
                {t.calculator.results}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {t.calculator.subtitle.split("،")[0]}
              </p>

              {submitted && results ? (
                <div className="grid sm:grid-cols-2 gap-4">
                  {resultCards.map((card, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.07 }}
                      className="p-4 rounded-xl border border-border/50 bg-secondary/30"
                    >
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-3", card.color)}>
                        <card.icon className="w-5 h-5" />
                      </div>
                      <div className="text-xs text-muted-foreground mb-1 font-medium">
                        {card.label}
                      </div>
                      <div className="text-xl lg:text-2xl font-bold text-foreground">
                        {card.value}
                      </div>
                    </motion.div>
                  ))}

                  {/* Disclaimer */}
                  <div className="sm:col-span-2 mt-2 p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs lg:text-sm text-amber-800 leading-relaxed">
                        {t.calculator.disclaimer}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-4">
                    <CalcIcon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <p className="text-base font-medium text-muted-foreground max-w-sm">
                    {t.calculator.subtitle}
                  </p>
                </div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
