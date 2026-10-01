'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { SneakerProduct } from '@/data/solea-sneakers';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';

interface ProductCardProps {
  product: SneakerProduct;
  onQuickView: (product: SneakerProduct) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const isWishlisted = isInWishlist(product.id);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR').format(amount);
  };

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

  const secondaryImage = product.images[1] || product.images[0];

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative bg-[#FFFFFF] border border-[#E5E4E0] rounded-2xl overflow-hidden hover:border-[#171717]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer font-peyda text-right"
      dir="rtl"
      onMouseEnter={() => product.images.length > 1 && setCurrentImgIndex(1)}
      onMouseLeave={() => setCurrentImgIndex(0)}
    >
      <div>
        {/* PRODUCT IMAGE CONTAINER */}
        <div className="relative aspect-square w-full bg-[#F5F4F0] overflow-hidden flex items-center justify-center p-6">

          {/* SNEAKER IMAGE */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={product.images[currentImgIndex] || product.images[0]}
              alt={product.name}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-300 ease-out"
            />
          </div>

          {/* BADGES (SUBTLE & ACCURATE) */}
          <div className="absolute top-3 right-3 flex flex-col gap-1 z-10 items-start">
            {product.badge && (
              <span
                className={`px-2.5 py-0.5 text-[10px] font-mono font-bold rounded uppercase tracking-wider ${
                  product.badge === 'NEW'
                    ? 'bg-[#CCFF00] text-[#171717]'
                    : product.badge === 'LIMITED'
                    ? 'bg-[#171717] text-[#CCFF00]'
                    : 'bg-[#171717] text-white'
                }`}
              >
                {product.badge}
              </span>
            )}
            {product.discountPercentage && (
              <span className="px-2 py-0.5 bg-[#171717] text-[#CCFF00] text-[10px] font-mono font-bold rounded">
                ٪{product.discountPercentage}-
              </span>
            )}
          </div>

          {/* WISHLIST BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(standardProduct);
            }}
            className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-10 ${
              isWishlisted
                ? 'bg-[#171717] text-white shadow-sm'
                : 'bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#171717] border border-[#E5E4E0]'
            }`}
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-rose-500' : ''}`} />
          </button>

          {/* QUICK VIEW HOVER OVERLAY */}
          <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="w-full py-2 bg-[#FFFFFF]/95 hover:bg-[#171717] hover:text-white text-[#171717] text-xs font-semibold rounded-lg border border-[#E5E4E0] transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>مشاهده سریع</span>
            </button>
          </div>

        </div>

        {/* PRODUCT DETAILS */}
        <div className="p-4">
          {/* BRAND & VARIANT INFO */}
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="font-mono font-bold text-[#171717] tracking-wider uppercase">
              {product.brand}
            </span>
            <span className="text-[#777777] font-vazir text-[10px]">
              {product.colors.length} رنگ‌بندی
            </span>
          </div>

          {/* TITLE */}
          <h3 className="text-xs sm:text-sm font-bold text-[#171717] line-clamp-1 group-hover:text-[#777777] transition-colors mb-2">
            {product.name}
          </h3>

          {/* RATING & REVIEWS */}
          <div className="flex items-center gap-1.5 text-[11px] font-vazir mb-3 text-[#777777]">
            <span className="text-[#171717] font-semibold">★ {product.rating}</span>
            <span>({product.reviewCount} نظر)</span>
          </div>

          {/* PRICE & ADD TO CART */}
          <div className="flex items-center justify-between pt-2 border-t border-[#E5E4E0]">
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#171717]">
                {formatPrice(product.price)} <span className="text-[10px] font-normal text-[#777777]">تومان</span>
              </div>
              {product.compareAtPrice && (
                <div className="text-[10px] text-[#777777] line-through font-vazir">
                  {formatPrice(product.compareAtPrice)}
                </div>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className={`p-2 rounded-lg transition-all duration-200 flex items-center justify-center shrink-0 ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#171717] hover:bg-[#262626] text-white shadow-sm'
              }`}
              title="افزودن به سبد خرید"
            >
              {added ? <Check className="w-4 h-4 text-[#CCFF00]" /> : <ShoppingBag className="w-4 h-4 text-[#CCFF00]" />}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
