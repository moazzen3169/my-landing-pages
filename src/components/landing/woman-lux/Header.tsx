'use client';

import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSelectCategory?: (category: string) => void;
}

export default function Header({
  cartCount,
  wishlistCount,
  onOpenSearch,
  onOpenCart,
  onOpenWishlist,
  onSelectCategory,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'فروشگاه', id: 'catalog' },
    { label: 'جدیدها', id: 'new-arrivals' },
    { label: 'مانتو', id: 'مانتو' },
    { label: 'کت', id: 'کت' },
    { label: 'پالتو', id: 'پالتو' },
    { label: 'پیراهن', id: 'پیراهن' },
    { label: 'شلوار', id: 'شلوار' },
    { label: 'اکسسوری', id: 'اکسسوری' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (onSelectCategory && (id === 'مانتو' || id === 'کت' || id === 'پالتو' || id === 'پیراهن' || id === 'شلوار' || id === 'اکسسوری')) {
      onSelectCategory(id);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white text-[#111111] border-b border-[#E5E5E5] py-4 shadow-xs'
            : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent text-white py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">

          {/* RIGHT SIDE: BRAND LOGO (in RTL, Right side is visual start or logo) */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-black/5 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <a
              href="#"
              className="group flex items-center gap-2 text-right"
            >
              <span className="font-serif tracking-widest text-xl sm:text-2xl font-bold uppercase">
                NOIRÉ
              </span>

            </a>
          </div>

          {/* CENTER: DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-normal">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 transition-colors hover:opacity-100 ${
                  isScrolled ? 'text-[#111111]/80 hover:text-[#111111]' : 'text-white/80 hover:text-white'
                } group`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 right-0 h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-200 ${
                  isScrolled ? 'bg-[#111111]' : 'bg-white'
                }`} />
              </button>
            ))}
          </nav>

          {/* LEFT SIDE (RTL): SEARCH, WISHLIST, CART */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={onOpenSearch}
              className="p-2 transition-opacity hover:opacity-70 flex items-center gap-1.5"
              aria-label="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden md:inline text-xs font-medium">جستجو</span>
            </button>

            <button
              onClick={onOpenWishlist}
              className="p-2 transition-opacity hover:opacity-70 relative flex items-center gap-1.5"
              aria-label="Wishlist"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#111111] text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenCart}
              className={`p-2 px-3.5 rounded-full transition-all flex items-center gap-2 text-xs font-medium ${
                isScrolled
                  ? 'bg-[#111111] text-white hover:bg-black'
                  : 'bg-white text-[#111111] hover:bg-neutral-100'
              }`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">سبد خرید</span>
              {cartCount > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] bg-neutral-200 text-[#111111] rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/60 backdrop-blur-xs lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-xs bg-white text-[#111111] p-6 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E5E5E5] mb-6">
                <span className="font-serif tracking-widest text-lg font-bold">NOIRÉ WOMAN</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 text-sm font-medium">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="text-right py-2 border-b border-[#F5F5F5] hover:text-black transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E5E5E5] space-y-3">
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenSearch(); }}
                className="w-full flex items-center justify-between py-2.5 px-4 bg-[#F5F5F5] text-xs font-medium"
              >
                <span>جستجوی محصول</span>
                <Search className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-[#6B6B6B] text-center pt-2">
                © 2026 NOIRÉ. کلیه حقوق محفوظ است.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
