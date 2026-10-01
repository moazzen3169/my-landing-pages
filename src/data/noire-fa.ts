import { Product, Look, LookbookSlide } from '../types';

export const NOIRE_PRODUCTS_FA: Product[] = [
  {
    id: 'noire-01',
    name: 'کت تک پشمی معماری',
    brand: 'TOM FORD',
    slug: 'the-architect-blazer',
    category: 'blazers',
    price: 18500000,
    currency: 'TMN',
    colors: [
      { name: 'ذغالی', hex: '#2B2B2B', image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png' },
      { name: 'مشکی کلاسیک', hex: '#111111', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png'
    ],
    description: 'کت تک باوقار و ساختاریافته تام فورد، دوخته‌شده از ترکیب پشم مرینوس Super 130s ایتالیا. طراحی‌شده برای ایستایی عالی از جلسات کاری تا استایل شبانه.',
    material: '۸۰٪ پشم خالص، ۱۵٪ ابریشم، ۵٪ الاستان. آستر: ۱۰۰٪ ابریشم کوپرو.',
    fit: 'برش آزاد ساختاریافته با سرشانه‌های مشخص.',
    featured: true,
    isNew: true,
    badge: 'انتخاب لوکس',
    rating: 4.9,
    reviewCount: 38,
    careInstructions: 'خشکشویی تخصصی پوشاک لوکس. نگهداری روی چوب‌لباسی ساختاریافته.',
    shippingInfo: 'ارسال اکسپرس بیمه‌شده و رایگان با بسته‌بندی فاخر نوآر.'
  },
  {
    id: 'noire-02',
    name: 'پیراهن آکسفورد کتان مصری',
    brand: 'CANALI',
    slug: 'the-essential-oxford-shirt',
    category: 'shirts',
    price: 7800000,
    currency: 'TMN',
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
    description: 'پیراهن لوکس کانالی دوخته‌شده از کتان کج‌راه Giza 87 مصری؛ ارائه‌دهنده حس لمس خنک، بافت آهاردار و تنفس‌پذیری فوق‌العاده.',
    material: '۱۰۰٪ پنبه ارگانیک مصری الیاف بلند',
    fit: 'برش راسته معاصر با دوخت فرانسوی و دکمه‌های صدف طبیعی.',
    featured: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 52
  },
  {
    id: 'noire-03',
    name: 'شلوار پشمی پیلی‌دار مخروطی',
    brand: 'ZEGNA',
    slug: 'the-tapered-wool-trouser',
    category: 'trousers',
    price: 11200000,
    currency: 'TMN',
    colors: [
      { name: 'ذغالی', hex: '#2B2B2B', image: '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png' },
      { name: 'سفید استخوانی', hex: '#EAE6DF', image: '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png',
      '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png'
    ],
    description: 'شلوار رسمی زگنیا دوخته‌شده از پشم استوایی سبک با انعطاف‌پذیری ملایم برای حرکتی روان و خط اتوی بی‌نقص.',
    material: '۹۶٪ پشم مرینوس زگنیا، ۴٪ الاستان',
    fit: 'فاق بلند، مخروطی ظریف تا دمپای تمیز.',
    featured: true,
    isNew: true,
    rating: 4.7,
    reviewCount: 24
  },
  {
    id: 'noire-04',
    name: 'تی‌شرت پنبه‌ای سنگین استودیو',
    brand: 'BRUNELLO CUCINELLI',
    slug: 'the-heavyweight-studio-tee',
    category: 't-shirts',
    price: 4900000,
    currency: 'TMN',
    colors: [
      { name: 'سفید عاجی', hex: '#F0ECE1', image: '/images/Men-shirts/g-star-ductsoon-relaxed-t-shirt-white.png' },
      { name: 'مشکی عمیق', hex: '#111111', image: '/images/Men-shirts/g-star-base-s-t-shirt-black.png' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-ductsoon-relaxed-t-shirt-white.png',
      '/images/Men-shirts/g-star-base-s-t-shirt-black.png'
    ],
    description: 'پارچه تریکو دو رو شانه شده ۳۲۰ گرمی برونلو کوچینلی با افت ایستایی فوق‌العاده که فرم جعبه‌ای و مدرن خود را حفظ می‌کند.',
    material: '۱۰۰٪ پنبه ارگانیک سنگین دو رو شانه شده',
    fit: 'برش آزاد لش با سرشانه افتاده.',
    featured: false,
    isNew: false,
    rating: 5.0,
    reviewCount: 61
  },
  {
    id: 'noire-05',
    name: 'اورشرت پشمی ساختاریافته',
    brand: 'LORO PIANA',
    slug: 'the-structured-wool-overshirt',
    category: 'overshirts',
    price: 14500000,
    currency: 'TMN',
    colors: [
      { name: 'ماسه سنگ', hex: '#C2B6A2', image: '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png' },
      { name: 'اسپرسو', hex: '#3B2F2F', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png',
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png'
    ],
    description: 'اورشرت لورو پیانا؛ لایه‌ای کاربردی و شیک برای روزهای پاییز و بهار با دکمه‌های شاخ بوفالو و جیب‌های پاکتی.',
    material: '۸۵٪ پشم ملتون خالص، ۱۵٪ کشمیر',
    fit: 'آزاد و مناسب لایه‌بندی با لبه پایینی راسته.',
    featured: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 19
  },
  {
    id: 'noire-06',
    name: 'کت و شلوار Super 130s مدرن',
    brand: 'ZEGNA',
    slug: 'the-modern-tailored-suit',
    category: 'suits',
    price: 36800000,
    currency: 'TMN',
    colors: [
      { name: 'مشکی انیکس', hex: '#111111', image: '/images/banners/Group-242.jpg' },
      { name: 'گرافیت', hex: '#3A3B3C', image: '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/banners/Group-242.jpg',
      '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png'
    ],
    description: 'کت و شلوار دو تکه شبانه زگنیا، دوخته‌شده از پشم مرینوس Super 130s ایتالیا با برگردان‌های ساتن ابریشمی.',
    material: '۱۰۰٪ پشم خالص مرینوس Super 130s ایتالیا',
    fit: 'برش اندامی مدرن با شانه‌های نرم و طبیعی.',
    featured: true,
    isNew: true,
    badge: 'کالکشن اختصاصی',
    rating: 4.9,
    reviewCount: 15
  },
  {
    id: 'noire-07',
    name: 'بافت کشمیر درجه یک مغولی',
    brand: 'LORO PIANA',
    slug: 'the-minimal-cashmere-knit',
    category: 'knitwear',
    price: 16200000,
    currency: 'TMN',
    colors: [
      { name: 'جو دوسر', hex: '#DCD4C5', image: '/images/men-hoodies/g-star-logo-sweater-grey.png' },
      { name: 'ذغالی', hex: '#2B2B2B', image: '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-grey.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-logo-sweater-grey.png',
      '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-grey.png'
    ],
    description: 'بافت یقه گرد لورو پیانا فوق‌العاده نرم از کشمیر ۱۲ گیج درجه یک مغولستان با جزییات کشباف بدون دوخت.',
    material: '۱۰۰٪ کشمیر درجه یک مغولستان',
    fit: 'برش کلاسیک استاندارد.',
    featured: false,
    isNew: false,
    rating: 5.0,
    reviewCount: 42
  },
  {
    id: 'noire-08',
    name: 'پالتو بارانی گاباردین ضدآب',
    brand: 'BURBERRY',
    slug: 'the-minimalist-trench-jacket',
    category: 'jackets',
    price: 24500000,
    currency: 'TMN',
    colors: [
      { name: 'سنگی نود', hex: '#8F8B82', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png' },
      { name: 'مشکی نیمه‌شب', hex: '#0B0B0B', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png',
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png'
    ],
    description: 'پالتو گاباردین باربری با دکمه‌های مخفی و یقه نوک‌تیز تیز و ساختاریافته، مقاوم در برابر نفوذ آب.',
    material: '۱۰۰٪ گاباردین کتان ضدآب',
    fit: 'سیلوئت تمیز و آزاد.',
    featured: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 11
  },
  {
    id: 'noire-09',
    name: 'هودی دورس سنگین پنبه‌ای',
    brand: 'ACNE STUDIOS',
    slug: 'the-heavy-loopback-hoodie',
    category: 'hoodies',
    price: 8500000,
    currency: 'TMN',
    colors: [
      { name: 'خاکستری سیمانی', hex: '#A3A3A3', image: '/images/men-hoodies/g-star-premium-core-hooded-sweater-grey.png' },
      { name: 'مشکی خالص', hex: '#111111', image: '/images/men-hoodies/g-star-core-half-zip-sweat-black.png' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-hooded-sweater-grey.png',
      '/images/men-hoodies/g-star-core-half-zip-sweat-black.png'
    ],
    description: 'دورس ۴۸۰ گرمی پنبه ارگانیک با کلاه دو لایه و جیب کانگورویی یکپارچه با فرم معاصر.',
    material: '۱۰۰٪ پنبه دورس ارگانیک سنگین',
    fit: 'برش معماری اندکی لش.',
    featured: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 31
  },
  {
    id: 'noire-10',
    name: 'شلوار کتان پیلی‌دار معاصر',
    brand: 'RALPH LAUREN PURPLE LABEL',
    slug: 'the-relaxed-pleated-chino',
    category: 'trousers',
    price: 9800000,
    currency: 'TMN',
    colors: [
      { name: 'کرم سنگریزه‌ای', hex: '#D5CCBB', image: '/images/Men-panets/g-star-rovic-zip-3d-regular-tapered-pants-brown (1).png' },
      { name: 'زیتونی شسته شده', hex: '#555D50', image: '/images/Men-panets/g-star-utility-loose-cargo-pants-medium-blue.png' }
    ],
    sizes: ['46', '48', '50', '52'],
    images: [
      '/images/Men-panets/g-star-rovic-zip-3d-regular-tapered-pants-brown (1).png',
      '/images/Men-panets/g-star-utility-loose-cargo-pants-medium-blue.png'
    ],
    description: 'کتان کج‌راه ژاپنی با تراکم بالا و پایان شستشوی سنگ‌شور با دو پیلی جلو.',
    material: '۱۰۰٪ کتان کج‌راه ژاپنی',
    fit: 'پاچه عریض با مخروطی نرم در مچ پا.',
    featured: false,
    isNew: false,
    rating: 4.7,
    reviewCount: 29
  },
  {
    id: 'noire-11',
    name: 'کت تک تاکسیدو شب یقه آرشال',
    brand: 'TOM FORD',
    slug: 'the-wool-evening-dinner-jacket',
    category: 'blazers',
    price: 26500000,
    currency: 'TMN',
    colors: [
      { name: 'سورمه‌ای نیمه‌شب', hex: '#111827', image: '/images/men-hoodies/g-star-old-skool-crew-sweat-long-sleeve-dark-blue.png' },
      { name: 'مشکی جت', hex: '#0B0B0B', image: '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/men-hoodies/g-star-old-skool-crew-sweat-long-sleeve-dark-blue.png',
      '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png'
    ],
    description: 'کت تک رسمی یقه آرشال تام فورد با تزئینات ابریشم ساتن و جزییات دست‌دوز.',
    material: '۹۲٪ پشم خالص، ۸٪ ابریشم',
    fit: 'سیلوئت رسمی ساختاریافته اندامی.',
    featured: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 18
  },
  {
    id: 'noire-12',
    name: 'کیف توت چرم طبیعی توسكانی',
    brand: 'BOTTEGA VENETA',
    slug: 'the-italian-leather-tote-bag',
    category: 'accessories',
    price: 18900000,
    currency: 'TMN',
    colors: [
      { name: 'مشکی مات', hex: '#181818', image: '/images/banners/Group-242.jpg' }
    ],
    sizes: ['تک سایز'],
    images: [
      '/images/banners/Group-242.jpg'
    ],
    description: 'کیف چرم گاو طبیعی دباغی‌شده گیاهی توسكانی با قفل مگنتی و محفظه ضربه‌گیر لپ‌تاپ.',
    material: '۱۰۰٪ چرم طبیعی توسكانی ایتالیا',
    fit: 'ابعاد ۳۸ × ۴۲ × ۱۲ سانتی‌متر.',
    featured: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 57
  },
  {
    id: 'noire-13',
    name: 'پیراهن ابریشم طبیعی رسمی',
    brand: 'GIVENCHY',
    slug: 'the-minimal-silk-dress-shirt',
    category: 'shirts',
    price: 12800000,
    currency: 'TMN',
    colors: [
      { name: 'ابریشم عاجی', hex: '#F5F5F0', image: '/images/Men-shirts/g-star-structured-tweeter-grandad-t-shirt-white.png' },
      { name: 'ابریشم مشکی', hex: '#111111', image: '/images/Men-shirts/g-star-lash-t-shirt-dark-blue.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-structured-tweeter-grandad-t-shirt-white.png',
      '/images/Men-shirts/g-star-lash-t-shirt-dark-blue.png'
    ],
    description: 'پیراهن ابریشم کرپ دوشین ۱۹ میلی‌متری ژیوانشی با دکمه‌های مخفی جلو.',
    material: '۱۰۰٪ ابریشم طبیعی شسته شده',
    fit: 'افت روان و آزاد.',
    featured: false,
    isNew: true,
    rating: 4.8,
    reviewCount: 14
  },
  {
    id: 'noire-14',
    name: 'بافت یقه اسکی مرینوس ظریف',
    brand: 'CANALI',
    slug: 'the-merino-turtleneck-sweater',
    category: 'knitwear',
    price: 11500000,
    currency: 'TMN',
    colors: [
      { name: 'ذغالی', hex: '#2B2B2B', image: '/images/men-hoodies/g-star-premium-core-half-zip-sweater-dark-blue.png' },
      { name: 'کرم گرم', hex: '#EBE5D8', image: '/images/men-hoodies/g-star-sunfaded-sweater-dark-blue.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-half-zip-sweater-dark-blue.png',
      '/images/men-hoodies/g-star-sunfaded-sweater-dark-blue.png'
    ],
    description: 'بافت ۱۰۰٪ پشم مرینوس فوق‌العاده ظریف کانالی با یقه اسکی راحت برای لایه‌بندی زمستانه.',
    material: '۱۰۰٪ پشم مرینوس فوق‌العاده ظریف',
    fit: 'برش اندامی شیک.',
    featured: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 36
  },
  {
    id: 'noire-15',
    name: 'پالتو دوطرف دکمه پشمی کشمیر',
    brand: 'BURBERRY',
    slug: 'the-structured-double-breasted-coat',
    category: 'jackets',
    price: 31000000,
    currency: 'TMN',
    colors: [
      { name: 'مشکی خالص', hex: '#111111', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png' },
      { name: 'شتری', hex: '#B8860B', image: '/images/banners/Group-242.jpg' }
    ],
    sizes: ['46', '48', '50', '52'],
    images: [
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png',
      '/images/banners/Group-242.jpg'
    ],
    description: 'اورکت پشمی و کشمیر سنگین باربری با یقه‌های برگردان بزرگ، جیب‌های پاکتی عمیق و چاک پشت.',
    material: '۸۰٪ پشم خالص سنگین، ۲۰٪ کشمیر',
    fit: 'سیلوئت بلند اندامی.',
    featured: true,
    isNew: true,
    rating: 5.0,
    reviewCount: 22
  },
  {
    id: 'noire-16',
    name: 'کمربند چرم تراشیده‌شده دست‌ساز',
    brand: 'TOM FORD',
    slug: 'the-sculpted-leather-belt',
    category: 'accessories',
    price: 6200000,
    currency: 'TMN',
    colors: [
      { name: 'مشکی مات / نقره‌ای', hex: '#111111', image: '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png' }
    ],
    sizes: ['85', '90', '95', '100'],
    images: [
      '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png'
    ],
    description: 'چرم گاوی با پرداخت دستی تام فورد همراه با سگک هندسی فولادی برس خورده.',
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
    title: 'تشریفات\nشبانه\nچندبرند',
    subtitle: 'کت و شلوار زگنیا + پیراهن کانالی',
    name: 'استایل کت و شلوار Zegna و پیراهن Canali',
    price: 44600000,
    image: '/images/banners/Group-242.jpg',
    products: [NOIRE_PRODUCTS_FA[5], NOIRE_PRODUCTS_FA[1]],
    description: 'خیاطی و دوخت دقیق پشم Super 130s زگنیا همراه با کتان آهاردار کانالی برای حضور شبانه باوقار.'
  },
  {
    id: 'look-02',
    number: 'استایل ۰۲',
    title: 'یونیفرمِ\nمدیریتیِ\nمعاصر',
    subtitle: 'کت تام فورد + شلوار زگنیا',
    name: 'استایل کت تک Tom Ford و شلوار Zegna',
    price: 29700000,
    image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
    products: [NOIRE_PRODUCTS_FA[0], NOIRE_PRODUCTS_FA[2]],
    description: 'ترکیب کت تک پشمی معماری تام فورد با شلوار پیلی‌دار زگنیا برای شیک‌پوشی روزمره لوکس.'
  },
  {
    id: 'look-03',
    number: 'استایل ۰۳',
    title: 'کالکشنِ\nکژوالِ\nپریمیوم',
    subtitle: 'اورشرت لورو پیانا + تی‌شرت کوچینلی',
    name: 'استایل Loro Piana و Brunello Cucinelli',
    price: 19400000,
    image: '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png',
    products: [NOIRE_PRODUCTS_FA[4], NOIRE_PRODUCTS_FA[3]],
    description: 'تناسبات آزاد لورو پیانا و تی‌شرت سنگین برونلو کوچینلی طراحی‌شده برای استایل راحت پایان هفته.'
  },
  {
    id: 'look-04',
    number: 'استایل ۰۴',
    title: 'وقارِ\nسیلوئتِ\nرسمی',
    subtitle: 'کت تاکسیدو تام فورد + شلوار زگنیا',
    name: 'استایل تاکسیدو Tom Ford و شلوار Zegna',
    price: 37700000,
    image: '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png',
    products: [NOIRE_PRODUCTS_FA[10], NOIRE_PRODUCTS_FA[2]],
    description: 'درخشش ظریف برگردان ساتن و افت بی‌نقص ساخته‌شده برای جذابیت در دیدارهای مهم و تشریفاتی.'
  }
];

export const NOIRE_LOOKBOOK_FA: LookbookSlide[] = [
  {
    id: 'lb-01',
    title: 'کالکشن چندبرند بوتیک',
    subtitle: 'بهار / تابستان ۲۰۲۶',
    image: '/images/banners/Group-242.jpg',
    hotspots: [
      { id: 'hs-01', productId: 'noire-01', x: 45, y: 35, productName: 'کت تک پشمی معماری Tom Ford', productPrice: 18500000 },
      { id: 'hs-02', productId: 'noire-03', x: 50, y: 70, productName: 'شلوار پشمی پیلی‌دار Zegna', productPrice: 11200000 }
    ]
  },
  {
    id: 'lb-03',
    title: 'ظرافت دوخت و متریال',
    subtitle: 'انتخاب اختصاصی برندها',
    image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
    hotspots: [
      { id: 'hs-03', productId: 'noire-08', x: 52, y: 40, productName: 'بارانی گاباردین Burberry', productPrice: 24500000 },
      { id: 'hs-04', productId: 'noire-12', x: 30, y: 65, productName: 'کیف توت چرم Bottega Veneta', productPrice: 18900000 }
    ]
  },
  {
    id: 'lb-02',
    title: 'لحن تشریفات شبانه',
    subtitle: 'پوشاک لوکس مردانه',
    image: '/images/Men-panets/g-star-bend-loose-jeans-dark-blue.png',
    hotspots: [
      { id: 'hs-05', productId: 'noire-06', x: 48, y: 45, productName: 'کت و شلوار Super 130s Zegna', productPrice: 36800000 }
    ]
  }
];
