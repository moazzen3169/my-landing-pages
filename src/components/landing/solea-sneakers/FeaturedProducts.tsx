'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { SOLEA_PRODUCTS, SneakerProduct } from '@/data/solea-sneakers';
import { SlidersHorizontal, ArrowLeft } from 'lucide-react';

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

  const genderTabs = [
    { id: 'all', label: 'همه اسنیکرها' },
    { id: 'men', label: 'مردانه' },
    { id: 'women', label: 'زنانه' },
    { id: 'unisex', label: 'یونیسکس' },
    { id: 'limited', label: 'نسخه محدود' },
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

  return (
    <section id="products" className="py-16 sm:py-24 font-peyda text-right" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#111111]/[0.08] mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-[#A89B84] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#111111]"></span>
              FEATURED COLLECTION
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111]">
              انتخاب‌های محبوب
            </h2>
            <p className="text-sm sm:text-base text-[#6B6B68] font-vazir mt-2">
              مدل‌هایی که این روزها بیشترین استایل و لایف‌استایل را تجربه می‌کنند.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="flex flex-wrap items-center gap-2">
            {genderTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveGender(tab.id)}
                className={`px-4 py-2 text-xs font-extrabold rounded-full transition-all duration-300 ${
                  activeGender === tab.id
                    ? 'bg-[#111111] text-white shadow-md'
                    : 'bg-[#FAFAF8] text-[#111111]/80 hover:bg-[#EBEBE6] border border-[#111111]/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SUB-CONTROLS & SORTING */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="text-xs font-vazir text-[#6B6B68]">
            نمایش <span className="font-extrabold text-[#111111]">{filtered.length}</span> مدل اسنیکر منتخب
          </div>

          <div className="flex items-center gap-2 text-xs font-vazir shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-[#A89B84] shrink-0" />
            <span className="text-[#6B6B68] font-bold">مرتب‌سازی:</span>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-[#FAFAF8] border border-[#111111]/15 rounded-xl px-3 py-2 text-xs font-bold text-[#111111] focus:outline-none focus:border-[#111111]"
            >
              <option value="featured">پیش‌فرض (محبوب‌ترین‌ها)</option>
              <option value="price-asc">قیمت: از کم به زیاد</option>
              <option value="price-desc">قیمت: از زیاد به کم</option>
              <option value="rating">امتیاز خریداران</option>
            </select>
          </div>
        </div>

        {/* PRODUCT GRID (4 COLUMNS DESKTOP, 2 COLUMNS MOBILE/TABLET) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* VIEW ALL ACTION */}
        <div className="mt-14 text-center">
          <a
            href="#categories"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FAFAF8] hover:bg-[#111111] text-[#111111] hover:text-white border border-[#111111]/15 font-extrabold text-sm rounded-full transition-all duration-300 shadow-sm group"
          >
            <span>مشاهده تمام دسته‌بندی‌ها</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
