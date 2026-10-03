export interface GravityProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  categoryFa: string;
  price: number; // in Tomans
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  colors?: string[];
  sizes?: string[];
  isNewArrival?: boolean;
  isFeatured?: boolean;
  description?: string;
  material?: string;
  fit?: string;
}

export interface GravityCategory {
  id: string;
  titleFa: string;
  titleEn: string;
  count: string;
  image: string;
  link: string;
}

export interface GravityStyle {
  id: string;
  titleFa: string;
  subtitleFa: string;
  image: string;
  tag: string;
}

export interface GravityLookItem {
  id: string;
  titleFa: string;
  price: number;
  image: string;
  category: string;
}

export interface GravityLook {
  id: string;
  titleFa: string;
  subtitleFa: string;
  mainImage: string;
  items: GravityLookItem[];
}

export const HERO_LEFT_IMAGES = [
  { id: '1', src: '/images/gravity/for-hero-section-1.png', alt: 'Gravity Hero Style 1' },
  { id: '2', src: '/images/gravity/product-1.webp', alt: 'Gravity Hero Style 2' },
  { id: '3', src: '/images/gravity/shirt-1.webp', alt: 'Gravity Hero Style 3' },
  { id: '4', src: '/images/gravity/product-3.webp', alt: 'Gravity Hero Style 4' },
];

export const HERO_RIGHT_IMAGES = [
  { id: '1', src: '/images/gravity/for-hero-section-2.png', alt: 'Gravity Hero Style 5' },
  { id: '2', src: '/images/gravity/product-2.webp', alt: 'Gravity Hero Style 6' },
  { id: '3', src: '/images/gravity/shirt-3.webp', alt: 'Gravity Hero Style 7' },
  { id: '4', src: '/images/gravity/for-hero-section-4.png', alt: 'Gravity Hero Style 8' },
];

export const GRAVITY_CATEGORIES: GravityCategory[] = [
  {
    id: 'suits',
    titleFa: 'کت و شلوار',
    titleEn: 'SUITS & SUIT SETS',
    count: '۲۴ مدل',
    image: '/images/gravity/product-1.webp',
    link: '#suits',
  },
  {
    id: 'blazers',
    titleFa: 'کت تک',
    titleEn: 'BLAZERS & JACKETS',
    count: '۱۸ مدل',
    image: '/images/gravity/product-3.webp',
    link: '#blazers',
  },
  {
    id: 'shirts',
    titleFa: 'پیراهن رسمی و روزمره',
    titleEn: 'SHIRTS',
    count: '۳۲ مدل',
    image: '/images/gravity/shirt-1.webp',
    link: '#shirts',
  },
  {
    id: 'trousers',
    titleFa: 'شلوار پارچه‌ای و جین',
    titleEn: 'TROUSERS & JEANS',
    count: '۲۸ مدل',
    image: '/images/gravity/product-5.webp',
    link: '#trousers',
  },
  {
    id: 'hoodies',
    titleFa: 'هودی و دورس',
    titleEn: 'HOODIES & SWEATSHIRTS',
    count: '۱۵ مدل',
    image: '/images/gravity/product-12.webp',
    link: '#hoodies',
  },
  {
    id: 'shoes',
    titleFa: 'کفش و لوفر',
    titleEn: 'SHOES & LOAFERS',
    count: '۱۲ مدل',
    image: '/images/gravity/shoes-1.webp',
    link: '#shoes',
  },
  {
    id: 'accessories',
    titleFa: 'اکسسوری و کراوات',
    titleEn: 'ACCESSORIES',
    count: '۴۰ مدل',
    image: '/images/gravity/acssory-1.webp',
    link: '#accessories',
  },
];

