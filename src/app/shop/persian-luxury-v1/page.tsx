'use client';

import React, { useState } from 'react';
import PersianHeader from '@/components/landing/persian-luxury/PersianHeader';
import PersianHero from '@/components/landing/persian-luxury/PersianHero';
import PersianCategoryShowcase from '@/components/landing/persian-luxury/PersianCategoryShowcase';
import PersianProductGrid from '@/components/landing/persian-luxury/PersianProductGrid';
import PersianOutfitBuilder from '@/components/landing/persian-luxury/PersianOutfitBuilder';
import {
  PersianCraftsmanship,
  PersianServices,
  PersianFooter,
} from '@/components/landing/persian-luxury/PersianCraftsmanship';
import SearchOverlay from '@/components/search/SearchOverlay';
import CustomCursor from '@/components/ui/CustomCursor';
import { PERSIAN_LUXURY_PRODUCTS, PersianProduct } from '@/data/persian-luxury';

export default function PersianLuxuryLandingPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItems, setCartItems] = useState<PersianProduct[]>([]);

  const handleAddToCart = (product: PersianProduct) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#F3F2EE] font-peyda selection:bg-[#C8A97E] selection:text-black dir-rtl" dir="rtl">
      <CustomCursor />

      {/* Header */}
      <PersianHeader
        onOpenSearch={() => setIsSearchOpen(true)}
        cartCount={cartItems.length}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 01 Hero Banner */}
        <PersianHero />

        {/* 02 Category Showcase */}
        <PersianCategoryShowcase />

        {/* 03 New Collection Product Grid */}
        <PersianProductGrid
          products={PERSIAN_LUXURY_PRODUCTS}
          onAddToCart={handleAddToCart}
        />

        {/* 04 Interactive Outfit Builder */}
        <PersianOutfitBuilder />

        {/* 05 Brand Philosophy & Craftsmanship */}
        <PersianCraftsmanship />

        {/* 06 Customer Service & Benefits */}
        <PersianServices />
      </main>

      {/* 07 Footer */}
      <PersianFooter />

      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
