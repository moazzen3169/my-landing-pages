'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Check } from 'lucide-react';
import { Product, ProductColor } from '@/types';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { formatPrice } from '@/lib/utils';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
  isPersian?: boolean;
}

export default function QuickViewModal({ product, onClose, isPersian = false }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#F3F2EE] border border-[#D7D4CD] shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-20 p-2 bg-white/80 rounded-full text-[#111111] hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery Left */}
            <div className="relative aspect-[3/4] bg-[#E8E6E1] border-b md:border-b-0 md:border-l border-[#D7D4CD]">
              <Image
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 right-4 flex space-x-2 space-x-reverse">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-12 h-16 border overflow-hidden ${
                        activeImageIndex === idx ? 'border-[#111111] ring-1 ring-[#111111]' : 'border-white/60'
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content Right */}
            <div className="p-8 flex flex-col justify-between space-y-6 bg-white">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#77746E] uppercase">
                      {product.category}
                    </span>
                    <h2 className="text-2xl font-light font-display text-[#111111] uppercase mt-1">
                      {product.name}
                    </h2>
                  </div>
                  <span className="text-lg font-mono text-[#111111]">
                    {formatPrice(product.price, product.currency)}
                  </span>
                </div>

                <p className="text-xs text-[#77746E] leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Color Selector */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs font-mono uppercase text-[#111111]">
                    <span>{isPersian ? 'رنگ' : 'COLOR'}</span>
                    <span className="text-[#77746E]">{selectedColor.name}</span>
                  </div>
                  <div className="flex space-x-3 space-x-reverse">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-7 h-7 rounded-full border-2 transition-all ${
                          selectedColor.name === color.name
                            ? 'border-[#111111] scale-110'
                            : 'border-transparent hover:scale-105'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selector */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs font-mono uppercase text-[#111111]">
                    <span>{isPersian ? 'سایز' : 'SIZE'}</span>
                    <span className="text-[#77746E]">{selectedSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 text-xs font-mono border transition-all ${
                          selectedSize === size
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'border-[#D7D4CD] text-[#111111] hover:border-[#111111]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material Details */}
                <div className="text-[11px] font-mono text-[#77746E] border-t border-[#D7D4CD] pt-4 space-y-1">
                  <div>
                    <span className="text-[#111111]">
                      {isPersian ? 'جنس:' : 'MATERIAL:'}
                    </span>{' '}
                    {product.material}
                  </div>
                  <div>
                    <span className="text-[#111111]">
                      {isPersian ? 'برش:' : 'FIT:'}
                    </span>{' '}
                    {product.fit}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3 space-x-reverse pt-4 border-t border-[#D7D4CD]">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#111111] text-[#F3F2EE] py-4 text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-[#0B0B0B] transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span>{isPersian ? 'به سبد اضافه شد' : 'ADDED TO BAG'}</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>{isPersian ? 'افزودن به سبد خرید' : 'ADD TO BAG'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 border border-[#D7D4CD] hover:border-[#111111] transition-colors ${
                    inWishlist ? 'bg-[#111111] text-white' : 'text-[#111111]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${inWishlist ? 'fill-white' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
