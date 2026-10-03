'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { WomanLuxProduct } from '@/data/woman-lux';

interface ProductCardProps {
  product: WomanLuxProduct;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  onOpenDetail: (product: WomanLuxProduct) => void;
}

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onOpenDetail,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const defaultImg = product.images[0] || '/images/woman-lux/jackest-coat-2.webp';
  const hoverImg = product.images[1] || defaultImg;

  return (
    <div
      className="group relative cursor-pointer flex flex-col bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenDetail(product)}
    >
      {/* IMAGE CONTAINER WITH ASPECT RATIO & CROSSFADE */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#F5F5F5]">

        {/* DEFAULT IMAGE */}
        <Image
          src={defaultImg}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-cover object-center transition-opacity duration-500 ease-out ${
            isHovered && hoverImg !== defaultImg ? 'opacity-0' : 'opacity-100'
          }`}
          priority={false}
        />

        {/* HOVER IMAGE (CROSSFADE) */}
        {hoverImg !== defaultImg && (
          <Image
            src={hoverImg}
            alt={`${product.name} hover`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-cover object-center transition-opacity duration-500 ease-out absolute inset-0 ${
              isHovered ? 'opacity-100 scale-102' : 'opacity-0 scale-100'
            }`}
          />
        )}

        {/* BADGE IF AVAILABLE */}
        {product.badge && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2 py-1 bg-[#111111] text-white text-[9px] font-medium tracking-wider uppercase">
              {product.badge}
            </span>
          </div>
        )}

        {/* WISHLIST BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className="absolute top-3 left-3 z-10 p-2 text-[#111111] bg-white/80 backdrop-blur-xs hover:bg-white transition-all duration-200 group/btn"
          aria-label="Save to Wishlist"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'fill-[#111111] text-[#111111]' : 'text-[#111111] group-hover/btn:scale-110'
            }`}
          />
        </button>

        {/* QUICK VIEW HOVER CTA */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-white/90 backdrop-blur-xs text-[#111111] text-xs font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          مشاهده جزئیات
        </div>
      </div>

      {/* PRODUCT DETAILS BELOW IMAGE */}
      <div className="pt-3 pb-1 space-y-1.5 text-right">

        {/* COLOR DOTS IF AVAILABLE */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 justify-end pb-0.5">
            {product.colors.map((c, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        )}

        {/* PRODUCT NAME */}
        <h3 className="text-xs sm:text-sm font-medium text-[#111111] line-clamp-1 group-hover:text-black/70 transition-colors">
          {product.name}
        </h3>

        {/* PRICE */}
        <p className="text-xs font-medium text-[#6B6B6B] tracking-normal">
          {product.formattedPrice}
        </p>
      </div>
    </div>
  );
}
