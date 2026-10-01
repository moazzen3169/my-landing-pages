'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Check, ShoppingBag, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { SneakerProduct } from '@/data/solea-sneakers';
import { useCart } from '@/context/CartContext';

interface ProductQuickViewProps {
  product: SneakerProduct | null;
  onClose: () => void;
}

export default function ProductQuickView({ product, onClose }: ProductQuickViewProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('41');
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [added, setAdded] = useState<boolean>(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || '41');
      setSelectedColorIndex(0);
      setAdded(false);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR').format(amount);
  };

  const handleAddToCart = () => {
    const selectedColor = product.colors[selectedColorIndex] || product.colors[0];
    const standardProduct = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      slug: product.slug,
      category: 'accessories' as const,
      price: product.price,
      currency: 'TMN',
      colors: product.colors,
      sizes: product.sizes,
      images: product.images,
      description: product.description,
      material: product.specifications.upper,
      fit: 'استاندارد اسنیکر',
    };

    addToCart(standardProduct, selectedColor, selectedSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  const activeColor = product.colors[selectedColorIndex] || product.colors[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm font-peyda"
      dir="rtl"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FFFFFF] border border-[#E5E4E0] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl my-auto text-right max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#F5F4F0] hover:bg-[#171717] hover:text-white border border-[#E5E4E0] flex items-center justify-center transition-all shadow-sm"
          aria-label="بستن"
        >
          <X className="w-4 h-4 shrink-0" />
        </button>

        {/* GALLERY AREA */}
        <div className="w-full md:w-1/2 bg-[#F5F4F0] p-6 flex items-center justify-center relative min-h-[280px] md:min-h-[440px]">
          <div className="relative w-full h-full min-h-[240px] flex items-center justify-center">
            <Image
              src={activeColor?.image || product.images[0]}
              alt={product.name}
              fill
              className="object-contain p-4 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* BADGES */}
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            {product.badge && (
              <span className="px-2.5 py-0.5 bg-[#CCFF00] text-[#171717] text-[10px] font-mono font-bold rounded uppercase">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* PRODUCT SPECS */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[80vh] md:max-h-[90vh]">
          <div>
            {/* BRAND & RATING */}
            <div className="flex items-center justify-between text-xs font-mono font-bold text-[#777777] mb-2">
              <span className="text-[#171717] uppercase tracking-wider">{product.brand}</span>
              <span className="text-[#171717]">★ {product.rating} ({product.reviewCount} نظر)</span>
            </div>

            {/* TITLE */}
            <h2 className="text-lg sm:text-xl font-black text-[#171717] mb-2">
              {product.name}
            </h2>

            {/* PRICE */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl font-bold text-[#171717]">
                {formatPrice(product.price)} <span className="text-xs font-normal text-[#777777]">تومان</span>
              </span>
              {product.compareAtPrice && (
                <span className="text-xs text-[#777777] line-through font-vazir">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            {/* DESCRIPTION */}
            <p className="text-xs text-[#777777] font-vazir leading-relaxed mb-5 border-b border-[#E5E4E0] pb-4 font-normal">
              {product.description}
            </p>

            {/* COLOR SELECTION */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-[#171717] mb-2">
                انتخاب رنگ: <span className="text-[#777777] font-normal">{activeColor?.name}</span>
              </label>
              <div className="flex items-center gap-2">
                {product.colors.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColorIndex(idx)}
                    className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColorIndex === idx ? 'border-[#171717] scale-110' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {selectedColorIndex === idx && (
                      <Check className={`w-3.5 h-3.5 ${c.hex === '#FAFAF7' || c.hex === '#FFFFFF' ? 'text-black' : 'text-white'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE SELECTION */}
            <div className="mb-5">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-[#171717]">
                  سایز (EUR):
                </label>
              </div>

              <div className="grid grid-cols-7 gap-1.5">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-1.5 text-xs font-mono font-bold rounded-lg border transition-all ${
                      selectedSize === sz
                        ? 'bg-[#171717] text-white border-[#171717]'
                        : 'bg-[#F5F4F0] text-[#171717] border-[#E5E4E0] hover:border-[#171717]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* SPECIFICATIONS */}
            <div className="bg-[#F5F4F0] p-3 rounded-xl text-[11px] font-vazir space-y-1 text-[#777777] mb-5">
              <div><strong className="text-[#171717]">رویه:</strong> {product.specifications.upper}</div>
              <div><strong className="text-[#171717]">کوشنینگ:</strong> {product.specifications.cushioning}</div>
              <div><strong className="text-[#171717]">زیره:</strong> {product.specifications.outsole}</div>
            </div>
          </div>

          {/* ADD TO CART */}
          <div>
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 px-6 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#171717] hover:bg-[#262626] text-white'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 text-[#CCFF00]" />
                  <span>افزوده شد به سبد خرید</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#CCFF00]" />
                  <span>افزودن به سبد خرید — {formatPrice(product.price)} تومان</span>
                </>
              )}
            </button>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-[10px] text-[#777777] font-vazir text-center pt-3 border-t border-[#E5E4E0]">
              <div className="flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#171717]" />
                <span>ضمانت اصالت</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#171717]" />
                <span>ارسال اکسپرس</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <RotateCcw className="w-3.5 h-3.5 text-[#171717]" />
                <span>۷ روز تعویض</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
