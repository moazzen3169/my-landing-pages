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
      <div
        className={`relative z-10 max-w-7xl w-full mx-auto flex items-center justify-between text-[#D7D4CD] ${
          isPersian
            ? 'text-xs md:text-sm font-medium font-peyda tracking-normal'
            : 'text-[11px] tracking-[0.25em] uppercase font-mono'
        }`}
      >
        <div className="flex items-center space-x-3 space-x-reverse">
          <span className="w-2 h-2 rounded-full bg-[#A58B68] animate-pulse" />
          <span>{isPersian ? 'کالکشن بهار / تابستان ۲۰۲۶' : 'S/S 2026 CAMPAIGN'}</span>
        </div>
        <span className="hidden sm:inline">
          {isPersian ? 'پوشاک معماری مردانه' : 'ARCHITECTURAL MENSWEAR'}
        </span>
      </div>

      {/* Center Hero Typography & Editorial Headline */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-12 flex flex-col items-start justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={
            isPersian
              ? 'text-xs sm:text-sm font-medium font-peyda text-[#A58B68] tracking-normal mb-3'
              : 'text-xs sm:text-sm font-mono tracking-[0.3em] text-[#A58B68] uppercase mb-4'
          }
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
              className={
                isPersian
                  ? 'text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-peyda text-white leading-[1.18] tracking-normal whitespace-pre-line py-1'
                  : 'text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter uppercase font-display text-white leading-[0.9]'
              }
            >
              {activeLook.title}
            </motion.h1>
          </AnimatePresence>
        </div>

        <p
          className={`max-w-xl text-[#D7D4CD] mt-6 mb-8 ${
            isPersian
              ? 'text-sm md:text-base font-normal font-peyda leading-relaxed tracking-normal max-w-lg'
              : 'text-sm md:text-base font-light leading-relaxed'
          }`}
        >
          {activeLook.description}
        </p>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <Link
            href="/shop"
            className={`group relative inline-flex items-center space-x-4 space-x-reverse bg-white text-[#111111] px-8 py-4 font-bold transition-transform hover:scale-105 ${
              isPersian
                ? 'text-xs md:text-sm font-medium font-peyda tracking-normal'
                : 'text-[11px] tracking-[0.25em] uppercase'
            }`}
            data-cursor-text={isPersian ? 'مشاهده' : 'EXPLORE'}
          >
            <span>{isPersian ? 'مشاهده کالکشن' : 'EXPLORE COLLECTION'}</span>
            <ArrowRight
              className={`w-4 h-4 transition-transform ${
                isPersian
                  ? 'rotate-180 group-hover:-translate-x-1'
                  : 'group-hover:translate-x-1'
              }`}
            />
          </Link>

          <button
            onClick={handleAddLookToCart}
            className={`group inline-flex items-center space-x-3 space-x-reverse border border-[#D7D4CD]/40 hover:border-white bg-[#0B0B0B]/50 backdrop-blur-md px-6 py-4 text-white transition-all ${
              isPersian
                ? 'text-xs md:text-sm font-medium font-peyda tracking-normal'
                : 'text-[11px] font-medium tracking-[0.25em] uppercase'
            }`}
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
              className={`group text-right p-3 transition-all ${
                isPersian ? 'border-l-2' : 'border-r-2'
              } ${
                isActive
                  ? 'border-[#A58B68] bg-white/5 backdrop-blur-sm'
                  : 'border-transparent hover:border-[#D7D4CD]/40'
              }`}
            >
              <div
                className={`flex justify-between items-center text-[#77746E] mb-1 ${
                  isPersian
                    ? 'text-xs font-peyda tracking-normal'
                    : 'text-[10px] font-mono tracking-widest uppercase'
                }`}
              >
                <span>{look.number}</span>
                <span className="font-mono">€{look.price}</span>
              </div>
              <h4
                className={`truncate group-hover:text-[#A58B68] transition-colors ${
                  isPersian
                    ? 'text-xs md:text-sm font-medium font-peyda text-white tracking-normal'
                    : 'text-xs md:text-sm font-medium tracking-wider text-white'
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
