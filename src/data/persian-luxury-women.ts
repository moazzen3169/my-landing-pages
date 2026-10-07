export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface LuxuryProduct {
  id: string;
  brand: string;
  name: string;
  slug: string;
  category: 'handbags' | 'shoes';
  categoryPersian: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  priceFormatted: string;
  originalPriceFormatted?: string;
  colors: ProductColor[];
  sizes: string[];
  images: string[];
  descriptionPersian: string;
  detailsPersian: string;
  materialPersian: string;
  dimensionsPersian?: string;
  heelHeightPersian?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isCampaign?: boolean;
  isCurated?: boolean;
  stock: number;
  isAuthentic: boolean;
  rating: number;
  reviewCount: number;
  careInstructionsPersian: string;
  shippingInfoPersian: string;
}

export interface LuxuryBrand {
  id: string;
  name: string;
  persianName: string;
  country: string;
  featuredProductCount: number;
  description: string;
}

export interface CategoryInfo {
  id: string;
  slug: 'handbags' | 'shoes';
  namePersian: string;
  nameEnglish: string;
  image: string;
  productCount: number;
  description: string;
}

export interface CampaignInfo {
  id: string;
  titlePersian: string;
  subtitlePersian: string;
  descriptionPersian: string;
  durationHours: number;
  bannerImage: string;
  productIds: string[];
}

export interface StoreInfo {
  cityPersian: string;
  titlePersian: string;
  subtitlePersian: string;
  addressPersian: string;
  phone: string;
  workingHoursPersian: string;
  consultationPhone: string;
  noticePersian: string;
}

// RECOGNIZABLE LUXURY FASHION BRANDS
export const LUXURY_BRANDS: LuxuryBrand[] = [
  { id: 'prada', name: 'PRADA', persianName: 'پرادا', country: 'ایتالیا', featuredProductCount: 42, description: 'پیشرو در طراحی چرم‌های ساختاریافته و لوکس معاصر' },
  { id: 'gucci', name: 'GUCCI', persianName: 'گوچی', country: 'ایتالیا', featuredProductCount: 38, description: 'نماد اصالت و شکوه صنایع دستی ایتالیایی' },
  { id: 'saint-laurent', name: 'SAINT LAURENT', persianName: 'سنت لوران', country: 'فرانسه', featuredProductCount: 35, description: 'طراحی راک-شیک و دوخت متراکم فرانسوی' },
  { id: 'bottega-veneta', name: 'BOTTEGA VENETA', persianName: 'بوتگا ونتا', country: 'ایتالیا', featuredProductCount: 29, description: 'هنر بافت دستی چرم بی‌نظیر انترچاتو' },
  { id: 'fendi', name: 'FENDI', persianName: 'فندی', country: 'ایتالیا', featuredProductCount: 26, description: 'استاد خلقت کیف‌های آیکونیک پيکابو و بگت' },
  { id: 'dior', name: 'DIOR', persianName: 'دیور', country: 'فرانسه', featuredProductCount: 28, description: 'نماد وقار پاریسی و دوخت کاناژ جاودانه' },
  { id: 'chanel', name: 'CHANEL', persianName: 'شنل', country: 'فرانسه', featuredProductCount: 24, description: 'افسانه مد لوکس جهان و کیف‌های دوخت لوزی' },
  { id: 'louboutin', name: 'CHRISTIAN LOUBOUTIN', persianName: 'کریستین لوبوتن', country: 'فرانسه', featuredProductCount: 20, description: 'کفش‌های پاشنه‌دار زرق‌وبرق‌دار با زیره قرمز جادویی' },
  { id: 'jimmy-choo', name: 'JIMMY CHOO', persianName: 'جیمی چو', country: 'بریتانیا', featuredProductCount: 18, description: 'شاهکار کفش و صندل‌های مجلسی فاخر' },
];

