'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GravityProduct } from '@/data/gravity-data';
import { Heart, Eye, ShoppingBag } from 'lucide-react';

interface GravityProductCardProps {
  product: GravityProduct;
  onQuickView: (product: GravityProduct) => void;
  onAddToCart: (product: GravityProduct) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
}

export default function GravityProductCard({
  product,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}: GravityProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Convert numbers to Persian digits with comma separators
  const formatPersianPrice = (num: number) => {
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  return (
    <div
      className="group relative flex flex-col bg-[#F8F9FA] border border-[#E5E5E5] rounded-xs overflow-hidden font-peyda transition-all duration-300 hover:border-[#111111]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full bg-[#E8E6E1] overflow-hidden">
        <Image
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1 z-10">
          {product.isNewArrival && (
            <span className="bg-[#111111] text-white text-[10px] font-semibold px-2 py-0.5 rounded-xs tracking-normal">
              جدید
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-[#2563EB] text-white text-[10px] font-semibold px-2 py-0.5 rounded-xs tracking-normal">
              پیشنهاد ویژه
            </span>
          )}
        </div>

        {/* Wishlist Button Top Left */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className={`absolute top-2.5 left-2.5 z-10 p-2 rounded-full backdrop-blur-md transition-all ${
            isWishlisted
              ? 'bg-[#2563EB] text-white'
              : 'bg-white/80 text-[#111111] hover:bg-white hover:text-[#2563EB]'
          }`}
          aria-label="افزودن به علاقه‌مندی‌ها"
        >
          <Heart size={15} className={isWishlisted ? 'fill-current' : ''} />
        </button>

        {/* Quick Actions Bar Overlay on Hover */}
        <div className="absolute inset-x-3 bottom-3 z-10 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 bg-white/95 text-[#111111] hover:bg-[#111111] hover:text-white text-xs font-semibold py-2.5 px-3 rounded-xs flex items-center justify-center gap-1.5 backdrop-blur-sm transition-colors"
          >
            <Eye size={14} />
            <span>مشاهده سریع</span>
          </button>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-[#2563EB] text-white hover:bg-[#1D4ED8] p-2.5 rounded-xs flex items-center justify-center transition-colors"
            aria-label="افزودن سریع به سبد"
          >
            <ShoppingBag size={15} />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-grow justify-between bg-white">
        <div>
          {/* Brand */}
          <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
            {product.brand}
          </span>

          {/* Title */}
          <h3 className="text-sm font-bold text-[#111111] leading-snug line-clamp-1 group-hover:text-[#2563EB] transition-colors mb-2">
            {product.name}
          </h3>
        </div>

        {/* Price & Sizes */}
        <div className="pt-2 border-t border-[#F0EEEC] flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-black text-[#111111]">
              {formatPersianPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#888888] line-through">
                {formatPersianPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {product.sizes && product.sizes.length > 0 && (
            <span className="text-[10px] text-[#777777] font-medium hidden sm:inline">
              {product.sizes.length} سایز
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
