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
    shortLabel: 'عربي',
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

export const PAGES = ['home', 'about', 'radly', 'travel', 'books', 'contact'] as const;

export type Page = typeof PAGES[number];

export const getPageUrl = (locale: Locale, page: Page) =>
  page === 'home' ? getLocalePath(locale) : `${getLocalePath(locale)}${page}/`;

export const LINKS = {
  email: 'contact@m.mohamedhammad.com',
  linkedin: 'https://www.linkedin.com/in/mohamed-h-47953589',
  x: 'https://x.com/thisishammadmo',
  facebook: 'https://www.facebook.com/ThisIsHammadMo',
  radly: 'https://radly.app',
  radlyIos: 'https://apps.apple.com/app/radly-assistant/id6754604993',
  radlyAndroid: 'https://play.google.com/store/apps/details?id=com.radly.app',
  /** Radly Telegram bot. Leave empty to hide the button. */
  radlyTelegram: 'https://t.me/radly_assistant_bot' as string,
  passportTrails: 'https://passporttrails.com',
  passportTrailsIos: 'https://apps.apple.com/us/app/passport-trails/id6761397513',
  passportTrailsAndroid: 'https://play.google.com/store/apps/details?id=com.passporttrails.app',
} as const;

export const AMAZON_AUTHOR_URL = 'https://www.amazon.com/stores/author/B0BRQHPSH9';

// Locale-independent book data. Titles stay in English in every locale (published titles).
export const BOOKS = {
  iSwear: {
    title: "I Swear I'll Find You",
    subtitle:
      "A Doctor's Journey Through Personality, Astrology, and Love Languages to Find the One, and How You Can Find Yours",
    author: 'Mohamed Hammad',
    cover: '/i-swear-ill-find-you.jpg',
    kindle: { url: 'https://www.amazon.com/dp/B0HLKXP2QW', asin: 'B0HLKXP2QW' },
    paperback: { url: 'https://www.amazon.com/dp/B0HLKVR7CS', asin: 'B0HLKVR7CS' },
  },
  infj: {
    title: 'Unraveling the INFJ Enigma',
    cover: '/unraveling-infj-enigma.jpg',
    amazon: 'https://www.amazon.com/Unraveling-INFJ-Enigma-Understanding-Compassionate/dp/B0BS1FNS7F',
  },
} as const;

