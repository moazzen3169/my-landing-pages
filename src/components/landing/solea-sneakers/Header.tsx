'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, Menu, ArrowRight } from 'lucide-react';
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
    { label: 'پرفروش‌ها', href: '#products' },
    { label: 'زنانه', href: '#products' },
    { label: 'مردانه', href: '#products' },
    { label: 'یونیسکس', href: '#products' },
    { label: 'دسته‌بندی‌ها', href: '#categories' },
    { label: 'دراپ محدود', href: '#limited-drop' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 font-peyda ${
        isScrolled
          ? 'bg-[#FAFAF7]/90 backdrop-blur-xl border-b border-[#111111]/[0.08] shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
      dir="rtl"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between gap-4">

        {/* RIGHT (RTL): BRAND LOGO */}
        <div className="flex items-center gap-6">
          <Link
            href="/shop/solea-sneakers"
            className="flex flex-col items-start group"
          >
            <span className="text-2xl sm:text-3xl font-extrabold tracking-[0.2em] text-[#111111] uppercase font-peyda leading-none group-hover:opacity-80 transition-opacity">
              SOLEA
            </span>
            <span className="text-[9px] font-mono tracking-[0.25em] text-[#6B6B68] uppercase mt-1">
              HAUTE SNEAKERS
            </span>
          </Link>

          {/* CATALOG SHOWCASE BACK LINK */}
          <Link
            href="/"
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 bg-[#111111]/[0.05] hover:bg-[#111111] hover:text-white text-[#6B6B68] text-[11px] font-medium rounded-full transition-all duration-300"
          >
            <ArrowRight className="w-3 h-3 shrink-0" />
            <span>کاتالوگ لندینگ‌ها</span>
          </Link>
        </div>

        {/* CENTER: DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs font-semibold text-[#111111]/80 hover:text-[#111111] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1.5px] after:bg-[#111111] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* LEFT (RTL): UTILITY ACTIONS (SEARCH, WISHLIST, CART, MOBILE MENU) */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* SEARCH BUTTON */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-full hover:bg-[#111111]/[0.06] text-[#111111] transition-all flex items-center gap-2"
            aria-label="جستجو"
          >
            <Search className="w-5 h-5 shrink-0" />
            <span className="hidden xl:inline text-xs font-medium text-[#6B6B68]">
              جستجو...
            </span>
          </button>

          {/* WISHLIST BUTTON */}
          <a
            href="#products"
            className="relative p-2.5 rounded-full hover:bg-[#111111]/[0.06] text-[#111111] transition-all hidden sm:flex items-center justify-center"
            aria-label="علاقه‌مندی‌ها"
          >
            <Heart className="w-5 h-5 shrink-0" />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -left-0.5 w-4 h-4 rounded-full bg-[#111111] text-white text-[9px] font-bold flex items-center justify-center animate-scale-in">
                {wishlistCount}
              </span>
            )}
          </a>

          {/* CART BUTTON */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 sm:px-4 py-2.5 rounded-full bg-[#111111] text-white hover:bg-[#252525] transition-all flex items-center gap-2 shadow-md shadow-black/10"
            aria-label="سبد خرید"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span className="text-xs font-bold hidden sm:inline">
              سبد خرید
            </span>
            {totalItems > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#A89B84] text-black text-[10px] font-extrabold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={onOpenMobileMenu}
            className="p-2.5 rounded-full hover:bg-[#111111]/[0.06] text-[#111111] lg:hidden transition-all"
            aria-label="منوی موبایل"
          >
            <Menu className="w-6 h-6 shrink-0" />
          </button>
        </div>

      </div>
    </header>
  );
}
