'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Heart, ShoppingBag, Check, ShieldCheck, Truck, Ruler } from 'lucide-react';
import { WomanLuxProduct, ScrollSectionProduct } from '@/data/woman-lux';
import SizeGuideModal from '@/components/landing/woman-lux/SizeGuideModal';

type AnyProduct = WomanLuxProduct | ScrollSectionProduct;

interface ProductDetailModalProps {
  product: AnyProduct | null;
  onClose: () => void;
  onAddToCart: (product: AnyProduct, selectedColor: string, selectedSize: string, quantity: number) => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist,
}: ProductDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [prevProductId, setPrevProductId] = useState<string | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  if (!product) return null;

  // Derived state sync on product change without setState in useEffect
  if (product.id !== prevProductId) {
    setPrevProductId(product.id);
    setSelectedImageIndex(0);
    setSelectedColor(product.colors && product.colors.length > 0 ? product.colors[0].name : '');
    setSelectedSize(product.sizes && product.sizes.length > 0 ? product.sizes[0] : '');
    setQuantity(1);
    setAddedAnimation(false);
  }

  const images: string[] = ('images' in product && product.images)
    ? product.images
    : ('secondaryImages' in product && product.secondaryImages)
    ? product.secondaryImages
    : [('image' in product ? product.image : '/images/woman-lux/jackest-coat-2.webp')];

  const handleAdd = () => {
    onAddToCart(product, selectedColor || (product.colors?.[0]?.name || ''), selectedSize || (product.sizes?.[0] || ''), quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in font-peyda" dir="rtl">
      <div
        className="relative w-full h-full sm:h-auto max-w-4xl sm:max-h-[92vh] bg-white text-[#111111] shadow-2xl flex flex-col md:flex-row overflow-y-auto justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MOBILE STICKY TOP BAR */}
        <div className="sticky top-0 z-30 flex items-center justify-between p-3.5 bg-white/95 backdrop-blur-md border-b border-black/10 md:hidden">
          <span className="text-xs font-bold text-[#111111] truncate pl-2">
            {product.name}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 bg-[#F5F5F5] hover:bg-[#111111] hover:text-white rounded-full transition-colors shrink-0"
            aria-label="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* DESKTOP CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="hidden md:flex absolute top-4 left-4 z-20 p-2 bg-white/80 backdrop-blur-xs hover:bg-white text-[#111111] transition-colors border border-black/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN: PRODUCT IMAGES GALLERY */}
        <div className="w-full md:w-1/2 pb-4 bg-[#F5F5F5] flex flex-col justify-between shrink-0">

          {/* MAIN SELECTED IMAGE */}
          <div className="relative w-full aspect-[3/4] bg-neutral-200 overflow-hidden mb-4">
            <Image
              src={images[selectedImageIndex] || images[0]}
              alt={product.name}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* THUMBNAILS ROW */}
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-16 aspect-[3/4] border-2 transition-all overflow-hidden ${
                    selectedImageIndex === idx ? 'border-[#111111]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: PRODUCT INFO & PURCHASE CONTROLS */}
        <div className="w-full md:w-1/2 p-5 sm:p-8 flex flex-col justify-between text-right flex-1 space-y-6">
          <div className="space-y-6">

            {/* CATEGORY & NAME */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#6B6B6B] uppercase tracking-widest block" dir="ltr">
                NOIRÉ WOMAN
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-peyda text-[#111111]">
                {product.name}
              </h2>
              <p className="text-lg font-semibold text-[#111111]">
                {product.formattedPrice}
              </p>
            </div>

            {/* COLOR SELECTOR */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs text-[#6B6B6B]">رنگ: {selectedColor || product.colors[0].name}</span>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-all p-0.5 ${
                        (selectedColor || product.colors[0].name) === c.name ? 'border-[#111111] scale-110' : 'border-transparent'
                      }`}
                      title={c.name}
                    >
                      <span className="w-full h-full rounded-full block border border-black/10" style={{ backgroundColor: c.hex }} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SIZE SELECTOR */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#6B6B6B]">سایز: {selectedSize || product.sizes[0]}</span>
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="inline-flex items-center gap-1 text-xs text-[#111111] font-medium underline hover:opacity-75 transition-opacity font-peyda"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>راهنمای سایز</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3.5 py-2 text-xs font-semibold border transition-all ${
                        (selectedSize || product.sizes[0]) === s
                          ? 'border-[#111111] bg-[#111111] text-white'
                          : 'border-[#E5E5E5] text-[#111111] hover:border-[#111111]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* QUANTITY */}
            <div className="space-y-2">
              <span className="text-xs text-[#6B6B6B]">تعداد:</span>
              <div className="flex items-center gap-3 w-max border border-[#E5E5E5] p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center hover:bg-[#F5F5F5] text-sm font-bold"
                >
                  -
                </button>
                <span className="text-xs font-bold px-2">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center hover:bg-[#F5F5F5] text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* DESCRIPTION & SPECIFICATIONS */}
            <div className="border-t border-[#E5E5E5] pt-4 space-y-3 text-xs text-[#6B6B6B] leading-relaxed">
              <p>{product.description}</p>
              {('material' in product) && (
                <p>
                  <strong className="text-[#111111]">جنس: </strong>
                  {(product as WomanLuxProduct).material}
                </p>
              )}
              {('fit' in product) && (
                <p>
                  <strong className="text-[#111111]">تن‌خور: </strong>
                  {(product as WomanLuxProduct).fit}
                </p>
              )}
            </div>
          </div>

          {/* ACTION BUTTONS (Sticky on Mobile Bottom) */}
          <div className="sticky bottom-0 bg-white pt-3 pb-2 sm:py-0 border-t border-[#E5E5E5] space-y-3 -mx-5 px-5 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-3">
              <button
                onClick={handleAdd}
                className={`flex-1 py-3.5 px-6 text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  addedAnimation
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#111111] text-white hover:bg-black'
                }`}
              >
                {addedAnimation ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>به سبد اضافه شد</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>افزودن به سبد خرید</span>
                  </>
                )}
              </button>

              <button
                onClick={() => onToggleWishlist(product.id)}
                className="p-3.5 border border-[#E5E5E5] hover:border-[#111111] transition-colors shrink-0"
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#111111] text-[#111111]' : 'text-[#111111]'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#6B6B6B] pt-1">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" /> ارسال سریع رایگان
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> ضمانت بازگشت ۷ روزه
              </span>
            </div>
          </div>
        </div>
      </div>

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}
