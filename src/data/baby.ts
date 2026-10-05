export interface BabyProduct {
  id: string;
  name: string;
  brand: string;
  slug: string;
  category: 'clothing' | 'care' | 'feeding' | 'toys' | 'strollers' | 'nursery';
  ageGroup: '0-3m' | '3-6m' | '6-12m' | '1-2y' | '2-4y' | '4y+';
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  bgTint: string; // Color code for container background normalization
  description: string;
  material?: string;
  badge?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isDiscounted?: boolean;
  colors?: { name: string; hex: string }[];
}

export interface AgeCategory {
  id: '0-3m' | '3-6m' | '6-12m' | '1-2y' | '2-4y' | '4y+';
  title: string;
  subhead: string;
  image: string;
  description: string;
}

export interface BrandItem {
  id: string;
  name: string;
  origin: string;
  badge: string;
  logoText: string;
  image: string;
  description: string;
}

export const BABY_PRODUCTS: BabyProduct[] = [
  {
    id: 'baby-01',
    name: 'ست سرهمی و بادی پنبه‌ای ارگانیک',
    brand: 'Konges Sløjd',
    slug: 'organic-cotton-bodysuit-set',
    category: 'clothing',
    ageGroup: '0-3m',
    price: 1290000,
    originalPrice: 1790000,
    discountPercent: 30,
    rating: 4.9,
    reviewCount: 42,
    images: [
      '/images/BABY/PACK_KS104958_P25004_1_260617031136.webp',
      '/images/BABY/PACK_KS105720_P10025_1_251013033314_805185d3-714a-4d27-88f2-b8a0c7419772.webp'
    ],
    bgTint: '#F1C9BD',
    description: 'تهیه شده از ۱۰۰٪ پنبه ارگانیک بسیار نرم و ضدحساسیت با دکمه‌های فشاری جهت تعویض آسان پوشک.',
    material: '۱۰۰٪ پنبه ارگانیک GOTS',
    badge: 'تخفیف ویژه',
    isNew: true,
    isBestSeller: true,
    isDiscounted: true,
    colors: [
      { name: 'کرم گرم', hex: '#F8F5EF' },
      { name: 'هلویی لطیف', hex: '#F1C9BD' }
    ]
  },
  {
    id: 'baby-02',
    name: 'کرم مرطوب‌کننده و محافظ پوست نوزاد',
    brand: 'Liewood',
    slug: 'organic-baby-moisturizing-cream',
    category: 'care',
    ageGroup: '0-3m',
    price: 680000,
    originalPrice: 850000,
    discountPercent: 20,
    rating: 5.0,
    reviewCount: 68,
    images: [
      '/images/BABY/BabyCream.webp',
      '/images/BABY/Product_Bathtime_Starter_Kit_Coconut_F1.webp'
    ],
    bgTint: '#D7E5E9',
    description: 'ترکیب طبیعی با عصاره بابونه و کره شی برای التیام و تقویت سد دفاعی پوست حساس نوزادان.',
    material: 'عصاره بابونه و روغن بادام شیرین',
    badge: 'ارگانیک ۱۰۰٪',
    isBestSeller: true,
    isDiscounted: true,
    colors: [
      { name: 'آبی یاسی', hex: '#D7E5E9' }
    ]
  },
  {
    id: 'baby-03',
    name: 'ست ظروف غذاخوری سیلیکونی ضدلغزش',
    brand: 'Mushie',
    slug: 'silicone-dinnerware-set-sage',
    category: 'feeding',
    ageGroup: '6-12m',
    price: 1450000,
    originalPrice: 1890000,
    discountPercent: 23,
    rating: 4.8,
    reviewCount: 35,
    images: [
      '/images/BABY/DinnerwareCutlerySet_Sage.webp',
      '/images/BABY/Vanilla_RoundBowl_Single.webp'
    ],
    bgTint: '#D5E1D0',
    description: 'طراحی شده بر اساس استانداردهای ارگونومیک همراه با پایه مکشی قدرتمند جهت جلوگیری از ریختن غذا.',
    material: 'سیلیکون غذایی فاقد BPA',
    badge: 'محبوب والدین',
    isBestSeller: true,
    isDiscounted: true,
    colors: [
      { name: 'سبز مریم‌گلی', hex: '#D5E1D0' },
      { name: 'کرم وانیلی', hex: '#F2E3A9' }
    ]
  },
  {
    id: 'baby-04',
    name: 'پک بازی حسی و آموزشی هوش مونته‌سوری',
    brand: 'PlanToys',
    slug: 'montessori-sensory-play-kit',
    category: 'toys',
    ageGroup: '1-2y',
    price: 2450000,
    originalPrice: 2900000,
    discountPercent: 15,
    rating: 4.9,
    reviewCount: 51,
    images: [
      '/images/BABY/Product-Play-Kit-2026-Coconut-01.webp',
      '/images/BABY/PlanToys-CargoShip-01.webp'
    ],
    bgTint: '#F2E3A9',
    description: 'مجموعه بازی‌های چوبی توسعه مهارت‌های حرکتی ظریف و شناخت رنگ‌ها و فرم‌ها.',
    material: 'چوب طبیعی و رنگ‌های گیاهی فاقد سموم',
    badge: 'آموزشی',
    isNew: true,
    isBestSeller: true,
    isDiscounted: true,
    colors: [
      { name: 'چوب طبیعی', hex: '#F2E3A9' }
    ]
  },
  {
    id: 'baby-05',
    name: 'گهواره و راکر آغوشی ارگونومیک نوزاد',
    brand: 'BabyBjörn',
    slug: 'ergonomic-baby-rocker-oatmeal',
    category: 'nursery',
    ageGroup: '0-3m',
    price: 8900000,
    originalPrice: 10500000,
    discountPercent: 15,
    rating: 5.0,
    reviewCount: 89,
    images: [
      '/images/BABY/Product-The-Rocker-Oatmeal-01.webp',
      '/images/BABY/Product-The-Chair-II-Coconut-01.webp'
    ],
    bgTint: '#E7E1DA',
    description: 'حرکت حرکتی نرم و بدون نیاز به باتری با پشتیبانی کامل از سر، گردن و ستون فقرات نوزاد.',
    material: 'پارچه ۳ بعدی تنفس‌پذیر پنبه‌ای',
    badge: 'ارگونومیک برتر',
    isBestSeller: true,
    isDiscounted: true,
    colors: [
      { name: 'جو دوسری', hex: '#E7E1DA' }
    ]
  },
  {
    id: 'baby-06',
    name: 'حوله کلاه‌دار طرح خرس همراه با لیف حمام',
    brand: 'Liewood',
    slug: 'bear-hooded-towel-and-bath-mitt',
    category: 'care',
    ageGroup: '3-6m',
    price: 1150000,
    rating: 4.8,
    reviewCount: 29,
    images: [
      '/images/BABY/BearRobe_Fog_a6ebae70-1475-4668-8b82-9b96cc6412de.webp',
      '/images/BABY/Product-Ribbed-Bath-Mitt-Slate-F1.webp'
    ],
    bgTint: '#D7E5E9',
    description: 'حوله بافت حوله‌ای فوق‌العاده نرم با جذب آب بالا و طرح گوش خرس بسیار دوست‌داشتنی.',
    material: '۱۰۰٪ مخمل پنبه‌ای ارگانیک',
    isNew: true,
    colors: [
      { name: 'خاکستری مه', hex: '#D7E5E9' }
    ]
  },
  {
    id: 'baby-07',
    name: 'ژاکت و بلوز بافتنی لطیف نوزاد',
    brand: 'Petite Chérie',
    slug: 'soft-knitted-baby-sweater',
    category: 'clothing',
    ageGroup: '3-6m',
    price: 1580000,
    rating: 4.7,
    reviewCount: 19,
    images: [
      '/images/BABY/PACK_KS105712_P25078_1_251027022111.webp',
      '/images/BABY/PACK_KS105712_P25147_1_260812101619.webp'
    ],
    bgTint: '#F1C9BD',
    description: 'بافت ریز ظریف با الیاف پنبه کشباف جهت گرما و راحتی کامل نوزاد در فصل پاییز و زمستان.',
    material: 'پنبه نرم ضد حساسیت',
    isNew: true,
    colors: [
      { name: 'کرم روزگاری', hex: '#F1C9BD' }
    ]
  },
  {
    id: 'baby-08',
    name: 'لیوان آموزشی سیلیکونی همراه با نی',
    brand: 'Mushie',
    slug: 'silicone-training-cup-straw',
    category: 'feeding',
    ageGroup: '6-12m',
    price: 520000,
    rating: 4.9,
    reviewCount: 44,
    images: [
      '/images/BABY/SiliconeTrainingCupandStraw_BlueyIvory_847f8522-f6e4-461c-a6cc-a0ca0608f021.webp',
      '/images/BABY/SoftSpoutSippyCup_Peony_415b7373-1cbc-4701-aaed-ade56c895447.webp'
    ],
    bgTint: '#D5E1D0',
    description: 'کمک به رشد مستقلانه نوشیدن کودک با درپوش محکم و نی سیلیکونی بسیار نرم.',
    material: 'سیلیکون پزشکی فاقد BPA',
    colors: [
      { name: 'آبی استخوانی', hex: '#D7E5E9' },
      { name: 'صورتی ملایم', hex: '#F1C9BD' }
    ]
  },
  {
    id: 'baby-09',
    name: 'چادر بازی پارچه‌ای اسکاندیناوی کودک',
    brand: 'Konges Sløjd',
    slug: 'scandinavian-play-tent',
    category: 'nursery',
    ageGroup: '2-4y',
    price: 3850000,
    rating: 5.0,
    reviewCount: 23,
    images: [
      '/images/BABY/The-Play-Tent-A1.webp',
      '/images/BABY/Product-The-Play-Chair-2026-Coconut-01.webp'
    ],
    bgTint: '#E7E1DA',
    description: 'محیطی امن و خیال‌انگیز برای بازی، مطالعه و استراحت کودک در اتاق خواب.',
    material: 'کتان ارگانیک و چوب کاج طبیعی',
    isNew: true,
    colors: [
      { name: 'کرم استخوانی', hex: '#E7E1DA' }
    ]
  },
  {
    id: 'baby-10',
    name: 'کشتی چوبی باری سبک کلاسیک',
    brand: 'PlanToys',
    slug: 'wooden-cargo-ship-toy',
    category: 'toys',
    ageGroup: '2-4y',
    price: 1120000,
    rating: 4.8,
    reviewCount: 31,
    images: [
      '/images/BABY/PlanToys-CargoShip-01.webp',
      '/images/BABY/PlanToys-CoastGuardBoat-01.webp'
    ],
    bgTint: '#F2E3A9',
    description: 'اسباب‌بازی مقاوم چوبی ضدآب مناسب حمام و بازی‌های داستانی روی زمین.',
    material: 'چوب لاستیک بازیافتی',
    colors: [
      { name: 'چوبی و آبی', hex: '#F2E3A9' }
    ]
  },
  {
    id: 'baby-11',
    name: 'روغن ماساژ و آرامش‌بخش نوزاد',
    brand: 'Liewood',
    slug: 'organic-calming-baby-oil',
    category: 'care',
    ageGroup: '0-3m',
    price: 740000,
    rating: 4.9,
    reviewCount: 52,
    images: [
      '/images/BABY/BabyOil.webp',
      '/images/BABY/Shampoo_Babywash.webp'
    ],
    bgTint: '#D7E5E9',
    description: 'غنی شده با روغن کالاندولا و ویتامین E برای ماساژ بعد از حمام و خواب راحت نوزاد.',
    material: '۱۰۰٪ پایه گیاهی و طبیعی',
    colors: [
      { name: 'شفاف', hex: '#D7E5E9' }
    ]
  },
  {
    id: 'baby-12',
    name: 'چرخ خرید چوبی کودک و اسباب‌بازی',
    brand: 'PlanToys',
    slug: 'wooden-shopping-cart-toy',
    category: 'toys',
    ageGroup: '2-4y',
    price: 2950000,
    rating: 4.9,
    reviewCount: 18,
    images: [
      '/images/BABY/Product-Shopping-Cart-01.webp',
      '/images/BABY/Product-Play-Kit-2026-Coconut-01.webp'
    ],
    bgTint: '#F2E3A9',
    description: 'تقویت تعادل در راه رفتن و بازی‌های نقش‌آفرینی خانه و خریدهای خنده‌دار.',
    material: 'چوب باکیفیت و ساخت مستحکم',
    isNew: true,
    colors: [
      { name: 'چوبی ملایم', hex: '#F2E3A9' }
    ]
  },
  {
    id: 'baby-13',
    name: 'صندلی غذاخوری قابل تنظیم کودک',
    brand: 'Stokke',
    slug: 'adjustable-high-chair-coconut',
    category: 'nursery',
    ageGroup: '6-12m',
    price: 7600000,
    rating: 5.0,
    reviewCount: 77,
    images: [
      '/images/BABY/Product-The-Chair-II-Coconut-01.webp',
      '/images/BABY/Product-The-Play-Chair-2026-Coconut-01.webp'
    ],
    bgTint: '#E7E1DA',
    description: 'طراحی ماندگار همراه رشد کودک از ۶ ماهگی تا دوران ابتدایی با بالشتک راحتی.',
    material: 'چوب راش اروپایی',
    badge: 'طراحی برتر سال',
    isBestSeller: true,
    colors: [
      { name: 'سفید نارگیلی', hex: '#E7E1DA' }
    ]
  },
  {
    id: 'baby-14',
    name: 'سرهمی زمستانه کاپشنی کلاه‌دار',
    brand: 'Petite Chérie',
    slug: 'winter-padded-baby-jumpsuit',
    category: 'clothing',
    ageGroup: '6-12m',
    price: 2850000,
    originalPrice: 3400000,
    discountPercent: 16,
    rating: 4.8,
    reviewCount: 33,
    images: [
      '/images/BABY/PACK_KS105878_S15080_1_260624035036.webp',
      '/images/BABY/PACK_KS105709_S25083_1_251013033328_57a7478b-ae46-48b8-9601-964bc6186aac.webp'
    ],
    bgTint: '#F1C9BD',
    description: 'لایه آستر کرمی بسیار گرم با خاصیت ضدآب مناسب پیاده‌روی‌های هوای سرد.',
    material: 'الیاف حرارتی ضدآب و تنفس‌پذیر',
    isDiscounted: true,
    colors: [
      { name: 'صورتی خاکی', hex: '#F1C9BD' }
    ]
  },
  {
    id: 'baby-15',
    name: 'ست اسباب‌بازی شناور و حمام اعداد و حروف',
    brand: 'Liewood',
    slug: 'foam-letters-numbers-bath-set',
    category: 'toys',
    ageGroup: '1-2y',
    price: 640000,
    rating: 4.7,
    reviewCount: 22,
    images: [
      '/images/BABY/01_FoamLetters_NumbersBathPlaySet_Sol.webp',
      '/images/BABY/BathBoats_Stack_92a8e8c5-87ac-4722-bdd5-4af7d7ab58ab.webp'
    ],
    bgTint: '#F2E3A9',
    description: 'حروف و اعداد شناور فومی که هنگام خیس شدن به کاشی‌های حمام می‌چسبند.',
    material: 'فوم نرم فاقد مواد سمی',
    colors: [
      { name: 'چند رنگ نرم', hex: '#F2E3A9' }
    ]
  },
  {
    id: 'baby-16',
    name: 'ست استارتر کامل مراقبت و شستشوی نوزاد',
    brand: 'BIBS',
    slug: 'bathtime-starter-kit-coconut',
    category: 'care',
    ageGroup: '0-3m',
    price: 2100000,
    originalPrice: 2600000,
    discountPercent: 19,
    rating: 5.0,
    reviewCount: 47,
    images: [
      '/images/BABY/Product_Bathtime_Starter_Kit_Coconut_F1.webp',
      '/images/BABY/Product_Bathtime_Essentials_Coconut_F1.webp'
    ],
    bgTint: '#D7E5E9',
    description: 'شامل شامپو سر و بدن، روغن ماساژ، کرم ضد سوختگی و لیف حوله‌ای پنبه‌ای.',
    material: 'ترکیبات ارگانیک تایید شده',
    badge: 'پک پیشنهادی سیسمونی',
    isBestSeller: true,
    isDiscounted: true,
    colors: [
      { name: 'سفید شیری', hex: '#D7E5E9' }
    ]
  }
];

