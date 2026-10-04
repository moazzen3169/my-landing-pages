'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown, ArrowLeft, Sparkles } from 'lucide-react';
import { MAN_SPORT_CATEGORIES, MAN_SPORT_STYLES, MAN_SPORT_BRANDS } from '@/data/man-sport';

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
  wishlistCount = 5,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'products' | 'styles' | null>(null);

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
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300 px-3 sm:px-6 md:px-10 pt-3 sm:pt-5">
      {/* FLOATING GLASS CONTAINER */}
      <div
        className={`pointer-events-auto max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#111111]/90 backdrop-blur-xl border-white/15 text-white shadow-2xl py-2.5 px-4 sm:px-6'
            : 'bg-[#F5F3EE]/85 backdrop-blur-md border-slate-900/10 text-[#111111] shadow-lg py-3.5 px-4 sm:px-8'
        }`}
      >
        <div className="flex items-center justify-between gap-2 md:gap-6">

          {/* RIGHT (RTL STARTS HERE): LOGO & NAV */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* LOGO */}
            <Link href="/shop/man-sport" className="flex items-center gap-2 group shrink-0">
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm tracking-tighter transition-all ${
                  isScrolled
                    ? 'bg-[#B7FF00] text-black group-hover:scale-105'
                    : 'bg-[#111111] text-[#F5F3EE] group-hover:bg-[#B7FF00] group-hover:text-black'
                }`}
              >
                MS
              </span>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-base sm:text-lg leading-none font-peyda">
                  MAN<span className="text-[#B7FF00] font-black">SPORT</span>
                </span>
                <span className={`text-[9px] font-medium tracking-widest uppercase transition-colors ${isScrolled ? 'text-slate-400' : 'text-slate-500'}`}>
                  MULTI-BRAND STORE
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold font-peyda">
              {/* MEGA MENU: PRODUCTS */}
              <div
                className="relative py-2 cursor-pointer group"
                onMouseEnter={() => setActiveMegaMenu('products')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className="flex items-center gap-1 hover:text-[#B7FF00] transition-colors">
                  <span>محصولات</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
                </button>

                {/* MEGA MENU POPUP FOR PRODUCTS */}
                {activeMegaMenu === 'products' && (
                  <div className="absolute top-full right-0 mt-2 w-[540px] bg-[#111111] border border-white/10 text-white rounded-2xl p-5 shadow-2xl backdrop-blur-2xl grid grid-cols-12 gap-4 animate-in fade-in duration-200">
                    <div className="col-span-7 space-y-2">
                      <span className="text-[10px] uppercase font-mono text-[#B7FF00] tracking-widest block mb-2">
                        دسته‌بندی‌های اصلی
                      </span>
                      {MAN_SPORT_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.id}
                          href="#products-section"
                          onClick={() => setActiveMegaMenu(null)}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-white/10 transition-colors text-xs"
                        >
                          <span className="font-medium text-slate-200">{cat.label}</span>
                          <ArrowLeft className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#B7FF00] transition-opacity" />
                        </Link>
                      ))}
                    </div>
                    <div className="col-span-5 bg-white/5 rounded-xl p-3 flex flex-col justify-between border border-white/5">
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 block mb-1">کالکشن جدید ۲۰۲۶</span>
                        <h4 className="text-xs font-bold text-white mb-2">لباس‌های ورزشی و استریت‌ویر</h4>
                        <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                          بیش از ۲۰ برند بین‌المللی با ضمانت اصالت
                        </p>
                      </div>
                      <div className="mt-3 rounded-lg overflow-hidden border border-white/10 h-24 relative">
                        <img
                          src="/images/man-sport/T-shirt-1.webp"
                          alt="Streetwear Category"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* MEGA MENU: STYLES */}
              <div
                className="relative py-2 cursor-pointer group"
                onMouseEnter={() => setActiveMegaMenu('styles')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className="flex items-center gap-1 hover:text-[#B7FF00] transition-colors">
                  <span>استایل‌ها</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
                </button>

                {/* MEGA MENU POPUP FOR STYLES */}
                {activeMegaMenu === 'styles' && (
                  <div className="absolute top-full right-0 mt-2 w-[480px] bg-[#111111] border border-white/10 text-white rounded-2xl p-5 shadow-2xl backdrop-blur-2xl animate-in fade-in duration-200">
                    <span className="text-[10px] uppercase font-mono text-[#B7FF00] tracking-widest block mb-3">
                      بر اساس استایل انتخاب کن
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {MAN_SPORT_STYLES.map((style) => (
                        <Link
                          key={style.id}
                          href="#styles-section"
                          onClick={() => setActiveMegaMenu(null)}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10 transition-all group/item"
                        >
                          <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-slate-800">
                            <img src={style.image} alt={style.title} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <span className="block text-xs font-bold text-white group-hover/item:text-[#B7FF00] transition-colors">
                              {style.title}
                            </span>
                            <span className="text-[9px] font-mono text-slate-400">{style.englishTitle}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="#brands-section" className="hover:text-[#B7FF00] transition-colors">
                برندها
              </a>
              <a href="#new-arrivals-section" className="hover:text-[#B7FF00] transition-colors">
                جدیدها
              </a>
              <a href="#build-your-fit" className="flex items-center gap-1 text-[#FF5A1F] hover:text-[#B7FF00] transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                <span>استایل‌ساز</span>
              </a>
            </nav>
          </div>

          {/* CENTER: SEARCH CAPSULE ("چی می‌خوای بپوشی؟") */}
          <div className="hidden md:flex items-center flex-1 max-w-xs mx-2">
            <button
              onClick={onOpenSearch}
              className={`w-full flex items-center justify-between px-4 py-2 rounded-full border text-xs font-medium transition-all ${
                isScrolled
                  ? 'bg-white/10 border-white/15 text-slate-300 hover:bg-white/15 hover:border-white/25'
                  : 'bg-white border-slate-300 text-slate-600 hover:border-slate-400 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">چی می‌خوای بپوشی؟</span>
              </div>
              <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${isScrolled ? 'bg-white/10 border-white/10 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'}`}>
                ⌘K
              </span>
            </button>
          </div>

          {/* LEFT: ACTIONS (WISHLIST, CART, USER, MOBILE MENU) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* MOBILE SEARCH TRIGGER */}
            <button
              onClick={onOpenSearch}
              className={`md:hidden p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-200/60 text-slate-800'
              }`}
              title="جستجو"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* WISHLIST */}
            <button
              className={`relative p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-200/60 text-slate-800'
              }`}
              title="علاقه‌مندی‌ها"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#FF5A1F] text-white text-[9px] font-mono font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* CART */}
            <button
              onClick={onOpenCart}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold text-xs transition-all ${
                isScrolled
                  ? 'bg-[#B7FF00] text-black hover:bg-[#a6e600]'
                  : 'bg-[#111111] text-white hover:bg-slate-800'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline font-peyda">سبد</span>
              {cartCount > 0 && (
                <span
                  className={`w-4 h-4 rounded-full text-[10px] font-mono font-bold flex items-center justify-center ${
                    isScrolled ? 'bg-black text-[#B7FF00]' : 'bg-[#B7FF00] text-black'
                  }`}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={onOpenMobileMenu}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-200/60 text-slate-800'
              }`}
              title="منو"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
