'use client';

import React, { useState } from 'react';
import { ManSportProduct } from '@/data/man-sport';
import { ChevronRight, ChevronLeft, ShoppingBag, Eye, Heart, Check, Star } from 'lucide-react';

interface ProductCardProps {
  product: ManSportProduct;
  onQuickView: (product: ManSportProduct) => void;
  onAddToCart: (product: ManSportProduct) => void;
}

export default function ProductCard({ product, onQuickView, onAddToCart }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Ensure 3 images exist for navigation
  const images = product.images.length >= 3
    ? product.images
    : [product.images[0], product.images[0] || '', product.images[0] || ''];

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
      className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#111111] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE CONTAINER AREA WITH 3-IMAGE NAVIGATION */}
      <div className="relative aspect-[3/4] w-full bg-[#F5F3EE] overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>

        {/* MAIN IMAGE WITH ZOOM EFFECT */}
        <img
          src={images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* BADGES */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-md bg-[#111111] text-[#B7FF00] font-peyda text-[10px] font-bold tracking-wide shadow-md">
              {product.badge}
            </span>
          )}
          {product.discountPrice && (
            <span className="px-2 py-0.5 rounded-md bg-[#FF5A1F] text-white font-mono text-[10px] font-black uppercase tracking-wider shadow-md">
              تخفیف ویژه
            </span>
          )}
        </div>

        {/* WISHLIST BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-all z-10 shadow-sm ${
            isWishlisted
              ? 'bg-[#FF5A1F] text-white'
              : 'bg-white/80 hover:bg-white text-slate-700 hover:text-black'
          }`}
          title="افزودن به علاقه مندی"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* DESKTOP HOVER HOVER NAVIGATION ARROWS (← AND →) */}
        {images.length > 1 && (
          <div
            className={`hidden md:flex items-center justify-between absolute inset-x-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none transition-opacity duration-200 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* RIGHT ARROW (RTL PREVIOUS/NEXT) */}
            <button
              onClick={handlePrevImage}
              className="pointer-events-auto w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-110 shadow-md"
              title="تصویر قبلی"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* LEFT ARROW */}
            <button
              onClick={handleNextImage}
              className="pointer-events-auto w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-110 shadow-md"
              title="تصویر بعدی"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* IMAGE INDEX COUNTER / DOT INDICATORS (FOR BOTH DESKTOP & MOBILE SWIPE) */}
        <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(idx);
              }}
              className={`transition-all duration-300 rounded-full ${
                idx === currentImageIndex
                  ? 'w-5 h-1.5 bg-[#111111]'
                  : 'w-1.5 h-1.5 bg-black/30 hover:bg-black/60'
              }`}
            />
          ))}
        </div>

        {/* QUICK VIEW HOVER TRIGGER */}
        <div
          className={`hidden sm:flex items-center justify-center absolute inset-x-4 bottom-8 z-10 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full py-2 px-3 rounded-xl bg-white/90 hover:bg-white text-black font-peyda text-xs font-bold shadow-lg backdrop-blur-sm flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>مشاهده سریع</span>
          </button>
        </div>

      </div>

      {/* PRODUCT INFORMATION AREA */}
      <div className="p-4 flex flex-col justify-between flex-1 space-y-2">
        <div>
          {/* BRAND NAME */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-slate-600">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* PRODUCT NAME */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-bold text-sm font-peyda text-[#111111] line-clamp-1 hover:text-[#2455FF] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>
        </div>

        {/* COLOR VARIANTS PREVIEW */}
        <div className="flex items-center gap-1.5 py-1">
          {product.colors.map((color, idx) => (
            <span
              key={idx}
              className="w-3 h-3 rounded-full border border-slate-300 shadow-2xs"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>

        {/* PRICE & QUICK ADD BUTTON */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
          <div>
            {product.discountPrice ? (
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 line-through">
                  {formatPrice(product.price)}
                </span>
                <span className="text-sm font-bold font-mono text-[#FF5A1F]">
                  {formatPrice(product.discountPrice)}
                </span>
              </div>
            ) : (
              <span className="text-sm font-bold font-mono text-[#111111]">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {/* QUICK ADD TO CART BUTTON */}
          <button
            onClick={handleAddToCart}
            className={`px-3 py-2 rounded-xl font-peyda text-xs font-bold flex items-center gap-1.5 transition-all duration-200 ${
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
