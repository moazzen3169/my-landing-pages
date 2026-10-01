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
}

export default function Header({
  onOpenSearch,
  isDarkBackground = false,
  isPersian = false,
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
    ? 'bg-[#F3F2EE]/90 backdrop-blur-md border-b border-[#D7D4CD] text-[#111111]'
    : isHeaderDarkTheme
    ? 'bg-transparent text-[#F3F2EE]'
    : 'bg-transparent text-[#111111]';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg} ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          {/* LEFT / RIGHT (Depending on dir): Nav Links & Menu Toggle */}
          <div className="flex items-center space-x-6 sm:space-x-8 space-x-reverse">
            <button
              onClick={() => setIsMegaMenuOpen(true)}
              className={`flex items-center space-x-2 space-x-reverse hover:opacity-70 transition-opacity ${
                isPersian
                  ? 'text-xs md:text-sm font-medium tracking-normal font-peyda'
                  : 'text-[11px] font-medium tracking-[0.2em] uppercase'
              }`}
            >
              <Menu className="w-4 h-4" />
              <span className="hidden md:inline">{isPersian ? 'منو' : 'MENU'}</span>
            </button>

            <nav
              className={`hidden lg:flex items-center space-x-6 space-x-reverse ${
                isPersian
                  ? 'text-xs md:text-sm font-medium tracking-normal font-peyda'
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
              <span className="text-2xl md:text-3xl font-light tracking-[0.3em] font-display">
                NOIRÉ
              </span>
              <span className="text-[8px] tracking-[0.35em] text-[#77746E] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-1">
                PARIS
              </span>
            </Link>
          </div>

          {/* RIGHT / LEFT: Language Toggle, Search, Wishlist, Cart */}
          <div className="flex items-center space-x-4 sm:space-x-6 space-x-reverse">
            {/* Language Switcher Button */}
            <Link
              href={isPersian ? '/shop/noire-men-formal' : '/shop/noire-men-formal-fa'}
              className="flex items-center space-x-1.5 space-x-reverse text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 border border-current/30 rounded hover:border-current transition-all"
              title={isPersian ? 'تغییر زبان به انگلیسی' : 'Switch to Persian'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isPersian ? 'EN' : 'FA / فارسی'}</span>
            </Link>

            <button
              onClick={onOpenSearch}
              className={`flex items-center space-x-2 space-x-reverse hover:opacity-70 transition-opacity ${
                isPersian
                  ? 'text-xs md:text-sm font-medium tracking-normal font-peyda'
                  : 'text-[11px] font-medium tracking-[0.2em] uppercase'
              }`}
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">{isPersian ? 'جستجو' : 'SEARCH'}</span>
            </button>

            <Link
              href="/shop"
              className={`hidden sm:flex items-center space-x-1.5 space-x-reverse hover:opacity-70 transition-opacity relative ${
                isPersian
                  ? 'text-xs md:text-sm font-medium tracking-normal font-peyda'
                  : 'text-[11px] font-medium tracking-[0.2em] uppercase'
              }`}
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-2 text-[9px] bg-[#111111] text-[#F3F2EE] px-1 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsCartOpen(true)}
              className={`flex items-center space-x-2 space-x-reverse hover:opacity-70 transition-opacity relative ${
                isPersian
                  ? 'text-xs md:text-sm font-medium tracking-normal font-peyda'
                  : 'text-[11px] font-medium tracking-[0.2em] uppercase'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden md:inline">{isPersian ? 'سبد خرید' : 'BAG'}</span>
              {totalItems > 0 && (
                <span className="mx-1 px-1.5 py-0.5 text-[10px] bg-[#111111] text-[#F3F2EE] font-mono rounded-full">
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
