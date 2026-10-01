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

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative bg-[#FAFAF8] border border-[#111111]/[0.08] rounded-[22px] overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col justify-between cursor-pointer font-peyda text-right"
      dir="rtl"
    >
      <div>
        {/* IMAGE CONTAINER (ASPECT 1/1, #F1F1EE) */}
        <div className="relative aspect-square w-full bg-[#F1F1EE] overflow-hidden flex items-center justify-center p-6">

          {/* SNEAKER IMAGE WITH HOVER ZOOM & TRANSLATE */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain -rotate-3 group-hover:rotate-0 group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-700 ease-out"
            />
          </div>

          {/* BADGES (TOP RIGHT IN RTL) */}
          <div className="absolute top-3.5 right-3.5 flex flex-col gap-1.5 z-10 items-start">
            {product.badge && (
              <span className="px-3 py-1 bg-[#111111] text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                {product.badge}
              </span>
            )}
            {product.discountPercentage && (
              <span className="px-2.5 py-0.5 bg-[#A89B84] text-black text-[10px] font-extrabold rounded-full">
                ٪{product.discountPercentage}-
              </span>
            )}
          </div>

          {/* WISHLIST BUTTON (TOP LEFT IN RTL) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(standardProduct);
            }}
            className={`absolute top-3.5 left-3.5 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 z-10 ${
              isWishlisted
                ? 'bg-[#111111] text-white shadow-md'
                : 'bg-white/80 hover:bg-white text-[#111111] border border-[#111111]/10'
            }`}
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-rose-500' : ''}`} />
          </button>

          {/* QUICK VIEW HOVER ACTION (CENTER BOTTOM OF IMAGE) */}
          <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="flex-1 py-2.5 bg-white/95 backdrop-blur-md hover:bg-[#111111] hover:text-white text-[#111111] text-xs font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>مشاهده سریع</span>
            </button>
          </div>

        </div>

        {/* PRODUCT DETAILS CONTENT */}
        <div className="p-5">
          {/* BRAND & CATEGORY */}
          <div className="flex items-center justify-between text-[11px] text-[#6B6B68] font-vazir mb-1.5">
            <span className="font-mono font-bold tracking-wider uppercase text-[#111111]/80">
              {product.brand}
            </span>
            <span>
              {product.gender === 'men' ? 'مردانه' : product.gender === 'women' ? 'زنانه' : 'یونیسکس'}
            </span>
          </div>

          {/* TITLE */}
          <h3 className="text-sm sm:text-base font-extrabold text-[#111111] line-clamp-1 group-hover:text-[#A89B84] transition-colors mb-2">
            {product.name}
          </h3>

          {/* RATING */}
          <div className="flex items-center gap-1 text-[11px] text-[#6B6B68] font-vazir mb-3">
            <span className="text-amber-500 font-bold">★ {product.rating}</span>
            <span>({product.reviewCount} نظر)</span>
          </div>

          {/* PRICE & ADD TO CART ACTION */}
          <div className="flex items-center justify-between pt-2 border-t border-[#111111]/[0.06]">
            <div>
              <div className="text-sm sm:text-base font-black text-[#111111]">
                {formatPrice(product.price)} <span className="text-xs font-medium text-[#6B6B68]">تومان</span>
              </div>
              {product.compareAtPrice && (
                <div className="text-xs text-[#6B6B68] line-through font-vazir">
                  {formatPrice(product.compareAtPrice)}
                </div>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className={`p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center shrink-0 ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#111111] hover:bg-[#2A2A2A] text-white shadow-sm'
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
