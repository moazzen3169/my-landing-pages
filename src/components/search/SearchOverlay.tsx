'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X, ArrowRight } from 'lucide-react';
import { NOIRE_PRODUCTS } from '@/data/noire';
import { formatPrice } from '@/lib/utils';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  isPersian?: boolean;
}

const TRENDING_SEARCHES_EN = ['SUITS', 'BLAZERS', 'SILK SHIRTS', 'TROUSERS', 'OVERSHIRTS', 'CASHMERE'];
const TRENDING_SEARCHES_FA = ['کت و شلوار', 'کت تک', 'پیراهن ابریشم', 'شلوار پشمی', 'اورشرت', 'بافت کشمیر'];

export default function SearchOverlay({ isOpen, onClose, isPersian = false }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const trendingSearches = isPersian ? TRENDING_SEARCHES_FA : TRENDING_SEARCHES_EN;

  const filteredProducts = query.trim()
    ? NOIRE_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[10000] bg-[#0B0B0B] text-[#F3F2EE] flex flex-col justify-between overflow-y-auto p-6 md:p-12 text-start"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#2B2B2B] pb-6 max-w-[1440px] w-full mx-auto">
            <span
              className={
                isPersian
                  ? 'text-xs font-medium font-peyda text-[#77746E]'
                  : 'text-[10px] tracking-[0.3em] text-[#77746E] uppercase font-mono'
              }
            >
              {isPersian ? 'تجربه جستجوی نوآر' : 'NOIRÉ SEARCH EXPERIENCE'}
            </span>
            <button
              onClick={onClose}
              className={`flex items-center gap-2 text-[#D7D4CD] hover:text-white transition-colors ${
                isPersian ? 'text-xs font-medium font-peyda' : 'text-[11px] tracking-[0.2em] font-mono uppercase'
              }`}
            >
              <span>{isPersian ? 'بستن' : 'CLOSE'}</span>
              <X className="w-5 h-5 shrink-0" />
            </button>
          </div>

          {/* Search Input Box */}
          <div className="max-w-4xl w-full mx-auto my-auto py-10 space-y-10">
            <div className="relative border-b-2 border-[#D7D4CD] pb-4 flex items-center gap-4">
              <SearchIcon className="w-8 h-8 text-[#A58B68] shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isPersian ? 'به دنبال چه محصولی می‌گردید؟' : 'WHAT ARE YOU LOOKING FOR?'}
                autoFocus
                className={`w-full bg-transparent text-white placeholder-[#77746E] focus:outline-none ${
                  isPersian
                    ? 'text-2xl sm:text-3xl md:text-4xl font-bold font-peyda'
                    : 'text-2xl sm:text-4xl md:text-5xl font-light font-display uppercase'
                }`}
              />
              {query && (
                <button onClick={() => setQuery('')} className="p-2 text-[#77746E] hover:text-white shrink-0">
                  <X className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Trending Suggestions */}
            {!query && (
              <div className="space-y-4">
                <span
                  className={
                    isPersian
                      ? 'text-xs font-medium font-peyda text-[#77746E]'
                      : 'text-[10px] font-mono tracking-[0.3em] text-[#77746E] uppercase'
                  }
                >
                  {isPersian ? 'جستجوهای محبوب' : 'TRENDING SEARCHES'}
                </span>
                <div className="flex flex-wrap gap-3">
                  {trendingSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className={`px-4 py-2 border border-[#2B2B2B] text-[#D7D4CD] hover:border-[#A58B68] hover:text-white transition-colors ${
                        isPersian ? 'text-xs font-medium font-peyda' : 'text-xs font-mono tracking-widest uppercase'
                      }`}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Live Search Results */}
            {query && (
              <div className="space-y-6">
                <div
                  className={`flex justify-between items-center text-[#77746E] border-b border-[#2B2B2B] pb-3 ${
                    isPersian ? 'text-xs font-peyda' : 'text-[10px] font-mono tracking-[0.2em] uppercase'
                  }`}
                >
                  <span>
                    {isPersian ? `یافت‌شده: ${filteredProducts.length} مورد` : `FOUND ${filteredProducts.length} MATCHES`}
                  </span>
                  <span>{isPersian ? 'کاتالوگ آنلاین' : 'LIVE CATALOG'}</span>
                </div>

                {filteredProducts.length === 0 ? (
                  <p
                    className={`text-[#77746E] ${
                      isPersian ? 'text-sm sm:text-base font-normal font-peyda' : 'text-base font-light'
                    }`}
                  >
                    {isPersian
                      ? `محصولی مطابق با «${query}» یافت نشد. جستجوی کت و شلوار، کت تک یا پیراهن را امتحان کنید.`
                      : `NO PRODUCTS FOUND MATCHING "${query}". TRY SEARCHING FOR SUITS, BLAZER, OR SHIRTS.`}
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-h-[50vh] overflow-y-auto pr-2">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.slug}`}
                        onClick={onClose}
                        className="group flex gap-4 p-3.5 bg-[#181818] border border-[#2B2B2B] hover:border-[#A58B68] transition-colors"
                      >
                        <div className="relative w-16 h-20 bg-[#0B0B0B] shrink-0">
                          <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <span
                              className={`text-[#A58B68] block ${
                                isPersian ? 'text-[10px] font-peyda' : 'text-[9px] font-mono uppercase'
                              }`}
                            >
                              {product.category}
                            </span>
                            <h4
                              className={`text-white group-hover:text-[#A58B68] transition-colors truncate ${
                                isPersian
                                  ? 'text-xs font-medium font-peyda'
                                  : 'text-xs font-medium uppercase'
                              }`}
                            >
                              {product.name}
                            </h4>
                          </div>
                          <div className="flex justify-between items-center text-xs font-mono text-[#D7D4CD] pt-1">
                            <span>{formatPrice(product.price)}</span>
                            <ArrowRight
                              className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0 ${
                                isPersian ? 'rotate-180 group-hover:-translate-x-1' : ''
                              }`}
                            />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            className={`text-center text-[#77746E] border-t border-[#2B2B2B] pt-4 max-w-[1440px] w-full mx-auto ${
              isPersian ? 'text-xs font-peyda' : 'text-[10px] font-mono tracking-[0.2em] uppercase'
            }`}
          >
            {isPersian
              ? 'برای بازگشت کلید ESC را بفشارید یا روی بستن کلیک کنید'
              : 'PRESS ESC OR CLICK CLOSE TO RETURN'}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
