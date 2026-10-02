'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenMobileMenu: () => void;
}

export default function Header({
  cartCount,
  wishlistCount,
  onOpenSearch,
  onOpenCart,
  onOpenWishlist,
  onOpenMobileMenu,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'فروشگاه', href: '#catalog' },
    { label: 'تازه‌ها', href: '#new-arrivals' },
    { label: 'کیف', href: '#categories' },
    { label: 'کفش', href: '#categories' },
    { label: 'برندها', href: '#brands' },
    { label: 'منتخب ما', href: '#the-edit' },
    { label: 'فروش ویژه', href: '#campaign', isBadge: true },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 font-peyda ${
        isScrolled
          ? 'bg-[#F7F5F1]/95 backdrop-blur-md border-b border-[#DDD9D2] py-3.5 shadow-xs'
          : 'bg-[#F7F5F1]/80 backdrop-blur-xs py-5 border-b border-[#DDD9D2]/40'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">

        {/* RIGHT SIDE: BRAND LOGO */}
        <div className="flex items-center gap-6">
          <Link href="/shop/persian-luxury-v1" className="group text-start">
            <span className="block text-xl sm:text-2xl font-black tracking-tight text-[#171717] font-serif uppercase">
              TABRIZ BOUTIQUE
            </span>
            <span className="block text-[10px] text-[#77736D] tracking-widest uppercase font-sans -mt-1 group-hover:text-[#B29A6A] transition-colors">
              WOMEN'S LUXURY BAGS & SHOES
            </span>
          </Link>
        </div>

        {/* CENTER / RIGHT-CENTER: DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#171717]">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`transition-colors hover:text-[#B29A6A] relative py-1 ${
                item.isBadge
                  ? 'text-[#6F1D2A] font-bold px-2.5 py-1 bg-[#6F1D2A]/10 rounded-md border border-[#6F1D2A]/20 hover:bg-[#6F1D2A] hover:text-white'
                  : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* LEFT SIDE: ACTIONS */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* SEARCH BUTTON */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#171717] hover:text-[#B29A6A] transition-colors flex items-center gap-1.5 text-xs font-medium"
            title="جستجو"
          >
            <Search className="w-4 sm:w-5 h-4 sm:h-5 stroke-[1.75]" />
            <span className="hidden sm:inline">جستجو</span>
          </button>

          {/* WISHLIST BUTTON */}
          <button
            onClick={onOpenWishlist}
            className="p-2 text-[#171717] hover:text-[#B29A6A] transition-colors relative"
            title="علاقه‌مندی‌ها"
          >
            <Heart className="w-4 sm:w-5 h-4 sm:h-5 stroke-[1.75]" />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#B29A6A] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* CART BUTTON */}
          <button
            onClick={onOpenCart}
            className="p-2 text-[#171717] hover:text-[#B29A6A] transition-colors relative flex items-center gap-1.5 text-xs font-medium"
            title="سبد خرید"
          >
            <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5 stroke-[1.75]" />
            <span className="hidden sm:inline">سبد خرید</span>
            {cartCount > 0 && (
              <span className="w-4 sm:w-5 h-4 sm:h-5 bg-[#171717] text-[#F7F5F1] text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 text-[#171717] hover:text-[#B29A6A]"
            title="منو"
          >
            <Menu className="w-6 h-6 stroke-[1.75]" />
          </button>
        </div>

      </div>
    </header>
  );
}
