'use client';

import React, { useState } from 'react';
import Header from '@/components/landing/solea-sneakers/Header';
import Hero from '@/components/landing/solea-sneakers/Hero';
import TrustBar from '@/components/landing/solea-sneakers/TrustBar';
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

import { SneakerProduct } from '@/data/solea-sneakers';

export default function SoleaSneakersLandingPage() {
  // STATE
  const [quickViewProduct, setQuickViewProduct] = useState<SneakerProduct | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0B1220] font-peyda antialiased selection:bg-[#0B1220] selection:text-[#F8FAFC]" dir="rtl">

      {/* HEADER */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* MAIN CONTENT */}
      <main className="space-y-6 sm:space-y-10 pt-2 pb-16">

        {/* HERO */}
        <Hero onOpenSearch={() => setIsSearchOpen(true)} />

        {/* TRUST BAR */}
        <TrustBar />

        {/* FEATURED PRODUCTS */}
        <FeaturedProducts
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* CATEGORY SHOWCASE */}
        <CategoryShowcase />

        {/* BRAND STRIP */}
        <BrandSection />

        {/* EDITORIAL STORY */}
        <EditorialStory />

        {/* LIMITED DROP */}
        <LimitedDrop
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* CUSTOMER TRUST */}
        <CustomerTrustSection />

        {/* NEWSLETTER */}
        <Newsletter />

      </main>

      {/* FOOTER */}
      <Footer onOpenSizeGuide={() => setIsSizeGuideOpen(true)} />

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
  );
}
