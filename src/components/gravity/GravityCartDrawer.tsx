'use client';

import React from 'react';
import Image from 'next/image';
import { X, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface GravityCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function GravityCartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}: GravityCartDrawerProps) {
  if (!isOpen) return null;

  const formatPersianPrice = (num: number) => {
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 font-peyda dir-rtl" dir="rtl">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 left-0 max-w-md w-full bg-[#F8F9FA] shadow-2xl flex flex-col justify-between border-r border-[#E5E5E5] z-10 animate-slideInLeft">
        {/* Header */}
        <div className="p-5 bg-white border-b border-[#E5E5E5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#111111]" />
            <h2 className="text-base font-extrabold text-[#111111]">
              سبد خرید شما ({cartItems.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#666666] hover:text-[#111111] transition-colors rounded-xs"
            aria-label="بستن"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-grow overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 text-[#777777]">
              <ShoppingBag size={48} className="stroke-[1] mb-3 text-[#CCCCCC]" />
              <p className="text-sm font-bold text-[#111111] mb-1">
                سبد خرید شما خالی است
              </p>
              <p className="text-xs max-w-xs mb-6">
                می‌توانید با مشاهده کالکشن‌های جدید، محصول مورد نظر خود را انتخاب کنید.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#111111] text-white text-xs font-bold rounded-xs hover:bg-[#333333] transition-colors"
              >
                شروع خرید
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-3 bg-white border border-[#E5E5E5] rounded-xs"
              >
                <div className="relative w-16 h-20 bg-[#E8E6E1] rounded-xs overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-grow min-w-0">
                  <h3 className="text-xs font-bold text-[#111111] truncate mb-1">
                    {item.name}
                  </h3>
                  <span className="text-xs font-black text-[#111111] block mb-2">
                    {formatPersianPrice(item.price)}
                  </span>

                  <div className="flex items-center justify-between">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-[#D7D4CD] rounded-xs bg-[#F3F2EE] text-xs font-bold">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2.5 py-0.5 hover:bg-[#E5E5E5] transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 py-0.5 bg-white border-x border-[#D7D4CD]">
                        {item.quantity.toLocaleString('fa-IR')}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2.5 py-0.5 hover:bg-[#E5E5E5] transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1 text-[#888888] hover:text-[#DC2626] transition-colors"
                      aria-label="حذف"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-5 bg-white border-t border-[#E5E5E5] space-y-4">
            <div className="flex items-center justify-between text-sm font-bold text-[#111111]">
              <span>مبلغ قابل پرداخت:</span>
              <span className="text-lg font-black text-[#111111]">
                {formatPersianPrice(totalPrice)}
              </span>
            </div>

            <p className="text-[10px] text-[#777777]">
              هزینه ارسال بر اساس آدرس تحویل در مرحله نهایی محاسبه خواهد شد.
            </p>

            <button
              onClick={() => alert('جهت تکمیل سفارش به درگاه پرداخت منتقل می‌شوید.')}
              className="w-full py-3.5 bg-[#111111] hover:bg-[#333333] text-white font-extrabold text-sm rounded-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>ادامه فرایند خرید</span>
              <ArrowLeft size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
