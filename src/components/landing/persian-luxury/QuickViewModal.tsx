'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, Heart, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { LuxuryProduct } from '@/data/persian-luxury-women';

interface QuickViewModalProps {
  product: LuxuryProduct | null;
  onClose: () => void;
  onAddToCart: (product: LuxuryProduct, selectedColor: string, selectedSize: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}: QuickViewModalProps) {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'One Size');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-peyda animate-fadeIn">

      {/* BACKDROP CLICK */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* MODAL CONTAINER */}
      <div className="relative w-full max-w-4xl bg-[#F7F5F1] border border-[#ffffff] overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 bg-[#F2EFE9] hover:bg-[#171717] hover:text-[#F7F5F1] text-[#171717] transition-all z-20 border border-[#ffffff]"
          title="بستن"
        >
          <X className="w-5 h-5 stroke-[2]" />
        </button>

        {/* TWO-COLUMN RTL LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 text-start">

          {/* IMAGE COLUMN (55% ON DESKTOP) */}
          <div className="md:col-span-6 lg:col-span-7 bg-[#EFECE6] p-6 flex flex-col justify-between relative border-b md:border-b-0 md:border-l border-[#ffffff]">
            <div className="relative aspect-square w-full">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover object-center p-4"
                unoptimized
              />
            </div>

            {/* AUTHENTICITY FLOATING BADGE */}
            <div className="mt-4 p-3 bg-[#F7F5F1] border border-[#ffffff] flex items-center gap-2 text-xs text-[#171717]">
              <ShieldCheck className="w-4 h-4 text-[#B29A6A] shrink-0" />
              <span>ضمانت اصالت ۱۰۰٪ و سلامت چرم با شناسنامه معتبر</span>
            </div>
          </div>

          {/* PRODUCT DETAILS COLUMN (45% ON DESKTOP) */}
          <div className="md:col-span-6 lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#F7F5F1]">
            <div>
              {/* BRAND */}
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#77736D] uppercase tracking-wider mb-2">
                <span>{product.brand}</span>
                <span className="flex items-center gap-1 text-[11px] text-[#B29A6A]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  اصالت کالا ✓
                </span>
              </div>

              {/* TITLE */}
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#171717] mb-3 leading-snug">
                {product.name}
              </h2>

              {/* PRICING */}
              <div className="mb-6 pb-4 border-b border-[#ffffff] flex items-baseline gap-3">
                <span className="text-xl sm:text-2xl font-black text-[#171717] font-vazir">
                  {product.priceFormatted}
                </span>
                {product.originalPriceFormatted && (
                  <span className="text-xs text-[#77736D] line-through font-vazir">
                    {product.originalPriceFormatted}
                  </span>
                )}
              </div>

              {/* DESCRIPTION */}
              <p className="text-xs text-[#77736D] leading-relaxed mb-6">
                {product.descriptionPersian}
              </p>

              {/* COLOR SELECTOR */}
              {product.colors.length > 0 && (
                <div className="mb-6">
                  <span className="block text-xs font-bold text-[#171717] mb-2">
                    انتخاب رنگ: <span className="text-[#B29A6A] font-normal">{selectedColor}</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(c.name)}
                        className={`px-3 py-1.5 text-xs font-medium border flex items-center gap-2 transition-all ${
                          selectedColor === c.name
                            ? 'border-[#171717] bg-[#171717] text-[#F7F5F1]'
                            : 'border-[#ffffff] bg-[#F2EFE9] text-[#171717] hover:border-[#171717]'
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-black/20"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* SIZE / DIMENSION SELECTOR */}
              <div className="mb-6">
                <span className="block text-xs font-bold text-[#171717] mb-2">
                  سایز / ابعاد:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 text-xs font-medium border transition-all ${
                        selectedSize === s
                          ? 'border-[#171717] bg-[#171717] text-[#F7F5F1]'
                          : 'border-[#ffffff] bg-[#F2EFE9] text-[#171717] hover:border-[#171717]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* ACTIONS */}
            <div className="space-y-3 pt-4 border-t border-[#ffffff]">

              <div className="flex items-center gap-3">
                <button
                  onClick={handleAdd}
                  className={`flex-grow py-3.5 px-6 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs ${
                    addedSuccess
                      ? 'bg-[#2E4032] text-white'
                      : 'bg-[#171717] hover:bg-[#2C2926] text-[#F7F5F1]'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4 stroke-[2]" />
                  <span>{addedSuccess ? '✓ به سبد اضافه شد' : 'افزودن به سبد خرید'}</span>
                </button>

                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`p-3.5 border transition-all ${
                    isWishlisted
                      ? 'bg-[#6F1D2A] text-white border-[#6F1D2A]'
                      : 'border-[#ffffff] bg-[#F2EFE9] text-[#171717] hover:border-[#171717]'
                  }`}
                  title="علاقه‌مندی"
                >
                  <Heart className={`w-4 h-4 stroke-[2] ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#77736D] pt-2">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-[#B29A6A]" />
                  ارسال اکسپرس به سراسر ایران
                </span>
                <span>موجودی: {product.stock} عدد</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
