'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, Menu, X, ChevronDown, Sparkles } from 'lucide-react';

interface PersianHeaderProps {
  onOpenSearch: () => void;
  cartCount: number;
}

export default function PersianHeader({ onOpenSearch, cartCount }: PersianHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-header-persian-lux ${
        isScrolled
          ? 'bg-[#0B0C0E]/90 backdrop-blur-xl border-b border-[#23262F]/80 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Right Section: Mobile Menu Toggle & Navigation Links */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#C8A97E] transition-colors"
            aria-label="منو"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#D2D4DC]">
            <a href="#hero" className="hover:text-[#C8A97E] transition-colors py-1 relative group">
              صفحه اصلی
              <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-[#C8A97E] scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
            </a>
            <a href="#categories" className="hover:text-[#C8A97E] transition-colors py-1 relative group">
              دسته‌بندی‌ها
              <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-[#C8A97E] scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
            </a>
            <a href="#products" className="hover:text-[#C8A97E] transition-colors py-1 relative group">
              کالکشن جدید
              <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-[#C8A97E] scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
            </a>
            <a href="#outfits" className="hover:text-[#C8A97E] transition-colors py-1 relative group">
              ست‌های فاخر
              <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-[#C8A97E] scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
            </a>
            <a href="#about" className="hover:text-[#C8A97E] transition-colors py-1 relative group">
              اصالت و داستان
              <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-[#C8A97E] scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
            </a>
          </nav>
        </div>

        {/* Center Section: Logo */}
        <div className="text-center">
          <Link href="/shop/persian-luxury-v1" className="inline-block group">
            <span className="block text-2xl md:text-3xl font-black tracking-wider text-white group-hover:text-[#C8A97E] transition-colors font-peyda">
              GARNET
            </span>
            <span className="block text-[10px] tracking-[0.35em] text-[#C8A97E] font-sans font-light uppercase opacity-90 -mt-1">
              HAUTE COUTURE
            </span>
          </Link>
        </div>

        {/* Left Section: Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Link back to Showcase Root */}
          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1C1F28] hover:bg-[#C8A97E] hover:text-black text-[#A5A8B6] text-xs font-semibold rounded-lg border border-[#2D313E] transition-all"
            title="بازگشت به کاتالوگ لندینگ‌ها"
          >
            <span>کاتالوگ لندینگ‌ها</span>
          </Link>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#D2D4DC] hover:text-[#C8A97E] transition-colors"
            title="جستجو"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Cart Icon */}
          <div className="relative">
            <button
              className="p-2 text-[#D2D4DC] hover:text-[#C8A97E] transition-colors flex items-center gap-1.5"
              title="سبد خرید"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C8A97E] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0C0E] border-b border-[#23262F] px-6 py-6 transition-all font-peyda">
          <nav className="flex flex-col gap-4 text-base font-medium text-white">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C8A97E] transition-colors py-2 border-b border-[#1C1F28]"
            >
              صفحه اصلی
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C8A97E] transition-colors py-2 border-b border-[#1C1F28]"
            >
              دسته‌بندی‌های لوکس
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C8A97E] transition-colors py-2 border-b border-[#1C1F28]"
            >
              کالکشن جدید
            </a>
            <a
              href="#outfits"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C8A97E] transition-colors py-2 border-b border-[#1C1F28]"
            >
              ست‌های فاخر
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C8A97E] transition-colors py-2 border-b border-[#1C1F28]"
            >
              اصالت و داستان برند
            </a>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 bg-[#C8A97E] text-black font-bold rounded-lg"
            >
              مشاهده بقیه لندینگ‌ها (Showcase)
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
