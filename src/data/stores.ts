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
      'baby': {
        primary: '#2B70C9',
        secondary: '#F36A21',
      },
    },
  },

  mahrukh: {
    slug: 'mahrukh',
    name: 'ماه‌رخ',
    themes: {
      'woman-luxury-editorial': {
        primary: '#8B4513',
        secondary: '#D2691E',
      },
      'noire-men-formal': {
        primary: '#2C3E50',
      },
      'noire-men-formal-fa': {
        primary: '#2C3E50',
      },
      'persian-luxury-v1': {
        primary: '#8B0000',
        secondary: '#B22222',
      },
      'solea-sneakers': {
        primary: '#2E8B57',
      },
      'man-sport': {
        primary: '#D35400',
      },
      'woman-sport': {
        primary: '#E63946',
      },
      'baby': {
        primary: '#E76F51',
        secondary: '#2A9D8F',
      },
    },
  },

  royal: {
    slug: 'royal',
    name: 'رویال',
    themes: {
      'woman-luxury-editorial': {
        primary: '#4A154B',
        secondary: '#6B1D5C',
      },
      'noire-men-formal': {
        primary: '#1A252C',
      },
      'noire-men-formal-fa': {
        primary: '#1A252C',
      },
      'persian-luxury-v1': {
        primary: '#1D3557',
        secondary: '#457B9D',
      },
      'solea-sneakers': {
        primary: '#3D5A80',
      },
      'man-sport': {
        primary: '#2563EB',
      },
      'woman-sport': {
        primary: '#9333EA',
      },
      'baby': {
        primary: '#7C3AED',
        secondary: '#EC4899',
      },
    },
  },
};

export function getStoreAndTheme(landingSlug: string, storeSlug?: string | null): {
  storeName: string;
  theme: LandingTheme;
  storeSlug: string;
} {
  const storeKey = storeSlug && STORES[storeSlug] ? storeSlug : DEFAULT_STORE_SLUG;
  const store = STORES[storeKey];
  const defaultLandingTheme = STORES.default.themes[landingSlug] || { primary: '#111111' };
  const landingTheme = store.themes[landingSlug] || defaultLandingTheme;

  return {
    storeName: store.name,
    theme: landingTheme,
    storeSlug: store.slug,
  };
}
