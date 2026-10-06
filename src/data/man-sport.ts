export interface ManSportProduct {
  id: string;
  name: string;
  brand: string;
  category: 't-shirt' | 'hoodie' | 'sweatshirt' | 'jacket' | 'pants' | 'blouse';
  style: 'street' | 'casual' | 'sport' | 'oversized' | 'minimal';
  price: number; // in Tomans
  discountPrice?: number;
  badge?: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  images: string[]; // Exactly 3 images for hover navigation & mobile swipe
  description: string;
  material: string;
  fit: string;
  careInstructions?: string;
  features?: string[];
  sku?: string;
  countryOfOrigin?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviewCount: number;
}

export interface BrandInfo {
  id: string;
  name: string;
  logoText: string;
  country: string;
  productCount: number;
  image: string;
}

export interface StyleCategory {
  id: string;
  title: string;
  englishTitle: string;
  tagline: string;
  image: string;
  accentColor: string; // Hex color code for style accent
}

export const MAN_SPORT_CATEGORIES = [
  { id: 'all', label: 'همه محصولات', icon: 'Sparkles' },
  { id: 't-shirt', label: 'تی‌شرت', icon: 'Shirt', image: '/images/man-sport/T-shirt-1.webp' },
  { id: 'hoodie', label: 'هودی', icon: 'Layers', image: '/images/man-sport/1785334254-1751982752-basically-a-hood-black_927d5103-f4b9-4415-9200-b636a4060a33.webp' },
  { id: 'sweatshirt', label: 'سویشرت', icon: 'Zap', image: '/images/man-sport/1785427587-p3-stitch-crew-black-2_374632b4-265e-489b-a8fb-374b9e3ca111.webp' },
  { id: 'jacket', label: 'کاپشن و کاپشن ورزشی', icon: 'Shield', image: '/images/man-sport/118624_BLAC_1.webp' },
  { id: 'pants', label: 'شلوار و اسلش', icon: 'Activity', image: '/images/man-sport/1790349702-basically-a-jogger-black-1.webp' },
];

