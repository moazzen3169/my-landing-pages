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
  isTrending?: boolean;
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
  id: string;
  name: string;
  country: string;
  established: string;
  tagline: string;
  logoText: string;
  productCount: number;
  featured?: boolean;
}

export const SOLEA_BRANDS: SneakerBrand[] = [
  { id: 'nike', name: 'NIKE', country: 'USA', established: '1964', tagline: 'Innovation and Performance', logoText: 'NIKE', productCount: 42, featured: true },
  { id: 'adidas', name: 'ADIDAS', country: 'Germany', established: '1949', tagline: 'Heritage & Contemporary Streetwear', logoText: 'ADIDAS', productCount: 38, featured: true },
  { id: 'new-balance', name: 'NEW BALANCE', country: 'USA', established: '1906', tagline: 'Craftsmanship & Everyday Luxury', logoText: 'NEW BALANCE', productCount: 29, featured: true },
  { id: 'asics', name: 'ASICS', country: 'Japan', established: '1949', tagline: 'Sound Mind, Sound Body', logoText: 'ASICS', productCount: 24, featured: true },
  { id: 'jordan', name: 'JORDAN', country: 'USA', established: '1984', tagline: 'Court Culture & Iconography', logoText: 'JORDAN', productCount: 21, featured: true },
  { id: 'on-running', name: 'ON RUNNING', country: 'Switzerland', established: '2010', tagline: 'Swiss Engineering & Cloud Cushioning', logoText: 'ON', productCount: 18, featured: true },
  { id: 'salomon', name: 'SALOMON', country: 'France', established: '1947', tagline: 'Gorpcore & Outdoor Performance', logoText: 'SALOMON', productCount: 16, featured: true },
  { id: 'puma', name: 'PUMA', country: 'Germany', established: '1948', tagline: 'Speed & Contemporary Culture', logoText: 'PUMA', productCount: 19, featured: true },
  { id: 'hoka', name: 'HOKA', country: 'France', established: '2009', tagline: 'Maximal Cushioning & Trail Running', logoText: 'HOKA', productCount: 15 },
  { id: 'converse', name: 'CONVERSE', country: 'USA', established: '1908', tagline: 'Classic Canvas & Counterculture', logoText: 'CONVERSE', productCount: 22 },
  { id: 'vans', name: 'VANS', country: 'USA', established: '1966', tagline: 'Off The Wall Skateboarding Heritage', logoText: 'VANS', productCount: 20 },
  { id: 'saucony', name: 'SAUCONY', country: 'USA', established: '1898', tagline: 'Technical Running Heritage', logoText: 'SAUCONY', productCount: 12 },
  { id: 'reebok', name: 'REEBOK', country: 'UK', established: '1958', tagline: 'Fitness & Retro Tennis Culture', logoText: 'REEBOK', productCount: 14 },
  { id: 'mizuno', name: 'MIZUNO', country: 'Japan', established: '1906', tagline: 'Japanese Technical Precision', logoText: 'MIZUNO', productCount: 10 },
  { id: 'autry', name: 'AUTRY', country: 'USA', established: '1982', tagline: 'Vintage Tennis Aesthetic', logoText: 'AUTRY', productCount: 8 },
];

