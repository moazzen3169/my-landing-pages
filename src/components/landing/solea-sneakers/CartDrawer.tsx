'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Trash2, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const targetFreeShipping = 20000000; // 20 million tomans threshold for free shipping
  const isFreeShipping = subtotal >= targetFreeShipping || cart.length === 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-peyda" dir="rtl">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B1220]/70 backdrop-blur-sm"
          />

          {/* DRAWER PANEL */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 left-0 max-w-full w-full sm:w-[440px] bg-[#F8FAFC] flex flex-col z-10 text-right border-r border-[#CBD5E1]/80"
          >
            {/* HEADER */}
            <div className="p-5 sm:p-6 bg-[#ffffffffffff] border-b border-[#CBD5E1]/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F1F5F9] border border-[#CBD5E1]/50 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-[#0B1220]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0B1220]">
                    سبد خرید اسنیکر
                  </h3>
                  <span className="text-xs text-[#475569]">
                    {cart.length} آیتم انتخابی
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#F1F5F9] hover:bg-[#0B1220] hover:text-[#F8FAFC] flex items-center justify-center transition-colors border border-[#CBD5E1]/50 text-[#0B1220]"
                aria-label="بستن"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* FREE SHIPPING PROGRESS BAR */}
            <div className="bg-[#F1F5F9] px-5 py-3 border-b border-[#CBD5E1]/60 flex items-center gap-2 text-xs text-[#0B1220]">
              <Truck className="w-4 h-4 text-[#0B1220] shrink-0" />
              {isFreeShipping ? (
                <span className="font-medium text-emerald-800">
                  تبریک! سفارش شما شامل <strong>ارسال رایگان اکسپرس</strong> است.
                </span>
              ) : (
                <span>
                  با افزودن{' '}
                  <strong>
                    {(targetFreeShipping - subtotal).toLocaleString('fa-IR')} تومان
                  </strong>{' '}
                  دیگر، ارسال رایگان بگیرید.
                </span>
              )}
            </div>

            {/* CART ITEMS LIST */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="py-20 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F1F5F9] border border-[#CBD5E1]/50 mx-auto flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-[#64748B]" />
                  </div>
                  <p className="text-sm text-[#475569] font-medium">
                    سبد خرید شما در حال حاضر خالی است.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0B1220] text-[#F8FAFC] text-xs font-semibold hover:bg-[#16233A] transition-colors"
                  >
                    <span>مشاهده محصولات</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#ffffffffffff] border border-[#CBD5E1]/60 flex gap-4 items-center justify-between"
                  >
                    <div className="relative w-20 h-20 bg-[#F1F5F9] rounded-xl overflow-hidden shrink-0 border border-[#CBD5E1]/40">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono text-[#8FA9C4] uppercase font-bold block">
                        {item.product.brand}
                      </span>
                      <h4 className="text-xs font-bold text-[#0B1220] truncate">
                        {item.product.name}
                      </h4>
                      <div className="text-[11px] text-[#475569] mt-1 flex items-center gap-2">
                        <span>سایز: {item.selectedSize}</span>
                        <span>•</span>
                        <span>{item.selectedColor.name}</span>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-bold text-[#0B1220]">
                          {(item.product.price * item.quantity).toLocaleString(
                            'fa-IR'
                          )}{' '}
                          تومان
                        </span>

                        {/* QUANTITY BUTTONS */}
                        <div className="flex items-center border border-[#CBD5E1]/60 rounded-lg overflow-hidden bg-[#F1F5F9]">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity - 1
                              )
                            }
                            className="px-2 py-0.5 text-xs font-bold text-[#0B1220] hover:bg-[#CBD5E1]/50"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-bold font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity + 1
                              )
                            }
                            className="px-2 py-0.5 text-xs font-bold text-[#0B1220] hover:bg-[#CBD5E1]/50"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#64748B] hover:text-red-600 p-1 transition-colors self-start"
                      aria-label="حذف"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER & CHECKOUT */}
            {cart.length > 0 && (
              <div className="p-5 sm:p-6 bg-[#ffffffffffff] border-t border-[#CBD5E1]/60 space-y-4">
                <div className="space-y-2 text-xs text-[#475569]">
                  <div className="flex justify-between">
                    <span>جمع جزء محصولات:</span>
                    <span className="font-bold text-[#0B1220]">
                      {subtotal.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>هزینه ارسال:</span>
                    <span className="font-bold text-emerald-800">
                      {isFreeShipping ? 'رایگان' : '۷۵,۰۰۰ تومان'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#0B1220] pt-2 border-t border-[#CBD5E1]/40 font-peyda">
                    <span>مبلغ قابل پرداخت:</span>
                    <span className="text-base text-[#0B1220]">
                      {(
                        subtotal + (isFreeShipping ? 0 : 75000)
                      ).toLocaleString('fa-IR')}{' '}
                      تومان
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      alert('تکمیل سفارش به زودی فعال می‌شود.');
                    }}
                    className="w-full py-3.5 rounded-2xl bg-[#0B1220] hover:bg-[#16233A] text-[#F8FAFC] text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>تکمیل و ثبت سفارش</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>


              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
