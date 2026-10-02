'use client';

import React from 'react';
import Image from 'next/image';
import { X, Trash2, Eye } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs font-peyda text-[#111111] dir-rtl">
      <div className="w-full max-w-2xl bg-[#FFFFFF] p-6 sm:p-8 max-h-[85vh] flex flex-col justify-between overflow-y-auto">

        {/* HEADER */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#E5E5E5] mb-6">
            <h2 className="text-lg font-light text-[#000000]">لیست علاقه‌مندی‌ها</h2>
            <button onClick={onClose} className="p-1 text-[#000000] hover:opacity-60">
              <X className="w-5 h-5 stroke-[1.25]" />
            </button>
          </div>

          {/* LIST */}
          {wishlistedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {wishlistedProducts.map((product) => (
                <div key={`wish-${product.id}`} className="flex gap-4 pb-4 border-b border-[#E5E5E5] text-start">
                  <div className="relative w-20 aspect-[3/4] bg-[#F5F5F5] shrink-0">
                    <Image src={product.images[0]} alt="" fill className="object-cover" unoptimized />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="block text-[10px] font-mono text-[#666666] uppercase" dir="ltr">{product.brand}</span>
                      <h4 className="text-xs font-normal text-[#000000] line-clamp-1">{product.name}</h4>
                      <span className="text-xs text-[#000000] mt-1 block">{product.priceFormatted}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => {
                          onQuickView(product);
                          onClose();
                        }}
                        className="px-3 py-1 bg-[#000000] text-white text-[10px] flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3 stroke-[1.25]" />
                        <span>مشاهده</span>
                      </button>
                      <button
                        onClick={() => onRemoveWishlist(product.id)}
                        className="p-1 text-[#999999] hover:text-[#000000]"
                        title="حذف"
                      >
                        <Trash2 className="w-3.5 h-3.5 stroke-[1.25]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-[#666666] py-12 text-center">هیچ کالایی در لیست علاقه‌مندی‌ها وجود ندارد.</p>
          )}
        </div>

      </div>
    </div>
  );
}
