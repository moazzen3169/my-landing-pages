'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PersianProduct } from '@/data/persian-luxury';
import { ShoppingBag, Heart, Star, Sparkles, Eye, Check } from 'lucide-react';

interface PersianProductGridProps {
  products: PersianProduct[];
  onAddToCart: (product: PersianProduct) => void;
}

export default function PersianProductGrid({ products, onAddToCart }: PersianProductGridProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'همه محصولات' },
    { id: 'pants', name: 'شلوار و کارگو' },
    { id: 'hoodies', name: 'هودی و دورس' },
    { id: 'shirts', name: 'تی‌شرت و پولوشرت' },
    { id: 'jackets', name: 'کاپشن و جکت' }
  ];

  const filteredProducts = selectedFilter === 'all'
    ? products
    : products.filter(p => p.category === selectedFilter);

  const handleAdd = (product: PersianProduct) => {
    onAddToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1800);
  };

  return (
    <section id="products" className="py-24 bg-[#0A0B0E] text-white font-peyda relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#C8A97E] tracking-widest uppercase mb-3 inline-flex items-center gap-1.5 px-3 py-1 bg-[#1A1814] border border-[#C8A97E]/30 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            انتخاب برتر مد و استایل
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">
            شاهکارهای کالکشن جدید
          </h2>
          <p className="text-[#9CA0B0] text-sm sm:text-base font-vazir mt-3">
            هر قطعه با دقت وسواس‌گونه از ترکیب الگوسازی مدرن و کیفیت ماندگار تولید شده است.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${
                selectedFilter === cat.id
                  ? 'bg-[#C8A97E] text-black shadow-lg shadow-[#C8A97E]/20 scale-105'
                  : 'bg-[#15171F] text-[#A0A4B8] hover:text-white border border-[#252836]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#13151D] border border-[#232734] hover:border-[#C8A97E]/60 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#C8A97E]/10"
            >
              <div>
                {/* Product Image Area */}
                <div className="relative h-72 w-full bg-[#181A24] overflow-hidden p-6 flex items-center justify-center">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 ease-out"
                    unoptimized
                  />

                  {/* Badge */}
                  {product.badgePersian && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-[#C8A97E] text-black text-[11px] font-extrabold rounded-md shadow-md">
                        {product.badgePersian}
                      </span>
                    </div>
                  )}

                  {/* Rating Badge */}
                  {product.rating && (
                    <div className="absolute top-4 left-4 z-10 bg-[#0A0B0E]/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md flex items-center gap-1 text-[11px] font-bold text-amber-400">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{product.rating}</span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <span className="text-[11px] font-mono text-[#828698] block mb-1">
                    {product.categoryPersian}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#C8A97E] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#9599A8] font-vazir line-clamp-2 mb-4 leading-relaxed">
                    {product.descriptionPersian}
                  </p>

                  {/* Swatches */}
                  <div className="flex items-center gap-2 mb-4">
                    {product.colors.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-3.5 h-3.5 rounded-full border border-white/20 inline-block shadow-sm"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                    <span className="text-[10px] text-[#717585] font-vazir mr-1">
                      {product.colors.length} رنگ
                    </span>
                  </div>
                </div>
              </div>

              {/* Price & Add to Cart Footer */}
              <div className="p-6 pt-0 border-t border-[#1C1F2B] mt-2 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-[#727686] block font-vazir">قیمت نهایی</span>
                  <span className="text-base font-black text-[#C8A97E] font-peyda">
                    {product.priceFormatted}
                  </span>
                </div>

                <button
                  onClick={() => handleAdd(product)}
                  className={`p-3 rounded-xl transition-all duration-300 flex items-center justify-center ${
                    addedProductId === product.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-[#212431] hover:bg-[#C8A97E] text-white hover:text-black'
                  }`}
                  title="افزودن به سبد خرید"
                >
                  {addedProductId === product.id ? (
                    <Check className="w-5 h-5 animate-bounce" />
                  ) : (
                    <ShoppingBag className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
