'use client';

import React from 'react';
import Link from 'next/link';
import { X, Search, Sparkles, ChevronLeft, ArrowLeft } from 'lucide-react';
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
        <div className="w-screen max-w-xs sm:max-w-sm bg-[#111111] text-white border-l border-white/10 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">

          {/* TOP HEADER */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <Link
              href="/shop/man-sport"
              onClick={onClose}
              className="flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-lg bg-[#B7FF00] text-black flex items-center justify-center font-black text-xs">
                MS
              </span>
              <span className="font-black text-base font-peyda text-white">
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
              <span>چی می‌خوای بپوشی؟</span>
            </button>
          </div>

          {/* MAIN NAVIGATION LINKS */}
          <div className="flex-1 space-y-6 my-2">

            {/* BUILD YOUR FIT SPECIAL LINK */}
            <a
              href="#build-your-fit"
              onClick={onClose}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-[#B7FF00] text-black font-extrabold text-xs font-peyda shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-black" />
                <span>استایل‌ساز (Build Your Fit)</span>
              </div>
              <ArrowLeft className="w-4 h-4" />
            </a>

            {/* CATEGORIES LIST */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#B7FF00] uppercase block">
                دسته‌بندی‌های پوشاک
              </span>
              {MAN_SPORT_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href="#products-section"
                  onClick={onClose}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-xs font-bold font-peyda text-slate-200"
                >
                  <span>{cat.label}</span>
                  <ChevronLeft className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            {/* STYLES LIST */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#2455FF] uppercase block">
                استایل‌ها
              </span>
              {MAN_SPORT_STYLES.map((style) => (
                <a
                  key={style.id}
                  href="#styles-section"
                  onClick={onClose}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 text-xs font-bold font-peyda text-slate-200"
                >
                  <span>{style.title}</span>
                  <span className="text-[9px] font-mono text-slate-500">{style.englishTitle}</span>
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 space-y-2">
              <a
                href="#brands-section"
                onClick={onClose}
                className="block p-2 text-xs font-bold font-peyda text-slate-300 hover:text-[#B7FF00]"
              >
                برندها (+۲۰ برند)
              </a>
              <a
                href="#products-section"
                onClick={onClose}
                className="block p-2 text-xs font-bold font-peyda text-slate-300 hover:text-[#B7FF00]"
              >
                جدیدترین محصولات
              </a>
            </div>

          </div>

          {/* FOOTER CONTACT INFO */}
          <div className="pt-4 border-t border-white/10 text-center text-[10px] font-mono text-slate-500 space-y-1">
            <p>MAN SPORT — IRAN MULTI-BRAND STORE</p>
            <p>پشتیبانی: ۰۲۱-۸۸۸۸۹۹۹۹</p>
          </div>

        </div>
      </div>
    </div>
  );
}
