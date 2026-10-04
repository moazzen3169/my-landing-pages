'use client';

import React, { useState } from 'react';
import { ManSportProduct } from '@/data/man-sport';
import { X, ShoppingBag, Check, Star, ShieldCheck, Truck } from 'lucide-react';

interface ProductQuickViewProps {
  product: ManSportProduct | null;
  onClose: () => void;
  onAddToCart: (product: ManSportProduct) => void;
}

export default function ProductQuickView({
  product,
  onClose,
  onAddToCart,
}: ProductQuickViewProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200" dir="rtl">
      <div className="bg-[#111111] border border-white/15 text-white w-full max-w-4xl rounded-3xl p-6 sm:p-8 shadow-2xl relative my-auto grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
          title="بستن"
        >
          <X className="w-5 h-5" />
        </button>

        {/* GALLERY AREA */}
        <div className="md:col-span-6 space-y-3">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-black border border-white/10">
            <img
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex items-center gap-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  idx === selectedImageIndex ? 'border-[#B7FF00]' : 'border-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* DETAILS AREA */}
        <div className="md:col-span-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-[#B7FF00] uppercase tracking-widest">
                {product.brand}
              </span>
              <div className="flex items-center gap-1 text-xs font-mono font-bold text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviewCount})</span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-black font-peyda text-white">
              {product.name}
            </h2>

            <p className="text-xs text-slate-300 font-peyda leading-relaxed mt-2 bg-white/5 p-3 rounded-xl border border-white/5">
              {product.description}
            </p>
          </div>

          {/* SIZE SELECTION */}
          <div className="space-y-2">
            <span className="text-xs font-bold font-peyda text-slate-300 block">انتخاب سایز:</span>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold border transition-all ${
                    selectedSize === size
                      ? 'bg-[#B7FF00] text-black border-[#B7FF00]'
                      : 'bg-white/5 text-white border-white/10 hover:border-white/30'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* PRICE & ADD TO CART */}
          <div className="pt-4 border-t border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-peyda">قیمت کل:</span>
              <span className="text-2xl font-black font-mono text-[#B7FF00]">
                {formatPrice(product.price)}
              </span>
            </div>

            <button
              onClick={handleAdd}
              className={`w-full py-4 rounded-2xl font-extrabold font-peyda text-sm flex items-center justify-center gap-2 transition-all shadow-xl ${
                isAdded
                  ? 'bg-[#2455FF] text-white'
                  : 'bg-[#B7FF00] hover:bg-white text-black'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>به سبد اضافه شد</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>افزودن به سبد خرید</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-around text-[10px] font-peyda text-slate-400 pt-2 border-t border-white/5">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2455FF]" />
              <span>ضمانت اصالت برند</span>
            </div>
            <div className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>ارسال سریع سراسر ایران</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
