import { Product, Look, LookbookSlide, LandingPageInfo } from '../types';

export const NOIRE_PRODUCTS: Product[] = [
  {
    id: 'noire-01',
    name: 'The Architect Blazer',
    slug: 'the-architect-blazer',
    category: 'blazers',
    price: 289,
    currency: 'EUR',
    colors: [
      { name: 'Charcoal', hex: '#2B2B2B', image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png' },
      { name: 'Black', hex: '#111111', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png'
    ],
    description: 'A structured contemporary blazer cut from a refined wool blend, designed for a clean architectural silhouette from day to evening.',
    material: '68% Virgin Wool, 28% Polyester, 4% Elastane. Lining: 100% Cupro.',
    fit: 'Relaxed tailored fit with padded shoulders and unstructured waist.',
    featured: true,
    isNew: true,
    badge: 'ESSENTIAL',
    rating: 4.9,
    reviewCount: 38,
    careInstructions: 'Dry clean only. Warm iron if needed. Store on a structured hanger.',
    shippingInfo: 'Standard shipping 2-4 business days. Express shipping available.'
  },
  {
    id: 'noire-02',
    name: 'The Essential Oxford Shirt',
    slug: 'the-essential-oxford-shirt',
    category: 'shirts',
    price: 129,
    currency: 'EUR',
    colors: [
      { name: 'Crisp White', hex: '#FFFFFF', image: '/images/Men-shirts/g-star-waffle-henley-relaxed-t-shirt-white.png' },
      { name: 'Sky Blue', hex: '#B0C4DE', image: '/images/Men-shirts/g-star-lash-t-shirt-light-blue.png' },
      { name: 'Onyx Black', hex: '#181818', image: '/images/Men-shirts/g-star-lash-t-shirt-black.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-waffle-henley-relaxed-t-shirt-white.png',
      '/images/Men-shirts/g-star-lash-t-shirt-light-blue.png',
      '/images/Men-shirts/g-star-lash-t-shirt-black.png'
    ],
    description: 'Crafted from long-staple Egyptian cotton twill, offering crisp feel and exceptional breathability.',
    material: '100% Organic Long-Staple Cotton',
    fit: 'Contemporary straight fit with French seams and mother-of-pearl buttons.',
    featured: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 52
  },
  {
    id: 'noire-03',
    name: 'The Tapered Wool Trouser',
    slug: 'the-tapered-wool-trouser',
    category: 'trousers',
    price: 159,
    currency: 'EUR',
    colors: [
      { name: 'Charcoal', hex: '#2B2B2B', image: '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png' },
      { name: 'Off White', hex: '#EAE6DF', image: '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png',
      '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png'
    ],
    description: 'Single-pleat trousers cut from tropical weight wool with a slight stretch for seamless fluid movement.',
    material: '96% Italian Wool, 4% Elastane',
    fit: 'High rise, subtle taper down to a clean break.',
    featured: true,
    isNew: true,
    rating: 4.7,
    reviewCount: 24
  },
  {
    id: 'noire-04',
    name: 'The Heavyweight Studio Tee',
    slug: 'the-heavyweight-studio-tee',
    category: 't-shirts',
    price: 69,
    currency: 'EUR',
    colors: [
      { name: 'Off-White', hex: '#F0ECE1', image: '/images/Men-shirts/g-star-ductsoon-relaxed-t-shirt-white.png' },
      { name: 'Deep Black', hex: '#111111', image: '/images/Men-shirts/g-star-base-s-t-shirt-black.png' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-ductsoon-relaxed-t-shirt-white.png',
      '/images/Men-shirts/g-star-base-s-t-shirt-black.png'
    ],
    description: '300 GSM heavy combed jersey offering an architectural drape that holds its boxy form perfectly.',
    material: '100% Heavy Organic Combed Cotton',
    fit: 'Boxy drop-shoulder relaxed cut.',
    featured: false,
    isNew: false,
    rating: 5.0,
    reviewCount: 61
  },
  {
    id: 'noire-05',
    name: 'The Structured Wool Overshirt',
    slug: 'the-structured-wool-overshirt',
    category: 'overshirts',
    price: 179,
    currency: 'EUR',
    colors: [
      { name: 'Sandstone', hex: '#C2B6A2', image: '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png' },
      { name: 'Espresso', hex: '#3B2F2F', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png',
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png'
    ],
    description: 'A versatile transitional layer featuring concealed horn buttons and double utility chest pockets.',
    material: '70% Recycled Melton Wool, 30% Polyamide',
    fit: 'Relaxed layering piece with straight hem.',
    featured: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 19
  },
  {
    id: 'noire-06',
    name: 'The Modern Tailored Suit',
    slug: 'the-modern-tailored-suit',
    category: 'suits',
    price: 495,
    currency: 'EUR',
    colors: [
      { name: 'Onyx Black', hex: '#111111', image: '/images/banners/Group 242.jpg' },
      { name: 'Graphite', hex: '#3A3B3C', image: '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/banners/Group 242.jpg',
      '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png'
    ],
    description: 'Two-piece modern evening suit tailored from Super 120s Italian merino wool with satin finish lapels.',
    material: '100% Super 120s Italian Virgin Wool',
    fit: 'Slim modern cut with natural shoulders.',
    featured: true,
    isNew: true,
    badge: 'EDITORIAL',
    rating: 4.9,
    reviewCount: 15
  },
  {
    id: 'noire-07',
    name: 'The Minimal Cashmere Knit',
    slug: 'the-minimal-cashmere-knit',
    category: 'knitwear',
    price: 220,
    currency: 'EUR',
    colors: [
      { name: 'Oatmeal', hex: '#DCD4C5', image: '/images/men-hoodies/g-star-logo-sweater-grey.png' },
      { name: 'Charcoal', hex: '#2B2B2B', image: '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-grey.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-logo-sweater-grey.png',
      '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-grey.png'
    ],
    description: 'Ultra-soft 12-gauge grade-A Mongolian cashmere crewneck with seamless seamless rib detailing.',
    material: '100% Grade-A Mongolian Cashmere',
    fit: 'Classic regular fit.',
    featured: false,
    isNew: false,
    rating: 5.0,
    reviewCount: 42
  },
  {
    id: 'noire-08',
    name: 'The Minimalist Trench Jacket',
    slug: 'the-minimalist-trench-jacket',
    category: 'jackets',
    price: 349,
    currency: 'EUR',
    colors: [
      { name: 'Taupe Stone', hex: '#8F8B82', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png' },
      { name: 'Midnight Black', hex: '#0B0B0B', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png',
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png'
    ],
    description: 'Water-repellent gabardine mac coat with hidden placket and sharp point collar.',
    material: '100% Water-Repellent Cotton Gabardine',
    fit: 'Oversized clean silhouette.',
    featured: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 11
  },
  {
    id: 'noire-09',
    name: 'The Heavy Loopback Hoodie',
    slug: 'the-heavy-loopback-hoodie',
    category: 'hoodies',
    price: 119,
    currency: 'EUR',
    colors: [
      { name: 'Cement Grey', hex: '#A3A3A3', image: '/images/men-hoodies/g-star-premium-core-hooded-sweater-grey.png' },
      { name: 'Pitch Black', hex: '#111111', image: '/images/men-hoodies/g-star-core-half-zip-sweat-black.png' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-hooded-sweater-grey.png',
      '/images/men-hoodies/g-star-core-half-zip-sweat-black.png'
    ],
    description: '480 GSM organic cotton loopback French terry with double-lined hood and seamless pouch pocket.',
    material: '100% Heavy Organic Loopback Cotton',
    fit: 'Subtly oversized architectural cut.',
    featured: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 31
  },
  {
    id: 'noire-10',
    name: 'The Relaxed Pleated Chino',
    slug: 'the-relaxed-pleated-chino',
    category: 'trousers',
    price: 139,
    currency: 'EUR',
    colors: [
      { name: 'Pebble Beige', hex: '#D5CCBB', image: '/images/Men-panets/g-star-rovic-zip-3d-regular-tapered-pants-brown (1).png' },
      { name: 'Washed Olive', hex: '#555D50', image: '/images/Men-panets/g-star-utility-loose-cargo-pants-medium-blue.png' }
    ],
    sizes: ['46', '48', '50', '52'],
    images: [
      '/images/Men-panets/g-star-rovic-zip-3d-regular-tapered-pants-brown (1).png',
      '/images/Men-panets/g-star-utility-loose-cargo-pants-medium-blue.png'
    ],
    description: 'High-density cotton twill with garment wash finish and double front pleats.',
    material: '100% Japanese Cotton Twill',
    fit: 'Wide leg with gentle taper at cuffs.',
    featured: false,
    isNew: false,
    rating: 4.7,
    reviewCount: 29
  },
  {
    id: 'noire-11',
    name: 'The Wool Evening Dinner Jacket',
    slug: 'the-wool-evening-dinner-jacket',
    category: 'blazers',
    price: 329,
    currency: 'EUR',
    colors: [
      { name: 'Midnight Navy', hex: '#111827', image: '/images/men-hoodies/g-star-old-skool-crew-sweat-long-sleeve-dark-blue.png' },
      { name: 'Jet Black', hex: '#0B0B0B', image: '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/men-hoodies/g-star-old-skool-crew-sweat-long-sleeve-dark-blue.png',
      '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png'
    ],
    description: 'Refined shawl collar tuxedo blazer with satin silk trimmings and hand-stitched details.',
    material: '92% Virgin Wool, 8% Silk',
    fit: 'Slim structured formal silhouette.',
    featured: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 18
  },
  {
    id: 'noire-12',
    name: 'The Italian Leather Tote Bag',
    slug: 'the-italian-leather-tote-bag',
    category: 'accessories',
    price: 249,
    currency: 'EUR',
    colors: [
      { name: 'Matte Black', hex: '#181818', image: '/images/banners/Group 242.jpg' }
    ],
    sizes: ['One Size'],
    images: [
      '/images/banners/Group 242.jpg'
    ],
    description: 'Full-grain vegetable-tanned calfskin leather tote with magnetic top clasp and padded laptop pouch.',
    material: '100% Tuscan Full-Grain Calfskin Leather',
    fit: '38cm x 42cm x 12cm capacity.',
    featured: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 57
  },
  {
    id: 'noire-13',
    name: 'The Minimal Silk Dress Shirt',
    slug: 'the-minimal-silk-dress-shirt',
    category: 'shirts',
    price: 189,
    currency: 'EUR',
    colors: [
      { name: 'Off-White Silk', hex: '#F5F5F0', image: '/images/Men-shirts/g-star-structured-tweeter-grandad-t-shirt-white.png' },
      { name: 'Onyx Silk', hex: '#111111', image: '/images/Men-shirts/g-star-lash-t-shirt-dark-blue.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-structured-tweeter-grandad-t-shirt-white.png',
      '/images/Men-shirts/g-star-lash-t-shirt-dark-blue.png'
    ],
    description: 'Sandwashed 19mm silk crepe de chine shirt with concealed front placket.',
    material: '100% Sandwashed Silk',
    fit: 'Fluid relaxed drape.',
    featured: false,
    isNew: true,
    rating: 4.8,
    reviewCount: 14
  },
  {
    id: 'noire-14',
    name: 'The Merino Turtleneck Sweater',
    slug: 'the-merino-turtleneck-sweater',
    category: 'knitwear',
    price: 169,
    currency: 'EUR',
    colors: [
      { name: 'Charcoal', hex: '#2B2B2B', image: '/images/men-hoodies/g-star-premium-core-half-zip-sweater-dark-blue.png' },
      { name: 'Warm Cream', hex: '#EBE5D8', image: '/images/men-hoodies/g-star-sunfaded-sweater-dark-blue.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-half-zip-sweater-dark-blue.png',
      '/images/men-hoodies/g-star-sunfaded-sweater-dark-blue.png'
    ],
    description: 'Extra fine 100% Merino wool knit with comfortable roll-neck collar for crisp cold weather layering.',
    material: '100% Extra Fine Merino Wool',
    fit: 'Tailored sleek fit.',
    featured: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 36
  },
  {
    id: 'noire-15',
    name: 'The Structured Double-Breasted Coat',
    slug: 'the-structured-double-breasted-coat',
    category: 'jackets',
    price: 420,
    currency: 'EUR',
    colors: [
      { name: 'Pitch Black', hex: '#111111', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png' },
      { name: 'Camel', hex: '#B8860B', image: '/images/banners/Group 242.jpg' }
    ],
    sizes: ['46', '48', '50', '52'],
    images: [
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png',
      '/images/banners/Group 242.jpg'
    ],
    description: 'Heavy wool-blend overcoat with peak lapels, deep welt flap pockets and back vent.',
    material: '80% Heavy Virgin Wool, 20% Cashmere',
    fit: 'Tailored longline silhouette.',
    featured: true,
    isNew: true,
    rating: 5.0,
    reviewCount: 22
  },
  {
    id: 'noire-16',
    name: 'The Sculpted Leather Belt',
    slug: 'the-sculpted-leather-belt',
    category: 'accessories',
    price: 89,
    currency: 'EUR',
    colors: [
      { name: 'Matte Black / Silver', hex: '#111111', image: '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png' }
    ],
    sizes: ['85', '90', '95', '100'],
    images: [
      '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png'
    ],
    description: 'Hand-finished bridle leather with custom brushed steel geometric buckle.',
    material: '100% Italian Bridle Leather',
    fit: 'Width: 3cm.',
    featured: false,
    isNew: false,
    rating: 4.7,
    reviewCount: 19
  }
];

export const NOIRE_LOOKS: Look[] = [
  {
    id: 'look-01',
    number: 'LOOK 01',
    title: 'THE MODERN SUIT',
    subtitle: 'FORMAL ARCHITECTURE',
    name: 'The Modern Tailored Suit Look',
    price: 624,
    image: '/images/banners/Group 242.jpg',
    products: [NOIRE_PRODUCTS[5], NOIRE_PRODUCTS[1]], // Suit + Oxford Shirt
    description: 'Precision tailoring combined with crisp Egyptian cotton for high-powered evening presence.'
  },
  {
    id: 'look-02',
    number: 'LOOK 02',
    title: 'THE CITY UNIFORM',
    subtitle: 'URBAN ELEGANCE',
    name: 'The Architect Blazer & Trouser Look',
    price: 448,
    image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
    products: [NOIRE_PRODUCTS[0], NOIRE_PRODUCTS[2]], // Blazer + Trouser
    description: 'The foundation of modern contemporary dressing. Sharp geometry meets relaxed luxury.'
  },
  {
    id: 'look-03',
    number: 'LOOK 03',
    title: 'THE WEEKEND EDIT',
    subtitle: 'ELEVATED CASUAL',
    name: 'Structured Overshirt & Heavy Tee Look',
    price: 248,
    image: '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png',
    products: [NOIRE_PRODUCTS[4], NOIRE_PRODUCTS[3]], // Overshirt + Heavy Tee
    description: 'Relaxed proportions and tactile fabrics designed for seamless weekend transit.'
  },
  {
    id: 'look-04',
    number: 'LOOK 04',
    title: 'THE EVENING FORM',
    subtitle: 'NIGHT SILHOUETTE',
    name: 'Dinner Jacket & Tapered Trouser Look',
    price: 488,
    image: '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png',
    products: [NOIRE_PRODUCTS[10], NOIRE_PRODUCTS[2]], // Dinner Jacket + Trouser
    description: 'Subtle shine and flawless drape crafted for low-light sophistication.'
  }
];

export const NOIRE_LOOKBOOK: LookbookSlide[] = [
  {
    id: 'lb-01',
    title: 'VOLUME & FORM',
    subtitle: 'SPRING / SUMMER EDIT',
    image: '/images/banners/Group 242.jpg',
    hotspots: [
      { id: 'hs-01', productId: 'noire-01', x: 45, y: 35, productName: 'The Architect Blazer', productPrice: 289 },
      { id: 'hs-02', productId: 'noire-03', x: 50, y: 70, productName: 'The Tapered Wool Trouser', productPrice: 159 }
    ]
  },
  {
    id: 'lb-03',
    title: 'MONOCHROME DISCIPLINE',
    subtitle: 'ARCHITECTURAL MENSWEAR',
    image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
    hotspots: [
      { id: 'hs-03', productId: 'noire-08', x: 52, y: 40, productName: 'The Minimalist Trench Jacket', productPrice: 349 },
      { id: 'hs-04', productId: 'noire-12', x: 30, y: 65, productName: 'The Italian Leather Tote Bag', productPrice: 249 }
    ]
  },
  {
    id: 'lb-02',
    title: 'THE EVENING TONE',
    subtitle: 'FORMAL REFINEMENT',
    image: '/images/Men-panets/g-star-bend-loose-jeans-dark-blue.png',
    hotspots: [
      { id: 'hs-05', productId: 'noire-06', x: 48, y: 45, productName: 'The Modern Tailored Suit', productPrice: 495 }
    ]
  }
];

export const LANDING_REGISTRY: LandingPageInfo[] = [
  {
    slug: 'noire-men-formal',
    category: 'men-formal',
    title: 'NOIRÉ — Contemporary Menswear (English)',
    description: 'High-end editorial fashion experience combining everyday essentials, smart casual, and formal menswear.',
    theme: 'minimal-luxury',
    dataset: 'NOIRE_PRODUCTS',
    previewImage: '/images/banners/Group 242.jpg'
  },
  {
    slug: 'noire-men-formal-fa',
    category: 'men-formal',
    title: 'نوآر (NOIRÉ) — پوشاک مردانه معاصر (فارسی)',
    description: 'تجربه استایل و مد لوکس معاصر به زبان فارسی، شامل پوشاک رسمی، کت و شلوار، لباس‌های مینیمال و کالکشن‌های اختصاصی.',
    theme: 'minimal-luxury',
    dataset: 'NOIRE_PRODUCTS_FA',
    previewImage: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png'
  }
];
