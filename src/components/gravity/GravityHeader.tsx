'use client';

import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';

interface GravityHeaderProps {
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  cartCount: number;
  wishlistCount: number;
  storeName?: string;
}

export default function GravityHeader({
  onOpenSearch,
  onOpenCart,
  onOpenWishlist,
  cartCount,
  wishlistCount,
  storeName = 'دپیکس',
}: GravityHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Sticky Header */}
      <header
        className={`w-full top-0 z-40 transition-all duration-300 font-header-gravity ${
          isScrolled
            ? 'bg-[#F3F2EE] border-[#D7D4CD]/60 py-5'
            : 'bg-[#F3F2EE] border-[#D7D4CD]/60 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Right Section (RTL Navigation Items) */}
          <nav className="hidden lg:flex items-center gap-9 text-sm font-medium text-[#111111]">
            <a
              href="#new-arrivals"
              className="hover:text-[#666666] transition-colors py-1 relative group"
            >
              جدیدها
              <span className="absolute bottom-0 right-0 w-0 h-[1.5px] bg-[var(--landing-primary,#111111)] transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="#categories"
              className="hover:text-[#666666] transition-colors py-1 relative group"
            >
              دسته‌بندی‌ها
              <span className="absolute bottom-0 right-0 w-0 h-[1.5px] bg-[var(--landing-primary,#111111)] transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="#brands"
              className="hover:text-[#666666] transition-colors py-1 relative group"
            >
              برندها
              <span className="absolute bottom-0 right-0 w-0 h-[1.5px] bg-[var(--landing-primary,#111111)] transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#111111] hover:text-[#666666] transition-colors focus:outline-none"
            aria-label="منو"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Center Section: Logo */}
          <div className="text-center">
            <a href="#" className="inline-block group">
              <span className="text-2xl sm:text-3xl font-black tracking-widest text-[var(--landing-primary,#111111)] font-sans uppercase block leading-none">
                {storeName}
              </span>
              <span className="text-[10px] text-[#666666] tracking-widest font-medium font-peyda block mt-0.5">
                {storeName} • پوشاک مردانه
              </span>
            </a>
          </div>

          {/* Left Section (RTL Left): Actions */}
          <div className="flex items-center space-x-4 sm:space-x-5 space-x-reverse">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#111111] hover:text-[#666666] transition-colors relative flex items-center gap-1.5 text-xs font-medium"
              aria-label="جستجو"
            >
              <Search size={19} className="stroke-[1.75]" />
              <span className="hidden sm:inline">جستجو</span>
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={onOpenWishlist}
              className="p-2 text-[#111111] hover:text-[#666666] transition-colors relative"
              aria-label="علاقه‌مندی‌ها"
            >
              <Heart size={19} className="stroke-[1.75]" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[var(--landing-primary,#111111)] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="p-2 bg-[var(--landing-primary,#111111)] text-white hover:opacity-90 transition-all px-3 py-1.5 rounded-sm flex items-center gap-2 text-xs font-medium"
              aria-label="سبد خرید"
            >
              <ShoppingBag size={17} className="stroke-[1.75]" />
              <span>سبد خرید</span>
              {cartCount > 0 && (
                <span className="bg-white text-[#111111] text-[10px] px-1.5 py-0.2 font-bold rounded-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F8F9FA] border-t border-[#E5E5E5] px-6 py-6 space-y-4 font-peyda animate-fadeIn">
            <a
              href="#new-arrivals"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#111111] hover:text-[#666666]"
            >
              جدیدها
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#111111] hover:text-[#666666]"
            >
              دسته‌بندی‌ها
            </a>
            <a
              href="#styles"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#111111] hover:text-[#666666]"
            >
              استایل‌ها
            </a>
            <a
              href="#brands"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#111111] hover:text-[#666666]"
            >
              برندها
            </a>
            <a
              href="#store-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#111111] hover:text-[#666666]"
            >
              فروشگاه حضوری تبریز
            </a>
          </div>
        )}
      </header>
    </>
  );
}
