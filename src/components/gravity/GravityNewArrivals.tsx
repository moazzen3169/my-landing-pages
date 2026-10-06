'use client';

import React, { useState } from 'react';
import { GRAVITY_PRODUCTS, GravityProduct } from '@/data/gravity-data';
import GravityProductCard from './GravityProductCard';
import { ArrowLeft } from 'lucide-react';

interface GravityNewArrivalsProps {
  onQuickView: (product: GravityProduct) => void;
  onAddToCart: (product: GravityProduct) => void;
  onToggleWishlist: (productId: string) => void;
  wishlistIds: string[];
}

export default function GravityNewArrivals({
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
}: GravityNewArrivalsProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'همه محصولات' },
    { id: 'suits', label: 'کت و شلوار' },
    { id: 'blazers', label: 'کت تک' },
    { id: 'shirts', label: 'پیراهن' },
    { id: 'trousers', label: 'شلوار' },
    { id: 'accessories', label: 'اکسسوری' },
  ];

  const filteredProducts =
    activeTab === 'all'
      ? GRAVITY_PRODUCTS
      : GRAVITY_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="new-arrivals" className="py-0 md:py-0 bg-[#ffffff] border-b border-[#D7D4CD] font-peyda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E5E5E5] gap-4">
          <div>
            <span className="text-xs font-bold text-[#666666] tracking-wider uppercase block mb-1">
              کالکشن جدید
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111111] mb-1">
              تازه‌های گراویتی
            </h2>
            <p className="text-sm text-[#666666] font-medium">
              انتخاب‌های جدید این هفته از برندهای برتر پوشاک مردانه
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-bold whitespace-nowrap transition-all rounded-xs ${
                  activeTab === tab.id
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-[#E8E6E1]/70 text-[#555555] hover:bg-[#E8E6E1] hover:text-[#111111]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid (2 cols mobile, 3 cols tablet, 4 cols desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <GravityProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.includes(product.id)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
        </div>
      </div>
    </section>
  );
}
