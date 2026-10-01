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
    <section id="products" className="py-10 sm:py-16 font-peyda text-right" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#CBD5E1]/60 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#8FA9C4] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#0B1220]"></span>
              FEATURED COLLECTION
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220]">
              انتخاب‌های محبوب
            </h2>
            <p className="text-sm sm:text-base text-[#475569] font-peyda mt-2 font-normal">
              اسنیکرهای منتخب سال؛ طراحی ارگونومیک، عملکرد ورزشی و استایل روزمره.
            </p>
          </div>

          {/* FILTER TABS */}
          <div className="flex flex-wrap items-center gap-2">
            {genderTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveGender(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors ${
                  activeGender === tab.id
                    ? 'bg-[#0B1220] text-[#F8FAFC]'
                    : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#CBD5E1]/50 border border-[#CBD5E1]/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SUB-CONTROLS & SORTING */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="text-xs font-peyda text-[#475569]">
            نمایش <span className="font-bold text-[#0B1220]">{filtered.length}</span> مدل اسنیکر منتخب
          </div>

          <div className="flex items-center gap-2 text-xs font-peyda shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-[#8FA9C4] shrink-0" />
            <span className="text-[#475569] font-medium">مرتب‌سازی:</span>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-[#F1F5F9] border border-[#CBD5E1]/60 rounded-xl px-3 py-2 text-xs font-semibold text-[#0B1220] focus:outline-none focus:border-[#0B1220]"
            >
              <option value="featured">پیش‌فرض (محبوب‌ترین‌ها)</option>
              <option value="price-asc">قیمت: از کم به زیاد</option>
              <option value="price-desc">قیمت: از زیاد به کم</option>
              <option value="rating">امتیاز خریداران</option>
            </select>
          </div>
        </div>

        {/* PRODUCT GRID */}
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
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#F1F5F9] hover:bg-[#0B1220] text-[#0B1220] hover:text-[#F8FAFC] border border-[#CBD5E1]/60 font-semibold text-sm rounded-full transition-colors group"
          >
            <span>مشاهده تمام دسته‌بندی‌ها</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
