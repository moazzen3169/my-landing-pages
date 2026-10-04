'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, Menu } from 'lucide-react';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenMobileMenu: () => void;
  cartCount?: number;
  wishlistCount?: number;
}

export default function Header({
  onOpenSearch,
  onOpenCart,
  onOpenMobileMenu,
  cartCount = 2,
  wishlistCount = 0,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0  z-50 pointer-events-none transition-all duration-300">
      {/* FLOATING GLASS CONTAINER (88%-92% VIEWPORT WIDTH) */}
      <div
        className={`pointer-events-auto max-w-[650px]  mx-auto rounded-full transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#111111]/10 backdrop-blur-2xl border-white/15 text-white py-3.5 px-3.5 sm:px-3.5'
            : 'bg-[#F5F3EE]/80 backdrop-blur-xl border-slate-900/0 text-[#111111] py-3.5 px-3.5 sm:px-3.5'
        }`}
      >
        <div className="flex items-center justify-between gap-4">

          {/* RIGHT (RTL): LOGO & 3 NAV LINKS */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* LOGO */}
            <Link href="/shop/man-sport" className="flex items-center gap-2.5 group shrink-0">
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs tracking-tight transition-colors ${
                  isScrolled
                    ? 'bg-[#E04A24] text-black'
                    : 'bg-[#111111] text-[#F5F3EE] group-hover:bg-[#E04A24] group-hover:text-black'
                }`}
              >
                MS
              </span>
              <span className="font-black tracking-tight leading-none font-peyda">
                MAN<span className="text-[#E04A24]">SPORT</span>
              </span>
            </Link>

            {/* THREE NAVIGATION LINKS ONLY */}
            <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold font-peyda">
              <a
                href="#products-section"
                className="hover:text-[#E04A24] transition-colors"
              >
                محصولات
              </a>
              <a
                href="#styles-section"
                className="hover:text-[#E04A24] transition-colors"
              >
                استایل‌ها
              </a>
              <a
                href="#brands-section"
                className="hover:text-[#E04A24] transition-colors"
              >
                برندها
              </a>
            </nav>
          </div>

          {/* LEFT (RTL): THREE MINIMAL ICONS ONLY (SEARCH, WISHLIST, CART) + MOBILE MENU */}
          <div className="flex items-center gap-5 sm:gap-6">
            {/* SEARCH ICON ONLY */}
            <button
              onClick={onOpenSearch}
              className="relative p-1 transition-colors hover:text-[#E04A24]"
              title="جستجو"
              aria-label="جستجو"
            >
              <Search className="w-5 h-5 stroke-[1.75]" />
            </button>

            {/* WISHLIST ICON ONLY */}
            <button
              className="relative p-1 transition-colors hover:text-[#E04A24]"
              title="علاقه‌مندی‌ها"
              aria-label="علاقه‌مندی‌ها"
            >
              <Heart className="w-5 h-5 stroke-[1.75]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-[#E04A24] text-white text-[9px] font-mono font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* CART ICON ONLY */}
            <button
              onClick={onOpenCart}
              className="relative p-1 transition-colors hover:text-[#E04A24]"
              title="سبد خرید"
              aria-label="سبد خرید"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-[#E04A24] text-white text-[9px] font-mono font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden p-1 transition-colors hover:text-[#E04A24]"
              title="منو"
              aria-label="منو"
            >
              <Menu className="w-5 h-5 stroke-[1.75]" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
