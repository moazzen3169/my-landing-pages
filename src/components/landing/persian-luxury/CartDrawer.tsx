'use client';

import React from 'react';
import Image from 'next/image';
import { X, Trash2 } from 'lucide-react';
import { LuxuryProduct } from '@/data/persian-luxury-women';

export interface CartItem {
  product: LuxuryProduct;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs font-peyda text-[#111111] dir-rtl">
      <div className="w-full max-w-md bg-[#FFFFFF] h-full flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">

        {/* HEADER */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#E5E5E5] mb-6">
            <h2 className="text-lg font-light text-[#000000]">سبد خرید</h2>
            <button onClick={onClose} className="p-1 text-[#000000] hover:opacity-60">
              <X className="w-5 h-5 stroke-[1.25]" />
            </button>
          </div>

          {/* ITEMS LIST */}
          {items.length > 0 ? (
            <div className="space-y-6">
              {items.map((item, idx) => (
                <div key={idx} className="flex gap-4 pb-6 border-b border-[#E5E5E5] text-start">
                  <div className="relative w-20 aspect-[3/4] bg-[#F5F5F5] shrink-0">
                    <Image src={item.product.images[0]} alt="" fill className="object-cover" unoptimized />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="block text-[10px] font-mono text-[#666666] uppercase" dir="ltr">{item.product.brand}</span>
                      <h4 className="text-xs font-normal text-[#000000] line-clamp-1">{item.product.name}</h4>
                      <p className="text-[11px] text-[#666666] mt-1">
                        رنگ: {item.selectedColor}
                        {item.product.category === 'shoes' && item.selectedSize && (
                          <span> | سایز: {item.selectedSize}</span>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#E5E5E5] text-xs">
                        <button onClick={() => onUpdateQuantity(idx, -1)} className="px-2 py-0.5 hover:bg-[#FAFAFA]">-</button>
                        <span className="px-2 font-mono">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(idx, 1)} className="px-2 py-0.5 hover:bg-[#FAFAFA]">+</button>
                      </div>
                      <span className="text-xs font-normal text-[#000000]">{item.product.priceFormatted}</span>
                      <button onClick={() => onRemoveItem(idx)} className="text-[#999999] hover:text-[#000000]">
                        <Trash2 className="w-3.5 h-3.5 stroke-[1.25]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-[#666666] py-12 text-center">سبد خرید شما خالی است.</p>
          )}
        </div>

        {/* FOOTER */}
        {items.length > 0 && (
          <div className="pt-6 border-t border-[#E5E5E5] space-y-4 text-start">
            <div className="flex justify-between text-xs font-normal text-[#000000]">
              <span>جمع کل:</span>
              <span>{total.toLocaleString('fa-IR')} تومان</span>
            </div>
            <button className="w-full py-3.5 bg-[#000000] hover:bg-[#111111] text-white text-xs font-normal tracking-wider transition-colors rounded-none">
              تکمیل سفارش و پرداخت
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
