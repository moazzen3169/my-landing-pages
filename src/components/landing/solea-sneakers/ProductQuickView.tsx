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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in font-peyda"
      dir="rtl"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAFAF7] border border-[#111111]/10 w-full max-w-4xl rounded-[28px] overflow-hidden shadow-2xl my-auto text-right max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-[#111111] hover:text-white border border-[#111111]/10 flex items-center justify-center transition-all duration-300 shadow-sm"
          aria-label="بستن"
        >
          <X className="w-5 h-5 shrink-0" />
        </button>

        {/* LEFT/TOP: PRODUCT GALLERY AREA */}
        <div className="w-full md:w-1/2 bg-[#F1F1EE] p-8 flex items-center justify-center relative min-h-[300px] md:min-h-[460px]">
          <div className="relative w-full h-full min-h-[260px] flex items-center justify-center">
            <Image
              src={activeColor?.image || product.images[0]}
              alt={product.name}
              fill
              className="object-contain -rotate-6 hover:rotate-0 transition-transform duration-500"
            />
          </div>

          {/* BADGES */}
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            {product.badge && (
              <span className="px-3 py-1 bg-[#111111] text-white text-xs font-bold rounded-full">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* RIGHT/BOTTOM: PRODUCT SPECS & PURCHASE OPTIONS */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[80vh] md:max-h-[90vh]">
          <div>
            {/* BRAND & RATING */}
            <div className="flex items-center justify-between text-xs font-mono font-bold text-[#6B6B68] mb-2">
              <span className="text-[#111111] uppercase tracking-wider">{product.brand}</span>
              <span className="text-amber-600">★ {product.rating} ({product.reviewCount} نظر)</span>
            </div>

            {/* TITLE */}
            <h2 className="text-xl sm:text-2xl font-black text-[#111111] mb-3">
              {product.name}
            </h2>

            {/* PRICE */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-black text-[#111111]">
                {formatPrice(product.price)} <span className="text-xs font-medium text-[#6B6B68]">تومان</span>
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-[#6B6B68] line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            {/* DESCRIPTION */}
            <p className="text-xs sm:text-sm text-[#4A4A46] font-vazir leading-relaxed mb-6 border-b border-[#111111]/[0.08] pb-4">
              {product.description}
            </p>

            {/* COLOR SELECTION */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-[#111111] mb-2">
                انتخاب رنگ: <span className="text-[#6B6B68] font-normal">{activeColor?.name}</span>
              </label>
              <div className="flex items-center gap-2.5">
                {product.colors.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColorIndex(idx)}
                    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColorIndex === idx ? 'border-[#111111] scale-110 shadow-sm' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {selectedColorIndex === idx && (
                      <Check className={`w-4 h-4 ${c.hex === '#FAFAF7' || c.hex === '#FFFFFF' ? 'text-black' : 'text-white'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE SELECTION */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-[#111111]">
                  انتخاب سایز (EUR):
                </label>
                <span className="text-[11px] text-[#A89B84] font-bold cursor-pointer hover:underline">
                  راهنمای سایز
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1.5">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 text-xs font-mono font-bold rounded-xl border transition-all ${
                      selectedSize === sz
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'bg-white text-[#111111] border-[#111111]/15 hover:border-[#111111]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* SPECIFICATIONS */}
            <div className="bg-[#F1F1EE] p-3.5 rounded-2xl text-[11px] font-vazir space-y-1 text-[#4A4A46] mb-6">
              <div><strong className="text-[#111111]">رویه:</strong> {product.specifications.upper}</div>
              <div><strong className="text-[#111111]">کوشنینگ:</strong> {product.specifications.cushioning}</div>
              <div><strong className="text-[#111111]">زیره:</strong> {product.specifications.outsole}</div>
            </div>
          </div>

          {/* ADD TO CART & TRUST BADGES */}
          <div>
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 px-6 rounded-full font-extrabold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#111111] hover:bg-[#252525] text-white shadow-black/15'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>به سبد خرید اضافه شد</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>افزودن به سبد خرید — {formatPrice(product.price)} تومان</span>
                </>
              )}
            </button>

            {/* TRUST MINI ICONS */}
            <div className="grid grid-cols-3 gap-2 mt-4 text-[10px] text-[#6B6B68] font-vazir text-center pt-3 border-t border-[#111111]/[0.08]">
              <div className="flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#111111]" />
                <span>ضمانت اصالت</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#111111]" />
                <span>ارسال اکسپرس</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <RotateCcw className="w-3.5 h-3.5 text-[#111111]" />
                <span>۷ روز بازگشت</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