export const GRAVITY_PRODUCTS: GravityProduct[] = [
  {
    id: 'g-01',
    name: 'کت و شلوار سرمه‌ای ایتالیایی',
    brand: 'GRAVITY SELECT',
    category: 'suits',
    categoryFa: 'کت و شلوار',
    price: 9800000,
    originalPrice: 11200000,
    image: '/images/gravity/product-1.webp',
    hoverImage: '/images/gravity/product-2.webp',
    colors: ['سرمه‌ای', 'مشکی', 'طوسی'],
    sizes: ['48', '50', '52', '54'],
    isNewArrival: true,
    isFeatured: true,
    description: 'کت و شلوار رسمی با پارچه پشم مرینو ایتالیایی و دوخت تمام‌کاستوم برای استایل‌های فاخر.',
    material: '۱۰۰٪ پشم مرینو سوپر ۱۲۰',
    fit: 'اسلیم فیت مدرن',
  },
  {
    id: 'g-02',
    name: 'کت تک لینن طوسی ملانژ',
    brand: 'MASSIMO DUTTI',
    category: 'blazers',
    categoryFa: 'کت تک',
    price: 4900000,
    image: '/images/gravity/product-3.webp',
    hoverImage: '/images/gravity/product-4.webp',
    colors: ['طوسی', 'کرم'],
    sizes: ['48', '50', '52'],
    isNewArrival: true,
    isFeatured: true,
    description: 'کت تک تنفس‌پذیر لینن مناسب فصول گرم و استایل نیمه‌رسمی.',
    material: '۱۰۰٪ لینن خالص',
    fit: 'تیلورد فیت',
  },
  {
    id: 'g-03',
    name: 'پیراهن اکسفورد سفید کلاسیک',
    brand: 'ZARA MAN',
    category: 'shirts',
    categoryFa: 'پیراهن',
    price: 1850000,
    image: '/images/gravity/shirt-1.webp',
    hoverImage: '/images/gravity/shirt-2.webp',
    colors: ['سفید', 'آبی روشن'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNewArrival: true,
    isFeatured: true,
    description: 'پیراهن پنبه‌ای آکسفورد با یقه دقیق مناسب ست کردن زیر کت یا استایل تک.',
    material: '۱۰۰٪ پنبه شانه شده',
    fit: 'کلاسیک فیت',
  },
  {
    id: 'g-04',
    name: 'شلوار پارچه‌ای پیلی‌دار زغالی',
    brand: 'GRAVITY SELECT',
    category: 'trousers',
    categoryFa: 'شلوار',
    price: 2650000,
    image: '/images/gravity/product-5.webp',
    hoverImage: '/images/gravity/product-6.webp',
    colors: ['زغالی', 'مشکی'],
    sizes: ['40', '42', '44', '46'],
    isNewArrival: true,
    isFeatured: false,
    description: 'شلوار پارچه‌ای با تک‌پیلی جلویی و خط اتوی ماندگار برای وقار در پوشش.',
    material: 'پشم و فستونی ایتالیایی',
    fit: 'راسته مدرن',
  },
  {
    id: 'g-05',
    name: 'پیراهن کتان سرمه‌ای دکمه‌دار',
    brand: 'BOGGI MILANO',
    category: 'shirts',
    categoryFa: 'پیراهن',
    price: 2100000,
    image: '/images/gravity/shirt-3.webp',
    hoverImage: '/images/gravity/shirt-4.webp',
    colors: ['سرمه‌ای'],
    sizes: ['M', 'L', 'XL'],
    isNewArrival: true,
    isFeatured: true,
    description: 'پیراهن رسمی با ظاهری مات و دوخت دقیق در سرشانه‌ها.',
    material: 'پنبه مرسریزه',
    fit: 'اسلیم فیت',
  },
  {
    id: 'g-06',
    name: 'کت تک شش‌دکمه دوبل برستد',
    brand: 'HUGO BOSS',
    category: 'blazers',
    categoryFa: 'کت تک',
    price: 6400000,
    image: '/images/gravity/product-7.webp',
    hoverImage: '/images/gravity/product-8.webp',
    colors: ['سرمه‌ای تاریک'],
    sizes: ['50', '52', '54'],
    isNewArrival: true,
    isFeatured: true,
    description: 'کت تک شش‌دکمه کلاسیک انگلیسی مناسب جلسات مهم و قرار ملاقات‌های رسمی.',
    material: 'ترکیب پشم و ابریشم',
    fit: 'ریگولار فیت',
  },
  {
    id: 'g-07',
    name: 'هودی پنبه‌ای مشکی مینیمال',
    brand: 'GRAVITY LAB',
    category: 'hoodies',
    categoryFa: 'هودی و دورس',
    price: 2200000,
    image: '/images/gravity/product-12.webp',
    hoverImage: '/images/gravity/product-13.webp',
    colors: ['مشکی', 'طوسی مایل به سفید'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    isNewArrival: true,
    isFeatured: false,
    description: 'هودی سنگین وزن با بافت متراکم داخلی و ایستایی فوق‌العاده روی بدن.',
    material: '۱۰۰٪ پنبه ۳ نخ دورس',
    fit: 'اورسایز کنترل‌شده',
  },
  {
    id: 'g-08',
    name: 'کفش لوفر چرم طبیعی مشکی',
    brand: 'GRAVITY FOOTWEAR',
    category: 'shoes',
    categoryFa: 'کفش',
    price: 4200000,
    image: '/images/gravity/shoes-1.webp',
    hoverImage: '/images/gravity/shoes-2.webp',
    colors: ['مشکی', 'قهوه‌ای عسلی'],
    sizes: ['41', '42', '43', '44'],
    isNewArrival: true,
    isFeatured: true,
    description: 'کفش لوفر دست‌دوز با زیره چرمی مقاوم و راحتی بالا برای استفاده روزمره و رسمی.',
    material: 'چرم گاوی درجه یک',
    fit: 'استاندارد',
  },
  {
    id: 'g-09',
    name: 'کراوات ابریشمی طرح بافت سرمه‌ای',
    brand: 'GRAVITY ACCESSORIES',
    category: 'accessories',
    categoryFa: 'اکسسوری',
    price: 950000,
    image: '/images/gravity/acssory-1.webp',
    hoverImage: '/images/gravity/acssory-2.webp',
    colors: ['سرمه‌ای', 'شرابی'],
    sizes: ['تک سایز (۷.۵ سانتی‌متر)'],
    isNewArrival: false,
    isFeatured: true,
    description: 'کراوات دست‌دوز از ۱۰۰٪ ابریشم خالص با گره‌پذیری بسیار عالی.',
    material: '۱۰۰٪ ابریشم طبیعی',
    fit: 'عرض استاندارد',
  },
  {
    id: 'g-10',
    name: 'پیراهن راه‌راه آبی رسمی',
    brand: 'MANGO MAN',
    category: 'shirts',
    categoryFa: 'پیراهن',
    price: 1950000,
    image: '/images/gravity/shirt-5.webp',
    hoverImage: '/images/gravity/shirt-6.webp',
    colors: ['آبی/سفید'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNewArrival: false,
    isFeatured: false,
    description: 'پیراهن با خطوط باریک عمودی که استایل را کشیده‌تر و آراسته‌تر نشان می‌دهد.',
    material: 'پنبه مصر',
    fit: 'اسلیم فیت',
  },
  {
    id: 'g-11',
    name: 'دکمه‌کفت دست‌ساز نقره‌ای',
    brand: 'GRAVITY ACCESSORIES',
    category: 'accessories',
    categoryFa: 'اکسسوری',
    price: 820000,
    image: '/images/gravity/acssory-5.webp',
    hoverImage: '/images/gravity/acssory-6.webp',
    colors: ['نقره‌ای', 'مات'],
    sizes: ['تک سایز'],
    isNewArrival: false,
    isFeatured: false,
    description: 'دکمه‌سردست استیل ضدزنگ با آبکاری مقاوم برای مچ‌های فرانسوی.',
    material: 'استیل ۳۱۶L',
    fit: 'استاندارد',
  },
  {
    id: 'g-12',
    name: 'کت تک کشمیر نسکافه‌ای',
    brand: 'GRAVITY SELECT',
    category: 'blazers',
    categoryFa: 'کت تک',
    price: 5800000,
    image: '/images/gravity/product-14.webp',
    hoverImage: '/images/gravity/product-15.webp',
    colors: ['نسکافه‌ای', 'کرم'],
    sizes: ['48', '50', '52'],
    isNewArrival: true,
    isFeatured: true,
    description: 'کت تک لوکس با لمس نرم پارچه کشمیر مناسب پاییز و زمستان.',
    material: 'پشم و کشمیر',
    fit: 'تیلورد فیت',
  },
];

export const GRAVITY_STYLES: GravityStyle[] = [
  {
    id: 'formal',
    titleFa: 'استایل رسمی',
    subtitleFa: 'برای جلسات مهم، مراسم و موقعیت‌های تجاری خرد و کلان.',
    image: '/images/gravity/for-hero-section-1.png',
    tag: 'رسمی / Business',
  },
  {
    id: 'smart-casual',
    titleFa: 'استایل نیمه‌رسمی',
    subtitleFa: 'تعادل هوشمندانه میان وقار کت تک و راحتی شلوار کتان.',
    image: '/images/gravity/product-3.webp',
    tag: 'نیمه‌رسمی / Smart Casual',
  },
  {
    id: 'casual',
    titleFa: 'استایل روزمره',
    subtitleFa: 'کیفیت بالا در ساده‌ترین حالت؛ هودی، پیراهن کتان و جین.',
    image: '/images/gravity/product-12.webp',
    tag: 'روزمره / Casual',
  },
  {
    id: 'evening',
    titleFa: 'استایل مهمانی و شب',
    subtitleFa: 'پوشش‌های برگزیده برای درخشش در میهمانی‌های ویژه.',
    image: '/images/gravity/for-hero-section-2.png',
    tag: 'مهمانی / Black Tie',
  },
];

export const GRAVITY_COMPLETE_LOOK: GravityLook = {
  id: 'look-01',
  titleFa: 'استایل پیشنهادی فصل: جنتلمن معاصر',
  subtitleFa: 'ترکیبی متوازن از کت تک سرمه‌ای، پیراهن آکسفورد و اکسسوری ابریشمی.',
  mainImage: '/images/gravity/for-hero-section-1.png',
  items: [
    {
      id: 'g-01',
      titleFa: 'کت و شلوار سرمه‌ای ایتالیایی',
      price: 9800000,
      image: '/images/gravity/product-1.webp',
      category: 'کت و شلوار',
    },
    {
      id: 'g-03',
      titleFa: 'پیراهن اکسفورد سفید کلاسیک',
      price: 1850000,
      image: '/images/gravity/shirt-1.webp',
      category: 'پیراهن',
    },
    {
      id: 'g-09',
      titleFa: 'کراوات ابریشمی طرح بافت',
      price: 950000,
      image: '/images/gravity/acssory-1.webp',
      category: 'اکسسوری',
    },
    {
      id: 'g-08',
      titleFa: 'کفش لوفر چرم طبیعی مشکی',
      price: 4200000,
      image: '/images/gravity/shoes-1.webp',
      category: 'کفش',
    },
  ],
};

export const GRAVITY_BRANDS = [
  { name: 'MASSIMO DUTTI', country: 'Spain', note: 'مجموعه نیمه‌رسمی' },
  { name: 'ZARA MAN', country: 'Spain', note: 'طراحی معاصر' },
  { name: 'GRAVITY SELECT', country: 'Italy/Iran', note: 'کالکشن اختصاصی' },
  { name: 'HUGO BOSS', country: 'Germany', note: 'کت و شلوار رسمی' },
  { name: 'BOGGI MILANO', country: 'Italy', note: 'پوشاک کلاسیک' },
  { name: 'MANGO MAN', country: 'Spain', note: 'پیراهن و شلوار' },
];

export const GRAVITY_TRUST_POINTS = [
  {
    id: 'shipping',
    titleFa: 'ارسال به سراسر ایران',
    descFa: 'سفارش شما با بسته‌بندی ویژه به تمام شهرهای ایران ارسال می‌شود.',
    iconName: 'Truck',
  },
  {
    id: 'payment',
    titleFa: 'پرداخت امن بنکی',
    descFa: 'پرداخت آنلاین از طریق کلیه کارت‌های عضو شبکه شتاب با درگاه امن.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'exchange',
    titleFa: 'ضمانت تعویض سایز',
    descFa: 'امکان تعویض سایز و کالا تا ۷ روز پس از دریافت سفارش.',
    iconName: 'RefreshCw',
  },
  {
    id: 'support',
    titleFa: 'پشتیبانی اختصاصی',
    descFa: 'مشاوره استایل و پشتیبانی قبل و بعد از ثبت سفارش.',
    iconName: 'Headphones',
  },
];

export const GRAVITY_INSTAGRAM_POSTS = [
  { id: 'ig-1', image: '/images/gravity/product-1.webp', likes: '۱,۴۲۰', comments: '۸۴' },
  { id: 'ig-2', image: '/images/gravity/shirt-1.webp', likes: '۹۸۰', comments: '۴۲' },
  { id: 'ig-3', image: '/images/gravity/product-3.webp', likes: '۲,۱۵۰', comments: '۱۱۲' },
  { id: 'ig-4', image: '/images/gravity/for-hero-section-3.png', likes: '۱,۸۷0', comments: '۹۵' },
];
