'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Eye, CheckCircle2 } from 'lucide-react';
import { LuxuryProduct } from '@/data/persian-luxury-women';

interface ProductCardProps {
  product: LuxuryProduct;
  isWishlisted?: boolean;
  onToggleWishlist?: (id: string) => void;
  onQuickView?: (product: LuxuryProduct) => void;
  badgeLabel?: string;
}

export default function ProductCard({
  product,
  isWishlisted = false,
  onToggleWishlist,
  onQuickView,
  badgeLabel,
}: ProductCardProps) {
  return (
    <div className="group relative bg-[#F7F5F1] border border-[#DDD9D2] overflow-hidden transition-all duration-300 flex flex-col justify-between text-start hover:border-[#171717]/40">

      {/* IMAGE AREA */}
      <div className="relative aspect-square w-full bg-[#EFECE6] overflow-hidden">

        {/* PRODUCT IMAGE */}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-102 transition-transform duration-500 ease-out p-4"
          unoptimized
        />

        {/* BADGES */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
          {product.discountPercent && (
            <span className="px-2.5 py-1 bg-[#6F1D2A] text-[#F7F5F1] text-[10px] font-bold tracking-wider rounded-xs shadow-xs">
              {product.discountPercent}٪ تخفیف
            </span>
          )}
          {badgeLabel && !product.discountPercent && (
            <span className="px-2.5 py-1 bg-[#171717] text-[#F7F5F1] text-[10px] font-bold tracking-wider rounded-xs">
              {badgeLabel}
            </span>
          )}
          {product.isNew && !product.discountPercent && !badgeLabel && (
            <span className="px-2.5 py-1 bg-[#B29A6A] text-[#171717] text-[10px] font-bold tracking-wider rounded-xs">
              جدید
            </span>
          )}
        </div>

        {/* WISHLIST BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist?.(product.id);
          }}
          className={`absolute top-3 left-3 p-2 rounded-full transition-all z-10 ${
            isWishlisted
              ? 'bg-[#6F1D2A] text-white shadow-md'
              : 'bg-[#F7F5F1]/80 hover:bg-[#F7F5F1] text-[#171717] border border-[#DDD9D2]'
          }`}
          title="افزودن به علاقه‌مندی‌ها"
        >
          <Heart className={`w-4 h-4 stroke-[2] ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* QUICK VIEW HOVER OVERLAY BUTTON */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block z-10">
          <button
            onClick={() => onQuickView?.(product)}
            className="w-full py-2.5 bg-[#171717]/90 hover:bg-[#171717] text-[#F7F5F1] text-xs font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-xs"
          >
            <Eye className="w-3.5 h-3.5 stroke-[2]" />
            <span>مشاهده سریع</span>
          </button>
        </div>

      </div>

      {/* METADATA AREA */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
        <div>
          {/* BRAND NAME IN LATIN */}
          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#77736D] uppercase tracking-wider mb-1">
            <span dir="ltr">{product.brand}</span>
            <span className="flex items-center gap-1 text-[10px] text-[#B29A6A] font-semibold">
              <CheckCircle2 className="w-3 h-3 shrink-0" />
              اصالت
            </span>
          </div>

          {/* PERSIAN PRODUCT NAME */}
          <h3
            onClick={() => onQuickView?.(product)}
            className="text-sm font-semibold text-[#171717] mb-2 line-clamp-1 cursor-pointer hover:text-[#B29A6A] transition-colors leading-snug"
          >
            {product.name}
          </h3>
        </div>

        {/* PRICE & DISCOUNT */}
        <div className="mt-3 pt-3 border-t border-[#DDD9D2]/50 flex items-baseline justify-between">
          <div>
            {product.originalPriceFormatted && (
              <span className="block text-[11px] text-[#77736D] line-through font-vazir -mb-0.5">
                {product.originalPriceFormatted}
              </span>
            )}
            <span className="text-sm sm:text-base font-bold text-[#171717] font-vazir">
              {product.priceFormatted}
            </span>
          </div>

          {/* MOBILE QUICK VIEW AFFORDANCE */}
          <button
            onClick={() => onQuickView?.(product)}
            className="sm:hidden p-1.5 text-[#171717] hover:text-[#B29A6A]"
            title="مشاهده جزئیات"
          >
            <Eye className="w-4 h-4 stroke-[1.75]" />
          </button>
        </div>

      </div>

    </div>
  );
}
