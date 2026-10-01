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
      { name: 'Charcoal', hex: '#2B2B2B', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Black', hex: '#111111', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Stone', hex: '#A8A39A', image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Crisp White', hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Sky Blue', hex: '#B0C4DE', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Onyx Black', hex: '#181818', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Charcoal', hex: '#2B2B2B', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Off White', hex: '#EAE6DF', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Dark Navy', hex: '#1B263B', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Off-White', hex: '#F0ECE1', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Deep Black', hex: '#111111', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Taupe', hex: '#8C8275', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Sandstone', hex: '#C2B6A2', image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Espresso', hex: '#3B2F2F', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Onyx Black', hex: '#111111', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Graphite', hex: '#3A3B3C', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Oatmeal', hex: '#DCD4C5', image: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Charcoal', hex: '#2B2B2B', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Taupe Stone', hex: '#8F8B82', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Midnight Black', hex: '#0B0B0B', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Cement Grey', hex: '#A3A3A3', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Pitch Black', hex: '#111111', image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Pebble Beige', hex: '#D5CCBB', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Washed Olive', hex: '#555D50', image: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['46', '48', '50', '52'],
    images: [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Midnight Navy', hex: '#111827', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Jet Black', hex: '#0B0B0B', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['46', '48', '50', '52', '54'],
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Matte Black', hex: '#181818', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Raw Chestnut', hex: '#5C3A21', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['One Size'],
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Off-White Silk', hex: '#F5F5F0', image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Onyx Silk', hex: '#111111', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Charcoal', hex: '#2B2B2B', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Warm Cream', hex: '#EBE5D8', image: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Pitch Black', hex: '#111111', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Camel', hex: '#B8860B', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['46', '48', '50', '52'],
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1200&auto=format&fit=crop'
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
      { name: 'Matte Black / Silver', hex: '#111111', image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1200&auto=format&fit=crop' }
    ],
    sizes: ['85', '90', '95', '100'],
    images: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1200&auto=format&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1200&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=1200&auto=format&fit=crop',
    products: [NOIRE_PRODUCTS[10], NOIRE_PRODUCTS[2]], // Dinner Jacket + Trouser
    description: 'Subtle shine and flawless drape crafted for low-light sophistication.'
  }
];

export const NOIRE_LOOKBOOK: LookbookSlide[] = [
  {
    id: 'lb-01',
    title: 'VOLUME & FORM',
    subtitle: 'SPRING / SUMMER EDIT',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop',
    hotspots: [
      { id: 'hs-01', productId: 'noire-01', x: 45, y: 35, productName: 'The Architect Blazer', productPrice: 289 },
      { id: 'hs-02', productId: 'noire-03', x: 50, y: 70, productName: 'The Tapered Wool Trouser', productPrice: 159 }
    ]
  },
  {
    id: 'lb-02',
    title: 'MONOCHROME DISCIPLINE',
    subtitle: 'ARCHITECTURAL MENSWEAR',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop',
    hotspots: [
      { id: 'hs-03', productId: 'noire-08', x: 52, y: 40, productName: 'The Minimalist Trench Jacket', productPrice: 349 },
      { id: 'hs-04', productId: 'noire-12', x: 30, y: 65, productName: 'The Italian Leather Tote Bag', productPrice: 249 }
    ]
  },
  {
    id: 'lb-03',
    title: 'THE EVENING TONE',
    subtitle: 'FORMAL REFINEMENT',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1600&auto=format&fit=crop',
    hotspots: [
      { id: 'hs-05', productId: 'noire-06', x: 48, y: 45, productName: 'The Modern Tailored Suit', productPrice: 495 }
    ]
  }
];

export const LANDING_REGISTRY: LandingPageInfo[] = [
  {
    slug: 'noire-men-formal',
    category: 'men-formal',
    title: 'NOIRÉ — Contemporary Menswear',
    description: 'High-end editorial fashion experience combining everyday essentials, smart casual, and formal menswear.',
    theme: 'minimal-luxury',
    dataset: 'NOIRE_PRODUCTS',
    previewImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop'
  }
];