export const LUXURY_CATEGORIES: CategoryInfo[] = [
  {
    id: 'handbags',
    slug: 'handbags',
    namePersian: 'کیف زنانه',
    nameEnglish: 'HANDBAGS',
    image: '/images/landings/persian-luxury-v1/164ecee416c045cbaf64a689ec1deccc.png',
    productCount: 120,
    description: 'مجموعه‌ای فاخر از کیف‌های دوشی، توت‌بگ و کراس‌بادی برندهای برتر'
  },
  {
    id: 'shoes',
    slug: 'shoes',
    namePersian: 'کفش زنانه',
    nameEnglish: 'FOOTWEAR',
    image: '/images/landings/persian-luxury-v1/woman-shoes-1.webp',
    productCount: 115,
    description: 'کفش‌های پاشنه‌دار مجلسی، لوفر و صندل‌های دست‌ساز فاخر'
  }
];

export const LUXURY_PRODUCTS: LuxuryProduct[] = [
  // ====================== 1. HANDBAGS (NO SIZES) ======================
  {
    id: 'pl-w-01',
    brand: 'PRADA',
    name: 'کیف دستی چرمی Galleria Medium',
    slug: 'prada-galleria-medium-bag',
    category: 'handbags',
    categoryPersian: 'کیف زنانه',
    price: 285000000,
    priceFormatted: '۲۸۵,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی مات', hex: '#1A1A1A', image: '/images/landings/persian-luxury-v1/164ecee416c045cbaf64a689ec1deccc.png' },
      { name: 'کرم عاجی', hex: '#EBE5D8', image: '/images/landings/persian-luxury-v1/819bb24f1fca4c3c8453d4b54960093c.png' }
    ],
    sizes: [], // Handbags have no sizes
    images: ['/images/landings/persian-luxury-v1/164ecee416c045cbaf64a689ec1deccc.png', '/images/landings/persian-luxury-v1/819bb24f1fca4c3c8453d4b54960093c.png'],
    descriptionPersian: 'کیف چرمی گالریا پرادا ساخته شده از چرم صافیانو ضدخش با قفل و لوگوی مثلثی چرمی و قطعات فلزی طلایی آبکاری‌شده.',
    detailsPersian: 'دارای دو محفظه زیپ‌دار مجزا، بند دوشی چرمی قابل تنظیم و آستر پارچه‌ای با لوگوی برجسته پرادا.',
    dimensionsPersian: '۲۸ × ۲۰ × ۱۲ سانتی‌متر',
    materialPersian: '۱۰۰٪ چرم گوساله Saffiano ایتالیا',
    isNew: true,
    isBestSeller: true,
    isCurated: true,
    stock: 3,
    isAuthentic: true,
    rating: 5.0,
    reviewCount: 18,
    careInstructionsPersian: 'نگهداری در کاور پارچه‌ای اصلی، دور از نور مستقیم خورشید و رطوبت.',
    shippingInfoPersian: 'ارسال اکسپرس و بیمه شده به همراه شناسنامه اصالت فروشگاه.'
  },
  {
    id: 'pl-w-02',
    brand: 'CHANEL',
    name: 'کیف دوشی Classic Flap Medium',
    slug: 'chanel-classic-flap-medium-black',
    category: 'handbags',
    categoryPersian: 'کیف زنانه',
    price: 490000000,
    priceFormatted: '۴۹۰,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی با قفل طلایی', hex: '#141414', image: '/images/landings/persian-luxury-v1/40d50d271cc443b5b8926a728089c031.png' }
    ],
    sizes: [],
    images: ['/images/landings/persian-luxury-v1/40d50d271cc443b5b8926a728089c031.png'],
    descriptionPersian: 'کیف کلاسیک فلپ شنل با دوخت لوزی، قفل متقاطع CC و زنجیر بافته‌شده با چرم. ارزشمندترین سرمایه‌گذاری مد جهان.',
    detailsPersian: 'درب دو لایه داخلی با جیب آینه‌ای، آستر چرم عنابی تیره شنل و قطعات فلزی طلایی ۲۴ عیار.',
    dimensionsPersian: '۲۵.۵ × ۱۵.۵ × ۶.۵ سانتی‌متر',
    materialPersian: 'چرم گوساله Caviar ضدخش بسیار مقاوم',
    isNew: true,
    isBestSeller: true,
    isCurated: true,
    stock: 1,
    isAuthentic: true,
    rating: 5.0,
    reviewCount: 45,
    careInstructionsPersian: 'استفاده از دستکش پارچه‌ای هنگام جابجایی و نگهداری در کاور نخی اصلی.',
    shippingInfoPersian: 'تحویل اختصاصی به همراه شناسنامه اصالت و سریال کد معتبر.'
  },
  {
    id: 'pl-w-03',
    brand: 'SAINT LAURENT',
    name: 'کیف دوشی Loulou Medium Quilted',
    slug: 'saint-laurent-loulou-medium',
    category: 'handbags',
    categoryPersian: 'کیف زنانه',
    price: 240000000,
    originalPrice: 275000000,
    discountPercent: 13,
    priceFormatted: '۲۴۰,۰۰۰,۰۰۰ تومان',
    originalPriceFormatted: '۲۷۵,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی کلاغی', hex: '#111111', image: '/images/landings/persian-luxury-v1/916909c204ed45bbbcaac75d7249e761.png' }
    ],
    sizes: [],
    images: ['/images/landings/persian-luxury-v1/916909c204ed45bbbcaac75d7249e761.png'],
    descriptionPersian: 'کیف دوشی لولو سنت لوران با دوخت‌های لوزی پف‌دار و لوگوی فلزی YSL طلایی. طراحی جاودانه و فوق‌العاده شیک.',
    detailsPersian: 'دو محفظه داخلی بزرگ با جیب زیپ‌دار میانی، بند زنجیری با پد چرمی شانه.',
    dimensionsPersian: '۳۲ × ۲۲ × ۱۲ سانتی‌متر',
    materialPersian: '۱۰۰٪ چرم بره نرم فرانسوی با دوخت برجسته',
    isNew: false,
    isBestSeller: true,
    isCampaign: true,
    stock: 2,
    isAuthentic: true,
    rating: 4.9,
    reviewCount: 31,
    careInstructionsPersian: 'از فشار مستقیم و قرارگیری در معرض گرما خودداری شود.',
    shippingInfoPersian: 'ارسال رایگان اکسپرس به سراسر ایران.'
  },
  {
    id: 'pl-w-04',
    brand: 'BOTTEGA VENETA',
    name: 'کیف دستی Mini Jodie Intrecciato',
    slug: 'bottega-veneta-mini-jodie',
    category: 'handbags',
    categoryPersian: 'کیف زنانه',
    price: 195000000,
    priceFormatted: '۱۹۵,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'سبز بوتگا', hex: '#2E4032', image: '/images/landings/persian-luxury-v1/9331b45139d44dd08f094a12032ace19.png' },
      { name: 'کرم نود', hex: '#E2DDD3', image: '/images/landings/persian-luxury-v1/c0635df1e35d486489c82a3cb280a76e.png' }
    ],
    sizes: [],
    images: ['/images/landings/persian-luxury-v1/9331b45139d44dd08f094a12032ace19.png', '/images/landings/persian-luxury-v1/c0635df1e35d486489c82a3cb280a76e.png'],
    descriptionPersian: 'کیف مینی جودی بوتگا ونتا با بافت چرمی دست‌ساز انترچاتو و گره معروف روی دسته. شاهکار هنر چرم‌دوزی ایتالیا.',
    detailsPersian: 'بسته شدن با زیپ طلایی مخفی، آستر چرم بره نپا بسیار نرم.',
    dimensionsPersian: '۲۸ × ۲۳ × ۸ سانتی‌متر',
    materialPersian: '۱۰۰٪ چرم بره Nappa با بافت دست‌ساز',
    isNew: true,
    isBestSeller: true,
    isCurated: true,
    stock: 4,
    isAuthentic: true,
    rating: 5.0,
    reviewCount: 15,
    careInstructionsPersian: 'نگهداری در کاور مخصوص پارچه‌ای و اجتناب از تماس با سطوح زبر.',
    shippingInfoPersian: 'ضمانت بازگشت و اصالت کالا.'
  },
  {
    id: 'pl-w-05',
    brand: 'DIOR',
    name: 'کیف دستی Lady Dior Medium',
    slug: 'dior-lady-dior-medium-black',
    category: 'handbags',
    categoryPersian: 'کیف زنانه',
    price: 340000000,
    priceFormatted: '۳۴۰,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی کلاسیک', hex: '#171717', image: '/images/landings/persian-luxury-v1/3a28804b7a8a4efda8600ddc555107ea.png' }
    ],
    sizes: [],
    images: ['/images/landings/persian-luxury-v1/3a28804b7a8a4efda8600ddc555107ea.png'],
    descriptionPersian: 'کیف لیدی دیور آیکونیک با دوخت برجسته کاناژ و آویزهای فلزی حروف D.I.O.R آبکاری شده با طلا.',
    detailsPersian: 'دسته‌های محکم و منحنی، بند دوشی چرمی نازک با قابلیت جدا شدن.',
    dimensionsPersian: '۲۴ × ۲۰ × ۱۱ سانتی‌متر',
    materialPersian: '۱۰۰٪ چرم بره Cannage فرانسوی',
    isNew: false,
    isBestSeller: true,
    isCurated: true,
    stock: 1,
    isAuthentic: true,
    rating: 5.0,
    reviewCount: 29,
    careInstructionsPersian: 'نگهداری تخصصی در جعبه دیور.',
    shippingInfoPersian: 'ارسال با امنیت بالا و بیمه کامل.'
  },
  {
    id: 'pl-w-06',
    brand: 'FENDI',
    name: 'کیف چرمی Peekaboo ISeeU Small',
    slug: 'fendi-peekaboo-iseeu-small',
    category: 'handbags',
    categoryPersian: 'کیف زنانه',
    price: 310000000,
    originalPrice: 350000000,
    discountPercent: 11,
    priceFormatted: '۳۱۰,۰۰۰,۰۰۰ تومان',
    originalPriceFormatted: '۳۵۰,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'شرابی عمیق', hex: '#6F1D2A', image: '/images/landings/persian-luxury-v1/ce8aec7aa41345cc8d1bdaa4018beecb.png' }
    ],
    sizes: [],
    images: ['/images/landings/persian-luxury-v1/ce8aec7aa41345cc8d1bdaa4018beecb.png'],
    descriptionPersian: 'کیف پيکابو فندی با چرم فاخر رومانو و قفل چرخشی دوطرفه آیکونیک فندی. مجلل، اصیل و کم‌نظیر.',
    detailsPersian: 'دیواره سخت میانی با دو محفظه مجزا، دسته کوتاه چرمی و بند دوشی بلند قابل جدا شدن.',
    dimensionsPersian: '۲۷ × ۲۱ × ۱۱ سانتی‌متر',
    materialPersian: '۱۰۰٪ چرم گوساله Cuoio Romano دست‌دوز',
    isNew: false,
    isBestSeller: false,
    isCampaign: true,
    stock: 1,
    isAuthentic: true,
    rating: 4.8,
    reviewCount: 11,
    careInstructionsPersian: 'استفاده از واکس تخصصی چرم در فواصل زمانی منظم.',
    shippingInfoPersian: 'ارسال با پیک ویژه و تحویل سفارشی.'
  },
  {
    id: 'pl-w-07',
    brand: 'GUCCI',
    name: 'کیف دوشی Dionysus GG Small',
    slug: 'gucci-dionysus-gg-small',
    category: 'handbags',
    categoryPersian: 'کیف زنانه',
    price: 215000000,
    priceFormatted: '۲۱۵,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'بژ مونوگرام و قهوه‌ای', hex: '#A89275', image: '/images/landings/persian-luxury-v1/8ccd31b146ea4bd19f9a83f172ea29d7.png' }
    ],
    sizes: [],
    images: ['/images/landings/persian-luxury-v1/8ccd31b146ea4bd19f9a83f172ea29d7.png'],
    descriptionPersian: 'کیف آیکونیک دیونیسوس گوچی با پارچه کرباس GG Supreme و سگک نعل اسبی با سرهای ببر که نماد افسانه‌ای گوچی است.',
    detailsPersian: 'زنجیر شانه متغیر برای استفاده دوشی و کراس‌بادی، لبه‌های دست‌دوز و آستر جیر نرم فاخر.',
    dimensionsPersian: '۲۵ × ۱۴ × ۸ سانتی‌متر',
    materialPersian: 'کرباس GG Supreme با لبه‌دوزی چرم طبیعی',
    isNew: true,
    isBestSeller: false,
    isCurated: true,
    stock: 2,
    isAuthentic: true,
    rating: 4.9,
    reviewCount: 24,
    careInstructionsPersian: 'پاکسازی با پارچه نرم و خشک. عدم استفاده از مواد شوینده شیمیایی.',
    shippingInfoPersian: 'تحویل سریع در بسته‌بندی لوکس کادویی.'
  },

  // ====================== 2. WOMEN'S SHOES (WITH SHOE SIZES) ======================
  {
    id: 'pl-w-08',
    brand: 'CHRISTIAN LOUBOUTIN',
    name: 'کفش پاشنه‌دار So Kate 120 Leather',
    slug: 'louboutin-so-kate-120-black',
    category: 'shoes',
    categoryPersian: 'کفش زنانه',
    price: 88000000,
    priceFormatted: '۸۸,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی ورنی با زیره قرمز', hex: '#111111', image: '/images/landings/persian-luxury-v1/woman-shoes-1.webp' }
    ],
    sizes: ['36', '37', '38', '39', '40'],
    images: ['/images/landings/persian-luxury-v1/woman-shoes-1.webp', '/images/landings/persian-luxury-v1/woman-shoes-2.webp'],
    descriptionPersian: 'کفش پاشنه‌دار آیکونیک سو کیت کریستین لوبوتن با پاشنه باریک ۱۲ سانتی‌متری و زیره چرمی قرمز معروف جهانی.',
    detailsPersian: 'پنجه نوک‌تیز کشیده با شیب جذاب و ارگونومیک، آستر چرم طبیعی ایتالیایی.',
    heelHeightPersian: '۱۲ سانتی‌متر',
    materialPersian: '۱۰۰٪ چرم ورنی گوساله با زیره قرمز امضا شده',
    isNew: true,
    isBestSeller: true,
    isCurated: true,
    stock: 5,
    isAuthentic: true,
    rating: 4.9,
    reviewCount: 42,
    careInstructionsPersian: 'نصب محافظ زیره برای طول عمر بیشتر زیره قرمز توصیه می‌شود.',
    shippingInfoPersian: 'ارسال فوری با جعبه و کاور اصلی.'
  },
  {
    id: 'pl-w-09',
    brand: 'JIMMY CHOO',
    name: 'کفش پاشنه‌دار Aveline 85 Bow',
    slug: 'jimmy-choo-aveline-85',
    category: 'shoes',
    categoryPersian: 'کفش زنانه',
    price: 95000000,
    priceFormatted: '۹۵,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'شمپاینی ساتن', hex: '#D4C29E', image: '/images/landings/persian-luxury-v1/woman-shoes-3.webp' }
    ],
    sizes: ['36', '37', '38', '39', '40'],
    images: ['/images/landings/persian-luxury-v1/woman-shoes-3.webp', '/images/landings/persian-luxury-v1/woman-shoes-4.webp'],
    descriptionPersian: 'کفش مجلسی جیمی چو با ربان‌های بزرگ ملموس ساتن غیرمتقارن روی پاشنه و مچ پا. شاهکار طراحی برای مراسم لوکس.',
    detailsPersian: 'پاشنه باریک ۸.۵ سانتی‌متری بسیار راحت، پارچه ساتن ابریشمی با آستر چرمی.',
    heelHeightPersian: '۸.۵ سانتی‌متر',
    materialPersian: 'ساتن ابریشمی ایتالیایی با آستر چرم گوساله',
    isNew: true,
    isBestSeller: true,
    isCurated: true,
    stock: 3,
    isAuthentic: true,
    rating: 5.0,
    reviewCount: 19,
    careInstructionsPersian: 'اجتناب از تماس با آب و مواد روغنی.',
    shippingInfoPersian: 'تحویل با جعبه نفیس جیمی چو.'
  },
  {
    id: 'pl-w-10',
    brand: 'PRADA',
    name: 'لوفر چرمی Monolith Platform',
    slug: 'prada-monolith-leather-loafers',
    category: 'shoes',
    categoryPersian: 'کفش زنانه',
    price: 78000000,
    priceFormatted: '۷۸,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی براق', hex: '#1C1C1C', image: '/images/landings/persian-luxury-v1/woman-shoes-5.webp' }
    ],
    sizes: ['36', '37', '38', '39', '40'],
    images: ['/images/landings/persian-luxury-v1/woman-shoes-5.webp', '/images/landings/persian-luxury-v1/woman-shoes-6.webp'],
    descriptionPersian: 'لوفر لژدار مونالیت پرادا با زیره لاستیکی عاج‌دار مدرن و لوگوی فلزی مثلثی پرادا روی زبانه چرمی.',
    detailsPersian: 'ارتفاع لژ ۵.۵ سانتی‌متر، چرم برس خورده با درخشش ملایم لوکس.',
    heelHeightPersian: '۵.۵ سانتی‌متر (لژ)',
    materialPersian: 'چرم گوساله Spazzolato برس‌خورده',
    isNew: false,
    isBestSeller: true,
    isCurated: false,
    stock: 4,
    isAuthentic: true,
    rating: 4.8,
    reviewCount: 27,
    careInstructionsPersian: 'پاکسازی با دستمال مرطوب نخی.',
    shippingInfoPersian: 'ارسال اکسپرس سراسری.'
  },
  {
    id: 'pl-w-11',
    brand: 'GUCCI',
    name: 'لوفر چرمی Princetown Horsebit Mules',
    slug: 'gucci-princetown-mules-black',
    category: 'shoes',
    categoryPersian: 'کفش زنانه',
    price: 68000000,
    priceFormatted: '۶۸,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی با سگک طلایی', hex: '#171717', image: '/images/landings/persian-luxury-v1/woman-shoes-7.webp' }
    ],
    sizes: ['36', '37', '38', '39', '40'],
    images: ['/images/landings/persian-luxury-v1/woman-shoes-7.webp', '/images/landings/persian-luxury-v1/woman-shoes-8.webp'],
    descriptionPersian: 'مول چرمی پرینستون گوچی با سگک اسبی فلزی طلایی نعل‌مانند. ترکیبی راحت و فوق‌العاده شیک برای استایل روزمره فاخر.',
    detailsPersian: 'پاشنه مسطح ۱.۵ سانتی‌متری، کفی چرمی دست‌دوز فوق‌العاده نرم.',
    heelHeightPersian: '۱.۵ سانتی‌متر',
    materialPersian: '۱۰۰٪ چرم گوساله صاف ایتالیایی',
    isNew: false,
    isBestSeller: true,
    isCurated: false,
    stock: 4,
    isAuthentic: true,
    rating: 4.8,
    reviewCount: 33,
    careInstructionsPersian: 'استفاده از قالب چوبی برای حفظ فرم.',
    shippingInfoPersian: 'ارسال اکسپرس کشوری.'
  },
  {
    id: 'pl-w-12',
    brand: 'CHRISTIAN LOUBOUTIN',
    name: 'کفش پاشنه‌دار Kate 100 Nude',
    slug: 'louboutin-kate-100-nude',
    category: 'shoes',
    categoryPersian: 'کفش زنانه',
    price: 85000000,
    priceFormatted: '۸۵,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'کرم نود با زیره قرمز', hex: '#E2DDD3', image: '/images/landings/persian-luxury-v1/woman-shoes-9.webp' }
    ],
    sizes: ['36', '37', '38', '39', '40'],
    images: ['/images/landings/persian-luxury-v1/woman-shoes-9.webp', '/images/landings/persian-luxury-v1/woman-shoes-10.webp'],
    descriptionPersian: 'کفش پاشنه‌دار کلاسیک کیت کریستین لوبوتن با رنگ نود عاجی و زیره قرمز آیکونیک.',
    detailsPersian: 'پاشنه ۱۰ سانتی‌متری، ساختار چرم طبیعی بره ایتالیایی.',
    heelHeightPersian: '۱۰ سانتی‌متر',
    materialPersian: '۱۰۰٪ چرم نپا طبیعی',
    isNew: true,
    isBestSeller: true,
    isCurated: true,
    stock: 3,
    isAuthentic: true,
    rating: 5.0,
    reviewCount: 28,
    careInstructionsPersian: 'نگهداری در کاور پارچه‌ای اصلی.',
    shippingInfoPersian: 'ارسال اکسپرس به سراسر کشور.'
  },
  {
    id: 'pl-w-13',
    brand: 'JIMMY CHOO',
    name: 'صندل مجلسی Bing 100 Crystal',
    slug: 'jimmy-choo-bing-100-crystal',
    category: 'shoes',
    categoryPersian: 'کفش زنانه',
    price: 92000000,
    priceFormatted: '۹۲,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'مشکی با نوار کریستالی', hex: '#111111', image: '/images/landings/persian-luxury-v1/woman-shoes-11.webp' }
    ],
    sizes: ['36', '37', '38', '39', '40'],
    images: ['/images/landings/persian-luxury-v1/woman-shoes-11.webp', '/images/landings/persian-luxury-v1/woman-shoes-12.webp'],
    descriptionPersian: 'صندل مول جیمی چو با نوار رویی تزیین‌شده با کریستال‌های درخشان.',
    detailsPersian: 'پاشنه ۱۰ سانتی‌متری باریک، کفی چرم گوساله ایتالیایی.',
    heelHeightPersian: '۱۰ سانتی‌متر',
    materialPersian: 'چرم ورنی با نگین‌های کریستال سواروسکی',
    isNew: true,
    isBestSeller: false,
    isCurated: true,
    stock: 2,
    isAuthentic: true,
    rating: 4.9,
    reviewCount: 21,
    careInstructionsPersian: 'اجتناب از ضربه به نگین‌ها.',
    shippingInfoPersian: 'ارسال ویژه لوکس.'
  },
  {
    id: 'pl-w-14',
    brand: 'BOTTEGA VENETA',
    name: 'صندل چرمی Stretch Leather Sandals',
    slug: 'bottega-veneta-stretch-sandals',
    category: 'shoes',
    categoryPersian: 'کفش زنانه',
    price: 82000000,
    priceFormatted: '۸۲,۰۰۰,۰۰۰ تومان',
    colors: [
      { name: 'کرم نود مدرن', hex: '#EBE5D8', image: '/images/landings/persian-luxury-v1/woman-shoes-13.webp' }
    ],
    sizes: ['36', '37', '38', '39', '40'],
    images: ['/images/landings/persian-luxury-v1/woman-shoes-13.webp', '/images/landings/persian-luxury-v1/woman-shoes-14.webp'],
    descriptionPersian: 'صندل بندی مدرن بوتگا ونتا با پنجه مربعی آیکونیک و بندهای نازک چرمی بسیار منعطف.',
    detailsPersian: 'پاشنه ۹ سانتی‌متری با کفی چرمی مجهز به برجستگی‌های لاستیکی ضدلغزش.',
    heelHeightPersian: '۹ سانتی‌متر',
    materialPersian: '۱۰۰٪ چرم گوساله Nappa فوق‌العاده نرم',
    isNew: true,
    isBestSeller: true,
    isCurated: true,
    stock: 3,
    isAuthentic: true,
    rating: 4.9,
    reviewCount: 16,
    careInstructionsPersian: 'تمیز کردن با پارچه نرم و خشک.',
    shippingInfoPersian: 'ارسال اکسپرس به همراه شناسنامه اصالت.'
  }
];

