'use client';

import React from 'react';
import { WomanLuxProduct } from '@/data/woman-lux';
import ProductCard from './ProductCard';
import { ArrowLeft } from 'lucide-react';

interface ProductCollectionProps {
  products: WomanLuxProduct[];
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
  onOpenDetail: (product: WomanLuxProduct) => void;
  onViewAllClick?: () => void;
}

export default function ProductCollection({
  products,
  wishlistIds,
  onToggleWishlist,
  onOpenDetail,
  onViewAllClick,
}: ProductCollectionProps) {
  // Always display exactly 8 products (no less, no more)
  const featured = products.filter((p) => p.featured);
  const remaining = products.filter((p) => !p.featured);
  const displayProducts = [...featured, ...remaining].slice(0, 8);

  return (
    <section id="new-arrivals" className="w-full bg-white py-8 border-b border-[#E5E5E5]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">

        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#E5E5E5]">
          <div className="text-right space-y-1">
            <span className="text-xs font-mono uppercase text-[#6B6B6B] tracking-widest">
              SELECTED EDIT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-peyda">
              منتخب‌های جدید
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B]">
              «قطعاتی برای ساختن استایل شما»
            </p>
          </div>

          <button
            onClick={onViewAllClick}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#111111] hover:text-black/70 transition-colors py-1 group"
          >
            <span>مشاهده همه جدیدها</span>
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </button>
        </div>

        {/* PRODUCT CARDS GRID - EXACTLY 8 PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onOpenDetail={onOpenDetail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
