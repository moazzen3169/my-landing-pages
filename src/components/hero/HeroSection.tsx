'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { NOIRE_LOOKS } from '@/data/noire';
import { Look } from '@/types';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

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
    <section className="relative w-full min-h-screen bg-[#0B0B0B] text-[#F3F2EE] flex flex-col justify-between pt-28 pb-10 sm:pb-14 overflow-hidden select-none">
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
              className="object-cover object-center filter grayscale-[15%] contrast-105"
              sizes="100vw"
            />
            {/* Editorial Vignette & Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/35 to-[#0B0B0B]/60" />
            <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Top Meta Information */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between text-[#D7D4CD]">
        <div
          className={`flex items-center gap-2.5 ${
            isPersian
              ? 'text-xs md:text-sm font-medium font-peyda'
              : 'text-[11px] tracking-[0.25em] uppercase font-mono'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#A58B68] animate-pulse shrink-0" />
          <span>{isPersian ? 'کالکشن بهار / تابستان ۲۰۲۶' : 'S/S 2026 CAMPAIGN'}</span>
        </div>
        <span
          className={`hidden sm:inline ${
            isPersian
              ? 'text-xs md:text-sm font-medium font-peyda'
              : 'text-[11px] tracking-[0.25em] uppercase font-mono'
          }`}
        >
          {isPersian ? 'پوشاک معماری مردانه' : 'ARCHITECTURAL MENSWEAR'}
        </span>
      </div>

      {/* Center Hero Typography & Editorial Headline */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16 my-auto py-10 md:py-16 flex flex-col items-start justify-center text-start">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={
            isPersian
              ? 'text-xs sm:text-sm font-medium font-peyda text-[#A58B68] mb-3'
              : 'text-xs sm:text-sm font-mono tracking-[0.3em] text-[#A58B68] uppercase mb-4'
          }
        >
          {activeLook.subtitle} — {activeLook.number}
        </motion.p>

        {/* Huge Editorial Scale Headline */}
        <div className="relative overflow-hidden w-full max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeLook.title}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
              className={
                isPersian
                  ? 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-peyda text-white leading-[1.2] whitespace-pre-line py-1 text-start'
                  : 'text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter uppercase font-display text-white leading-[0.9] text-start'
              }
            >
              {activeLook.title}
            </motion.h1>
          </AnimatePresence>
        </div>

        <p
          className={`max-w-xl text-[#D7D4CD] mt-5 sm:mt-6 mb-8 text-start ${
            isPersian
              ? 'text-sm md:text-base font-normal font-peyda leading-relaxed'
              : 'text-sm md:text-base font-light leading-relaxed'
          }`}
        >
          {activeLook.description}
        </p>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <Link
            href="/shop"
            className={`group relative inline-flex items-center gap-3.5 bg-white text-[#111111] px-7 sm:px-8 py-3.5 sm:py-4 font-bold transition-all hover:bg-[#E8E6E1] hover:scale-[1.02] active:scale-[0.98] ${
              isPersian
                ? 'text-xs md:text-sm font-medium font-peyda'
                : 'text-[11px] tracking-[0.25em] uppercase'
            }`}
            data-cursor-text={isPersian ? 'مشاهده' : 'EXPLORE'}
          >
            <span>{isPersian ? 'مشاهده کالکشن' : 'EXPLORE COLLECTION'}</span>
            <ArrowRight
              className={`w-4 h-4 shrink-0 transition-transform ${
                isPersian
                  ? 'rotate-180 group-hover:-translate-x-1'
                  : 'group-hover:translate-x-1'
              }`}
            />
          </Link>

          <button
            onClick={handleAddLookToCart}
            className={`group inline-flex items-center gap-3 border border-[#D7D4CD]/40 hover:border-white bg-[#0B0B0B]/60 backdrop-blur-md px-6 sm:px-7 py-3.5 sm:py-4 text-white transition-all hover:scale-[1.02] active:scale-[0.98] ${
              isPersian
                ? 'text-xs md:text-sm font-medium font-peyda'
                : 'text-[11px] font-medium tracking-[0.25em] uppercase'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-[#A58B68] shrink-0" />
            <span>
              {isPersian
                ? `افزودن کامل استایل (${formatPrice(activeLook.price, 'TMN', isPersian)})`
                : `ADD FULL LOOK (${formatPrice(activeLook.price, 'TMN', isPersian)})`}
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Hero Look Selector Switcher */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16 border-t border-[#2B2B2B] pt-5 sm:pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {looks.map((look, index) => {
          const isActive = index === activeLookIndex;
          return (
            <button
              key={look.id}
              onClick={() => setActiveLookIndex(index)}
              className={`group text-start p-3 sm:p-3.5 transition-all border-s-2 ${
                isActive
                  ? 'border-[#A58B68] bg-white/5 backdrop-blur-sm'
                  : 'border-transparent hover:border-[#D7D4CD]/30 hover:bg-white/[0.02]'
              }`}
            >
              <div
                className={`flex justify-between items-center text-[#77746E] mb-1.5 ${
                  isPersian
                    ? 'text-xs font-peyda'
                    : 'text-[10px] font-mono tracking-widest uppercase'
                }`}
              >
                <span>{look.number}</span>
                <span className="font-mono text-[#A58B68]">{formatPrice(look.price, 'TMN', isPersian)}</span>
              </div>
              <h4
                className={`truncate transition-colors ${
                  isActive ? 'text-[#A58B68]' : 'text-white group-hover:text-[#D7D4CD]'
                } ${
                  isPersian
                    ? 'text-xs md:text-sm font-medium font-peyda'
                    : 'text-xs md:text-sm font-medium tracking-wider'
                }`}
              >
                {look.title.replace(/\n/g, ' ')}
              </h4>
            </button>
          );
        })}
      </div>
    </section>
  );
}
