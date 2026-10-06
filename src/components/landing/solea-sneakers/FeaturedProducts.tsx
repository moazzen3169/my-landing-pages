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
    <section id="products" className="py-4 bg-[#ffffff] font-peyda text-right " dir="rtl">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16">

  


        {/* PRODUCT GRID WITH SPACIOUS SPACING */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-0">
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
