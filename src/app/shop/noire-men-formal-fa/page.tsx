'use client';

import React, { useState } from 'react';
import Header from '@/components/navigation/Header';
import Preloader from '@/components/ui/Preloader';
import HeroSection from '@/components/hero/HeroSection';
import HeroScrollStorytelling from '@/components/hero/HeroScrollStorytelling';
import CategoryShowcase from '@/components/editorial/CategoryShowcase';
import NewEditSection from '@/components/editorial/NewEditSection';
import OutfitBuilder from '@/components/outfit/OutfitBuilder';
import ProductGrid from '@/components/products/ProductGrid';
import { BrandStory, QualitySection, Newsletter, Footer } from '@/components/editorial/FooterAndSections';
import CartDrawer from '@/components/cart/CartDrawer';
import SearchOverlay from '@/components/search/SearchOverlay';
import CustomCursor from '@/components/ui/CustomCursor';

import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';
import { NOIRE_PRODUCTS_FA, NOIRE_LOOKS_FA } from '@/data/noire-fa';

export default function NoirePersianLandingPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <SmoothScrollProvider>
          <Preloader />
          <CustomCursor />

          <div className="min-h-screen flex flex-col bg-[#F3F2EE] text-[#111111] relative font-peyda dir-rtl" dir="rtl">
            <Header
              onOpenSearch={() => setIsSearchOpen(true)}
              isDarkBackground={true}
              isPersian={true}
            />

            <main className="flex-grow">
              {/* 01 HERO SECTION WITH LOOK SELECTOR */}
              <HeroSection looks={NOIRE_LOOKS_FA} isPersian={true} />

              {/* 02 CATEGORY SHOWCASE */}
              <CategoryShowcase isPersian={true} />

              {/* 03 THE NEW EDIT EDITORIAL SECTION */}
              <NewEditSection isPersian={true} />

              {/* 04 SCROLL STORYTELLING */}
              <HeroScrollStorytelling isPersian={true} />

              {/* 05 ESSENTIALS PRODUCT GRID */}
              <ProductGrid
                products={NOIRE_PRODUCTS_FA.slice(0, 8)}
                title="ضروریات نوآر ۲۰۲۶"
                subtitle="کالکشن معاصر"
                isPersian={true}
              />

              {/* 06 OUTFIT BUILDER CONFIGURATOR */}
              <OutfitBuilder productsList={NOIRE_PRODUCTS_FA} isPersian={true} />

              {/* 07 BRAND STORY */}
              <BrandStory isPersian={true} />

              {/* 08 QUALITY & SERVICES */}
              <QualitySection isPersian={true} />

              {/* 09 NEWSLETTER */}
              <Newsletter isPersian={true} />
            </main>

            {/* 10 FOOTER */}
            <Footer isPersian={true} />

            {/* DRAWERS & OVERLAYS */}
            <CartDrawer isPersian={true} />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} isPersian={true} />
          </div>
        </SmoothScrollProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