export const AGE_CATEGORIES: AgeCategory[] = [
  {
    id: '0-3m',
    title: '۰ تا ۳ ماهگی',
    subhead: 'اولین ماه‌های زندگی',
    image: '/images/BABY/PACK_KS104958_P25004_1_260617031136.webp',
    description: 'اولین ماه‌های زندگی با لباس‌های بسیار نرم پنبه‌ای، حوله گرم و مراقبت‌های آرامش‌بخش پوست.'
  },
  {
    id: '3-6m',
    title: '۳ تا ۶ ماهگی',
    subhead: 'کشف دنیای اطراف',
    image: '/images/BABY/PACK_KS105712_P25078_1_251027022111.webp',
    description: 'زمان شروع حرکات اولیه نوزاد، ست‌های بافتنی راحت و وسایل حمام سرگرم‌کننده.'
  },
  {
    id: '6-12m',
    title: '۶ تا ۱۲ ماهگی',
    subhead: 'شروع طعم‌های تازه',
    image: '/images/BABY/DinnerwareCutlerySet_Sage.webp',
    description: 'زمان شروع غذای کمکی با ظروف سیلیکونی ایمن، لیوان‌های نی‌دار و صندلی غذاخوری ارگونومیک.'
  },
  {
    id: '1-2y',
    title: '۱ تا ۲ سالگی',
    subhead: 'اولین قدم‌های مستقل',
    image: '/images/BABY/Product-Play-Kit-2026-Coconut-01.webp',
    description: 'اسباب‌بازی‌های حسی مونته‌سوری، چرخ‌های خرید چوبی و پوشاک آزاد برای شیطنت‌های روزمره.'
  },
  {
    id: '2-4y',
    title: '۲ تا ۴ سالگی',
    subhead: 'دنیای بازی و خیال',
    image: '/images/BABY/The-Play-Tent-A1.webp',
    description: 'چادرهای پارچه‌ای بازی، کشتی‌های چوبی و وسایل اتاق کودک برای تقویت خلاقیت فرزند شما.'
  },
  {
    id: '4y+',
    title: '۴ سال به بالا',
    subhead: 'یادگیری و رشد فعال',
    image: '/images/BABY/Product-Shopping-Cart-01.webp',
    description: 'ست‌های بازی آموزشی گروهی، لباس‌های مقاوم و تجهیزات اتاق خواب مستقل.'
  }
];

