'use client';

import React, { useState } from 'react';
import Header from '@/components/navigation/Header';
import CartDrawer from '@/components/cart/CartDrawer';
import SearchOverlay from '@/components/search/SearchOverlay';
import CustomCursor from '@/components/ui/CustomCursor';
import { Footer } from '@/components/editorial/FooterAndSections';
import { CartProvider, useCart } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <SmoothScrollProvider>
          <CustomCursor />
          <div className="min-h-screen flex flex-col bg-[#F3F2EE] text-[#111111]">
            <Header onOpenSearch={() => setIsSearchOpen(true)} />

            <main className="flex-grow pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
              <CartMainContent />
            </main>

            <Footer />
            <CartDrawer />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          </div>
        </SmoothScrollProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

function CartMainContent() {
  const { cart, updateQuantity, removeFromCart, subtotal, amountForFreeShipping } = useCart();

  if (cart.length === 0) {
    return (
      <div className="py-20 text-center space-y-6">
        <ShoppingBag className="w-16 h-16 text-[#D7D4CD] mx-auto" />
        <h1 className="text-3xl font-light font-display uppercase tracking-wider">YOUR BAG IS EMPTY</h1>
        <p className="text-sm text-[#77746E]">Discover our contemporary menswear collection.</p>
        <Link
          href="/shop"
          className="inline-block bg-[#111111] text-white px-8 py-4 text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-[#0B0B0B] transition-colors"
        >
          EXPLORE SHOP
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="border-b border-[#D7D4CD] pb-6">
        <span className="text-[10px] font-mono tracking-[0.3em] text-[#77746E] uppercase">ORDER SUMMARY</span>
        <h1 className="text-4xl font-light font-display uppercase tracking-tight text-[#111111] mt-1">
          SHOPPING BAG
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex space-x-6 p-6 bg-white border border-[#D7D4CD]">
              <div className="relative w-24 h-32 bg-[#E8E6E1] flex-shrink-0">
                <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-base font-bold uppercase text-[#111111]">{item.product.name}</h3>
                    <button onClick={() => removeFromCart(item.id)} className="text-[#77746E] hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs font-mono text-[#77746E] mt-1">
                    COLOR: {item.selectedColor.name} / SIZE: {item.selectedSize}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center border border-[#D7D4CD] bg-[#F3F2EE]">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2">
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-4 text-xs font-mono font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="text-sm font-mono font-bold">{formatPrice(item.product.price * item.quantity)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Summary */}
        <div className="lg:col-span-4 p-8 bg-white border border-[#D7D4CD] space-y-6">
          <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-[#111111]">SUMMARY</h3>

          <div className="space-y-3 text-xs font-mono border-b border-[#D7D4CD] pb-4">
            <div className="flex justify-between text-[#77746E]">
              <span>SUBTOTAL</span>
              <span className="text-[#111111] font-bold">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[#77746E]">
              <span>EXPRESS SHIPPING</span>
              <span>{amountForFreeShipping === 0 ? 'FREE' : '€25'}</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-base font-bold">
            <span>TOTAL</span>
            <span className="font-mono">{formatPrice(subtotal + (amountForFreeShipping === 0 ? 0 : 25))}</span>
          </div>

          <button
            onClick={() => alert('Proceeding to checkout prototype!')}
            className="w-full bg-[#111111] text-white py-4 text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-[#0B0B0B] flex items-center justify-center space-x-2"
          >
            <span>PROCEED TO CHECKOUT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
