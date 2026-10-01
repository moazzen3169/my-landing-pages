'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/navigation/Header';
import CartDrawer from '@/components/cart/CartDrawer';
import SearchOverlay from '@/components/search/SearchOverlay';
import CustomCursor from '@/components/ui/CustomCursor';
import { Footer } from '@/components/editorial/FooterAndSections';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';
import { NOIRE_LOOKBOOK } from '@/data/noire';
import { formatPrice } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export default function LookbookPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const currentSlide = NOIRE_LOOKBOOK[activeSlideIndex];

  return (
    <CartProvider>
      <WishlistProvider>
        <SmoothScrollProvider>
          <CustomCursor />
          <div className="min-h-screen flex flex-col bg-[#0B0B0B] text-[#F3F2EE]">
            <Header onOpenSearch={() => setIsSearchOpen(true)} isDarkBackground={true} />

            <main className="flex-grow pt-28 pb-20 max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-16">
              {/* Header */}
              <div className="border-b border-[#2B2B2B] pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-start">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.3em] text-[#A58B68] uppercase">
                    INTERACTIVE EDITORIAL
                  </span>
                  <h1 className="text-4xl sm:text-6xl font-light font-display uppercase tracking-tight text-white mt-1">
                    THE LOOKBOOK
                  </h1>
                </div>
                {/* Lookbook Switcher */}
                <div className="flex flex-wrap gap-2.5 font-mono text-xs">
                  {NOIRE_LOOKBOOK.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`px-4 py-2 border uppercase transition-colors ${
                        activeSlideIndex === idx
                          ? 'bg-white text-[#111111] border-white font-bold'
                          : 'border-[#2B2B2B] text-[#77746E] hover:text-white'
                      }`}
                    >
                      SLIDE 0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Hotspot Display Frame */}
              <div className="relative aspect-[16/10] w-full bg-[#181818] border border-[#2B2B2B] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide.id}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />

                    {/* Hotspot Markers */}
                    {currentSlide.hotspots.map((hs) => (
                      <div
                        key={hs.id}
                        className="absolute group z-20"
                        style={{ top: `${hs.y}%`, left: `${hs.x}%` }}
                      >
                        {/* Pulsing Hotspot Icon */}
                        <div className="relative flex items-center justify-center w-8 h-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                          <span className="absolute w-8 h-8 rounded-full bg-white/30 animate-ping" />
                          <span className="relative w-4 h-4 rounded-full bg-white border-2 border-[#111111] shadow-lg" />
                        </div>

                        {/* Hover Popup Box */}
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-56 p-4 bg-[#111111] border border-[#2B2B2B] text-white shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-30 text-start">
                          <p className="text-[9px] font-mono tracking-widest text-[#A58B68] uppercase">
                            FEATURED PIECE
                          </p>
                          <h4 className="text-xs font-medium uppercase font-sans mt-1">
                            {hs.productName}
                          </h4>
                          <p className="text-xs font-mono text-[#D7D4CD] mt-1">
                            {formatPrice(hs.productPrice)}
                          </p>
                          <Link
                            href={`/shop`}
                            className="mt-3 inline-flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase text-white hover:text-[#A58B68] transition-colors"
                          >
                            <span>VIEW PRODUCT</span>
                            <ArrowUpRight className="w-3 h-3 shrink-0" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white z-10 space-y-1 text-start">
                  <p className="text-[10px] font-mono tracking-[0.3em] text-[#A58B68] uppercase">
                    {currentSlide.subtitle}
                  </p>
                  <h3 className="text-2xl sm:text-4xl font-light font-display uppercase tracking-wide">
                    {currentSlide.title}
                  </h3>
                </div>
              </div>
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
