export interface WomanSportColor {
  name: string;
  hex: string;
  image: string;
}

export interface WomanSportProduct {
  id: string;
  name: string;
  brand: string;
  slug: string;
  category: 'tops' | 'bottoms' | 'outerwear' | 'sets' | 'dresses';
  price: number;
  originalPrice?: number;
  colors: WomanSportColor[];
  sizes: string[];
  images: [string, string, string]; // Exactly 3 images per product
  description: string;
  fit: string;
  isNew?: boolean;
  isTrending?: boolean;
  badge?: string;
  moodTag: 'cute' | 'playful' | 'party' | 'soft' | 'cool' | 'happy';
  colorTag: 'pink' | 'blue' | 'yellow' | 'orange' | 'lavender';
  styleTag: 'sporty' | 'casual' | 'oversized' | 'street' | 'feminine';
}

export interface MoodOption {
  id: 'cute' | 'playful' | 'party' | 'soft' | 'cool' | 'happy';
  emoji: string;
  labelEn: string;
  labelFa: string;
  description: string;
  bgColor: string;
  accentColor: string;
  textColor: string;
  cardBg: string;
  sticker: string;
  heroImage: string;
  energyLevel: number; // e.g. 85 for 85%
  occasion: string; // e.g. 'دورهمی دوستانه و کافه‌گردی'
  stylistTip: string; // Styling advice
  bundleTitle: string; // e.g. 'ست کامل کیوت ژاپنی'
  mainProductId: string;
  matchingProductId: string;
  bundleDiscountPercent: number;
}

export interface ColorFilterOption {
  id: 'pink' | 'blue' | 'yellow' | 'orange' | 'lavender';
  nameFa: string;
  nameEn: string;
  hex: string;
  bgGradient: string;
  accentHex: string;
}

export interface StyleOption {
  id: 'sporty' | 'casual' | 'oversized' | 'street' | 'feminine';
  titleFa: string;
  titleEn: string;
  subtitle: string;
  image: string;
}

export interface BrandItem {
  id: string;
  name: string;
  origin: string;
  image: string;
  badge: string;
}

export interface CommunityPost {
  id: string;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  productName: string;
  tag: string;
}

