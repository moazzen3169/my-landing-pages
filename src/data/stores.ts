export interface LandingTheme {
  primary: string;
  secondary?: string;
}

export interface Store {
  slug: string;
  name: string;
  themes: Record<string, LandingTheme>;
}

export const DEFAULT_STORE_SLUG = 'default';

export const STORES: Record<string, Store> = {
  default: {
    slug: 'default',
    name: 'دپیکس',
    themes: {
      'woman-luxury-editorial': {
        primary: '#111111',
        secondary: '#000000',
      },
      'noire-men-formal': {
        primary: '#111111',
      },
      'noire-men-formal-fa': {
        primary: '#111111',
      },
      'persian-luxury-v1': {
        primary: '#111111',
        secondary: '#000000',
      },
      'solea-sneakers': {
        primary: '#0A0A0A',
      },
      'man-sport': {
        primary: '#E04A24',
      },
      'woman-sport': {
        primary: '#FF6FAE',
      },
      baby: {
        primary: '#2B70C9',
        secondary: '#F36A21',
      },
    },
  },

  gravity: {
    slug: 'gravity',
    name: 'Gravity',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  gray: {
    slug: 'gray',
    name: 'Gray',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  'vip-men': {
    slug: 'vip-men',
    name: 'V.I.P MEN',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  'i-mod': {
    slug: 'i-mod',
    name: 'I Mod',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  mada: {
    slug: 'mada',
    name: 'مدا',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  'elma-boutique': {
    slug: 'elma-boutique',
    name: 'Elma Boutique',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  vini: {
    slug: 'vini',
    name: 'Vini',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  'black-horse': {
    slug: 'black-horse',
    name: 'اسب سیاه',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  barcode: {
    slug: 'barcode',
    name: 'Barcode',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  rose: {
    slug: 'rose',
    name: 'Rose',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  jadi: {
    slug: 'jadi',
    name: 'جدی',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  ipek: {
    slug: 'ipek',
    name: 'آیپک',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  milad: {
    slug: 'milad',
    name: 'میلاد',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  'no-1': {
    slug: 'no-1',
    name: 'No.1',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  'gift-plus': {
    slug: 'gift-plus',
    name: 'هدیه پلاس',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  mannequin: {
    slug: 'mannequin',
    name: 'مانکن',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  penti: {
    slug: 'penti',
    name: 'Penti',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  sahel: {
    slug: 'sahel',
    name: 'ساحل',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  chanel: {
    slug: 'chanel',
    name: 'شنل',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  ufo: {
    slug: 'ufo',
    name: 'یوفو',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  'daniz-pamuk': {
    slug: 'daniz-pamuk',
    name: 'دنیز پاموک',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  aida: {
    slug: 'aida',
    name: 'آیدا',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  shoesland: {
    slug: 'shoesland',
    name: 'Shoesland',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  vinci: {
    slug: 'vinci',
    name: 'وینچی',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  'khane-kif-o-kafsh': {
    slug: 'khane-kif-o-kafsh',
    name: 'خانه کیف و کفش',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  'manto-nima': {
    slug: 'manto-nima',
    name: 'مانتو نیما',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  'city-mod': {
    slug: 'city-mod',
    name: 'سیتی مد',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  'set-mod': {
    slug: 'set-mod',
    name: 'ست مد',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  'voroojak-kids': {
    slug: 'voroojak-kids',
    name: 'Voroojak Kids',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  kamyar: {
    slug: 'kamyar',
    name: 'کامیار',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  mamad: {
    slug: 'mamad',
    name: 'مامد',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  'mada-style': {
    slug: 'mada-style',
    name: 'مدا استایل',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  kara: {
    slug: 'kara',
    name: 'کارا',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  negah: {
    slug: 'negah',
    name: 'نگاه',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },

  niko: {
    slug: 'niko',
    name: 'نیکو',
    themes: {
      'woman-luxury-editorial': { primary: '#000000' },
      'noire-men-formal': { primary: '#000000' },
      'noire-men-formal-fa': { primary: '#000000' },
      'persian-luxury-v1': { primary: '#000000' },
      'solea-sneakers': { primary: '#000000' },
      'man-sport': { primary: '#000000' },
      'woman-sport': { primary: '#000000' },
      baby: { primary: '#000000' },
    },
  },
};

export function getStoreAndTheme(
  landingSlug: string,
  storeSlug?: string | null
): {
  storeName: string;
  theme: LandingTheme;
  storeSlug: string;
} {
  const storeKey =
    storeSlug && STORES[storeSlug]
      ? storeSlug
      : DEFAULT_STORE_SLUG;

  const store = STORES[storeKey];

  const defaultLandingTheme =
    STORES.default.themes[landingSlug] || {
      primary: '#111111',
    };

  const landingTheme =
    store.themes[landingSlug] || defaultLandingTheme;

  return {
    storeName: store.name,
    theme: landingTheme,
    storeSlug: store.slug,
  };
}
