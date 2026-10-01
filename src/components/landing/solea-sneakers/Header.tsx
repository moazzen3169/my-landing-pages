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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-peyda ${
        isScrolled
          ? 'bg-[#F8FAFC]/95 backdrop-blur-md border-b border-[#CBD5E1]/60 py-3.5'
          : 'bg-transparent py-5'
      }`}
      dir="rtl"
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">

        {/* RIGHT (RTL): BRAND LOGO */}
        <div className="flex items-center gap-6">
          <Link
            href="/shop/solea-sneakers"
            className="flex flex-col items-start group"
          >
            <span className="text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#0B1220] uppercase font-peyda leading-none group-hover:text-[#8FA9C4] transition-colors">
              SOLEA
            </span>
            <span className="text-[9px] font-medium text-[#64748B] tracking-[0.15em] uppercase mt-1">
              ATHLETICS & FASHION
            </span>
          </Link>
        </div>

        {/* CENTER: DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-[#475569] hover:text-[#0B1220] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[1.5px] after:bg-[#0B1220] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* LEFT (RTL): UTILITY ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* SEARCH BUTTON */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 sm:px-4 rounded-full bg-[#F1F5F9] hover:bg-[#CBD5E1]/50 text-[#0B1220] transition-colors flex items-center justify-end gap-2.5 border border-[#CBD5E1]/40"
            aria-label="جستجو"
          >
            <span className="hidden xl:inline text-xs font-medium text-[#64748B]">
              جستجوی اسنیکر...
            </span>
            <Search className="w-4 h-4 shrink-0 text-[#0B1220]" />
          </button>

          {/* WISHLIST BUTTON */}
          <a
            href="#products"
            className="relative p-2.5 rounded-full bg-[#F1F5F9] hover:bg-[#CBD5E1]/50 text-[#0B1220] border border-[#CBD5E1]/40 transition-colors hidden sm:flex items-center justify-center"
            aria-label="علاقه‌مندی‌ها"
          >
            <Heart className="w-4 h-4 shrink-0" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-[#0B1220] text-[#F8FAFC] text-[9px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </a>

          {/* CART BUTTON */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 sm:px-4 py-2.5 rounded-full bg-[#0B1220] text-[#F8FAFC] hover:bg-[#16233A] transition-colors flex items-center gap-2 border border-[#0B1220]"
            aria-label="سبد خرید"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span className="text-xs font-semibold hidden sm:inline">
              سبد خرید
            </span>
            {totalItems > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#8FA9C4] text-[#0B1220] text-[10px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={onOpenMobileMenu}
            className="p-2.5 rounded-full bg-[#F1F5F9] hover:bg-[#CBD5E1]/50 text-[#0B1220] border border-[#CBD5E1]/40 lg:hidden transition-colors"
            aria-label="منوی موبایل"
          >
            <Menu className="w-5 h-5 shrink-0" />
          </button>
        </div>

      </div>
    </header>
  );
}
