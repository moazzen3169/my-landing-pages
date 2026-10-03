'use client';

import React, { useState } from 'react';
import { WomanLuxProduct, CATEGORIES_LIST } from '@/data/woman-lux';
import ProductCard from './ProductCard';

interface ProductGridSectionProps {
  products: WomanLuxProduct[];
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
  onOpenDetail: (product: WomanLuxProduct) => void;
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
}

export default function ProductGridSection({
  products,
  wishlistIds,
  onToggleWishlist,
  onOpenDetail,
  selectedCategory,
  onSelectCategory,
}: ProductGridSectionProps) {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  // Filter
  const filteredProducts = products.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  // Sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <section id="catalog" className="w-full bg-[#FFFFFF] section-padding border-b border-[#E5E5E5]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* SECTION TITLE & FILTER ROW */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-[#E5E5E5]">
          <div className="text-right space-y-1">
            <span className="text-xs font-mono uppercase text-[#6B6B6B] tracking-widest">
              FULL COLLECTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-peyda">
              کاتالوگ جامع
            </h2>
          </div>

          {/* FILTER TABS & SORT DROPDOWN */}
          <div className="flex flex-wrap items-center justify-between md:justify-end gap-4">

            {/* CATEGORY TABS */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {CATEGORIES_LIST.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs font-medium transition-all min-w-max ${
                      isActive
                        ? 'bg-[#111111] text-white'
                        : 'bg-[#F5F5F5] text-[#111111] hover:bg-[#E5E5E5]'
                    }`}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>

            {/* SORT SELECTOR */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6B6B6B]">مرتب‌سازی:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'featured' | 'price-asc' | 'price-desc')}
                className="text-xs bg-[#F5F5F5] text-[#111111] font-medium py-1.5 px-3 border-0 focus:ring-1 focus:ring-[#111111] cursor-pointer"
              >
                <option value="featured">برگزیده</option>
                <option value="price-asc">ارزان‌ترین</option>
                <option value="price-desc">گران‌ترین</option>
              </select>
            </div>
          </div>
        </div>

        {/* CATALOG GRID */}
        {sortedProducts.length === 0 ? (
          <div className="py-20 text-center text-[#6B6B6B] text-sm">
            محصولی در این دسته‌بندی یافت نشد.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onOpenDetail={onOpenDetail}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