export const PRIVATE_SALE_CAMPAIGN: CampaignInfo = {
  id: 'private-sale-2026',
  titlePersian: 'فروش ویژه خصوصی',
  subtitlePersian: 'PRIVATE SALE',
  descriptionPersian: 'فرصتی منحصربه‌فرد برای تهیه محصولات منتخب از برترین برندهای بین‌المللی با تخفیف‌های محدود زمانی.',
  durationHours: 24,
  bannerImage: '/images/landings/persian-luxury-v1/eb999d2da3544527afa3f403b2f88acd.png',
  productIds: ['pl-w-03', 'pl-w-06', 'pl-w-08']
};

export const TABRIZ_STORE_INFO: StoreInfo = {
  cityPersian: 'تبریز',
  titlePersian: 'فروشگاه حضوری تبریز',
  subtitlePersian: 'تجربه‌ای فراتر از خرید آنلاین',
  addressPersian: 'تبریز، خیابان ولیعصر، مجتمع تجاری اطلس، طبقه همکف، پلاک ۱۲',
  phone: '۰۴۱-۳۳۳۳۴۴۵۵',
  workingHoursPersian: 'همه روزه از ساعت ۱۰:۰۰ الی ۲۱:۰۰ (روزهای تعطیل: ۱۶:۰۰ الی ۲۱:۰۰)',
  consultationPhone: '۰۹۱۲۰۰۰۳۳۴۴',
  noticePersian: 'اگر ترجیح می‌دهید کیفیت و اصالت محصولات را از نزدیک لمس کنید، مشتاقانه منتظر دیدار شما در بوتیک تبریز هستیم.'
};

