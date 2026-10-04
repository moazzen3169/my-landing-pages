'use client';

import React, { useState } from 'react';
import { ManSportProduct } from '@/data/man-sport';
import { ChevronRight, ChevronLeft, ShoppingBag, Check } from 'lucide-react';

interface ProductCardProps {
  product: ManSportProduct;
  onQuickView: (product: ManSportProduct) => void;
  onAddToCart: (product: ManSportProduct) => void;
}

export default function ProductCard({ product, onQuickView, onAddToCart }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  // Ensure exactly 3 images exist for navigation
  const images = [
    product.images[0] || '/images/man-sport/T-shirt-1.webp',
    product.images[1] || product.images[0] || '/images/man-sport/T-shirt-2.webp',
    product.images[2] || product.images[0] || '/images/man-sport/T-shirt-3.webp',
  ];

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  return (
    <div
      className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#111111] transition-colors duration-300 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE AREA - FULL BLEED PORTRAIT (4:5) */}
      <div
        className="relative aspect-[4/5] w-full bg-[#F5F3EE] overflow-hidden cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        {/* MAIN IMAGE - NO INTERNAL PADDING */}
        <img
          src={images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />

        {/* MAXIMUM 1 MINIMAL BADGE */}
        {(product.badge || product.isNew) && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-1 rounded-md bg-[#111111] text-[#B7FF00] font-peyda text-[10px] font-semibold tracking-wide">
              {product.badge || 'جدید'}
            </span>
          </div>
        )}

        {/* HOVER IMAGE NAVIGATION ARROWS (← AND →) */}
        <div
          className={`hidden md:flex items-center justify-between absolute inset-x-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none transition-opacity duration-250 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* RIGHT ARROW (RTL PREVIOUS) */}
          <button
            onClick={handlePrevImage}
            className="pointer-events-auto w-7 h-7 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-transform hover:scale-110"
            title="تصویر قبلی"
            aria-label="تصویر قبلی"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* LEFT ARROW (RTL NEXT) */}
          <button
            onClick={handleNextImage}
            className="pointer-events-auto w-7 h-7 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-transform hover:scale-110"
            title="تصویر بعدی"
            aria-label="تصویر بعدی"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* MINIMAL IMAGE INDICATOR (01 / 03 OR DOTS) */}
        <div
          className={`absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-10 transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-60 md:opacity-0'
          }`}
        >
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(idx);
              }}
              className={`transition-all duration-200 rounded-full ${
                idx === currentImageIndex
                  ? 'w-4 h-1 bg-[#111111]'
                  : 'w-1 h-1 bg-black/30 hover:bg-black/60'
              }`}
              aria-label={`عکس ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* PRODUCT INFORMATION AREA */}
      <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 space-y-3">
        <div>
          {/* BRAND */}
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold block mb-1">
            {product.brand}
          </span>

          {/* PRODUCT NAME */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-bold text-xs sm:text-sm font-peyda text-[#111111] line-clamp-1 hover:text-[#2455FF] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>
        </div>

        {/* PRICE & QUICK ADD */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
          <div>
            {product.discountPrice ? (
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 line-through">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xs sm:text-sm font-semibold font-mono text-[#FF5A1F]">
                  {formatPrice(product.discountPrice)}
                </span>
              </div>
            ) : (
              <span className="text-xs sm:text-sm font-semibold font-mono text-[#111111]">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {/* QUICK ADD BUTTON - MINIMAL, NO SHADOW */}
          <button
            onClick={handleAddToCart}
            className={`px-3 py-1.5 rounded-lg font-peyda text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              isAdded
                ? 'bg-[#2455FF] text-white'
                : 'bg-[#111111] hover:bg-[#B7FF00] text-white hover:text-black'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">افزوده شد</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">افزودن</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