export const SOLEA_CATEGORIES: SneakerCategory[] = [
  {
    id: 'running',
    titlePersian: 'دویدن و رانینگ',
    titleEnglish: 'RUNNING',
    descriptionPersian: 'طراحی شده برای حداکثر بازگشت انرژی، سبکی بی‌نظیر و حفاظت از مفاصل در مسافت‌های طولانی.',
    image: '/images/landings/solea-sneakers/ADISTAR_XLG_2.0_SCHOENEN_Grijs_KJ7895_00_plp_standard.png',
    count: 34,
  },
  {
    id: 'lifestyle',
    titlePersian: 'لایف‌استایل و شهری',
    titleEnglish: 'LIFESTYLE',
    descriptionPersian: 'تلفیقی از اصالت استریت‌ویر و راحتی تمام‌روز برای استایل‌های مدرن و روزمره.',
    image: '/images/landings/solea-sneakers/Handball_Spezial_Schoenen_Blauw_BD7633_00_plp_standard.png',
    count: 48,
  },
  {
    id: 'basketball',
    titlePersian: 'بسکتبال تخصصی',
    titleEnglish: 'BASKETBALL',
    descriptionPersian: 'پشتیبانی بی‌نقص از مچ، چسبندگی فوق‌العاده روی پارکت و کوشنینگ انفجاری.',
    image: '/images/landings/solea-sneakers/HOOPS_CLASSIC_Schoenen_Wit_KI1061_00_plp_standard.png',
    count: 22,
  },
  {
    id: 'training',
    titlePersian: 'تمرین و جیم',
    titleEnglish: 'TRAINING',
    descriptionPersian: 'پایداری بالا در حرکات عرضی، زیره تخت و محکم مناسب وزنه‌برداری و تمرینات پرفشار.',
    image: '/images/landings/solea-sneakers/Terrex_Anylander_Leather_Mid_Climaproof_Hikingschoenen_Groen_KH8877_00_plp_standard.png',
    count: 26,
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
    isTrending: true,
    badge: 'NEW',
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
    isTrending: true,
    badge: 'BESTSELLER',
    rating: 4.8,
    reviewCount: 89,
  },
  {
    id: 'solea-03',
    name: 'New Balance 1906R Tech Runner',
    brand: 'NEW BALANCE',
    slug: 'new-balance-1906r-tech-runner',
    category: 'running',
    gender: 'unisex',
    price: 21500000,
    colors: [
      { name: 'نقره‌ای سنگی', hex: '#8C8C84', image: '/images/landings/solea-sneakers/OZWEEGO_Schoenen_Grijs_EE6461_00_plp_standard.png' },
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    images: [
      '/images/landings/solea-sneakers/OZWEEGO_Schoenen_Grijs_EE6461_00_plp_standard.png',
    ],
    description: 'معماری آرکیو رترو-فیوچریستیک با بالشتک‌گذاری N-ergy و فناوری ضربه‌گیری ABZORB SBS در پاشنه.',
    specifications: {
      upper: 'مش صنعتی تنفس‌پذیر با روکش سنتزی لایه‌ای',
      cushioning: 'فناوری ترکیبی N-ergy و ABZORB SBS',
      outsole: 'لاستیک Ndurance با چسبندگی بالا',
      weight: '۳۵۵ گرم',
    },
    featured: true,
    isPopular: true,
    isNew: true,
    isTrending: true,
    badge: 'NEW',
    rating: 4.9,
    reviewCount: 58,
  },
  {
    id: 'solea-04',
    name: 'Adidas Handball Spezial Heritage',
    brand: 'ADIDAS',
    slug: 'adidas-handball-spezial-heritage',
    category: 'lifestyle',
    gender: 'women',
    price: 16800000,
    colors: [
      { name: 'آبی رویال', hex: '#1C3B6E', image: '/images/landings/solea-sneakers/Handball_Spezial_Schoenen_Blauw_BD7633_00_plp_standard.png' },
      { name: 'قهوه‌ای جیر', hex: '#5C4033', image: '/images/landings/solea-sneakers/HANDBALL_SPEZIAL_SCHOENEN_Bruin_KI2971_00_plp_standard.png' },
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
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
    isTrending: true,
    badge: 'TRENDING',
    rating: 4.9,
    reviewCount: 36,
  },
  {
    id: 'solea-05',
    name: 'Asics GEL-Kayano 14 Silver Metallic',
    brand: 'ASICS',
    slug: 'asics-gel-kayano-14-silver',
    category: 'running',
    gender: 'men',
    price: 23800000,
    compareAtPrice: 26000000,
    discountPercentage: 8,
    colors: [
      { name: 'نقره‌ای متالیک', hex: '#B8B8B0', image: '/images/landings/solea-sneakers/SL_72_RS_Schoenen_Blauw_IG2132_00_plp_standard.png' },
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    images: [
      '/images/landings/solea-sneakers/SL_72_RS_Schoenen_Blauw_IG2132_00_plp_standard.png',
    ],
    description: 'یکی از محبوب‌ترین اسنیکرهای رترو رانینگ جهان با ساختار GEL اختصاصی آسیکس برای جذب شوک مضاعف.',
    specifications: {
      upper: 'مش صنعتی سه لایه با لایه‌بندی متالیک',
      cushioning: 'کوشنینگ ژل پیشرفته در پنجه و پاشنه',
      outsole: 'سیستم TRUSSTIC برای ثبات گام برداشتن',
      weight: '۳۲۵ گرم',
    },
    featured: true,
    isPopular: true,
    isNew: true,
    isTrending: true,
    badge: 'NEW',
    rating: 5.0,
    reviewCount: 64,
  },
  {
    id: 'solea-06',
    name: 'Jordan 1 Retro Low OG White/Navy',
    brand: 'JORDAN',
    slug: 'jordan-1-retro-low-og',
    category: 'basketball',
    gender: 'men',
    price: 22900000,
    colors: [
      { name: 'سفید / سرمه‌ای', hex: '#1C2E4A', image: '/images/landings/solea-sneakers/HOOPS_CLASSIC_Schoenen_Wit_KI1061_00_plp_standard.png' },
    ],
    sizes: ['41', '42', '43', '44', '45', '46'],
    images: [
      '/images/landings/solea-sneakers/HOOPS_CLASSIC_Schoenen_Wit_KI1061_00_plp_standard.png',
    ],
    description: 'نماد جاودانه زمین بسکتبال و استریت‌ویر جهانی. رویه چرم اعلا با لایه هوای فشرده Air-Sole.',
    specifications: {
      upper: 'چرم فول گرین نرم و مقاوم',
      cushioning: 'واحد هوای پنهان Air-Sole',
      outsole: 'لاستیک شیاردار دوردوخت',
      weight: '۳۷۰ گرم',
    },
    featured: false,
    isPopular: true,
    isNew: true,
    isTrending: false,
    badge: 'BESTSELLER',
    rating: 4.8,
    reviewCount: 71,
  },
  {
    id: 'solea-07',
    name: 'Adidas BW Army Vintage Minimal',
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
    id: 'solea-08',
    name: 'On Cloudmonster 2 Cushion Max',
    brand: 'ON RUNNING',
    slug: 'on-cloudmonster-2-cushion-max',
    category: 'running',
    gender: 'women',
    price: 25800000,
    colors: [
      { name: 'سفید / لیمویی', hex: '#D4F53C', image: '/images/landings/solea-sneakers/Campus_00s_Schoenen_Wit_ID1435_00_plp_standard.png' },
    ],
    sizes: ['36', '37', '38', '39', '40'],
    images: [
      '/images/landings/solea-sneakers/Campus_00s_Schoenen_Wit_ID1435_00_plp_standard.png',
    ],
    description: 'بزرگ‌ترین عناصر CloudTec در تاریخ آن رانینگ. بالشتک‌گذاری فوق‌العاده برای نرم‌ترین فرود ممکن روی آسفالت.',
    specifications: {
      upper: 'مش بازیافتی ۱۰۰٪ با تنفس‌پذیری بالا',
      cushioning: 'فوم دوگانه Helion superfoam و صفحه Speedboard',
      outsole: 'لاستیک گریپ پیشرفته برای مسیرهای مرطوب',
      weight: '۲۹۵ گرم',
    },
    featured: true,
    isPopular: true,
    isNew: true,
    isTrending: true,
    badge: 'NEW',
    rating: 4.9,
    reviewCount: 47,
  },
  {
    id: 'solea-09',
    name: 'Salomon XT-6 Gore-Tex Technical',
    brand: 'SALOMON',
    slug: 'salomon-xt6-goretex',
    category: 'training',
    gender: 'unisex',
    price: 27900000,
    colors: [
      { name: 'زیتونی تیره', hex: '#3B4A3F', image: '/images/landings/solea-sneakers/Terrex_Anylander_Leather_Mid_Climaproof_Hikingschoenen_Groen_KH8877_00_plp_standard.png' },
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    images: [
      '/images/landings/solea-sneakers/Terrex_Anylander_Leather_Mid_Climaproof_Hikingschoenen_Groen_KH8877_00_plp_standard.png',
    ],
    description: 'شاهکار گورپ‌کور و اوت‌دور. غشای ePE Gore-Tex ضدآب با شاسی ACS برای ثبات بالا در شرایط دشوار.',
    specifications: {
      upper: 'پارچه نایلونی ضدسایش با لایه مقاوم Gore-Tex',
      cushioning: 'شاسی Agile Chassis System (ACS)',
      outsole: 'زیره Mud Contagrip با آج‌های عمیق',
      weight: '۳۶۵ گرم',
    },
    featured: true,
    isPopular: true,
    isNew: true,
    isLimited: true,
    isTrending: true,
    badge: 'LIMITED',
    rating: 5.0,
    reviewCount: 39,
  },
  {
    id: 'solea-10',
    name: 'Adidas Campus 00s Suede Forest',
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
    name: 'Adidas Handball Spezial Slate Drop',
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
    badge: 'LIMITED',
    rating: 4.9,
    reviewCount: 15,
  },
  {
    id: 'solea-12',
    name: 'Nike Dunk Low Retro Panda Edition',
    brand: 'NIKE',
    slug: 'nike-dunk-low-retro-panda',
    category: 'lifestyle',
    gender: 'unisex',
    price: 18900000,
    colors: [
      { name: 'مشکی / سفید', hex: '#111111', image: '/images/landings/solea-sneakers/Superstar_II_Schoenen_Zwart_JI0079_00_plp_standard.png' },
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    images: [
      '/images/landings/solea-sneakers/Superstar_II_Schoenen_Zwart_JI0079_00_plp_standard.png',
    ],
    description: 'ترکیب رنگی افسانه‌ای سیاه و سفید نایکی دانک. ساخته شده با چرم جلا داده شده برای استفاده همه‌روزه.',
    specifications: {
      upper: 'چرم مرغوب نرم با یقه پدگذاری شده',
      cushioning: 'کفی فوم نرم فشرده',
      outsole: 'لاستیک کلاسیک تنیس',
      weight: '۳۴۰ گرم',
    },
    featured: true,
    isPopular: true,
    isNew: false,
    isTrending: true,
    badge: 'BESTSELLER',
    rating: 4.8,
    reviewCount: 112,
  },
];

export const SOLEA_LIMITED_DROPS = [
  {
    id: 'drop-01',
    title: 'Salomon XT-6 Gore-Tex Slate',
    brand: 'SALOMON',
    price: 27900000,
    image: '/images/landings/solea-sneakers/Terrex_Anylander_Leather_Mid_Climaproof_Hikingschoenen_Groen_KH8877_00_plp_standard.png',
    tag: 'دراپ اختصاصی ۰۴',
    stockRemaining: 4,
    releaseDate: '۱۴۰۵/۰۸/۲۸',
  },
  {
    id: 'drop-02',
    title: 'Adidas Handball Spezial Slate Limited',
    brand: 'ADIDAS',
    price: 17200000,
    image: '/images/landings/solea-sneakers/Handball_Spezial_Schoenen_Grijs_IF7086_00_plp_standard.png',
    tag: 'تعداد محدود',
    stockRemaining: 3,
    releaseDate: '۱۴۰۵/۰九/۰۲',
  },
];
