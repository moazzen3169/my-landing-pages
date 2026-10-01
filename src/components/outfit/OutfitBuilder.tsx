'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';
import { NOIRE_PRODUCTS } from '@/data/noire';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

// Filter products for each outfit layer category
const JACKETS = NOIRE_PRODUCTS.filter((p) => p.category === 'blazers' || p.category === 'jackets' || p.category === 'overshirts');
const SHIRTS = NOIRE_PRODUCTS.filter((p) => p.category === 'shirts' || p.category === 't-shirts' || p.category === 'knitwear');
const TROUSERS = NOIRE_PRODUCTS.filter((p) => p.category === 'trousers');
const ACCESSORIES = NOIRE_PRODUCTS.filter((p) => p.category === 'accessories');

export default function OutfitBuilder() {
  const { addToCart } = useCart();

  const [selectedJacket, setSelectedJacket] = useState<Product>(JACKETS[0] || NOIRE_PRODUCTS[0]);
  const [selectedShirt, setSelectedShirt] = useState<Product>(SHIRTS[0] || NOIRE_PRODUCTS[1]);
  const [selectedTrouser, setSelectedTrouser] = useState<Product>(TROUSERS[0] || NOIRE_PRODUCTS[2]);
  const [selectedAccessory, setSelectedAccessory] = useState<Product>(ACCESSORIES[0] || NOIRE_PRODUCTS[11]);

  const [activeStep, setActiveStep] = useState<'jacket' | 'shirt' | 'trouser' | 'accessory'>('jacket');

  const totalOutfitPrice =
    selectedJacket.price + selectedShirt.price + selectedTrouser.price + selectedAccessory.price;

  const handleAddOutfitToCart = () => {
    addToCart(selectedJacket);
    addToCart(selectedShirt);
    addToCart(selectedTrouser);
    addToCart(selectedAccessory);
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#D7D4CD] pb-8">
        <div>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#77746E] uppercase">
            CONFIGURATOR
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight uppercase font-display text-[#111111] mt-2">
            BUILD YOUR LOOK
          </h2>
        </div>
        <p className="max-w-sm text-sm text-[#77746E] font-light mt-4 md:mt-0">
          Curate a full contemporary wardrobe setup with real-time architectural proportion preview.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Model Preview */}
        <div className="lg:col-span-6 relative aspect-[3/4] w-full bg-[#E8E6E1] border border-[#D7D4CD] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedJacket.id + selectedShirt.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <Image
                src={selectedJacket.images[0]}
                alt={selectedJacket.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2 z-10">
            <p className="text-[10px] font-mono tracking-[0.25em] text-[#A58B68] uppercase">
              SELECTED OUTFIT
            </p>
            <div className="flex justify-between items-end">
              <span className="text-xl font-light font-display">THE COMPLETE NOIRÉ SILHOUETTE</span>
              <span className="text-2xl font-mono text-white">{formatPrice(totalOutfitPrice)}</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Layer Selector Tabs */}
        <div className="lg:col-span-6 space-y-8">
          {/* Layer Tabs */}
          <div className="grid grid-cols-4 border-b border-[#D7D4CD] pb-2 text-[10px] font-mono tracking-[0.2em] uppercase">
            {[
              { key: 'jacket', label: '01 JACKET', current: selectedJacket },
              { key: 'shirt', label: '02 SHIRT', current: selectedShirt },
              { key: 'trouser', label: '03 TROUSER', current: selectedTrouser },
              { key: 'accessory', label: '04 ACCESSORY', current: selectedAccessory },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveStep(tab.key as any)}
                className={`text-left pb-3 transition-colors ${
                  activeStep === tab.key
                    ? 'border-b-2 border-[#111111] text-[#111111] font-bold'
                    : 'text-[#77746E] hover:text-[#111111]'
                }`}
              >
                <div>{tab.label}</div>
                <div className="text-[9px] text-[#A58B68] truncate mt-0.5">{tab.current.name}</div>
              </button>
            ))}
          </div>

          {/* Layer Options Selection */}
          <div className="space-y-4">
            <p className="text-xs font-mono text-[#77746E] uppercase tracking-wider">
              SELECT {activeStep.toUpperCase()}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className={`flex items-center space-x-4 p-3 border text-left transition-all bg-[#FFFFFF] ${
                      isSelected
                        ? 'border-[#111111] shadow-sm ring-1 ring-[#111111]'
                        : 'border-[#D7D4CD] hover:border-[#77746E]'
                    }`}
                  >
                    <div className="relative w-16 h-20 bg-[#E8E6E1] flex-shrink-0">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-[#111111] truncate">{product.name}</p>
                      <p className="text-xs font-mono text-[#77746E] mt-1">{formatPrice(product.price)}</p>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#111111]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Outfit Summary Box */}
          <div className="p-6 bg-[#E8E6E1] border border-[#D7D4CD] space-y-3">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#77746E] uppercase">
              OUTFIT BREAKDOWN
            </span>
            <div className="space-y-1.5 text-xs text-[#111111]">
              <div className="flex justify-between">
                <span>{selectedJacket.name}</span>
                <span className="font-mono">{formatPrice(selectedJacket.price)}</span>
              </div>
              <div className="flex justify-between">
                <span>{selectedShirt.name}</span>
                <span className="font-mono">{formatPrice(selectedShirt.price)}</span>
              </div>
              <div className="flex justify-between">
                <span>{selectedTrouser.name}</span>
                <span className="font-mono">{formatPrice(selectedTrouser.price)}</span>
              </div>
              <div className="flex justify-between">
                <span>{selectedAccessory.name}</span>
                <span className="font-mono">{formatPrice(selectedAccessory.price)}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#D7D4CD] flex justify-between items-center text-sm font-bold">
              <span>TOTAL LOOK PRICE</span>
              <span className="text-base font-mono">{formatPrice(totalOutfitPrice)}</span>
            </div>

            <button
              onClick={handleAddOutfitToCart}
              className="w-full bg-[#111111] text-[#F3F2EE] py-4 text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-[#0B0B0B] transition-colors flex items-center justify-center space-x-3 mt-4"
            >
              <ShoppingBag className="w-4 h-4 text-[#A58B68]" />
              <span>ADD COMPLETE LOOK TO BAG</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
