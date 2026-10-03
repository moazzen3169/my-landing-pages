export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface WomanLuxProduct {
  id: string;
  name: string;
  subtitle?: string;
  slug: string;
  category: 'مانتو' | 'مانتو مجلسی' | 'مانتو روزمره' | 'شلوار' | 'کت' | 'اکسسوری' | 'پیراهن' | 'پالتو';
  price: number; // in Tomans
  formattedPrice: string;
  colors: ProductColor[];
  sizes: string[];
  images: string[]; // [Default, Hover, Detail/Gallery]
  description: string;
  material: string;
  fit: string;
  featured?: boolean;
  isNew?: boolean;
  badge?: string;
  careInstructions?: string;
  shippingInfo?: string;
}

export const WOMAN_LUX_PRODUCTS: WomanLuxProduct[] = [
  {
    id: 'wlux-01',
    name: 'کت تک پشمی ساختاریافته',
    subtitle: 'کت رسمی با برش معماری و پارچه پشم ایتالیایی',
    slug: 'structured-wool-blazer',
    category: 'کت',
    price: 8900000,
    formattedPrice: '۸,۹۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی زغالی', hex: '#111111' },
      { name: 'خاکستری تیره', hex: '#2A2A2A' },
      { name: 'کرم نود', hex: '#E2D9CC' }
    ],
    sizes: ['۳۶', '۳۸', '۴۰', '۴۲'],
    images: [
      '/images/woman-lux/jackest-coat-2.webp',
      '/images/woman-lux/jackest-coat-3.webp',
      '/images/woman-lux/jackest-coat-4.webp'
    ],
    description: 'کت تک زنانه دوخته‌شده از پارچه پشم مرینو ساختاریافته. این مدل با لبه‌های تیز، سرشانه ساختارمند و لایه داخلی ابریشمی، سیلوئتی ماندگار و مقتدر برای استایل‌های رسمی و نیمه‌رسمی ارائه می‌دهد.',
    material: '۸۵٪ پشم مرینو فوق‌العاده ظریف، ۱۵٪ ابریشم طبيعی. آستر: ۱۰٪ کوپرو ابریشمی.',
    fit: 'برش کلاسیک فرمال با سرشانه‌های ساختاریافته.',
    featured: true,
    isNew: true,
    badge: 'NEW ARRIVAL',
    careInstructions: 'خشکشویی تخصصی لباس‌های لوکس.',
    shippingInfo: 'ارسال رایگان اکسپرس همراه با کاور مخصوص کت.'
  },
  {
    id: 'wlux-02',
    name: 'پالتو بلند آستر ابریشم',
    subtitle: 'پالتو زمستانه بلند با یقه کشیده و فرم مینیمال',
    slug: 'silk-lined-long-coat',
    category: 'پالتو',
    price: 14200000,
    formattedPrice: '۱۴,۲۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی عمیق', hex: '#0B0B0B' },
      { name: 'کرم استخوانی', hex: '#DDD6C9' }
    ],
    sizes: ['۳۶', '۳۸', '۴۰'],
    images: [
      '/images/woman-lux/jackest-coat-5.webp',
      '/images/woman-lux/jackest-coat-6.webp',
      '/images/woman-lux/jackest-coat-7.webp'
    ],
    description: 'پالتوی بلند زمستانه با تراکم بالای پارچه پشم و کشمیر. آستر ابریشمی سبک و لطیف، حس گرما و لوکس بودن را در عین وزن سبک فراهم می‌سازد.',
    material: '۷۵٪ پشم بکر، ۲۵٪ کشمیر. آستر: ۱۰۰٪ ابریشم خالص.',
    fit: 'اورسایز کنترل‌شده با سقوط طبیعی روی بدن.',
    featured: true,
    isNew: true,
    badge: 'EDITORS PICK',
    careInstructions: 'فقط خشکشویی با مواد محافظ پشم.',
    shippingInfo: 'ارسال ایمن ویژه همراه با کاور چرمی برند.'
  },
  {
    id: 'wlux-03',
    name: 'کت چرم مدرن یقه ایستاده',
    subtitle: 'کت چرم طبیعی با برش مدرن و دکمه‌های مخفی',
    slug: 'modern-stand-collar-leather-jacket',
    category: 'کت',
    price: 18500000,
    formattedPrice: '۱۸,۵۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی مات', hex: '#161616' }
    ],
    sizes: ['۳۶', '۳۸', '۴۰'],
    images: [
      '/images/woman-lux/jackest-coat-8.webp',
      '/images/woman-lux/jackest-coat-9.webp',
      '/images/woman-lux/jackest-coat-10.webp'
    ],
    description: 'کت چرم طبیعی گوسفندی فوق‌العاده نرم با عمل‌آوری مینیمال. دکمه‌های مخفی و یقه ایستاده ظاهری مدرن و آوانگارد ایجاد کرده است.',
    material: '۱۰۰٪ چرم طبیعی خالص گوسفندی. آستر ساتن مات.',
    fit: 'برش مستقیم اندامی.',
    featured: true,
    isNew: false,
    careInstructions: 'نگهداری و تمیزکاری توسط متخصص چرم.',
    shippingInfo: 'تحویل اختصاصی همراه با بسته‌بندی هاردباکس.'
  },
  {
    id: 'wlux-04',
    name: 'پالتو فوتر یقه پهن',
    subtitle: 'پالتو فوتر کلاسیک با یقه‌های پهن کشیده',
    slug: 'broad-lapel-melton-coat',
    category: 'پالتو',
    price: 11800000,
    formattedPrice: '۱۱,۸۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی', hex: '#111111' },
      { name: 'شرمه‌ای خنثی', hex: '#524F4A' }
    ],
    sizes: ['۳۶', '۳۸', '۴۰', '۴۲'],
    images: [
      '/images/woman-lux/jackest-coat-11.webp',
      '/images/woman-lux/jackest-coat-12.webp',
      '/images/woman-lux/jackest-coat-13.webp'
    ],
    description: 'پالتو فوتر سنگین با فرم کلاسیک مد روز. یقه‌های برگردان پهن و جیب‌های فیلتابی ظاهری باشکوه و در عین حال شیک ایجاد می‌کنند.',
    material: '۹۰٪ پشم فوتر سنگین، ۱۰٪ نایلون تقویت‌کننده.',
    fit: 'برش آزاد و کشیده.',
    featured: true,
    isNew: true,
    careInstructions: 'خشکشویی تخصصی.',
    shippingInfo: 'ارسال رایگان به سراسر ایران.'
  },
  {
    id: 'wlux-05',
    name: 'مانتو کتی مینیمال دو طرفه',
    subtitle: 'مانتو کتی با دکمه‌دوزی جفت و خطوط تمیز',
    slug: 'minimal-double-breasted-blazer-coat',
    category: 'مانتو',
    price: 7900000,
    formattedPrice: '۷,۹۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی', hex: '#111111' },
      { name: 'کرم روشن', hex: '#EBE5D9' }
    ],
    sizes: ['۳۶', '۳۸', '۴۰', '۴۲'],
    images: [
      '/images/woman-lux/jackest-coat-14.webp',
      '/images/woman-lux/jackest-coat-15.webp',
      '/images/woman-lux/jackest-coat-16.webp'
    ],
    description: 'مانتو کتی شیک و مینیمال مناسب برای محیط‌های رسمی و روزمره با کیفیت دوخت استثنایی و دکمه‌های بافت‌دار طبیعی.',
    material: '۷۰٪ کرپ پشمی، ۳۰٪ ویسکوز درجه یک.',
    fit: 'برش مستقیم معاصر.',
    featured: true,
    isNew: false,
    careInstructions: 'اتوکشی با دمای پایین و خشکشویی.',
    shippingInfo: 'ارسال سریع تهران و شهرستان‌ها.'
  },
  {
    id: 'wlux-06',
    name: 'کت تک کرپ مشکی',
    subtitle: 'کت کرپ نخی مشکی با برش دقیق اندامی',
    slug: 'black-crepe-tailored-blazer',
    category: 'کت',
    price: 6800000,
    formattedPrice: '۶,۸۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی خالص', hex: '#0B0B0B' }
    ],
    sizes: ['۳۶', '۳۸', '۴۰'],
    images: [
      '/images/woman-lux/jackest-coat-17.webp',
      '/images/woman-lux/jackest-coat-18.webp',
      '/images/woman-lux/jackest-coat-19.webp'
    ],
    description: 'کت تک کرپ مشکی با سقوط بسیار زیبای پارچه. مناسب برای ست کردن با شلوار یا پیراهن‌های فرمال.',
    material: '۱۰۰٪ کرپ ژورژت نخی سنگین.',
    fit: 'برش متناسب با فرم بدن.',
    featured: false,
    isNew: true,
    careInstructions: 'خشکشویی توصیه می‌شود.',
    shippingInfo: 'ارسال رایگان پیک تهران.'
  },
  {
    id: 'wlux-07',
    name: 'پالتو پشمی اورسایز معاصر',
    subtitle: 'پالتو بلند پشمی با جیب‌های بزرگ ساختاریافته',
    slug: 'contemporary-oversized-wool-coat',
    category: 'پالتو',
    price: 13500000,
    formattedPrice: '۱۳,۵۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی', hex: '#111111' },
      { name: 'خاکستری فیلی', hex: '#63656A' }
    ],
    sizes: ['۳۶', '۳۸', '۴۰'],
    images: [
      '/images/woman-lux/jackest-coat-20.webp',
      '/images/woman-lux/jackest-coat-21.webp',
      '/images/woman-lux/jackest-coat-22.webp'
    ],
    description: 'پالتوی اورسایز مدرن الهام‌گرفته از استایل‌های مینیمال اروپایی. دارای آستین‌های رگلان و فرم آزاد.',
    material: '۸۰٪ پشم بکر، ۲۰٪ پلی‌آمید ساختاری.',
    fit: 'اورسایز راحت.',
    featured: true,
    isNew: false,
    careInstructions: 'خشکشویی تخصصی.',
    shippingInfo: 'ارسال همراه با جعبه هدیه مخصوص برند.'
  },
  {
    id: 'wlux-08',
    name: 'شومیز ابریشم لخت مینیمال',
    subtitle: 'شومیز آستین بلند از ابریشم کرپ دوشین',
    slug: 'fluid-silk-crepe-blouse',
    category: 'پیراهن',
    price: 5400000,
    formattedPrice: '۵,۴۰۰,۰۰۰ تومان',
    colors: [
      { name: 'سفید عاجی', hex: '#F7F5F0' },
      { name: 'مشکی', hex: '#111111' }
    ],
    sizes: ['۳۶', '۳۸', '۴۰', '۴۲'],
    images: [
      '/images/woman-lux/womens-t-shirts-1.webp',
      '/images/woman-lux/womens-t-shirts-2.webp',
      '/images/woman-lux/womens-t-shirts-3.webp'
    ],
    description: 'شومیز ابریشمی با بافت نرم و درخشش فوق‌العاده ملایم. دارای مچ‌های ظریف و دکمه‌های صدف طبیعی.',
    material: '۱۰۰٪ ابریشم خالص کرپ دوشین.',
    fit: 'برش آزاد و روان.',
    featured: true,
    isNew: true,
    badge: 'ESSENTIAL',
    careInstructions: 'شستشوی دستی با آب سرد یا خشکشویی.',
    shippingInfo: 'ارسال سریع رایگان.'
  },
  {
    id: 'wlux-09',
    name: 'تاپ ساتن یقه گرد لوکس',
    subtitle: 'تاپ مینیمال ساتن ابریشم برای لایه‌بندی',
    slug: 'minimal-satin-top',
    category: 'پیراهن',
    price: 3800000,
    formattedPrice: '۳,۸۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی', hex: '#111111' },
      { name: 'کرم نود', hex: '#EAE1D5' }
    ],
    sizes: ['۳۶', '۳۸', '۴۰'],
    images: [
      '/images/woman-lux/womens-t-shirts-4.webp',
      '/images/woman-lux/womens-t-shirts-5.webp',
      '/images/woman-lux/womens-t-shirts-6.webp'
    ],
    description: 'تاپ مینیمال ساتن مناسب برای پوشیدن زیر کت‌های تک یا به صورت مجزا در مناسبت‌های خاص.',
    material: '۹۲٪ ساتن ابریشم، ۸٪ الاستان برای انعطاف.',
    fit: 'برش استاندارد شیک.',
    featured: false,
    isNew: true,
    careInstructions: 'شستشوی دستی نازک.',
    shippingInfo: 'ارسال فوری.'
  },
  {
    id: 'wlux-10',
    name: 'بلوز پنبه ارگانیک بوزی',
    subtitle: 'بلوز آستین کوتاه با جرسی سنگین ۳۰۰ گرمی',
    slug: 'heavyweight-organic-cotton-top',
    category: 'پیراهن',
    price: 2900000,
    formattedPrice: '۲,۹۰۰,۰۰۰ تومان',
    colors: [
      { name: 'سفید شفاف', hex: '#FFFFFF' },
      { name: 'مشکی مات', hex: '#111111' }
    ],
    sizes: ['۳۶', '۳۸', '۴۰', '۴۲'],
    images: [
      '/images/woman-lux/womens-t-shirts-7.webp',
      '/images/woman-lux/womens-t-shirts-8.webp',
      '/images/woman-lux/womens-t-shirts-9.webp'
    ],
    description: 'بلوز پنبه‌ای سنگین با ساختار مستحکم و یقه کشبافت. ایده‌آل برای استایل‌های روزمره استودیو.',
    material: '۱۰۰٪ پنبه ارگانیک شانه شده ۳۰۰GSM.',
    fit: 'برش جعبه‌ای (Boxy Fit).',
    featured: false,
    isNew: false,
    careInstructions: 'شستشو در ماشین با دمای ۳۰ درجه.',
    shippingInfo: 'ارسال پیشتاز به کل کشور.'
  },
  {
    id: 'wlux-11',
    name: 'شومیز دکمه‌دار مینیمال',
    subtitle: 'شومیز مدرن با یقه کوتاه و پلاک مخفی',
    slug: 'minimal-button-down-shirt',
    category: 'پیراهن',
    price: 4200000,
    formattedPrice: '۴,۲۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی', hex: '#111111' },
      { name: 'سفید خالص', hex: '#FAFAFA' }
    ],
    sizes: ['۳۶', '۳۸', '۴۰', '۴۲'],
    images: [
      '/images/woman-lux/womens-t-shirts-10.webp',
      '/images/woman-lux/womens-t-shirts-11.webp',
      '/images/woman-lux/womens-t-shirts-12.webp'
    ],
    description: 'شومیز دکمه‌دار نخی با فرم کشیده. دکمه‌های مخفی زیر پلاک، ظاهری کاملاً یکدست و مدرن ایجاد کرده‌اند.',
    material: '۱۰۰٪ پوپلین پنبه مصری.',
    fit: 'برش راستای مستقیم.',
    featured: true,
    isNew: true,
    careInstructions: 'اتوکشی بخار یا خشکشویی.',
    shippingInfo: 'ارسال اکسپرس.'
  },
  {
    id: 'wlux-12',
    name: 'بلوز جرسی آستین بلند معاصر',
    subtitle: 'بلوز نرم نخی با یقه گرد کشیده',
    slug: 'long-sleeve-jersey-top',
    category: 'پیراهن',
    price: 3200000,
    formattedPrice: '۳,۲۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی', hex: '#111111' },
      { name: 'زغالی', hex: '#333333' }
    ],
    sizes: ['۳۶', '۳۸', '۴۰'],
    images: [
      '/images/woman-lux/womens-t-shirts-13.webp',
      '/images/woman-lux/womens-t-shirts-14.webp',
      '/images/woman-lux/womens-t-shirts-15.webp',
      '/images/woman-lux/womens-t-shirts-16.webp'
    ],
    description: 'بلوز آستین بلند جرسی بسیار باکیفیت و تنفس‌پذیر برای استفاده روزانه تحت مانتو یا کت.',
    material: '۹۵٪ پنبه سوپیما، ۵٪ الاستان.',
    fit: 'برش راحتی فیت.',
    featured: false,
    isNew: false,
    careInstructions: 'شستشوی ملایم ماشین.',
    shippingInfo: 'ارسال با پست پیشتاز.'
  }
];

