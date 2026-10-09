'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { SOLEA_PRODUCTS, SneakerProduct } from '@/data/solea-sneakers';
import { SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedProductsProps {
  onQuickView: (product: SneakerProduct) => void;
  selectedCategoryFromHero?: string;
}

export default function FeaturedProducts({
  onQuickView,
  selectedCategoryFromHero,
}: FeaturedProductsProps) {
  const [activeGender, setActiveGender] = useState<string>('all');
  const [activeCatFilter, setActiveCatFilter] = useState<string>(selectedCategoryFromHero || 'all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(10);

  const filterTabs = [
    { id: 'all', label: 'همه کفش‌ها' },
    { id: 'men', label: 'مردانه' },
    { id: 'women', label: 'زنانه' },
    { id: 'unisex', label: 'یونیسکس' },
    { id: 'limited', label: 'دراپ محدود' },
  ];

  let filtered = SOLEA_PRODUCTS;

  if (activeGender === 'men') {
    filtered = filtered.filter((p) => p.gender === 'men' || p.gender === 'unisex');
  } else if (activeGender === 'women') {
    filtered = filtered.filter((p) => p.gender === 'women' || p.gender === 'unisex');
  } else if (activeGender === 'unisex') {
    filtered = filtered.filter((p) => p.gender === 'unisex');
  } else if (activeGender === 'limited') {
    filtered = filtered.filter((p) => p.isLimited || p.badge === 'دراپ محدود');
  }

  if (activeCatFilter !== 'all') {
    filtered = filtered.filter((p) => p.category === activeCatFilter);
  }

  if (sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  const displayedProducts = filtered.slice(0, visibleCount);

  return (
    <section id="products" className="py-12 sm:py-20 lg:py-28 bg-[#FFFFFF] font-peyda text-right border-b border-neutral-200" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>کالکشن کامل اسنیکرها ({filtered.length} مدل)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-black tracking-tight">
              جدیدترین کفش‌های اسپورت و ورزشی
            </h2>
          </div>

          {/* SORTING SELECTOR */}
          <div className="flex items-center gap-2 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-neutral-500 shrink-0" />
            <span className="text-xs text-neutral-500 font-medium">مرتب‌سازی:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#F8F8F6] border border-neutral-200 text-xs font-medium text-black px-3 py-2 rounded-xl focus:outline-none focus:border-black transition-colors cursor-pointer"
            >
              <option value="featured">پیش‌فرض</option>
              <option value="price-asc">ارزان‌ترین</option>
              <option value="price-desc">گران‌ترین</option>
              <option value="rating">محبوب‌ترین</option>
            </select>
          </div>
        </div>

        {/* HORIZONTALLY SCROLLABLE FILTER TABS FOR MOBILE */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveGender(tab.id)}
              className={`px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap transition-all shrink-0 ${
                activeGender === tab.id
                  ? 'bg-black text-white shadow-2xs'
                  : 'bg-[#F8F8F6] text-neutral-600 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID WITH 2 COLUMNS ON MOBILE */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
          {displayedProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (idx % 4) * 0.05 }}
            >
              <ProductCard
                product={product}
                onQuickView={onQuickView}
                index={idx}
              />
            </motion.div>
          ))}
        </div>

        {/* LOAD MORE ACTION */}
        {visibleCount < filtered.length && (
          <div className="mt-10 sm:mt-16 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-9 sm:py-4 bg-white hover:bg-black text-black hover:text-white border border-neutral-300 hover:border-black font-semibold text-xs sm:text-sm rounded-full transition-all duration-300 group shadow-2xs active:scale-95"
            >
              <span>مشاهده کفش‌های بیشتر</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
