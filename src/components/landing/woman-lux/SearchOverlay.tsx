'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Search } from 'lucide-react';
import { WomanLuxProduct } from '@/data/woman-lux';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  products: WomanLuxProduct[];
  onOpenDetail: (product: WomanLuxProduct) => void;
}

export default function SearchOverlay({
  isOpen,
  onClose,
  products,
  onOpenDetail,
}: SearchOverlayProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.includes(query) ||
          p.category.includes(query) ||
          p.description.includes(query)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md animate-fade-in flex flex-col justify-start p-4 sm:p-8">
      {/* TOP HEADER */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between pb-6 border-b border-white/20">
        <span className="font-peyda tracking-widest text-lg font-bold text-white">
          NOIRÉ SEARCH
        </span>
        <button
          onClick={onClose}
          className="p-2 text-white hover:text-white/70 transition-colors"
          aria-label="Close search"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* SEARCH INPUT */}
      <div className="max-w-3xl mx-auto w-full pt-8 pb-6">
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="جستجوی مانتو، کت، پالتو، پیراهن..."
            autoFocus
            className="w-full bg-transparent border-b-2 border-white text-xl sm:text-2xl text-white placeholder-white/40 pb-3 pl-10 pr-2 focus:outline-hidden text-right font-peyda"
          />
          <Search className="absolute left-2 w-6 h-6 text-white/60" />
        </div>
      </div>

      {/* RESULTS LIST */}
      <div className="max-w-3xl mx-auto w-full flex-1 overflow-y-auto py-4">
        {query.trim() === '' ? (
          <div className="text-center text-white/40 text-xs pt-10">
            نام محصول یا عبارت مورد نظر خود را تایپ کنید.
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center text-white/60 text-sm pt-10">
            محصولی با عبارت «{query}» پیدا نشد.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onClose();
                  onOpenDetail(product);
                }}
                className="flex items-center gap-4 p-3 bg-white/10 hover:bg-white/20 cursor-pointer transition-colors"
              >
                <div className="relative w-16 aspect-[3/4] bg-neutral-800 shrink-0">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                </div>
                <div className="text-right space-y-1">
                  <h4 className="text-sm font-semibold text-white">{product.name}</h4>
                  <p className="text-xs text-white/70">{product.formattedPrice}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
