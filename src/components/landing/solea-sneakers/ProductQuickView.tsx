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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1220]/70 backdrop-blur-sm font-peyda"
      dir="rtl"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F8FAFC] border border-[#CBD5E1]/80 w-full max-w-4xl rounded-[24px] overflow-hidden my-auto text-right max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FFFFFF] hover:bg-[#0B1220] hover:text-[#F8FAFC] border border-[#CBD5E1]/60 flex items-center justify-center transition-colors text-[#0B1220]"
          aria-label="بستن"
        >
          <X className="w-4 h-4 shrink-0" />
        </button>

        {/* LEFT/TOP: GALLERY AREA */}
        <div className="w-full md:w-1/2 bg-[#EAEFF0] p-8 flex items-center justify-center relative min-h-[300px] md:min-h-[460px] border-b md:border-b-0 md:border-l border-[#CBD5E1]/60">
          <div className="relative w-full h-full min-h-[260px] flex items-center justify-center">
            <Image
              src={activeColor?.image || product.images[0]}
              alt={product.name}
              fill
              className="object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* BADGES */}
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            {product.badge && (
              <span className="px-3 py-1 bg-[#0B1220] text-[#F8FAFC] text-xs font-semibold rounded-full">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* RIGHT/BOTTOM: PRODUCT SPECS & OPTIONS */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[80vh] md:max-h-[90vh]">
          <div>
            {/* BRAND & RATING */}
            <div className="flex items-center justify-between text-xs font-mono font-bold text-[#475569] mb-2">
              <span className="text-[#0B1220] uppercase tracking-wider">{product.brand}</span>
              <span className="text-amber-600">★ {product.rating} ({product.reviewCount} نظر)</span>
            </div>

            {/* TITLE */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1220] mb-3">
              {product.name}
            </h2>

            {/* PRICE */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-[#0B1220]">
                {formatPrice(product.price)} <span className="text-xs font-normal text-[#475569]">تومان</span>
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-[#475569] line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            {/* VISUAL TECHNICAL METRICS (SHOW DON'T TELL) */}
            <div className="bg-[#FFFFFF] border border-[#CBD5E1]/60 p-3.5 rounded-xl text-xs font-peyda space-y-2 mb-5">
              <div className="flex items-center justify-between">
                <span className="text-[#0B1220] font-semibold">کوشنینگ / نرمی:</span>
                <span className="text-[#0B1220] font-mono tracking-widest font-bold">● ● ● ● ○</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#0B1220] font-semibold">انعطاف زیره:</span>
                <span className="text-[#0B1220] font-mono tracking-widest font-bold">● ● ● ● ●</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#0B1220] font-semibold">تنفس‌پذیری:</span>
                <span className="text-[#0B1220] font-mono tracking-widest font-bold">● ● ● ● ○</span>
              </div>
            </div>

            {/* COLOR SELECTION */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-[#0B1220] mb-2">
                انتخاب رنگ: <span className="text-[#475569] font-normal">{activeColor?.name}</span>
              </label>
              <div className="flex items-center gap-2.5">
                {product.colors.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColorIndex(idx)}
                    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColorIndex === idx ? 'border-[#0B1220] scale-105' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {selectedColorIndex === idx && (
                      <Check className={`w-4 h-4 ${c.hex === '#F8FAFC' || c.hex === '#FFFFFF' ? 'text-black' : 'text-white'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE SELECTION */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-[#0B1220]">
                  انتخاب سایز (EUR):
                </label>
                <span className="text-[11px] text-[#8FA9C4] font-semibold cursor-pointer hover:underline">
                  راهنمای سایز
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1.5">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 text-xs font-mono font-bold rounded-xl border transition-colors ${
                      selectedSize === sz
                        ? 'bg-[#0B1220] text-[#F8FAFC] border-[#0B1220]'
                        : 'bg-[#FFFFFF] text-[#0B1220] border-[#CBD5E1]/60 hover:border-[#0B1220]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* SPECIFICATIONS */}
            <div className="bg-[#F1F5F9] p-3.5 rounded-xl text-[11px] font-peyda space-y-1 text-[#475569] mb-6 border border-[#CBD5E1]/40">
              <div><strong className="text-[#0B1220]">رویه:</strong> {product.specifications.upper}</div>
              <div><strong className="text-[#0B1220]">کوشنینگ:</strong> {product.specifications.cushioning}</div>
              <div><strong className="text-[#0B1220]">زیره:</strong> {product.specifications.outsole}</div>
            </div>
          </div>

          {/* ADD TO CART & TRUST BADGES */}
          <div>
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 px-6 rounded-full font-bold text-sm transition-colors flex items-center justify-center gap-2 ${
                added
                  ? 'bg-emerald-700 text-[#F8FAFC]'
                  : 'bg-[#0B1220] hover:bg-[#16233A] text-[#F8FAFC]'
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
            <div className="grid grid-cols-3 gap-2 mt-4 text-[10px] text-[#475569] font-peyda text-center pt-3 border-t border-[#CBD5E1]/40">
              <div className="flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0B1220]" />
                <span>ضمانت اصالت</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#0B1220]" />
                <span>ارسال اکسپرس</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <RotateCcw className="w-3.5 h-3.5 text-[#0B1220]" />
                <span>۷ روز بازگشت</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
