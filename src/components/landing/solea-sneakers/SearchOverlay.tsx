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
  'Nike Air Max',
  'Adidas Samba',
  'New Balance 1906R',
  'Asics GEL-Kayano',
  'Jordan 1 Retro',
  'On Cloudmonster',
  'Salomon XT-6'
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
        <div className="fixed inset-0 z-50 overflow-y-auto font-vazir" dir="rtl">
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* OVERLAY PANEL */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative min-h-screen sm:min-h-0 sm:max-w-3xl mx-auto sm:mt-12 sm:mb-12 bg-[#FFFFFF] sm:rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-right border border-[#E5E4E0]"
          >
            {/* TOP HEADER */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E4E0]">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-[#171717]" />
                <span className="font-peyda font-bold text-lg text-[#171717]">
                  جستجوی سریع اسنیکر
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#F5F4F0] hover:bg-[#171717] hover:text-white flex items-center justify-center transition-colors border border-[#E5E4E0]"
                aria-label="بستن"
              >
                <X className="w-4 h-4 text-[#171717]" />
              </button>
            </div>

            {/* INPUT FIELD */}
            <div className="relative mt-6">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="نام مدل یا برند (نایکی، آدیداس، نیوبالانس...) را وارد کنید..."
                className="w-full bg-[#F5F4F0] border border-[#E5E4E0] focus:border-[#171717] rounded-xl py-3.5 pr-11 pl-10 text-xs font-medium text-[#171717] placeholder:text-[#777777] outline-none transition-all"
              />
              <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777777]" />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#777777] hover:text-[#171717]"
                >
                  پاک کردن
                </button>
              )}
            </div>

            {/* POPULAR SEARCHES */}
            {query.trim() === '' && (
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold text-[#777777]">
                  <Tag className="w-3.5 h-3.5" />
                  <span>جستجوهای متداول:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((term, i) => (
                    <button
                      key={i}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 rounded-lg bg-[#F5F4F0] hover:bg-[#171717] hover:text-white border border-[#E5E4E0] text-xs text-[#171717] font-medium transition-all"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* RESULTS LIST */}
            {query.trim() !== '' && (
              <div className="mt-6">
                <div className="text-xs font-bold text-[#777777] mb-3">
                  نتایج جستجو ({filteredProducts.length} مدل)
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="py-10 text-center text-xs text-[#777777]">
                    اسنیکری متناسب با «{query}» پیدا نشد.
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => {
                          onSelectProduct(product);
                          onClose();
                        }}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#F5F4F0] hover:bg-[#E5E4E0] border border-[#E5E4E0] cursor-pointer transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-14 h-14 rounded-lg bg-[#FFFFFF] overflow-hidden shrink-0 border border-[#E5E4E0]">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-contain p-2 group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div>
                            <span className="block text-[10px] font-mono font-bold text-[#171717]">
                              {product.brand}
                            </span>
                            <h4 className="text-xs font-bold text-[#171717]">
                              {product.name}
                            </h4>
                            <span className="text-[10px] text-[#777777]">
                              {product.category} • {product.gender}
                            </span>
                          </div>
                        </div>

                        <div className="text-left font-vazir">
                          <span className="block text-xs font-bold text-[#171717]">
                            {product.price.toLocaleString('fa-IR')} تومان
                          </span>
                          <span className="text-[10px] text-[#171717] font-semibold flex items-center gap-1 justify-end mt-1">
                            <span>مشاهده</span>
                            <ArrowLeft className="w-3 h-3 text-[#171717]" />
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
