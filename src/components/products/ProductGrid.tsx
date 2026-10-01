'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export default function ProductGrid({
  products,
  title = 'ESSENTIALS COLLECTION',
  subtitle = 'CONTEMPORARY SELECTION',
}: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#D7D4CD] pb-6">
        <div>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#77746E] uppercase">
            {subtitle}
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight uppercase font-display text-[#111111] mt-1">
            {title}
          </h2>
        </div>
        <span className="text-xs font-mono text-[#77746E] uppercase mt-4 md:mt-0">
          SHOWING {products.length} PRODUCTS
        </span>
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => {
          // Asymmetrical editorial proportions
          const isFeaturedCard = index % 5 === 0;
          return (
            <div
              key={product.id}
              className={isFeaturedCard ? 'sm:col-span-2 lg:col-span-2' : 'col-span-1'}
            >
              <ProductCard
                product={product}
                onQuickView={(p) => setSelectedProduct(p)}
                aspectRatio={isFeaturedCard ? 'square' : 'portrait'}
              />
            </div>
          );
        })}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
