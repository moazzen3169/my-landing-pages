'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { LuxuryProduct } from '@/data/persian-luxury-women';

interface CatalogGridProps {
  products: LuxuryProduct[];
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: LuxuryProduct) => void;
  selectedBrandFilter?: string | null;
}

export default function CatalogGrid({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
  selectedBrandFilter,
}: CatalogGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', namePersian: 'همه محصولات' },
    { id: 'handbags', namePersian: 'کیف زنانه' },
    { id: 'shoes', namePersian: 'کفش زنانه' },
    { id: 'wallets', namePersian: 'کیف پول و کلچ' },
    { id: 'accessories', namePersian: 'اکسسوری' },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesBrand = !selectedBrandFilter || p.brand === selectedBrandFilter;
    return matchesCategory && matchesBrand;
  });

  return (
    <section id="catalog" className="py-16 md:py-24 bg-[#FDFDFD] font-peyda border-t border-[#ffffff]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">

        {/* SECTION HEADER & FILTER TABS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 border-b border-[#ffffff] pb-6 gap-6 text-start">
          <div>
            <span className="block text-xs font-mono font-bold text-[#B29A6A] uppercase tracking-widest mb-1">
              FULL STORE CATALOG
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-normal">
              کالکشن کامل محصولات
            </h2>
            {selectedBrandFilter && (
              <p className="text-xs text-[#B29A6A] font-bold mt-1">
                فیلتر بر اساس برند: {selectedBrandFilter}
              </p>
            )}
          </div>

          {/* CATEGORY TABS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold transition-all shrink-0 border ${
                  activeCategory === cat.id
                    ? 'bg-[#171717] text-[#F7F5F1] border-[#171717]'
                    : 'bg-[#F2EFE9] text-[#171717] border-[#ffffff] hover:border-[#171717]'
                }`}
              >
                {cat.namePersian}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center text-xs text-[#77736D]">
            محصولی با این مشخصات یافت نشد.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