export const AUTHENTICITY_PILLARS = [
  {
    id: 'auth-1',
    titlePersian: 'ضمانت اصالت و سلامت کالا',
    descriptionPersian: 'تمامی کیف‌ها و کفش‌های عرضه شده با ضمانت اصالت ۱۰۰٪ و شناسه کنترل کیفیت ارزیابی می‌شوند.'
  },
  {
    id: 'auth-2',
    titlePersian: 'بررسی فیزیکی پیش از ارسال',
    descriptionPersian: 'هر محصول پیش از بسته‌بندی نهایی توسط کارشناسان فنی از نظر سلامت چرم، دوخت و زیپ کنترل می‌شود.'
  },
  {
    id: 'auth-3',
    titlePersian: 'بسته‌بندی فاخر اختصاصی',
    descriptionPersian: 'محصول شما در بگ و هاردباکس مقاوم با پوشش ضد‌رطوبت و شناسنامه خریدار ارسال می‌گردد.'
  },
  {
    id: 'auth-4',
    titlePersian: 'پشتیبانی و مشاوره تخصصی',
    descriptionPersian: 'کارشناسان ما پیش و پس از ثبت سفارش، پاسخگوی تمام پرسش‌های شما درباره سایز و مشخصات محصولات هستند.'
  }
];
