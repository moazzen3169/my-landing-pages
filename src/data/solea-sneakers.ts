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
    image: '/images/landings/solea-sneakers/cat-running.svg',
    count: 24,
  },
  {
    id: 'lifestyle',
    titlePersian: 'لایف‌استایل و شهری',
    titleEnglish: 'LIFESTYLE',
    descriptionPersian: 'تلفیقی از اصالت استریت‌ویر و راحتی تمام‌روز برای استایل‌های مدرن و روزمره.',
    image: '/images/landings/solea-sneakers/cat-lifestyle.svg',
    count: 38,
  },
  {
    id: 'basketball',
    titlePersian: 'بسکتبال تخصصی',
    titleEnglish: 'BASKETBALL',
    descriptionPersian: 'پشتیبانی بی‌نقص از مچ، چسبندگی فوق‌العاده روی پارکت و کوشنینگ انفجاری.',
    image: '/images/landings/solea-sneakers/cat-basketball.svg',
    count: 16,
  },
  {
    id: 'training',
    titlePersian: 'تمرین و جیم',
    titleEnglish: 'TRAINING',
    descriptionPersian: 'پایداری بالا در حرکات عرضی، زیره تخت و محکم مناسب وزنه‌برداری و تمرینات پرفشار.',
    image: '/images/landings/solea-sneakers/cat-training.svg',
    count: 19,
  },
];

