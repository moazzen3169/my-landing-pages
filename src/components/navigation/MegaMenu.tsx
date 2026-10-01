'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES = [
  {
    name: 'SUITS & TAILORING',
    href: '/shop/suits',
    subtitle: 'Precision cuts, Italian fabrics, structured elegance.',
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'BLAZERS & JACKETS',
    href: '/shop/blazers',
    subtitle: 'Contemporary silhouettes for versatile modern layering.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'SHIRTS & SILK',
    href: '/shop/shirts',
    subtitle: 'Egyptian cotton twills and sandwashed silk crepes.',
    image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'TROUSERS & CHINOS',
    href: '/shop/trousers',
    subtitle: 'High-waisted, single pleat, tropical wool and twill.',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'KNITWEAR & HOODIES',
    href: '/shop/hoodies',
    subtitle: 'Grade-A Mongolian cashmere and 480GSM French terry.',
    image: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'THE LOOKBOOK',
    href: '/lookbook',
    subtitle: 'Explore interactive editorial outfits and looks.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeImage, setActiveImage] = useState(CATEGORIES[0].image);
  const [activeSubtitle, setActiveSubtitle] = useState(CATEGORIES[0].subtitle);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: '0%' }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] bg-[#0B0B0B] text-[#F3F2EE] flex flex-col justify-between overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-[#181818]">
            <span className="text-[10px] tracking-[0.3em] text-[#77746E] uppercase">
              NOIRÉ NAVIGATION
            </span>
            <button
              onClick={onClose}
              className="group flex items-center space-x-2 text-[11px] tracking-[0.2em] text-[#D7D4CD] hover:text-white transition-colors"
            >
              <span>CLOSE</span>
              <div className="p-1.5 rounded-full border border-[#2B2B2B] group-hover:border-white transition-colors">
                <X className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Main Grid */}
          <div className="max-w-7xl w-full mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 flex-1 items-center">
            {/* Category Navigation Links */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <span className="text-[10px] tracking-[0.3em] text-[#77746E] uppercase mb-2">
                COLLECTIONS & CATEGORIES
              </span>

              {CATEGORIES.map((cat, idx) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.5 }}
                  onMouseEnter={() => {
                    setActiveImage(cat.image);
                    setActiveSubtitle(cat.subtitle);
                  }}
                >
                  <Link
                    href={cat.href}
                    onClick={onClose}
                    className="group flex items-center justify-between py-2 border-b border-[#181818] hover:border-[#D7D4CD] transition-colors"
                  >
                    <span className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wider font-display text-[#D7D4CD] group-hover:text-white transition-colors">
                      {cat.name}
                    </span>
                    <ArrowUpRight className="w-6 h-6 text-[#77746E] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Dynamic Preview Card */}
            <div className="lg:col-span-5 hidden lg:flex flex-col space-y-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#181818] border border-[#2B2B2B]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeImage}
                      alt="Category Preview"
                      fill
                      className="object-cover"
                      sizes="500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 z-10">
                  <p className="text-[11px] tracking-[0.2em] text-[#A58B68] uppercase">EDITORIAL EDIT</p>
                  <p className="text-sm text-[#D7D4CD] font-light leading-relaxed">{activeSubtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="px-8 py-6 border-t border-[#181818] flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#77746E] tracking-[0.2em] gap-4">
            <div className="flex space-x-6 uppercase">
              <Link href="/shop" onClick={onClose} className="hover:text-white transition-colors">ALL PRODUCTS</Link>
              <Link href="/lookbook" onClick={onClose} className="hover:text-white transition-colors">LOOKBOOK</Link>
              <Link href="/collections/new" onClick={onClose} className="hover:text-white transition-colors">BRAND STORY</Link>
            </div>
            <span>© 2026 NOIRÉ PARIS</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
