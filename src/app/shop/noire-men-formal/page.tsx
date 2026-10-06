'use client';

import React, { useState, Suspense } from 'react';
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
import { useStore } from '@/hooks/useStore';

function NoireContent() {
  const { storeName, theme } = useStore('noire-men-formal');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <SmoothScrollProvider>
          <Preloader />
          <CustomCursor />

          <div
            className="min-h-screen flex flex-col bg-[#F3F2EE] text-[#111111] relative"
            style={{
              '--landing-primary': theme.primary,
            } as React.CSSProperties}
          >
            <Header onOpenSearch={() => setIsSearchOpen(true)} isDarkBackground={true} storeName={storeName} />

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
              <BrandStory storeName={storeName} />

              {/* 08 QUALITY & SERVICES */}
              <QualitySection />

              {/* 09 NEWSLETTER */}
              <Newsletter storeName={storeName} />
            </main>

            {/* 10 FOOTER */}
            <Footer storeName={storeName} />

            {/* DRAWERS & OVERLAYS */}
            <CartDrawer />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          </div>
        </SmoothScrollProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

export default function NoireLandingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F3F2EE]" />}>
      <NoireContent />
    </Suspense>
  );
}