export const WOMAN_SPORT_PRODUCTS: WomanSportProduct[] = [
  {
    id: 'ws-01',
    name: 'ژاکت اسپرت ترندی با برش اورسایز',
    brand: 'PUMA',
    slug: 'oversized-sport-jacket-puma',
    category: 'outerwear',
    price: 3450000,
    originalPrice: 3900000,
    colors: [
      { name: 'پاستل رز', hex: '#FF6FAE', image: '/images/woman-sport/jacket-1.webp' },
      { name: 'لاوندر لایت', hex: '#A98CFF', image: '/images/woman-sport/jacket-2.webp' },
      { name: 'آبی روشن', hex: '#7DDCFF', image: '/images/woman-sport/jacket-3.webp' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      '/images/woman-sport/jacket-1.webp',
      '/images/woman-sport/jacket-2.webp',
      '/images/woman-sport/jacket-3.webp'
    ],
    description: 'ژاکت سبک زنانه با پارچه ضد باد تنفس‌پذیر، زیپ دوطرفه و طراحی کژوال شیک.',
    fit: 'اورسایز کژوال با آستین‌های رگلان',
    isNew: true,
    isTrending: true,
    badge: 'NEW ARRIVAL ♡',
    moodTag: 'cute',
    colorTag: 'pink',
    styleTag: 'sporty'
  },
  {
    id: 'ws-02',
    name: 'جامپ‌سوت وایتال نیت آستین‌دار',
    brand: 'ALO YOGA',
    slug: 'vital-knit-jumpsuit-alo',
    category: 'sets',
    price: 4200000,
    colors: [
      { name: 'مشکی پلوم', hex: '#291A2D', image: '/images/woman-sport/jumpsuit-1.webp' },
      { name: 'کرم سافت', hex: '#FFE66D', image: '/images/woman-sport/jumpsuit-2.webp' },
      { name: 'پیچ ملایم', hex: '#FF9B78', image: '/images/woman-sport/jumpsuit-3.webp' }
    ],
    sizes: ['XS', 'S', 'M'],
    images: [
      '/images/woman-sport/jumpsuit-1.webp',
      '/images/woman-sport/jumpsuit-2.webp',
      '/images/woman-sport/jumpsuit-3.webp'
    ],
    description: 'سرهمی فیبر کشسان متراکم با خاصیت فرم‌دهی بدن و راحتی بی‌نظیر برای یوگا و تمرین.',
    fit: 'فرم‌دهنده اندامی ۴ طرفه',
    isNew: true,
    isTrending: true,
    badge: 'BEST SELLER',
    moodTag: 'soft',
    colorTag: 'lavender',
    styleTag: 'feminine'
  },
  {
    id: 'ws-03',
    name: 'کاپشن کژوال خیابانی کراپ',
    brand: 'ZARA',
    slug: 'crop-casual-jacket-zara',
    category: 'outerwear',
    price: 3890000,
    colors: [
      { name: 'آبی آسمانی', hex: '#7DDCFF', image: '/images/woman-sport/jacket-4.webp' },
      { name: 'لیمویی', hex: '#FFE66D', image: '/images/woman-sport/jacket-5.webp' },
      { name: 'پرتقالی', hex: '#FF9B78', image: '/images/woman-sport/jacket-6.webp' }
    ],
    sizes: ['S', 'M', 'L'],
    images: [
      '/images/woman-sport/jacket-4.webp',
      '/images/woman-sport/jacket-5.webp',
      '/images/woman-sport/jacket-6.webp'
    ],
    description: 'کاپشن نیمه‌کراپ با یقه ایستاده، جیب‌های دکمه‌دار مخفی و لایه تنفس‌پذیر داخلی.',
    fit: 'نیمه کراپ آزاد',
    isNew: false,
    isTrending: true,
    badge: 'SO CUTE ♡',
    moodTag: 'playful',
    colorTag: 'blue',
    styleTag: 'street'
  },
  {
    id: 'ws-04',
    name: 'جامپ‌سوت اسپرت کتان استرچ',
    brand: 'NIKE',
    slug: 'stretch-sport-jumpsuit-nike',
    category: 'dresses',
    price: 3950000,
    originalPrice: 4500000,
    colors: [
      { name: 'پاستل بابل‌گام', hex: '#FF6FAE', image: '/images/woman-sport/jumpsuit-4.webp' },
      { name: 'بنفش ملایم', hex: '#A98CFF', image: '/images/woman-sport/jumpsuit-5.webp' },
      { name: 'مشکی پلیکان', hex: '#291A2D', image: '/images/woman-sport/jumpsuit-6.webp' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      '/images/woman-sport/jumpsuit-4.webp',
      '/images/woman-sport/jumpsuit-5.webp',
      '/images/woman-sport/jumpsuit-6.webp'
    ],
    description: 'سرهمی اسپرت نایکی با فناوری Dri-FIT و دوخت‌های آناتومیک برای آزادی حرکت کامل.',
    fit: 'اسپرت مدرن منسجم',
    isNew: true,
    isTrending: false,
    badge: 'JUST IN',
    moodTag: 'happy',
    colorTag: 'pink',
    styleTag: 'sporty'
  },
  {
    id: 'ws-05',
    name: 'سویشرت و کت بومبر خیابانی',
    brand: 'ADIDAS',
    slug: 'street-bomber-jacket-adidas',
    category: 'outerwear',
    price: 4100000,
    colors: [
      { name: 'لیمویی روشن', hex: '#FFE66D', image: '/images/woman-sport/jacket-7.webp' },
      { name: 'پیچ صورتی', hex: '#FF9B78', image: '/images/woman-sport/jacket-8.webp' },
      { name: 'پاستل روز', hex: '#FF6FAE', image: '/images/woman-sport/jacket-1.webp' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/woman-sport/jacket-7.webp',
      '/images/woman-sport/jacket-8.webp',
      '/images/woman-sport/jacket-1.webp'
    ],
    description: 'کت بومبر ۳خط آدیداس با برش مدرن، لبه‌های کشبافت نخی و زیپ فلزی براق.',
    fit: 'اورسایز مدرن',
    isNew: false,
    isTrending: true,
    badge: 'MUST HAVE',
    moodTag: 'cool',
    colorTag: 'yellow',
    styleTag: 'oversized'
  },
  {
    id: 'ws-06',
    name: 'ست سرهمی و لگ الگانت پرو',
    brand: 'LULULEMON',
    slug: 'elegant-pro-set-lululemon',
    category: 'sets',
    price: 4800000,
    colors: [
      { name: 'پیچ ارگانیک', hex: '#FF9B78', image: '/images/woman-sport/jumpsuit-7.webp' },
      { name: 'لاوندر پاستلی', hex: '#A98CFF', image: '/images/woman-sport/jumpsuit-8.webp' },
      { name: 'آبی ملایم', hex: '#7DDCFF', image: '/images/woman-sport/jumpsuit-9.webp' }
    ],
    sizes: ['XS', 'S', 'M'],
    images: [
      '/images/woman-sport/jumpsuit-7.webp',
      '/images/woman-sport/jumpsuit-8.webp',
      '/images/woman-sport/jumpsuit-9.webp'
    ],
    description: 'ست حرفه‌ای لولولمون با پارچه Nulu اختصاصی، حس لمس ابریشمی و بدون درز.',
    fit: 'جذب نمدی شیک',
    isNew: true,
    isTrending: true,
    badge: 'LUXE EDIT',
    moodTag: 'soft',
    colorTag: 'orange',
    styleTag: 'feminine'
  },
  {
    id: 'ws-07',
    name: 'پالتو اسپرت سبک زپ‌دار',
    brand: 'MANGO',
    slug: 'lightweight-zip-coat-mango',
    category: 'outerwear',
    price: 3250000,
    originalPrice: 3700000,
    colors: [
      { name: 'لاوندر روشن', hex: '#A98CFF', image: '/images/woman-sport/jacket-2.webp' },
      { name: 'صورتی ملایم', hex: '#FF6FAE', image: '/images/woman-sport/jacket-3.webp' },
      { name: 'لیمویی روشن', hex: '#FFE66D', image: '/images/woman-sport/jacket-4.webp' }
    ],
    sizes: ['S', 'M', 'L'],
    images: [
      '/images/woman-sport/jacket-2.webp',
      '/images/woman-sport/jacket-3.webp',
      '/images/woman-sport/jacket-4.webp'
    ],
    description: 'ژاکت زنانه مانگو با پارچه مموری لطیف، یقه پیراهنی مدرن و دکمه‌های پرسی مخفی.',
    fit: 'کژوال راحت',
    isNew: false,
    isTrending: false,
    moodTag: 'cute',
    colorTag: 'lavender',
    styleTag: 'casual'
  },
  {
    id: 'ws-08',
    name: 'جامپ‌سوت بادی‌سوت تمرینی',
    brand: 'GYMSHARK',
    slug: 'seamless-bodysuit-gymshark',
    category: 'sets',
    price: 3600000,
    colors: [
      { name: 'مشکی پلوم', hex: '#291A2D', image: '/images/woman-sport/jumpsuit-10.webp' },
      { name: 'صورتی بابل‌گام', hex: '#FF6FAE', image: '/images/woman-sport/jumpsuit-1.webp' },
      { name: 'کرم لیمویی', hex: '#FFE66D', image: '/images/woman-sport/jumpsuit-2.webp' }
    ],
    sizes: ['XS', 'S', 'M'],
    images: [
      '/images/woman-sport/jumpsuit-10.webp',
      '/images/woman-sport/jumpsuit-1.webp',
      '/images/woman-sport/jumpsuit-2.webp'
    ],
    description: 'سرهمی یکپارچه جیم‌شارک با خطوط ساختاری نگهدارنده و ظاهری فوق‌العاده جذاب.',
    fit: 'جذب یکنواخت بی درز',
    isNew: true,
    isTrending: true,
    badge: 'POPULAR ♡',
    moodTag: 'party',
    colorTag: 'pink',
    styleTag: 'sporty'
  },
  {
    id: 'ws-09',
    name: 'ژاکت بادی کاستوم کژوال',
    brand: 'ALO YOGA',
    slug: 'casual-body-jacket-alo',
    category: 'outerwear',
    price: 3750000,
    colors: [
      { name: 'آبی ملایم', hex: '#7DDCFF', image: '/images/woman-sport/jacket-5.webp' },
      { name: 'پرتقالی روشن', hex: '#FF9B78', image: '/images/woman-sport/jacket-6.webp' },
      { name: 'لاوندر پاستلی', hex: '#A98CFF', image: '/images/woman-sport/jacket-7.webp' }
    ],
    sizes: ['S', 'M', 'L'],
    images: [
      '/images/woman-sport/jacket-5.webp',
      '/images/woman-sport/jacket-6.webp',
      '/images/woman-sport/jacket-7.webp'
    ],
    description: 'کاپشن کژوال با آستر پنبه‌ای ضد حساسیت، بندهای تنظیمی کمر و زیپ روان فلزی.',
    fit: 'برش قابل تنظیم کمر',
    isNew: false,
    isTrending: true,
    moodTag: 'happy',
    colorTag: 'blue',
    styleTag: 'casual'
  },
  {
    id: 'ws-10',
    name: 'ست سرهمی ویند‌پروف روزمره',
    brand: 'NIKE',
    slug: 'windproof-daily-set-nike',
    category: 'dresses',
    price: 4300000,
    colors: [
      { name: 'پرتقالی پاستل', hex: '#FF9B78', image: '/images/woman-sport/jumpsuit-3.webp' },
      { name: 'آبی فیروزه‌ای', hex: '#7DDCFF', image: '/images/woman-sport/jumpsuit-4.webp' },
      { name: 'کرم هلویی', hex: '#FFE66D', image: '/images/woman-sport/jumpsuit-5.webp' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      '/images/woman-sport/jumpsuit-3.webp',
      '/images/woman-sport/jumpsuit-4.webp',
      '/images/woman-sport/jumpsuit-5.webp'
    ],
    description: 'جامپ‌سوت نایکی با بافت ظریف شبکه‌ای داخلی و طراحی مینیمال و شیک استریت.',
    fit: 'برش مچ پای منقبض',
    isNew: true,
    isTrending: false,
    badge: 'NEW LOOK',
    moodTag: 'playful',
    colorTag: 'orange',
    styleTag: 'street'
  },
  {
    id: 'ws-11',
    name: 'کت اسپرت اورسایز پاستلی',
    brand: 'ZARA',
    slug: 'pastel-oversized-blazer-zara',
    category: 'outerwear',
    price: 3980000,
    colors: [
      { name: 'صورتی بابل‌گام', hex: '#FF6FAE', image: '/images/woman-sport/jacket-8.webp' },
      { name: 'لاوندر لایت', hex: '#A98CFF', image: '/images/woman-sport/jacket-1.webp' },
      { name: 'آبی پاستلی', hex: '#7DDCFF', image: '/images/woman-sport/jacket-2.webp' }
    ],
    sizes: ['S', 'M', 'L'],
    images: [
      '/images/woman-sport/jacket-8.webp',
      '/images/woman-sport/jacket-1.webp',
      '/images/woman-sport/jacket-2.webp'
    ],
    description: 'کت اورسایز زارا با رنگ‌های پاستلی جذاب، اپول‌های سبک و آستر خنک توری.',
    fit: 'اورسایز مدرن بومبر',
    isNew: false,
    isTrending: true,
    badge: 'OMG LOVE IT ♡',
    moodTag: 'cool',
    colorTag: 'pink',
    styleTag: 'oversized'
  },
  {
    id: 'ws-12',
    name: 'سرهمی فیتنس نویگیتور پرو',
    brand: 'PUMA',
    slug: 'navigator-pro-jumpsuit-puma',
    category: 'sets',
    price: 3800000,
    colors: [
      { name: 'لیموئی روشن', hex: '#FFE66D', image: '/images/woman-sport/jumpsuit-6.webp' },
      { name: 'پیچ پاستلی', hex: '#FF9B78', image: '/images/woman-sport/jumpsuit-7.webp' },
      { name: 'بنفش پلوم', hex: '#291A2D', image: '/images/woman-sport/jumpsuit-8.webp' }
    ],
    sizes: ['XS', 'S', 'M'],
    images: [
      '/images/woman-sport/jumpsuit-6.webp',
      '/images/woman-sport/jumpsuit-7.webp',
      '/images/woman-sport/jumpsuit-8.webp'
    ],
    description: 'جامپ‌سوت خنک فیتنس پوما با فناوری DryCell برای دفع سریع رطوبت در تمرین‌های سنگین.',
    fit: 'فیتنس آناتومیک',
    isNew: true,
    isTrending: true,
    badge: 'TRENDING NOW',
    moodTag: 'happy',
    colorTag: 'yellow',
    styleTag: 'sporty'
  }
];

export const MOOD_OPTIONS: MoodOption[] = [
  {
    id: 'cute',
    emoji: '🎀',
    labelEn: 'CUTE',
    labelFa: 'کیوت & دخترانه',
    description: 'ترکیب رنگ‌های پاستلی صورتی و لاوندر با حس شادابی، ظرافت و لطافت مدرن.',
    bgColor: '#FFF5F8',
    accentColor: '#FF6FAE',
    textColor: '#291A2D',
    cardBg: '#FFEBF3',
    sticker: 'SO CUTE ♡',
    heroImage: '/images/woman-sport/jacket-1.webp',
    energyLevel: 85,
    occasion: 'دورهمی‌های کژوال، قرارهای دوستانه و کافه‌گردی شهری',
    stylistTip: 'این لوک را با کتونی پاستلی سفید-صورتی و یک جفت جوراب ساق‌دار سفید ست کنید تا جلوه شاداب Gen-Z کامل شود.',
    bundleTitle: 'ست کیوت پاستلی PUMA + ALO',
    mainProductId: 'ws-01',
    matchingProductId: 'ws-02',
    bundleDiscountPercent: 12
  },
  {
    id: 'playful',
    emoji: '🍓',
    labelEn: 'PLAYFUL',
    labelFa: 'سرزنده & بازیگوش',
    description: 'رنگ‌های پرانرژی آبی آسمانی و نارنجی روشن برای روزهای پرتحرک و اکتیو.',
    bgColor: '#FFF8F0',
    accentColor: '#FF9B78',
    textColor: '#291A2D',
    cardBg: '#FFEFE5',
    sticker: 'LOVE IT! 🍓',
    heroImage: '/images/woman-sport/jumpsuit-3.webp',
    energyLevel: 92,
    occasion: 'پیاده‌روی عصرگاهی، گشت‌وگذار در شهر و فعالیت‌های بیرونی',
    stylistTip: 'استفاده از کاپشن کراپ آبی در کنار جامپ‌سوت نارنجی یک تضاد رنگی بسیار شیک و عکس‌پذیر ایجاد می‌کند.',
    bundleTitle: 'ست اکتیو زارا + نایکی',
    mainProductId: 'ws-03',
    matchingProductId: 'ws-10',
    bundleDiscountPercent: 10
  },
  {
    id: 'party',
    emoji: '🪩',
    labelEn: 'PARTY',
    labelFa: 'شب & دورهمی',
    description: 'استایل‌های بادی‌سوت با تناژ پلوم عمیق و جزییات درخشان برای درخشش در شب.',
    bgColor: '#291A2D',
    accentColor: '#A98CFF',
    textColor: '#FFFDFC',
    cardBg: '#38253E',
    sticker: 'PARTY MODE 🪩',
    heroImage: '/images/woman-sport/jumpsuit-10.webp',
    energyLevel: 95,
    occasion: 'مهمانی‌های شبانه، دورهمی و استایل جسورانه استریت',
    stylistTip: 'جامپ‌سوت جذب مشکی-پلوم را با کت بومبر نیمه‌باز ست کنید و اکسسوری‌های نقره‌ای مدرن به آن اضافه کنید.',
    bundleTitle: 'ست نایت لایف GYMSHARK + ZARA',
    mainProductId: 'ws-08',
    matchingProductId: 'ws-11',
    bundleDiscountPercent: 15
  },
  {
    id: 'soft',
    emoji: '☁️',
    labelEn: 'SOFT',
    labelFa: 'آرامش & یوگا',
    description: 'بافت‌های بی‌نظیر Nulu و فیبر ابریشمی برای یوگا، مدیتیشن و استراحت کامل.',
    bgColor: '#F4F2FF',
    accentColor: '#A98CFF',
    textColor: '#291A2D',
    cardBg: '#EAE6FF',
    sticker: 'FEELS LIKE CLOUD ☁️',
    energyLevel: 50,
    heroImage: '/images/woman-sport/jumpsuit-7.webp',
    occasion: 'تمرینات یوگا، پیلاتس، ریلکسیشن خانه و سفرهای راحت',
    stylistTip: 'این ست فوق‌العاده نرم با پارچه Nulu حس لمس ابریشم روی پوست دارد. گزینه‌ای بی‌نظیر برای حس آرامش خالص.',
    bundleTitle: 'ست آرامش LULULEMON + ALO',
    mainProductId: 'ws-06',
    matchingProductId: 'ws-02',
    bundleDiscountPercent: 10
  },
  {
    id: 'cool',
    emoji: '🖤',
    labelEn: 'COOL',
    labelFa: 'کول & اورسایز',
    description: 'استریت‌استایل‌های اورسایز با فرم‌های آزاد، ژاپنی و خطوط مینیمال.',
    bgColor: '#F2F6F9',
    accentColor: '#291A2D',
    textColor: '#291A2D',
    cardBg: '#E2EAF1',
    sticker: 'TOO COOL 🔥',
    heroImage: '/images/woman-sport/jacket-8.webp',
    energyLevel: 78,
    occasion: 'قرار کاری کژوال، گالری‌گردی و دانشگاه',
    stylistTip: 'کت اورسایز با دکمه‌های پرسی مخفی و شلوار بگ، حس اطمینان، مدرنیته و استایل خاص شهری را متکثر می‌کند.',
    bundleTitle: 'ست استریت اورسایز ADIDAS + ZARA',
    mainProductId: 'ws-05',
    matchingProductId: 'ws-11',
    bundleDiscountPercent: 12
  },
  {
    id: 'happy',
    emoji: '☀️',
    labelEn: 'HAPPY',
    labelFa: 'شاد & خورشیدی',
    description: 'تناژهای روشن خورشیدی، لیمویی و نارنجی پاستلی برای انتقال انرژی مثبت.',
    bgColor: '#FFFDF0',
    accentColor: '#FFE66D',
    textColor: '#291A2D',
    cardBg: '#FFF9D6',
    sticker: 'SUNNY VIBES ☀️',
    heroImage: '/images/woman-sport/jacket-7.webp',
    energyLevel: 88,
    occasion: 'روزهای آفتابی، دورهمی‌های فضای باز و باشگاه',
    stylistTip: 'ترکیب کت بومبر لیمویی روشن با جامپ‌سوت استرچ، ظاهری پر از نور و حس شادابی تابستانی خلق می‌کند.',
    bundleTitle: 'ست خورشیدی PUMA + NIKE',
    mainProductId: 'ws-12',
    matchingProductId: 'ws-04',
    bundleDiscountPercent: 14
  }
];

export const COLOR_FILTER_OPTIONS: ColorFilterOption[] = [
  {
    id: 'pink',
    nameFa: 'صورتی پاستلی',
    nameEn: 'Bubblegum Pink',
    hex: '#FF6FAE',
    bgGradient: 'from-[#FFEBF3] to-[#FFFDFC]',
    accentHex: '#FF6FAE'
  },
  {
    id: 'blue',
    nameFa: 'آبی آسمانی',
    nameEn: 'Baby Blue',
    hex: '#7DDCFF',
    bgGradient: 'from-[#EBF8FF] to-[#FFFDFC]',
    accentHex: '#7DDCFF'
  },
  {
    id: 'yellow',
    nameFa: 'لیموئی روشن',
    nameEn: 'Lemon Yellow',
    hex: '#FFE66D',
    bgGradient: 'from-[#FFFDEB] to-[#FFFDFC]',
    accentHex: '#FFE66D'
  },
  {
    id: 'orange',
    nameFa: 'پرتقالی ملایم',
    nameEn: 'Peach Orange',
    hex: '#FF9B78',
    bgGradient: 'from-[#FFF0EB] to-[#FFFDFC]',
    accentHex: '#FF9B78'
  },
  {
    id: 'lavender',
    nameFa: 'لاوندر لایت',
    nameEn: 'Lavender',
    hex: '#A98CFF',
    bgGradient: 'from-[#F3EFFF] to-[#FFFDFC]',
    accentHex: '#A98CFF'
  }
];

export const STYLE_OPTIONS: StyleOption[] = [
  {
    id: 'sporty',
    titleFa: 'اسپرت & عمل‌گرایانه',
    titleEn: 'ATHLETIC & SPORTY',
    subtitle: 'طراحی شده برای تمرین، باشگاه و حرکت‌های پرانرژی روزانه',
    image: '/images/woman-sport/jumpsuit-1.webp'
  },
  {
    id: 'casual',
    titleFa: 'کژوال & روزمره',
    titleEn: 'EVERYDAY CASUAL',
    subtitle: 'استایل راحت برای دورهمی‌های دوستانه و پیاده‌روی شهری',
    image: '/images/woman-sport/jacket-1.webp'
  },
  {
    id: 'oversized',
    titleFa: 'اورسایز & راحت',
    titleEn: 'RELAXED OVERSIZED',
    subtitle: 'برش‌های آزاد ژاپنی برای کسانی که راحتی را اولویت اول می‌دانند',
    image: '/images/woman-sport/jacket-8.webp'
  },
  {
    id: 'street',
    titleFa: 'استریت‌استایل',
    titleEn: 'STREETWEAR TRENDS',
    subtitle: 'ترکیب مد خیابانی با المان‌های Gen-Z و رنگ‌های تند',
    image: '/images/woman-sport/jacket-4.webp'
  },
  {
    id: 'feminine',
    titleFa: 'فمنین & شیک',
    titleEn: 'FEMININE SILHOUETTES',
    subtitle: 'فرم‌های انحنا‌دار و جذاب با تناژهای نرم و دلنشین',
    image: '/images/woman-sport/jumpsuit-7.webp'
  }
];

export const BRAND_ITEMS: BrandItem[] = [
  {
    id: 'b-01',
    name: 'NIKE',
    origin: 'USA • Athleticwear',
    image: '/images/woman-sport/jumpsuit-4.webp',
    badge: '18 PRODUCTS'
  },
  {
    id: 'b-02',
    name: 'ADIDAS',
    origin: 'Germany • Street & Sport',
    image: '/images/woman-sport/jacket-7.webp',
    badge: '22 PRODUCTS'
  },
  {
    id: 'b-03',
    name: 'ALO YOGA',
    origin: 'Los Angeles • Studio Wear',
    image: '/images/woman-sport/jumpsuit-1.webp',
    badge: '15 PRODUCTS'
  },
  {
    id: 'b-04',
    name: 'LULULEMON',
    origin: 'Canada • Premium Active',
    image: '/images/woman-sport/jumpsuit-7.webp',
    badge: '12 PRODUCTS'
  },
  {
    id: 'b-05',
    name: 'PUMA',
    origin: 'Germany • Sport Fashion',
    image: '/images/woman-sport/jacket-1.webp',
    badge: '14 PRODUCTS'
  },
  {
    id: 'b-06',
    name: 'ZARA',
    origin: 'Spain • Casual Fast Fashion',
    image: '/images/woman-sport/jacket-4.webp',
    badge: '25 PRODUCTS'
  },
  {
    id: 'b-07',
    name: 'MANGO',
    origin: 'Spain • European Casual',
    image: '/images/woman-sport/jacket-2.webp',
    badge: '10 PRODUCTS'
  },
  {
    id: 'b-08',
    name: 'GYMSHARK',
    origin: 'UK • Fitness & Seamless',
    image: '/images/woman-sport/jumpsuit-10.webp',
    badge: '16 PRODUCTS'
  }
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 'c-01',
    username: 'sara_lifestyle',
    avatar: '/images/woman-sport/jacket-1.webp',
    image: '/images/woman-sport/jacket-1.webp',
    likes: 1240,
    productName: 'ژاکت اسپرت پاستل PUMA',
    tag: '#SportyLook'
  },
  {
    id: 'c-02',
    username: 'niloofooor',
    avatar: '/images/woman-sport/jumpsuit-1.webp',
    image: '/images/woman-sport/jumpsuit-1.webp',
    likes: 2180,
    productName: 'جامپ‌سوت وایتال ALO YOGA',
    tag: '#AloInTehran'
  },
  {
    id: 'c-03',
    username: 'parmida_style',
    avatar: '/images/woman-sport/jacket-4.webp',
    image: '/images/woman-sport/jacket-4.webp',
    likes: 980,
    productName: 'کاپشن خیابانی کراپ ZARA',
    tag: '#ZaraCasual'
  },
  {
    id: 'c-04',
    username: 'melika.active',
    avatar: '/images/woman-sport/jumpsuit-7.webp',
    image: '/images/woman-sport/jumpsuit-7.webp',
    likes: 1750,
    productName: 'ست سرهمی LULULEMON',
    tag: '#LuluOutfit'
  }
];
