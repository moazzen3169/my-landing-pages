'use client';

import React from 'react';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowLeft, ShieldCheck } from 'lucide-react';
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

  // Total price in Toman
  const totalPrice = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const formatToman = (amount: number) => {
    return amount.toLocaleString('fa-IR') + ' تومان';
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs font-peyda animate-fadeIn">

      {/* BACKDROP */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* DRAWER CONTENT */}
      <div className="relative w-full max-w-md bg-[#F7F5F1] h-full shadow-2xl z-10 flex flex-col justify-between border-r border-[#DDD9D2] text-start">

        {/* DRAWER HEADER */}
        <div className="p-5 border-b border-[#DDD9D2] flex items-center justify-between bg-[#F2EFE9]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#171717] stroke-[1.75]" />
            <span className="text-base font-extrabold text-[#171717]">
              سبد خرید شما ({items.length} کالا)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#171717] hover:bg-[#DDD9D2] transition-colors"
            title="بستن"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {/* ITEMS LIST */}
        <div className="flex-grow p-5 overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <div className="py-20 text-center text-[#77736D]">
              <ShoppingBag className="w-12 h-12 stroke-[1] mx-auto mb-3 opacity-40" />
              <p className="text-sm font-bold text-[#171717]">سبد خرید شما خالی است</p>
              <p className="text-xs mt-1">محصولات مورد علاقه خود را اضافه کنید.</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={idx}
                className="p-3 bg-[#F2EFE9] border border-[#DDD9D2] flex gap-3 text-start relative"
              >
                {/* IMAGE */}
                <div className="relative w-20 h-20 bg-[#EFECE6] shrink-0">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover p-1"
                    unoptimized
                  />
                </div>

                {/* DETAILS */}
                <div className="flex-grow pr-1 flex flex-col justify-between">
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-[#77736D] uppercase">
                      {item.product.brand}
                    </span>
                    <h4 className="text-xs font-bold text-[#171717] line-clamp-1">
                      {item.product.name}
                    </h4>
                    <span className="block text-[11px] text-[#77736D] mt-0.5">
                      رنگ: {item.selectedColor} | سایز: {item.selectedSize}
                    </span>
                  </div>

                  {/* PRICE & QUANTITY */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#DDD9D2]/60">
                    <span className="text-xs font-black text-[#171717] font-vazir">
                      {formatToman(item.product.price * item.quantity)}
                    </span>

                    <div className="flex items-center border border-[#DDD9D2] bg-[#F7F5F1]">
                      <button
                        onClick={() => onUpdateQuantity(idx, -1)}
                        className="p-1 text-[#171717] hover:bg-[#DDD9D2]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-bold font-vazir text-[#171717]">
                        {item.quantity.toLocaleString('fa-IR')}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(idx, 1)}
                        className="p-1 text-[#171717] hover:bg-[#DDD9D2]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* REMOVE BUTTON */}
                <button
                  onClick={() => onRemoveItem(idx)}
                  className="absolute top-2 left-2 text-[#77736D] hover:text-[#6F1D2A]"
                  title="حذف"
                >
                  <Trash2 className="w-3.5 h-3.5 stroke-[1.75]" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* DRAWER FOOTER */}
        {items.length > 0 && (
          <div className="p-5 bg-[#F2EFE9] border-t border-[#DDD9D2] space-y-4">

            {/* FREE SHIPPING GUARANTEE */}
            <div className="flex items-center gap-2 text-xs text-[#2E4032] font-semibold bg-[#2E4032]/10 p-2.5 border border-[#2E4032]/20">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>ارسال رایگان بیمه شده به سراسر کشور</span>
            </div>

            {/* TOTAL */}
            <div className="flex items-baseline justify-between text-start pt-1">
              <span className="text-xs font-bold text-[#77736D]">مبلغ قابل پرداخت:</span>
              <span className="text-lg font-black text-[#171717] font-vazir">
                {formatToman(totalPrice)}
              </span>
            </div>

            {/* CHECKOUT BUTTON */}
            <button
              onClick={() => alert('پیش‌نمایش پرداخت ثبت سفارش در لندینگ پیج. این بخش در فاز پایانی به درگاه بانک متصل می‌شود.')}
              className="w-full py-4 bg-[#171717] hover:bg-[#2C2926] text-[#F7F5F1] text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>تکمیل و ثبت نهایی سفارش</span>
              <ArrowLeft className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