export const MAN_SPORT_PRODUCTS: ManSportProduct[] = [
  {
    id: 'ms-01',
    name: 'تی‌شرت اورسایز گرافیکی Street Heavyweight',
    brand: 'NIKE SPORTSWEAR',
    category: 't-shirt',
    style: 'oversized',
    price: 2890000,
    colors: [
      { name: 'مشکی', hex: '#111111' },
      { name: 'سفید استخوانی', hex: '#F5F3EE' },
      { name: 'خاکستری دودی', hex: '#888888' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [
      '/images/man-sport/T-shirt-1.webp',
      '/images/man-sport/T-shirt-2.webp',
      '/images/man-sport/T-shirt-3.webp',
    ],
    description: 'تی‌شرت سنگین وزن ۳۲۰ گرمی پنبه شانه شده با کات اورسایز و افتاده روی شانه‌ها. ماندگاری فرم عالی پس از شستشوهای متوالی بدون افت لبه‌های یقه و تغییر ابعاد.',
    material: '۱۰۰٪ پنبه ارگانیک سنگین (۳۲۰ گرم در متر مربع)',
    fit: 'اورسایز کژوال (Drop Shoulder Fit)',
    careInstructions: 'شستشو با آب سرد ۳۰ درجه، بدون استفاده از سفیدکننده، اتوکشی از پشت پارچه با دمای متوسط.',
    features: [
      'پارچه ۱۰۰٪ پنبه سنگین ۳۲۰ گرمی با بافت متراکم',
      'برش آزاد خیابانی با سرشانه افتاده (Drop Shoulder)',
      'یقه کشباف تقویت‌شده مقاوم در برابر دفرمگی',
      'چاپ سیلک‌اسکرین مقاوم در برابر شستشو',
    ],
    sku: 'NK-ST-320H',
    countryOfOrigin: 'ویتنام',
    isNew: true,
    badge: 'جدید',
    rating: 4.9,
    reviewCount: 42,
  },
  {
    id: 'ms-02',
    name: 'هودی کپچردار اسنشیال Heavy Fleece',
    brand: 'ADIDAS ORIGINALS',
    category: 'hoodie',
    style: 'street',
    price: 3950000,
    discountPrice: 3490000,
    colors: [
      { name: 'مشکی زاغی', hex: '#111111' },
      { name: 'سرمه‌ای دودی', hex: '#1B263B' },
    ],
    sizes: ['M', 'L', 'XL', '2XL'],
    images: [
      '/images/man-sport/1975203_BLAC_1.webp',
      '/images/man-sport/1975203_ASHH_2.webp',
      '/images/man-sport/1975203_NAVY_2.webp',
    ],
    description: 'هودی دورس سه نخ کرک‌دار با جیب کانگورویی تقویت‌شده و کلاه دو لایه ضخیم مناسب استایل خیابانی در فصل‌های سرد و نیمه‌سرد.',
    material: '۸۰٪ پنبه سنگین، ۲۰٪ پلی‌استر مقاوم',
    fit: 'آزاد (Relaxed Street Fit)',
    careInstructions: 'شستشو با ماشین لباسشویی دور کند ۳۰ درجه، خشک‌کردن در سایه، عدم شستشو با خشک‌کن.',
    features: [
      'پارچه دورس ۳ نخ داخل کرک‌دار با گرمابخشی عالی',
      'کلاه دو لایه ضخیم با بند ضخیم فلزی باکیفیت',
      'جیب کانگورویی جلویی با دوخت الیک دوبل',
      'سرآستین و لبه پایینی کشباف متراکم و بادوام',
    ],
    sku: 'AD-HF-1975',
    countryOfOrigin: 'اندونزی',
    isBestSeller: true,
    badge: 'پرفروش',
    rating: 4.8,
    reviewCount: 88,
  },
  {
    id: 'ms-03',
    name: 'سویشرت یقه ۳ سانتی نیم‌زیپ Urban Performance',
    brand: 'PUMA SELECT',
    category: 'sweatshirt',
    style: 'sport',
    price: 3450000,
    colors: [
      { name: 'مشکی مات', hex: '#1A1A1A' },
      { name: 'سرمه‌ای کلاسیک', hex: '#0D1B2A' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/man-sport/118621_BLAC_1.webp',
      '/images/man-sport/118621_NAVY_1.webp',
      '/images/man-sport/118632_BROW_1.webp',
    ],
    description: 'سویشرت نیم زیپ اسپرت با پارچه تنفس‌پذیر دو لایه و زیپ ضدآب سفارشی. مناسب برای تمرینات ورزشی و استفاده روزمره شهری.',
    material: '۹۰٪ پنبه ورزشی، ۱۰٪ الستان استرچ ۴ جهته',
    fit: 'استاندارد اسپرت (Athletic Fit)',
    careInstructions: 'شستشو با لباس‌های هم‌رنگ در دمای کمتر از ۳۰ درجه، عدم استفاده از نرم‌کننده پارچه.',
    features: [
      'پارچه استرچ ۴ جهته با آزادی حرکت کامل',
      'زیپ نیمه‌باز با محافظ چانه مانع از سایش پوست',
      'تکنولوژی مدیریت رطوبت و تعریق Dry-Tech',
      'برش ارگونومیک برای حداکثر راحتی در حرکت',
    ],
    sku: 'PM-UP-1186',
    countryOfOrigin: 'ترکیه',
    isNew: true,
    rating: 4.7,
    reviewCount: 29,
  },
  {
    id: 'ms-04',
    name: 'کاپشن جکت بومبر Windbreaker Tech',
    brand: 'UNDER ARMOUR',
    category: 'jacket',
    style: 'sport',
    price: 5800000,
    colors: [
      { name: 'مشکی کربنی', hex: '#121212' },
      { name: 'سرمه‌ای سیر', hex: '#0B132B' },
    ],
    sizes: ['M', 'L', 'XL', '2XL'],
    images: [
      '/images/man-sport/118624_BLAC_1.webp',
      '/images/man-sport/118624_NAVY_1.webp',
      '/images/man-sport/118634_BROW_1.webp',
    ],
    description: 'کاپشن سبک بادگیر با لایه مقاوم در برابر نفوذ آب و باد، آستر توری تنفس‌پذیر و جیب‌های زیپ‌دار مگنتی برای هوای متغیر شهری.',
    material: '۱۰۰٪ نایلون تکنیکال ضدآب (DWR Finish)',
    fit: 'رگولار فیت فنی (Technical Regular Fit)',
    careInstructions: 'شستشو دستی یا ماشین لباسشویی برنامه‌های ملایم بدون چرخش شدید، اتوکشی ممنوع.',
    features: [
      'پوشش آب‌گریز DWR مقاوم در برابر باران سبک و باد',
      'آستر توری تنفس‌پذیر برای جلوگیری از تعریق داخل لباس',
      'جیب‌های جانبی زیپ‌دار مجهز به زبانه ضدآب',
      'کشباف یقه و سرآستین نایلونی آلاستیک',
    ],
    sku: 'UA-WT-1186',
    countryOfOrigin: 'چین',
    isNew: true,
    badge: 'تکنولوژی ضدآب',
    rating: 5.0,
    reviewCount: 16,
  },
  {
    id: 'ms-05',
    name: 'شلوار اسلش جگر Tapered Cargo Track Pants',
    brand: 'NEW BALANCE',
    category: 'pants',
    style: 'street',
    price: 3200000,
    colors: [
      { name: 'مشکی', hex: '#111111' },
      { name: 'خاکی قهوه‌ای', hex: '#4A3B32' },
      { name: 'خاکستری روشن', hex: '#9AA0A6' },
    ],
    sizes: ['M', 'L', 'XL', '2XL'],
    images: [
      '/images/man-sport/116812_BLAC_1.webp',
      '/images/man-sport/116812_BROW_1.webp',
      '/images/man-sport/116812_GHEA_1.webp',
    ],
    description: 'شلوار اسلش کارگو با دمپای کشی و جیب‌های جانبی پاکتی کاربردی. دارای کش کمر انطباق‌پذیر با بند قابل تنظیم برای راحتی استایل خیابانی.',
    material: '۹۵٪ پنبه کتان کش، ۵٪ اسپندکس',
    fit: 'مخروطی شیک (Tapered Fit)',
    careInstructions: 'شستشو با آب ملایم ۳۰ درجه، خشک کردن در وضعیت آویخته، اتوکشی در دمای معمولی.',
    features: [
      'پارچه کتان کش با انعطاف‌پذیری و مقاومت بالا',
      '۶ جیب کاربردی شامل ۲ جیب پاکتی کارگو در طرفین',
      'دمپای کشباف شیک مناسب نمایش کتانی و اسنیکرز',
      'کمر کشی عریض با بند قابل تنظیم سفارشی',
    ],
    sku: 'NB-TC-1168',
    countryOfOrigin: 'ویتنام',
    isBestSeller: true,
    badge: 'محبوب‌ترین',
    rating: 4.9,
    reviewCount: 64,
  },
  {
    id: 'ms-06',
    name: 'تی‌شرت یقه گرد تایپوگرافی Acid Wash',
    brand: 'STÜSSY',
    category: 't-shirt',
    style: 'street',
    price: 2950000,
    colors: [
      { name: 'دودی شسته شده', hex: '#333333' },
      { name: 'سفید زیتونی', hex: '#EAE6DF' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/man-sport/T-shirt-4.webp',
      '/images/man-sport/T-shirt-5.webp',
      '/images/man-sport/T-shirt-6.webp',
    ],
    description: 'تی‌شرت استریت‌ویر با افکت سنگ‌شور وینتیج و چاپ سیلک برجسته با کیفیت بالا در پشت و جلوی لباس برای استایل‌های مدرن و آزاد.',
    material: '۱۰۰٪ پنبه سنگ‌شور شده سنگین (۲۸0 گرم)',
    fit: 'اورسایز خیابانی (Street Oversized)',
    careInstructions: 'شستشو با آب سرد، از خشک‌کن حرارتی استفاده نشود تا افکت سنگ‌شور حفظ شود.',
    features: [
      'افکت رنگ‌آمیزی Acid Wash منحصر به فرد روی هر قطعه',
      'چاپ سیلک برجسته با رنگ‌های باکیفیت مقاوم در برابر ترک‌خوردگی',
      'بافت پارچه نرم شده با فرایند شستشوی آنزیمی',
      'برش آزاد و راحتی فوق‌العاده در استفاده روزانه',
    ],
    sku: 'ST-AW-06',
    countryOfOrigin: 'مکزیک',
    isNew: false,
    rating: 4.8,
    reviewCount: 37,
  },
  {
    id: 'ms-07',
    name: 'بلوز دورس بدون کلاه Minimalist Crewneck',
    brand: 'CARHARTT WIP',
    category: 'blouse',
    style: 'minimal',
    price: 3700000,
    colors: [
      { name: 'کرم استخوانی', hex: '#E5DDC8' },
      { name: 'قرمز عنابی', hex: '#8B0000' },
      { name: 'مشکی', hex: '#111111' },
    ],
    sizes: ['M', 'L', 'XL'],
    images: [
      '/images/man-sport/1925216_BONE_2.webp',
      '/images/man-sport/1925216_REDD_2.webp',
      '/images/man-sport/1925216_FBLA_2.webp',
    ],
    description: 'دورس یقه گرد مینیمال با لوگوی گلدوزی شده کوچک روی سینه. تن‌خور بسیار تمیز و شیک برای استفاده روزمره و ست کردن با لایه‌های مختلف.',
    material: '۱۰۰٪ پنبه فرانسوی دو نخ (Loopback Cotton)',
    fit: 'استاندارد مینیمال (Clean Regular Fit)',
    careInstructions: 'شستشو با لباس‌های مشابه در دمای ۳۰ درجه، پشت‌ورو شسته شود.',
    features: [
      'بافت دورس دو نخ فرانسوی (Loopback) فوق‌العاده نرم',
      'لوگوی کوچک گلدوزی شده با دقت بالا روی سینه',
      'یقه، سرآستین و لبه پایینی کشباف با تراکم بالا',
      'طراحی مینیمال بدون انقضا مناسب ترکیب با انواع استایل',
    ],
    sku: 'CH-MC-1925',
    countryOfOrigin: 'تونس',
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 53,
  },
  {
    id: 'ms-08',
    name: 'تی‌شرت اسپرت کژوال Cotton Touch',
    brand: 'ASICS SPORTSTYLE',
    category: 't-shirt',
    style: 'casual',
    price: 2200000,
    colors: [
      { name: 'مشکی', hex: '#111111' },
      { name: 'سفید', hex: '#FFFFFF' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [
      '/images/man-sport/T-shirt-7.webp',
      '/images/man-sport/T-shirt-8.webp',
      '/images/man-sport/shirt-1.webp',
    ],
    description: 'تی‌شرت نرم با لمس پنبه‌ای خنک و جذب رطوبت بالا. عالی برای روزهای پرتحرک شهری و فعالیت‌های روزانه.',
    material: '۷۰٪ پنبه، ۳۰٪ پلی‌استر های‌تک تنفس‌پذیر',
    fit: 'کژوال راحت (Casual Regular)',
    careInstructions: 'شستشو با ماشین لباسشویی دور معمولی ۳۰ درجه.',
    features: [
      'ترکیب پنبه و پلی‌استر برای تعادل نرمی و خشک‌شدن سریع',
      'عدم ایجاد چروک پس از شستشو و نیاز پایین به اتوکشی',
      'وزن سبک و احساس خنکی در طول روز',
      'دوخت‌های نرم و تخت مانع از تحریک پوست',
    ],
    sku: 'AS-CT-08',
    countryOfOrigin: 'ویتنام',
    isNew: false,
    rating: 4.6,
    reviewCount: 22,
  },
  {
    id: 'ms-09',
    name: 'پیراهن آستین بلند کتان اسپرت Overshirt',
    brand: 'REPRESENT CLO',
    category: 'blouse',
    style: 'casual',
    price: 4100000,
    colors: [
      { name: 'آبی قطبی', hex: '#4A6FA5' },
      { name: 'طوسی ملانژ', hex: '#8A8D91' },
    ],
    sizes: ['M', 'L', 'XL'],
    images: [
      '/images/man-sport/1925217_ARCT_1.webp',
      '/images/man-sport/116791_ASHH_1.webp',
      '/images/man-sport/1975220_ASBL_1.webp',
    ],
    description: 'پیراهن آستین بلند با برش جکت کژوال. قابلیت پوشش روی تی‌شرت به عنوان لایه دوم (Overshirt) در روزهای بهاری و پاییزی.',
    material: '۱۰۰٪ کتان ضخیم شسته شده (Heavy Twill)',
    fit: 'ریلکس اورشرت (Overshirt Fit)',
    careInstructions: 'شستشو با آب سرد ۳۰ درجه، خشک کردن روی چوب‌لباسی.',
    features: [
      'پارچه کتان توئیل ضخیم با بافت استخوان‌دار',
      'دکمه‌های فلزی مات با حکاکی برند',
      'دو جیب بزرگ پاکتی روی سینه',
      'قابلیت استفاده به عنوان کت سبک یا پیراهن رو',
    ],
    sku: 'RP-OS-1925',
    countryOfOrigin: 'پرتغال',
    isNew: true,
    badge: 'کالکشن جدید',
    rating: 4.8,
    reviewCount: 18,
  },
  {
    id: 'ms-10',
    name: 'پیراهن اسپرت آستین کوتاه Pattern Casual',
    brand: 'KITH NYC',
    category: 'blouse',
    style: 'casual',
    price: 3100000,
    colors: [
      { name: 'طوسی روشن', hex: '#D3D3D3' },
      { name: 'آبی سرمه‌ای', hex: '#1D2A44' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/man-sport/shirt-2.webp',
      '/images/man-sport/shirt-3.webp',
      '/images/man-sport/shirt-4.webp',
    ],
    description: 'پیراهن آستین کوتاه تابستانی اسپرت با بافت با کیفیت و دکمه‌های بادوام. مناسب استایل کژوال خیابانی و روزهای گرم.',
    material: '۱۰۰٪ پنبه ویسکوز خنک',
    fit: 'کژوال مدرن (Modern Casual)',
    careInstructions: 'شستشو دستی یا ماشین دور کند با آب سرد.',
    features: [
      'پارچه ویسکوز پنبه‌ای فوق‌العاده خنک و ریزش‌دار',
      'یقه کوبایی شیک تابستانی (Camp Collar)',
      'دکمه‌های رزینی مقاوم با رنگ مات',
      'برش آزاد مناسب هوای گرم',
    ],
    sku: 'KT-PC-10',
    countryOfOrigin: 'ترکیه',
    isNew: false,
    rating: 4.7,
    reviewCount: 31,
  },
  {
    id: 'ms-11',
    name: 'پیراهن کتان آستین بلند Minimal Button-Down',
    brand: 'A.P.C. PARIS',
    category: 'blouse',
    style: 'minimal',
    price: 4500000,
    colors: [
      { name: 'سفید کلاسیک', hex: '#FAFAFA' },
      { name: 'مشکی زاغ', hex: '#111111' },
    ],
    sizes: ['M', 'L', 'XL'],
    images: [
      '/images/man-sport/shirt-5.webp',
      '/images/man-sport/shirt-6.webp',
      '/images/man-sport/T-shirt-3.webp',
    ],
    description: 'پیراهن آستین بلند تمیز و مینیمال با دوخت‌های ظریف فرانسه و پارچه مقاوم در برابر چروک برای استایل کژوال رسمی.',
    material: '۱۰۰٪ پنبه مصری بافت آکسفورد (Oxford Cotton)',
    fit: 'اسلیم رگولار (Slim Regular)',
    careInstructions: 'شستشو در ۳۰ درجه، اتوکشی با بخار در دمای متوسط.',
    features: [
      'بافت آکسفورد ۱۰۰٪ پنبه مصری با ماندگاری بسیار بالا',
      'دکمه‌های صدفی طبیعی با دوخت الیک محکم',
      'دوخت‌های بسیار ظریف فرانسوی در درزهای داخلی',
      'طراحی مینیمال پاریسی شیک و ماندگار',
    ],
    sku: 'APC-BD-11',
    countryOfOrigin: 'فرانسه',
    isNew: false,
    rating: 4.9,
    reviewCount: 27,
  },
];

export const MAN_SPORT_STYLES: StyleCategory[] = [
  {
    id: 'street',
    title: 'استریت ویر',
    englishTitle: 'STREETWEAR',
    tagline: 'جسور، پرانرژی و متناسب با فرهنگ خیابانی مدرن',
    image: '/images/man-sport/T-shirt-1.webp',
    accentColor: '#E04A24',
  },
  {
    id: 'casual',
    title: 'کژوال کاربردی',
    englishTitle: 'CASUAL',
    tagline: 'راحتی بی‌نظیر برای استفاده روزمره و فعالیت‌های شهری',
    image: '/images/man-sport/1925216_BONE_2.webp',
    accentColor: '#FF5A1F',
  },
  {
    id: 'sport',
    title: 'پریمیم اسپرت',
    englishTitle: 'SPORT',
    tagline: 'ترکیب تکنولوژی متریال ورزشی و استایل شیک',
    image: '/images/man-sport/118624_BLAC_1.webp',
    accentColor: '#2455FF',
  },
  {
    id: 'oversized',
    title: 'اورسایز مدرن',
    englishTitle: 'OVERSIZED',
    tagline: 'سلوئت‌های آزاد با تناسب اندام دقیق و مدرن',
    image: '/images/man-sport/1975203_BLAC_1.webp',
    accentColor: '#E04A24',
  },
  {
    id: 'minimal',
    title: 'مینیمال تمیز',
    englishTitle: 'MINIMAL',
    tagline: 'خطوط تمیز، رنگ‌های نود و جزییات فوق‌العاده باکیفیت',
    image: '/images/man-sport/116812_BLAC_1.webp',
    accentColor: '#FFFFFF',
  },
];

export const MAN_SPORT_BRANDS: BrandInfo[] = [
  { id: 'b1', name: 'Nike Sportswear', logoText: 'NIKE', country: 'USA', productCount: 42, image: '/images/man-sport/T-shirt-1.webp' },
  { id: 'b2', name: 'Adidas Originals', logoText: 'ADIDAS', country: 'GERMANY', productCount: 38, image: '/images/man-sport/1975203_BLAC_1.webp' },
  { id: 'b3', name: 'Puma Select', logoText: 'PUMA', country: 'GERMANY', productCount: 24, image: '/images/man-sport/118621_BLAC_1.webp' },
  { id: 'b4', name: 'Under Armour', logoText: 'UNDER ARMOUR', country: 'USA', productCount: 19, image: '/images/man-sport/118624_BLAC_1.webp' },
  { id: 'b5', name: 'New Balance', logoText: 'NEW BALANCE', country: 'USA', productCount: 31, image: '/images/man-sport/116812_BLAC_1.webp' },
  { id: 'b6', name: 'Stüssy', logoText: 'STÜSSY', country: 'USA', productCount: 15, image: '/images/man-sport/T-shirt-4.webp' },
  { id: 'b7', name: 'Carhartt WIP', logoText: 'CARHARTT WIP', country: 'USA', productCount: 22, image: '/images/man-sport/1925216_BONE_2.webp' },
  { id: 'b8', name: 'Represent Clo', logoText: 'REPRESENT', country: 'UK', productCount: 17, image: '/images/man-sport/1925217_ARCT_1.webp' },
];

export const BUILD_YOUR_FIT_STEPS = [
  {
    step: 1,
    title: 'STEP 01 — پایه استایل (Top)',
    subtitle: 'انتخاب لایه اصلی و خنک',
    productName: 'تی‌شرت اورسایز Street Heavyweight',
    brand: 'NIKE SPORTSWEAR',
    price: '۲٬۸۹۰٬۰۰۰ تومان',
    image: '/images/man-sport/T-shirt-1.webp',
    accent: '#E04A24',
    description: 'یک پایه تمیز و سنگین ۳۲۰ گرمی که فرم سرشانه‌ها را فوق‌العاده نشان می‌دهد.',
  },
  {
    step: 2,
    title: 'STEP 02 — لایه گرم رویی (Outerwear)',
    subtitle: 'اضافه کردن هودی یا کاپشن تکنیکال',
    productName: 'هودی کپچردار Heavy Fleece',
    brand: 'ADIDAS ORIGINALS',
    price: '۳٬۹۵۰٬۰۰۰ تومان',
    image: '/images/man-sport/1975203_BLAC_1.webp',
    accent: '#2455FF',
    description: 'لایه دوم گرم با پارچه دورس سه نخ کرک‌دار و کلاه دو لایه مقاوم.',
  },
  {
    step: 3,
    title: 'STEP 03 — تناسب پایین‌تنه (Pants)',
    subtitle: 'تکمیل استایل با شلوار کارگو اسلش',
    productName: 'شلوار اسلش جگر Tapered Cargo',
    brand: 'NEW BALANCE',
    price: '۳٬۲۰۰٬۰۰۰ تومان',
    image: '/images/man-sport/116812_BLAC_1.webp',
    accent: '#FF5A1F',
    description: 'شلوار کارگو مخروطی با کش انطباق‌پذیر و جیب‌های جانبی برای هارمونی کامل.',
  },
  {
    step: 4,
    title: 'STEP 04 — FIT COMPLETE',
    subtitle: 'استایل نهایی شما آماده است!',
    productName: 'پک استایل کامل Street Energy Fit',
    brand: 'MULTI-BRAND COMBO',
    price: '۱۰٬۰۴۰٬۰۰۰ تومان',
    image: '/images/man-sport/118624_BLAC_1.webp',
    accent: '#E04A24',
    description: 'ترکیب کامل ۳ تکه شامل تی‌شرت، هودی و شلوار اسلش با تخفیف ست ویژه.',
  },
];
