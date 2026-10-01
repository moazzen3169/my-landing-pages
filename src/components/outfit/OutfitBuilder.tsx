'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';
import { NOIRE_PRODUCTS } from '@/data/noire';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

interface OutfitBuilderProps {
  productsList?: Product[];
  isPersian?: boolean;
}

export default function OutfitBuilder({
  productsList = NOIRE_PRODUCTS,
  isPersian = false,
}: OutfitBuilderProps) {
  const { addToCart } = useCart();

  const JACKETS = productsList.filter(
    (p) => p.category === 'blazers' || p.category === 'jackets' || p.category === 'overshirts'
  );
  const SHIRTS = productsList.filter(
    (p) => p.category === 'shirts' || p.category === 't-shirts' || p.category === 'knitwear'
  );
  const TROUSERS = productsList.filter((p) => p.category === 'trousers');
  const ACCESSORIES = productsList.filter((p) => p.category === 'accessories');

  const [selectedJacket, setSelectedJacket] = useState<Product>(JACKETS[0] || productsList[0]);
  const [selectedShirt, setSelectedShirt] = useState<Product>(SHIRTS[0] || productsList[1]);
  const [selectedTrouser, setSelectedTrouser] = useState<Product>(TROUSERS[0] || productsList[2]);
  const [selectedAccessory, setSelectedAccessory] = useState<Product>(
    ACCESSORIES[0] || productsList[11] || productsList[3]
  );

  const [activeStep, setActiveStep] = useState<'jacket' | 'shirt' | 'trouser' | 'accessory'>('jacket');

  const totalOutfitPrice =
    selectedJacket.price + selectedShirt.price + selectedTrouser.price + selectedAccessory.price;

  const handleAddOutfitToCart = () => {
    addToCart(selectedJacket);
    addToCart(selectedShirt);
    addToCart(selectedTrouser);
    addToCart(selectedAccessory);
  };

  const getStepLabel = (key: string) => {
    if (isPersian) {
      if (key === 'jacket') return '۰۱ کت';
      if (key === 'shirt') return '۰۲ پیراهن';
      if (key === 'trouser') return '۰۳ شلوار';
      return '۰۴ اکسسوری';
    }
    if (key === 'jacket') return '01 JACKET';
    if (key === 'shirt') return '02 SHIRT';
    if (key === 'trouser') return '03 TROUSER';
    return '04 ACCESSORY';
  };

  return (
    <section className="section-padding container-editorial font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#D7D4CD] pb-6 sm:pb-8 gap-6">
        <div className="text-start">
          <span
            className={
              isPersian
                ? 'text-xs font-medium text-[#77746E] font-peyda'
                : 'text-[10px] font-mono tracking-[0.3em] text-[#77746E] uppercase'
            }
          >
            {isPersian ? 'تنظیم‌کننده اختصاصی استایل' : 'CONFIGURATOR'}
          </span>
          <h2
            className={
              isPersian
                ? 'text-3xl sm:text-5xl font-bold font-peyda text-[#111111] leading-tight mt-2'
                : 'text-4xl md:text-6xl font-light tracking-tight uppercase font-display text-[#111111] mt-2'
            }
          >
            {isPersian ? 'استایل شخصی خود را بسازید' : 'BUILD YOUR LOOK'}
          </h2>
        </div>
        <p
          className={`text-[#77746E] text-start ${
            isPersian ? 'max-w-md text-xs sm:text-sm font-normal font-peyda leading-relaxed' : 'max-w-sm text-sm font-light leading-relaxed'
          }`}
        >
          {isPersian
            ? 'چینش کامل استایل معاصر با پیش‌نمایش زنده و تناسبات دقیق معماری.'
            : 'Curate a full contemporary wardrobe setup with real-time architectural proportion preview.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Model Preview */}
        <div className="lg:col-span-6 relative aspect-[3/4] w-full bg-[#E8E6E1] border border-[#D7D4CD] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedJacket.id + selectedShirt.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="relative w-full h-full"
            >
              <Image
                src={selectedJacket.images[0]}
                alt={selectedJacket.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5 z-10 text-start">
            <p
              className={
                isPersian
                  ? 'text-xs font-medium text-[#A58B68] font-peyda'
                  : 'text-[10px] font-mono tracking-[0.25em] text-[#A58B68] uppercase'
              }
            >
              {isPersian ? 'ترکیب انتخاب‌شده' : 'SELECTED OUTFIT'}
            </p>
            <div className="flex justify-between items-end gap-4">
              <span className={isPersian ? 'text-lg sm:text-xl font-bold font-peyda' : 'text-xl font-light font-display'}>
                {isPersian ? 'سیلوئت کامل نوآر' : 'THE COMPLETE NOIRÉ SILHOUETTE'}
              </span>
              <span className="text-2xl font-mono text-white shrink-0">
                {formatPrice(totalOutfitPrice, selectedJacket.currency)}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Layer Selector Tabs */}
        <div className="lg:col-span-6 space-y-8 text-start">
          {/* Layer Tabs */}
          <div
            className={`grid grid-cols-4 border-b border-[#D7D4CD] pb-2 gap-2 ${
              isPersian ? 'text-xs font-peyda' : 'text-[10px] font-mono tracking-[0.2em] uppercase'
            }`}
          >
            {[
              { key: 'jacket', label: getStepLabel('jacket'), current: selectedJacket },
              { key: 'shirt', label: getStepLabel('shirt'), current: selectedShirt },
              { key: 'trouser', label: getStepLabel('trouser'), current: selectedTrouser },
              { key: 'accessory', label: getStepLabel('accessory'), current: selectedAccessory },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveStep(tab.key as any)}
                className={`text-start pb-3 transition-colors ${
                  activeStep === tab.key
                    ? 'border-b-2 border-[#111111] text-[#111111] font-bold'
                    : 'text-[#77746E] hover:text-[#111111]'
                }`}
              >
                <div>{tab.label}</div>
                <div className="text-[10px] text-[#A58B68] truncate mt-0.5">{tab.current.name}</div>
              </button>
            ))}
          </div>

          {/* Layer Options Selection */}
          <div className="space-y-4">
            <p
              className={
                isPersian
                  ? 'text-xs font-bold font-peyda text-[#77746E]'
                  : 'text-xs font-mono text-[#77746E] uppercase tracking-wider'
              }
            >
              {isPersian ? `انتخاب ${getStepLabel(activeStep)}` : `SELECT ${activeStep.toUpperCase()}`}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {(activeStep === 'jacket'
                ? JACKETS
                : activeStep === 'shirt'
                ? SHIRTS
                : activeStep === 'trouser'
                ? TROUSERS
                : ACCESSORIES
              ).map((product) => {
                const isSelected =
                  (activeStep === 'jacket' && selectedJacket.id === product.id) ||
                  (activeStep === 'shirt' && selectedShirt.id === product.id) ||
                  (activeStep === 'trouser' && selectedTrouser.id === product.id) ||
                  (activeStep === 'accessory' && selectedAccessory.id === product.id);

                return (
                  <button
                    key={product.id}
                    onClick={() => {
                      if (activeStep === 'jacket') setSelectedJacket(product);
                      if (activeStep === 'shirt') setSelectedShirt(product);
                      if (activeStep === 'trouser') setSelectedTrouser(product);
                      if (activeStep === 'accessory') setSelectedAccessory(product);
                    }}
                    className={`flex items-center gap-3.5 p-3 border text-start transition-all bg-[#FFFFFF] ${
                      isSelected
                        ? 'border-[#111111] shadow-sm ring-1 ring-[#111111]'
                        : 'border-[#D7D4CD] hover:border-[#77746E]'
                    }`}
                  >
                    <div className="relative w-14 h-18 bg-[#E8E6E1] shrink-0">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="60px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-medium text-[#111111] truncate ${isPersian ? 'font-peyda' : ''}`}>
                        {product.name}
                      </p>
                      <p className="text-xs font-mono text-[#77746E] mt-1">
                        {formatPrice(product.price, product.currency)}
                      </p>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#111111] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Outfit Summary Box */}
          <div className="p-6 bg-[#E8E6E1] border border-[#D7D4CD] space-y-4">
            <span
              className={
                isPersian
                  ? 'text-xs font-bold font-peyda text-[#77746E]'
                  : 'text-[10px] font-mono tracking-[0.25em] text-[#77746E] uppercase'
              }
            >
              {isPersian ? 'جزئیات اجزای استایل' : 'OUTFIT BREAKDOWN'}
            </span>
            <div className={`space-y-2 text-xs text-[#111111] ${isPersian ? 'font-peyda' : ''}`}>
              <div className="flex justify-between gap-2">
                <span>{selectedJacket.name}</span>
                <span className="font-mono text-end shrink-0">{formatPrice(selectedJacket.price, selectedJacket.currency)}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>{selectedShirt.name}</span>
                <span className="font-mono text-end shrink-0">{formatPrice(selectedShirt.price, selectedShirt.currency)}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>{selectedTrouser.name}</span>
                <span className="font-mono text-end shrink-0">{formatPrice(selectedTrouser.price, selectedTrouser.currency)}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span>{selectedAccessory.name}</span>
                <span className="font-mono text-end shrink-0">{formatPrice(selectedAccessory.price, selectedAccessory.currency)}</span>
              </div>
            </div>

            <div
              className={`pt-3 border-t border-[#D7D4CD] flex justify-between items-center text-sm font-bold ${
                isPersian ? 'font-peyda' : ''
              }`}
            >
              <span>{isPersian ? 'قیمت کل استایل' : 'TOTAL LOOK PRICE'}</span>
              <span className="text-base font-mono">
                {formatPrice(totalOutfitPrice, selectedJacket.currency)}
              </span>
            </div>

            <button
              onClick={handleAddOutfitToCart}
              className={`w-full bg-[#111111] text-[#F3F2EE] py-4 font-bold hover:bg-[#0B0B0B] transition-colors flex items-center justify-center gap-3 mt-4 ${
                isPersian
                  ? 'text-xs md:text-sm font-medium font-peyda'
                  : 'text-[11px] tracking-[0.25em] uppercase font-mono'
              }`}
            >
              <ShoppingBag className="w-4 h-4 text-[#A58B68] shrink-0" />
              <span>
                {isPersian ? 'افزودن کامل استایل به سبد خرید' : 'ADD COMPLETE LOOK TO BAG'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
