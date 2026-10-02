'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { LuxuryProduct } from '@/data/persian-luxury-women';

interface CatalogGridProps {
  products: LuxuryProduct[];
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: LuxuryProduct) => void;
  selectedBrandFilter?: string | null;
}

export default function CatalogGrid({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  selectedBrandFilter,
}: CatalogGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'همه محصولات' },
    { id: 'handbags', label: 'کیف زنانه' },
    { id: 'shoes', label: 'کفش زنانه' },
  ];

  let filteredProducts = products;

  if (activeCategory !== 'all') {
    filteredProducts = filteredProducts.filter((p) => p.category === activeCategory);
  }

  if (selectedBrandFilter) {
    filteredProducts = filteredProducts.filter(
      (p) => p.brand.toLowerCase() === selectedBrandFilter.toLowerCase()
    );
  }

  return (
    <section id="catalog" className="py-20 md:py-28 bg-[#FFFFFF] font-peyda text-[#111111]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12">

        {/* HEADER & FILTERS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#E5E5E5] pb-6 gap-6">
          <div>
            <span className="block text-[11px] font-mono font-medium text-[#999999] uppercase tracking-widest mb-2">
              CATALOG
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#000000]">
              کاتالوگ جامع محصولات
            </h2>
          </div>

          {/* MINIMALIST CATEGORY TABS */}
          <div className="flex items-center gap-6 text-xs font-normal">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`pb-1 transition-colors relative cursor-pointer ${
                  activeCategory === cat.id
                    ? 'text-[#000000] border-b border-[#000000]'
                    : 'text-[#999999] hover:text-[#000000]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={`cat-${product.id}`}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-xs text-[#666666]">
            محصولی با این مشخصات یافت نشد.
          </div>
        )}

      </div>
    </section>
  );
}
