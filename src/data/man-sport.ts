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
      { name: 'خاکستری', hex: '#888888' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [
      '/images/man-sport/T-shirt-1.webp',
      '/images/man-sport/T-shirt-2.webp',
      '/images/man-sport/T-shirt-3.webp',
    ],
    description: 'تی‌شرت سنگین وزن ۳۲۰ گرمی پنبه شانه شده با کات اورسایز و افتاده روی شانه‌ها. ماندگاری فرم عالی پس از شستشوهای متوالی.',
    material: '۱۰۰٪ پنبه ارگانیک سنگین',
    fit: 'اورسایز کژوال (Drop Shoulder)',
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
    description: 'هودی دورس سه نخ کرک‌دار با جیب کانگورویی تقویت‌شده و کلاه دو لایه ضخیم مناسب استایل خیابانی.',
    material: '۸۰٪ پنبه سنگین، ۲۰٪ پلی‌استر مقاوم',
    fit: 'آزاد (Relaxed Fit)',
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
      { name: 'مشکی mat', hex: '#1A1A1A' },
      { name: 'سرمه‌ای کلاسیک', hex: '#0D1B2A' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/man-sport/118621_BLAC_1.webp',
      '/images/man-sport/118621_NAVY_1.webp',
      '/images/man-sport/118632_BROW_1.webp',
    ],
    description: 'سویشرت نیم زیپ اسپرت با پارچه تنفس‌پذیر دو لایه و زیپ ضدآب سفارشی. مناسب برای تمرین و روزمره.',
    material: '۹۰٪ پنبه ورزشی، ۱۰٪ الستان استرچ',
    fit: 'استاندارد اسپرت',
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
    description: 'کاپشن سبک بادگیر با لایه مقاوم در برابر نفوذ آب و باد، آستر توری تنفس‌پذیر و جیب‌های زیپ‌دار مگنتی.',
    material: '۱۰۰٪ نایلون تکنیکال ضدآب',
    fit: 'رگولار فیت فنی',
    isNew: true,
    badge: 'تکنولوژی لایه ضدآب',
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
      { name: 'خاکستری مایل به روشن', hex: '#9AA0A6' },
    ],
    sizes: ['M', 'L', 'XL', '2XL'],
    images: [
      '/images/man-sport/116812_BLAC_1.webp',
      '/images/man-sport/116812_BROW_1.webp',
      '/images/man-sport/116812_GHEA_1.webp',
    ],
    description: 'شلوار اسلش کارگو با دمپای کشی و جیب‌های جانبی پاکتی کاربردی. دارای کش کمر انطباق‌پذیر با بند قابل تنظیم.',
    material: '۹۵٪ پنبه کتان کش، ۵٪ اسپندکس',
    fit: 'مخروطی شیک (Tapered)',
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
    description: 'تی‌شرت استریت‌ویر با افکت سنگ‌شور وینتیج و چاپ سیلک برجسته با کیفیت بالا در پشت و جلوی لباس.',
    material: '۱۰۰٪ پنبه سنگ‌شور شده',
    fit: 'اورسایز خیابانی',
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
    description: 'دورس یقه گرد مینیمال با لوگوی گلدوزی شده کوچک روی سینه. تن‌خور بسیار تمیز و شیک برای استفاده روزمره.',
    material: '۱۰۰٪ پنبه فرانسوی دو نخ',
    fit: 'استاندارد مینیمال',
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
    description: 'تی‌شرت نرم با لمس پنبه‌ای خنک و جذب رطوبت بالا. عالی برای روزهای پرتحرک شهری.',
    material: '۷۰٪ پنبه، ۳۰٪ پلی‌استر های‌تک',
    fit: 'کژوال راحت',
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
    description: 'پیراهن آستین بلند با برش جکت کژوال. قابلیت پوشش روی تی‌شرت به عنوان لایه دوم (Overshirt).',
    material: '۱۰۰٪ کتان ضخیم شسته شده',
    fit: 'ریلکس اورشرت',
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
    description: 'پیراهن آستین کوتاه تابستانی اسپرت با بافت با کیفیت و دکمه‌های بادوام. مناسب استایل کژوال خیابانی.',
    material: '۱۰۰٪ پنبه ویسکوز خنک',
    fit: 'کژوال مدرن',
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
    description: 'پیراهن آستین بلند تمیز و مینیمال با دوخت‌های ظریف فرانسه و پارچه مقاوم در برابر چروک.',
    material: '۱۰۰٪ پنبه مصری بافت آکسفورد',
    fit: 'اسلیم رگولار',
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
    accentColor: '#E04A24', // Acid Lime
  },
  {
    id: 'casual',
    title: 'کژوال کاربردی',
    englishTitle: 'CASUAL',
    tagline: 'راحتی بی‌نظیر برای استفاده روزمره و فعالیت‌های شهری',
    image: '/images/man-sport/1925216_BONE_2.webp',
    accentColor: '#FF5A1F', // Hyper Orange
  },
  {
    id: 'sport',
    title: 'پریمیم اسپرت',
    englishTitle: 'SPORT',
    tagline: 'ترکیب تکنولوژی متریال ورزشی و استایل شیک',
    image: '/images/man-sport/118624_BLAC_1.webp',
    accentColor: '#2455FF', // Cobalt Blue
  },
  {
    id: 'oversized',
    title: 'اورسایز مدرن',
    englishTitle: 'OVERSIZED',
    tagline: 'سلوئت‌های آزاد با تناسب اندام دقیق و مدرن',
    image: '/images/man-sport/1975203_BLAC_1.webp',
    accentColor: '#E04A24', // Acid Lime
  },
  {
    id: 'minimal',
    title: 'مینیمال تمیز',
    englishTitle: 'MINIMAL',
    tagline: 'خطوط تمیز، رنگ‌های نود و جزییات فوق‌العاده باکیفیت',
    image: '/images/man-sport/116812_BLAC_1.webp',
    accentColor: '#FFFFFF', // Pure White
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
