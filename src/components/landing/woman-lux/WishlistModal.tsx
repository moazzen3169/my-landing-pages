'use client';

import React from 'react';
import Image from 'next/image';
import { X, Trash2, Heart } from 'lucide-react';
import { WomanLuxProduct } from '@/data/woman-lux';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistedProducts: WomanLuxProduct[];
  onRemoveWishlist: (id: string) => void;
  onOpenDetail: (product: WomanLuxProduct) => void;
}

export default function WishlistModal({
  isOpen,
  onClose,
  wishlistedProducts,
  onRemoveWishlist,
  onOpenDetail,
}: WishlistModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs animate-fade-in" onClick={onClose}>
      <div
        className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white text-[#111111] shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="p-4 sm:p-6 border-b border-[#E5E5E5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 fill-[#111111] text-[#111111]" />
            <span className="font-bold font-peyda text-base">علاقه‌مندی‌های شما</span>
            <span className="text-xs text-[#6B6B6B]">({wishlistedProducts.length})</span>
          </div>

          <button onClick={onClose} className="p-1.5 text-[#111111] hover:bg-[#F5F5F5] transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {wishlistedProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16 text-[#6B6B6B]">
              <Heart className="w-12 h-12 stroke-[1.2]" />
              <p className="text-sm">هیچ محصولی در لیست علاقه‌مندی‌ها ثبت نشده است.</p>
            </div>
          ) : (
            wishlistedProducts.map((product) => (
              <div key={product.id} className="flex gap-4 p-3 bg-[#F5F5F5] relative group">
                <div
                  className="relative w-20 aspect-[3/4] bg-neutral-200 shrink-0 cursor-pointer"
                  onClick={() => { onClose(); onOpenDetail(product); }}
                >
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                </div>

                <div className="flex-1 flex flex-col justify-between text-right">
                  <div>
                    <h4
                      className="text-xs font-bold text-[#111111] cursor-pointer hover:underline"
                      onClick={() => { onClose(); onOpenDetail(product); }}
                    >
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#6B6B6B] mt-1">{product.formattedPrice}</p>
                  </div>

                  <button
                    onClick={() => { onClose(); onOpenDetail(product); }}
                    className="w-max py-1 px-3 bg-[#111111] text-white text-[10px] font-semibold hover:bg-black"
                  >
                    مشاهده و خرید
                  </button>
                </div>

                <button
                  onClick={() => onRemoveWishlist(product.id)}
                  className="absolute top-2 left-2 p-1 text-[#6B6B6B] hover:text-red-600 transition-colors"
                  aria-label="Remove"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
