'use client';

import React, { useState, Suspense } from 'react';
import Header from '@/components/landing/solea-sneakers/Header';
import Hero from '@/components/landing/solea-sneakers/Hero';
import TrustBar from '@/components/landing/solea-sneakers/TrustBar';
import BrandStatement from '@/components/landing/solea-sneakers/BrandStatement';
import FeaturedProducts from '@/components/landing/solea-sneakers/FeaturedProducts';
import CategoryShowcase from '@/components/landing/solea-sneakers/CategoryShowcase';
import BrandSection from '@/components/landing/solea-sneakers/BrandSection';
import EditorialStory from '@/components/landing/solea-sneakers/EditorialStory';
import LimitedDrop from '@/components/landing/solea-sneakers/LimitedDrop';
import CustomerTrustSection from '@/components/landing/solea-sneakers/CustomerTrustSection';
import Newsletter from '@/components/landing/solea-sneakers/Newsletter';
import Footer from '@/components/landing/solea-sneakers/Footer';

import ProductQuickView from '@/components/landing/solea-sneakers/ProductQuickView';
import SearchOverlay from '@/components/landing/solea-sneakers/SearchOverlay';
import CartDrawer from '@/components/landing/solea-sneakers/CartDrawer';
import MobileDrawer from '@/components/landing/solea-sneakers/MobileDrawer';
import SizeGuideModal from '@/components/landing/solea-sneakers/SizeGuideModal';
import SmoothScrollProvider from '@/components/landing/solea-sneakers/SmoothScrollProvider';

import { SneakerProduct } from '@/data/solea-sneakers';
import { useStore } from '@/hooks/useStore';

function SoleaContent() {
  const { storeName, theme } = useStore('solea-sneakers');

  // STATE
  const [quickViewProduct, setQuickViewProduct] = useState<SneakerProduct | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <div
        className="min-h-screen bg-[#F3F3F1] text-[#0A0A0A] font-peyda antialiased selection:bg-[#0A0A0A] selection:text-[#F3F3F1]"
        dir="rtl"
        style={{
          '--landing-primary': theme.primary,
        } as React.CSSProperties}
      >

        {/* 01 TOP PROMO BAR & 02 NAVIGATION */}
        <Header
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          storeName={storeName}
        />

        {/* MAIN EDITORIAL EXPERIENCE */}
        <main className="overflow-x-hidden">

          {/* 03 HERO & 10 HERO PRODUCT ANIMATION & 11 HERO INTERACTION */}
          <Hero onOpenSearch={() => setIsSearchOpen(true)} />

          {/* 12 TRUST STRIP */}
          <TrustBar />

          {/* 13 BRAND STATEMENT ("ما فقط کفش نمی‌فروشیم") */}
          <BrandStatement />

          {/* 14 FEATURED PRODUCTS & 15 HOVER & 16 SCROLL ANIMATION & 17 FILTERS */}
          <FeaturedProducts
            onQuickView={(p) => setQuickViewProduct(p)}
          />

          {/* 18 PERFORMANCE / COLLECTIONS & 19 HORIZONTAL/GRID PRESENTATION & 20 OVERSIZED TYPO */}
          <CategoryShowcase />

          {/* 42 BRAND TICKER */}
          <BrandSection />

          {/* 21 BRAND / EDITORIAL & 22 LARGE IMAGE CAMPAIGN */}
          <EditorialStory />

          {/* 23 LIMITED DROP & 24 LIMITED DROP ANIMATION */}
          <LimitedDrop
            onQuickView={(p) => setQuickViewProduct(p)}
          />

          {/* 12 TRUST & SERVICE ADVANTAGES */}
          <CustomerTrustSection />

          {/* 25 FINAL CONVERSION SECTION */}
          <Newsletter />

        </main>

        {/* 26 FOOTER */}
        <Footer onOpenSizeGuide={() => setIsSizeGuideOpen(true)} storeName={storeName} />

        {/* OVERLAYS & MODALS */}
        <ProductQuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        />

        <SearchOverlay
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectProduct={(p) => setQuickViewProduct(p)}
        />

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />

        <MobileDrawer
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        <SizeGuideModal
          isOpen={isSizeGuideOpen}
          onClose={() => setIsSizeGuideOpen(false)}
          initialCategory={quickViewProduct?.gender || 'unisex'}
        />

      </div>
    </SmoothScrollProvider>
  );
}

export default function SoleaSneakersLandingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F3F3F1]" />}>
      <SoleaContent />
    </Suspense>
  );
}
