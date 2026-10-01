'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ArrowLeft } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

const NAV_ITEMS = [
  { label: 'فروشگاه', href: '#products' },
  { label: 'جدیدترین‌ها', href: '#products' },
  { label: 'پرفروش‌ها', href: '#products' },
  { label: 'کفش زنانه', href: '#products' },
  { label: 'کفش مردانه', href: '#products' },
  { label: 'یونیسکس', href: '#products' },
  { label: 'برندها', href: '#brands' },
  { label: 'داستان ما', href: '#editorial' },
  { label: 'دراپ محدود', href: '#limited' },
];

export default function MobileDrawer({
  isOpen,
  onClose,
  onOpenSearch
}: MobileDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-vazir" dir="rtl">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* DRAWER PANEL */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 max-w-full w-80 bg-[#FAFAF7] shadow-2xl flex flex-col z-10 text-right border-l border-black/5"
          >
            {/* HEADER */}
            <div className="p-5 bg-white border-b border-black/10 flex items-center justify-between">
              <div>
                <span className="text-xl font-black font-peyda tracking-[0.2em] text-[#111111]">
                  SOLEA
                </span>
                <span className="block text-[9px] font-mono tracking-widest text-[#A89B84]">
                  PREMIUM SNEAKERS
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
                aria-label="بستن منو"
              >
                <X className="w-5 h-5 text-[#111111]" />
              </button>
            </div>

            {/* NAV LINKS */}
            <div className="flex-1 overflow-y-auto p-5 space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-3 px-4 rounded-2xl hover:bg-black/5 transition-colors text-sm font-bold text-[#111111]"
                >
                  <span>{item.label}</span>
                  <ChevronLeft className="w-4 h-4 text-[#888880]" />
                </a>
              ))}
            </div>

            {/* FOOTER ACTIONS */}
            <div className="p-5 bg-white border-t border-black/10 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenSearch();
                }}
                className="w-full py-3 rounded-2xl bg-black/5 hover:bg-black/10 text-[#111111] text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <span>جستجو در اسنیکرها...</span>
              </button>

              <Link
                href="/"
                onClick={onClose}
                className="w-full py-3 rounded-2xl bg-[#111111] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <span>بازگشت به کاتالوگ لندینگ‌ها</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
