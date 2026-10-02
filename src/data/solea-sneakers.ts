export interface SneakerColor {
  name: string;
  hex: string;
  image?: string;
}

export interface SneakerProduct {
  id: string;
  name: string;
  brand: string;
  slug: string;
  category: 'running' | 'basketball' | 'training' | 'lifestyle';
  gender: 'men' | 'women' | 'unisex';
  price: number;
  compareAtPrice?: number;
  discountPercentage?: number;
  colors: SneakerColor[];
  sizes: string[];
  images: string[];
  description: string;
  specifications: {
    upper: string;
    cushioning: string;
    outsole: string;
    weight?: string;
  };
  featured?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  isLimited?: boolean;
  badge?: string;
  rating: number;
  reviewCount: number;
}

export interface SneakerCategory {
  id: 'running' | 'basketball' | 'training' | 'lifestyle';
  titlePersian: string;
  titleEnglish: string;
  descriptionPersian: string;
  image: string;
  count: number;
}

export interface SneakerBrand {
  name: string;
  country: string;
  established: string;
}

export const SOLEA_BRANDS: SneakerBrand[] = [
  { name: 'NIKE', country: 'USA', established: '1964' },
  { name: 'ADIDAS', country: 'Germany', established: '1949' },
  { name: 'NEW BALANCE', country: 'USA', established: '1906' },
  { name: 'ASICS', country: 'Japan', established: '1949' },
  { name: 'JORDAN', country: 'USA', established: '1984' },
  { name: 'PUMA', country: 'Germany', established: '1948' },
  { name: 'ON RUNNING', country: 'Switzerland', established: '2010' },
];

export const SOLEA_CATEGORIES: SneakerCategory[] = [
  {
    id: 'running',
    titlePersian: 'دویدن و رانینگ',
    titleEnglish: 'RUNNING',
    descriptionPersian: 'طراحی شده برای حداکثر بازگشت انرژی، سبکی بی‌نظیر و حفاظت از مفاصل در مسافت‌های طولانی.',
    image: '/images/landings/solea-sneakers/ADISTAR_XLG_2.0_SCHOENEN_Grijs_KJ7895_00_plp_standard.png',
    count: 24,
  },
  {
    id: 'lifestyle',
    titlePersian: 'لایف‌استایل و شهری',
    titleEnglish: 'LIFESTYLE',
    descriptionPersian: 'تلفیقی از اصالت استریت‌ویر و راحتی تمام‌روز برای استایل‌های مدرن و روزمره.',
    image: '/images/landings/solea-sneakers/Handball_Spezial_Schoenen_Blauw_BD7633_00_plp_standard.png',
    count: 38,
  },
  {
    id: 'basketball',
    titlePersian: 'بسکتبال تخصصی',
    titleEnglish: 'BASKETBALL',
    descriptionPersian: 'پشتیبانی بی‌نقص از مچ، چسبندگی فوق‌العاده روی پارکت و کوشنینگ انفجاری.',
    image: '/images/landings/solea-sneakers/HOOPS_CLASSIC_Schoenen_Wit_KI1061_00_plp_standard.png',
    count: 16,
  },
  {
    id: 'training',
    titlePersian: 'تمرین و جیم',
    titleEnglish: 'TRAINING',
    descriptionPersian: 'پایداری بالا در حرکات عرضی، زیره تخت و محکم مناسب وزنه‌برداری و تمرینات پرفشار.',
    image: '/images/landings/solea-sneakers/Terrex_Anylander_Leather_Mid_Climaproof_Hikingschoenen_Groen_KH8877_00_plp_standard.png',
    count: 19,
  },
];

