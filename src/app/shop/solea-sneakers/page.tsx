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

import { SneakerProduct } from '@/data/solea-sneakers';

export default function SoleaSneakersLandingPage() {
  // STATE
  const [quickViewProduct, setQuickViewProduct] = useState<SneakerProduct | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectGender = (g: string) => {
    setSelectedGender(g);
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#171717] font-vazir antialiased selection:bg-[#171717] selection:text-white" dir="rtl">

      {/* HEADER */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* MAIN CONTENT */}
      <main className="space-y-4 sm:space-y-8 pt-2 pb-12">

        {/* HERO */}
        <Hero
          onOpenSearch={() => setIsSearchOpen(true)}
          onSelectCategory={handleSelectCategory}
          onSelectGender={handleSelectGender}
        />

        {/* TRUST BAR */}
        <TrustBar />

        {/* FEATURED PRODUCTS (NEW ARRIVALS & SELECTION) */}
        <FeaturedProducts
          onQuickView={(p) => setQuickViewProduct(p)}
          selectedCategoryFromHero={selectedCategory}
          selectedGenderFromHero={selectedGender}
        />

        {/* SHOP BY CATEGORY */}
        <CategoryShowcase
          onSelectCategory={handleSelectCategory}
        />

        {/* SHOP BY BRAND */}
        <BrandSection />

        {/* THE SOLEA EDIT */}
        <EditorialStory />

        {/* LIMITED DROP */}
        <LimitedDrop
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* TRUST SECTION */}
        <CustomerTrustSection />

        {/* NEWSLETTER */}
        <Newsletter />

      </main>

      {/* FOOTER */}
      <Footer />

      {/* OVERLAYS & MODALS */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
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

    </div>
  );
}