export const translations = {
  en: {
    meta: {
      keywords:
        'Mohamed Amin Hammad, Dr. Hammad, Radiologist, Radly, AI in Radiology, Medical Technology, World Traveler, Travel Blog, Author, INFJ, I Swear I\'ll Find You, love languages, astrology compatibility, Medical Innovation',
      ogImageAlt: 'Dr. Mohamed Amin Hammad, consultant radiologist, founder of Radly and author',
      schemaDescription:
        'Consultant Radiologist, Founder of Radly AI, World Traveler, and Author',
    },
    pages: {
      home: {
        title: 'Dr. Mohamed Amin Hammad | Consultant Radiologist, Founder & Author',
        description: 'Egyptian consultant radiologist and Head of Radiology, founder of Radly, author and traveller.',
      },
      about: {
        title: 'About | Dr. Mohamed Amin Hammad',
        description: 'Radiologist, software builder, traveller and INFJ author: the story behind the work.',
      },
      radly: {
        title: 'Radly, AI radiology reporting | Dr. Mohamed Amin Hammad',
        description: 'Radly is an AI assistant that drafts the repetitive parts of radiology reports. Built by a radiologist, for radiologists.',
      },
      travel: {
        title: 'Passport Trails, travel writing | Dr. Mohamed Amin Hammad',
        description: 'Honest Arabic travel writing and a planning app for Egyptian and Arab travellers.',
      },
      books: {
        title: "Books: I Swear I'll Find You and more | Dr. Mohamed Amin Hammad",
        description: "Books on personality, astrology and love languages, including the new I Swear I'll Find You.",
      },
      contact: {
        title: 'Contact | Dr. Mohamed Amin Hammad',
        description: 'Get in touch about radiology consultation, Radly partnerships, books or travel.',
      },
    },
    nav: {
      home: 'Home',
      about: 'About',
      radly: 'Radly',
      travel: 'Travel',
      books: 'Books',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
      skip: 'Skip to content',
      language: 'Language',
      tagline: 'Radiologist · Writer',
    },
    common: {
      appStore: 'App Store',
      googlePlay: 'Google Play',
      getOn: 'Get it on',
      readArticle: 'Read article',
      visitPassportTrails: 'Visit PassportTrails.com',
      newTab: '(opens in a new tab)',
    },
    footer: {
      bio:
        'Radiologist, founder, traveler, author.\nWriting about medicine, technology, travel, and the quiet patterns of the human heart.',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      copyright: 'All rights reserved.',
    },
    home: {
      eyebrow: 'Consultant Radiologist · Head of Radiology',
      titleLead: 'I spend my days seeing what',
      titleAccent: 'others miss.',
      captionName: 'Dr. Mohamed Amin Hammad',
      captionRole: 'Head of Radiology',
      intro:
        "I'm Dr. Mohamed Amin Hammad, an Egyptian consultant radiologist and Head of Radiology at a private hospital. I built Radly to give radiologists their time back, and outside the reading room I travel and write about the quiet patterns of the human heart.",
      primaryCta: 'Read my story',
      secondaryCta: 'See Radly',
      portraitAlt: 'Portrait of Dr. Mohamed Amin Hammad',
      stats: [
        { value: 'Radiologist', label: 'Consultant' },
        { value: 'Radly', label: 'Founder' },
        { value: '2 books', label: 'Author' },
        { value: '12 countries', label: 'Traveller' },
      ],
      worksEyebrow: 'What I do',
      worksTitle: 'Beyond the reading room',
      works: [
        {
          page: 'radly',
          label: 'Medicine & software',
          title: 'Radly',
          desc: 'An AI assistant that drafts the repetitive parts of radiology reports, built by a radiologist for radiologists.',
          cta: 'Explore Radly',
        },
        {
          page: 'books',
          label: 'Writing',
          title: 'Books',
          desc: 'Honest books about personality, astrology and love languages, for people who think too much and feel too deeply.',
          cta: 'See the books',
        },
        {
          page: 'travel',
          label: 'Travel',
          title: 'Passport Trails',
          desc: 'An Arabic travel blog and app with practical guidance on visas, budgets and journeys.',
          cta: 'Read the travel writing',
        },
      ],
      newBook: 'New book',
      getBook: 'Get the book',
      bookCta: 'About the book',
      contactTitle: "Let's talk",
      contactCta: 'Get in touch',
    },
    about: {
      title: 'My Story',
      subtitle: 'About Me',
      imageAlt: 'Dr. Hammad at Radiology Desk',
      caption: 'Diagnostics & Dedication',
      paragraphs: [
        "I'm Dr. Mohamed Amin Hammad, an Egyptian consultant radiologist, a builder of software, and a traveler who has learned that the most important things rarely show up on a scan.",
        "By day, I'm Head of Radiology at a private hospital. After writing the same report patterns hundreds of times, I built Radly, an AI assistant that handles the repetitive parts of radiology reporting, so doctors can get back to the thinking that matters.",
        "Beyond the hospital, I'm the voice behind Passport Trails, an Arabic travel blog and app that helps Egyptian and Arab travelers navigate visas, budgets, and journeys with honest, practical guidance. I don't travel to collect stamps. I travel to understand what a place does to my inner weather.",
        "At heart, I'm an INFJ with a lifelong fascination with psychology and the nature of human personality: why people love the way they do, why some connections just work, and why others fall apart no matter how hard two people try. That curiosity became my books, written for readers who think too much and feel too deeply.",
      ],
    },
    radly: {
      eyebrow: 'Voice-supported reporting',
      title: 'Radly',
      titleLead: 'Report drafts in half the time.',
      titleAccent: 'You dictate. We structure. You sign.',
      intro:
        'Radly captures your findings by voice, structures them into professional reports, and puts sign-off in your hands, where it belongs.',
      primaryCta: 'Get started free',
      secondaryCta: 'See how it works',
      perks: ['No credit card required', '5 free reports a month'],
      getOnYourTerms: 'Get Radly on your terms',
      telegramSmall: 'Chat with',
      telegramName: 'Telegram Bot',
      storyTitle: 'Why I built it',
      story:
        'After writing my thousandth "no acute findings" report, I had a choice: keep complaining or build something. So I built Radly, an AI assistant that handles the boring parts of radiology reporting. It is not perfect, but it gives radiologists their time back to actually think about the cases that matter.',
      features: [
        'Automated Reporting Workflows',
        'AI-Driven Analysis',
        'Built by a Radiologist, for Radiologists',
        'Available on iOS and Android',
      ],
      visit: 'Visit Radly.app',
      imageAlt: 'A radiologist\'s desk with a CT scan on one screen and a Radly report on the other',
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
      helperEyebrow: 'The Passport Trails app',
      splashAlt: 'Passport Trails app launch screen: a mountain and trail logo with the line "Your travel companion"',
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
    },
    books: {
      title: 'Written Works',
      subtitle: 'Author',
      intro: [
        "I've always been curious about why people are the way they are. As an INFJ, I spent years trying to understand my own patterns in love, before I realized other people had the same questions. So I wrote about it, honestly, including the parts I got wrong.",
        "These books aren't academic. They're what I wish someone had handed me at eighteen: personality types, astrology, love languages, and the quiet patterns we repeat without noticing. Written for people who think too much and feel too deeply.",
      ],
      newTab: '(opens in a new tab)',
      featured: {
        ...BOOKS.iSwear,
        eyebrow: 'New',
        alt: "I Swear I'll Find You book cover by Mohamed Hammad",
        tagline: 'I wrote this promise when I was seventeen. It took me twenty years to keep it.',
        description: [
          'He loved her for three years. He spoke to her once. He asked her to confirm her own name.',
          "At seventeen, Mohamed Hammad wrote a poem to a girl who didn't exist yet, and ended it with a promise he had no business making: I swear I'll find you. He just didn't know how many times he'd get it wrong first.",
          'The silence that cost him the girl in the lecture hall. The marriage he mistook for love. The betrayal that ended it, and the years he stayed anyway. And the long nights of wondering whether the woman in his poems had ever existed outside his head.',
          'Then a stranger wrote to him first. She signed her letter with a butterfly.',
          "You won't find a checklist in this book. You'll find a mirror.",
        ],
        bullets: [
          'Why the people you fall for hardest are often the worst for you',
          'The lie your personality tells you every time a red flag appears',
          'Why a calm, steady love can feel "boring," and why that feeling is wrong',
          'How to recognize your person, even if they arrive as a letter from a stranger',
        ],
        closing: 'She was out there all along. So is yours.',
        links: [
          { label: 'Kindle eBook', href: BOOKS.iSwear.kindle.url, primary: true },
          { label: 'Paperback', href: BOOKS.iSwear.paperback.url, primary: false },
        ],
      },
      items: [
        {
          title: BOOKS.infj.title,
          desc: 'Understanding the most rare personality type with compassion and depth.',
          alt: 'Unraveling the INFJ Enigma Book Cover',
          cover: BOOKS.infj.cover,
          links: [{ label: 'View on Amazon', href: BOOKS.infj.amazon }],
        },
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
      keywords:
        'محمد أمين حماد, دكتور محمد حماد, استشاري أشعة, Radly, الذكاء الاصطناعي في الأشعة, Passport Trails, سفر, كتب, INFJ, I Swear I\'ll Find You, لغات الحب, توافق الأبراج',
      ogImageAlt: 'د. محمد أمين حماد - استشاري أشعة ومؤسس وكاتب سفر',
      schemaDescription:
        'استشاري أشعة، مؤسس Radly، مسافر، وكاتب',
    },
    pages: {
      home: {
        title: 'د. محمد أمين حماد | استشاري أشعة، مؤسس Radly، وكاتب',
        description: 'استشاري أشعة مصري ورئيس قسم الأشعة، مؤسس Radly، كاتب ومسافر.',
      },
      about: {
        title: 'عنّي | د. محمد أمين حماد',
        description: 'طبيب أشعة، ببني برامج، مسافر، وكاتب INFJ: الحكاية اللي ورا الشغل.',
      },
      radly: {
        title: 'Radly، ذكاء اصطناعي لتقارير الأشعة | د. محمد أمين حماد',
        description: 'Radly مساعد بالذكاء الاصطناعي بيكتب الأجزاء المتكررة من تقارير الأشعة. مبني بواسطة طبيب أشعة لأطباء الأشعة.',
      },
      travel: {
        title: 'Passport Trails، كتابة عن السفر | د. محمد أمين حماد',
        description: 'كتابة سفر صادقة بالعربي وتطبيق تخطيط للمسافرين المصريين والعرب.',
      },
      books: {
        title: "الكتب: I Swear I'll Find You وغيره | د. محمد أمين حماد",
        description: "كتب عن الشخصية والأبراج ولغات الحب، ومنها الكتاب الجديد I Swear I'll Find You.",
      },
      contact: {
        title: 'تواصل | د. محمد أمين حماد',
        description: 'تواصل معايا بخصوص استشارات الأشعة، شراكات Radly، الكتب، أو السفر.',
      },
    },
    nav: {
      home: 'الرئيسية',
      about: 'عنّي',
      radly: 'Radly',
      travel: 'السفر',
      books: 'الكتب',
      contact: 'تواصل',
      menu: 'القائمة',
      close: 'اقفل',
      skip: 'اتنقل للمحتوى',
      language: 'اللغة',
      tagline: 'استشاري أشعة · كاتب',
    },
    common: {
      appStore: 'App Store',
      googlePlay: 'Google Play',
      getOn: 'حمّله من',
      readArticle: 'اقرأ المقال',
      visitPassportTrails: 'زور PassportTrails.com',
      newTab: '(بيفتح في تاب جديدة)',
    },
    footer: {
      bio:
        'استشاري أشعة، مؤسس، مسافر، وكاتب.\nبكتب عن الطب، والتكنولوجيا، والسفر، والأنماط الهادية اللي جوه قلب الإنسان.',
      quickLinks: 'روابط سريعة',
      connect: 'تواصل',
      copyright: 'كل الحقوق محفوظة.',
    },
    home: {
      eyebrow: 'استشاري أشعة · رئيس قسم الأشعة',
      titleLead: 'شغلي إني أشوف اللي غيري',
      titleAccent: 'مش واخد باله منه.',
      captionName: 'د. محمد أمين حماد',
      captionRole: 'رئيس قسم الأشعة',
      intro:
        'أنا د. محمد أمين حماد، استشاري أشعة مصري ورئيس قسم الأشعة في مستشفى خاص. بنيت Radly عشان أطباء الأشعة يرجعلهم وقتهم، وبرّه غرفة الأشعة بسافر وبكتب عن الأنماط الهادية اللي جوه قلب الإنسان.',
      primaryCta: 'اقرأ الحكاية',
      secondaryCta: 'شوف Radly',
      portraitAlt: 'صورة د. محمد أمين حماد',
      stats: [
        { value: 'استشاري أشعة', label: 'التخصص' },
        { value: 'Radly', label: 'مؤسس' },
        { value: 'كتابين', label: 'كاتب' },
        { value: '12 بلد', label: 'مسافر' },
      ],
      worksEyebrow: 'اللي بعمله',
      worksTitle: 'برّه غرفة الأشعة',
      works: [
        {
          page: 'radly',
          label: 'طب وبرمجة',
          title: 'Radly',
          desc: 'مساعد بالذكاء الاصطناعي بيكتب الأجزاء المتكررة من تقارير الأشعة، مبني بواسطة طبيب أشعة لأطباء الأشعة.',
          cta: 'اعرف أكتر عن Radly',
        },
        {
          page: 'books',
          label: 'كتابة',
          title: 'الكتب',
          desc: 'كتب صريحة عن الشخصية والأبراج ولغات الحب، للناس اللي بتفكر كتير وبتحس بعمق.',
          cta: 'شوف الكتب',
        },
        {
          page: 'travel',
          label: 'سفر',
          title: 'Passport Trails',
          desc: 'مدونة وتطبيق سفر بالعربي فيهم نصايح عملية عن التأشيرات والميزانيات والرحلات.',
          cta: 'اقرأ كتابات السفر',
        },
      ],
      newBook: 'كتاب جديد',
      getBook: 'اشتري الكتاب',
      bookCta: 'عن الكتاب',
      contactTitle: 'يلا نتكلم',
      contactCta: 'تواصل معايا',
    },
    about: {
      title: 'الحكاية',
      subtitle: 'عنّي',
      imageAlt: 'د. حماد في مكان العمل',
      caption: 'تشخيص واهتمام بالتفاصيل',
      paragraphs: [
        'أنا د. محمد أمين حماد، استشاري أشعة مصري، ببني برامج، ومسافر اتعلّم إن أهم الحاجات نادرًا ما بتبان في أي أشعة.',
        'بالنهار، أنا رئيس قسم الأشعة في مستشفى خاص. بعد ما كتبت نفس أنماط التقارير مئات المرات، بنيت Radly: مساعد بالذكاء الاصطناعي بيشيل الأجزاء المتكررة من تقارير الأشعة، عشان الدكاترة يرجعوا يركزوا في التفكير اللي فارق بجد.',
        'وبعيد عن المستشفى، أنا الصوت اللي ورا Passport Trails، مدونة وتطبيق سفر بالعربي بيساعدوا المسافرين المصريين والعرب يعدّوا من لخبطة التأشيرات والميزانيات والرحلات، بنصايح صادقة وعملية. أنا مش بسافر عشان أجمّع أختام على الباسبور. بسافر عشان أفهم المكان بيعمل إيه في الطقس اللي جوايا.',
        'وفي الأساس، أنا INFJ عندي شغف من زمان بعلم النفس وطبيعة الشخصية البشرية: ليه الناس بتحب بالطريقة اللي بتحب بيها، ليه في علاقات بتمشي كده لوحدها، وليه علاقات تانية بتقع مهما الاتنين حاولوا. الفضول ده هو اللي بقى كتبي، مكتوبة للناس اللي بتفكر كتير وبتحس بعمق.',
      ],
    },
    radly: {
      eyebrow: 'تقارير بالصوت',
      title: 'Radly',
      titleLead: 'مسودة التقرير في نص الوقت.',
      titleAccent: 'إنت بتملي. إحنا بننظّم. وإنت بتوقّع.',
      intro:
        'Radly بياخد الـ findings بصوتك، وبيرتبها في تقرير احترافي، والتوقيع النهائي بيفضل في إيدك، مكانه الطبيعي.',
      primaryCta: 'ابدأ مجانًا',
      secondaryCta: 'شوف بيشتغل إزاي',
      perks: ['من غير كارت ائتمان', '5 تقارير مجانًا كل شهر'],
      getOnYourTerms: 'استخدم Radly بالطريقة اللي تريحك',
      telegramSmall: 'كلّم',
      telegramName: 'Telegram Bot',
      storyTitle: 'ليه بنيته',
      story:
        'بعد ما كتبت تقرير "no acute findings" للمرة الألف، كان قدامي اختيارين: أفضل أشتكي أو أبني حاجة. فبنيت Radly، مساعد ذكي يشيل الأجزاء المملة والمتكررة من تقارير الأشعة. هو مش مثالي، بس بيدّي أطباء الأشعة وقتهم يرجع عشان يركزوا في الحالات اللي محتاجة تفكير بجد.',
      features: [
        'سير عمل أسرع لتقارير الأشعة',
        'تحليل مدعوم بالذكاء الاصطناعي',
        'مبني بواسطة طبيب أشعة لأطباء الأشعة',
        'متاح على iOS وAndroid',
      ],
      visit: 'زور Radly.app',
      imageAlt: 'مكتب طبيب أشعة عليه أشعة مقطعية على شاشة وتقرير Radly على الشاشة التانية',
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
      helperEyebrow: 'تطبيق Passport Trails',
      splashAlt: 'شاشة بداية تطبيق Passport Trails: لوجو جبل وطريق، ومكتوب "رفيقك في السفر"',
      helperTitle: 'التطبيق بيشيل عنك وجع دماغ التخطيط.',
      helperIntro:
        'بنيت تطبيق Passport Trails للجزء العملي: متطلبات التأشيرة، مدة الإقامة، الأوراق، أفضل وقت للزيارة، أساسيات الوجهة، ونصايح سفر عربية مركزة. المدونة بتديك الحكم والخبرة، والتطبيق بيخلي الأساسيات قريبة.',
      helperFeatures: [
        'متطلبات التأشيرة حسب الجنسية',
        'الأوراق والملاحظات المهمة',
        'أفضل وقت للزيارة',
        'نصايح تخطيط بالعربي',
      ],
      getApp: 'حمّل تطبيق Passport Trails',
    },
    books: {
      title: 'الكتب',
      subtitle: 'كاتب',
      intro: [
        'دايمًا كان عندي فضول أفهم الناس بتبقى كده ليه. كـ INFJ، قضيت سنين بحاول أفهم أنماطي أنا في الحب، لحد ما اكتشفت إن ناس كتير عندها نفس الأسئلة. فكتبت عن ده، بصراحة، حتى الأجزاء اللي غلطت فيها.',
        'الكتب دي مش أكاديمية. هي الحاجات اللي كنت أتمنى حد يحطها في إيدي وأنا عندي تمنتاشر سنة: أنماط الشخصية، الأبراج، لغات الحب، والأنماط الهادية اللي بنكررها من غير ما ناخد بالنا. مكتوبة للناس اللي بتفكر كتير وبتحس بعمق.',
      ],
      newTab: '(بيفتح في تاب جديدة)',
      featured: {
        ...BOOKS.iSwear,
        eyebrow: 'جديد',
        alt: "غلاف كتاب I Swear I'll Find You لمحمد حماد",
        tagline: 'كتبت الوعد ده وأنا عندي سبعتاشر سنة. وأخد مني عشرين سنة عشان أوفي بيه.',
        description: [
          'حبّها تلات سنين. كلّمها مرة واحدة بس. وفي المرة دي سألها يتأكد من اسمها.',
          'وهو عنده سبعتاشر سنة، محمد حماد كتب قصيدة لبنت لسه ماكانتش موجودة، وختمها بوعد ماكانش من حقه أصلًا يوعد بيه: أُقسم إني هلاقيكي. بس ماكانش يعرف إنه هيغلط كام مرة الأول.',
          'السكوت اللي خسّره بنت المدرج. الجواز اللي افتكره حب. الخيانة اللي نهّته، والسنين اللي فضل فيها برضه. والليالي الطويلة اللي كان بيسأل فيها نفسه: هي الست اللي في قصايده كانت موجودة أصلًا برّه دماغه؟',
          'وبعدين واحدة غريبة كتبتله هي الأول. ومضت رسالتها بفراشة.',
          'مش هتلاقي في الكتاب ده قايمة شروط. هتلاقي مراية.',
        ],
        bullets: [
          'ليه الناس اللي بتقع في حبهم أوي غالبًا بيبقوا أسوأ حاجة ليك',
          'الكدبة اللي شخصيتك بتقولهالك كل ما تظهر علامة حمرا',
          'ليه الحب الهادي والثابت ممكن تحسه "ممل"، وليه الإحساس ده غلط',
          'إزاي تعرف الشخص بتاعك، حتى لو جه في شكل رسالة من حد غريب',
        ],
        closing: 'كانت موجودة طول الوقت. واللي ليك موجود برضه.',
        links: [
          { label: 'نسخة Kindle إلكترونية', href: BOOKS.iSwear.kindle.url, primary: true },
          { label: 'نسخة ورقية', href: BOOKS.iSwear.paperback.url, primary: false },
        ],
      },
      items: [
        {
          title: BOOKS.infj.title,
          desc: 'فهم أندر أنماط الشخصية بتعاطف وعمق.',
          alt: 'غلاف كتاب Unraveling the INFJ Enigma',
          cover: BOOKS.infj.cover,
          links: [{ label: 'شوفه على أمازون', href: BOOKS.infj.amazon }],
        },
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
      keywords:
        'Mohamed Amin Hammad, Dr. Hammad, Radiólogo, Radly, IA en radiología, tecnología médica, viajes, autor, INFJ, I Swear I\'ll Find You, lenguajes del amor, compatibilidad astrológica',
      ogImageAlt: 'Dr. Mohamed Amin Hammad - Radiólogo, Fundador y Explorador',
      schemaDescription:
        'Radiólogo consultor, fundador de Radly AI, viajero y autor',
    },
    pages: {
      home: {
        title: 'Dr. Mohamed Amin Hammad | Radiólogo consultor, fundador y autor',
        description: 'Radiólogo consultor egipcio y jefe de Radiología, fundador de Radly, autor y viajero.',
      },
      about: {
        title: 'Sobre mí | Dr. Mohamed Amin Hammad',
        description: 'Radiólogo, creador de software, viajero y autor INFJ: la historia detrás del trabajo.',
      },
      radly: {
        title: 'Radly, informes radiológicos con IA | Dr. Mohamed Amin Hammad',
        description: 'Radly es un asistente de IA que redacta las partes repetitivas de los informes radiológicos. Creado por un radiólogo para radiólogos.',
      },
      travel: {
        title: 'Passport Trails, escritura de viajes | Dr. Mohamed Amin Hammad',
        description: 'Escritura de viajes honesta en árabe y una app de planificación para viajeros egipcios y árabes.',
      },
      books: {
        title: "Libros: I Swear I'll Find You y más | Dr. Mohamed Amin Hammad",
        description: "Libros sobre personalidad, astrología y lenguajes del amor, incluido el nuevo I Swear I'll Find You.",
      },
      contact: {
        title: 'Contacto | Dr. Mohamed Amin Hammad',
        description: 'Escríbeme sobre consultas de radiología, colaboraciones con Radly, libros o viajes.',
      },
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      radly: 'Radly',
      travel: 'Viajes',
      books: 'Libros',
      contact: 'Contacto',
      menu: 'Menú',
      close: 'Cerrar',
      skip: 'Saltar al contenido',
      language: 'Idioma',
      tagline: 'Radiólogo · Escritor',
    },
    common: {
      appStore: 'App Store',
      googlePlay: 'Google Play',
      getOn: 'Disponible en',
      readArticle: 'Leer artículo',
      visitPassportTrails: 'Visitar PassportTrails.com',
      newTab: '(se abre en una pestaña nueva)',
    },
    footer: {
      bio:
        'Radiólogo, fundador, viajero y autor.\nEscribo sobre medicina, tecnología, viajes y los patrones silenciosos del corazón humano.',
      quickLinks: 'Enlaces rápidos',
      connect: 'Conectar',
      copyright: 'Todos los derechos reservados.',
    },
    home: {
      eyebrow: 'Radiólogo consultor · Jefe de Radiología',
      titleLead: 'Paso mis días viendo lo que',
      titleAccent: 'a otros se les escapa.',
      captionName: 'Dr. Mohamed Amin Hammad',
      captionRole: 'Jefe de Radiología',
      intro:
        'Soy el Dr. Mohamed Amin Hammad, radiólogo consultor egipcio y jefe de Radiología en un hospital privado. Creé Radly para devolverles tiempo a los radiólogos y, fuera de la sala de lectura, viajo y escribo sobre los patrones silenciosos del corazón humano.',
      primaryCta: 'Leer mi historia',
      secondaryCta: 'Ver Radly',
      portraitAlt: 'Retrato del Dr. Mohamed Amin Hammad',
      stats: [
        { value: 'Radiólogo', label: 'Consultor' },
        { value: 'Radly', label: 'Fundador' },
        { value: '2 libros', label: 'Autor' },
        { value: '12 países', label: 'Viajero' },
      ],
      worksEyebrow: 'Lo que hago',
      worksTitle: 'Más allá de la sala de lectura',
      works: [
        {
          page: 'radly',
          label: 'Medicina y software',
          title: 'Radly',
          desc: 'Un asistente de IA que redacta las partes repetitivas de los informes radiológicos, creado por un radiólogo para radiólogos.',
          cta: 'Descubrir Radly',
        },
        {
          page: 'books',
          label: 'Escritura',
          title: 'Libros',
          desc: 'Libros honestos sobre personalidad, astrología y lenguajes del amor, para quienes piensan demasiado y sienten demasiado.',
          cta: 'Ver los libros',
        },
        {
          page: 'travel',
          label: 'Viajes',
          title: 'Passport Trails',
          desc: 'Un blog y una app de viajes en árabe con consejos prácticos sobre visados, presupuestos e itinerarios.',
          cta: 'Leer sobre viajes',
        },
      ],
      newBook: 'Nuevo libro',
      getBook: 'Conseguir el libro',
      bookCta: 'Sobre el libro',
      contactTitle: 'Hablemos',
      contactCta: 'Contactar',
    },
    about: {
      title: 'Mi historia',
      subtitle: 'Sobre mí',
      imageAlt: 'Dr. Hammad en radiología',
      caption: 'Diagnóstico y dedicación',
      paragraphs: [
        'Soy el Dr. Mohamed Amin Hammad, radiólogo consultor egipcio, creador de software y viajero, y he aprendido que las cosas más importantes casi nunca aparecen en una imagen.',
        'De día, soy jefe de Radiología en un hospital privado. Después de escribir cientos de veces los mismos informes, creé Radly, un asistente de inteligencia artificial que se encarga de las partes repetitivas de los informes radiológicos, para que los médicos puedan volver a centrarse en lo que de verdad importa: pensar.',
        'Fuera del hospital, soy la voz detrás de Passport Trails, un blog y una aplicación de viajes en árabe que ayudan a los viajeros egipcios y árabes a orientarse entre visados, presupuestos e itinerarios, con consejos honestos y prácticos. No viajo para coleccionar sellos. Viajo para entender lo que un lugar le hace a mi clima interior.',
        'En el fondo, soy un INFJ con una fascinación de toda la vida por la psicología y la naturaleza de la personalidad humana: por qué amamos como amamos, por qué algunas conexiones simplemente funcionan, y por qué otras se derrumban por mucho que dos personas lo intenten. Esa curiosidad se convirtió en mis libros, escritos para lectores que piensan demasiado y sienten demasiado.',
      ],
    },
    radly: {
      eyebrow: 'Informes por voz',
      title: 'Radly',
      titleLead: 'Borradores de informes en la mitad de tiempo.',
      titleAccent: 'Tú dictas. Nosotros estructuramos. Tú firmas.',
      intro:
        'Radly capta tus hallazgos por voz, los estructura en informes profesionales y deja la firma en tus manos, donde debe estar.',
      primaryCta: 'Empieza gratis',
      secondaryCta: 'Cómo funciona',
      perks: ['Sin tarjeta de crédito', '5 informes gratis al mes'],
      getOnYourTerms: 'Usa Radly como prefieras',
      telegramSmall: 'Chatea con',
      telegramName: 'Telegram Bot',
      storyTitle: 'Por qué lo creé',
      story:
        'Después de escribir mi informe número mil de "no acute findings", tenía dos opciones: seguir quejándome o construir algo. Así nació Radly, un asistente de IA que se ocupa de las partes repetitivas de los informes radiológicos. No es perfecto, pero devuelve a los radiólogos tiempo para pensar en los casos que importan.',
      features: [
        'Flujos automatizados de informes',
        'Análisis impulsado por IA',
        'Creado por un radiólogo para radiólogos',
        'Disponible en iOS y Android',
      ],
      visit: 'Visitar Radly.app',
      imageAlt: 'Escritorio de un radiólogo con una tomografía en una pantalla y un informe de Radly en la otra',
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
      helperEyebrow: 'La app de Passport Trails',
      splashAlt: 'Pantalla de inicio de la app Passport Trails: un logo de montaña y sendero con la frase "Tu compañero de viaje"',
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
    },
    books: {
      title: 'Obras escritas',
      subtitle: 'Autor',
      intro: [
        'Siempre he sentido curiosidad por entender por qué las personas son como son. Como INFJ, pasé años intentando comprender mis propios patrones en el amor, hasta que me di cuenta de que otras personas se hacían las mismas preguntas. Así que escribí sobre ello, con honestidad, incluidas las partes en las que me equivoqué.',
        'Estos libros no son académicos. Son lo que me habría gustado que alguien me pusiera en las manos a los dieciocho: tipos de personalidad, astrología, lenguajes del amor y esos patrones silenciosos que repetimos sin darnos cuenta. Escritos para quienes piensan demasiado y sienten demasiado.',
      ],
      newTab: '(se abre en una pestaña nueva)',
      featured: {
        ...BOOKS.iSwear,
        eyebrow: 'Nuevo',
        alt: "Portada de I Swear I'll Find You, de Mohamed Hammad",
        tagline: 'Escribí esta promesa a los diecisiete años. Tardé veinte en cumplirla.',
        description: [
          'La quiso durante tres años. Habló con ella una sola vez. Y fue para pedirle que le confirmara su nombre.',
          'A los diecisiete, Mohamed Hammad escribió un poema para una chica que todavía no existía, y lo terminó con una promesa que no tenía ningún derecho a hacer: te juro que te encontraré. Lo que no sabía era cuántas veces se equivocaría antes.',
          'El silencio que le costó a la chica del aula. El matrimonio que confundió con amor. La traición que le puso fin, y los años que se quedó de todos modos. Y las largas noches preguntándose si la mujer de sus poemas había existido alguna vez fuera de su cabeza.',
          'Hasta que una desconocida le escribió primero. Firmó su carta con una mariposa.',
          'En este libro no vas a encontrar una lista de requisitos. Vas a encontrar un espejo.',
        ],
        bullets: [
          'Por qué las personas de las que te enamoras con más fuerza suelen ser las que peor te hacen',
          'La mentira que te cuenta tu personalidad cada vez que aparece una señal de alarma',
          'Por qué un amor tranquilo y estable puede parecer "aburrido", y por qué esa sensación se equivoca',
          'Cómo reconocer a tu persona, aunque llegue en forma de carta de alguien desconocido',
        ],
        closing: 'Ella siempre estuvo ahí. Tu persona también lo está.',
        links: [
          { label: 'eBook Kindle', href: BOOKS.iSwear.kindle.url, primary: true },
          { label: 'Tapa blanda', href: BOOKS.iSwear.paperback.url, primary: false },
        ],
      },
      items: [
        {
          title: BOOKS.infj.title,
          desc: 'Comprender el tipo de personalidad más raro con compasión y profundidad.',
          alt: 'Portada de Unraveling the INFJ Enigma',
          cover: BOOKS.infj.cover,
          links: [{ label: 'Ver en Amazon', href: BOOKS.infj.amazon }],
        },
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
