'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { SneakerProduct } from '@/data/solea-sneakers';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';
import { formatPersianPrice } from '@/lib/utils';

interface ProductCardProps {
  product: SneakerProduct;
  onQuickView: (product: SneakerProduct) => void;
  index?: number;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const isWishlisted = isInWishlist(product.id);

  const standardProduct: Product = {
    id: product.id,
    name: product.name,
    brand: product.brand,
    slug: product.slug,
    category: 'accessories' as const,
    price: product.price,
    currency: 'TMN',
    colors: product.colors,
    sizes: product.sizes,
    images: product.images,
    description: product.description,
    material: product.specifications.upper,
    fit: 'استاندارد اسنیکر',
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(standardProduct, product.colors[0], product.sizes[0] || '41');
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleMouseEnter = () => {
    if (product.images.length > 1) {
      setActiveImageIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setActiveImageIndex(0);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white border border-neutral-200/90 hover:border-black transition-all duration-300 flex flex-col justify-between cursor-pointer font-peyda text-right overflow-hidden rounded-xl shadow-xs hover:shadow-md"
      dir="rtl"
    >
      <div>
        {/* 1. CLEAN WHITE SNEAKER IMAGE CANVAS */}
        <div className="relative aspect-square w-full bg-white overflow-hidden flex items-center justify-center p-6 border-b border-neutral-100">

          {/* SNEAKER IMAGE - PROMINENT PRESENTATION */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-contain p-2 transform group-hover:scale-110 transition-transform duration-500 ease-out"
            />
          </div>

          {/* BADGES (RIGHT SIDE) */}
          <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10 items-start">
            {product.badge && (
              <span className="px-2.5 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-xs">
                {product.badge}
              </span>
            )}
            {product.discountPercentage && (
              <span className="px-2 py-0.5 bg-rose-50 text-rose-700 text-[10px] font-bold border border-rose-200 rounded-md">
                ٪{product.discountPercentage}-
              </span>
            )}
          </div>

          {/* WISHLIST BUTTON (LEFT SIDE) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(standardProduct);
            }}
            className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10 ${
              isWishlisted
                ? 'bg-black text-white'
                : 'bg-white/90 hover:bg-black text-black hover:text-white border border-neutral-200 shadow-xs'
            }`}
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current text-rose-500' : ''}`} />
          </button>

          {/* QUICK VIEW SLIDE UP CTA */}
          <div className="absolute bottom-3 inset-x-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="w-full py-2.5 bg-black text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>مشاهده سریع محصول</span>
            </button>
          </div>

        </div>

        {/* 2. PRODUCT DETAILS CONTENT */}
        <div className="p-5">
          {/* BRAND & GENDER */}
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-1.5">
            <span className="font-bold tracking-wider uppercase text-black">
              {product.brand}
            </span>
            <span className="font-sans font-medium text-neutral-500">
              {product.gender === 'men' ? 'مردانه' : product.gender === 'women' ? 'زنانه' : 'یونیسکس'}
            </span>
          </div>

          {/* PRODUCT NAME */}
          <h3 className="text-sm sm:text-base font-bold text-black line-clamp-1 group-hover:text-neutral-600 transition-colors mb-2">
            {product.name}
          </h3>

          {/* RATING & SPEC */}
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
            <span className="text-amber-700 font-bold flex items-center gap-1">
              ★ {product.rating} <span className="text-[10px] text-neutral-400 font-normal">({product.reviewCount})</span>
            </span>
            {product.specifications.weight && (
              <span className="font-mono text-[10px] text-neutral-400">
                {product.specifications.weight}
              </span>
            )}
          </div>

          {/* PRICE & ADD TO CART ACTION */}
          <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
            <div>
              <div className="text-base font-bold text-black">
                {formatPersianPrice(product.price)}
              </div>
              {product.compareAtPrice && (
                <div className="text-xs text-neutral-400 line-through">
                  {formatPersianPrice(product.compareAtPrice)}
                </div>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className={`p-2.5 transition-all shrink-0 rounded-lg ${
                added
                  ? 'bg-emerald-700 text-white'
                  : 'bg-black hover:bg-neutral-800 text-white'
              }`}
              title="افزودن به سبد خرید"
            >
              {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
