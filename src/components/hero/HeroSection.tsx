'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { NOIRE_LOOKS } from '@/data/noire';
import { Look } from '@/types';
import { useCart } from '@/context/CartContext';

interface HeroSectionProps {
  looks?: Look[];
  isPersian?: boolean;
}

export default function HeroSection({
  looks = NOIRE_LOOKS,
  isPersian = false,
}: HeroSectionProps) {
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const { addToCart } = useCart();

  const activeLook = looks[activeLookIndex] || looks[0];

  const handleAddLookToCart = () => {
    activeLook.products.forEach((product) => {
      addToCart(product);
    });
  };

  return (
    <section className="relative w-full min-h-screen bg-[#0B0B0B] text-[#F3F2EE] flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 overflow-hidden select-none">
      {/* Background Image Container with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLook.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.65, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <Image
              src={activeLook.image}
              alt={activeLook.title}
              fill
              priority
              className="object-cover object-center filter grayscale-[20%] contrast-105"
              sizes="100vw"
            />
            {/* Editorial Vignette & Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-[#0B0B0B]/60" />
            <div className="absolute inset-0 bg-radial-vignette opacity-50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Meta Information */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-center justify-between text-[11px] tracking-[0.25em] text-[#D7D4CD] uppercase">
        <div className="flex items-center space-x-3 space-x-reverse">
          <span className="w-2 h-2 rounded-full bg-[#A58B68] animate-pulse" />
          <span>{isPersian ? 'کالکشن بهار / تابستان ۲۰۲۶' : 'S/S 2026 CAMPAIGN'}</span>
        </div>
        <span className="hidden sm:inline font-mono">
          {isPersian ? 'پوشاک معماری مردانه' : 'ARCHITECTURAL MENSWEAR'}
        </span>
      </div>

      {/* Center Hero Typography & Editorial Headline */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12 flex flex-col items-start justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm font-mono tracking-[0.3em] text-[#A58B68] uppercase mb-4"
        >
          {activeLook.subtitle} — {activeLook.number}
        </motion.p>

        {/* Huge Editorial Scale Headline */}
        <div className="relative overflow-hidden w-full">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeLook.title}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter uppercase font-display text-white leading-[0.9]"
            >
              {activeLook.title}
            </motion.h1>
          </AnimatePresence>
        </div>

        <p className="max-w-xl text-sm md:text-base text-[#D7D4CD] font-light leading-relaxed mt-6 mb-8">
          {activeLook.description}
        </p>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <Link
            href="/shop"
            className="group relative inline-flex items-center space-x-4 space-x-reverse bg-white text-[#111111] px-8 py-4 text-[11px] font-bold tracking-[0.25em] uppercase transition-transform hover:scale-105"
            data-cursor-text={isPersian ? 'مشاهده' : 'EXPLORE'}
          >
            <span>{isPersian ? 'مشاهده کالکشن' : 'EXPLORE COLLECTION'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={handleAddLookToCart}
            className="group inline-flex items-center space-x-3 space-x-reverse border border-[#D7D4CD]/40 hover:border-white bg-[#0B0B0B]/50 backdrop-blur-md px-6 py-4 text-[11px] font-medium tracking-[0.25em] uppercase text-white transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-[#A58B68]" />
            <span>
              {isPersian
                ? `افزودن کامل استایل (€${activeLook.price})`
                : `ADD FULL LOOK (€${activeLook.price})`}
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Hero Look Selector Switcher */}
      <div className="relative z-10 max-w-7xl w-full mx-auto border-t border-[#2B2B2B] pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {looks.map((look, index) => {
          const isActive = index === activeLookIndex;
          return (
            <button
              key={look.id}
              onClick={() => setActiveLookIndex(index)}
              className={`group text-right p-3 transition-all border-r-2 ${
                isActive
                  ? 'border-[#A58B68] bg-white/5 backdrop-blur-sm'
                  : 'border-transparent hover:border-[#D7D4CD]/40'
              }`}
            >
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-[#77746E] uppercase mb-1">
                <span>{look.number}</span>
                <span>€{look.price}</span>
              </div>
              <h4 className="text-xs md:text-sm font-medium tracking-wider text-white truncate group-hover:text-[#A58B68] transition-colors">
                {look.title}
              </h4>
            </button>
          );
        })}
      </div>
    </section>
  );
}
