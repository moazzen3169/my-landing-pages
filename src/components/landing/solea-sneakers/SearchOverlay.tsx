'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowLeft, Tag } from 'lucide-react';
import { SOLEA_PRODUCTS, SneakerProduct } from '@/data/solea-sneakers';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: SneakerProduct) => void;
}

const POPULAR_SEARCHES = [
  'Adidas Adistar',
  'Adidas Samba',
  'SL 72 Heritage',
  'Handball Spezial',
  'اسنیکر لایف‌استایل',
  'کفش دویدن',
  'کفش بسکتبال'
];

export default function SearchOverlay({ isOpen, onClose, onSelectProduct }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredProducts = query.trim() === ''
    ? []
    : SOLEA_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto font-peyda" dir="rtl">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B1220]/70 backdrop-blur-sm"
          />

          {/* OVERLAY PANEL */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative min-h-screen sm:min-h-0 sm:max-w-3xl mx-auto sm:mt-12 sm:mb-12 bg-[#F8FAFC] sm:rounded-3xl p-6 sm:p-8 z-10 text-right border border-[#CBD5E1]/80"
          >
            {/* TOP HEADER */}
            <div className="flex items-center justify-between pb-6 border-b border-[#CBD5E1]/60">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-[#0B1220]" />
                <span className="font-bold text-lg text-[#0B1220]">
                  جستجوی هوشمند اسنیکر
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#F1F5F9] hover:bg-[#0B1220] hover:text-[#F8FAFC] flex items-center justify-center transition-colors text-[#0B1220] border border-[#CBD5E1]/50"
                aria-label="بستن"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* INPUT FIELD */}
            <div className="relative mt-6">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="نام مدل، برند (نایکی، آدیداس...) یا دسته‌بندی را وارد کنید..."
                className="w-full bg-[#ffffffffffff] border border-[#CBD5E1]/80 focus:border-[#0B1220] rounded-2xl py-4 pr-12 pl-10 text-sm font-semibold text-[#0B1220] placeholder:text-[#64748B] outline-none transition-colors"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748B]" />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#64748B] hover:text-[#0B1220]"
                >
                  پاک کردن
                </button>
              )}
            </div>

            {/* POPULAR SEARCHES */}
            {query.trim() === '' && (
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4 text-xs font-bold text-[#475569]">
                  <Tag className="w-3.5 h-3.5" />
                  <span>جستجوهای پرطرفدار</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((term, i) => (
                    <button
                      key={i}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 rounded-xl bg-[#ffffffffffff] hover:bg-[#0B1220] hover:text-[#F8FAFC] border border-[#CBD5E1]/60 text-xs text-[#0B1220] transition-colors font-medium"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* RESULTS LIST */}
            {query.trim() !== '' && (
              <div className="mt-8">
                <div className="text-xs font-bold text-[#475569] mb-4">
                  نتایج جستجو ({filteredProducts.length} مدل یافت شد)
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="py-12 text-center text-sm text-[#64748B]">
                    متأسفانه اسنیکری متناسب با «{query}» پیدا نشد.
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => {
                          onSelectProduct(product);
                          onClose();
                        }}
                        className="flex items-center justify-between p-3 rounded-2xl bg-[#ffffffffffff] hover:bg-[#F1F5F9] border border-[#CBD5E1]/60 cursor-pointer transition-colors group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-xl bg-[#F1F5F9] overflow-hidden shrink-0 border border-[#CBD5E1]/40">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-contain p-2 group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div>
                            <span className="block text-xs font-bold text-[#8FA9C4] font-mono">
                              {product.brand}
                            </span>
                            <h4 className="text-sm font-bold text-[#0B1220]">
                              {product.name}
                            </h4>
                            <span className="text-xs text-[#475569]">
                              {product.category} • {product.gender}
                            </span>
                          </div>
                        </div>

                        <div className="text-left font-peyda">
                          <span className="block text-sm font-bold text-[#0B1220]">
                            {product.price.toLocaleString('fa-IR')} تومان
                          </span>
                          <span className="text-[11px] text-[#8FA9C4] flex items-center gap-1 justify-end mt-1 group-hover:translate-x-[-2px] transition-transform">
                            <span>مشاهده</span>
                            <ArrowLeft className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
