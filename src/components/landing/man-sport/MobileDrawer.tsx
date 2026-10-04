'use client';

import React from 'react';
import Link from 'next/link';
import { X, Search } from 'lucide-react';
import { MAN_SPORT_CATEGORIES, MAN_SPORT_STYLES } from '@/data/man-sport';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export default function MobileDrawer({
  isOpen,
  onClose,
  onOpenSearch,
}: MobileDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden overflow-hidden" dir="rtl">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* DRAWER CONTAINER */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-xs sm:max-w-sm bg-[#111111] text-white border-l border-white/10 flex flex-col justify-between p-6 overflow-y-auto">

          {/* TOP HEADER */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <Link
              href="/shop/man-sport"
              onClick={onClose}
              className="flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-full bg-[#B7FF00] text-black flex items-center justify-center font-bold text-xs">
                MS
              </span>
              <span className="font-bold text-base font-peyda text-white">
                MAN<span className="text-[#B7FF00]">SPORT</span>
              </span>
            </Link>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* SEARCH SHORTCUT BUTTON */}
          <div className="my-4">
            <button
              onClick={() => {
                onClose();
                onOpenSearch();
              }}
              className="w-full flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-xs font-peyda font-medium"
            >
              <Search className="w-4 h-4 text-[#B7FF00]" />
              <span>جستجو...</span>
            </button>
          </div>

          {/* MAIN NAVIGATION LINKS */}
          <div className="flex-1 space-y-6 my-2">
            <div className="space-y-2">
              <a
                href="#products-section"
                onClick={onClose}
                className="block p-2 text-sm font-bold font-peyda text-slate-200 hover:text-[#B7FF00]"
              >
                محصولات
              </a>
              <a
                href="#styles-section"
                onClick={onClose}
                className="block p-2 text-sm font-bold font-peyda text-slate-200 hover:text-[#B7FF00]"
              >
                استایل‌ها
              </a>
              <a
                href="#brands-section"
                onClick={onClose}
                className="block p-2 text-sm font-bold font-peyda text-slate-200 hover:text-[#B7FF00]"
              >
                برندها
              </a>
            </div>
          </div>

          {/* FOOTER */}
          <div className="pt-4 border-t border-white/10 text-center text-[10px] font-mono text-slate-500">
            <p>MAN SPORT</p>
          </div>

        </div>
      </div>
    </div>
  );
}
