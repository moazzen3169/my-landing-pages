'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, X } from 'lucide-react';
import { GRAVITY_PRODUCTS, GravityProduct } from '@/data/gravity-data';

interface GravitySearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onQuickView: (product: GravityProduct) => void;
}

export default function GravitySearchOverlay({
  isOpen,
  onClose,
  onQuickView,
}: GravitySearchOverlayProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? GRAVITY_PRODUCTS.filter(
        (p) =>
          p.name.includes(query) ||
          p.categoryFa.includes(query) ||
          p.brand.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const formatPersianPrice = (num: number) => {
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md font-peyda dir-rtl flex flex-col p-4 sm:p-8" dir="rtl">
      {/* Search Container */}
      <div className="max-w-3xl mx-auto w-full bg-white rounded-xs p-6 shadow-2xl space-y-6 my-auto">
        {/* Search Header Input */}
        <div className="flex items-center justify-between gap-4 border-b border-[#E5E5E5] pb-4">
          <div className="flex items-center gap-3 flex-grow">
            <Search size={22} className="text-[#2563EB] shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجوی نام محصول، کت، پیراهن، برند..."
              autoFocus
              className="w-full text-base sm:text-lg font-bold text-[#111111] bg-transparent focus:outline-none placeholder:text-[#999999]"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#666666] hover:text-[#111111] transition-colors"
            aria-label="بستن"
          >
            <X size={22} />
          </button>
        </div>

        {/* Popular Search Suggestions if empty */}
        {!query && (
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#777777] uppercase tracking-wider block">
              جستجوهای پرطرفدار:
            </span>
            <div className="flex flex-wrap gap-2">
              {['کت و شلوار سرمه‌ای', 'پیراهن آکسفورد', 'کت تک لینن', 'لوفر چرم', 'هودی مشکی'].map(
                (tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 bg-[#F3F2EE] hover:bg-[#2563EB] hover:text-white text-xs font-medium rounded-xs text-[#111111] transition-colors"
                  >
                    {tag}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="max-h-[60vh] overflow-y-auto space-y-3 pt-2">
            <span className="text-xs font-bold text-[#777777]">
              نتایج برای «{query}» ({results.length}):
            </span>

            {results.length === 0 ? (
              <p className="text-sm text-[#777777] py-8 text-center font-medium">
                محصولی با این مشخصات یافت نشد.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      onQuickView(product);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-2.5 bg-[#F8F9FA] border border-[#E5E5E5] rounded-xs hover:border-[#2563EB] cursor-pointer transition-colors"
                  >
                    <div className="relative w-12 h-16 bg-[#E8E6E1] rounded-xs overflow-hidden shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#2563EB] uppercase block">
                        {product.brand}
                      </span>
                      <h4 className="text-xs font-bold text-[#111111] line-clamp-1">
                        {product.name}
                      </h4>
                      <span className="text-xs font-black text-[#111111] block mt-1">
                        {formatPersianPrice(product.price)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
