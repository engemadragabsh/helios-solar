import type { Metadata } from "next";
import { Cairo, Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/components/site/LanguageProvider";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "هيليوس للطاقة الشمسية | Helios Solar Energy",
  description:
    "هيليوس - تصميم وتركيب واستشارات محطات الطاقة الشمسية للمشاريع التجارية والصناعية في مصر. Helios — Solar power plant design, installation and consulting in Egypt.",
  keywords: [
    "الطاقة الشمسية",
    "محطات طاقة شمسية",
    "تصميم أنظمة شمسية",
    "تركيب ألواح شمسية",
    "استشارات طاقة متجددة",
    "مصر",
    "Solar Energy",
    "Solar Power Plants",
    "PV Systems",
    "Egypt",
    "Renewable Energy",
  ],
  authors: [{ name: "Helios Solar Energy" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "هيليوس للطاقة الشمسية | Helios Solar Energy",
    description:
      "شريكك الموثوق في تصميم وتركيب محطات الطاقة الشمسية. Your trusted partner in solar power plant design and installation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${cairo.variable} ${geist.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Toaster />
      </body>
    </html>
  );
}
