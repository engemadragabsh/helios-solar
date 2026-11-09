"use client";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ClientStrip } from "@/components/site/ClientStrip";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { ImageSlider } from "@/components/site/ImageSlider";
import { Projects } from "@/components/site/Projects";
import { CostCalculator } from "@/components/site/CostCalculator";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ClientStrip />
        <About />
        <Services />
        <WhyUs />
        <ImageSlider />
        <Projects />
        <CostCalculator />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}
