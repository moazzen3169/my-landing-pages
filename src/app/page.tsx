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
import { NOIRE_PRODUCTS } from '@/data/noire';

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <SmoothScrollProvider>
          <Preloader />
          <CustomCursor />

          <div className="min-h-screen flex flex-col bg-[#F3F2EE] text-[#111111] relative">
            <Header onOpenSearch={() => setIsSearchOpen(true)} isDarkBackground={true} />

            <main className="flex-grow">
              {/* 01 HERO SECTION WITH LOOK SELECTOR */}
              <HeroSection />

              {/* 02 CATEGORY SHOWCASE */}
              <CategoryShowcase />

              {/* 03 THE NEW EDIT EDITORIAL SECTION */}
              <NewEditSection />

              {/* 04 SCROLL STORYTELLING */}
              <HeroScrollStorytelling />

              {/* 05 ESSENTIALS PRODUCT GRID */}
              <ProductGrid
                products={NOIRE_PRODUCTS.slice(0, 8)}
                title="THE ESSENTIAL EDIT"
                subtitle="NEW ARRIVALS 2026"
              />

              {/* 06 OUTFIT BUILDER CONFIGURATOR */}
              <OutfitBuilder />

              {/* 07 BRAND STORY */}
              <BrandStory />

              {/* 08 QUALITY & SERVICES */}
              <QualitySection />

              {/* 09 NEWSLETTER */}
              <Newsletter />
            </main>

            {/* 10 FOOTER */}
            <Footer />

            {/* DRAWERS & OVERLAYS */}
            <CartDrawer />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          </div>
        </SmoothScrollProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
