import { Product, Look, LookbookSlide, LandingPageInfo } from '../types';

export const NOIRE_PRODUCTS: Product[] = [
  {
    id: 'noire-01',
    name: 'Architectural Wool Blazer',
    brand: 'TOM FORD',
    slug: 'the-architect-blazer',
    category: 'blazers',
    price: 18500000,
    currency: 'TMN',
    colors: [
      { name: 'Charcoal', hex: '#2B2B2B', image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png' },
      { name: 'Black', hex: '#111111', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png'
    ],
    description: 'Structured contemporary luxury blazer cut from refined Super 130s wool blend, tailored in Italy for clean architectural silhouettes.',
    material: '80% Virgin Wool, 15% Silk, 5% Elastane. Lining: 100% Cupro.',
    fit: 'Relaxed tailored fit with structured shoulders.',
    featured: true,
    isNew: true,
    badge: 'LUXURY SELECTION',
    rating: 4.9,
    reviewCount: 38,
    careInstructions: 'Dry clean only by luxury garment specialists.',
    shippingInfo: 'Insured complimentary express courier delivery.'
  },
  {
    id: 'noire-02',
    name: 'Egyptian Cotton Oxford Shirt',
    brand: 'CANALI',
    slug: 'the-essential-oxford-shirt',
    category: 'shirts',
    price: 7800000,
    currency: 'TMN',
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
    description: 'Crafted from Giza 87 long-staple Egyptian cotton twill, offering crisp luxury feel and effortless breathability.',
    material: '100% Giza Egyptian Long-Staple Cotton',
    fit: 'Contemporary straight fit with mother-of-pearl buttons.',
    featured: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 52
  },
  {
    id: 'noire-03',
    name: 'Pleated Tapered Wool Trouser',
    brand: 'ZEGNA',
    slug: 'the-tapered-wool-trouser',
    category: 'trousers',
    price: 11200000,
    currency: 'TMN',
    colors: [
      { name: 'Charcoal', hex: '#2B2B2B', image: '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png' },
      { name: 'Off White', hex: '#EAE6DF', image: '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png',
      '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png'
    ],
    description: 'Single-pleat formal trousers cut from Italian tropical weight wool with subtle comfort stretch.',
    material: '96% Zegna Merino Wool, 4% Elastane',
    fit: 'High rise, subtle taper down to a sharp break.',
    featured: true,
    isNew: true,
    rating: 4.7,
    reviewCount: 24
  },
  {
    id: 'noire-04',
    name: 'Heavyweight Studio Cotton Tee',
    brand: 'BRUNELLO CUCINELLI',
    slug: 'the-heavyweight-studio-tee',
    category: 't-shirts',
    price: 4900000,
    currency: 'TMN',
    colors: [
      { name: 'Off-White', hex: '#F0ECE1', image: '/images/Men-shirts/g-star-ductsoon-relaxed-t-shirt-white.png' },
      { name: 'Deep Black', hex: '#111111', image: '/images/Men-shirts/g-star-base-s-t-shirt-black.png' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-ductsoon-relaxed-t-shirt-white.png',
      '/images/Men-shirts/g-star-base-s-t-shirt-black.png'
    ],
    description: '320 GSM heavy combed double-jersey offering architectural drape that maintains its crisp silhouette.',
    material: '100% Organic Double-Combed Cotton',
    fit: 'Boxy drop-shoulder relaxed cut.',
    featured: false,
    isNew: false,
    rating: 5.0,
    reviewCount: 61
  },
  {
    id: 'noire-05',
    name: 'Structured Wool Melton Overshirt',
    brand: 'LORO PIANA',
    slug: 'the-structured-wool-overshirt',
    category: 'overshirts',
    price: 14500000,
    currency: 'TMN',
    colors: [
      { name: 'Sandstone', hex: '#C2B6A2', image: '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png' },
      { name: 'Espresso', hex: '#3B2F2F', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png',
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png'
    ],
    description: 'Versatile smart-casual outerwear piece featuring hand-carved buffalo horn buttons and dual utility pockets.',
    material: '85% Virgin Melton Wool, 15% Cashmere',
    fit: 'Relaxed layering fit with straight hem.',
    featured: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 19
  },
  {
    id: 'noire-06',
    name: 'Super 130s Modern Tailored Suit',
    brand: 'ZEGNA',
    slug: 'the-modern-tailored-suit',
    category: 'suits',
    price: 36800000,
    currency: 'TMN',
    colors: [
      { name: 'Onyx Black', hex: '#111111', image: '/images/banners/Group-242.jpg' },
      { name: 'Graphite', hex: '#3A3B3C', image: '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/banners/Group-242.jpg',
      '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png'
    ],
    description: 'Two-piece tailored tuxedo suit masterfully crafted from Italian merino wool with satin silk lapels.',
    material: '100% Super 130s Italian Virgin Wool',
    fit: 'Modern tailored fit with soft shoulders.',
    featured: true,
    isNew: true,
    badge: 'BOUTIQUE SPECIAL',
    rating: 4.9,
    reviewCount: 15
  },
  {
    id: 'noire-07',
    name: 'Mongolian Cashmere Crewneck',
    brand: 'LORO PIANA',
    slug: 'the-minimal-cashmere-knit',
    category: 'knitwear',
    price: 16200000,
    currency: 'TMN',
    colors: [
      { name: 'Oatmeal', hex: '#DCD4C5', image: '/images/men-hoodies/g-star-logo-sweater-grey.png' },
      { name: 'Charcoal', hex: '#2B2B2B', image: '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-grey.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-logo-sweater-grey.png',
      '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-grey.png'
    ],
    description: 'Ultra-soft 12-gauge grade-A Mongolian cashmere crewneck knit with seamless ribbing.',
    material: '100% Grade-A Mongolian Cashmere',
    fit: 'Classic regular fit.',
    featured: false,
    isNew: false,
    rating: 5.0,
    reviewCount: 42
  },
  {
    id: 'noire-08',
    name: 'Water-Repellent Trench Coat',
    brand: 'BURBERRY',
    slug: 'the-minimalist-trench-jacket',
    category: 'jackets',
    price: 24500000,
    currency: 'TMN',
    colors: [
      { name: 'Taupe Stone', hex: '#8F8B82', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png' },
      { name: 'Midnight Black', hex: '#0B0B0B', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png',
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png'
    ],
    description: 'Minimalist double-weave gabardine mac trench coat with concealed front buttons.',
    material: '100% Water-Repellent Cotton Gabardine',
    fit: 'Oversized structured silhouette.',
    featured: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 11
  },
  {
    id: 'noire-09',
    name: 'Heavy Loopback Cotton Hoodie',
    brand: 'ACNE STUDIOS',
    slug: 'the-heavy-loopback-hoodie',
    category: 'hoodies',
    price: 8500000,
    currency: 'TMN',
    colors: [
      { name: 'Cement Grey', hex: '#A3A3A3', image: '/images/men-hoodies/g-star-premium-core-hooded-sweater-grey.png' },
      { name: 'Pitch Black', hex: '#111111', image: '/images/men-hoodies/g-star-core-half-zip-sweat-black.png' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-hooded-sweater-grey.png',
      '/images/men-hoodies/g-star-core-half-zip-sweat-black.png'
    ],
    description: '480 GSM organic cotton loopback French terry with double-lined hood and clean pouch pocket.',
    material: '100% Heavy Organic Loopback Cotton',
    fit: 'Subtly oversized architectural cut.',
    featured: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 31
  },
  {
    id: 'noire-10',
    name: 'Relaxed Double-Pleated Chino',
    brand: 'RALPH LAUREN PURPLE LABEL',
    slug: 'the-relaxed-pleated-chino',
    category: 'trousers',
    price: 9800000,
    currency: 'TMN',
    colors: [
      { name: 'Pebble Beige', hex: '#D5CCBB', image: '/images/Men-panets/g-star-rovic-zip-3d-regular-tapered-pants-brown (1).png' },
      { name: 'Washed Olive', hex: '#555D50', image: '/images/Men-panets/g-star-utility-loose-cargo-pants-medium-blue.png' }
    ],
    sizes: ['46', '48', '50', '52'],
    images: [
      '/images/Men-panets/g-star-rovic-zip-3d-regular-tapered-pants-brown (1).png',
      '/images/Men-panets/g-star-utility-loose-cargo-pants-medium-blue.png'
    ],
    description: 'High-density Japanese cotton twill with garment wash finish and front pleats.',
    material: '100% Japanese Cotton Twill',
    fit: 'Wide leg with gentle taper at cuffs.',
    featured: false,
    isNew: false,
    rating: 4.7,
    reviewCount: 29
  },
  {
    id: 'noire-11',
    name: 'Shawl Collar Dinner Jacket',
    brand: 'TOM FORD',
    slug: 'the-wool-evening-dinner-jacket',
    category: 'blazers',
    price: 26500000,
    currency: 'TMN',
    colors: [
      { name: 'Midnight Navy', hex: '#111827', image: '/images/men-hoodies/g-star-old-skool-crew-sweat-long-sleeve-dark-blue.png' },
      { name: 'Jet Black', hex: '#0B0B0B', image: '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      '/images/men-hoodies/g-star-old-skool-crew-sweat-long-sleeve-dark-blue.png',
      '/images/men-hoodies/g-star-core-crew-sweat-long-sleeve-black.png'
    ],
    description: 'Refined shawl collar dinner tuxedo jacket with satin silk facings and pick-stitched edges.',
    material: '92% Virgin Wool, 8% Silk',
    fit: 'Slim structured formal silhouette.',
    featured: true,
    isNew: true,
    rating: 4.9,
    reviewCount: 18
  },
  {
    id: 'noire-12',
    name: 'Tuscan Full-Grain Leather Tote',
    brand: 'BODHI / BOTTEGA VENETA',
    slug: 'the-italian-leather-tote-bag',
    category: 'accessories',
    price: 18900000,
    currency: 'TMN',
    colors: [
      { name: 'Matte Black', hex: '#181818', image: '/images/banners/Group-242.jpg' }
    ],
    sizes: ['One Size'],
    images: [
      '/images/banners/Group-242.jpg'
    ],
    description: 'Full-grain vegetable-tanned calfskin leather tote with magnetic closure and laptop compartment.',
    material: '100% Tuscan Full-Grain Calfskin Leather',
    fit: '38cm x 42cm x 12cm capacity.',
    featured: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 57
  },
  {
    id: 'noire-13',
    name: 'Sandwashed Silk Formal Shirt',
    brand: 'GIVENCHY',
    slug: 'the-minimal-silk-dress-shirt',
    category: 'shirts',
    price: 12800000,
    currency: 'TMN',
    colors: [
      { name: 'Off-White Silk', hex: '#F5F5F0', image: '/images/Men-shirts/g-star-structured-tweeter-grandad-t-shirt-white.png' },
      { name: 'Onyx Silk', hex: '#111111', image: '/images/Men-shirts/g-star-lash-t-shirt-dark-blue.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Men-shirts/g-star-structured-tweeter-grandad-t-shirt-white.png',
      '/images/Men-shirts/g-star-lash-t-shirt-dark-blue.png'
    ],
    description: 'Sandwashed 19mm pure silk crepe de chine shirt with concealed front placket.',
    material: '100% Sandwashed Pure Silk',
    fit: 'Fluid relaxed drape.',
    featured: false,
    isNew: true,
    rating: 4.8,
    reviewCount: 14
  },
  {
    id: 'noire-14',
    name: 'Extra Fine Merino Turtleneck',
    brand: 'CANALI',
    slug: 'the-merino-turtleneck-sweater',
    category: 'knitwear',
    price: 11500000,
    currency: 'TMN',
    colors: [
      { name: 'Charcoal', hex: '#2B2B2B', image: '/images/men-hoodies/g-star-premium-core-half-zip-sweater-dark-blue.png' },
      { name: 'Warm Cream', hex: '#EBE5D8', image: '/images/men-hoodies/g-star-sunfaded-sweater-dark-blue.png' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/men-hoodies/g-star-premium-core-half-zip-sweater-dark-blue.png',
      '/images/men-hoodies/g-star-sunfaded-sweater-dark-blue.png'
    ],
    description: 'Extra fine Merino wool knit with tailored roll-neck collar for crisp cold-weather layering.',
    material: '100% Extra Fine Merino Wool',
    fit: 'Tailored sleek fit.',
    featured: false,
    isNew: false,
    rating: 4.9,
    reviewCount: 36
  },
  {
    id: 'noire-15',
    name: 'Double-Breasted Wool Cashmere Coat',
    brand: 'BURBERRY',
    slug: 'the-structured-double-breasted-coat',
    category: 'jackets',
    price: 31000000,
    currency: 'TMN',
    colors: [
      { name: 'Pitch Black', hex: '#111111', image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png' },
      { name: 'Camel', hex: '#B8860B', image: '/images/banners/Group-242.jpg' }
    ],
    sizes: ['46', '48', '50', '52'],
    images: [
      '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-black.png',
      '/images/banners/Group-242.jpg'
    ],
    description: 'Heavy wool-cashmere blend overcoat with peak lapels and deep welt flap pockets.',
    material: '80% Heavy Virgin Wool, 20% Cashmere',
    fit: 'Tailored longline silhouette.',
    featured: true,
    isNew: true,
    rating: 5.0,
    reviewCount: 22
  },
  {
    id: 'noire-16',
    name: 'Sculpted Italian Bridle Belt',
    brand: 'TOM FORD',
    slug: 'the-sculpted-leather-belt',
    category: 'accessories',
    price: 6200000,
    currency: 'TMN',
    colors: [
      { name: 'Matte Black / Silver', hex: '#111111', image: '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png' }
    ],
    sizes: ['85', '90', '95', '100'],
    images: [
      '/images/Men-panets/g-star-clean-regular-cargo-pants-black.png'
    ],
    description: 'Hand-finished bridle leather belt with custom brushed steel buckle.',
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
    title: 'THE EVENING GENTLEMAN',
    subtitle: 'FORMAL MULTI-BRAND EDIT',
    name: 'Zegna Suit & Canali Oxford Look',
    price: 44600000,
    image: '/images/banners/Group-242.jpg',
    products: [NOIRE_PRODUCTS[5], NOIRE_PRODUCTS[1]],
    description: 'Super 130s Italian wool suit paired with long-staple Egyptian cotton shirt for formal perfection.'
  },
  {
    id: 'look-02',
    number: 'LOOK 02',
    title: 'THE EXECUTIVE UNIFORM',
    subtitle: 'MODERN SMART CASUAL',
    name: 'Tom Ford Blazer & Zegna Trouser Look',
    price: 29700000,
    image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
    products: [NOIRE_PRODUCTS[0], NOIRE_PRODUCTS[2]],
    description: 'Structured wool blazer meets pleated trousers in an elevated daily ensemble.'
  },
  {
    id: 'look-03',
    number: 'LOOK 03',
    title: 'THE WEEKEND BOUTIQUE EDIT',
    subtitle: 'LUXURY ESSENTIALS',
    name: 'Loro Piana Overshirt & Brunello Cucinelli Tee Look',
    price: 19400000,
    image: '/images/Men-shirts/g-star-relaxed-base-t-shirt-beige.png',
    products: [NOIRE_PRODUCTS[4], NOIRE_PRODUCTS[3]],
    description: 'Relaxed wool melton layering over ultra-soft heavy combed cotton tee.'
  },
  {
    id: 'look-04',
    number: 'LOOK 04',
    title: 'NIGHT REFINEMENT',
    subtitle: 'TUXEDO SILHOUETTE',
    name: 'Tom Ford Dinner Jacket & Zegna Trouser Look',
    price: 37700000,
    image: '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png',
    products: [NOIRE_PRODUCTS[10], NOIRE_PRODUCTS[2]],
    description: 'Subtle silk shawl collar with precision tapered tailored wool trousers.'
  }
];

export const NOIRE_LOOKBOOK: LookbookSlide[] = [
  {
    id: 'lb-01',
    title: 'LUXURY BOUTIQUE SELECTION',
    subtitle: 'SPRING / SUMMER 2026',
    image: '/images/banners/Group-242.jpg',
    hotspots: [
      { id: 'hs-01', productId: 'noire-01', x: 45, y: 35, productName: 'Architectural Wool Blazer', productPrice: 18500000 },
      { id: 'hs-02', productId: 'noire-03', x: 50, y: 70, productName: 'Pleated Tapered Wool Trouser', productPrice: 11200000 }
    ]
  },
  {
    id: 'lb-03',
    title: 'WORLD CLASS TAILORING',
    subtitle: 'MULTI-BRAND CURATION',
    image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
    hotspots: [
      { id: 'hs-03', productId: 'noire-08', x: 52, y: 40, productName: 'Water-Repellent Trench Coat', productPrice: 24500000 },
      { id: 'hs-04', productId: 'noire-12', x: 30, y: 65, productName: 'Tuscan Full-Grain Leather Tote', productPrice: 18900000 }
    ]
  },
  {
    id: 'lb-02',
    title: 'THE EVENING COLLECTION',
    subtitle: 'FORMAL ELEGANCE',
    image: '/images/Men-panets/g-star-bend-loose-jeans-dark-blue.png',
    hotspots: [
      { id: 'hs-05', productId: 'noire-06', x: 48, y: 45, productName: 'Super 130s Modern Tailored Suit', productPrice: 36800000 }
    ]
  }
];

export const LANDING_REGISTRY: LandingPageInfo[] = [
  {
    slug: 'noire-men-formal',
    category: 'men-formal',
    title: 'NOIRÉ — Multi-Brand Luxury Menswear Store (English)',
    description: 'Multi-brand luxury menswear store featuring curated everyday, smart casual, and formal collections from top fashion houses.',
    theme: 'minimal-luxury',
    dataset: 'NOIRE_PRODUCTS',
    previewImage: '/images/banners/Group-242.jpg'
  },
  {
    slug: 'noire-men-formal-fa',
    category: 'men-formal',
    title: 'نوآر (NOIRÉ) — بوتیک چندبرند پوشاک لوکس مردانه (فارسی)',
    description: 'فروشگاه و بوتیک چندبرند پوشاک لوکس مردانه شامل کالکشن‌های روزمره، اسپرت شیک و کت و شلوار رسمی از برترین برندهای بین‌المللی.',
    theme: 'minimal-luxury',
    dataset: 'NOIRE_PRODUCTS_FA',
    previewImage: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png'
  }
];
