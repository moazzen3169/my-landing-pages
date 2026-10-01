'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { SOLEA_PRODUCTS, SOLEA_BRANDS, SneakerProduct } from '@/data/solea-sneakers';
import { SlidersHorizontal, Filter, X, ArrowLeft, Check } from 'lucide-react';

interface FeaturedProductsProps {
  onQuickView: (product: SneakerProduct) => void;
  selectedCategoryFromHero?: string;
  selectedGenderFromHero?: string;
}

export default function FeaturedProducts({
  onQuickView,
  selectedCategoryFromHero,
  selectedGenderFromHero,
}: FeaturedProductsProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>(selectedGenderFromHero || 'all');
  const [selectedCategory, setSelectedCategory] = useState<string>(selectedCategoryFromHero || 'all');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  const brandsList = [
    { id: 'all', name: 'همه برندها' },
    ...SOLEA_BRANDS.map((b) => ({ id: b.name, name: b.name })),
  ];

  const genderList = [
    { id: 'all', label: 'همه جنسیت‌ها' },
    { id: 'women', label: 'زنانه' },
    { id: 'men', label: 'مردانه' },
    { id: 'unisex', label: 'یونیسکس' },
  ];

  const categoryList = [
    { id: 'all', label: 'همه دسته‌ها' },
    { id: 'lifestyle', label: 'لایف‌استایل' },
    { id: 'running', label: 'رانینگ' },
    { id: 'training', label: 'تمرین' },
    { id: 'basketball', label: 'بسکتبال' },
  ];

  let filtered = SOLEA_PRODUCTS;

  if (selectedBrand !== 'all') {
    filtered = filtered.filter((p) => p.brand.toUpperCase() === selectedBrand.toUpperCase());
  }

  if (selectedGender !== 'all') {
    filtered = filtered.filter((p) => p.gender === selectedGender || p.gender === 'unisex');
  }

  if (selectedCategory !== 'all') {
    filtered = filtered.filter((p) => p.category === selectedCategory);
  }

  if (sortBy === 'newest') {
    filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  } else if (sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  const resetFilters = () => {
    setSelectedBrand('all');
    setSelectedGender('all');
    setSelectedCategory('all');
    setSortBy('featured');
  };

  const hasActiveFilters = selectedBrand !== 'all' || selectedGender !== 'all' || selectedCategory !== 'all' || sortBy !== 'featured';

  return (
    <section id="products" className="py-12 sm:py-16 font-peyda text-right" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E4E0] mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#777777] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00]"></span>
              NEW ARRIVALS & SELECTION
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717]">
              جدیدترین اسنیکرهای اصیل
            </h2>
            <p className="text-xs sm:text-sm text-[#777777] font-vazir mt-1.5 font-normal">
              انتخابی کامل از محبوب‌ترین کتانی‌های اسپرت و خیابانی برترین برندهای بین‌المللی.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-vazir text-[#777777]">
              نمایش <strong className="text-[#171717]">{filtered.length}</strong> محصول
            </span>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs font-vazir text-rose-600 hover:underline flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" />
                پاکسازی فیلترها
              </button>
            )}
          </div>
        </div>

        {/* DESKTOP HORIZONTAL FILTER & SORT BAR */}
        <div className="hidden lg:flex items-center justify-between gap-4 bg-[#FFFFFF] border border-[#E5E4E0] p-3 rounded-2xl mb-8 shadow-sm">

          {/* FILTER DROPDOWNS & PILLS */}
          <div className="flex items-center gap-3 flex-wrap text-xs font-vazir">
            <div className="flex items-center gap-1.5 text-[#171717] font-semibold pl-2 border-l border-[#E5E4E0]">
              <Filter className="w-4 h-4 text-[#171717]" />
              <span>فیلترها:</span>
            </div>

            {/* BRAND FILTER */}
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="bg-[#F5F4F0] border border-[#E5E4E0] rounded-xl px-3 py-2 text-xs font-medium text-[#171717] focus:outline-none focus:border-[#171717]"
            >
              <option value="all">همه برندها</option>
              {SOLEA_BRANDS.map((b) => (
                <option key={b.id} value={b.name}>{b.name}</option>
              ))}
            </select>

            {/* GENDER FILTER */}
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="bg-[#F5F4F0] border border-[#E5E4E0] rounded-xl px-3 py-2 text-xs font-medium text-[#171717] focus:outline-none focus:border-[#171717]"
            >
              {genderList.map((g) => (
                <option key={g.id} value={g.id}>{g.label}</option>
              ))}
            </select>

            {/* CATEGORY FILTER */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-[#F5F4F0] border border-[#E5E4E0] rounded-xl px-3 py-2 text-xs font-medium text-[#171717] focus:outline-none focus:border-[#171717]"
            >
              {categoryList.map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* SORT DROPDOWN */}
          <div className="flex items-center gap-2 text-xs font-vazir shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-[#777777]" />
            <span className="text-[#777777]">مرتب‌سازی:</span>
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="bg-[#F5F4F0] border border-[#E5E4E0] rounded-xl px-3 py-2 text-xs font-semibold text-[#171717] focus:outline-none focus:border-[#171717]"
            >
              <option value="featured">برگزیده سولئا</option>
              <option value="newest">جدیدترین‌ها</option>
              <option value="price-asc">قیمت: کم به زیاد</option>
              <option value="price-desc">قیمت: زیاد به کم</option>
              <option value="rating">امتیاز خریداران</option>
            </select>
          </div>

        </div>

        {/* MOBILE STICKY FILTER TRIGGER */}
        <div className="lg:hidden flex items-center justify-between gap-3 mb-6">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex-1 py-3 px-4 bg-[#FFFFFF] border border-[#E5E4E0] rounded-xl text-xs font-semibold text-[#171717] flex items-center justify-center gap-2 shadow-sm"
          >
            <Filter className="w-4 h-4 text-[#171717]" />
            <span>فیلتر و مرتب‌سازی ({filtered.length})</span>
          </button>
        </div>

        {/* PRODUCT GRID (4 COLUMNS DESKTOP, 2 COLUMNS MOBILE) */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-[#FFFFFF] rounded-2xl border border-[#E5E4E0] p-8">
            <p className="text-sm text-[#777777] font-vazir mb-4">
              محصولی با فیلترهای انتخابی شما یافت نشد.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-[#171717] text-white text-xs font-semibold rounded-full"
            >
              نمایش همه اسنیکرها
            </button>
          </div>
        )}

      </div>

      {/* MOBILE FILTER MODAL / DRAWER */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end font-peyda" dir="rtl">
          <div className="w-full max-w-sm bg-[#FFFFFF] h-full p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E4E0] mb-6">
                <h3 className="text-lg font-extrabold text-[#171717]">فیلتر و مرتب‌سازی</h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-2 rounded-full hover:bg-[#F5F4F0]"
                >
                  <X className="w-5 h-5 text-[#171717]" />
                </button>
              </div>

              {/* BRAND FILTER */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-[#171717] mb-2 font-vazir">برند:</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full bg-[#F5F4F0] border border-[#E5E4E0] rounded-xl p-3 text-xs font-medium text-[#171717]"
                >
                  <option value="all">همه برندها</option>
                  {SOLEA_BRANDS.map((b) => (
                    <option key={b.id} value={b.name}>{b.name}</option>
                  ))}
                </select>
              </div>

              {/* GENDER FILTER */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-[#171717] mb-2 font-vazir">جنسیت:</label>

                <div className="grid grid-cols-2 gap-2">
                  {genderList.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGender(g.id)}
                      className={`p-2.5 text-xs font-medium rounded-xl border transition-all ${
                        selectedGender === g.id
                          ? 'bg-[#171717] text-white border-[#171717]'
                          : 'bg-[#F5F4F0] text-[#171717] border-[#E5E4E0]'
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CATEGORY FILTER */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-[#171717] mb-2 font-vazir">دسته‌بندی:</label>
                <div className="grid grid-cols-2 gap-2">
                  {categoryList.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`p-2.5 text-xs font-medium rounded-xl border transition-all ${
                        selectedCategory === c.id
                          ? 'bg-[#171717] text-white border-[#171717]'
                          : 'bg-[#F5F4F0] text-[#171717] border-[#E5E4E0]'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* SORTING */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-[#171717] mb-2 font-vazir">مرتب‌سازی بر اساس:</label>
                <select
                  value={sortBy}
                  onChange={(e: any) => setSortBy(e.target.value)}
                  className="w-full bg-[#F5F4F0] border border-[#E5E4E0] rounded-xl p-3 text-xs font-medium text-[#171717]"
                >
                  <option value="featured">برگزیده سولئا</option>
                  <option value="newest">جدیدترین‌ها</option>
                  <option value="price-asc">قیمت: کم به زیاد</option>
                  <option value="price-desc">قیمت: زیاد به کم</option>
                  <option value="rating">امتیاز خریداران</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E4E0] flex gap-3">
              <button
                onClick={resetFilters}
                className="w-1/3 py-3 border border-[#E5E4E0] text-xs font-semibold rounded-xl text-[#171717]"
              >
                پاکسازی
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-2/3 py-3 bg-[#171717] text-white text-xs font-semibold rounded-xl"
              >
                اعمال فیلترها ({filtered.length})
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
