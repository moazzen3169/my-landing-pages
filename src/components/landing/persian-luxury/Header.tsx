'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, Menu } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenMobileMenu: () => void;
  storeName?: string;
}

export default function Header({
  cartCount,
  wishlistCount,
  onOpenSearch,
  onOpenCart,
  onOpenWishlist,
  onOpenMobileMenu,
  storeName = 'دپیکس',
}: HeaderProps) {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero-video-section');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        setIsScrolledPastHero(rect.bottom <= 120);
      } else {
        setIsScrolledPastHero(window.scrollY > 600);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'کیف زنانه', href: '#categories' },
    { label: 'کفش و اکسسوری', href: '#categories' },
    { label: 'برندها', href: '#brands' },
    { label: 'منتخب کلکسیون', href: '#the-edit' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 font-header-persian-lux dir-rtl ${
        isScrolledPastHero
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E5E5E5] py-4'
          : 'bg-transparent py-6 border-none'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-6">
          <Link href="/shop/persian-luxury-v1" className="group text-start flex flex-col">
            <span className="min-w-[300px] text-2xl sm:text-3xl font-light tracking-widest text-[var(--landing-primary,#000000)] font-serif uppercase transition-colors">
              {storeName}
            </span>
            <span className="text-[9px] text-[#666666] tracking-[0.2em] uppercase font-sans font-normal -mt-1">
              HAUTE COUTURE
            </span>
          </Link>
        </div>

        {/* NAV ITEMS */}
        <nav className="hidden lg:flex items-center gap-10 text-xs font-normal text-[#111111] tracking-wide">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="transition-colors duration-200 py-1 hover:text-[#666666]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 sm:gap-6 text-[#000000]">
          <button
            onClick={onOpenSearch}
            className="p-1 hover:opacity-60 transition-opacity flex items-center gap-2 text-xs font-normal"
            title="جستجو"
          >
            <Search className="w-4 h-4 stroke-[1.25]" />
            <span className="hidden sm:inline">جستجو</span>
          </button>

          <button
            onClick={onOpenWishlist}
            className="p-1 hover:opacity-60 transition-opacity relative flex items-center gap-2 text-xs font-normal"
            title="علاقه‌مندی‌ها"
          >
            <Heart className="w-4 h-4 stroke-[1.25]" />
            <span className="hidden sm:inline">علاقه‌مندی‌ها</span>
            {wishlistCount > 0 && (
              <span className="w-4 h-4 bg-[var(--landing-primary,#000000)] text-white text-[9px] font-normal flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCart}
            className="p-1 hover:opacity-60 transition-opacity relative flex items-center gap-2 text-xs font-normal"
            title="سبد خرید"
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.25]" />
            <span className="hidden sm:inline">سبد</span>
            {cartCount > 0 && (
              <span className="w-4 h-4 bg-[var(--landing-primary,#000000)] text-white text-[9px] font-normal flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-1 hover:opacity-60"
            title="منو"
          >
            <Menu className="w-5 h-5 stroke-[1.25]" />
          </button>
        </div>

      </div>
    </header>
  );
}
