'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, Menu, User, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenMobileMenu: () => void;
  onOpenQuickView?: (productId: string) => void;
}

export default function Header({
  onOpenSearch,
  onOpenCart,
  onOpenMobileMenu,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'فروشگاه', href: '#products' },
    { label: 'جدیدترین‌ها', href: '#products' },
    { label: 'زنانه', href: '#products' },
    { label: 'مردانه', href: '#products' },
    { label: 'یونیسکس', href: '#products' },
    { label: 'برندها', href: '#brands' },
    { label: 'دسته‌بندی‌ها', href: '#categories' },
    { label: 'دراپ محدود', href: '#limited-drop' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 font-peyda" dir="rtl">
      {/* TOP ANNOUNCEMENT / UTILITY BAR */}
      <div className="bg-[#171717] text-[#F5F4F0] text-[11px] font-vazir py-2 px-4 border-b border-[#262626] transition-all duration-300">
        <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center gap-6 text-[#A3A3A3] font-normal">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#CCFF00]" />
              ارسال رایگان برای خریدهای بالای ۲ میلیون تومان
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#CCFF00]" />
              ضمانت اصالت ۱۰۰٪ تمامی برندها
            </span>
          </div>

          <div className="mx-auto md:mx-0 flex items-center gap-4 text-[11px] font-medium">
            <span className="flex items-center gap-1 text-[#F5F4F0]">
              <RotateCcw className="w-3.5 h-3.5 text-[#CCFF00]" />
              ۷ روز ضمانت تعویض و بازگشت
            </span>
            <span className="text-[#525252]">|</span>
            <span className="text-[#A3A3A3] hover:text-white cursor-pointer transition-colors">
              پشتیبانی آنلاین: ۰۲۱-۹۱۰۷۷۰۰
            </span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div
        className={`transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-[#E5E4E0] shadow-sm py-3'
            : 'bg-[#F5F4F0] border-[#E5E4E0]/80 py-4'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4">

          {/* RIGHT (RTL): LOGO & RETAILER BADGE */}
          <div className="flex items-center gap-4">
            <Link
              href="/shop/solea-sneakers"
              className="flex flex-col items-start group"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#171717] uppercase tracking-[0.15em] font-peyda leading-none">
                  SOLEA
                </span>
                <span className="bg-[#CCFF00] text-[#171717] text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase">
                  STORE
                </span>
              </div>
              <span className="text-[9px] font-mono text-[#777777] uppercase tracking-wider mt-0.5 hidden sm:inline-block">
                CURATED MULTI-BRAND FOOTWEAR
              </span>
            </Link>
          </div>

          {/* CENTER: NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs font-semibold text-[#171717]/80 hover:text-[#171717] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-[#171717] hover:after:w-full after:transition-all after:duration-250"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* LEFT (RTL): ACTIONS (SEARCH, ACCOUNT, WISHLIST, CART, MOBILE TOGGLE) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* SEARCH BUTTON */}
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3.5 sm:py-2 rounded-full hover:bg-[#171717]/[0.06] text-[#171717] transition-all flex items-center gap-2 border border-[#E5E4E0]"
              aria-label="جستجو"
            >
              <Search className="w-4 h-4 shrink-0 text-[#171717]" />
              <span className="hidden xl:inline text-xs font-vazir font-normal text-[#777777]">
                جستجوی برند و مدل...
              </span>
            </button>

            {/* ACCOUNT BUTTON */}
            <button
              className="p-2 sm:p-2.5 rounded-full hover:bg-[#171717]/[0.06] text-[#171717] transition-all hidden sm:flex items-center justify-center border border-[#E5E4E0]"
              aria-label="حساب کاربری"
            >
              <User className="w-4 h-4 shrink-0" />
            </button>

            {/* WISHLIST BUTTON */}
            <a
              href="#products"
              className="relative p-2 sm:p-2.5 rounded-full hover:bg-[#171717]/[0.06] text-[#171717] transition-all hidden sm:flex items-center justify-center border border-[#E5E4E0]"
              aria-label="علاقه‌مندی‌ها"
            >
              <Heart className="w-4 h-4 shrink-0" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-[#171717] text-white text-[9px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </a>

            {/* CART BUTTON */}
            <button
              onClick={onOpenCart}
              className="relative px-3.5 py-2 rounded-full bg-[#171717] text-white hover:bg-[#262626] transition-all flex items-center gap-2 shadow-sm"
              aria-label="سبد خرید"
            >
              <ShoppingBag className="w-4 h-4 shrink-0 text-[#CCFF00]" />
              <span className="text-xs font-semibold hidden sm:inline font-vazir">
                سبد خرید
              </span>
              {totalItems > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#CCFF00] text-[#171717] text-[10px] font-extrabold flex items-center justify-center font-mono">
                  {totalItems}
                </span>
              )}
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={onOpenMobileMenu}
              className="p-2 rounded-full hover:bg-[#171717]/[0.06] text-[#171717] lg:hidden transition-all border border-[#E5E4E0]"
              aria-label="منوی موبایل"
            >
              <Menu className="w-5 h-5 shrink-0" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
