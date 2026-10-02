'use client';

import React from 'react';
import { Search, ShoppingBag, Heart, Home } from 'lucide-react';

interface MobileBottomNavProps {
  cartCount: number;
  wishlistCount: number;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export default function MobileBottomNav({
  cartCount,
  wishlistCount,
  onOpenSearch,
  onOpenCart,
  onOpenWishlist,
}: MobileBottomNavProps) {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#E5E5E5] z-40 py-2.5 px-6 font-peyda dir-rtl">
      <div className="flex items-center justify-around">

        <a href="#hero-video-section" className="flex flex-col items-center gap-1 text-[#000000]">
          <Home className="w-5 h-5 stroke-[1.25]" />
          <span className="text-[10px] font-normal">خانه</span>
        </a>

        <button onClick={onOpenSearch} className="flex flex-col items-center gap-1 text-[#000000]">
          <Search className="w-5 h-5 stroke-[1.25]" />
          <span className="text-[10px] font-normal">جستجو</span>
        </button>

        <button onClick={onOpenWishlist} className="flex flex-col items-center gap-1 text-[#000000] relative">
          <Heart className="w-5 h-5 stroke-[1.25]" />
          <span className="text-[10px] font-normal">علاقه‌مندی</span>
          {wishlistCount > 0 && (
            <span className="absolute -top-1 right-2 w-3.5 h-3.5 bg-[#000000] text-white text-[8px] font-normal flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </button>

        <button onClick={onOpenCart} className="flex flex-col items-center gap-1 text-[#000000] relative">
          <ShoppingBag className="w-5 h-5 stroke-[1.25]" />
          <span className="text-[10px] font-normal">سبد</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 right-2 w-3.5 h-3.5 bg-[#000000] text-white text-[8px] font-normal flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </div>
  );
}
