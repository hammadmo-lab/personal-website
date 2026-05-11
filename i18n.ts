export const LOCALES = ['en', 'ar', 'es'] as const;

export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const localeConfig = {
  en: {
    label: 'English',
    shortLabel: 'EN',
    lang: 'en',
    dir: 'ltr',
    path: '/',
    ogLocale: 'en_US',
  },
  ar: {
    label: 'العربية',
    shortLabel: 'AR',
    lang: 'ar-EG',
    dir: 'rtl',
    path: '/ar/',
    ogLocale: 'ar_EG',
  },
  es: {
    label: 'Español',
    shortLabel: 'ES',
    lang: 'es',
    dir: 'ltr',
    path: '/es/',
    ogLocale: 'es_ES',
  },
} as const;

export const isLocale = (value: string): value is Locale =>
  LOCALES.includes(value as Locale);

export const getLocaleFromPath = (pathname: string): Locale => {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return firstSegment && isLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE;
};

export const getLocalePath = (locale: Locale) => localeConfig[locale].path;

export const getPageUrl = (locale: Locale, page: string) =>
  `${getLocalePath(locale)}#${page}`;

export const translations = {
  en: {
    meta: {
      title: 'Dr. Mohamed Amin Hammad | Radiologist, Founder & Explorer',
      description:
        'Consultant Radiologist, Founder of Radly AI, World Traveler, and Author. Exploring medicine, technology, and adventure.',
      keywords:
        'Mohamed Amin Hammad, Dr. Hammad, Radiologist, Radly, AI in Radiology, Medical Technology, World Traveler, Travel Blog, Author, INFJ, Finding Your Soulmate, Medical Innovation',
      ogImageAlt: 'Dr. Mohamed Amin Hammad - Radiologist, Founder & Explorer',
      schemaDescription:
        'Consultant Radiologist, Founder of Radly AI, World Traveler, and Author',
    },
    nav: {
      home: 'Home',
      about: 'About',
      radly: 'Radly App',
      travel: 'Travel',
      books: 'Books',
      contact: 'Contact',
    },
    common: {
      appStoreAlt: 'Download on the App Store',
      android: 'Android',
      googlePlay: 'Get it on Google Play',
      viewAmazon: 'View on Amazon',
      readArticle: 'Read article',
      visitPassportTrails: 'Visit PassportTrails.com',
    },
    footer: {
      bio:
        'Radiologist, Founder, Traveler, Author.\nBringing clarity to medicine and life through technology and exploration.',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      copyright: 'All rights reserved.',
    },
    home: {
      eyebrow: 'Dr. Mohamed Amin Hammad',
      titleLine1: 'Medicine',
      titleAccent: 'meets',
      titleLine2: 'Exploration',
      intro:
        "I'm a radiologist who codes, travels, and writes. Sometimes all three make sense together. Other times, I'm just trying to figure it out like everyone else.",
      primaryCta: 'Explore Innovation',
      secondaryCta: 'My Story',
      heroAlt: 'Dr. Mohamed Amin Hammad - Explorer',
      badgeTitle: 'Global Citizen',
      badgeSubtitle: '10+ Countries Visited',
      quickLinks: [
        {
          title: 'Radly App',
          desc: 'AI-Powered Radiology Reporting',
        },
        {
          title: 'Passport Trails',
          desc: 'Travel Blog & Photography',
        },
        {
          title: 'Books',
          desc: 'Psychology & Personality',
        },
      ],
    },
    about: {
      title: 'My Story',
      subtitle: 'About Me',
      imageAlt: 'Dr. Hammad at Radiology Desk',
      caption: 'Diagnostics & Dedication',
      paragraphs: [
        "I'm Dr. Mohamed Amin Hammad, an Egyptian radiologist who ended up creating software and traveling the world when I wasn't planning to do either. Life has a way of revealing paths you didn't know you were looking for. As Head of Radiology at a private hospital, I spend my days helping people find answers through imaging, but I've learned that the real answers often come from asking better questions.",
        "Radiology reporting can be painfully repetitive. After writing the same patterns hundreds of times, I couldn't ignore the inefficiency anymore. So I built Radly, an AI assistant that handles the repetitive parts so radiologists can focus on the diagnostic thinking that actually matters. It's not about replacing doctors. It's about giving them their time back to do what only humans can do: connect the dots that machines miss.",
        "When I'm not at the hospital or coding, I travel. Not the Instagram kind of travel, but the kind where you sit in a cafe in Dubrovnik or walk through Reykjavik at midnight and realize how much you don't know. Through Passport Trails, I share what I've learned across 12 countries with Arabic speakers who want practical guidance, not just pretty pictures. Travel taught me that understanding different perspectives isn't optional if you want to build things that actually help people.",
      ],
    },
    radly: {
      eyebrow: 'The Startup',
      title: 'Radly Assistant',
      intro:
        'After writing my thousandth "no acute findings" report, I had a choice: keep complaining or build something. So I built Radly, an AI assistant that handles the boring parts of radiology reporting. It is not perfect, but it gives radiologists their time back to actually think about the cases that matter.',
      features: [
        'Automated Reporting Workflows',
        'AI-Driven Analysis',
        'Built by a Radiologist, for Radiologists',
        'Available on iOS and Android',
      ],
      appStoreAlt: 'Download Radly on the App Store',
      visit: 'Or visit Radly.app',
      imageAlt: 'Radly Illustration',
    },
    travel: {
      eyebrow: 'Travel writing for Arabic explorers',
      title: 'Passport Trails',
      intro:
        'A travel blog for people who plan carefully, feel places deeply, and want honest Arabic guidance without turning every journey into a performance.',
      primaryCta: 'Read the Blog',
      helperCta: 'Planning Helper',
      quote:
        'I do not travel to collect stamps. I travel to understand what a place does to your inner weather.',
      imageAlt: 'Dr. Mohamed Amin Hammad traveling in Iceland',
      imageCaption: 'Iceland, where silence became part of the itinerary',
      lensEyebrow: 'The INFJ Lens',
      lensTitle: 'Quiet observation, useful detail, emotional memory.',
      lensParagraphs: [
        'My natural mode is to notice before I speak. In travel, that means watching how people move through a city, where the anxiety starts in the planning process, and which small details make a place feel safe, strange, generous, or heavy.',
        'Passport Trails is the practical side of that personality: reflective enough to carry meaning, structured enough to help Arabic travelers make better decisions before they spend money or time.',
      ],
      featuredEyebrow: 'Featured Writing',
      featuredTitle: 'Start with the stories',
      stories: [
        {
          label: 'Travel Mindset',
          title: 'Slow travel: stay long enough to feel the place',
          desc: 'A calmer way to travel for people who want depth, not a checklist.',
          href: 'https://passporttrails.com/%D8%A7%D9%84%D8%B3%D9%81%D8%B1-%D8%A7%D9%84%D8%A8%D8%B7%D9%8A%D8%A1-slow-travel/',
        },
        {
          label: 'Visa Guide',
          title: 'Albania visa for Egyptians in 2026',
          desc: 'A practical guide for Egyptians planning Albania without confusing visa noise.',
          href: 'https://passporttrails.com/%D9%81%D9%8A%D8%B2%D8%A7-%D8%A3%D9%84%D8%A8%D8%A7%D9%86%D9%8A%D8%A7-%D9%84%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D9%8A%D9%86-2026/',
        },
        {
          label: 'Budget Planning',
          title: 'How to travel on a tight budget',
          desc: 'Money-saving advice with the kind of realism travelers actually need.',
          href: 'https://passporttrails.com/%D8%A7%D8%B2%D8%A7%D9%8A-%D8%AA%D8%B3%D8%A7%D9%81%D8%B1-%D8%A8-10000-%D8%AC%D9%86%D9%8A%D8%A9-%D8%AF%D9%84%D9%8A%D9%84%D9%83-%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%84/',
        },
      ],
      visualEyebrow: 'Visual Diary',
      visualTitle:
        'The point is not looking well-traveled. It is becoming more precise about what moves you.',
      visualParagraphs: [
        'Some trips teach logistics. Some teach patience. Some teach you that your first impression was too simple. The writing starts when I can name the difference.',
        'That is the tone I want Passport Trails to keep: quietly personal, deeply useful, and honest about the invisible parts of travel that most guides skip.',
      ],
      visualAlt: 'Travel memories from Passport Trails',
      destinationsEyebrow: 'Places That Shaped The Notes',
      destinationsTitle: 'Countries explored',
      destinations: [
        ['Egypt', '🇪🇬', 'Home gives me the baseline. It is where I learned that history is not a museum topic; it is part of the street.'],
        ['Iceland', '🇮🇸', 'A place that made silence feel active. The landscape is dramatic, but the useful lesson is how carefully you need to plan.'],
        ['Norway', '🇳🇴', 'Orderly, expensive, and quietly beautiful. It rewards travelers who slow down instead of trying to conquer the map.'],
        ['Turkey', '🇹🇷', 'Familiar and surprising at the same time. Istanbul is one of those cities where one walk can change the whole day.'],
        ['Spain', '🇪🇸', 'A reminder that travel rhythm matters. Food, timing, neighborhoods, and mood can matter as much as landmarks.'],
        ['Italy', '🇮🇹', 'Beautiful in a way that can overwhelm planning. The trick is choosing fewer places and giving them enough attention.'],
        ['Saudi Arabia', '🇸🇦', 'A trip shaped by meaning, scale, and hospitality. It deserves context, not stereotypes.'],
        ['Latvia', '🇱🇻', 'Riga felt composed and introspective. The kind of city where architecture, weather, and quiet streets do most of the talking.'],
        ['Russia', '🇷🇺', 'Large, layered, and emotionally complicated. It reminded me that some places cannot be reduced to a single mood.'],
        ['Lithuania', '🇱🇹', 'Vilnius had a softer rhythm than I expected. A place where history feels present without always announcing itself.'],
        ['Croatia', '🇭🇷', 'Dubrovnik taught me that popular places can still feel personal if you find your own pace.'],
        ['Bosnia & Herzegovina', '🇧🇦', 'Layered, emotional, and human. Some destinations stay with you because they ask better questions than they answer.'],
      ],
      helperEyebrow: 'Secondary Helper',
      helperTitle: 'The app handles the planning friction.',
      helperIntro:
        'I built the Passport Trails app for the practical layer: visa requirements, allowed stay, documents, best time to visit, destination basics, and focused Arabic travel tips. The blog gives the judgment; the app keeps the essentials close.',
      helperFeatures: [
        'Visa requirements by nationality',
        'Documents and key notes',
        'Best time to visit',
        'Arabic planning tips',
      ],
      getApp: 'Get the Passport Trails app',
      appStoreAlt: 'Download Passport Trails on the App Store',
    },
    books: {
      title: 'Written Works',
      subtitle: 'Author',
      intro: [
        "I've always been curious about why people are the way they are. As an INFJ, I spent years trying to understand my own patterns before I realized other people might have the same questions. So I wrote about it.",
        "These books aren't academic. They're what I wish someone had told me when I was trying to figure out personality types, relationships, and why some connections just work. Written for people who think too much and feel too deeply.",
      ],
      items: [
        {
          title: 'Unraveling the INFJ Enigma',
          desc: 'Understanding the most rare personality type with compassion and depth.',
          alt: 'Unraveling the INFJ Enigma Book Cover',
        },
        {
          title: 'Finding Your Soulmate',
          desc: 'Using the Zodiac and Natal Charts to find your perfect match.',
          alt: 'Finding Your Soulmate Book Cover',
        },
      ],
    },
    gallery: {
      title: 'Visual Diary',
      alts: [
        "Architectural columns - Dr. Hammad's photography collection",
        "Travel photography from Dr. Hammad's world adventures",
        'Cultural exploration moments captured during international travels',
        'Scenic landscapes from 100+ countries visited',
        'Personal photography collection by Dr. Mohamed Amin Hammad',
      ],
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Contact',
      intro:
        "Whether you're interested in radiology consultation, Radly partnership, or just want to discuss travel and books, I'd love to hear from you.",
      emailLabel: 'Email Me Directly',
      divider: 'Or Connect On',
    },
  },
  ar: {
    meta: {
      title: 'د. محمد أمين حماد | استشاري أشعة، مؤسس Radly، وكاتب سفر',
      description:
        'الموقع الشخصي لد. محمد أمين حماد: استشاري أشعة، مؤسس Radly، وكاتب سفر في Passport Trails. مساحة عن الطب، التكنولوجيا، السفر، والكتابة.',
      keywords:
        'محمد أمين حماد, دكتور محمد حماد, استشاري أشعة, Radly, الذكاء الاصطناعي في الأشعة, Passport Trails, سفر, كتب, INFJ',
      ogImageAlt: 'د. محمد أمين حماد - استشاري أشعة ومؤسس وكاتب سفر',
      schemaDescription:
        'استشاري أشعة، مؤسس Radly، مسافر، وكاتب',
    },
    nav: {
      home: 'الرئيسية',
      about: 'عنّي',
      radly: 'تطبيق Radly',
      travel: 'السفر',
      books: 'الكتب',
      contact: 'تواصل',
    },
    common: {
      appStoreAlt: 'تحميل من App Store',
      android: 'أندرويد',
      googlePlay: 'متاح على Google Play',
      viewAmazon: 'شوفه على أمازون',
      readArticle: 'اقرأ المقال',
      visitPassportTrails: 'زور PassportTrails.com',
    },
    footer: {
      bio:
        'استشاري أشعة، مؤسس، مسافر، وكاتب.\nبحاول أقرّب الوضوح للطب والحياة من خلال التكنولوجيا والسفر.',
      quickLinks: 'روابط سريعة',
      connect: 'تواصل',
      copyright: 'كل الحقوق محفوظة.',
    },
    home: {
      eyebrow: 'د. محمد أمين حماد',
      titleLine1: 'أشعة',
      titleAccent: 'مع',
      titleLine2: 'سفر وكتابة',
      intro:
        'أنا طبيب أشعة بكتب كود، بسافر، وبكتب. ساعات التلاتة بيبقوا ماشيين مع بعض بشكل غريب. وساعات ببقى بس بحاول أفهم الطريق زي أي حد.',
      primaryCta: 'شوف Radly',
      secondaryCta: 'الحكاية',
      heroAlt: 'د. محمد أمين حماد - مسافر ومؤسس',
      badgeTitle: 'مواطن من العالم',
      badgeSubtitle: 'أكتر من 10 بلاد',
      quickLinks: [
        {
          title: 'تطبيق Radly',
          desc: 'مساعد ذكي لتقارير الأشعة',
        },
        {
          title: 'Passport Trails',
          desc: 'مدونة سفر وتصوير وتجارب',
        },
        {
          title: 'الكتب',
          desc: 'شخصية وعلاقات وفهم الذات',
        },
      ],
    },
    about: {
      title: 'الحكاية',
      subtitle: 'عنّي',
      imageAlt: 'د. حماد في مكان العمل',
      caption: 'تشخيص واهتمام بالتفاصيل',
      paragraphs: [
        'أنا د. محمد أمين حماد، طبيب أشعة مصري لقيت نفسي ببني برامج وبسافر العالم، من غير ما أكون مخطط إن ده يبقى جزء كبير من الحكاية. الحياة أحيانًا بتفتحلك أبواب ماكنتش واخد بالك إنك بتدور عليها. في شغلي كرئيس قسم أشعة في مستشفى خاص، يومي كله عن إننا نساعد الناس تلاقي إجابات من خلال الصور. بس مع الوقت فهمت إن الإجابات الحقيقية ساعات بتبدأ من سؤال أحسن.',
        'تقارير الأشعة ممكن تبقى متكررة بشكل مرهق. بعد ما تكتب نفس الجمل ونفس الأنماط مئات المرات، صعب تتجاهل إن في وقت بيتحرق في حاجات ممكن تتعمل أذكى. عشان كده بنيت Radly: مساعد بالذكاء الاصطناعي يشيل الجزء المكرر، ويسيب للدكتور مساحة يفكر في التشخيص نفسه. الفكرة مش استبدال الطبيب. الفكرة إن الطبيب يسترد وقت يقدر يستخدمه في الحاجة اللي البشر لسه بيعملوها أحسن: ربط النقط.',
        'ولما مبقاش في المستشفى أو قدام الكود، بسافر. مش سفر صور وخلاص، لكن السفر اللي يخليك تقعد في كافيه في دوبروفنيك أو تتمشى في ريكيافيك نص الليل وتكتشف إنك لسه بتتعلم. في Passport Trails بكتب للعرب اللي عايزين معلومة عملية وصادقة، مش بس صورة حلوة. السفر علمني إن فهم وجهات النظر المختلفة مش رفاهية لو عايز تبني حاجة تنفع الناس بجد.',
      ],
    },
    radly: {
      eyebrow: 'المشروع',
      title: 'Radly Assistant',
      intro:
        'بعد ما كتبت تقرير "no acute findings" للمرة الألف، كان قدامي اختيارين: أفضل أشتكي أو أبني حاجة. فبنيت Radly، مساعد ذكي يشيل الأجزاء المملة والمتكررة من تقارير الأشعة. هو مش مثالي، بس بيدّي أطباء الأشعة وقتهم يرجع عشان يركزوا في الحالات اللي محتاجة تفكير بجد.',
      features: [
        'سير عمل أسرع لتقارير الأشعة',
        'تحليل مدعوم بالذكاء الاصطناعي',
        'مبني بواسطة طبيب أشعة لأطباء الأشعة',
        'متاح على iOS وAndroid',
      ],
      appStoreAlt: 'تحميل Radly من App Store',
      visit: 'أو زور Radly.app',
      imageAlt: 'رسم توضيحي لتطبيق Radly',
    },
    travel: {
      eyebrow: 'كتابة سفر للعرب اللي بيحبوا يخططوا صح',
      title: 'Passport Trails',
      intro:
        'مدونة سفر للناس اللي بتحب تخطط بهدوء، تحس بالمكان، وتاخد معلومة عربية صادقة من غير ما كل رحلة تتحول لاستعراض.',
      primaryCta: 'اقرأ المدونة',
      helperCta: 'مساعد التخطيط',
      quote:
        'أنا مش بسافر عشان أزوّد ختم على الباسبور. بسافر عشان أفهم المكان بيعمل إيه جوايا.',
      imageAlt: 'د. محمد أمين حماد في أيسلندا',
      imageCaption: 'أيسلندا، المكان اللي خلّى الصمت جزء من الخطة',
      lensEyebrow: 'زاوية الـ INFJ',
      lensTitle: 'ملاحظة هادية، تفاصيل مفيدة، وذاكرة بتتعلق بالإحساس.',
      lensParagraphs: [
        'طبيعتي إني ألاحظ قبل ما أتكلم. في السفر ده معناه إني أبص الناس بتتحرك إزاي في المدينة، القلق بيبدأ فين أثناء التخطيط، وإيه التفاصيل الصغيرة اللي بتخلي مكان يحسسك بالأمان أو الغرابة أو الكرم أو الثقل.',
        'Passport Trails هو الجانب العملي من الشخصية دي: كتابة فيها إحساس، بس برضه منظمة كفاية إنها تساعد المسافر العربي ياخد قرارات أحسن قبل ما يصرف وقت وفلوس.',
      ],
      featuredEyebrow: 'مقالات مختارة',
      featuredTitle: 'ابدأ من الحكايات',
      stories: [
        {
          label: 'فلسفة السفر',
          title: 'السفر البطيء: اقعد كفاية عشان تحس بالمكان',
          desc: 'طريقة أهدى للسفر للناس اللي عايزة عمق مش قائمة إنجازات.',
          href: 'https://passporttrails.com/%D8%A7%D9%84%D8%B3%D9%81%D8%B1-%D8%A7%D9%84%D8%A8%D8%B7%D9%8A%D8%A1-slow-travel/',
        },
        {
          label: 'دليل تأشيرة',
          title: 'فيزا ألبانيا للمصريين 2026',
          desc: 'دليل عملي للمصريين اللي بيفكروا في ألبانيا وعايزين يفهموا المتطلبات من غير لخبطة.',
          href: 'https://passporttrails.com/%D9%81%D9%8A%D8%B2%D8%A7-%D8%A3%D9%84%D8%A8%D8%A7%D9%86%D9%8A%D8%A7-%D9%84%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D9%8A%D9%86-2026/',
        },
        {
          label: 'تخطيط الميزانية',
          title: 'إزاي تسافر بميزانية قليلة',
          desc: 'نصايح توفير واقعية من النوع اللي المسافر محتاجه فعلًا.',
          href: 'https://passporttrails.com/%D8%A7%D8%B2%D8%A7%D9%8A-%D8%AA%D8%B3%D8%A7%D9%81%D8%B1-%D8%A8-10000-%D8%AC%D9%86%D9%8A%D8%A9-%D8%AF%D9%84%D9%8A%D9%84%D9%83-%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%84/',
        },
      ],
      visualEyebrow: 'مذكرات بصرية',
      visualTitle:
        'الموضوع مش إنك تبان سافرت كتير. الموضوع إنك تفهم بدقة أكتر إيه اللي بيحرّكك.',
      visualParagraphs: [
        'في رحلات بتعلمك التخطيط. ورحلات بتعلمك الصبر. ورحلات بتفهمك إن انطباعك الأول كان أبسط من الحقيقة. الكتابة بتبدأ لما أعرف أسمّي الفرق.',
        'ده هو التون اللي عايز Passport Trails يفضل محافظ عليه: شخصي بهدوء، مفيد بجد، وصريح في الأجزاء غير المرئية من السفر اللي معظم الأدلة بتعدّي عليها.',
      ],
      visualAlt: 'ذكريات سفر من Passport Trails',
      destinationsEyebrow: 'أماكن شكّلت الملاحظات',
      destinationsTitle: 'بلاد زرتها',
      destinations: [
        ['مصر', '🇪🇬', 'البيت هو نقطة القياس. منه فهمت إن التاريخ مش موضوع متحف، ده جزء من الشارع.'],
        ['أيسلندا', '🇮🇸', 'مكان خلّى الصمت يحس إنه حي. الطبيعة درامية، بس الدرس العملي إن التخطيط هناك لازم يبقى محسوب.'],
        ['النرويج', '🇳🇴', 'منظمة، غالية، وجميلة بهدوء. بتكافئ اللي يبطّأ بدل ما يحاول يخلص الخريطة.'],
        ['تركيا', '🇹🇷', 'قريبة ومفاجئة في نفس الوقت. إسطنبول من المدن اللي مشية واحدة فيها ممكن تغيّر اليوم كله.'],
        ['إسبانيا', '🇪🇸', 'فكّرتني إن إيقاع السفر مهم. الأكل، التوقيت، الأحياء، والمزاج ساعات أهم من المعالم.'],
        ['إيطاليا', '🇮🇹', 'جميلة لدرجة إنها ممكن تلخبط التخطيط. الحل إنك تختار أماكن أقل وتديها وقتها.'],
        ['السعودية', '🇸🇦', 'رحلة فيها معنى وحجم وكرم. تستاهل سياق مش صور نمطية.'],
        ['لاتفيا', '🇱🇻', 'ريجا حسيتها هادية ومتأملة. مدينة العمارة والجو والشوارع الهادية فيها بيتكلموا كتير.'],
        ['روسيا', '🇷🇺', 'واسعة، مركبة، ومشحونة بالإحساس. فكّرتني إن في أماكن مينفعش تختصرها في مزاج واحد.'],
        ['ليتوانيا', '🇱🇹', 'فيلنيوس كان إيقاعها ألطف مما توقعت. التاريخ موجود من غير ما يفضل يعلن عن نفسه.'],
        ['كرواتيا', '🇭🇷', 'دوبروفنيك علمتني إن الأماكن المشهورة ممكن تفضل شخصية لو لقيت إيقاعك الخاص.'],
        ['البوسنة والهرسك', '🇧🇦', 'طبقات كتير، إحساس عالي، وإنسانية واضحة. في أماكن بتفضل معاك لأنها بتسأل أسئلة أحسن من إجاباتها.'],
      ],
      helperEyebrow: 'مساعد جانبي',
      helperTitle: 'التطبيق بيشيل احتكاك التخطيط.',
      helperIntro:
        'بنيت تطبيق Passport Trails للجزء العملي: متطلبات التأشيرة، مدة الإقامة، الأوراق، أفضل وقت للزيارة، أساسيات الوجهة، ونصايح سفر عربية مركزة. المدونة بتديك الحكم والخبرة، والتطبيق بيخلي الأساسيات قريبة.',
      helperFeatures: [
        'متطلبات التأشيرة حسب الجنسية',
        'الأوراق والملاحظات المهمة',
        'أفضل وقت للزيارة',
        'نصايح تخطيط بالعربي',
      ],
      getApp: 'حمّل تطبيق Passport Trails',
      appStoreAlt: 'تحميل Passport Trails من App Store',
    },
    books: {
      title: 'الكتب',
      subtitle: 'كاتب',
      intro: [
        'دايمًا كان عندي فضول أفهم الناس بتتصرف ليه بالشكل ده. كـ INFJ، قضيت سنين أحاول أفهم أنماطي أنا قبل ما أكتشف إن في ناس كتير عندها نفس الأسئلة. فكتبت عنها.',
        'الكتب دي مش أكاديمية. هي أقرب لحاجات كنت أتمنى حد يقولهالي وأنا بحاول أفهم أنماط الشخصية، العلاقات، وليه في علاقات بتحس إنها ماشية من غير شرح كتير. مكتوبة للناس اللي بتفكر كتير وبتحس بعمق.',
      ],
      items: [
        {
          title: 'Unraveling the INFJ Enigma',
          desc: 'فهم أندر أنماط الشخصية بتعاطف وعمق.',
          alt: 'غلاف كتاب Unraveling the INFJ Enigma',
        },
        {
          title: 'Finding Your Soulmate',
          desc: 'استخدام الأبراج والخرائط الفلكية لفهم التوافق والعلاقات.',
          alt: 'غلاف كتاب Finding Your Soulmate',
        },
      ],
    },
    gallery: {
      title: 'مذكرات بصرية',
      alts: [
        'أعمدة معمارية من تصوير د. حماد',
        'صور سفر من رحلات د. حماد',
        'لحظات ثقافية من رحلات دولية',
        'مناظر طبيعية من بلاد متعددة',
        'مجموعة تصوير شخصية لد. محمد أمين حماد',
      ],
    },
    contact: {
      title: 'تواصل معايا',
      subtitle: 'تواصل',
      intro:
        'سواء مهتم باستشارة أشعة، شراكة مع Radly، أو حتى حابب نتكلم عن السفر والكتب، هكون سعيد أسمع منك.',
      emailLabel: 'ابعتلي إيميل مباشرة',
      divider: 'أو تواصل على',
    },
  },
  es: {
    meta: {
      title: 'Dr. Mohamed Amin Hammad | Radiólogo, Fundador y Explorador',
      description:
        'Radiólogo consultor, fundador de Radly AI, viajero y autor. Un espacio sobre medicina, tecnología, viajes y escritura.',
      keywords:
        'Mohamed Amin Hammad, Dr. Hammad, Radiólogo, Radly, IA en radiología, tecnología médica, viajes, autor, INFJ',
      ogImageAlt: 'Dr. Mohamed Amin Hammad - Radiólogo, Fundador y Explorador',
      schemaDescription:
        'Radiólogo consultor, fundador de Radly AI, viajero y autor',
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      radly: 'Radly App',
      travel: 'Viajes',
      books: 'Libros',
      contact: 'Contacto',
    },
    common: {
      appStoreAlt: 'Descargar en App Store',
      android: 'Android',
      googlePlay: 'Disponible en Google Play',
      viewAmazon: 'Ver en Amazon',
      readArticle: 'Leer artículo',
      visitPassportTrails: 'Visitar PassportTrails.com',
    },
    footer: {
      bio:
        'Radiólogo, fundador, viajero y autor.\nBuscando claridad en la medicina y en la vida a través de la tecnología y la exploración.',
      quickLinks: 'Enlaces rápidos',
      connect: 'Conectar',
      copyright: 'Todos los derechos reservados.',
    },
    home: {
      eyebrow: 'Dr. Mohamed Amin Hammad',
      titleLine1: 'Medicina',
      titleAccent: 'y',
      titleLine2: 'Exploración',
      intro:
        'Soy radiólogo, programo, viajo y escribo. A veces todo eso encaja. Otras veces, simplemente estoy intentando entenderlo como todos.',
      primaryCta: 'Explorar innovación',
      secondaryCta: 'Mi historia',
      heroAlt: 'Dr. Mohamed Amin Hammad - Explorador',
      badgeTitle: 'Ciudadano global',
      badgeSubtitle: 'Más de 10 países visitados',
      quickLinks: [
        {
          title: 'Radly App',
          desc: 'Informes de radiología con IA',
        },
        {
          title: 'Passport Trails',
          desc: 'Blog de viajes y fotografía',
        },
        {
          title: 'Libros',
          desc: 'Psicología y personalidad',
        },
      ],
    },
    about: {
      title: 'Mi historia',
      subtitle: 'Sobre mí',
      imageAlt: 'Dr. Hammad en radiología',
      caption: 'Diagnóstico y dedicación',
      paragraphs: [
        'Soy el Dr. Mohamed Amin Hammad, un radiólogo egipcio que terminó creando software y viajando por el mundo sin haberlo planeado así. La vida a veces revela caminos que no sabías que estabas buscando. Como jefe de radiología en un hospital privado, ayudo a las personas a encontrar respuestas a través de imágenes, pero he aprendido que las respuestas reales suelen venir de hacer mejores preguntas.',
        'Los informes de radiología pueden ser dolorosamente repetitivos. Después de escribir los mismos patrones cientos de veces, ya no podía ignorar la ineficiencia. Por eso construí Radly, un asistente de IA que se encarga de las partes repetitivas para que los radiólogos puedan concentrarse en el razonamiento diagnóstico. No se trata de reemplazar médicos. Se trata de devolverles tiempo para hacer lo que solo los humanos hacen bien: conectar los puntos.',
        'Cuando no estoy en el hospital o programando, viajo. No el tipo de viaje de Instagram, sino el que te hace sentarte en un cafe en Dubrovnik o caminar por Reikiavik a medianoche y darte cuenta de cuánto no sabes. En Passport Trails comparto lo aprendido con viajeros árabes que quieren orientación práctica, no solo fotos bonitas.',
      ],
    },
    radly: {
      eyebrow: 'La startup',
      title: 'Radly Assistant',
      intro:
        'Después de escribir mi informe número mil de "no acute findings", tenía dos opciones: seguir quejándome o construir algo. Así nació Radly, un asistente de IA que se ocupa de las partes repetitivas de los informes radiológicos. No es perfecto, pero devuelve a los radiólogos tiempo para pensar en los casos que importan.',
      features: [
        'Flujos automatizados de informes',
        'Análisis impulsado por IA',
        'Creado por un radiólogo para radiólogos',
        'Disponible en iOS y Android',
      ],
      appStoreAlt: 'Descargar Radly en App Store',
      visit: 'O visita Radly.app',
      imageAlt: 'Ilustración de Radly',
    },
    travel: {
      eyebrow: 'Escritura de viajes para exploradores árabes',
      title: 'Passport Trails',
      intro:
        'Un blog de viajes para personas que planifican con cuidado, sienten los lugares con profundidad y quieren orientación árabe honesta sin convertir cada viaje en una actuación.',
      primaryCta: 'Leer el blog',
      helperCta: 'Ayuda para planificar',
      quote:
        'No viajo para coleccionar sellos. Viajo para entender lo que un lugar cambia por dentro.',
      imageAlt: 'Dr. Mohamed Amin Hammad viajando en Islandia',
      imageCaption: 'Islandia, donde el silencio se volvió parte del itinerario',
      lensEyebrow: 'La mirada INFJ',
      lensTitle: 'Observación tranquila, detalle útil, memoria emocional.',
      lensParagraphs: [
        'Mi modo natural es observar antes de hablar. En los viajes, eso significa mirar cómo se mueve la gente por una ciudad, dónde empieza la ansiedad al planificar y qué pequeños detalles hacen que un lugar se sienta seguro, extraño, generoso o pesado.',
        'Passport Trails es el lado práctico de esa personalidad: suficientemente reflexivo para tener significado y suficientemente estructurado para ayudar a viajeros árabes a tomar mejores decisiones.',
      ],
      featuredEyebrow: 'Artículos destacados',
      featuredTitle: 'Empieza con las historias',
      stories: [
        {
          label: 'Mentalidad viajera',
          title: 'Viaje lento: quédate lo suficiente para sentir el lugar',
          desc: 'Una forma más tranquila de viajar para quienes buscan profundidad, no una lista.',
          href: 'https://passporttrails.com/%D8%A7%D9%84%D8%B3%D9%81%D8%B1-%D8%A7%D9%84%D8%A8%D8%B7%D9%8A%D8%A1-slow-travel/',
        },
        {
          label: 'Guía de visado',
          title: 'Visa de Albania para egipcios en 2026',
          desc: 'Una guía práctica para egipcios que están pensando en Albania sin perderse en información confusa.',
          href: 'https://passporttrails.com/%D9%81%D9%8A%D8%B2%D8%A7-%D8%A3%D9%84%D8%A8%D8%A7%D9%86%D9%8A%D8%A7-%D9%84%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D9%8A%D9%86-2026/',
        },
        {
          label: 'Presupuesto',
          title: 'Cómo viajar con poco presupuesto',
          desc: 'Consejos realistas para ahorrar de la forma que un viajero realmente necesita.',
          href: 'https://passporttrails.com/%D8%A7%D8%B2%D8%A7%D9%8A-%D8%AA%D8%B3%D8%A7%D9%81%D8%B1-%D8%A8-10000-%D8%AC%D9%86%D9%8A%D8%A9-%D8%AF%D9%84%D9%8A%D9%84%D9%83-%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%84/',
        },
      ],
      visualEyebrow: 'Diario visual',
      visualTitle:
        'La idea no es parecer muy viajado. Es volverte más preciso sobre lo que te mueve.',
      visualParagraphs: [
        'Algunos viajes enseñan logística. Otros paciencia. Otros te muestran que tu primera impresión era demasiado simple. La escritura empieza cuando puedo nombrar la diferencia.',
        'Ese es el tono que quiero mantener en Passport Trails: personal con calma, profundamente útil y honesto sobre las partes invisibles del viaje.',
      ],
      visualAlt: 'Recuerdos de viaje de Passport Trails',
      destinationsEyebrow: 'Lugares que formaron las notas',
      destinationsTitle: 'Países explorados',
      destinations: [
        ['Egipto', '🇪🇬', 'El hogar me da la referencia. Allí aprendí que la historia no es solo un tema de museo; vive en la calle.'],
        ['Islandia', '🇮🇸', 'Un lugar que hizo que el silencio se sintiera activo. El paisaje es dramático, pero la lección útil es planificar bien.'],
        ['Noruega', '🇳🇴', 'Ordenada, cara y discretamente hermosa. Premia a quien reduce el ritmo en vez de conquistar el mapa.'],
        ['Turquía', '🇹🇷', 'Familiar y sorprendente a la vez. Estambul es una ciudad donde una caminata puede cambiar el día completo.'],
        ['España', '🇪🇸', 'Un recordatorio de que el ritmo del viaje importa. La comida, el horario, los barrios y el ánimo pesan tanto como los monumentos.'],
        ['Italia', '🇮🇹', 'Hermosa de una forma que puede abrumar la planificación. El truco es elegir menos lugares y darles más atención.'],
        ['Arabia Saudita', '🇸🇦', 'Un viaje marcado por significado, escala y hospitalidad. Merece contexto, no estereotipos.'],
        ['Letonia', '🇱🇻', 'Riga se sintió serena e introspectiva. Una ciudad donde la arquitectura, el clima y las calles tranquilas hablan mucho.'],
        ['Rusia', '🇷🇺', 'Grande, compleja y emocionalmente intensa. Me recordó que algunos lugares no caben en un solo estado de ánimo.'],
        ['Lituania', '🇱🇹', 'Vilna tuvo un ritmo más suave de lo esperado. Un lugar donde la historia está presente sin anunciarse todo el tiempo.'],
        ['Croacia', '🇭🇷', 'Dubrovnik me enseñó que los lugares populares pueden sentirse personales si encuentras tu propio ritmo.'],
        ['Bosnia y Herzegovina', '🇧🇦', 'Con capas, emoción y humanidad. Algunos destinos se quedan contigo porque hacen mejores preguntas que respuestas.'],
      ],
      helperEyebrow: 'Ayuda secundaria',
      helperTitle: 'La app reduce la fricción de planificar.',
      helperIntro:
        'Construí la app Passport Trails para la parte práctica: requisitos de visa, estancia permitida, documentos, mejor época para visitar, información básica del destino y consejos de viaje en árabe.',
      helperFeatures: [
        'Requisitos de visa por nacionalidad',
        'Documentos y notas clave',
        'Mejor época para visitar',
        'Consejos de planificación en árabe',
      ],
      getApp: 'Descargar la app Passport Trails',
      appStoreAlt: 'Descargar Passport Trails en App Store',
    },
    books: {
      title: 'Obras escritas',
      subtitle: 'Autor',
      intro: [
        'Siempre he tenido curiosidad por entender por qué las personas son como son. Como INFJ, pasé años intentando comprender mis propios patrones antes de darme cuenta de que otras personas tenían las mismas preguntas.',
        'Estos libros no son académicos. Son lo que me habría gustado que alguien me dijera cuando intentaba entender los tipos de personalidad, las relaciones y por qué algunas conexiones simplemente funcionan.',
      ],
      items: [
        {
          title: 'Unraveling the INFJ Enigma',
          desc: 'Comprender el tipo de personalidad más raro con compasión y profundidad.',
          alt: 'Portada de Unraveling the INFJ Enigma',
        },
        {
          title: 'Finding Your Soulmate',
          desc: 'Usar el zodiaco y las cartas natales para encontrar compatibilidad.',
          alt: 'Portada de Finding Your Soulmate',
        },
      ],
    },
    gallery: {
      title: 'Diario visual',
      alts: [
        'Columnas arquitectónicas de la colección fotográfica del Dr. Hammad',
        'Fotografía de viajes del Dr. Hammad',
        'Momentos culturales capturados durante viajes internacionales',
        'Paisajes de países visitados',
        'Colección personal de fotografía del Dr. Mohamed Amin Hammad',
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Contacto',
      intro:
        'Si te interesa una consulta de radiología, una colaboración con Radly o simplemente hablar de viajes y libros, me encantará saber de ti.',
      emailLabel: 'Escríbeme directamente',
      divider: 'O conecta en',
    },
  },
} as const;

export type Translation = (typeof translations)[Locale];
