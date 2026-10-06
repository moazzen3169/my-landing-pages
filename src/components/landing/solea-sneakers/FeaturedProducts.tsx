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
    <section id="products" className="py-28 lg:py-40 bg-[#F8F8F6] font-peyda text-right border-b border-neutral-200" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16">

        {/* SECTION HEADER WITH INCREASED WHITESPACE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              SNEAKER COLLECTION
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight">
              محبوب‌ترین کفش‌های اسپورت
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-3 font-normal max-w-xl leading-relaxed">
              برترین اسنیکرهای روز جهان؛ طراحی شده برای راحتی، تنفس‌پذیری عالی و فعالیت‌های ورزشی و روزمره.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="flex flex-wrap items-center gap-2.5">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveGender(tab.id);
                  setVisibleCount(6);
                }}
                className={`px-5 py-2.5 text-xs font-semibold transition-all rounded-full ${
                  activeGender === tab.id
                    ? 'bg-black text-white shadow-xs'
                    : 'bg-white text-black hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SUB-CONTROLS & SORTING */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div className="text-xs font-medium text-neutral-500">
            نمایش <span className="font-bold text-black">{displayedProducts.length}</span> از <span className="font-bold text-black">{filtered.length}</span> مدل کفش اسپورت
          </div>

          <div className="flex items-center gap-2 text-xs shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-black shrink-0" />
            <span className="text-neutral-500 font-medium">مرتب‌سازی:</span>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-white border border-neutral-200 rounded-full px-4 py-2 text-xs font-semibold text-black focus:outline-none focus:border-black shadow-2xs"
            >
              <option value="featured">پیش‌فرض (محبوب‌ترین‌ها)</option>
              <option value="price-asc">قیمت: از کم به زیاد</option>
              <option value="price-desc">قیمت: از زیاد به کم</option>
              <option value="rating">امتیاز خریداران</option>
            </select>
          </div>
        </div>

        {/* PRODUCT GRID WITH SPACIOUS SPACING */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {displayedProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
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
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 px-9 py-4 bg-white hover:bg-black text-black hover:text-white border border-neutral-200 hover:border-black font-semibold text-sm rounded-full transition-all duration-300 group shadow-2xs"
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