export interface ScrollSectionProduct {
  id: string;
  stepNumber: string;
  categoryTitle: string;
  name: string;
  scrollTitle?: string;
  scrollSummary?: string;
  price: number;
  formattedPrice: string;
  image: string;
  secondaryImages: string[];
  description: string;
  details: string;
  sizes: string[];
  colors: ProductColor[];
}

export const SCROLL_SECTION_PRODUCTS: ScrollSectionProduct[] = [
  {
    id: 'scroll-01',
    stepNumber: '۰۱ / ۰۴',
    categoryTitle: 'مانتو مجلسی — Evening Collection',
    name: 'مانتو ابریشم ساتی نوآر',
    scrollTitle: 'وقار و خیاطی فاخر',
    scrollSummary: 'تلفیقی هوشمندانه از پارچه ابریشم سنگین و برش‌های هندسی آوانگارد برای شب‌های ماندگار.',
    price: 9800000,
    formattedPrice: '۹,۸۰۰,۰۰۰ تومان',
    image: '/images/woman-lux/for-scrol-section-(1).webp',
    secondaryImages: [
      '/images/woman-lux/for-scrol-section-(1).webp',
      '/images/woman-lux/jackest-coat-2.webp',
      '/images/woman-lux/jackest-coat-3.webp'
    ],
    description: 'مانتو مجلسی فاخر با بافت ابریشمی و تزئینات دست‌دوز مینیمال. فرم آوانگارد این اثر، تلفیقی است از وقار کلاسیک و جسارت مد معاصر.',
    details: '۱۰۰٪ ابریشم خالص ژاپنی | لایه داخلی ساتن نرم | برش اختصاصی استودیو نوآر',
    sizes: ['۳۶', '۳۸', '۴۰'],
    colors: [{ name: 'مشکی نوآر', hex: '#0B0B0B' }]
  },
  {
    id: 'scroll-02',
    stepNumber: '۰۲ / ۰۴',
    categoryTitle: 'پالتو زمستانه — Atelier Tailoring',
    name: 'پالتو پشم و کشمیر معماری',
    scrollTitle: 'معماری خطوط و فرم',
    scrollSummary: 'ساختار محکم سرشانه‌ها و ترکیب پشم ایتالیایی با کشمیر برای ایجاد سیلوئتی مقتدر.',
    price: 15400000,
    formattedPrice: '۱۵,۴۰۰,۰۰۰ تومان',
    image: '/images/woman-lux/for-scrol-section-(2).webp',
    secondaryImages: [
      '/images/woman-lux/for-scrol-section-(2).webp',
      '/images/woman-lux/jackest-coat-5.webp',
      '/images/woman-lux/jackest-coat-6.webp'
    ],
    description: 'پالتوی سنگین پشمی با سرشانه‌های تراشیده و یقه‌های کشیده. طراحی شده برای ساختن ایستایی مقتدرانه و گرمای بی‌نظیر.',
    details: '۸۰٪ پشم بکر ایتالیا، ۲۰٪ کشمیر | آستر کامل ابریشم | دکمه‌های بوفالو',
    sizes: ['۳۶', '۳۸', '۴۰', '۴۲'],
    colors: [{ name: 'مشکی زغالی', hex: '#161616' }, { name: 'استخوانی', hex: '#DED7CD' }]
  },
  {
    id: 'scroll-03',
    stepNumber: '۰۳ / ۰۴',
    categoryTitle: 'پیراهن و شومیز — Modern Fluidity',
    name: 'پیراهن فرمال ساتن مشکی',
    scrollTitle: 'سیالیت و درخشش ملایم',
    scrollSummary: 'حرکت روان ساتن ابریشمی روی بدن با ظرافت بی‌نظیر در دوخت و فرم مینیمال.',
    price: 7600000,
    formattedPrice: '۷,۶۰۰,۰۰۰ تومان',
    image: '/images/woman-lux/for-scrol-section-(3).webp',
    secondaryImages: [
      '/images/woman-lux/for-scrol-section-(3).webp',
      '/images/woman-lux/womens-t-shirts-1.webp',
      '/images/woman-lux/womens-t-shirts-2.webp'
    ],
    description: 'پیراهن فرمال با درخشش ملایم ساتن ابریشم. سقوط روان پارچه بر روی فرم بدن، ظاهری باشکوه و در عین حال کاملاً مینیمال ایجاد می‌کند.',
    details: '۹۵٪ ساتن ابریشم سنگین | برش انحصاری | خطوط تمیز بدون دکمه رو',
    sizes: ['۳۶', '۳۸', '۴۰'],
    colors: [{ name: 'مشکی عمیق', hex: '#0A0A0A' }]
  },
  {
    id: 'scroll-04',
    stepNumber: '۰۴ / ۰۴',
    categoryTitle: 'کت روزمره — Essential Outerwear',
    name: 'کت ساختاریافته معاصر',
    scrollTitle: 'ظرافت روزمره معاصر',
    scrollSummary: 'پوششی همه‌کاره با خطوط تمیز و دوخت سفارشی برای لایه‌بندی مدرن استایل‌های شهری.',
    price: 8900000,
    formattedPrice: '۸,۹۰۰,۰۰۰ تومان',
    image: '/images/woman-lux/for-scrol-section-(4).webp',
    secondaryImages: [
      '/images/woman-lux/for-scrol-section-(4).webp',
      '/images/woman-lux/jackest-coat-17.webp',
      '/images/woman-lux/jackest-coat-18.webp'
    ],
    description: 'کت تک مدرن برای استایل‌های لایه‌ای روزمره. ترکیبی متوازن از راحتی، دقت در الگوسازی و ظرافت خیاطی سفارشی.',
    details: '۱۰۰٪ کرپ نخی پشمی | جیب‌های مخفی جانب | لبه‌های دست‌دوز',
    sizes: ['۳۶', '۳۸', '۴۰', '۴۲'],
    colors: [{ name: 'مشکی', hex: '#111111' }]
  }
];

export const CATEGORIES_LIST = [
  { id: 'all', title: 'همه محصولات' },
  { id: 'کت', title: 'کت' },
  { id: 'مانتو', title: 'مانتو' },
  { id: 'پالتو', title: 'پالتو' },
  { id: 'پیراهن', title: 'پیراهن' },
  { id: 'شلوار', title: 'شلوار' },
  { id: 'اکسسوری', title: 'اکسسوری' }
];
