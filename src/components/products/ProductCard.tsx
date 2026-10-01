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
  const [, setIsHovered] = useState(false);

  const inWishlist = isInWishlist(product.id);

  const aspectClass =
    aspectRatio === 'tall'
      ? 'aspect-[3/4]'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : 'aspect-[4/5]';

  return (
    <div
      className="group relative flex flex-col w-full bg-[#FFFFFF] border border-[#D7D4CD] overflow-hidden"
      onMouseEnter={() => {
        setIsHovered(true);
        if (product.images.length > 1) setActiveImageIndex(1);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveImageIndex(0);
      }}
    >
      {/* Top Badges & Wishlist Toggle */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center pointer-events-none">
        <div>
          {product.badge && (
            <span className="inline-block bg-[#111111] text-white text-[9px] font-mono tracking-[0.2em] px-2 py-1 uppercase">
              {product.badge}
            </span>
          )}
          {product.isNew && !product.badge && (
            <span className="inline-block bg-[#A58B68] text-white text-[9px] font-mono tracking-[0.2em] px-2 py-1 uppercase">
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
          className="pointer-events-auto p-2 rounded-full bg-white/80 backdrop-blur-md text-[#111111] hover:bg-white transition-all shadow-sm"
          aria-label="Add to wishlist"
        >
          <Heart className={`w-4 h-4 ${inWishlist ? 'fill-[#111111]' : ''}`} />
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
          <div className="absolute inset-x-4 bottom-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              className="w-full bg-[#111111]/90 backdrop-blur-sm text-[#F3F2EE] py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#111111] transition-colors flex items-center justify-center space-x-2 space-x-reverse"
              data-cursor-text={isPersian ? 'مشاهده سریع' : 'QUICK VIEW'}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{isPersian ? 'مشاهده سریع' : 'QUICK VIEW'}</span>
            </button>
          </div>
        )}
      </Link>

      {/* Product Details */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-2 bg-white">
        <div className="flex justify-between items-start space-x-2 space-x-reverse">
          <Link href={`/product/${product.slug}`} className="group-hover:text-[#77746E] transition-colors">
            <h3 className="text-sm font-medium tracking-wide text-[#111111] uppercase font-sans line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <span className="text-xs font-mono font-medium text-[#111111]">
            {formatPrice(product.price, product.currency)}
          </span>
        </div>

        <div className="flex justify-between items-center text-[11px] text-[#77746E]">
          <span className="uppercase tracking-wider">{product.category}</span>
          {/* Color Swatches */}
          <div className="flex items-center space-x-1 space-x-reverse">
            {product.colors.map((color) => (
              <span
                key={color.name}
                className="w-2.5 h-2.5 rounded-full border border-black/20"
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
