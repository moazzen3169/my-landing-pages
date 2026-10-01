'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isPersian?: boolean;
}

export default function MegaMenu({ isOpen, onClose, isPersian = false }: MegaMenuProps) {
  const CATEGORIES = [
    {
      name: isPersian ? 'کت و شلوار و تشریفات' : 'SUITS & TAILORING',
      href: '/shop/suits',
      subtitle: isPersian ? 'برش‌های دقیق، پارچه‌های ایتالیایی، وقار و ساختار.' : 'Precision cuts, Italian fabrics, structured elegance.',
      image: '/images/banners/Group-242.jpg'
    },
    {
      name: isPersian ? 'کت تک و کاپشن' : 'BLAZERS & JACKETS',
      href: '/shop/blazers',
      subtitle: isPersian ? 'سیلوئت‌های معاصر برای لایه‌بندی شیک و کاربردی.' : 'Contemporary silhouettes for versatile modern layering.',
      image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png'
    },
    {
      name: isPersian ? 'پیراهن و ابریشم' : 'SHIRTS & SILK',
      href: '/shop/shirts',
      subtitle: isPersian ? 'کتان‌های کج‌راه مصری و ابریشم‌های شسته شده.' : 'Egyptian cotton twills and sandwashed silk crepes.',
      image: '/images/Men-shirts/g-star-waffle-henley-relaxed-t-shirt-white.png'
    },
    {
      name: isPersian ? 'شلوار و پارچه‌ای' : 'TROUSERS & CHINOS',
      href: '/shop/trousers',
      subtitle: isPersian ? 'فاق بلند، تک پیلی، پشم استوایی و کتان.' : 'High-waisted, single pleat, tropical wool and twill.',
      image: '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png'
    },
    {
      name: isPersian ? 'بافت و هودی' : 'KNITWEAR & HOODIES',
      href: '/shop/hoodies',
      subtitle: isPersian ? 'کشمیر درجه یک مغولی و دورس ۴۸۰ گرمی.' : 'Grade-A Mongolian cashmere and 480GSM French terry.',
      image: '/images/men-hoodies/g-star-premium-core-hooded-sweater-grey.png'
    },
    {
      name: isPersian ? 'لوک‌بوک اختصاصی' : 'THE LOOKBOOK',
      href: '/lookbook',
      subtitle: isPersian ? 'کشف استایل‌ها و ترکیب‌های ادیتوریال تعاملی.' : 'Explore interactive editorial outfits and looks.',
      image: '/images/Men-panets/g-star-bend-loose-jeans-dark-blue.png'
    }
  ];

  const [activeImage, setActiveImage] = useState(CATEGORIES[0].image);
  const [activeSubtitle, setActiveSubtitle] = useState(CATEGORIES[0].subtitle);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: '0%' }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] bg-[#0B0B0B] text-[#F3F2EE] flex flex-col justify-between overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 sm:px-12 py-6 border-b border-[#181818]">
            <span
              className={
                isPersian
                  ? 'text-xs font-medium text-[#77746E] font-peyda'
                  : 'text-[10px] tracking-[0.3em] text-[#77746E] uppercase font-mono'
              }
            >
              {isPersian ? 'ناوبری و کالکشن‌های نوآر' : 'NOIRÉ NAVIGATION'}
            </span>
            <button
              onClick={onClose}
              className={`group flex items-center gap-2.5 text-[#D7D4CD] hover:text-white transition-colors ${
                isPersian ? 'text-xs font-medium font-peyda' : 'text-[11px] tracking-[0.2em] font-mono uppercase'
              }`}
            >
              <span>{isPersian ? 'بستن' : 'CLOSE'}</span>
              <div className="p-1.5 rounded-full border border-[#2B2B2B] group-hover:border-white transition-colors">
                <X className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Main Grid */}
          <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 flex-1 items-center">
            {/* Category Navigation Links */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <span
                className={
                  isPersian
                    ? 'text-xs font-medium text-[#77746E] font-peyda mb-2'
                    : 'text-[10px] tracking-[0.3em] text-[#77746E] uppercase font-mono mb-2'
                }
              >
                {isPersian ? 'دسته‌بندی‌های اختصاصی' : 'COLLECTIONS & CATEGORIES'}
              </span>

              {CATEGORIES.map((cat, idx) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, x: isPersian ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.04, duration: 0.4 }}
                  onMouseEnter={() => {
                    setActiveImage(cat.image);
                    setActiveSubtitle(cat.subtitle);
                  }}
                >
                  <Link
                    href={cat.href}
                    onClick={onClose}
                    className="group flex items-center justify-between py-3 border-b border-[#181818] hover:border-[#D7D4CD] transition-colors"
                  >
                    <span
                      className={`text-[#D7D4CD] group-hover:text-white transition-colors ${
                        isPersian
                          ? 'text-lg sm:text-2xl md:text-3xl font-medium font-peyda leading-relaxed'
                          : 'text-2xl sm:text-3xl md:text-4xl font-light tracking-wider font-display'
                      }`}
                    >
                      {cat.name}
                    </span>
                    <ArrowUpRight
                      className={`w-5 h-5 text-[#77746E] group-hover:text-white transition-transform ${
                        isPersian
                          ? 'rotate-[-90deg] group-hover:-translate-x-1 group-hover:-translate-y-1'
                          : 'group-hover:translate-x-1 group-hover:-translate-y-1'
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Dynamic Preview Card */}
            <div className="lg:col-span-5 hidden lg:flex flex-col gap-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#181818] border border-[#2B2B2B]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.35 }}
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
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5 z-10">
                  <p
                    className={
                      isPersian
                        ? 'text-xs font-medium text-[#A58B68] font-peyda'
                        : 'text-[11px] tracking-[0.2em] text-[#A58B68] uppercase font-mono'
                    }
                  >
                    {isPersian ? 'پیش‌نمایش اختصاصی' : 'EDITORIAL EDIT'}
                  </p>
                  <p
                    className={`text-[#D7D4CD] leading-relaxed ${
                      isPersian ? 'text-xs md:text-sm font-normal font-peyda' : 'text-sm font-light'
                    }`}
                  >
                    {activeSubtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className={`px-6 sm:px-12 py-6 border-t border-[#181818] flex flex-col sm:flex-row justify-between items-center text-[#77746E] gap-4 ${
              isPersian
                ? 'text-xs font-medium font-peyda'
                : 'text-[11px] tracking-[0.2em] uppercase font-mono'
            }`}
          >
            <div className="flex gap-6">
              <Link href="/shop" onClick={onClose} className="hover:text-white transition-colors">
                {isPersian ? 'همه محصولات' : 'ALL PRODUCTS'}
              </Link>
              <Link href="/lookbook" onClick={onClose} className="hover:text-white transition-colors">
                {isPersian ? 'لوک‌بوک' : 'LOOKBOOK'}
              </Link>
              <Link href="/shop" onClick={onClose} className="hover:text-white transition-colors">
                {isPersian ? 'داستان برند' : 'BRAND STORY'}
              </Link>
            </div>
            <span className="font-mono text-[11px]">© 2026 NOIRÉ PARIS</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
