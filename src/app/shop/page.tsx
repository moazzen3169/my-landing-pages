'use client';

import React, { useState } from 'react';
import Header from '@/components/navigation/Header';
import ProductGrid from '@/components/products/ProductGrid';
import CartDrawer from '@/components/cart/CartDrawer';
import SearchOverlay from '@/components/search/SearchOverlay';
import CustomCursor from '@/components/ui/CustomCursor';
import { Footer } from '@/components/editorial/FooterAndSections';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';
import { NOIRE_PRODUCTS } from '@/data/noire';
import { Filter, SlidersHorizontal } from 'lucide-react';

export default function ShopPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const categories = [
    { id: 'all', label: 'ALL PRODUCTS' },
    { id: 'suits', label: 'SUITS' },
    { id: 'blazers', label: 'BLAZERS' },
    { id: 'shirts', label: 'SHIRTS' },
    { id: 'trousers', label: 'TROUSERS' },
    { id: 't-shirts', label: 'T-SHIRTS' },
    { id: 'hoodies', label: 'HOODIES' },
    { id: 'jackets', label: 'JACKETS' },
    { id: 'accessories', label: 'ACCESSORIES' },
  ];

  let filteredProducts = selectedCategory === 'all'
    ? NOIRE_PRODUCTS
    : NOIRE_PRODUCTS.filter((p) => p.category === selectedCategory);

  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <CartProvider>
      <WishlistProvider>
        <SmoothScrollProvider>
          <CustomCursor />
          <div className="min-h-screen flex flex-col bg-[#F3F2EE] text-[#111111]">
            <Header onOpenSearch={() => setIsSearchOpen(true)} />

            <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
              {/* Header Title */}
              <div className="border-b border-[#D7D4CD] pb-8 mb-12">
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#77746E] uppercase">
                  CATALOG
                </span>
                <h1 className="text-4xl sm:text-6xl font-light font-display uppercase tracking-tight text-[#111111] mt-2">
                  THE COMPLETE COLLECTION
                </h1>
                <p className="text-sm font-light text-[#77746E] mt-2 max-w-lg">
                  Precision engineered menswear crafted from tropical wools, grade-A cashmere, and long-staple organic cotton.
                </p>
              </div>

              {/* Filters and Controls */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#D7D4CD]">
                {/* Category Filter Pills */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 text-[10px] font-mono tracking-widest uppercase border transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-[#111111] text-white border-[#111111]'
                          : 'bg-white text-[#111111] border-[#D7D4CD] hover:border-[#111111]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Sort dropdown */}
                <div className="flex items-center space-x-3 text-xs font-mono">
                  <SlidersHorizontal className="w-4 h-4 text-[#77746E]" />
                  <span className="text-[#77746E] uppercase">SORT:</span>
                  <select
                    value={sortBy}
                    onChange={(e: any) => setSortBy(e.target.value)}
                    className="bg-white border border-[#D7D4CD] px-3 py-2 text-xs font-mono uppercase focus:outline-none"
                  >
                    <option value="featured">FEATURED</option>
                    <option value="price-asc">PRICE: LOW TO HIGH</option>
                    <option value="price-desc">PRICE: HIGH TO LOW</option>
                  </select>
                </div>
              </div>

              {/* Product Grid */}
              <ProductGrid
                products={filteredProducts}
                title={selectedCategory.toUpperCase()}
                subtitle="SELECTION"
              />
            </main>

            <Footer />
            <CartDrawer />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          </div>
        </SmoothScrollProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
