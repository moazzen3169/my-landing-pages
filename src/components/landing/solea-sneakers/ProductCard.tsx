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
      className="group relative bg-[#ffffffffffff] border border-[#CBD5E1]/60 rounded-[20px] overflow-hidden hover:border-[#0B1220] transition-colors duration-300 flex flex-col justify-between cursor-pointer font-peyda text-right"
      dir="rtl"
    >
      <div>
        {/* 1. IMAGE FIRST (ASPECT 1/1, #F1F5F9) */}
        <div className="relative aspect-square w-full bg-[#EAEFF0] overflow-hidden flex items-center justify-center p-6">

          {/* SNEAKER IMAGE WITH SUBTLE ZOOM */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* BADGES (TOP RIGHT IN RTL) */}
          <div className="absolute top-3 right-3 flex  gap-1.5 z-10 items-start">
            {product.badge && (
              <span className="px-2.5 py-0.5 bg-[#0B1220] text-[#F8FAFC] text-[12px] font-semibold rounded-full uppercase tracking-wider">
                {product.badge}
              </span>
            )}
            {product.discountPercentage && (
              <span className="px-2 py-0.5 bg-[#8ADDFD] text-[#0B1220] text-[12px]  font-bold rounded-full">
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
            className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10 ${
              isWishlisted
                ? 'bg-[#0B1220] text-[#F8FAFC]'
                : 'bg-[#F8FAFC]/90 hover:bg-[#0B1220] text-[#0B1220] hover:text-[#F8FAFC] border border-[#CBD5E1]/50'
            }`}
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current text-rose-500' : ''}`} />
          </button>

          {/* QUICK VIEW HOVER ACTION */}
          <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="flex-1 py-2 bg-[#0B1220] text-[#F8FAFC] text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>مشاهده سریع</span>
            </button>
          </div>

        </div>

        {/* 2. PRODUCT DETAILS CONTENT */}
        <div className="p-4 sm:p-5">
          {/* BRAND & GENDER */}
          <div className="flex items-center justify-between text-[11px] text-[#475569] font-peyda mb-1">
            <span className="font-mono font-bold tracking-wider uppercase text-[#0B1220]">
              {product.brand}
            </span>
            <span className="font-normal">
              {product.gender === 'men' ? 'مردانه' : product.gender === 'women' ? 'زنانه' : 'یونیسکس'}
            </span>
          </div>

          {/* PRODUCT NAME */}
          <h3 className="text-sm sm:text-base font-semibold text-[#0B1220] line-clamp-1 group-hover:text-[#8FA9C4] transition-colors mb-2">
            {product.name}
          </h3>

          {/* VISUAL SPECIFICATIONS CHIP (SHOW, DON'T TELL) */}
          <div className="flex items-center gap-2 mb-3 text-[11px] font-peyda text-[#64748B]">
            {product.specifications.weight && (
              <span className="px-2 py-0.5 bg-[#F1F5F9] rounded-md border border-[#CBD5E1]/40 font-mono text-[10px] font-semibold text-[#0B1220]">
                {product.specifications.weight}
              </span>
            )}
            <span className="text-amber-600 font-semibold">★ {product.rating}</span>
          </div>

          {/* PRICE & ADD TO CART ACTION */}
          <div className="flex items-center justify-between pt-3 border-t border-[#CBD5E1]/40">
            <div>
              <div className="text-base sm:text-lg font-bold text-[#0B1220]">
                {formatPrice(product.price)} <span className="text-xs font-normal text-[#64748B]">تومان</span>
              </div>
              {product.compareAtPrice && (
                <div className="text-xs text-[#64748B] line-through font-peyda">
                  {formatPrice(product.compareAtPrice)}
                </div>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className={`p-2.5 rounded-xl transition-colors shrink-0 ${
                added
                  ? 'bg-emerald-700 text-[#F8FAFC]'
                  : 'bg-[#0B1220] hover:bg-[#16233A] text-[#F8FAFC]'
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
