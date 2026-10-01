'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { NOIRE_PRODUCTS } from '@/data/noire';
import { formatPrice } from '@/lib/utils';

interface CartDrawerProps {
  isPersian?: boolean;
}

export default function CartDrawer({ isPersian = false }: CartDrawerProps) {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    freeShippingThreshold,
    amountForFreeShipping,
  } = useCart();

  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  // Recommendations to "Complete The Look"
  const recommendations = NOIRE_PRODUCTS.filter(
    (p) => !cart.some((item) => item.product.id === p.id)
  ).slice(0, 2);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[10000] flex justify-end">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Slide Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full max-w-md bg-[#F3F2EE] text-[#111111] h-full shadow-2xl flex flex-col justify-between z-10"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#D7D4CD] flex items-center justify-between bg-white">
              <div className="flex items-center space-x-2 space-x-reverse">
                <ShoppingBag className="w-5 h-5 text-[#111111]" />
                <h3
                  className={`text-[#111111] ${
                    isPersian
                      ? 'text-sm font-bold font-peyda tracking-normal'
                      : 'text-sm font-bold tracking-[0.2em] uppercase font-sans'
                  }`}
                >
                  {isPersian
                    ? `سبد خرید (${cart.reduce((a, c) => a + c.quantity, 0)})`
                    : `SHOPPING BAG (${cart.reduce((a, c) => a + c.quantity, 0)})`}
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-[#77746E] hover:text-[#111111] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div
              className={`px-6 py-3 bg-[#E8E6E1] border-b border-[#D7D4CD] space-y-1.5 ${
                isPersian ? 'text-xs font-peyda' : 'text-[11px] font-mono'
              }`}
            >
              <div className="flex justify-between text-[#111111]">
                {amountForFreeShipping > 0 ? (
                  <span>
                    {isPersian
                      ? `افزودن ${formatPrice(amountForFreeShipping)} دیگر برای ارسال اکسپرس رایگان`
                      : `ADD ${formatPrice(amountForFreeShipping)} MORE FOR COMPLIMENTARY EXPRESS SHIPPING`}
                  </span>
                ) : (
                  <span className="text-green-700 font-bold">
                    {isPersian
                      ? 'شما واجد شرایط ارسال اکسپرس رایگان هستید'
                      : 'YOU QUALIFY FOR FREE EXPRESS SHIPPING'}
                  </span>
                )}
              </div>
              <div className="w-full h-1 bg-[#D7D4CD] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#111111] transition-all duration-500"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Cart Items Scroll Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                  <ShoppingBag className="w-12 h-12 text-[#D7D4CD]" />
                  <p
                    className={`text-[#77746E] ${
                      isPersian ? 'text-sm font-normal font-peyda' : 'text-sm font-light'
                    }`}
                  >
                    {isPersian ? 'سبد خرید شما در حال حاضر خالی است' : 'YOUR BAG IS CURRENTLY EMPTY'}
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className={`bg-[#111111] text-white px-6 py-3 ${
                      isPersian
                        ? 'text-xs font-medium font-peyda'
                        : 'text-[10px] font-bold tracking-[0.2em] uppercase'
                    }`}
                  >
                    {isPersian ? 'شروع خرید' : 'START SHOPPING'}
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex space-x-4 space-x-reverse p-4 bg-white border border-[#D7D4CD]">
                    <div className="relative w-20 h-24 bg-[#E8E6E1] flex-shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4
                            className={`text-[#111111] line-clamp-1 ${
                              isPersian
                                ? 'text-xs font-bold font-peyda tracking-normal'
                                : 'text-xs font-bold uppercase'
                            }`}
                          >
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#77746E] hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p
                          className={`text-[#77746E] mt-1 ${
                            isPersian ? 'text-xs font-peyda' : 'text-[10px] font-mono'
                          }`}
                        >
                          {item.selectedColor.name} / {item.selectedSize}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center border border-[#D7D4CD] bg-[#F3F2EE]">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-[#D7D4CD] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-mono">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-[#D7D4CD] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-mono font-bold">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* Complete The Look Recommendations */}
              {cart.length > 0 && recommendations.length > 0 && (
                <div className="pt-6 border-t border-[#D7D4CD] space-y-3">
                  <span
                    className={
                      isPersian
                        ? 'text-xs font-bold font-peyda text-[#77746E]'
                        : 'text-[10px] font-mono tracking-[0.25em] text-[#77746E] uppercase'
                    }
                  >
                    {isPersian ? 'تکمیل استایل' : 'COMPLETE THE LOOK'}
                  </span>
                  <div className="space-y-2">
                    {recommendations.map((rec) => (
                      <div
                        key={rec.id}
                        className="flex items-center justify-between p-3 bg-[#E8E6E1] border border-[#D7D4CD]"
                      >
                        <div className="flex items-center space-x-3 space-x-reverse">
                          <div className="relative w-10 h-12 bg-white flex-shrink-0">
                            <Image src={rec.images[0]} alt="" fill className="object-cover" />
                          </div>
                          <div>
                            <p className={`text-[#111111] ${isPersian ? 'text-xs font-medium font-peyda' : 'text-xs font-medium'}`}>{rec.name}</p>
                            <p className="text-[10px] font-mono text-[#77746E]">{formatPrice(rec.price)}</p>
                          </div>
                        </div>
                        <Link
                          href={`/product/${rec.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className={`text-[#111111] hover:underline ${
                            isPersian
                              ? 'text-xs font-bold font-peyda'
                              : 'text-[10px] font-bold tracking-widest uppercase'
                          }`}
                        >
                          {isPersian ? 'مشاهده' : 'VIEW'}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-[#D7D4CD] space-y-4">
                <div className={`space-y-1.5 text-xs ${isPersian ? 'font-peyda' : 'font-mono'}`}>
                  <div className="flex justify-between text-[#77746E]">
                    <span>{isPersian ? 'مجموع جزیی' : 'SUBTOTAL'}</span>
                    <span className="text-[#111111] font-bold font-mono">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-[#77746E]">
                    <span>{isPersian ? 'هزینه ارسال' : 'SHIPPING'}</span>
                    <span>
                      {amountForFreeShipping === 0
                        ? isPersian ? 'رایگان' : 'FREE'
                        : isPersian ? 'محاسبه در مرحله نهایی' : 'CALCULATED AT CHECKOUT'}
                    </span>
                  </div>
                </div>

                <div
                  className={`pt-3 border-t border-[#D7D4CD] flex justify-between items-center text-sm font-bold ${
                    isPersian ? 'font-peyda' : ''
                  }`}
                >
                  <span>{isPersian ? 'مجموع برآوردی' : 'ESTIMATED TOTAL'}</span>
                  <span className="text-base font-mono">{formatPrice(subtotal)}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link
                    href="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className={`w-full text-center border border-[#111111] py-3.5 text-[#111111] hover:bg-[#E8E6E1] transition-colors ${
                      isPersian
                        ? 'text-xs font-medium font-peyda'
                        : 'text-[10px] font-bold tracking-[0.2em] uppercase'
                    }`}
                  >
                    {isPersian ? 'مشاهده سبد خرید' : 'VIEW BAG'}
                  </Link>

                  <button
                    onClick={() => alert(isPersian ? 'ورود به مرحله پرداخت نمونه' : 'Proceeding to checkout prototype!')}
                    className={`w-full bg-[#111111] text-[#F3F2EE] py-3.5 hover:bg-[#0B0B0B] transition-colors flex items-center justify-center space-x-2 space-x-reverse ${
                      isPersian
                        ? 'text-xs font-medium font-peyda'
                        : 'text-[10px] font-bold tracking-[0.2em] uppercase'
                    }`}
                  >
                    <span>{isPersian ? 'تکمیل سفارش' : 'CHECKOUT'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isPersian ? 'rotate-180' : ''}`} />
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