export const SOLEA_PRODUCTS: SneakerProduct[] = [
  {
    id: 'solea-01',
    name: 'Nike Air Max Dn Luxe',
    brand: 'NIKE',
    slug: 'nike-air-max-dn-luxe',
    category: 'lifestyle',
    gender: 'unisex',
    price: 19900000,
    compareAtPrice: 24500000,
    discountPercentage: 18,
    colors: [
      { name: 'مشکی کربن', hex: '#111111', image: '/images/landings/solea-sneakers/hero-sneaker.svg' },
      { name: 'خاکستری سنگی', hex: '#6B6B68', image: '/images/landings/solea-sneakers/sneaker-nike-dn.svg' },
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    images: [
      '/images/landings/solea-sneakers/hero-sneaker.svg',
      '/images/landings/solea-sneakers/sneaker-nike-dn.svg',
    ],
    description: 'نسل جدید کوشنینگ Dynamic Air با ساختار چهار محفظه‌ای تیوبلار. طراحی آینده‌نگرانه و آرکیتکچرال برای راحتی بی‌وقفه از صبح تا شب.',
    specifications: {
      upper: 'مش مهندسی‌شده با لایه‌دوزی هشت‌بعدی',
      cushioning: 'فناوری دوگانه Dynamic Air Tubed Unit',
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
    name: 'Adidas Samba OG Core',
    brand: 'ADIDAS',
    slug: 'adidas-samba-og-core',
    category: 'lifestyle',
    gender: 'unisex',
    price: 14800000,
    compareAtPrice: 17200000,
    discountPercentage: 14,
    colors: [
      { name: 'سفید استخوانی / مشکی', hex: '#FAFAF7', image: '/images/landings/solea-sneakers/sneaker-samba.svg' },
      { name: 'مشکی مات', hex: '#111111', image: '/images/landings/solea-sneakers/sneaker-campus.svg' },
    ],
    sizes: ['37', '38', '39', '40', '41', '42', '43'],
    images: [
      '/images/landings/solea-sneakers/sneaker-samba.svg',
      '/images/landings/solea-sneakers/sneaker-campus.svg',
    ],
    description: 'اسنیکر آئیکونیک کلاسیک با رویه چرم طبیعی ایتالیایی و جیر جلبکی در قسمت پنجه. انتخابی بی‌زمان برای استایل‌های مدرن مینی‌مال.',
    specifications: {
      upper: 'چرم فول‌گرین طبیعی و جیر جلبکی',
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
    name: 'New Balance 9060 Drift',
    brand: 'NEW BALANCE',
    slug: 'new-balance-9060-drift',
    category: 'lifestyle',
    gender: 'unisex',
    price: 22800000,
    colors: [
      { name: 'خاکستری زیتونی', hex: '#8C8C84', image: '/images/landings/solea-sneakers/sneaker-nb9060.svg' },
      { name: 'کرم شنزار', hex: '#D0C8B8', image: '/images/landings/solea-sneakers/sneaker-nb530.svg' },
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    images: [
      '/images/landings/solea-sneakers/sneaker-nb9060.svg',
      '/images/landings/solea-sneakers/sneaker-nb530.svg',
    ],
    description: 'تلفیق نوآورانه سری کلاسیک ۹۹۰ با زیبایی‌شناسی آینده‌نگرانه هزاره جدید. زیره حجم‌دار و مجسمه‌ای با راحتی فوق‌العاده ABZORB.',
    specifications: {
      upper: 'جیر طبیعی خوک با مش نوری متراکم',
      cushioning: 'ترکیب ABZORB و SBS فوم پاشنه',
      outsole: 'الگوی گریپ الماسه‌ای فشرده',
      weight: '۴۱۰ گرم',
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
    name: 'Asics Gel-Kayano 30 Pro',
    brand: 'ASICS',
    slug: 'asics-gel-kayano-30-pro',
    category: 'running',
    gender: 'men',
    price: 26900000,
    compareAtPrice: 29500000,
    discountPercentage: 9,
    colors: [
      { name: 'سرمه‌ای اقیانوسی', hex: '#1C2536', image: '/images/landings/solea-sneakers/sneaker-kayano.svg' },
      { name: 'سفید خالص', hex: '#FAFAF7', image: '/images/landings/solea-sneakers/sneaker-ultraboost.svg' },
    ],
    sizes: [ '40', '41', '42', '43', '44', '45'],
    images: [
      '/images/landings/solea-sneakers/sneaker-kayano.svg',
      '/images/landings/solea-sneakers/sneaker-ultraboost.svg',
    ],
    description: 'قله پایداری در کفش‌های دویدن. سیستم ۴D GUIDANCE SYSTEM اصلاح بیومکانیک گام برداشتن را با نرمی فوم FF BLAST PLUS ECO تضمین می‌کند.',
    specifications: {
      upper: 'استرچ مش تنفس‌پذیر پریمیم',
      cushioning: 'PureGEL ارتقا یافته با FF BLAST PLUS',
      outsole: 'لاستیک AHARPLUS ضدسایش',
      weight: '۳۰۵ گرم',
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
    name: 'Jordan Luka 2 Next Gen',
    brand: 'JORDAN',
    slug: 'jordan-luka-2-next-gen',
    category: 'basketball',
    gender: 'men',
    price: 21500000,
    colors: [
      { name: 'مشکی مات / طلایی', hex: '#151515', image: '/images/landings/solea-sneakers/sneaker-jordan.svg' },
    ],
    sizes: ['41', '42', '43', '44', '45', '46'],
    images: [
      '/images/landings/solea-sneakers/sneaker-jordan.svg',
    ],
    description: 'طراحی شده برای تغییر جهت‌های ناگهانی و استپ‌بک‌های حرفه‌ای لوکا دونچیچ. قفل‌شدگی بی‌نقص مچ پا با فوم Formula 23.',
    specifications: {
      upper: 'قفلی چندلایه‌ای ترکیبی با ساپورت جانبی TPU',
      cushioning: 'فوم اختصاصی Formula 23 با IsoPlate',
      outsole: 'گریپ شعاعی سالنی با تراکم متغیر',
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
    name: 'Puma Palermo Terrace',
    brand: 'PUMA',
    slug: 'puma-palermo-terrace',
    category: 'lifestyle',
    gender: 'women',
    price: 13900000,
    compareAtPrice: 16000000,
    discountPercentage: 13,
    colors: [
      { name: 'قهوه‌ای چرمی', hex: '#4A3B32', image: '/images/landings/solea-sneakers/sneaker-palermo.svg' },
    ],
    sizes: ['36', '37', '38', '39', '40'],
    images: [
      '/images/landings/solea-sneakers/sneaker-palermo.svg',
    ],
    description: 'بازگشت آئیکون دهه ۸۰ میلادی از استادیوم‌های ایتالیا به خیابان‌های مدرن. ترکیب رویه جیر لوکس و لوگوی برجسته طلایی.',
    specifications: {
      upper: 'جیر طبیعی با روکش چرمی بژ',
      cushioning: 'کفی نرم با آستر پارچه‌ای تنفس‌پذیر',
      outsole: 'زیره صمغی کلاسیک Gum Sole',
      weight: '۲۸۰ گرم',
    },
    featured: false,
    isPopular: true,
    isNew: false,
    rating: 4.7,
    reviewCount: 31,
  },
  {
    id: 'solea-07',
    name: 'Nike Zoom Vomero 5 Metallic',
    brand: 'NIKE',
    slug: 'nike-zoom-vomero-5-metallic',
    category: 'running',
    gender: 'unisex',
    price: 23500000,
    colors: [
      { name: 'نقره‌ای متالیک / دودی', hex: '#8C8C84', image: '/images/landings/solea-sneakers/sneaker-vomero.svg' },
    ],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    images: [
      '/images/landings/solea-sneakers/sneaker-vomero.svg',
    ],
    description: 'تلفیق پیچیده لایه‌های مش، جیر مصنوعی و قفسه پلاستیکی پاشنه. پاسخگویی بالا به لطف کوشنینگ دوگانه Zoom Air.',
    specifications: {
      upper: 'مش متراکم ترکیبی با پانل‌های چرم مصنوعی',
      cushioning: 'کوشنینگ پاشنه و پنجه Zoom Air',
      outsole: 'زیره لاستیکی BRS 1000',
      weight: '۳۳۰ گرم',
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
    name: 'Adidas Ultraboost Light',
    brand: 'ADIDAS',
    slug: 'adidas-ultraboost-light',
    category: 'running',
    gender: 'unisex',
    price: 25800000,
    compareAtPrice: 28900000,
    discountPercentage: 10,
    colors: [
      { name: 'مشکی کربن', hex: '#181818', image: '/images/landings/solea-sneakers/sneaker-ultraboost.svg' },
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    images: [
      '/images/landings/solea-sneakers/sneaker-ultraboost.svg',
    ],
    description: 'سبک‌ترین نسخه اولترابوست تاریخ با ۳۰٪ وزن کمتر در ماده Light BOOST. رویه بافته‌شده Primeknit+ برای انطباق کاملاً جفت پا.',
    specifications: {
      upper: 'بافت تنفس‌پذیر Primeknit+ با الیاف بازیافتی',
      cushioning: 'ماده انقلابی Light BOOST',
      outsole: 'لاستیک Continental Better Rubber',
      weight: '۲۹۰ گرم',
    },
    featured: false,
    isPopular: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 67,
  },
  {
    id: 'solea-09',
    name: 'New Balance 530 Heritage',
    brand: 'NEW BALANCE',
    slug: 'new-balance-530-heritage',
    category: 'training',
    gender: 'women',
    price: 16900000,
    colors: [
      { name: 'سفید استخوانی / نقره‌ای', hex: '#E2E2DC', image: '/images/landings/solea-sneakers/sneaker-nb530.svg' },
    ],
    sizes: ['36', '37', '38', '39', '40'],
    images: [
      '/images/landings/solea-sneakers/sneaker-nb530.svg',
    ],
    description: 'بازسازی دقیق کفش رانینگ دهه ۹۰ با لایه‌گذاری ABZORB. فوق‌العاده سبک، تنفس‌پذیر و مناسب پیاده‌روی و تمرینات روزمره.',
    specifications: {
      upper: 'مش بافته درشت با روکش مصنوعی متالیک',
      cushioning: 'میاندوز جذب ضربه ABZORB',
      outsole: 'لاستیک ضد لغزش شهری',
      weight: '۲۹۵ گرم',
    },
    featured: false,
    isPopular: false,
    isNew: false,
    rating: 4.7,
    reviewCount: 48,
  },
  {
    id: 'solea-10',
    name: 'Adidas Campus 00s Charcoal',
    brand: 'ADIDAS',
    slug: 'adidas-campus-00s-charcoal',
    category: 'lifestyle',
    gender: 'unisex',
    price: 15900000,
    colors: [
      { name: 'زغالی سیر', hex: '#2A2A2A', image: '/images/landings/solea-sneakers/sneaker-campus.svg' },
    ],
    sizes: ['38', '39', '40', '41', '42', '43'],
    images: [
      '/images/landings/solea-sneakers/sneaker-campus.svg',
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
    name: 'Nike Air Max 1 86 OG Big Bubble',
    brand: 'NIKE',
    slug: 'nike-air-max-1-86-og',
    category: 'lifestyle',
    gender: 'unisex',
    price: 24900000,
    colors: [
      { name: 'قرمز متالیک / سفید', hex: '#8B0000', image: '/images/landings/solea-sneakers/sneaker-airmax1.svg' },
    ],
    sizes: ['39', '40', '41', '42', '43', '44'],
    images: [
      '/images/landings/solea-sneakers/sneaker-airmax1.svg',
    ],
    description: 'نسخه افسانه‌ای سال ۱۹۸۶ با پنجره هوای بزرگ اصل. رویه پارچه‌ای کلاسیک و گارد گل‌گیر جیر که تاریخچه اسنیکر جهان را زنده می‌کند.',
    specifications: {
      upper: 'مش سنتزی با گارد جیر قرمز',
      cushioning: 'واحد هوای نمایان Big Bubble',
      outsole: 'زیره وافل کلاسیک نایک',
      weight: '۳۵۰ گرم',
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
    name: 'On Running Cloudmonster 2',
    brand: 'ON RUNNING',
    slug: 'on-running-cloudmonster-2',
    category: 'running',
    gender: 'unisex',
    price: 28900000,
    colors: [
      { name: 'مشکی کربن', hex: '#222222', image: '/images/landings/solea-sneakers/sneaker-cloudmonster.svg' },
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    images: [
      '/images/landings/solea-sneakers/sneaker-cloudmonster.svg',
    ],
    description: 'بزرگترین کپسول‌های CloudTec تا به امروز. ضربه‌گیری هیولایی و پیشرانش شگفت‌انگیز ناشی از صفحه تزریقی Speedboard.',
    specifications: {
      upper: 'پلی‌استر ۱۰۰٪ بازیافتی تک‌لایه‌ای',
      cushioning: 'فوم دوگانه Helion superfoam با CloudTec',
      outsole: 'گریپ مهندسی‌شده جاده‌ای',
      weight: '۲۹۵ گرم',
    },
    featured: true,
    isPopular: true,
    isNew: true,
    badge: 'نوآوری سوئیسی',
    rating: 5.0,
    reviewCount: 33,
  },
];

export const SOLEA_LIMITED_DROPS = [
  {
    id: 'drop-01',
    title: 'Nike Air Max 1 86 OG Big Bubble',
    brand: 'NIKE',
    price: 24900000,
    image: '/images/landings/solea-sneakers/sneaker-airmax1.svg',
    tag: 'دراپ شماره ۰۷',
    stockRemaining: 6,
    releaseDate: '۱۴۰۵/۰۸/۲۵',
  },
  {
    id: 'drop-02',
    title: 'Solea Studio Archive 01 (Limited Edition)',
    brand: 'SOLEA',
    price: 32000000,
    image: '/images/landings/solea-sneakers/hero-sneaker.svg',
    tag: 'کالکشن اختصاصی',
    stockRemaining: 3,
    releaseDate: '۱۴۰۵/۰۹/۰۱',
  },
];
