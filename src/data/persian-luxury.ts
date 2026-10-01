import { Product, Look, LandingPageInfo } from '../types';

export interface PersianProduct extends Omit<Product, 'price' | 'currency' | 'category'> {
  price: number;
  priceFormatted: string;
  currency: string;
  category: 'pants' | 'shirts' | 'hoodies' | 'jackets' | 'accessories';
  categoryPersian: string;
  descriptionPersian: string;
  materialPersian: string;
  fitPersian: string;
  badgePersian?: string;
}

export const PERSIAN_LUXURY_PRODUCTS: PersianProduct[] = [
  {
    id: 'pl-01',
    name: 'شلوار کارگو Rovic Zip 3D خاکستری',
    slug: 'rovic-zip-3d-grey',
    category: 'pants',
    categoryPersian: 'شلوار و جین',
    price: 4850000,
    priceFormatted: '۴,۸۵۰,۰۰۰ تومان',
    currency: 'تومان',
    colors: [
      { name: 'خاکستری ذغالی', hex: '#4A4A4A', image: '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png' },
      { name: 'مشکی کلاسیک', hex: '#1A1A1A', image: '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png' }
    ],
    sizes: ['48', '50', '52', '54'],
    images: [
      '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png',
      '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png'
    ],
    description: 'شلوار کارگو سه‌بعدی با برش مدرن مهندسی‌شده، جیب‌های زیپ‌دار کاربردی و پارچه کتان ارگانیک مقاوم. انتخابی ایده‌آل برای استایل‌های پریمیوم و مدرن شهری.',
    descriptionPersian: 'شلوار کارگو سه‌بعدی با برش مدرن مهندسی‌شده، جیب‌های زیپ‌دار کاربردی و پارچه کتان ارگانیک مقاوم.',
    material: '100% Cotton Twill',
    materialPersian: '۱۰۰٪ کتان پنبه‌ای متراکم ارگانیک با بافت کج‌راه مقاوم',
    fit: 'Tapered Fit',
    fitPersian: 'برش مخروطی مهندسی‌شده (Straight Tapered)',
    featured: true,
    isNew: true,
    badge: 'کالکشن جدید',
    badgePersian: 'کالکشن جدید',
    rating: 4.9,
    reviewCount: 42,
    careInstructions: 'شستشو با آب ۳۰ درجه، بدون استفاده از سفیدکننده، اتوکشی با دمای متوسط.',
    shippingInfo: 'ارسال اکسپرس سراسری با بسته‌بندی لوکس کادویی.'
  },
  {
    id: 'pl-02',
    name: 'سویشرت هودی Premium Core ذغالی',
    slug: 'premium-core-hoodie-grey',
    category: 'hoodies',
    categoryPersian: 'هودی و دورس',
    price: 3950000,
    priceFormatted: '۳,۹۵۰,۰۰۰ تومان',
    currency: 'تومان',
    colors: [
      { name: 'خاکستری ملانژ', hex: '#888888', image: '/images/men-hoodies/g-star-premium-core-hooded-sweater-grey.png' },
      { name: 'سورمه‌ای عمیق', hex: '#1B263B', image: '/images/men-hoodies/g-star-sunfaded-sweater-dark-blue.png' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-hooded-sweater-grey.png',
      '/images/men-hoodies/g-star-sunfaded-sweater-dark-blue.png'
    ],
    description: 'هودی نیمه‌سنگین ۴۲۰ گرمی با کلاه دو لایه ساختاریافته و آستر دورس نرم برپایه پنبه خالص ارگانیک. ترکیبی از راحتی بی‌نظیر و وقار استایل مینیمال.',
    descriptionPersian: 'هودی نیمه‌سنگین ۴۲۰ گرمی با کلاه دو لایه ساختاریافته و آستر دورس نرم برپایه پنبه خالص ارگانیک.',
    material: '80% Organic Cotton, 20% Recycled Poly',
    materialPersian: '۸۰٪ پنبه ارگانیک پریمیوم، ۲۰٪ پلی‌استر بازیافتی مقاوم',
    fit: 'Relaxed Fit',
    fitPersian: 'آزاد و مدرن (Relaxed Fit)',
    featured: true,
    isNew: false,
    badge: 'پرفروش',
    badgePersian: 'پرفروش',
    rating: 5.0,
    reviewCount: 88
  },
  {
    id: 'pl-03',
    name: 'تی‌شرت یقه هنلی Waffle Henley سفید',
    slug: 'waffle-henley-white',
    category: 'shirts',
    categoryPersian: 'تی‌شرت و پولوشرت',
    price: 2450000,
    priceFormatted: '۲,۴۵۰,۰۰۰ تومان',
    currency: 'تومان',
    colors: [
      { name: 'سفید عاجی', hex: '#F9F9F6', image: '/images/Men-shirts/g-star-waffle-henley-relaxed-t-shirt-white.png' },
      { name: 'کرم نود', hex: '#E2D8C3', image: '/images/Men-shirts/g-star-lash-t-shirt-beige.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-waffle-henley-relaxed-t-shirt-white.png',
      '/images/Men-shirts/g-star-lash-t-shirt-beige.png'
    ],
    description: 'تی‌شرت یقه دکمه‌دار هافلی با بافت سوزنی وافل از پنبه مصر. خنک، تنفس‌پذیر و شیک برای لایه‌بندی‌های مینیمال در تمامی فصل‌ها.',
    descriptionPersian: 'تی‌شرت یقه دکمه‌دار هافلی با بافت سوزنی وافل از پنبه مصر.',
    material: '100% Waffle Cotton',
    materialPersian: '۱۰۰٪ پنبه مصر با بافت سوزنی وافل پریمیوم',
    fit: 'Regular Fit',
    fitPersian: 'استاندارد شیک (Regular Fit)',
    featured: true,
    isNew: true,
    badge: 'پیشنهاد ویژه',
    badgePersian: 'پیشنهاد ویژه',
    rating: 4.8,
    reviewCount: 29
  },
  {
    id: 'pl-04',
    name: 'شلوار جین Bend Loose نیل تیره',
    slug: 'bend-loose-jeans-dark-blue',
    category: 'pants',
    categoryPersian: 'شلوار و جین',
    price: 5200000,
    priceFormatted: '۵,۲۰۰,۰۰۰ تومان',
    currency: 'تومان',
    colors: [
      { name: 'آبی تیره اندیگو', hex: '#1C2D42', image: '/images/Men-panets/g-star-bend-loose-jeans-dark-blue.png' },
      { name: 'آبی روشن سنباده‌ای', hex: '#7CA0C2', image: '/images/Men-panets/g-star-bend-loose-jeans-light-blue.png' }
    ],
    sizes: ['30/32', '32/32', '34/32', '36/32'],
    images: [
      '/images/Men-panets/g-star-bend-loose-jeans-dark-blue.png',
      '/images/Men-panets/g-star-bend-loose-jeans-light-blue.png'
    ],
    description: 'جین انحنا‌دار کات لوز با پارچه دنیم سنگین ۱۴ اونسی ژاپنی و شستشوی طبیعی اندیگو. طراحی جسورانه و فاخر برای علاقه‌مندان به مد پیشرو.',
    descriptionPersian: 'جین انحنا‌دار کات لوز با پارچه دنیم سنگین ۱۴ اونسی ژاپنی.',
    material: '100% Japanese Denim 14oz',
    materialPersian: '۱۰۰٪ دنیم خام ژاپنی ۱۴ اونسی با شستشوی طبیعی سنگ‌شور',
    fit: 'Loose Curved Fit',
    fitPersian: 'آزاد انحنا‌دار (Loose Curved)',
    featured: true,
    isNew: true,
    badge: 'نسخه محدود',
    badgePersian: 'نسخه محدود',
    rating: 4.9,
    reviewCount: 31
  },
  {
    id: 'pl-05',
    name: 'دورس زیپ‌دار Core Half Zip سورمه‌ای',
    slug: 'core-half-zip-dark-blue',
    category: 'hoodies',
    categoryPersian: 'هودی و دورس',
    price: 4100000,
    priceFormatted: '۴,۱۰۰,۰۰۰ تومان',
    currency: 'تومان',
    colors: [
      { name: 'سورمه‌ای سلطنتی', hex: '#131E2B', image: '/images/men-hoodies/g-star-premium-core-half-zip-sweater-dark-blue.png' },
      { name: 'مشکی نیمه‌مات', hex: '#111111', image: '/images/men-hoodies/g-star-core-half-zip-sweat-black.png' }
    ],
    sizes: ['M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-half-zip-sweater-dark-blue.png',
      '/images/men-hoodies/g-star-core-half-zip-sweat-black.png'
    ],
    description: 'دورس زیپ‌دار ایستاده با زیپ فلزی باکیفیت و سرآستین‌های کشباف متراکم. ایده‌آل برای هماهنگی با کت‌های تک اسپرت و کاپشن‌های زمستانه.',
    descriptionPersian: 'دورس زیپ‌دار ایستاده با زیپ فلزی باکیفیت و سرآستین‌های کشباف متراکم.',
    material: '85% Heavy Terry Cotton, 15% Elastane',
    materialPersian: '۸۵٪ پنبه دورس سنگین، ۱۵٪ کشسانی راحت',
    fit: 'Tailored Sport Fit',
    fitPersian: 'اسپرت فیت (Tailored Sport)',
    featured: false,
    isNew: false,
    rating: 4.8,
    reviewCount: 19
  },
  {
    id: 'pl-06',
    name: 'تی‌شرت گرانپاد Structured Tweeter سفید',
    slug: 'tweeter-grandad-shirt-white',
    category: 'shirts',
    categoryPersian: 'تی‌شرت و پولوشرت',
    price: 2600000,
    priceFormatted: '۲,۶۰۰,۰۰۰ تومان',
    currency: 'تومان',
    colors: [
      { name: 'سفید خالص', hex: '#FFFFFF', image: '/images/Men-shirts/g-star-structured-tweeter-grandad-t-shirt-white.png' },
      { name: 'کرم نسکافه‌ای', hex: '#C2B49A', image: '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-structured-tweeter-grandad-t-shirt-white.png',
      '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png'
    ],
    description: 'تی‌شرت یقه دیپلماتی با بافت ریب ساختاریافته و دکمه‌های صدفی طبیعی. طراحی ساده و فوق‌العاده جذاب برای روزهای گرم.',
    descriptionPersian: 'تی‌شرت یقه دیپلماتی با بافت ریب ساختاریافته و دکمه‌های صدفی طبیعی.',
    material: '100% Structured Organic Cotton',
    materialPersian: '۱۰۰٪ کتان بافت‌دار ساختاریافته',
    fit: 'Contemporary Straight Fit',
    fitPersian: 'راسته مدرن',
    featured: false,
    isNew: true,
    rating: 4.7,
    reviewCount: 15
  },
  {
    id: 'pl-07',
    name: 'شلوار کارگو قهوه‌ای Rovic Zip 3D',
    slug: 'rovic-zip-3d-brown',
    category: 'pants',
    categoryPersian: 'شلوار و جین',
    price: 4900000,
    priceFormatted: '۴,۹۰۰,۰۰۰ تومان',
    currency: 'تومان',
    colors: [
      { name: 'قهوه‌ای زیتونی', hex: '#5A4A3A', image: '/images/Men-panets/g-star-rovic-zip-3d-regular-tapered-pants-brown (1).png' }
    ],
    sizes: ['48', '50', '52'],
    images: [
      '/images/Men-panets/g-star-rovic-zip-3d-regular-tapered-pants-brown (1).png'
    ],
    description: 'شلوار کارگو با رنگ خاکی-قهوه‌ای فاخر و پارچه کتان ضدسایش. عالی برای هماهنگ‌سازی با استایل‌های خنثی و خاکی لوکس.',
    descriptionPersian: 'شلوار کارگو با رنگ خاکی-قهوه‌ای فاخر و پارچه کتان ضدسایش.',
    material: '100% Heavy Cotton Twill',
    materialPersian: '۱۰۰٪ کتان پنبه سنگین با گرماژ بالا',
    fit: 'Regular Tapered',
    fitPersian: 'راسته مخروطی (Regular Tapered)',
    featured: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 22
  },
  {
    id: 'pl-08',
    name: 'کاپشن جکت سویشرتی Track Jacket سورمه‌ای',
    slug: 'track-jacket-dark-blue',
    category: 'jackets',
    categoryPersian: 'کاپشن و جکت',
    price: 5800000,
    priceFormatted: '۵,۸۰۰,۰۰۰ تومان',
    currency: 'تومان',
    colors: [
      { name: 'سورمه‌ای عمیق', hex: '#0F1826', image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png'
    ],
    description: 'جکت اسپرت لوکس تمام‌زیپ با بافت کشباف باکیفیت و خطوط جزییات دوخت ظریف. هماهنگی بی‌نظیر برای فعالیت‌های شیک روزمره.',
    descriptionPersian: 'جکت اسپرت لوکس تمام‌زیپ با بافت کشباف باکیفیت.',
    material: '70% Cotton, 30% Tech Blend',
    materialPersian: '۷۰٪ پنبه دو لایه، ۳۰٪ الیاف فنی ضدچروک',
    fit: 'Athletic Luxury Fit',
    fitPersian: 'کت اسپرت لایت',
    featured: true,
    isNew: true,
    badge: 'شاهکار فصل',
    badgePersian: 'شاهکار فصل',
    rating: 5.0,
    reviewCount: 18
  }
];

export const PERSIAN_LUXURY_LOOKS: Look[] = [
  {
    id: 'pl-look-01',
    number: 'استایل ۰۱',
    title: 'مجموعه مدرن شهری',
    subtitle: 'شیک، راحتی و وقار',
    name: 'ترکیب کارگو Rovic Zip و سویشرت Premium Core',
    price: 8800000,
    image: '/images/banners/Group-242.jpg',
    products: [PERSIAN_LUXURY_PRODUCTS[0], PERSIAN_LUXURY_PRODUCTS[1]] as any,
    description: 'ترکیب باوقار خاکستری ذغالی با برش‌های سه‌بعدی مهندسی‌شده. ایده‌آل برای آقایانی که به جزییات استایل خود اهمیت می‌دهند.'
  },
  {
    id: 'pl-look-02',
    number: 'استایل ۰۲',
    title: 'کالکشن نیل و اندیگو',
    subtitle: 'دنیم ژاپنی و تی‌شرت وافل',
    name: 'ست جین Bend Loose و تی‌شرت هافلی',
    price: 7650000,
    image: '/images/Men-panets/g-star-bend-loose-jeans-dark-blue.png',
    products: [PERSIAN_LUXURY_PRODUCTS[3], PERSIAN_LUXURY_PRODUCTS[2]] as any,
    description: 'ترکیب دنیم اندیگوی خام ژاپنی با خنکی بافت سوزنی وافل. حس لمس کیفیت واقعی در هر گام.'
  }
];

export const PERSIAN_LANDING_INFO: LandingPageInfo = {
  slug: 'persian-luxury-v1',
  category: 'men-formal',
  title: 'گارنِت — پوشاک لوکس و فاخر مردانه',
  description: 'کالکشن فاخر و لوکس پوشاک مردانه با طراحی مدرن، پارچه‌های ارگانیک، خطوط دوخت پریمیوم و تجربه خرید تخصصی به زبان فارسی.',
  theme: 'persian-lux-dark-gold',
  dataset: 'PERSIAN_LUXURY_PRODUCTS',
  previewImage: '/images/banners/Group-242.jpg'
};
