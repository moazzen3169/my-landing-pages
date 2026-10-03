'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GravityProduct } from '@/data/gravity-data';
import { X, ShoppingBag, Heart, ShieldCheck, Truck } from 'lucide-react';

interface GravityQuickViewModalProps {
  product: GravityProduct | null;
  onClose: () => void;
  onAddToCart: (product: GravityProduct, size?: string) => void;
  onToggleWishlist: (productId: string) => void;
  isWishlisted: boolean;
}

export default function GravityQuickViewModal({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}: GravityQuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>('');

  if (!product) return null;

  const formatPersianPrice = (num: number) => {
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 font-peyda dir-rtl" dir="rtl">
      {/* Modal Box */}
      <div className="bg-white max-w-3xl w-full rounded-xs shadow-2xl overflow-hidden border border-[#E5E5E5] relative animate-scaleUp max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 left-3 z-20 p-2 bg-white/90 hover:bg-[#111111] hover:text-white rounded-full transition-colors"
          aria-label="بستن"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Image (Desktop: 5 cols) */}
          <div className="md:col-span-5 relative aspect-[3/4] bg-[#E8E6E1] rounded-xs overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Details (Desktop: 7 cols) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-5">
            <div>
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
                {product.brand}
              </span>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#111111] leading-snug mb-3">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-xl font-black text-[#111111]">
                  {formatPersianPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#888888] line-through">
                    {formatPersianPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-medium mb-4">
                {product.description}
              </p>

              {/* Material & Fit info */}
              <div className="space-y-1.5 text-xs text-[#555555] bg-[#F8F9FA] p-3 rounded-xs border border-[#E5E5E5] mb-5">
                {product.material && (
                  <p>
                    <strong className="text-[#111111]">جنس پارچه:</strong> {product.material}
                  </p>
                )}
                {product.fit && (
                  <p>
                    <strong className="text-[#111111]">الگو و برش:</strong> {product.fit}
                  </p>
                )}
              </div>

              {/* Sizes Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold text-[#111111] block">
                    انتخاب سایز:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3.5 py-1.5 text-xs font-bold rounded-xs transition-all border ${
                          selectedSize === size
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'bg-white text-[#111111] border-[#D7D4CD] hover:border-[#111111]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#E5E5E5] space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    onAddToCart(product, selectedSize);
                    onClose();
                  }}
                  className="flex-grow py-3.5 bg-[#111111] hover:bg-[#2563EB] text-white font-extrabold text-sm rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} />
                  <span>افزودن به سبد خرید</span>
                </button>

                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`p-3.5 rounded-xs border transition-colors ${
                    isWishlisted
                      ? 'bg-[#2563EB] text-white border-[#2563EB]'
                      : 'bg-white text-[#111111] border-[#D7D4CD] hover:border-[#2563EB] hover:text-[#2563EB]'
                  }`}
                  aria-label="علاقه‌مندی"
                >
                  <Heart size={18} className={isWishlisted ? 'fill-current' : ''} />
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#777777] pt-2">
                <span className="flex items-center gap-1">
                  <Truck size={14} className="text-[#2563EB]" />
                  ارسال سریع به سراسر ایران
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-[#2563EB]" />
                  ۷ روز ضمانت تعویض
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
