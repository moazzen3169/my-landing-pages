import { Product, Look, LookbookSlide } from '../types';

export const NOIRE_PRODUCTS_FA: Product[] = [
  {
    id: 'noire-01',
    name: 'کت تک ارکیتکت',
    slug: 'the-architect-blazer',
    category: 'blazers',
    price: 289,
    currency: 'EUR',
    colors: [
      { name: 'ذغالی', hex: '#2B2B2B', image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png' },
      { name: 'مشکی کلاسیک', hex: '#111111', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png'
    ],
    description: 'کت تک باوقار و ساختاریافته، دوخته‌شده از ترکیب پشم خالص ایتالیایی. طراحی‌شده برای سیلوئت معاصر از دیدارهای روزانه تا مراسم شبانه.',
    material: '۶۸٪ پشم خالص، ۲۸٪ پلی‌استر، ۴٪ الاستان. آستر: ۱۰۰٪ ابریشم کوپرو.',
    fit: 'برش آزاد ساختاریافته با سرشانه‌های مشخص.',
    featured: true,
    isNew: true,
    badge: 'ضروری فصل',
    rating: 4.9,
    reviewCount: 38,
    careInstructions: 'خشکشویی تخصصی. اتوکشی ملایم. نگهداری روی چوب‌لباسی ساختاریافته.',
    shippingInfo: 'ارسال اکسپرس ۲ الی ۴ روز کاری. بسته‌بندی فاخر نوآر.'
  },
  {
    id: 'noire-02',
    name: 'پیراهن آکسفورد بیسیک',
    slug: 'the-essential-oxford-shirt',
    category: 'shirts',
    price: 129,
    currency: 'EUR',
    colors: [
      { name: 'سفید عاجی', hex: '#FFFFFF', image: '/images/Men-shirts/g-star-waffle-henley-relaxed-t-shirt-white.png' },
      { name: 'آبی آسمانی', hex: '#B0C4DE', image: '/images/Men-shirts/g-star-lash-t-shirt-light-blue.png' },
      { name: 'مشکی انیکس', hex: '#181818', image: '/images/Men-shirts/g-star-lash-t-shirt-black.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-waffle-henley-relaxed-t-shirt-white.png',
      '/images/Men-shirts/g-star-lash-t-shirt-light-blue.png',
      '/images/Men-shirts/g-star-lash-t-shirt-black.png'
    ],
    description: 'دوخته‌شده از کتان کج‌راه مصری با الیاف بلند؛ ارائه‌دهنده حس لمس خنک، بافت آهاردار و تنفس‌پذیری فوق‌العاده.',
    material: '۱۰۰٪ پنبه ارگانیک مصری الیاف بلند',
    fit: 'برش راسته معاصر با دوخت فرانسوی و دکمه‌های صدف طبیعی.',
    featured: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 52
  },
  {
    id: 'noire-03',
    name: 'شلوار پشمی مخروطی',
    slug: 'the-tapered-wool-trouser',
    category: 'trousers',
    price: 159,
    currency: 'EUR',
    colors: [
      { name: 'ذغالی', hex: '#2B2B2B', image: '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png' },
      { name: 'سفید استخوانی', hex: '#EAE6DF', image: '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png',
      '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png'
    ],
    description: 'شلوار تک‌پیلی دوخته‌شده از پشم استوایی سبک با انعطاف‌پذیری ملایم برای حرکتی روان و خط اتوی بی‌نقص.',
    material: '۹۶٪ پشم ایتالیایی، ۴٪ الاستان',
    fit: 'فاق بلند، مخروطی ظریف تا دمپای تمیز.',
    featured: true,
    isNew: true,
    rating: 4.7,
    reviewCount: 24
  },
  {
    id: 'noire-04',
    name: 'تی‌شرت سنگین استودیو',
    slug: 'the-heavyweight-studio-tee',
    category: 't-shirts',
    price: 69,
    currency: 'EUR',
    colors: [
      { name: 'سفید عاجی', hex: '#F0ECE1', image: '/images/Men-shirts/g-star-ductsoon-relaxed-t-shirt-white.png' },
      { name: 'مشکی عمیق', hex: '#111111', image: '/images/Men-shirts/g-star-base-s-t-shirt-black.png' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-ductsoon-relaxed-t-shirt-white.png',
      '/images/Men-shirts/g-star-base-s-t-shirt-black.png'
    ],
    description: 'پارچه تریکو سنگین ۳۰۰ گرمی با افت ایستایی فوق‌العاده که فرم جعبه‌ای و مدرن خود را در تمام روز حفظ می‌کند.',
    material: '۱۰۰٪ پنبه ارگانیک سنگین شانه شده',
    fit: 'برش آزاد لش با سرشانه افتاده.',
    featured: false,
    isNew: false,
    rating: 5.0,
    reviewCount: 61
  },
  {
    id: 'noire-05',
    name: 'اورشرت پشمی ساختاریافته',
    slug: 'the-structured-wool-overshirt',
    category: 'overshirts',
    price: 179,
    currency: 'EUR',
    colors: [
      { name: 'ماسه سنگ', hex: '#C2B6A2', image: '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png' },
      { name: 'اسپرسو', hex: '#3B2F2F', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png',
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png'
    ],
    description: 'لایه‌ای کاربردی برای فصل‌های انتقالی با دکمه‌های مخفی از جنس شاخ طبیعی و جیب‌های پاکتی سینه.',
    material: '۷۰٪ پشم ملتون بازیافتی، ۳۰٪ پلی‌آمید',
    fit: 'آزاد و مناسب لایه‌بندی با لبه پایینی راسته.',
    featured: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 19
  },
  {
    id: 'noire-06',
    name: 'کت و شلوار دوخته‌شده مدرن',
    slug: 'the-modern-tailored-suit',
    category: 'suits',
    price: 495,
    currency: 'EUR',
    colors: [
      { name: 'مشکی انیکس', hex: '#111111', image: '/images/banners/Group-242.jpg' },
      { name: 'گرافیت', hex: '#3A3B3C', image: '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/banners/Group-242.jpg',
      '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png'
    ],
    description: 'کت و شلوار دو تکه شبانه دوخته‌شده از پشم مرینوس Super 120s ایتالیا با برگردان‌های ساتن ابریشمی.',
    material: '۱۰۰٪ پشم خالص مرینوس Super 120s ایتالیا',
    fit: 'برش اندامی مدرن با شانه‌های طبیعی.',
    featured: true,
    isNew: true,
    badge: 'ادیتوریال',
    rating: 4.9,
    reviewCount: 15
  },
  {
    id: 'noire-07',
    name: 'بافت کشمیر مینیمال',
    slug: 'the-minimal-cashmere-knit',
    category: 'knitwear',
    price: 220,
    currency: 'EUR',
    colors: [
      { name: 'جو دوسر', hex: '#DCD4C5', image: '/images/men-hoodies/g-star-logo-sweater-grey.png' },
      { name: 'ذغالی', hex: '#2B2B2B', image: '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-grey.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-logo-sweater-grey.png',
      '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-grey.png'
    ],
    description: 'بافت یقه گرد فوق‌العاده نرم از کشمیر درجه یک مغولستان با جزییات کشباف بدون دوخت.',
    material: '۱۰۰٪ کشمیر درجه یک مغولستان',
    fit: 'برش کلاسیک استاندارد.',
    featured: false,
    isNew: false,
    rating: 5.0,
    reviewCount: 42
  },
  {
    id: 'noire-08',
    name: 'بارانی مینیمالیست',
    slug: 'the-minimalist-trench-jacket',
    category: 'jackets',
    price: 349,
    currency: 'EUR',
    colors: [
      { name: 'سنگی نود', hex: '#8F8B82', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png' },
      { name: 'مشکی نیمه‌شب', hex: '#0B0B0B', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png',
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png'
    ],
    description: 'پالتو گاباردین ضدآب با دکمه‌های مخفی و یقه نوک‌تیز تیز و ساختاریافته.',
    material: '۱۰۰٪ گاباردین کتان ضدآب',
    fit: 'سیلوئت تمیز و آزاد.',
    featured: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 11
  },
  {
    id: 'noire-09',
    name: 'هودی سنگین دورس',
    slug: 'the-heavy-loopback-hoodie',
    category: 'hoodies',
    price: 119,
    currency: 'EUR',
    colors: [
      { name: 'خاکستری سیمانی', hex: '#A3A3A3', image: '/images/men-hoodies/g-star-premium-core-hooded-sweater-grey.png' },
      { name: 'مشکی خالص', hex: '#111111', image: '/images/men-hoodies/g-star-core-half-zip-sweat-black.png' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-hooded-sweater-grey.png',
      '/images/men-hoodies/g-star-core-half-zip-sweat-black.png'
    ],
    description: 'دورس ۴۸۰ گرمی پنبه ارگانیک با کلاه دو لایه و جیب کانگورویی یکپارچه.',
    material: '۱۰۰٪ پنبه دورس ارگانیک سنگین',
    fit: 'برش معماری اندکی لش.',
    featured: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 31
  },
  {
    id: 'noire-10',
    name: 'شلوار کتان پیلی‌دار',
    slug: 'the-relaxed-pleated-chino',
    category: 'trousers',
    price: 139,
    currency: 'EUR',
    colors: [
      { name: 'کرم سنگریزه‌ای', hex: '#D5CCBB', image: '/images/Men-panets/g-star-rovic-zip-3d-regular-tapered-pants-brown (1).png' },
      { name: 'زیتونی شسته شده', hex: '#555D50', image: '/images/Men-panets/g-star-utility-loose-cargo-pants-medium-blue.png' }
    ],
    sizes: ['46', '48', '50', '52'],
    images: [
      '/images/Men-panets/g-star-rovic-zip-3d-regular-tapered-pants-brown (1).png',
      '/images/Men-panets/g-star-utility-loose-cargo-pants-medium-blue.png'
    ],
    description: 'کتان کج‌راه با تراکم بالا و پایان شستشوی سنگ‌شور با دو پیلی جلو.',
    material: '۱۰۰٪ کتان کج‌راه ژاپنی',
    fit: 'پاچه عریض با مخروطی نرم در مچ پا.',
    featured: false,
    isNew: false,
    rating: 4.7,
    reviewCount: 29
  },
  {
    id: 'noire-11',
    name: 'کت تک تاکسیدو شب',
    slug: 'the-wool-evening-dinner-jacket',
    category: 'blazers',
    price: 329,
    currency: 'EUR',
    colors: [
      { name: 'سورمه‌ای نیمه‌شب', hex: '#111827', image: '/images/men-hoodies/g-star-old-skool-crew-sweat-long-sleeve-dark-blue.png' },
      { name: 'مشکی جت', hex: '#0B0B0B', image: '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/men-hoodies/g-star-old-skool-crew-sweat-long-sleeve-dark-blue.png',
      '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png'
    ],
    description: 'کت تک رسمی یقه آرشال با تزئینات ابریشم ساتن و جزییات دست‌دوز.',
    material: '۹۲٪ پشم خالص، ۸٪ ابریشم',
    fit: 'سیلوئت رسمی ساختاریافته اندامی.',
    featured: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 18
  },
  {
    id: 'noire-12',
    name: 'کیف توت چرم ایتالیایی',
    slug: 'the-italian-leather-tote-bag',
    category: 'accessories',
    price: 249,
    currency: 'EUR',
    colors: [
      { name: 'مشکی مات', hex: '#181818', image: '/images/banners/Group-242.jpg' }
    ],
    sizes: ['تک سایز'],
    images: [
      '/images/banners/Group-242.jpg'
    ],
    description: 'کیف چرم گاو طبیعی دباغی‌شده گیاهی با قفل مگنتی و محفظه ضربه‌گیر لپ‌تاپ.',
    material: '۱۰۰٪ چرم طبیعی توسكانی ایتالیا',
    fit: 'ابعاد ۳۸ × ۴۲ × ۱۲ سانتی‌متر.',
    featured: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 57
  },
  {
    id: 'noire-13',
    name: 'پیراهن ابریشم مینیمال',
    slug: 'the-minimal-silk-dress-shirt',
    category: 'shirts',
    price: 189,
    currency: 'EUR',
    colors: [
      { name: 'ابریشم عاجی', hex: '#F5F5F0', image: '/images/Men-shirts/g-star-structured-tweeter-grandad-t-shirt-white.png' },
      { name: 'ابریشم مشکی', hex: '#111111', image: '/images/Men-shirts/g-star-lash-t-shirt-dark-blue.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-structured-tweeter-grandad-t-shirt-white.png',
      '/images/Men-shirts/g-star-lash-t-shirt-dark-blue.png'
    ],
    description: 'پیراهن ابریشم کرپ دوشین ۱۹ میلی‌متری با دکمه‌های مخفی جلو.',
    material: '۱۰۰٪ ابریشم طبیعی شسته شده',
    fit: 'افت روان و آزاد.',
    featured: false,
    isNew: true,
    rating: 4.8,
    reviewCount: 14
  },
  {
    id: 'noire-14',
    name: 'بافت یقه اسکی مرینوس',
    slug: 'the-merino-turtleneck-sweater',
    category: 'knitwear',
    price: 169,
    currency: 'EUR',
    colors: [
      { name: 'ذغالی', hex: '#2B2B2B', image: '/images/men-hoodies/g-star-premium-core-half-zip-sweater-dark-blue.png' },
      { name: 'کرم گرم', hex: '#EBE5D8', image: '/images/men-hoodies/g-star-sunfaded-sweater-dark-blue.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-half-zip-sweater-dark-blue.png',
      '/images/men-hoodies/g-star-sunfaded-sweater-dark-blue.png'
    ],
    description: 'بافت ۱۰۰٪ پشم مرینوس فوق‌العاده ظریف با یقه اسکی راحت برای لایه‌بندی زمستانه.',
    material: '۱۰۰٪ پشم مرینوس فوق‌العاده ظریف',
    fit: 'برش اندامی شیک.',
    featured: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 36
  },
  {
    id: 'noire-15',
    name: 'پالتو دوطرف دکمه پشمی',
    slug: 'the-structured-double-breasted-coat',
    category: 'jackets',
    price: 420,
    currency: 'EUR',
    colors: [
      { name: 'مشکی خالص', hex: '#111111', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png' },
      { name: 'شتری', hex: '#B8860B', image: '/images/banners/Group-242.jpg' }
    ],
    sizes: ['46', '48', '50', '52'],
    images: [
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png',
      '/images/banners/Group-242.jpg'
    ],
    description: 'اورکت پشمی سنگین با یقه‌های برگردان بزرگ، جیب‌های پاکتی عمیق و چاک پشت.',
    material: '۸۰٪ پشم خالص سنگین، ۲۰٪ کشمیر',
    fit: 'سیلوئت بلند اندامی.',
    featured: true,
    isNew: true,
    rating: 5.0,
    reviewCount: 22
  },
  {
    id: 'noire-16',
    name: 'کمربند چرم تراشیده‌شده',
    slug: 'the-sculpted-leather-belt',
    category: 'accessories',
    price: 89,
    currency: 'EUR',
    colors: [
      { name: 'مشکی مات / نقره‌ای', hex: '#111111', image: '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png' }
    ],
    sizes: ['85', '90', '95', '100'],
    images: [
      '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png'
    ],
    description: 'چرم گاوی با پرداخت دستی همراه با سگک هندسی فولادی برس خورده.',
    material: '۱۰۰٪ چرم طبیعی ایتالیا',
    fit: 'پهنا: ۳ سانتی‌متر.',
    featured: false,
    isNew: false,
    rating: 4.7,
    reviewCount: 19
  }
];

export const NOIRE_LOOKS_FA: Look[] = [
  {
    id: 'look-01',
    number: 'استایل ۰۱',
    title: 'بیانِ\nشخصیِ\nتشریفات',
    subtitle: 'معماری دوخت رسمی',
    name: 'استایل کت و شلوار دوخته‌شده مدرن',
    price: 624,
    image: '/images/banners/Group-242.jpg',
    products: [NOIRE_PRODUCTS_FA[5], NOIRE_PRODUCTS_FA[1]],
    description: 'خیاطی دقیق همراه با کتان آهاردار مصری برای حضور شبانه باوقار و مقتدر.'
  },
  {
    id: 'look-02',
    number: 'استایل ۰۲',
    title: 'یونیفرمِ\nجدیدِ\nشهر',
    subtitle: 'شیک‌پوشی معاصر',
    name: 'استایل کت ارکیتکت و شلوار پشمی',
    price: 448,
    image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
    products: [NOIRE_PRODUCTS_FA[0], NOIRE_PRODUCTS_FA[2]],
    description: 'بنیاد پوشاک معاصر مدرن. هندسه تیز همراه با لوکس بودن و راحتی.'
  },
  {
    id: 'look-03',
    number: 'استایل ۰۳',
    title: 'روایتِ\nآزادِ\nاستایل',
    subtitle: 'کژوال ارتقایافته',
    name: 'استایل اورشرت ساختاریافته و تی‌شرت سنگین',
    price: 248,
    image: '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png',
    products: [NOIRE_PRODUCTS_FA[4], NOIRE_PRODUCTS_FA[3]],
    description: 'تناسبات آزاد و پارچه‌های بافت‌دار طراحی‌شده برای جابه‌جایی بی‌دردسر آخر هفته.'
  },
  {
    id: 'look-04',
    number: 'استایل ۰۴',
    title: 'وقارِ\nسیلوئتِ\nشب',
    subtitle: 'فرم‌های تشریفاتی',
    name: 'استایل کت تاکسیدو و شلوار مخروطی',
    price: 488,
    image: '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png',
    products: [NOIRE_PRODUCTS_FA[10], NOIRE_PRODUCTS_FA[2]],
    description: 'درخشش ظریف و افت بی‌نقص ساخته‌شده برای جذابیت در نورهای ملایم شب.'
  }
];

export const NOIRE_LOOKBOOK_FA: LookbookSlide[] = [
  {
    id: 'lb-01',
    title: 'حجم و فرم',
    subtitle: 'کالکشن بهار / تابستان',
    image: '/images/banners/Group-242.jpg',
    hotspots: [
      { id: 'hs-01', productId: 'noire-01', x: 45, y: 35, productName: 'کت تک ارکیتکت', productPrice: 289 },
      { id: 'hs-02', productId: 'noire-03', x: 50, y: 70, productName: 'شلوار پشمی مخروطی', productPrice: 159 }
    ]
  },
  {
    id: 'lb-03',
    title: 'انضباط تک‌رنگ',
    subtitle: 'پوشاک معماری مردانه',
    image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
    hotspots: [
      { id: 'hs-03', productId: 'noire-08', x: 52, y: 40, productName: 'بارانی مینیمالیست', productPrice: 349 },
      { id: 'hs-04', productId: 'noire-12', x: 30, y: 65, productName: 'کیف توت چرم ایتالیایی', productPrice: 249 }
    ]
  },
  {
    id: 'lb-02',
    title: 'لحن شبانه',
    subtitle: 'ظرافت تشریفات',
    image: '/images/Men-panets/g-star-bend-loose-jeans-dark-blue.png',
    hotspots: [
      { id: 'hs-05', productId: 'noire-06', x: 48, y: 45, productName: 'کت و شلوار دوخته‌شده مدرن', productPrice: 495 }
    ]
  }
];
