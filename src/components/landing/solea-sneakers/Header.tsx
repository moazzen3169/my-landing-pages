'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenMobileMenu: () => void;
  onOpenQuickView?: (productId: string) => void;
  storeName?: string;
}

export default function Header({
  onOpenSearch,
  onOpenCart,
  onOpenMobileMenu,
  storeName = 'دپیکس',
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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
    { label: 'پرفروش‌ها', href: '#products' },
    { label: 'زنانه', href: '#products' },
    { label: 'مردانه', href: '#products' },
    { label: 'یونیسکس', href: '#products' },
    { label: 'کالکشن‌ها', href: '#categories' },
    { label: 'دراپ محدود', href: '#limited-drop' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 font-header-solea" dir="rtl">
      {/* 01 — TOP PROMO BAR */}
      <div className="bg-[#0A0A0A] text-[#F3F3F1] h-9 flex items-center justify-center px-4 text-[11px] sm:text-xs font-medium tracking-normal border-b border-[#222222]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>ارسال رایگان برای سفارش‌های بالای ۲۰ میلیون تومان</span>
          <span className="hidden md:inline text-[#6B6B68]">|</span>
          <span className="hidden md:inline text-[#D9D9D5]">دراپ‌های جدید {storeName} را زودتر از همه ببینید</span>
        </div>
      </div>

      {/* 02 — MAIN NAVIGATION */}
      <header
        className={`transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#F3F3F1]/90 backdrop-blur-md border-[#D9D9D5] py-3 shadow-xs'
            : 'bg-[#F3F3F1]/60 backdrop-blur-xs border-transparent py-4'
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between gap-6">

          {/* RIGHT (RTL): LOGO & WORDMARK */}
          <div className="flex items-center gap-8 shrink-0">
            <Link
              href="/shop/solea-sneakers"
              className="flex items-baseline gap-2 group"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--landing-primary,#0A0A0A)] uppercase font-peyda group-hover:opacity-75 transition-opacity">
                {storeName}
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-[#6B6B68] uppercase hidden sm:inline-block border-r border-[#D9D9D5] pr-2.5">
                EDITORIAL SNEAKERS
              </span>
            </Link>
          </div>

          {/* CENTER (RTL): NAV LINKS */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-[#0A0A0A]/80 hover:text-[#0A0A0A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1.5px] after:bg-[#0A0A0A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* LEFT (RTL): ACTIONS (SEARCH, ACCOUNT, CART, MOBILE TOGGLE) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* SEARCH */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium text-[#0A0A0A] bg-[#E8E8E5] hover:bg-[#D9D9D5] border border-[#D9D9D5] rounded-full transition-colors"
              aria-label="جستجو"
            >
              <Search className="w-3.5 h-3.5 shrink-0 text-[#0A0A0A]" />
              <span className="hidden sm:inline text-[#6B6B68]">جستجو...</span>
            </button>

            {/* ACCOUNT / WISHLIST */}
            <a
              href="#products"
              className="relative p-2 text-[#0A0A0A] hover:bg-[#E8E8E5] rounded-full transition-colors hidden sm:flex items-center justify-center border border-[#D9D9D5]"
              aria-label="حساب کاربری"
              title="حساب کاربری / علاقه‌مندی‌ها"
            >
              <Heart className="w-4 h-4 shrink-0" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-[var(--landing-primary,#0A0A0A)] text-[#F3F3F1] text-[9px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </a>

            {/* CART BUTTON */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--landing-primary,#0A0A0A)] text-[#F3F3F1] hover:opacity-90 transition-colors text-xs font-medium border border-[#0A0A0A]"
              aria-label="سبد خرید"
            >
              <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
              <span>سبد خرید</span>
              {totalItems > 0 && (
                <span className="mr-1 px-1.5 py-0.2 bg-[#F3F3F1] text-[#0A0A0A] text-[10px] font-bold rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={onOpenMobileMenu}
              className="p-2 text-[#0A0A0A] hover:bg-[#E8E8E5] border border-[#D9D9D5] rounded-full xl:hidden transition-colors"
              aria-label="منوی موبایل"
            >
              <Menu className="w-4 h-4 shrink-0" />
            </button>
          </div>

        </div>
      </header>
    </div>
  );
}
