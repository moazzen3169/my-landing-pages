'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, X, ArrowLeft } from 'lucide-react';
import { LuxuryProduct } from '@/data/persian-luxury-women';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  products: LuxuryProduct[];
  onSelectProduct: (product: LuxuryProduct) => void;
}

export default function SearchOverlay({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}: SearchOverlayProps) {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filteredProducts = query.trim()
    ? products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.categoryPersian.toLowerCase().includes(q) ||
          p.descriptionPersian.toLowerCase().includes(q)
        );
      })
    : [];

  const popularSearches = ['پرادا', 'گوچی', 'کیف دوشی', 'کفش پاشنه‌دار', 'DIOR', 'COACH', 'سلین'];

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs font-peyda animate-fadeIn">
      <div className="bg-[#F7F5F1] border-b border-[#ffffff] p-6 max-h-[85vh] overflow-y-auto">
        <div className="max-w-[1200px] mx-auto text-start">

          {/* SEARCH INPUT BAR */}
          <div className="relative flex items-center mb-6">
            <Search className="absolute right-4 w-5 h-5 text-[#77736D] stroke-[1.75]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجوی برند (مانند PRADA)، نام محصول یا دسته‌بندی..."
              autoFocus
              className="w-full py-4 pr-12 pl-12 bg-[#F2EFE9] border border-[#ffffff] text-sm text-[#171717] focus:outline-none focus:border-[#171717] font-peyda"
            />
            <button
              onClick={onClose}
              className="absolute left-3 p-2 text-[#171717] hover:bg-[#ffffff]"
              title="بستن"
            >
              <X className="w-5 h-5 stroke-[2]" />
            </button>
          </div>

          {/* POPULAR SEARCH SUGGESTIONS */}
          {!query && (
            <div className="mb-8">
              <span className="block text-xs font-bold text-[#77736D] mb-3">
                جستجوهای محبوب:
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(s)}
                    className="px-3.5 py-1.5 bg-[#EAE4DA] hover:bg-[#171717] hover:text-[#F7F5F1] text-xs font-medium text-[#171717] border border-[#ffffff] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* RESULTS GRID */}
          {query && (
            <div>
              <div className="text-xs font-bold text-[#77736D] mb-4">
                نتایج یافت شده برای «{query}»: ({filteredProducts.length} کالا)
              </div>

              {filteredProducts.length === 0 ? (
                <div className="py-12 text-center text-xs text-[#77736D]">
                  هیچ محصولی با این عبارت یافت نشد.
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {filteredProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        onSelectProduct(p);
                        onClose();
                      }}
                      className="bg-[#F2EFE9] p-3 border border-[#ffffff] cursor-pointer hover:border-[#171717] transition-all flex flex-col justify-between"
                    >
                      <div className="relative aspect-square w-full bg-[#EFECE6] mb-2">
                        <Image
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          className="object-cover p-2"
                          unoptimized
                        />
                      </div>
                      <div>
                        <span className="block text-[10px] font-mono text-[#77736D] font-bold uppercase">
                          {p.brand}
                        </span>
                        <h4 className="text-xs font-bold text-[#171717] line-clamp-1">
                          {p.name}
                        </h4>
                        <span className="block text-xs font-black text-[#171717] font-vazir mt-1">
                          {p.priceFormatted}
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
    </div>
  );
}
