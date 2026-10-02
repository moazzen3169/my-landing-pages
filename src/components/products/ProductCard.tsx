'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Eye } from 'lucide-react';
import { Product } from '@/types';
import { useWishlist } from '@/context/WishlistContext';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  aspectRatio?: 'portrait' | 'square' | 'tall';
  isPersian?: boolean;
}

export default function ProductCard({
  product,
  onQuickView,
  aspectRatio = 'portrait',
  isPersian = false,
}: ProductCardProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const inWishlist = isInWishlist(product.id);

  const aspectClass =
    aspectRatio === 'tall'
      ? 'aspect-[3/4]'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : 'aspect-[4/5]';

  return (
    <div
      className="group relative flex flex-col w-full bg-[#ffffffffffff] border border-[#D7D4CD] overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => {
        if (product.images.length > 1) setActiveImageIndex(1);
      }}
      onMouseLeave={() => {
        setActiveImageIndex(0);
      }}
    >
      {/* Top Badges & Wishlist Toggle */}
      <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 z-20 flex justify-between items-center pointer-events-none">
        <div>
          {product.badge && (
            <span
              className={`inline-block bg-[#111111] text-white px-2.5 py-1 ${
                isPersian
                  ? 'text-[11px] font-medium font-peyda'
                  : 'text-[9px] font-mono tracking-[0.2em] uppercase'
              }`}
            >
              {product.badge}
            </span>
          )}
          {product.isNew && !product.badge && (
            <span
              className={`inline-block bg-[#A58B68] text-white px-2.5 py-1 ${
                isPersian
                  ? 'text-[11px] font-medium font-peyda'
                  : 'text-[9px] font-mono tracking-[0.2em] uppercase'
              }`}
            >
              {isPersian ? 'جدید' : 'NEW'}
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="pointer-events-auto p-2 rounded-full bg-white/85 backdrop-blur-md text-[#111111] hover:bg-white hover:scale-110 transition-all shadow-sm"
          aria-label={isPersian ? 'افزودن به علاقه‌مندی‌ها' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 transition-colors ${inWishlist ? 'fill-[#111111] text-[#111111]' : 'text-[#111111]'}`} />
        </button>
      </div>

      {/* Image Container */}
      <Link href={`/product/${product.slug}`} className={`relative w-full ${aspectClass} bg-[#E8E6E1] overflow-hidden block`}>
        <Image
          src={product.images[activeImageIndex] || product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Quick View Button overlay on Hover */}
        {onQuickView && (
          <div className="absolute inset-x-3.5 bottom-3.5 sm:inset-x-4 sm:bottom-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              className={`w-full bg-[#111111]/90 backdrop-blur-sm text-[#F3F2EE] py-2.5 sm:py-3 hover:bg-[#111111] transition-colors flex items-center justify-center gap-2 ${
                isPersian
                  ? 'text-xs font-medium font-peyda'
                  : 'text-[10px] font-bold tracking-[0.2em] uppercase font-mono'
              }`}
              data-cursor-text={isPersian ? 'مشاهده سریع' : 'QUICK VIEW'}
            >
              <Eye className="w-3.5 h-3.5 shrink-0" />
              <span>{isPersian ? 'مشاهده سریع' : 'QUICK VIEW'}</span>
            </button>
          </div>
        )}
      </Link>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 gap-2 bg-white text-start">
        {/* Brand name badge */}
        {product.brand && (
          <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#A58B68]">
            {product.brand}
          </span>
        )}

        <div className="flex justify-between items-baseline gap-3">
          <Link href={`/product/${product.slug}`} className="group-hover:text-[#A58B68] transition-colors flex-1 min-w-0">
            <h3
              className={`text-[#111111] truncate ${
                isPersian
                  ? 'text-xs sm:text-sm font-semibold font-peyda leading-snug'
                  : 'text-sm font-medium tracking-wide uppercase font-sans'
              }`}
            >
              {product.name}
            </h3>
          </Link>
          <span className="text-xs font-mono font-bold text-[#111111] shrink-0">
            {formatPrice(product.price, product.currency, isPersian)}
          </span>
        </div>

        <div
          className={`flex justify-between items-center text-[#77746E] pt-2 border-t border-[#F3F2EE] ${
            isPersian ? 'text-xs font-peyda' : 'text-[11px] uppercase tracking-wider font-mono'
          }`}
        >
          <span>{product.category}</span>
          {/* Color Swatches */}
          <div className="flex items-center gap-1.5">
            {product.colors.map((color) => (
              <span
                key={color.name}
                className="w-2.5 h-2.5 rounded-full border border-black/20 shrink-0"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
