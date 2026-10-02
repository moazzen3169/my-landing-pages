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
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Keep background completely transparent while in hero section (until user scrolls past 1400px or hero section end)
      const heroElement = document.getElementById('hero-video-section');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        setIsScrolledPastHero(rect.bottom <= 120);
      } else {
        setIsScrolledPastHero(window.scrollY > 800);
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
    { label: 'فروش خصوصی', href: '#campaign', isHighlight: true },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 font-peyda ${
        isScrolledPastHero
          ? 'bg-white/90 backdrop-blur-md border-b border-black/5 py-3.5 shadow-none'
          : 'bg-transparent py-5 border-none shadow-none'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-6">
          <Link href="/shop/persian-luxury-v1" className="group text-start flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold tracking-widest text-[#171717] font-serif uppercase transition-colors group-hover:text-[#B29A6A]">
              TABRIZ BOUTIQUE
            </span>
            <span className="text-[9px] text-[#77736D] tracking-[0.25em] uppercase font-sans -mt-0.5 font-medium">
              HAUTE COUTURE • LEATHER & SHOES
            </span>
          </Link>
        </div>

        {/* NAV ITEMS */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium text-[#171717] tracking-wide">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`transition-all duration-300 relative py-1 hover:text-[#B29A6A] ${
                item.isHighlight
                  ? 'text-[#6F1D2A] font-semibold px-3 py-1 bg-[#6F1D2A]/5 hover:bg-[#6F1D2A] hover:text-white transition-all'
                  : 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B29A6A] hover:after:w-full after:transition-all'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenSearch}
            className="p-2.5 text-[#171717] hover:text-[#B29A6A] transition-colors flex items-center gap-2 text-xs font-medium"
            title="جستجو"
          >
            <Search className="w-4 h-4 stroke-[1.5]" />
            <span className="hidden sm:inline font-normal">جستجو</span>
          </button>

          <button
            onClick={onOpenWishlist}
            className="p-2.5 text-[#171717] hover:text-[#B29A6A] transition-colors relative"
            title="علاقه‌مندی‌ها"
          >
            <Heart className="w-4 h-4 stroke-[1.5]" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#B29A6A] text-white text-[9px] font-semibold rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCart}
            className="p-2.5 text-[#171717] hover:text-[#B29A6A] transition-colors relative flex items-center gap-2 text-xs font-medium"
            title="سبد خرید"
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
            <span className="hidden sm:inline font-normal">سبد</span>
            {cartCount > 0 && (
              <span className="w-4 h-4 bg-[#171717] text-white text-[9px] font-semibold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 text-[#171717] hover:text-[#B29A6A]"
            title="منو"
          >
            <Menu className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

      </div>
    </header>
  );
}
