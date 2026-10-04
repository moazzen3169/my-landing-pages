import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مان اسپرت (MAN SPORT) — فروشگاه چندبرند پوشاک استریت‌ویر و اسپرت مردانه',
  description: 'خرید اینترنتی جدیدترین محصولات پوشاک مردانه، هودی، تیشرت اورسایز، شلوار کارگو و کاپشن از بیش از ۲۰ برند برتر دنیا با ضمانت اصالت ۱۰۰٪.',
};

export default function ManSportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
