'use client';

import React, { useState } from 'react';
import { ManSportProduct } from '@/data/man-sport';
import { Search, X } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: ManSportProduct) => void;
  products: ManSportProduct[];
}

export default function SearchOverlay({
  isOpen,
  onClose,
  onSelectProduct,
  products,
}: SearchOverlayProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const popularSearches = ['تی‌شرت نایکی', 'هودی آدیداس', 'شلوار اسلش', 'کاپشن بومبر', 'دورس کارهارت'];

  const filteredProducts = query.trim() === ''
    ? []
    : products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="bg-[#111111] border border-white/15 text-white w-full max-w-3xl rounded-3xl p-6 sm:p-12 relative my-auto">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full hover:bg-white/20 text-white transition-colors"
          title="بستن"
        >
          <X className="w-5 h-5" />
        </button>

        {/* INPUT */}
        <div className="mb-6">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 absolute right-4 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="چی می‌خوای بپوشی؟ (نام برند، هودی، تیشرت...)"
              autoFocus
              className="w-full bg-white/5 border border-white/20 rounded-2xl py-4 pr-12 pl-4 text-sm font-peyda font-bold text-white placeholder-slate-400 focus:outline-none focus:border-[#E04A24] transition-colors"
            />
          </div>
        </div>

        {/* POPULAR SEARCH TAGS */}
        {query.trim() === '' && (
          <div className="space-y-3">
            <span className="text-xs font-mono text-slate-400 block font-bold">جستجوهای محبوب:</span>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuery(term)}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-[#E04A24] hover:text-black text-xs font-peyda font-medium text-slate-200 border border-white/10 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* SEARCH RESULTS */}
        {filteredProducts.length > 0 && (
          <div className="mt-6 space-y-3 max-h-80 overflow-y-auto pr-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectProduct(p);
                    onClose();
                  }}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer transition-colors group"
                >
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-14 h-16 object-cover rounded-xl bg-slate-800 shrink-0"
                  />
                  <div className="overflow-hidden flex-1">
                    <span className="text-[10px] font-mono text-slate-400 block font-bold uppercase">
                      {p.brand}
                    </span>
                    <h4 className="text-xs font-bold font-peyda text-white truncate group-hover:text-[#E04A24] transition-colors">
                      {p.name}
                    </h4>
                    <span className="text-xs font-mono font-bold text-[#E04A24] block mt-1">
                      {new Intl.NumberFormat('fa-IR').format(p.price)} تومان
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {query.trim() !== '' && filteredProducts.length === 0 && (
          <div className="text-center py-8 text-slate-400 font-peyda text-xs">
            محصولی با این عبارت یافت نشد.
          </div>
        )}

      </div>
    </div>
  );
}
