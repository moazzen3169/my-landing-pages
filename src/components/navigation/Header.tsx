'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, Menu, Globe } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import MegaMenu from './MegaMenu';

interface HeaderProps {
  onOpenSearch?: () => void;
  isDarkBackground?: boolean;
  isPersian?: boolean;
  storeName?: string;
}

export default function Header({
  onOpenSearch,
  isDarkBackground = false,
  isPersian = false,
  storeName,
}: HeaderProps) {
  const { setIsCartOpen, totalItems } = useCart();
  const { wishlistCount } = useWishlist();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Styling based on state
  const isHeaderDarkTheme = isDarkBackground && !isScrolled;

  const headerBg = isScrolled
    ? 'bg-[#F3F2EE]/95 backdrop-blur-md border-b border-[#D7D4CD] text-[#111111] shadow-sm'
    : isHeaderDarkTheme
    ? 'bg-transparent text-[#F3F2EE]'
    : 'bg-transparent text-[#111111]';

  const brandText = storeName || 'NOIRÉ';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-header-noire ${headerBg} ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 h-20 md:h-22 flex items-center justify-between">
          {/* LEFT SECTION (Nav Links & Menu Toggle) */}
          <div className="flex items-center gap-6 sm:gap-8">
            <button
              onClick={() => setIsMegaMenuOpen(true)}
              className={`flex items-center gap-2 hover:opacity-75 transition-opacity ${
                isPersian
                  ? 'text-xs md:text-sm font-medium font-peyda'
                  : 'text-[11px] font-medium tracking-[0.2em] uppercase'
              }`}
              aria-label={isPersian ? 'باز کردن منو' : 'Open Menu'}
            >
              <Menu className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">{isPersian ? 'منو' : 'MENU'}</span>
            </button>

            <nav
              className={`hidden lg:flex items-center gap-6 ${
                isPersian
                  ? 'text-xs md:text-sm font-medium font-peyda'
                  : 'text-[11px] font-medium tracking-[0.2em] uppercase'
              }`}
            >
              <Link href="/shop" className="hover:opacity-60 transition-opacity">
                {isPersian ? 'کالکشن‌ها' : 'COLLECTIONS'}
              </Link>
              <Link href="/shop/suits" className="hover:opacity-60 transition-opacity">
                {isPersian ? 'تشریفات و کت' : 'TAILORING'}
              </Link>
              <Link href="/lookbook" className="hover:opacity-60 transition-opacity">
                {isPersian ? 'لوک‌بوک' : 'LOOKBOOK'}
              </Link>
            </nav>
          </div>

          {/* CENTER: Brand Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="group flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-light tracking-[0.3em] font-display text-[var(--landing-primary,inherit)]">
                {brandText}
              </span>
              <span className="text-[8px] tracking-[0.35em] text-[#77746E] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-0.5">
                PARIS
              </span>
            </Link>
          </div>

          {/* RIGHT SECTION: Language Toggle, Search, Wishlist, Cart */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Language Switcher Button */}
            <Link
              href={isPersian ? '/shop/noire-men-formal' : '/shop/noire-men-formal-fa'}
              className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 border border-current/30 rounded-full hover:border-current transition-all shrink-0"
              title={isPersian ? 'تغییر زبان به انگلیسی' : 'Switch to Persian'}
            >
              <Globe className="w-3.5 h-3.5 shrink-0" />
              <span>{isPersian ? 'EN' : 'FA / فارسی'}</span>
            </Link>

            <button
              onClick={onOpenSearch}
              className={`flex items-center gap-2 hover:opacity-75 transition-opacity ${
                isPersian
                  ? 'text-xs md:text-sm font-medium font-peyda'
                  : 'text-[11px] font-medium tracking-[0.2em] uppercase'
              }`}
              aria-label={isPersian ? 'جستجو' : 'Search'}
            >
              <Search className="w-4 h-4 shrink-0" />
              <span className="hidden md:inline">{isPersian ? 'جستجو' : 'SEARCH'}</span>
            </button>

            <Link
              href="/shop"
              className={`hidden sm:flex items-center gap-1.5 hover:opacity-75 transition-opacity relative ${
                isPersian
                  ? 'text-xs md:text-sm font-medium font-peyda'
                  : 'text-[11px] font-medium tracking-[0.2em] uppercase'
              }`}
              aria-label={isPersian ? 'علاقه‌مندی‌ها' : 'Wishlist'}
            >
              <Heart className="w-4 h-4 shrink-0" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-2 text-[9px] bg-[#111111] text-[#F3F2EE] px-1 rounded-full font-mono">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className={`flex items-center gap-2 hover:opacity-75 transition-opacity relative ${
                isPersian
                  ? 'text-xs md:text-sm font-medium font-peyda'
                  : 'text-[11px] font-medium tracking-[0.2em] uppercase'
              }`}
              aria-label={isPersian ? 'سبد خرید' : 'Cart'}
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="hidden md:inline">{isPersian ? 'سبد خرید' : 'BAG'}</span>
              {totalItems > 0 && (
                <span className="px-1.5 py-0.5 text-[10px] bg-[#111111] text-[#F3F2EE] font-mono rounded-full leading-none">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mega Menu Modal */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
        isPersian={isPersian}
      />
    </>
  );
}