export const BRANDS_LIST: BrandItem[] = [
  {
    id: 'brand-liewood',
    name: 'Liewood',
    origin: 'دانمارک',
    badge: 'طراحی اسکاندیناوی',
    logoText: 'LIEWOOD',
    image: '/images/BABY/BearRobe_Fog_a6ebae70-1475-4668-8b82-9b96cc6412de.webp',
    description: 'برند پرچمدار دانمارکی در تولید محصولات سبک زندگی، حوله‌ها و لوازم مراقبت ارگانیک کودک.'
  },
  {
    id: 'brand-mushie',
    name: 'Mushie',
    origin: 'سوئد / آمریکا',
    badge: 'سیلیکون پزشکی',
    logoText: 'mushie',
    image: '/images/BABY/DinnerwareCutlerySet_Sage.webp',
    description: 'شناخته‌شده‌ترین برند جهانی در تولید ظروف غذاخوری، پستانک و اکسسوری‌های مینیمال نوزاد.'
  },
  {
    id: 'brand-konges',
    name: 'Konges Sløjd',
    origin: 'دانمارک',
    badge: 'پنبه ارگانیک GOTS',
    logoText: 'Konges Sløjd',
    image: '/images/BABY/PACK_KS104958_P25004_1_260617031136.webp',
    description: 'طراحی بی‌نظیر پوشاک و لوازم خواب نوزاد با پالت رنگ‌های آرامش‌بخش و پارچه‌های پنبه‌ای خالص.'
  },
  {
    id: 'brand-stokke',
    name: 'Stokke',
    origin: 'نروژ',
    badge: 'ارگونومی برتر',
    logoText: 'STOKKE',
    image: '/images/BABY/Product-The-Chair-II-Coconut-01.webp',
    description: 'تولیدکننده صندلی‌های غذاخوری و کالسکه‌های نمادین با شعار نزدیکی فرزند و والدین.'
  },
  {
    id: 'brand-plantoys',
    name: 'PlanToys',
    origin: 'تایلند',
    badge: 'چوب طبیعی سازگار با محیط',
    logoText: 'PlanToys',
    image: '/images/BABY/Product-Play-Kit-2026-Coconut-01.webp',
    description: 'تخصصی‌ترین سازنده اسباب‌بازی‌های چوبی هوش و مونته‌سوری با رنگ‌های گیاهی فاقد خشت و سم.'
  },
  {
    id: 'brand-bibs',
    name: 'BIBS',
    origin: 'دانمارک',
    badge: 'اصالت دانمارکی',
    logoText: 'BIBS',
    image: '/images/BABY/Product_Bathtime_Starter_Kit_Coconut_F1.webp',
    description: 'با بیش از ۴۰ سال قدمت در ساخت پستانک‌ها و محصولات شستشوی طبیعی برای نوزادان.'
  }
];

