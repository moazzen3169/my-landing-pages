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
}

const TRENDING_SEARCHES = ['SUITS', 'BLAZERS', 'SILK SHIRTS', 'TROUSERS', 'OVERSHIRTS', 'CASHMERE'];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');

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
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[10000] bg-[#0B0B0B] text-[#F3F2EE] flex flex-col justify-between overflow-y-auto p-6 md:p-12"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#2B2B2B] pb-6">
            <span className="text-[10px] tracking-[0.3em] text-[#77746E] uppercase">
              NOIRÉ SEARCH EXPERIENCE
            </span>
            <button
              onClick={onClose}
              className="flex items-center space-x-2 text-[11px] tracking-[0.2em] text-[#D7D4CD] hover:text-white transition-colors"
            >
              <span>CLOSE</span>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input Box */}
          <div className="max-w-4xl w-full mx-auto my-auto py-12 space-y-12">
            <div className="relative border-b-2 border-[#D7D4CD] pb-4 flex items-center space-x-4">
              <SearchIcon className="w-8 h-8 text-[#A58B68]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="WHAT ARE YOU LOOKING FOR?"
                autoFocus
                className="w-full bg-transparent text-2xl sm:text-4xl md:text-5xl font-light font-display uppercase text-white placeholder-[#77746E] focus:outline-none"
              />
              {query && (
                <button onClick={() => setQuery('')} className="p-2 text-[#77746E] hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Trending Suggestions */}
            {!query && (
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-[0.3em] text-[#77746E] uppercase">
                  TRENDING SEARCHES
                </span>
                <div className="flex flex-wrap gap-3">
                  {TRENDING_SEARCHES.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 border border-[#2B2B2B] text-xs font-mono tracking-widest text-[#D7D4CD] hover:border-white hover:text-white transition-colors uppercase"
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
                <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.2em] text-[#77746E] uppercase border-b border-[#2B2B2B] pb-3">
                  <span>FOUND {filteredProducts.length} MATCHES</span>
                  <span>LIVE CATALOG</span>
                </div>

                {filteredProducts.length === 0 ? (
                  <p className="text-base text-[#77746E] font-light">
                    NO PRODUCTS FOUND MATCHING &quot;{query}&quot;. TRY SEARCHING FOR SUITS, BLAZER, OR SHIRTS.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[50vh] overflow-y-auto pr-2">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.slug}`}
                        onClick={onClose}
                        className="group flex space-x-4 p-3 bg-[#181818] border border-[#2B2B2B] hover:border-[#D7D4CD] transition-colors"
                      >
                        <div className="relative w-16 h-20 bg-[#0B0B0B] flex-shrink-0">
                          <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <span className="text-[9px] font-mono text-[#A58B68] uppercase">{product.category}</span>
                            <h4 className="text-xs font-medium text-white group-hover:text-[#A58B68] transition-colors uppercase truncate">
                              {product.name}
                            </h4>
                          </div>
                          <div className="flex justify-between items-center text-xs font-mono text-[#D7D4CD]">
                            <span>{formatPrice(product.price)}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
          <div className="text-center text-[10px] font-mono tracking-[0.2em] text-[#77746E] uppercase border-t border-[#2B2B2B] pt-4">
            PRESS ESC OR CLICK CLOSE TO RETURN
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
