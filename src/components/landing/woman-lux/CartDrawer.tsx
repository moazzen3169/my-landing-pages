'use client';

import React from 'react';
import Image from 'next/image';
import { X, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { WomanLuxProduct, ScrollSectionProduct } from '@/data/woman-lux';

export interface CartItemType {
  product: WomanLuxProduct | ScrollSectionProduct;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItemType[];
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

  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const formattedTotalPrice = totalPrice.toLocaleString('fa-IR') + ' تومان';

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs animate-fade-in" onClick={onClose}>
      <div
        className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white text-[#111111] shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="p-4 sm:p-6 border-b border-[#E5E5E5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#111111]" />
            <span className="font-bold font-peyda text-base">سبد خرید شما</span>
            <span className="text-xs text-[#6B6B6B]">({items.length} کالا)</span>
          </div>

          <button onClick={onClose} className="p-1.5 text-[#111111] hover:bg-[#F5F5F5] transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ITEMS LIST */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-16 text-[#6B6B6B]">
              <ShoppingBag className="w-12 h-12 stroke-[1.2]" />
              <p className="text-sm">سبد خرید شما در حال حاضر خالی است.</p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#111111] text-white text-xs font-semibold hover:bg-black"
              >
                مشاهده محصولات
              </button>
            </div>
          ) : (
            items.map((item, index) => {
              const img = ('images' in item.product) ? item.product.images[0] : item.product.image;
              return (
                <div key={index} className="flex gap-4 p-3 bg-[#F5F5F5] relative group">
                  <div className="relative w-20 aspect-[3/4] bg-neutral-200 shrink-0">
                    <Image src={img} alt={item.product.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between text-right">
                    <div>
                      <h4 className="text-xs font-bold text-[#111111] line-clamp-1">{item.product.name}</h4>
                      <p className="text-[11px] text-[#6B6B6B] mt-1">
                        رنگ: {item.selectedColor} | سایز: {item.selectedSize}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#E5E5E5] bg-white">
                        <button
                          onClick={() => onUpdateQuantity(index, -1)}
                          className="px-2 py-0.5 text-xs hover:bg-[#F5F5F5]"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(index, 1)}
                          className="px-2 py-0.5 text-xs hover:bg-[#F5F5F5]"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-semibold text-[#111111]">
                        {item.product.formattedPrice}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(index)}
                    className="absolute top-2 left-2 p-1 text-[#6B6B6B] hover:text-red-600 transition-colors"
                    aria-label="Remove Item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* FOOTER & CHECKOUT */}
        {items.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-[#E5E5E5] space-y-4 bg-white">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#6B6B6B]">مبلغ قابل پرداخت:</span>
              <span className="font-bold text-lg text-[#111111]">{formattedTotalPrice}</span>
            </div>

            <button
              onClick={() => alert('انتقال به درگاه پرداخت ایمن...')}
              className="w-full py-3.5 bg-[#111111] text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-black transition-colors"
            >
              <span>تکمیل و ثبت نهایی سفارش</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
