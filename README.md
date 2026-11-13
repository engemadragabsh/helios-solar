# ☀️ Helios Solar Energy | هيليوس للطاقة الشمسية

<div dir="rtl">

> **موقع إلكتروني احترافي ثنائي اللغة (عربي/إنجليزي) لشركة متخصصة في تصميم وتركيب واستشارات محطات الطاقة الشمسية في مصر.**

</div>

> **A professional bilingual (Arabic/English) website for a company specializing in solar power plant design, installation, and consulting in Egypt.**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.3-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-New_York-black)](https://ui.shadcn.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📑 Table of Contents | فهرس المحتويات

- [✨ Features | المميزات](#-features--المميزات)
- [🛠️ Tech Stack | التقنيات المستخدمة](#-tech-stack--التقنيات-المستخدمة)
- [📁 Project Structure | هيكل المشروع](#-project-structure--هيكل-المشروع)
- [🚀 Quick Start | التشغيل السريع](#-quick-start--التشغيل-السريع)
- [🌐 Bilingual Support | دعم اللغتين](#-bilingual-support--دعم-اللغتين)
- [🖼️ Image Slider | السلايدر](#-image-slider--السلايدر)
- [🧮 Cost Calculator | حاسبة التكلفة](#-cost-calculator--حاسبة-التكلفة)
- [📝 Consultation Form | نموذج الاستشارة](#-consultation-form--نموذج-الاستشارة)
- [🎨 Color System | نظام الألوان](#-color-system--نظام-الألوان)
- [📦 Deploy to GitHub | الرفع على GitHub](#-deploy-to-github--الرفع-على-github)
- [🚢 Deploy to Vercel | النشر على Vercel](#-deploy-to-vercel--النشر-على-vercel)
- [📄 License | الترخيص](#-license--الترخيص)

---

## ✨ Features | المميزات

<div dir="rtl">

### ✅ مميزات الموقع

- **ثنائي اللغة كاملًا**: عربي (افتراضي، RTL) + إنجليزي (LTR) مع تبديل فوري وحفظ التفضيل
- **10 أقسام احترافية**: هيدر ثابت، Hero، شريط القطاعات، من نحن، الخدمات، لماذا نحن، السلايدر، المشاريع، الحاسبة، نموذج الاستشارة، الفوتر
- **سلايدر تلقائي**: 5 صور لمحطات وألواح وتركيب، يتحرك كل 3 ثوانٍ مع شريط تقدّم وأسهم تنقّل
- **حاسبة تكلفة تفاعلية**: إدخال الفاتورة/الاستهلاك → تقدير فوري للحجم، التكلفة، التوفير، فترة الاسترداد، خفض CO₂
- **نموذج استشارة استاتيك**: تحقق كامل بالـ Zod، حفظ في localStorage مع رقم طلب فريد
- **موقع استاتيك 100%**: لا يوجد backend أو API — جاهز للنشر على أي استضافة ثابتة
- **استجابة كاملة**: تصميم Mobile-First مع قائمة موبايل منسدلة وفوتر لاصق
- **حركات احترافية**: Framer Motion، عدّادات متحركة، انتقالات سلسة
- **لوحة ألوان مخصصة**: أخضر الطاقة + ذهبي شمسي
- **إمكانية وصول (Accessibility)**: ARIA labels، semantic HTML، keyboard navigation
- **SEO محسّن**: metadata كامل، Open Graph، خطوط Cairo + Geist

</div>

### ✅ English Features

- **Fully bilingual**: Arabic (default, RTL) + English (LTR) with instant toggle & localStorage persistence
- **10 professional sections**: sticky header, hero, client sectors strip, about, services, why us, image slider, projects, cost calculator, consultation form, footer
- **Auto-playing slider**: 5 images of power plants & panels, rotates every 3 seconds with progress bar & nav arrows
- **Interactive cost calculator**: input bill/consumption → instant estimate of size, cost, savings, payback, CO₂ reduction
- **Static consultation form**: full Zod validation, localStorage persistence with unique request ID
- **100% static site**: no backend or API — deployable to any static host
- **Fully responsive**: Mobile-first design with mobile drawer & sticky footer
- **Professional animations**: Framer Motion, animated counters, smooth transitions
- **Custom color palette**: Energy Green + Solar Gold
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **SEO optimized**: full metadata, Open Graph, Cairo + Geist fonts

---

## 🛠️ Tech Stack | التقنيات المستخدمة

| Category | Technology |
|----------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **State** | [Zustand](https://github.com/pmndrs/zustand) (language state, persisted) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | [Cairo](https://fonts.google.com/specimen/Cairo) (Arabic) + [Geist](https://fonts.google.com/specimen/Geist) (Latin) |
| **Package Manager** | [Bun](https://bun.sh/) |

---

## 📁 Project Structure | هيكل المشروع

```
helios-solar/
├── public/
│   ├── helios-logo.svg              # Brand logo
│   └── slider/                      # Auto-rotating slider images
│       ├── slide-1-power-station.png
│       ├── slide-2-installation.png
│       ├── slide-3-panels.png
│       ├── slide-4-control.png
│       └── slide-5-carport.png
├── src/
│   ├── app/
│   │   ├── globals.css              # Theme + brand colors + animations
│   │   ├── layout.tsx               # Root layout (RTL, fonts, metadata)
│   │   └── page.tsx                 # Main page (assembles all sections)
│   ├── components/
│   │   ├── site/                    # Site-specific components
│   │   │   ├── Header.tsx           # Sticky nav + language switcher
│   │   │   ├── Hero.tsx             # Hero with animated sun
│   │   │   ├── ClientStrip.tsx      # Sectors strip
│   │   │   ├── About.tsx            # About + animated stats
│   │   │   ├── Services.tsx         # 6 service cards
│   │   │   ├── WhyUs.tsx            # 6 reasons cards
│   │   │   ├── ImageSlider.tsx      # Auto-play slider (3s)
│   │   │   ├── Projects.tsx         # 6 project showcase cards
│   │   │   ├── CostCalculator.tsx   # Interactive ROI calculator
│   │   │   ├── ConsultationForm.tsx # Static form (localStorage)
│   │   │   ├── Footer.tsx           # Sticky footer
│   │   │   ├── LanguageProvider.tsx # RTL/LTR direction provider
│   │   │   └── AnimatedCounter.tsx  # CountUp animation
│   │   └── ui/                      # shadcn/ui primitives
│   ├── lib/
│   │   ├── i18n/
│   │   │   └── translations.ts      # Full AR/EN dictionary
│   │   ├── db.ts                    # Prisma client
│   │   └── utils.ts                 # cn() helper
│   ├── store/
│   │   └── language-store.ts        # Zustand language store
│   └── hooks/                       # use-mobile, use-toast
├── prisma/
│   └── schema.prisma                # Database schema (optional)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md                        # You are here
```

---

## 🚀 Quick Start | التشغيل السريع

<div dir="rtl">

### المتطلبات
- [Node.js](https://nodejs.org/) 18+ أو [Bun](https://bun.sh/) 1.0+
- نظام تشغيل: macOS / Linux / Windows

### الخطوات

```bash
# 1. استنساخ المشروع
git clone https://github.com/USERNAME/helios-solar.git
cd helios-solar

# 2. تثبيت الحزم
bun install
# أو: npm install

# 3. تشغيل خادم التطوير
bun run dev
# أو: npm run dev

# 4. افتح المتصفح على
# http://localhost:3000
```

### أوامر مفيدة

```bash
bun run lint      # فحص جودة الكود
bun run build     # بناء للإنتاج
bun run start     # تشغيل نسخة الإنتاج
```

</div>

### English Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/USERNAME/helios-solar.git
cd helios-solar

# 2. Install dependencies
bun install  # or: npm install

# 3. Run dev server
bun run dev  # or: npm run dev

# 4. Open browser at
# http://localhost:3000
```

---

## 🌐 Bilingual Support | دعم اللغتين

<div dir="rtl">

الموقع يدعم اللغتين بشكل كامل:

| الميزة | الوصف |
|--------|-------|
| **اللغة الافتراضية** | العربية (RTL) |
| **التبديل** | زر في الهيدر (English / العربية) |
| **الاتجاه** | RTL للعربية، LTR للإنجليزية |
| **الحفظ** | يتم حفظ التفضيل في `localStorage` |
| **الخطوط** | Cairo للعربية، Geist للإنجليزية |

### إضافة ترجمات جديدة

كل النصوص موجودة في ملف واحد:
```
src/lib/i18n/translations.ts
```

أضف القيم الجديدة تحت `ar` و `en` بنفس البنية.

</div>

---

## 🖼️ Image Slider | السلايدر

<div dir="rtl">

- **5 صور** لمحطات الطاقة، التركيب، الألواح، لوحات التحكم، المواقف الشمسية
- **حركة تلقائية كل 3 ثوانٍ** مع شريط تقدّم ذهبي
- **يتوقّف عند المرور بالماوس** ثم يُكمل
- **أسهم تنقّل** (يمين/يسار)
- **شريط صور مصغّرة** أسفله للتنقل المباشر
- **عنوان + وصف** لكل صورة بالعربية والإنجليزية

### استبدال الصور

ضع صورك في `public/slider/` بنفس الأسماء:
- `slide-1-power-station.png`
- `slide-2-installation.png`
- `slide-3-panels.png`
- `slide-4-control.png`
- `slide-5-carport.png`

أو عدّل المسارات في `src/components/site/ImageSlider.tsx`.

</div>

---

## 🧮 Cost Calculator | حاسبة التكلفة

<div dir="rtl">

الحاسبة تستخدم معطيات السوق المصري:

| المعامل | القيمة |
|--------|-------|
| سعر الكهرباء التجاري | 1.65 ج.م / kWh |
| متوسط الإنتاج الشمسي في مصر | 1,700 kWh / kW / سنة |
| قدرة اللوح الواحد | 550 واط |
| معامل انبعاثات CO₂ | 0.5 كجم / kWh |
| تكلفة التركيب (On-Grid) | 24,000 ج.م / kW |
| تكلفة التركيب (Hybrid) | 38,000 ج.م / kW |
| تكلفة التركيب (Off-Grid) | 52,000 ج.م / kW |

### تعديل القيم

في ملف `src/components/site/CostCalculator.tsx`:
```typescript
const ELECTRICITY_TARIFF = 1.65;
const AVERAGE_YIELD = 1700;
const COST_PER_KW = { onGrid: 24000, hybrid: 38000, offGrid: 52000 };
```

</div>

---

## 📝 Consultation Form | نموذج الاستشارة

<div dir="rtl">

النموذج **استاتيك 100%** (لا يوجد backend):

- **تحقق كامل** بالـ Zod (الاسم، الهاتف، البريد، نوع المشروع، الحجم)
- **حفظ محلي** في `localStorage` باسم `helios-consultations`
- **رقم طلب فريد** بصيغة `HEL-XXXXXXX` يُعرض بعد الإرسال
- **رسالة نجاح** + زر لإرسال طلب آخر

### ربط النموذج ببريد إلكتروني حقيقي

يمكنك لاحقًا استبدال دالة `onSubmit` في `src/components/site/ConsultationForm.tsx` بأي من:

1. **Formspree** (بدون backend):
```typescript
await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
});
```

2. **EmailJS** (بدون backend):
```typescript
import emailjs from "@emailjs/browser";
emailjs.send("SERVICE_ID", "TEMPLATE_ID", data, "PUBLIC_KEY");
```

3. **Vercel API Route** (يتطلب إعادة تفعيل الـ API):
أنشئ `src/app/api/consultation/route.ts` وأضف منطق الإرسال.

</div>

---

## 🎨 Color System | نظام الألوان

<div dir="rtl">

لوحة ألوان "أخضر الطاقة + ذهبي شمسي":

| اللون | الاستخدام | HEX |
|------|----------|-----|
| 🟢 Brand Deep | الخلفيات الداكنة | `#062d20` |
| 🟢 Brand Primary | اللون الأساسي | `#0f5132` |
| 🟢 Brand Bright | اللمسات الفاتحة | `#198754` |
| 🟢 Brand Light | الخلفيات الفاتحة | `#d1e7dd` |
| 🟡 Brand Gold | الذهبي (CTAs، الإحصائيات) | `#f5b50a` |
| 🟡 Brand Gold Light | الذهبي الفاتح | `#fff3cd` |

توجد في `src/app/globals.css` تحت `:root` و `.dark`.

</div>

---

## 📦 Deploy to GitHub | الرفع على GitHub

<div dir="rtl">

### الطريقة 1: باستخدام الأوامر (السريعة)

```bash
# 1. من داخل مجلد المشروع
cd /home/z/my-project

# 2. تهيئة Git (إذا لم تكن مُهيّأة)
git init

# 3. إضافة كل الملفات
git add .

# 4. أول commit
git commit -m "feat: Helios Solar Energy — bilingual solar company website"

# 5. اذهب إلى GitHub وأنشئ مستودع جديد
#    https://github.com/new
#    اسم المستودع: helios-solar
#    لا تفعّل "Add a README" — لدينا واحد بالفعل

# 6. اربط المشروع بـ GitHub (استبدل USERNAME باسمك)
git remote add origin https://github.com/USERNAME/helios-solar.git

# 7. ارفع الكود
git branch -M main
git push -u origin main
```

### الطريقة 2: باستخدام GitHub CLI

```bash
# ثبّت GitHub CLI (إذا لم يكن مثبتًا)
# macOS:  brew install gh
# Linux:  sudo apt install gh

# سجّل الدخول
gh auth login

# أنشئ المستودع وارفع الكود في خطوة واحدة
cd /home/z/my-project
gh repo create helios-solar --public --source=. --remote=origin --push --description "Bilingual solar power company website (Arabic/English) — Next.js 16"
```

### ⚠️ ملاحظات مهمة قبل الرفع

1. **تأكد من أن `.env` غير مرفوع** — موجود في `.gitignore` بالفعل ✅
2. **تأكد من أن `node_modules` غير مرفوع** — موجود في `.gitignore` ✅
3. **تأكد من أن `.next/` غير مرفوع** — موجود في `.gitignore` ✅
4. **الصور في `public/slider/`** ستُرفع مع المشروع (مطلوبة للسلايدر)

### ✅ تحقق قبل الرفع

```bash
# عرض الملفات التي ستُرفع (يجب ألا ترى node_modules أو .env)
git status

# عرض ما سيُرفع فعليًا
git diff --cached --stat
```

### 🔄 رفع تحديثات لاحقة

```bash
git add .
git commit -m "وصف التحديث"
git push
```

</div>

---

## 🚢 Deploy to Vercel | النشر على Vercel

<div dir="rtl">

### الطريقة الأسهل (3 خطوات)

1. اذهب إلى [vercel.com/new](https://vercel.com/new)
2. اختر مستودع `helios-solar` من GitHub
3. اضغط **Deploy** — انتهى! ✅

### عبر CLI

```bash
# ثبّت Vercel CLI
npm i -g vercel

# من داخل المشروع
cd /home/z/my-project
vercel

# اتبع التعليمات، ثم للنشر النهائي:
vercel --prod
```

### متغيّرات البيئة (إن وجدت)

الموقع استاتيك ولا يحتاج أي متغيرات. لكن إذا أضفت لاحقًا:
- اذهب إلى Project Settings → Environment Variables
- أضف المتغيرات بنفس أسمائها في `.env`

</div>

### English Deploy

**Vercel (recommended)**:
1. Push to GitHub (see above)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the `helios-solar` repo
4. Click **Deploy** — done!

**Netlify**:
1. Push to GitHub
2. Go to [app.netlify.com/start](https://app.netlify.com/start)
3. Connect the repo
4. Build command: `bun run build` or `npm run build`
5. Publish directory: `.next` (auto-detected)

---

## 📄 License | الترخيص

[MIT License](LICENSE) — حر في الاستخدام التجاري والشخصي مع الإسناد.

---

<div dir="rtl" align="center">

### 🌞 صُنع بشغف للطاقة المتجددة في مصر

**هيليوس للطاقة الشمسية** — نُحوّل ضوء الشمس إلى طاقة مستدامة

</div>

---

<div align="center">

### 🌞 Built with passion for renewable energy in Egypt

**Helios Solar Energy** — Turning sunlight into sustainable power

</div>
