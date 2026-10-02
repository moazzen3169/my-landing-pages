'use client';

import React from 'react';
import Image from 'next/image';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { LuxuryProduct } from '@/data/persian-luxury-women';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistedProducts: LuxuryProduct[];
  onRemoveWishlist: (id: string) => void;
  onQuickView: (product: LuxuryProduct) => void;
}

export default function WishlistModal({
  isOpen,
  onClose,
  wishlistedProducts,
  onRemoveWishlist,
  onQuickView,
}: WishlistModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-peyda animate-fadeIn">

      {/* BACKDROP */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* CONTAINER */}
      <div className="relative w-full max-w-2xl bg-[#F7F5F1] border border-[#DDD9D2] p-6 shadow-2xl z-10 max-h-[85vh] overflow-y-auto text-start">

        {/* HEADER */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DDD9D2] mb-6">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#6F1D2A] fill-current" />
            <h3 className="text-lg font-extrabold text-[#171717]">
              علاقه‌مندی‌های شما ({wishlistedProducts.length} کالا)
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#171717] hover:bg-[#DDD9D2]"
            title="بستن"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {/* LIST */}
        {wishlistedProducts.length === 0 ? (
          <div className="py-12 text-center text-[#77736D]">
            <Heart className="w-10 h-10 stroke-[1] mx-auto mb-2 opacity-30" />
            <p className="text-xs font-bold text-[#171717]">هیچ کالایی در لیست علاقه قرار ندارد.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {wishlistedProducts.map((p) => (
              <div
                key={p.id}
                className="bg-[#F2EFE9] p-3 border border-[#DDD9D2] flex gap-3 relative"
              >
                <div className="relative w-20 h-20 bg-[#EFECE6] shrink-0">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-cover p-1"
                    unoptimized
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <span className="block text-[10px] font-mono text-[#77736D] font-bold uppercase">
                      {p.brand}
                    </span>
                    <h4 className="text-xs font-bold text-[#171717] line-clamp-1">
                      {p.name}
                    </h4>
                    <span className="block text-xs font-black text-[#171717] font-vazir mt-0.5">
                      {p.priceFormatted}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      onQuickView(p);
                      onClose();
                    }}
                    className="text-[11px] font-bold text-[#B29A6A] hover:underline self-start mt-2"
                  >
                    مشاهده جزئیات ←
                  </button>
                </div>

                <button
                  onClick={() => onRemoveWishlist(p.id)}
                  className="absolute top-2 left-2 text-[#77736D] hover:text-[#6F1D2A]"
                  title="حذف از لیست"
                >
                  <Trash2 className="w-3.5 h-3.5 stroke-[1.75]" />
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
