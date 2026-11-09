// Bilingual translations (Arabic + English) for Helios Solar website

export type Language = "ar" | "en";

export const translations = {
  ar: {
    // Company / Brand
    companyName: "هيليوس",
    companyFullName: "هيليوس للطاقة الشمسية",
    companyTagline: "نُحوّل ضوء الشمس إلى طاقة مستدامة",

    // Navigation
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "مشاريعنا",
      calculator: "حاسبة التكلفة",
      contact: "اطلب استشارة",
    },

    // Hero
    hero: {
      badge: "شريكك الموثوق في الطاقة المتجددة",
      title: "نُصمّم ونُركّب محطات الطاقة الشمسية للمشاريع التجارية والصناعية",
      subtitle:
        "منذ عام ٢٠١٤، نُقدّم حلولًا متكاملة للطاقة الشمسية تشمل التصميم الهندسي والتركيب والاستشارات الفنية والصيانة، مع أكثر من ١٨٠ مشروعًا ناجحًا في جميع أنحاء مصر.",
      ctaPrimary: "اطلب استشارة مجانية",
      ctaSecondary: "احسب تكلفة نظامك",
      stat1: "ميجاوات تم تركيبها",
      stat2: "مشروع منجز",
      stat3: "عميل سعيد",
      stat4: "سنوات خبرة",
    },

    // About
    about: {
      tag: "من نحن",
      title: "خبرة هندسية تثق بها في مجال الطاقة الشمسية",
      subtitle:
        "شركة هيليوس متخصصة في حلول الطاقة الشمسية للمشاريع التجارية والصناعية والزراعية الكبيرة. نجمع بين الخبرة الهندسية العميقة وأحدث التقنيات لتقديم محطات طاقة موثوقة ومربحة.",
      paragraphs: [
        "تأسست شركة هيليوس عام ٢٠١٤ على يد نخبة من المهندسين المتخصصين في الطاقة المتجددة، ومنذ ذلك الحين نمت لتُصبح واحدة من الشركات الرائدة في تصميم وتركيب محطات الطاقة الشمسية في مصر.",
        "نتبع منهجية صارمة في كل مشروع تبدأ بدراسة الجدوى الفنية والاقتصادية، مرورًا بالتصميم الهندسي الدقيق والتركيب الاحترافي، وصولًا إلى التشغيل والصيانة طوال العمر الافتراضي للمحطة.",
        "فريقنا معتمد دوليًا ويحمل شهادات من جهات عالمية مثل ISES وNABCEP، ونستخدم مكونات من كبرى الشركات المصنعة عالميًا مثل LONGi وHuawei وTrina Solar.",
      ],
      highlight1: "معتمدون دوليًا",
      highlight2: "ضمان حتى ٢٥ سنة",
      highlight3: "دعم فني ٢٤/٧",
    },

    // Stats
    stats: {
      projects: "مشروع منجز",
      mw: "ميجاوات مُركّبة",
      experience: "سنوات خبرة",
      clients: "عميل سعيد",
      co2: "طن CO₂ مُتجنّب سنويًا",
    },

    // Services
    services: {
      tag: "خدماتنا",
      title: "حلول متكاملة في كل مرحلة من مراحل مشروع الطاقة الشمسية",
      subtitle:
        "نُقدّم خدمات شاملة تغطي دورة حياة مشروع الطاقة الشمسية بالكامل، من الفكرة الأولى وحتى التشغيل والصيانة على المدى الطويل.",
      items: [
        {
          title: "التصميم الهندسي",
          desc: "تصميم هندسي دقيق لمحطات الطاقة الشمسية باستخدام برامج محاكاة متقدمة (PVsyst، AutoCAD) لضمان أعلى كفاءة وعائد استثمار.",
          features: ["دراسة الجدوى الفنية", "تصميم بالـ PVsyst", "تخطيط ثلاثي الأبعاد", "تقرير الإنتاج المتوقع"],
        },
        {
          title: "التركيب والتنفيذ",
          desc: "تركيب احترافي على يد فرق هندسية معتمدة، مع الالتزام بمعايير الجودة العالمية ومواعيد التسليم المتفق عليها.",
          features: ["تركيب بأنظمة Mounting عالية الجودة", "كابلات ومعززات معتمدة", "اختبارات تشغيل شاملة", "تسليم في الموعد"],
        },
        {
          title: "الاستشارات الفنية",
          desc: "استشارات متخصصة لاختيار الحل الأمثل لمشروعك، تقييم العطاءات، ومتابعة جودة التنفيذ نيابةً عن العميل.",
          features: ["تقييم العطاءات الفنية", "الإشراف على التنفيذ", "دراسات الجدوى الاقتصادية", "نمذجة العائد الاستثماري"],
        },
        {
          title: "الصيانة والتشغيل",
          desc: "خدمات صيانة دورية وشاملة لضمان أعلى إنتاجية للمحطة طوال عمرها الافتراضي، مع أنظمة مراقبة عن بُعد.",
          features: ["مراقبة عن بُعد ٢٤/٧", "صيانة دورية وقائية", "تنظيف الألواح الشمسية", "تقارير أداء شهرية"],
        },
        {
          title: "الأنظمة الهجينة والتخزين",
          desc: "تصميم وتركيب أنظمة هجينة مع حلول تخزين بالبطاريات لضمان استمرارية الإمداد وتغطية الأحمال الحرجة.",
          features: ["أنظمة On-Grid و Off-Grid", "تخزين ببطاريات Lifepo4", "أنظمة Hybrid متقدمة", "تكامل مع الديزل والشبكة"],
        },
        {
          title: "التراخيص والتوثيق",
          desc: "إجراءات استخراج التراخيص اللازمة من الجهات المختصة وشركة توزيع الكهرباء، وإتمام عمليات ربط الشبكة وعدادات الإنتاج.",
          features: ["موافقات شركة الكهرباء", "تراخيص الجهات المحلية", "ربط الشبكة وتركيب العدادات", "إجراءات بيع الفائض"],
        },
      ],
    },

    // Why Choose Us
    whyUs: {
      tag: "لماذا هيليوس؟",
      title: "خبرة هندسية، تنفيذ احترافي، ونتائج موثوقة",
      subtitle:
        "نُقدّم أكثر من مجرد تركيب ألواح شمسية؛ نُقدّم شراكة طويلة الأمد قائمة على الشفافية والكفاءة الهندسية.",
      items: [
        { title: "كفاءة هندسية عالية", desc: "فريق من المهندسين المعتمدين دوليًا بخبرة تتجاوز ١٠ سنوات في تصميم وتنفيذ محطات الطاقة الشمسية." },
        { title: "مكونات من أفضل العلامات", desc: "نستخدم فقط مكونات معتمدة من شركات عالمية رائدة مثل LONGi وTrina وHuawei مع ضمانات حتى ٢٥ سنة." },
        { title: "عائد استثمار مضمون", desc: "نُصمّم كل مشروع لتحقيق أقصر فترة استرداد لرأس المال، بمتوسط ٤-٥ سنوات للمشاريع التجارية." },
        { title: "مراقبة ذكية ٢٤/٧", desc: "نظام مراقبة متطور يتيح لك متابعة إنتاج محطتك لحظيًا من تطبيق الهاتف، مع تنبيهات فورية للأعطال." },
        { title: "ضمان شامل", desc: "ضمان يصل إلى ٢٥ سنة على الألواح، و١٠ سنوات على العاكسات، مع ضمان جودة العمل لخمس سنوات." },
        { title: "صيانة دورية مجدولة", desc: "برامج صيانة وقائية شاملة تضمن بقاء محطتك في أعلى مستويات الكفاءة طوال العمر الافتراضي." },
      ],
    },

    // Projects
    projects: {
      tag: "مشاريعنا",
      title: "مشاريع نفخر بتنفيذها",
      subtitle: "نماذج من المشاريع التجارية والصناعية والزراعية التي قمنا بتصميمها وتركيبها في مصر.",
      items: [
        {
          name: "مصنع دلتا للصناعات الغذائية",
          location: "المنطقة الصناعية - العاشر من رمضان",
          capacity: "٢.٥ ميجاوات",
          type: "سقف مصنع - On-Grid",
          desc: "نظام على السطح بمساحة ١٢٬٠٠٠ م²، يُغطّي ٦٥٪ من استهلاك المصنع ويوفر ٤.٢ مليون جنيه سنويًا.",
        },
        {
          name: "مجمع مدینة نصر التجاری",
          location: "مدينة نصر - القاهرة",
          capacity: "٨٥٠ كيلووات",
          type: "مواقف سيارات شمسية",
          desc: "هياكل Canopy لخدمة مواقف السيارات وإنتاج الكهرباء، مع تكامل مع نظام الإنارة في المول.",
        },
        {
          name: "مزرعة الواحات الزراعية",
          location: "الواحات البحرية - الجيزة",
          capacity: "١.٢ ميجاوات",
          type: "ضخ مياه + Hybrid",
          desc: "نظام هجين لتشغيل مضخات الري وأنظمة التبريد، يُوفّر استقلالًا كاملًا عن شبكة الكهرباء.",
        },
        {
          name: "فندق البحر الأحمر السياحي",
          location: "الغردقة - البحر الأحمر",
          capacity: "٦٠٠ كيلووات",
          type: "نظام Hotel Solar",
          desc: "نظام على أسطح الفندق لإنتاج ٩٥٠ ميجاوات/ساعة سنويًا، يخفض فاتورة الكهرباء بنسبة ٥٥٪.",
        },
        {
          name: "مركز تجاري مدينة السادس",
          location: "مدينة السادس من أكتوبر",
          capacity: "١.٨ ميجاوات",
          type: "سطح تجاري - On-Grid",
          desc: "تركيب على سطح المركز التجاري مع تكامل أنظمة المراقبة والعرض الحي لإنتاج الكهرباء.",
        },
        {
          name: "محطة تجمع مصنعات ٦ أكتوبر",
          location: "٦ أكتوبر - الجيزة",
          capacity: "٣.٢ ميجاوات",
          type: "تجمع مصانع - On-Grid",
          desc: "أكبر مشروع مُنفّذ، يشمل ٤ مصانع، يُنتج ٥٬٤٠٠ ميجاوات/ساعة سنويًا لتغطية استهلاك المصانع.",
        },
      ],
    },

    // Calculator
    calculator: {
      tag: "حاسبة التكلفة",
      title: "احسب تكلفة وعائد نظامك الشمسي",
      subtitle:
        "أدخل بيانات استهلاكك للحصول على تقدير سريع لحجم النظام المطلوب، التكلفة التقريبية، وفترة استرداد رأس المال.",
      monthlyBill: "فاتورة الكهرباء الشهرية (جنيه)",
      roofArea: "مساحة السطح المتاحة (م²)",
      consumptionLabel: "أو أدخل الاستهلاك الشهري (كيلووات/ساعة)",
      systemType: "نوع النظام",
      onGrid: "متصل بالشبكة (On-Grid)",
      hybrid: "هجين مع تخزين (Hybrid)",
      offGrid: "منفصل عن الشبكة (Off-Grid)",
      calculate: "احسب الآن",
      results: "نتائج التقدير",
      recommendedSize: "الحجم المقترح للنظام",
      estimatedCost: "التكلفة التقديرية",
      annualSavings: "التوفير السنوي المتوقع",
      payback: "فترة استرداد رأس المال",
      co2Reduction: "خفض انبعاثات CO₂ سنويًا",
      panelsCount: "عدد الألواح الشمسية المطلوبة",
      disclaimer:
        "هذا التقدير أولي لأغراض توضيحية فقط، بناءً على متوسط الإنتاج الشمسي في مصر (١٬٧٠٠ كيلووات/ساعة لكل كيلووات تركيبي سنويًا) وسعر الكهرباء التجاري. للحصول على عرض سعر دقيق، يرجى طلب استشارة فنية.",
      currency: "ج.م",
      years: "سنة",
      tons: "طن",
      panels: "لوح",
      kw: "ك.و",
    },

    // Consultation Form
    form: {
      tag: "اطلب استشارة",
      title: "ابدأ رحلتك نحو الطاقة النظيفة",
      subtitle:
        "املأ النموذج وسيتواصل معك أحد مهندسي هيليوس خلال ٢٤ ساعة عمل لمناقشة مشروعك وتقديم استشارة أولية مجانية.",
      fullName: "الاسم الكامل",
      fullNamePlaceholder: "مثال: أحمد محمد",
      company: "الشركة / الجهة",
      companyPlaceholder: "اسم الشركة",
      phone: "رقم الهاتف",
      phonePlaceholder: "٠١٠٠ ٠٠٠ ٠٠٠",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@example.com",
      projectType: "نوع المشروع",
      projectTypes: ["تجاري / مكتبي", "صناعي / مصنع", "زراعي / ضخ مياه", "فندقي / سياحي", "مجمع سكني", "آخر"],
      projectSize: "الحجم التقريبي المتوقع",
      projectSizes: ["أقل من ١٠٠ كيلووات", "١٠٠ - ٥٠٠ كيلووات", "٥٠٠ كيلووات - ١ ميجاوات", "أكثر من ١ ميجاوات", "غير محدد"],
      location: "موقع المشروع",
      locationPlaceholder: "المدينة / المحافظة",
      message: "تفاصيل إضافية",
      messagePlaceholder: "أخبرنا عن أهدافك من المشروع، الميزانية التقريبية، والجدول الزمني...",
      submit: "أرسل طلب الاستشارة",
      submitting: "جارٍ الإرسال...",
      success: "تم استلام طلبك بنجاح! سيتواصل معك فريقنا خلال ٢٤ ساعة عمل.",
      error: "حدث خطأ، يرجى المحاولة مرة أخرى.",
      required: "هذا الحقل مطلوب",
      invalidEmail: "صيغة بريد إلكتروني غير صحيحة",
      invalidPhone: "رقم هاتف غير صحيح",
    },

    // Contact info
    contact: {
      title: "تواصل معنا",
      address: "العنوان",
      addressValue: "٢٧ شارع التحرير، الدور الخامس، مدينة نصر، القاهرة، مصر",
      phone: "الهاتف",
      phoneValue: "+20 100 123 4567",
      email: "البريد الإلكتروني",
      emailValue: "info@helios-solar.eg",
      hours: "ساعات العمل",
      hoursValue: "الأحد - الخميس: ٩ ص - ٦ م",
      whatsapp: "واتساب",
      whatsappValue: "تواصل مباشر عبر واتساب",
    },

    // Footer
    footer: {
      about:
        "هيليوس للطاقة الشمسية - شريكك الموثوق في تصميم وتركيب واستشارات محطات الطاقة الشمسية في مصر ومنطقة الشرق الأوسط.",
      quickLinks: "روابط سريعة",
      servicesTitle: "خدماتنا",
      contactInfo: "معلومات التواصل",
      rights: "© ٢٠٢٦ هيليوس للطاقة الشمسية. جميع الحقوق محفوظة.",
      policy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
    },

    // Misc
    common: {
      languageSwitch: "English",
      learnMore: "اعرف المزيد",
      getQuote: "اطلب عرض سعر",
      readMore: "اقرأ المزيد",
      scrollDown: "اكتشف المزيد",
    },
  },

  en: {
    // Company / Brand
    companyName: "Helios",
    companyFullName: "Helios Solar Energy",
    companyTagline: "Turning sunlight into sustainable power",

    // Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      calculator: "Cost Calculator",
      contact: "Get a Consultation",
    },

    // Hero
    hero: {
      badge: "Your trusted renewable energy partner",
      title: "Designing & installing solar power plants for commercial & industrial projects",
      subtitle:
        "Since 2014, we have delivered integrated solar energy solutions covering engineering design, installation, technical consulting and maintenance across more than 180 successful projects throughout Egypt.",
      ctaPrimary: "Request a free consultation",
      ctaSecondary: "Calculate your system cost",
      stat1: "MW Installed",
      stat2: "Projects Completed",
      stat3: "Happy Clients",
      stat4: "Years of Experience",
    },

    // About
    about: {
      tag: "About Us",
      title: "Engineering expertise you can trust in solar energy",
      subtitle:
        "Helios specializes in solar energy solutions for large commercial, industrial and agricultural projects. We combine deep engineering expertise with state-of-the-art technology to deliver reliable and profitable power plants.",
      paragraphs: [
        "Helios was founded in 2014 by a select group of engineers specialized in renewable energy, and has since grown to become one of the leading companies in designing and installing solar power plants in Egypt.",
        "We follow a strict methodology in every project, starting with technical and economic feasibility study, through precise engineering design and professional installation, down to operation and maintenance throughout the plant's lifetime.",
        "Our team is internationally certified and holds credentials from global bodies such as ISES and NABCEP. We use components from major global manufacturers like LONGi, Huawei, and Trina Solar.",
      ],
      highlight1: "Internationally Certified",
      highlight2: "Up to 25 Years Warranty",
      highlight3: "24/7 Technical Support",
    },

    // Stats
    stats: {
      projects: "Projects Completed",
      mw: "MW Installed",
      experience: "Years of Experience",
      clients: "Happy Clients",
      co2: "Tons CO₂ Avoided Annually",
    },

    // Services
    services: {
      tag: "Our Services",
      title: "End-to-end solutions across every stage of your solar project",
      subtitle:
        "We provide comprehensive services covering the full life cycle of a solar project — from the first idea to long-term operation and maintenance.",
      items: [
        {
          title: "Engineering Design",
          desc: "Precise engineering design of solar power plants using advanced simulation software (PVsyst, AutoCAD) to ensure maximum efficiency and ROI.",
          features: ["Technical feasibility study", "PVsyst design", "3D layout planning", "Expected yield report"],
        },
        {
          title: "Installation & Execution",
          desc: "Professional installation by certified engineering teams, adhering to international quality standards and agreed delivery schedules.",
          features: ["High-grade mounting systems", "Certified cables & connectors", "Comprehensive commissioning tests", "On-time delivery"],
        },
        {
          title: "Technical Consulting",
          desc: "Specialized consulting to choose the optimal solution for your project, evaluate bids, and monitor execution quality on behalf of the client.",
          features: ["Technical bid evaluation", "Construction supervision", "Economic feasibility studies", "ROI modeling"],
        },
        {
          title: "O&M Services",
          desc: "Periodic and comprehensive maintenance services to ensure the highest productivity throughout the plant's lifetime, with remote monitoring.",
          features: ["24/7 remote monitoring", "Preventive maintenance", "Panel cleaning", "Monthly performance reports"],
        },
        {
          title: "Hybrid Systems & Storage",
          desc: "Design and installation of hybrid systems with battery storage solutions to ensure continuity of supply and coverage of critical loads.",
          features: ["On-Grid & Off-Grid systems", "Lifepo4 battery storage", "Advanced hybrid systems", "Integration with diesel & grid"],
        },
        {
          title: "Permits & Documentation",
          desc: "Processing of necessary licenses from relevant authorities and the distribution company, completing grid connection and production meter procedures.",
          features: ["Utility company approvals", "Local authority permits", "Grid connection & metering", "Net metering procedures"],
        },
      ],
    },

    // Why Choose Us
    whyUs: {
      tag: "Why Helios?",
      title: "Engineering expertise, professional execution, reliable results",
      subtitle:
        "We offer more than just solar panel installation; we offer a long-term partnership built on transparency and engineering excellence.",
      items: [
        { title: "High Engineering Excellence", desc: "Internationally certified engineers with over 10 years of experience in designing and executing solar power plants." },
        { title: "Premium Brand Components", desc: "We use only certified components from leading global brands like LONGi, Trina, and Huawei, with warranties up to 25 years." },
        { title: "Guaranteed ROI", desc: "Every project is designed for the shortest payback period, averaging 4-5 years for commercial projects." },
        { title: "24/7 Smart Monitoring", desc: "Advanced monitoring system lets you track your plant's production in real time from a mobile app, with instant fault alerts." },
        { title: "Comprehensive Warranty", desc: "Warranty up to 25 years on panels, 10 years on inverters, plus a 5-year workmanship warranty." },
        { title: "Scheduled Maintenance", desc: "Comprehensive preventive maintenance programs to keep your plant at peak efficiency throughout its lifetime." },
      ],
    },

    // Projects
    projects: {
      tag: "Our Projects",
      title: "Projects we are proud of",
      subtitle: "Samples of commercial, industrial, and agricultural projects we designed and installed across Egypt.",
      items: [
        {
          name: "Delta Food Industries Factory",
          location: "Industrial Zone - 10th of Ramadan City",
          capacity: "2.5 MW",
          type: "Rooftop - On-Grid",
          desc: "Rooftop system covering 12,000 m², covering 65% of the factory's consumption and saving 4.2 million EGP annually.",
        },
        {
          name: "Nasr City Commercial Complex",
          location: "Nasr City - Cairo",
          capacity: "850 kW",
          type: "Solar Carport",
          desc: "Canopy structures serving parking lots while generating power, integrated with the mall's lighting system.",
        },
        {
          name: "Oases Agricultural Farm",
          location: "Bahariya Oasis - Giza",
          capacity: "1.2 MW",
          type: "Water Pumping + Hybrid",
          desc: "Hybrid system running irrigation pumps and cooling systems, fully independent from the grid.",
        },
        {
          name: "Red Sea Tourist Hotel",
          location: "Hurghada - Red Sea",
          capacity: "600 kW",
          type: "Hotel Solar System",
          desc: "Rooftop system producing 950 MWh/year, reducing electricity bills by 55%.",
        },
        {
          name: "Sixth of October Mall",
          location: "6th of October City - Giza",
          capacity: "1.8 MW",
          type: "Commercial Rooftop - On-Grid",
          desc: "Rooftop installation integrated with live monitoring and energy display systems.",
        },
        {
          name: "October Factories Cluster",
          location: "6th of October - Giza",
          capacity: "3.2 MW",
          type: "Factories Cluster - On-Grid",
          desc: "Largest executed project, covering 4 factories, producing 5,400 MWh/year to cover their consumption.",
        },
      ],
    },

    // Calculator
    calculator: {
      tag: "Cost Calculator",
      title: "Estimate the cost and ROI of your solar system",
      subtitle:
        "Enter your consumption data for a quick estimate of the required system size, approximate cost, and payback period.",
      monthlyBill: "Monthly electricity bill (EGP)",
      roofArea: "Available roof area (m²)",
      consumptionLabel: "Or enter monthly consumption (kWh)",
      systemType: "System type",
      onGrid: "Grid-tied (On-Grid)",
      hybrid: "Hybrid with storage",
      offGrid: "Off-Grid",
      calculate: "Calculate now",
      results: "Estimate results",
      recommendedSize: "Recommended system size",
      estimatedCost: "Estimated cost",
      annualSavings: "Expected annual savings",
      payback: "Payback period",
      co2Reduction: "Annual CO₂ reduction",
      panelsCount: "Required solar panels",
      disclaimer:
        "This is a preliminary estimate for illustrative purposes only, based on average solar yield in Egypt (1,700 kWh per installed kW per year) and commercial electricity rates. For an accurate quote, please request a technical consultation.",
      currency: "EGP",
      years: "years",
      tons: "tons",
      panels: "panels",
      kw: "kW",
    },

    // Consultation Form
    form: {
      tag: "Request a Consultation",
      title: "Start your journey towards clean energy",
      subtitle:
        "Fill out the form and one of Helios' engineers will contact you within 24 business hours to discuss your project and provide a free initial consultation.",
      fullName: "Full Name",
      fullNamePlaceholder: "e.g. Ahmed Mohamed",
      company: "Company / Organization",
      companyPlaceholder: "Company name",
      phone: "Phone Number",
      phonePlaceholder: "0100 000 0000",
      email: "Email Address",
      emailPlaceholder: "you@example.com",
      projectType: "Project Type",
      projectTypes: ["Commercial / Office", "Industrial / Factory", "Agricultural / Pumping", "Hotel / Tourism", "Residential Complex", "Other"],
      projectSize: "Estimated project size",
      projectSizes: ["Less than 100 kW", "100 - 500 kW", "500 kW - 1 MW", "More than 1 MW", "Not specified"],
      location: "Project Location",
      locationPlaceholder: "City / Governorate",
      message: "Additional Details",
      messagePlaceholder: "Tell us about your project goals, approximate budget, and timeline...",
      submit: "Submit consultation request",
      submitting: "Submitting...",
      success: "Your request has been received! Our team will contact you within 24 business hours.",
      error: "An error occurred, please try again.",
      required: "This field is required",
      invalidEmail: "Invalid email address",
      invalidPhone: "Invalid phone number",
    },

    // Contact info
    contact: {
      title: "Contact Us",
      address: "Address",
      addressValue: "27 Tahrir Street, 5th Floor, Nasr City, Cairo, Egypt",
      phone: "Phone",
      phoneValue: "+20 100 123 4567",
      email: "Email",
      emailValue: "info@helios-solar.eg",
      hours: "Business Hours",
      hoursValue: "Sun - Thu: 9 AM - 6 PM",
      whatsapp: "WhatsApp",
      whatsappValue: "Direct WhatsApp contact",
    },

    // Footer
    footer: {
      about:
        "Helios Solar Energy — your trusted partner in designing, installing and consulting on solar power plants across Egypt and the Middle East.",
      quickLinks: "Quick Links",
      servicesTitle: "Our Services",
      contactInfo: "Contact Information",
      rights: "© 2026 Helios Solar Energy. All rights reserved.",
      policy: "Privacy Policy",
      terms: "Terms & Conditions",
    },

    // Misc
    common: {
      languageSwitch: "العربية",
      learnMore: "Learn more",
      getQuote: "Get a quote",
      readMore: "Read more",
      scrollDown: "Discover more",
    },
  },
} as const;

export type TranslationKeys = typeof translations.ar;
