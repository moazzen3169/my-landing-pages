'use client';

import React, { useState } from 'react';
import { MAN_SPORT_PRODUCTS, ManSportProduct } from '@/data/man-sport';
import ProductCard from './ProductCard';
import { SlidersHorizontal, ArrowDown, Sparkles } from 'lucide-react';

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
  const [activeStyle, setActiveStyle] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  // FILTER LOGIC
  let filteredProducts = MAN_SPORT_PRODUCTS.filter((product) => {
    const matchCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchStyle = activeStyle === 'all' || product.style === activeStyle;
    return matchCategory && matchStyle;
  });

  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <section id="products-section" className="py-16 bg-[#F5F3EE] text-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION TITLE & FILTER BAR */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-slate-300 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111] text-[#B7FF00] font-mono text-xs font-bold uppercase mb-2">
              <Sparkles className="w-3 h-3" />
              <span>PRODUCT-FIRST COLLECTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-peyda text-[#111111]">
              جدیدترین محصولات
            </h2>
            <p className="text-sm font-peyda text-slate-600 mt-1">
              انتخاب آنلاین بیش از ۲۰ برند اصلی شامل تیک، آدیداس، استوسی و نیوبالانس
            </p>
          </div>

          {/* SORTING CONTROLS */}
          <div className="flex items-center gap-2 font-peyda text-xs font-bold shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-slate-500" />
            <span className="text-slate-600">مرتب‌سازی:</span>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-peyda font-bold text-[#111111] focus:outline-none focus:border-[#111111]"
            >
              <option value="featured">پیش‌فرض (محبوب‌ترین)</option>
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
              className={`px-4 py-2 rounded-xl text-xs font-bold font-peyda transition-all ${
                activeCategory === tab.id
                  ? 'bg-[#111111] text-[#B7FF00] shadow-md'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID LIST (3-4 COLUMNS DESKTOP, 2 COLUMNS MOBILE) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 my-8">
            <p className="text-base font-bold font-peyda text-slate-600">محصولی در این دسته‌بندی یافت نشد.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveStyle('all');
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#111111] text-white font-peyda text-xs font-bold"
            >
              مشاهده همه محصولات
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
