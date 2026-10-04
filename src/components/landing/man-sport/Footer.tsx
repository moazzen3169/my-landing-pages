'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F5F3EE] py-8 border-t border-white/10" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-peyda text-slate-400">
          <Link href="/shop/man-sport" className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#B7FF00] text-black flex items-center justify-center font-bold text-xs">
              MS
            </span>
            <span className="font-bold text-sm text-white">
              MAN<span className="text-[#B7FF00]">SPORT</span>
            </span>
          </Link>

          <p>© ۲۰۲۶ تمامی حقوق برای فروشگاه MAN SPORT محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