export const SOLEA_PRODUCTS: SneakerProduct[] = [
  {
    id: 'solea-01',
    name: 'Adidas Adistar XLG 2.0 Luxe',
    brand: 'ADIDAS',
    slug: 'adidas-adistar-xlg-2-luxe',
    category: 'lifestyle',
    gender: 'unisex',
    price: 19900000,
    compareAtPrice: 24500000,
    discountPercentage: 18,
    colors: [
      { name: 'خاکستری مدرن', hex: '#6B6B68', image: '/images/landings/solea-sneakers/ADISTAR_XLG_2.0_SCHOENEN_Grijs_KJ7895_00_plp_standard.png' },
      { name: 'دودی اسپرت', hex: '#3A3A37', image: '/images/landings/solea-sneakers/ADISTAR_XLG_2.0_SCHOENEN_Grijs_KZ9157_00_plp_standard.png' },
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    images: [
      '/images/landings/solea-sneakers/ADISTAR_XLG_2.0_SCHOENEN_Grijs_KJ7895_00_plp_standard.png',
      '/images/landings/solea-sneakers/ADISTAR_XLG_2.0_SCHOENEN_Grijs_KZ9157_00_plp_standard.png',
    ],
    description: 'نسل جدید کوشنینگ حجیم با ساختار آرکیتکچرال. طراحی لوکس و آینده‌نگرانه برای راحتی بی‌وقفه از صبح تا شب.',
    specifications: {
      upper: 'مش مهندسی‌شده با لایه‌دوزی هشت‌بعدی',
      cushioning: 'فناوری دوگانه Adiprene Tubed Unit',
      outsole: 'لاستیک بازیافتی با گریپ چندجهته',
      weight: '۳۴۰ گرم',
    },
    featured: true,
    isPopular: true,
    isNew: true,
    badge: 'پیشنهاد ویژه',
    rating: 4.9,
    reviewCount: 42,
  },
  {
    id: 'solea-02',
    name: 'Adidas Samba OG Core Leather',
    brand: 'ADIDAS',
    slug: 'adidas-samba-og-core-leather',
    category: 'lifestyle',
    gender: 'unisex',
    price: 14800000,
    compareAtPrice: 17200000,
    discountPercentage: 14,
    colors: [
      { name: 'قهوه‌ای چرمی / استخوانی', hex: '#4A3B32', image: '/images/landings/solea-sneakers/Samba_OG_Schoenen_Bruin_ID1481_00_plp_standard.png' },
      { name: 'سفید کلاسیک', hex: '#FAFAF7', image: '/images/landings/solea-sneakers/Samba_LT_Schoenen_Wit_JS3931_00_plp_standard.png' },
    ],
    sizes: ['37', '38', '39', '40', '41', '42', '43'],
    images: [
      '/images/landings/solea-sneakers/Samba_OG_Schoenen_Bruin_ID1481_00_plp_standard.png',
      '/images/landings/solea-sneakers/Samba_LT_Schoenen_Wit_JS3931_00_plp_standard.png',
    ],
    description: 'اسنیکر آئیکونیک کلاسیک با رویه چرم طبیعی و جیر طبیعی در قسمت پنجه. انتخابی بی‌زمان برای استایل‌های مدرن مینی‌مال.',
    specifications: {
      upper: 'چرم فول‌گرین طبیعی و جیر لوکس',
      cushioning: 'کفی آناتومیک OrthoLite',
      outsole: 'لاستیک طبیعی Gum Sole',
      weight: '۳۱۰ گرم',
    },
    featured: true,
    isPopular: true,
    isNew: false,
    badge: 'پرفروش‌ترین',
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: 'solea-03',
    name: 'Adidas Handball Spezial Heritage',
    brand: 'ADIDAS',
    slug: 'adidas-handball-spezial-heritage',
    category: 'lifestyle',
    gender: 'unisex',
    price: 16800000,
    colors: [
      { name: 'آبی رویال', hex: '#1C3B6E', image: '/images/landings/solea-sneakers/Handball_Spezial_Schoenen_Blauw_BD7633_00_plp_standard.png' },
      { name: 'قهوه‌ای جیر', hex: '#5C4033', image: '/images/landings/solea-sneakers/HANDBALL_SPEZIAL_SCHOENEN_Bruin_KI2971_00_plp_standard.png' },
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    images: [
      '/images/landings/solea-sneakers/Handball_Spezial_Schoenen_Blauw_BD7633_00_plp_standard.png',
      '/images/landings/solea-sneakers/HANDBALL_SPEZIAL_SCHOENEN_Bruin_KI2971_00_plp_standard.png',
    ],
    description: 'تلفیق نوآورانه اصالت دهه ۷۰ با زیبایی‌شناسی خیابانی. زیره صمغی کلاسیک با رویه جیر پرزی لوکس.',
    specifications: {
      upper: 'جیر طبیعی پرزی با ۳ خط چرمی سفید',
      cushioning: 'کفی ارگونومیک کلاسیک',
      outsole: 'الگوی گریپ سالنی Gum Sole',
      weight: '۳۳۰ گرم',
    },
    featured: true,
    isPopular: true,
    isNew: true,
    badge: 'ترند روز',
    rating: 4.9,
    reviewCount: 36,
  },
  {
    id: 'solea-04',
    name: 'Adidas Ozweego Futuristic Pro',
    brand: 'ADIDAS',
    slug: 'adidas-ozweego-futuristic-pro',
    category: 'running',
    gender: 'men',
    price: 22900000,
    compareAtPrice: 25500000,
    discountPercentage: 10,
    colors: [
      { name: 'خاکستری متالیک', hex: '#8C8C84', image: '/images/landings/solea-sneakers/OZWEEGO_Schoenen_Grijs_EE6461_00_plp_standard.png' },
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    images: [
      '/images/landings/solea-sneakers/OZWEEGO_Schoenen_Grijs_EE6461_00_plp_standard.png',
    ],
    description: 'تلفیق فناوری دهه ۹۰ با خطوط آینده‌نگرانه. ضربه‌گیری فوق‌العاده با فناوری Adiprene+ در پاشنه و پنجه.',
    specifications: {
      upper: 'مش صنعتی با پنجه چرمی و تیوب شفاف',
      cushioning: 'Adiprene+ و EVA فشرده',
      outsole: 'لاستیک ضدسایش با لایه‌بندی مشبک',
      weight: '۳۵۰ گرم',
    },
    featured: true,
    isPopular: false,
    isNew: true,
    badge: 'تخصصی دویدن',
    rating: 5.0,
    reviewCount: 28,
  },
  {
    id: 'solea-05',
    name: 'Adidas Hoops Classic Court',
    brand: 'ADIDAS',
    slug: 'adidas-hoops-classic-court',
    category: 'basketball',
    gender: 'men',
    price: 15500000,
    colors: [
      { name: 'سفید استخوانی / مشکی', hex: '#FAFAF7', image: '/images/landings/solea-sneakers/HOOPS_CLASSIC_Schoenen_Wit_KI1061_00_plp_standard.png' },
    ],
    sizes: ['41', '42', '43', '44', '45', '46'],
    images: [
      '/images/landings/solea-sneakers/HOOPS_CLASSIC_Schoenen_Wit_KI1061_00_plp_standard.png',
    ],
    description: 'الهام گرفته از تاریخچه بسکتبال. قفل‌شدگی عالی مچ پا با رویه چرم مصنوعی مقاوم و زیره فشرده.',
    specifications: {
      upper: 'چرم سنتزی با یقه پدگذاری شده',
      cushioning: 'کفی EVA فشرده با نرمی بالا',
      outsole: 'گریپ چندجهته سالنی',
      weight: '۳۸۵ گرم',
    },
    featured: false,
    isPopular: true,
    isNew: true,
    badge: 'بسکتبال حرفه‌ای',
    rating: 4.8,
    reviewCount: 19,
  },
  {
    id: 'solea-06',
    name: 'Adidas BW Army Vintage',
    brand: 'ADIDAS',
    slug: 'adidas-bw-army-vintage',
    category: 'lifestyle',
    gender: 'unisex',
    price: 17900000,
    compareAtPrice: 19500000,
    discountPercentage: 8,
    colors: [
      { name: 'سفید خالص', hex: '#FAFAF7', image: '/images/landings/solea-sneakers/BW_ARMY_SCHOENEN_Wit_KK2801_00_plp_standard.png' },
      { name: 'مشکی مات', hex: '#111111', image: '/images/landings/solea-sneakers/BW_ARMY_SCHOENEN_Zwart_KK2802_00_plp_standard.png' },
    ],
    sizes: ['38', '39', '40', '41', '42', '43'],
    images: [
      '/images/landings/solea-sneakers/BW_ARMY_SCHOENEN_Wit_KK2801_00_plp_standard.png',
      '/images/landings/solea-sneakers/BW_ARMY_SCHOENEN_Zwart_KK2802_00_plp_standard.png',
    ],
    description: 'بازگشت آئیکون مینیمالیستی دهه ۷۰ ارتش آلمان. رویه چرم سفید بسیار نرم با جزئیات جیر استخوانی.',
    specifications: {
      upper: 'چرم نرم طبیعی با قطعات جیر پنجه',
      cushioning: 'کفی نرم با آستر چرمی',
      outsole: 'زیره صمغی مینی‌مال Gum Sole',
      weight: '۳۲۰ گرم',
    },
    featured: false,
    isPopular: true,
    isNew: false,
    rating: 4.7,
    reviewCount: 31,
  },
  {
    id: 'solea-07',
    name: 'Adidas SL 72 RS Heritage',
    brand: 'ADIDAS',
    slug: 'adidas-sl-72-rs-heritage',
    category: 'lifestyle',
    gender: 'unisex',
    price: 16500000,
    colors: [
      { name: 'آبی بافت / سفید', hex: '#1F3A60', image: '/images/landings/solea-sneakers/SL_72_RS_Schoenen_Blauw_IG2132_00_plp_standard.png' },
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    images: [
      '/images/landings/solea-sneakers/SL_72_RS_Schoenen_Blauw_IG2132_00_plp_standard.png',
    ],
    description: 'اسنیکر افسانه‌ای المپیک ۱۹۷۲ مونیخ. سبک، تنفس‌پذیر با زیره عاج‌دار نوستالژیک و استایل خیابانی جذاب.',
    specifications: {
      upper: 'نایلون سبُک با روکش جیر طبیعی',
      cushioning: 'میاندوز EVA دو لایه',
      outsole: 'زیره لاستیکی دندانه‌دار رترو',
      weight: '۲۷۰ گرم',
    },
    featured: true,
    isPopular: true,
    isNew: true,
    badge: 'محبوب استایل خیابانی',
    rating: 4.9,
    reviewCount: 54,
  },
  {
    id: 'solea-08',
    name: 'Adidas Superstar II Black Edition',
    brand: 'ADIDAS',
    slug: 'adidas-superstar-ii-black',
    category: 'lifestyle',
    gender: 'unisex',
    price: 15800000,
    compareAtPrice: 18000000,
    discountPercentage: 12,
    colors: [
      { name: 'مشکی کربن', hex: '#111111', image: '/images/landings/solea-sneakers/Superstar_II_Schoenen_Zwart_JI0079_00_plp_standard.png' },
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    images: [
      '/images/landings/solea-sneakers/Superstar_II_Schoenen_Zwart_JI0079_00_plp_standard.png',
    ],
    description: 'طراحی کلاسیک صدف‌شکل با رویه چرم مشکی یکدست. یکی از شناخته‌شده‌ترین و بادوام‌ترین اسنیکرهای تاریخ.',
    specifications: {
      upper: 'چرم طبیعی با پنجه صدف‌شکل لاستیکی',
      cushioning: 'کفی نرم با پوشش پارچه‌ای',
      outsole: 'زیره لاستیکی دوخته شده',
      weight: '۳۸۰ گرم',
    },
    featured: false,
    isPopular: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 67,
  },
  {
    id: 'solea-09',
    name: 'Adidas Grand Court Base 00s',
    brand: 'ADIDAS',
    slug: 'adidas-grand-court-base-00s',
    category: 'training',
    gender: 'women',
    price: 13900000,
    colors: [
      { name: 'سبز زیتونی / سفید', hex: '#3B4A3F', image: '/images/landings/solea-sneakers/Grand_Court_Base_00s_Schoenen_Groen_IH1669_00_plp_standard.png' },
    ],
    sizes: ['36', '37', '38', '39', '40'],
    images: [
      '/images/landings/solea-sneakers/Grand_Court_Base_00s_Schoenen_Groen_IH1669_00_plp_standard.png',
    ],
    description: 'طراحی تنیس کلاسیک با زیره ضخیم‌تر سبک دهه ۲۰۰۰. مناسب برای استفاده طولانی روزمره و استایل‌های اسپرت.',
    specifications: {
      upper: 'چرم مصنوعی باکیفیت و تنفس‌پذیر',
      cushioning: 'کفی Cloudfoam بسیار نرم',
      outsole: 'زیره لاستیکی ضد لغزش',
      weight: '۳۱۰ گرم',
    },
    featured: false,
    isPopular: false,
    isNew: false,
    rating: 4.7,
    reviewCount: 48,
  },
  {
    id: 'solea-10',
    name: 'Adidas Campus 00s Forest',
    brand: 'ADIDAS',
    slug: 'adidas-campus-00s-forest',
    category: 'lifestyle',
    gender: 'unisex',
    price: 16900000,
    colors: [
      { name: 'سبز جنگلی', hex: '#2A4030', image: '/images/landings/solea-sneakers/Campus_00s_Schoenen_Groen_H03472_00_plp_standard.png' },
      { name: 'سفید استخوانی', hex: '#FAFAF7', image: '/images/landings/solea-sneakers/Campus_00s_Schoenen_Wit_ID1435_00_plp_standard.png' },
    ],
    sizes: ['38', '39', '40', '41', '42', '43'],
    images: [
      '/images/landings/solea-sneakers/Campus_00s_Schoenen_Groen_H03472_00_plp_standard.png',
      '/images/landings/solea-sneakers/Campus_00s_Schoenen_Wit_ID1435_00_plp_standard.png',
    ],
    description: 'الهام‌گرفته از فرهنگ اسکیتی دهه ۲۰۰۰. زبانه حجیم، بندهای پهن و رویه جیر پرحجم که ظاهری جسورانه به استایل شما می‌بخشد.',
    specifications: {
      upper: 'جیر طبیعی ضخیم با ۳ خط آیکونیک چرمی',
      cushioning: 'زبانه و یقه پدگذاری‌شده مضاعف',
      outsole: 'زیره لاستیکی دوردوخت',
      weight: '۳۷۰ گرم',
    },
    featured: false,
    isPopular: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 23,
  },
  {
    id: 'solea-11',
    name: 'Adidas Handball Spezial Slate',
    brand: 'ADIDAS',
    slug: 'adidas-handball-spezial-slate',
    category: 'lifestyle',
    gender: 'unisex',
    price: 17200000,
    colors: [
      { name: 'خاکستری سنگی', hex: '#777777', image: '/images/landings/solea-sneakers/Handball_Spezial_Schoenen_Grijs_IF7086_00_plp_standard.png' },
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    images: [
      '/images/landings/solea-sneakers/Handball_Spezial_Schoenen_Grijs_IF7086_00_plp_standard.png',
    ],
    description: 'ترکیب رنگی انحصاری و محدود از سری ماندگار هاندبال اسپشیال. رویه جیر اعلا با زیره شفاف صمغی.',
    specifications: {
      upper: 'جیر طبیعی بسیار باکیفیت',
      cushioning: 'واحد هوای داخلی و کفی ارگونومیک',
      outsole: 'زیره Gum Sole صمغی',
      weight: '۳۳۵ گرم',
    },
    featured: true,
    isPopular: false,
    isNew: true,
    isLimited: true,
    badge: 'دراپ محدود',
    rating: 4.9,
    reviewCount: 15,
  },
  {
    id: 'solea-12',
    name: 'Adidas Terrex Anylander Mid',
    brand: 'ADIDAS',
    slug: 'adidas-terrex-anylander-mid',
    category: 'training',
    gender: 'unisex',
    price: 24900000,
    colors: [
      { name: 'زیتونی خاکی', hex: '#4B5320', image: '/images/landings/solea-sneakers/Terrex_Anylander_Leather_Mid_Climaproof_Hikingschoenen_Groen_KH8877_00_plp_standard.png' },
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    images: [
      '/images/landings/solea-sneakers/Terrex_Anylander_Leather_Mid_Climaproof_Hikingschoenen_Groen_KH8877_00_plp_standard.png',
    ],
    description: 'کفش‌های نیم‌بوت کوهنوردی و هایکینگ با رویه چرم مقاوم و لایه مقاوم در برابر نفوذ آب Climaproof.',
    specifications: {
      upper: 'چرم طبیعی با پوشش محافظ ضدآب',
      cushioning: 'فوم EVA لایه‌ای محافظ پاشنه',
      outsole: 'زیره Traxion با چسبندگی فوق‌العاده روی سنگ و خاک',
      weight: '۴۵۰ گرم',
    },
    featured: true,
    isPopular: true,
    isNew: true,
    badge: 'تخصصی طبیعت‌گردی',
    rating: 5.0,
    reviewCount: 33,
  },
];

export const SOLEA_LIMITED_DROPS = [
  {
    id: 'drop-01',
    title: 'Adidas SL 72 RS Heritage Edition',
    brand: 'ADIDAS',
    price: 16500000,
    image: '/images/landings/solea-sneakers/man.png',
    tag: 'دراپ شماره ۰۷',
    stockRemaining: 6,
    releaseDate: '۱۴۰۵/۰۸/۲۵',
  },
  {
    id: 'drop-02',
    title: 'Adidas Adistar XLG 2.0 Studio Limited',
    brand: 'ADIDAS',
    price: 19900000,
    image: '/images/landings/solea-sneakers/woman.png',
    tag: 'کالکشن اختصاصی',
    stockRemaining: 3,
    releaseDate: '۱۴۰۵/۰۹/۰۱',
  },
];
