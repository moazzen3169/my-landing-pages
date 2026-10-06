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
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const filterTabs = [
    { id: 'all', label: 'همه اسنیکرها' },
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
    <section id="products" className="py-20 lg:py-28 bg-[#F3F3F1] font-peyda text-right border-b border-[#D9D9D5]" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D9D9D5] mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#6B6B68] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0A0A0A]"></span>
              CURATED ESSENTIALS
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0A] tracking-tight">
              انتخاب‌های محبوب
            </h2>
            <p className="text-sm sm:text-base text-[#6B6B68] mt-2 font-normal max-w-xl">
              کالکشن منتخب از برترین اسنیکرهای روز جهان؛ با ساختار مدرن، تنفس‌پذیری عالی و راحتی تمام‌روز.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveGender(tab.id);
                  setVisibleCount(6);
                }}
                className={`px-4 py-2 text-xs font-semibold transition-all rounded-full ${
                  activeGender === tab.id
                    ? 'bg-[#0A0A0A] text-[#F3F3F1]'
                    : 'bg-[#E8E8E5] text-[#0A0A0A] hover:bg-[#D9D9D5] border border-[#D9D9D5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SUB-CONTROLS & SORTING */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div className="text-xs font-medium text-[#6B6B68]">
            نمایش <span className="font-bold text-[#0A0A0A]">{displayedProducts.length}</span> از <span className="font-bold text-[#0A0A0A]">{filtered.length}</span> اسنیکر
          </div>

          <div className="flex items-center gap-2 text-xs shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#0A0A0A] shrink-0" />
            <span className="text-[#6B6B68] font-medium">مرتب‌سازی:</span>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-[#E8E8E5] border border-[#D9D9D5] rounded-full px-3.5 py-1.5 text-xs font-semibold text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A]"
            >
              <option value="featured">پیش‌فرض (محبوب‌ترین‌ها)</option>
              <option value="price-asc">قیمت: از کم به زیاد</option>
              <option value="price-desc">قیمت: از زیاد به کم</option>
              <option value="rating">امتیاز خریداران</option>
            </select>
          </div>
        </div>

        {/* PRODUCT GRID WITH STAGGERED REVEAL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
            >
              <ProductCard
                product={product}
                onQuickView={onQuickView}
                index={idx}
              />
            </motion.div>
          ))}
        </div>

        {/* LOAD MORE / EXPAND ACTION */}
        {visibleCount < filtered.length && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E8E8E5] hover:bg-[#0A0A0A] text-[#0A0A0A] hover:text-[#F3F3F1] border border-[#D9D9D5] font-semibold text-sm rounded-full transition-all duration-300 group"
            >
              <span>مشاهده اسنیکرهای بیشتر</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
