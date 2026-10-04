'use client';

import React from 'react';
import { ManSportProduct } from '@/data/man-sport';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';

interface CartItem {
  product: ManSportProduct;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" dir="rtl">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 left-0 max-w-full flex">
        <div className="w-screen max-w-md bg-[#111111] text-white border-r border-white/10 flex flex-col justify-between p-6">

          {/* HEADER */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#B7FF00]" />
              <h2 className="text-lg font-black font-peyda text-white">سبد خرید</h2>
              <span className="text-xs font-mono font-bold bg-white/10 text-[#B7FF00] px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* CART ITEMS LIST */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 my-2 pr-1">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <p className="text-sm font-bold font-peyda text-slate-400">سبد خرید شما خالی است.</p>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-[#B7FF00] text-black font-peyda text-xs font-bold"
                >
                  مشاهده محصولات
                </button>
              </div>
            ) : (
              cartItems.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-16 h-20 object-cover rounded-xl bg-black shrink-0"
                  />
                  <div className="flex-1 overflow-hidden space-y-1">
                    <span className="text-[10px] font-mono text-[#B7FF00] uppercase font-bold block">
                      {product.brand}
                    </span>
                    <h4 className="text-xs font-bold font-peyda text-white truncate">
                      {product.name}
                    </h4>
                    <span className="text-xs font-mono font-bold text-slate-300 block">
                      {formatPrice(product.price)}
                    </span>

                    {/* QUANTITY CONTROLS */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="flex items-center gap-2 bg-white/10 rounded-lg px-2 py-1">
                        <button
                          onClick={() => onUpdateQuantity(product.id, -1)}
                          className="hover:text-[#B7FF00]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-bold">{quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, 1)}
                          className="hover:text-[#B7FF00]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="text-slate-500 hover:text-[#FF5A1F] transition-colors p-1"
                        title="حذف"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* FOOTER & CHECKOUT */}
          {cartItems.length > 0 && (
            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-peyda text-slate-400">جمع کل:</span>
                <span className="text-xl font-black font-mono text-[#B7FF00]">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <button
                onClick={() => alert('انتقال به درگاه پرداخت...')}
                className="w-full py-4 rounded-2xl bg-[#B7FF00] hover:bg-white text-black font-extrabold font-peyda text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>تکمیل خرید</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
