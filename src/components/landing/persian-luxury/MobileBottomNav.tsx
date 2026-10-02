'use client';

import React from 'react';
import { Home, Grid, Search, Heart, ShoppingBag } from 'lucide-react';

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
    <div className="fixed bottom-0 inset-x-0 bg-[#F7F5F1]/95 backdrop-blur-md border-t border-[#ffffff] z-40 lg:hidden py-2 px-3 font-peyda shadow-lg">
      <div className="flex items-center justify-around">

        {/* HOME */}
        <a
          href="#"
          className="flex flex-col items-center gap-1 p-2 min-w-[56px] text-[#171717] hover:text-[#B29A6A] transition-colors"
        >
          <Home className="w-5 h-5 stroke-[1.75]" />
          <span className="text-[10px] font-medium">خانه</span>
        </a>

        {/* CATEGORIES */}
        <a
          href="#categories"
          className="flex flex-col items-center gap-1 p-2 min-w-[56px] text-[#171717] hover:text-[#B29A6A] transition-colors"
        >
          <Grid className="w-5 h-5 stroke-[1.75]" />
          <span className="text-[10px] font-medium">دسته‌ها</span>
        </a>

        {/* SEARCH */}
        <button
          onClick={onOpenSearch}
          className="flex flex-col items-center gap-1 p-2 min-w-[56px] text-[#171717] hover:text-[#B29A6A] transition-colors"
        >
          <Search className="w-5 h-5 stroke-[1.75]" />
          <span className="text-[10px] font-medium">جستجو</span>
        </button>

        {/* WISHLIST */}
        <button
          onClick={onOpenWishlist}
          className="flex flex-col items-center gap-1 p-2 min-w-[56px] text-[#171717] hover:text-[#B29A6A] transition-colors relative"
        >
          <Heart className="w-5 h-5 stroke-[1.75]" />
          <span className="text-[10px] font-medium">علاقه‌مندی</span>
          {wishlistCount > 0 && (
            <span className="absolute top-1 right-2 w-4 h-4 bg-[#B29A6A] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </button>

        {/* CART */}
        <button
          onClick={onOpenCart}
          className="flex flex-col items-center gap-1 p-2 min-w-[56px] text-[#171717] hover:text-[#B29A6A] transition-colors relative"
        >
          <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
          <span className="text-[10px] font-medium">سبد خرید</span>
          {cartCount > 0 && (
            <span className="absolute top-1 right-2 w-4 h-4 bg-[#171717] text-[#F7F5F1] text-[9px] font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </div>
  );
}
