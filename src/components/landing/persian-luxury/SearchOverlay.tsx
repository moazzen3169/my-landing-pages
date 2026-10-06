'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, X } from 'lucide-react';
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
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.includes(query) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.category.includes(query)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-[#FFFFFF] font-peyda text-[#111111] p-6 sm:p-12 overflow-y-auto dir-rtl">
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <span className="text-xl font-light tracking-widest font-peyda">MOR'E</span>
          <button onClick={onClose} className="p-2 text-[#000000] hover:opacity-60">
            <X className="w-6 h-6 stroke-[1.25]" />
          </button>
        </div>

        {/* INPUT */}
        <div className="relative mb-12 border-b border-[#000000] pb-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جستجوی محصول، برند یا دسته‌بندی..."
            autoFocus
            className="w-full bg-transparent text-lg sm:text-2xl font-light text-[#000000] placeholder-[#999999] focus:outline-none pr-8"
          />
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999] stroke-[1.25]" />
        </div>

        {/* RESULTS */}
        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {results.map((product) => (
              <div
                key={`search-${product.id}`}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="cursor-pointer group text-start"
              >
                <div className="relative aspect-[3/4] bg-[#F5F5F5] mb-2 overflow-hidden">
                  <Image src={product.images[0]} alt="" fill className="object-cover" unoptimized />
                </div>
                <span className="block text-[10px] font-mono text-[#666666] uppercase" dir="ltr">{product.brand}</span>
                <h4 className="text-xs font-normal text-[#000000] line-clamp-1">{product.name}</h4>
                <span className="text-xs text-[#000000] mt-1 block">{product.priceFormatted}</span>
              </div>
            ))}
          </div>
        ) : query.trim() ? (
          <p className="text-xs text-[#666666]">هیچ محصولی یافت نشد.</p>
        ) : (
          <div className="space-y-4 text-start text-xs text-[#666666]">
            <span className="block text-[11px] font-mono uppercase text-[#999999]">SUGGESTIONS</span>
            <div className="flex flex-wrap gap-2">
              {['کیف چرم', 'کفش پاشنه‌دار', 'Valentino', 'Gucci', 'کفش مجلسی'].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#000000] text-[#111111]"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
