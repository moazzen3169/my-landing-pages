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
  { label: 'دراپ محدود', href: '#limited-drop' },
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
        <div className="fixed inset-0 z-50 overflow-hidden font-peyda" dir="rtl">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B1220]/70 backdrop-blur-sm"
          />

          {/* DRAWER PANEL */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 max-w-full w-80 bg-[#F8FAFC] flex flex-col z-10 text-right border-l border-[#CBD5E1]/80"
          >
            {/* HEADER */}
            <div className="p-5 bg-[#FFFFFF] border-b border-[#CBD5E1]/60 flex items-center justify-between">
              <div>
                <span className="text-xl font-bold font-peyda tracking-[0.2em] text-[#0B1220]">
                  SOLEA
                </span>
                <span className="block text-[9px] font-mono tracking-widest text-[#8FA9C4]">
                  PREMIUM SNEAKERS
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#F1F5F9] hover:bg-[#0B1220] hover:text-[#F8FAFC] flex items-center justify-center transition-colors border border-[#CBD5E1]/50 text-[#0B1220]"
                aria-label="بستن منو"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* NAV LINKS */}
            <div className="flex-1 overflow-y-auto p-5 space-y-1">
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-3 px-4 rounded-2xl hover:bg-[#F1F5F9] transition-colors text-sm font-semibold text-[#0B1220]"
                >
                  <span>{item.label}</span>
                  <ChevronLeft className="w-4 h-4 text-[#64748B]" />
                </a>
              ))}
            </div>

            {/* FOOTER ACTIONS */}
            <div className="p-5 bg-[#FFFFFF] border-t border-[#CBD5E1]/60 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenSearch();
                }}
                className="w-full py-3 rounded-2xl bg-[#F1F5F9] hover:bg-[#CBD5E1]/50 text-[#0B1220] border border-[#CBD5E1]/50 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>جستجو در اسنیکرها...</span>
              </button>

              <Link
                href="/"
                onClick={onClose}
                className="w-full py-3 rounded-2xl bg-[#0B1220] hover:bg-[#16233A] text-[#F8FAFC] text-xs font-semibold transition-colors flex items-center justify-center gap-2"
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
