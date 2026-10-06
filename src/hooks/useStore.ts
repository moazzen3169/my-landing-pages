'use client';

import { useSearchParams } from 'next/navigation';
import { getStoreAndTheme, LandingTheme } from '@/data/stores';

export function useStore(landingSlug: string): {
  storeName: string;
  theme: LandingTheme;
  storeSlug: string;
} {
  const searchParams = useSearchParams();
  const storeSlug = searchParams ? searchParams.get('store') : null;
  return getStoreAndTheme(landingSlug, storeSlug);
}