export const CURATED_NURSERY_BUNDLE = {
  title: 'مجموعه استارتر سیسمونی نوزاد',
  subtitle: 'لیست خرید هوشمندانه و کامل برای شروع یک دنیای تازه',
  tagline: 'منتخب ۵ آیتم ضروری از بهترین برندهای جهان در یک بسته خریدمحور با تخفیف ویژه',
  totalPrice: 6500000,
  originalPrice: 8200000,
  discountAmount: '۱,۷۰۰,۰۰۰ تومان تخفیف ترکیبی',
  items: [
    { title: 'ست سرهمی پنبه ارگانیک', brand: 'Konges Sløjd', img: '/images/BABY/PACK_KS104958_P25004_1_260617031136.webp' },
    { title: 'حوله کلاه‌دار لطیف نوزاد', brand: 'Liewood', img: '/images/BABY/BearRobe_Fog_a6ebae70-1475-4668-8b82-9b96cc6412de.webp' },
    { title: 'ست ظرف و قاشق سیلیکونی', brand: 'Mushie', img: '/images/BABY/DinnerwareCutlerySet_Sage.webp' },
    { title: 'پک استارتر حمام و مراقبت', brand: 'BIBS', img: '/images/BABY/Product_Bathtime_Starter_Kit_Coconut_F1.webp' },
    { title: 'اسباب‌بازی آموزشی مونته‌سوری', brand: 'PlanToys', img: '/images/BABY/Product-Play-Kit-2026-Coconut-01.webp' }
  ]
};

