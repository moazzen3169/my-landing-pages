'use client';

import React, { useState } from 'react';
import { MAN_SPORT_PRODUCTS, ManSportProduct } from '@/data/man-sport';
import ProductCard from './ProductCard';
import { SlidersHorizontal } from 'lucide-react';

interface ProductGridProps {
  onQuickView: (product: ManSportProduct) => void;
  onAddToCart: (product: ManSportProduct) => void;
  selectedCategory?: string;
}

export default function ProductGrid({
  onQuickView,
  onAddToCart,
  selectedCategory = 'all',
}: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategory);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  // FILTER LOGIC
  let filteredProducts = MAN_SPORT_PRODUCTS.filter((product) => {
    return activeCategory === 'all' || product.category === activeCategory;
  });

  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <section id="products-section" className="py-12 sm:py-16 bg-[#F5F3EE] text-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION TITLE & FILTER BAR */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 border-b border-slate-300/80 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-peyda text-[#111111]">
              جدیدترین محصولات
            </h2>
          </div>

          {/* SORTING CONTROLS */}
          <div className="flex items-center gap-2 font-peyda text-xs font-semibold shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-slate-500" />
            <span className="text-slate-600">مرتب‌سازی:</span>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-peyda font-semibold text-[#111111] focus:outline-none focus:border-[#111111]"
            >
              <option value="featured">پیش‌فرض</option>
              <option value="price-asc">ارزان‌ترین</option>
              <option value="price-desc">گران‌ترین</option>
            </select>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: 'همه محصولات' },
            { id: 't-shirt', label: 'تی‌شرت' },
            { id: 'hoodie', label: 'هودی' },
            { id: 'sweatshirt', label: 'سویشرت' },
            { id: 'jacket', label: 'کاپشن' },
            { id: 'pants', label: 'شلوار و اسلش' },
            { id: 'blouse', label: 'دورس و پیراهن' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-peyda transition-colors ${
                activeCategory === tab.id
                  ? 'bg-[#111111] text-[#B7FF00]'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID LIST (2 COLUMNS MOBILE, 4 COLUMNS DESKTOP) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* NO PRODUCTS FOUND STATE */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 my-8">
            <p className="text-sm font-semibold font-peyda text-slate-600">محصولی در این دسته‌بندی یافت نشد.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="mt-4 px-5 py-2 rounded-xl bg-[#111111] text-white font-peyda text-xs font-semibold"
            >
              مشاهده همه محصولات
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
