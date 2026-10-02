'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Eye } from 'lucide-react';
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
  const secondImage = product.images[1] || product.images[0];

  return (
    <div className="group relative bg-[#FFFFFF] border-none overflow-hidden flex flex-col justify-between text-start cursor-pointer">

      {/* IMAGE CONTAINER (3:4 aspect ratio) */}
      <div
        onClick={() => onQuickView?.(product)}
        className="relative aspect-[3/4] w-full bg-[#F5F5F5] overflow-hidden"
      >
        {/* PRIMARY IMAGE */}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:opacity-0 transition-opacity duration-300 ease-out"
          unoptimized
        />

        {/* SECONDARY IMAGE ON HOVER */}
        <Image
          src={secondImage}
          alt={product.name}
          fill
          className="object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
          unoptimized
        />

        {/* MINIMALIST BADGE */}
        <div className="absolute top-3 right-3 flex flex-col gap-1 z-10">
          {product.discountPercent && (
            <span className="px-2 py-0.5 bg-[#000000] text-[#FFFFFF] text-[10px] font-mono font-normal">
              -{product.discountPercent}%
            </span>
          )}
          {badgeLabel && !product.discountPercent && (
            <span className="px-2 py-0.5 bg-[#000000] text-[#FFFFFF] text-[10px] font-mono font-normal">
              {badgeLabel}
            </span>
          )}
        </div>

        {/* WISHLIST ICON BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist?.(product.id);
          }}
          className="absolute top-3 left-3 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 text-[#000000] hover:scale-110"
          title="علاقه‌مندی‌ها"
        >
          <Heart className={`w-4 h-4 stroke-[1.25] ${isWishlisted ? 'fill-[#000000] text-[#000000]' : 'text-[#000000]'}`} />
        </button>

        {/* QUICK VIEW HOVER BUTTON */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView?.(product);
            }}
            className="w-full py-2.5 bg-[#000000] hover:bg-[#111111] text-[#FFFFFF] text-xs font-normal tracking-wider transition-colors flex items-center justify-center gap-2 rounded-none"
          >
            <Eye className="w-3.5 h-3.5 stroke-[1.25]" />
            <span>مشاهده سریع</span>
          </button>
        </div>

      </div>

      {/* METADATA AREA UNDER IMAGE */}
      <div className="pt-4 pb-2 px-1 flex flex-col justify-between flex-grow text-start">
        <div>
          {/* LATIN BRAND NAME */}
          <span className="block text-[10px] font-mono font-medium text-[#666666] uppercase tracking-wider mb-0.5" dir="ltr">
            {product.brand}
          </span>

          {/* PERSIAN PRODUCT NAME */}
          <h3
            onClick={() => onQuickView?.(product)}
            className="text-xs font-normal text-[#111111] line-clamp-1 hover:text-[#666666] transition-colors leading-relaxed"
          >
            {product.name}
          </h3>
        </div>

        {/* PRICES */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xs font-normal text-[#000000]">
            {product.priceFormatted}
          </span>
          {product.originalPriceFormatted && (
            <span className="text-[11px] text-[#999999] line-through font-normal">
              {product.originalPriceFormatted}
            </span>
          )}
        </div>
      </div>

    </div>
  );
}