export const MEGA_MENU_CATEGORIES = [
  {
    id: 'clothing',
    title: 'لباس کودک',
    icon: '👔',
    subcategories: ['لباس نوزادی', 'بادی و سرهمی', 'بلوز و شلوار', 'ژاکت و بافت', 'کاپشن زمستانه', 'کلاه و پاپوش', 'اکسسوری پوشاک'],
    ageRanges: ['۰–۳ ماه', '۳–۶ ماه', '۶–۱۲ ماه', '۱–۲ سال', '۲–۴ سال', '۴+ سال'],
    brands: ['Konges Sløjd', 'Petite Chérie', 'Liewood'],
    promoImage: '/images/BABY/PACK_KS104958_P25004_1_260617031136.webp',
    promoTitle: 'کالکشن بهاره لباس نوزادی'
  },
  {
    id: 'care',
    title: 'مراقبت و بهداشت',
    icon: '🧴',
    subcategories: ['کرم مرطوب‌کننده', 'روغن ماساژ نوزاد', 'شامپو و ژل حمام', 'حوله و حوله کلاه‌دار', 'لیف و ست شستشو', 'سبد حمام'],
    ageRanges: ['۰–۳ ماه', '۳–۶ ماه', '۶–۱۲ ماه', '۱–۲ سال'],
    brands: ['Liewood', 'BIBS', 'Mustela'],
    promoImage: '/images/BABY/Product_Bathtime_Starter_Kit_Coconut_F1.webp',
    promoTitle: 'ست‌های شستشوی نوزاد'
  },
  {
    id: 'feeding',
    title: 'تغذیه و شیشه',
    icon: '🍼',
    subcategories: ['ست ظروف غذاخوری', 'لیوان آموزشی نی‌دار', 'قاشق و چنگال سیلیکونی', 'پستانک و بند پستانک', 'پیش‌بند و زیرانداز غذا'],
    ageRanges: ['۰–۳ ماه', '۳–۶ ماه', '۶–۱۲ ماه', '۱–۲ سال', '۲–۴ سال'],
    brands: ['Mushie', 'BIBS', 'Liewood'],
    promoImage: '/images/BABY/DinnerwareCutlerySet_Sage.webp',
    promoTitle: 'ظروف نسوز سیلیکونی'
  },
  {
    id: 'toys',
    title: 'اسباب‌بازی و رشد',
    icon: '🧸',
    subcategories: ['اسباب‌بازی مونته‌سوری', 'بازی‌های حمام', 'اسباب‌بازی چوبی', 'چرخ خرید و راه بردن', 'چادر بازی', 'جغجغه و دندان‌گیر'],
    ageRanges: ['۰–۳ ماه', '۳–۶ ماه', '۶–۱۲ ماه', '۱–۲ سال', '۲–۴ سال', '۴+ سال'],
    brands: ['PlanToys', 'Liewood', 'Konges Sløjd'],
    promoImage: '/images/BABY/Product-Play-Kit-2026-Coconut-01.webp',
    promoTitle: 'بازی‌های هوش و حسی'
  },
  {
    id: 'nursery',
    title: 'اتاق کودک و گهواره',
    icon: '🛏️',
    subcategories: ['گهواره و راکر نوزاد', 'صندلی غذاخوری', 'چادر و مبل کودک', 'پتو و سرویس خواب', 'چراغ خواب و اکسسوری'],
    ageRanges: ['۰–۳ ماه', '۶–۱۲ ماه', '۱–۲ سال', '۲–۴ سال'],
    brands: ['Stokke', 'BabyBjörn', 'Konges Sløjd'],
    promoImage: '/images/BABY/Product-The-Rocker-Oatmeal-01.webp',
    promoTitle: 'راکر ارگونومیک آغوشی'
  }
];
