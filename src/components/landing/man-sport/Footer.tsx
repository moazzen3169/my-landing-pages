'use client';

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  storeName?: string;
}

export default function Footer({ storeName = 'دپیکس' }: FooterProps) {
  const shortInitial = storeName ? storeName.charAt(0) : 'د';

  return (
    <footer className="bg-[#111111] text-[#F5F3EE] py-8 border-t border-white/10" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-peyda text-slate-400">
          <Link href="/shop/man-sport" className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[var(--landing-primary,#E04A24)] text-black flex items-center justify-center font-bold text-xs">
              {shortInitial}
            </span>
            <span className="font-bold text-sm text-white">
              {storeName}
            </span>
          </Link>

          <p>© ۲۰۲۶ تمامی حقوق برای فروشگاه {storeName} محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
