import type { Metadata } from 'next';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';

export const metadata: Metadata = {
  title: 'SOLEA | فروشگاه تخصصی اسنیکر لوکس',
  description: 'خرید اسنیکرهای منتخب زنانه، مردانه و یونیسکس از برندهای مطرح دنیا نایکی، آدیداس، نیوبالانس، اسیکس و جردن با ضمانت اصالت.',
  openGraph: {
    title: 'SOLEA | بوتیک تخصصی اسنیکر لوکس',
    description: 'انتخابی دقیق از اسنیکرهای روز دنیا برای حرکت، استایل و روزمرگی.',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function SoleaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <WishlistProvider>
        {children}
      </WishlistProvider>
    </CartProvider>
  );
}
