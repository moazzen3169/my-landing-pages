'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Heart, ShoppingBag, Check } from 'lucide-react';
import { LuxuryProduct } from '@/data/persian-luxury-women';

interface QuickViewModalProps {
  product: LuxuryProduct | null;
  onClose: () => void;
  onAddToCart: (product: LuxuryProduct, selectedColor: string, selectedSize: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
}

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}: QuickViewModalProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [addedSuccess, setAddedSuccess] = useState(false);

  React.useEffect(() => {
    if (product) {
      setSelectedImageIdx(0);
      setSelectedColor(product.colors[0]?.name || '');
      setSelectedSize(product.sizes[0] || 'One Size');
      setAddedSuccess(false);
    }
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs font-peyda dir-rtl">
      <div
        className="relative w-full max-w-4xl bg-[#FFFFFF] border border-[#E5E5E5] overflow-hidden max-h-[90vh] flex flex-col md:flex-row rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#000000] hover:opacity-60 transition-opacity"
        >
          <X className="w-5 h-5 stroke-[1.25]" />
        </button>

        {/* LEFT/RIGHT GALLERY */}
        <div className="w-full md:w-1/2 bg-[#F5F5F5] relative aspect-[3/4] max-h-[50vh] md:max-h-[90vh]">
          <Image
            src={product.images[selectedImageIdx] || product.images[0]}
            alt={product.name}
            fill
            className="object-cover object-center"
            unoptimized
          />

          {/* THUMBNAILS */}
          {product.images.length > 1 && (
            <div className="absolute bottom-4 inset-x-4 flex gap-2 justify-center z-10">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImageIdx(i)}
                  className={`w-12 h-16 relative border ${
                    selectedImageIdx === i ? 'border-[#000000]' : 'border-transparent opacity-60'
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" unoptimized />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* DETAILS */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between text-start space-y-6">
          <div>
            <span className="block text-[11px] font-mono text-[#666666] uppercase tracking-wider mb-1" dir="ltr">
              {product.brand}
            </span>
            <h2 className="text-xl font-normal text-[#000000] leading-snug">
              {product.name}
            </h2>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-base font-normal text-[#000000]">
                {product.priceFormatted}
              </span>
              {product.originalPriceFormatted && (
                <span className="text-xs text-[#999999] line-through">
                  {product.originalPriceFormatted}
                </span>
              )}
            </div>

            <p className="mt-4 text-xs text-[#333333] leading-relaxed font-normal">
              {product.descriptionPersian}
            </p>

            {/* COLORS */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-6 space-y-2">
                <span className="block text-xs font-normal text-[#666666]">
                  رنگ: <span className="text-[#000000]">{selectedColor}</span>
                </span>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`px-3 py-1.5 text-xs border transition-colors ${
                        selectedColor === c.name
                          ? 'border-[#000000] bg-[#000000] text-white'
                          : 'border-[#E5E5E5] bg-[#FAFAFA] text-[#111111] hover:border-[#000000]'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SIZES */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-6 space-y-2">
                <span className="block text-xs font-normal text-[#666666]">سایز</span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`w-10 h-10 text-xs border flex items-center justify-center transition-colors ${
                        selectedSize === s
                          ? 'border-[#000000] bg-[#000000] text-white'
                          : 'border-[#E5E5E5] bg-[#FAFAFA] text-[#111111] hover:border-[#000000]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ACTIONS */}
          <div className="pt-4 border-t border-[#E5E5E5] flex gap-3">
            <button
              onClick={handleAdd}
              className="flex-1 py-3.5 bg-[#000000] hover:bg-[#111111] text-white text-xs font-normal tracking-wider transition-colors flex items-center justify-center gap-2 rounded-none"
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4 stroke-[1.5]" />
                  <span>افزوده شد</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 stroke-[1.25]" />
                  <span>افزودن به سبد خرید</span>
                </>
              )}
            </button>

            <button
              onClick={() => onToggleWishlist(product.id)}
              className="p-3.5 border border-[#000000] text-[#000000] hover:bg-[#FAFAFA] transition-colors"
            >
              <Heart className={`w-4 h-4 stroke-[1.25] ${isWishlisted ? 'fill-[#000000]' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
