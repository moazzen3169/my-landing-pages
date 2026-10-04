'use client';

import React from 'react';
import { MAN_SPORT_CATEGORIES } from '@/data/man-sport';
import { Shirt, Layers, Zap, Shield, Activity, Sparkles, ArrowLeft } from 'lucide-react';

interface QuickCategoriesProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function QuickCategories({ onSelectCategory }: QuickCategoriesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shirt':
        return <Shirt className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-12 bg-white text-[#111111] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-mono tracking-widest text-[#2455FF] uppercase block mb-1">
              QUICK SHOPPING
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-peyda text-[#111111]">
              دسته‌بندی‌های سریع
            </h2>
          </div>
          <a
            href="#products-section"
            className="inline-flex items-center gap-1.5 text-xs font-bold font-peyda text-slate-700 hover:text-[#2455FF] transition-colors"
          >
            <span>مشاهده همه دسته‌ها</span>
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

        {/* CATEGORY GRID SHORTCUTS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {MAN_SPORT_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href="#products-section"
              onClick={() => onSelectCategory && onSelectCategory(cat.id)}
              className="group relative rounded-2xl border border-slate-200 hover:border-[#111111] bg-[#F5F3EE] hover:bg-white p-4 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between overflow-hidden"
            >
              {/* IMAGE PREVIEW IF AVAILABLE */}
              {cat.image ? (
                <div className="w-full h-28 rounded-xl overflow-hidden bg-slate-200 mb-3 relative">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              ) : (
                <div className="w-full h-28 rounded-xl bg-[#111111] text-[#B7FF00] flex items-center justify-center mb-3">
                  {getIcon(cat.icon)}
                </div>
              )}

              {/* LABEL AND ICON */}
              <div className="flex items-center justify-between mt-auto pt-1">
                <span className="font-bold text-sm font-peyda text-[#111111] group-hover:text-[#2455FF] transition-colors">
                  {cat.label}
                </span>
                <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#B7FF00] text-black border border-slate-200 flex items-center justify-center transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
