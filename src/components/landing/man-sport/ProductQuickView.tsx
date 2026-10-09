'use client';

import React, { useState, useEffect } from 'react';
import { ManSportProduct } from '@/data/man-sport';
import SizeGuideModal from './SizeGuideModal';
import {
  X,
  ShoppingBag,
  Check,
  Star,
  Ruler,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Plus,
  Minus,
  CheckCircle2,
} from 'lucide-react';

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
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs'>('desc');
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [sizeWarning, setSizeWarning] = useState(false);

  // Reset state on product change
  useEffect(() => {
    if (product) {
      setSelectedImageIndex(0);
      setSelectedSize(product.sizes[0] || '');
      setSelectedColorIndex(0);
      setQuantity(1);
      setActiveTab('desc');
      setSizeWarning(false);
    }
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    if (!selectedSize) {
      setSizeWarning(true);
      return;
    }
    setSizeWarning(false);
    // Add product with selected size & quantity
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  const currentPrice = product.discountPrice || product.price;
  const totalPrice = currentPrice * quantity;
  const currentColor = product.colors[selectedColorIndex] || product.colors[0];

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-0 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
        dir="rtl"
      >
        <div className="bg-[#111111] border-0 sm:border border-white/15 text-white w-full h-full sm:h-auto sm:max-h-[92vh] max-w-5xl rounded-none sm:rounded-3xl p-4 sm:p-8 relative shadow-2xl flex flex-col justify-between overflow-y-auto">

          {/* STICKY MOBILE HEADER */}
          <div className="sticky top-0 z-30 flex items-center justify-between pb-3 mb-3 bg-[#111111]/95 backdrop-blur-md border-b border-white/10 lg:hidden">
            <span className="text-xs font-bold font-peyda text-white truncate pl-2">
              {product.name}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
              title="بستن"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* DESKTOP CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="hidden lg:flex absolute top-4 left-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-30"
            title="بستن"
          >
            <X className="w-5 h-5" />
          </button>

          {/* TOP LAYOUT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 flex-1">

            {/* GALLERY AREA (5 COLS) */}
            <div className="lg:col-span-5 space-y-3">
              {/* MAIN PORTRAIT IMAGE */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black border border-white/10 group">
                <img
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />

                {/* BADGES */}
                <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
                  {product.badge && (
                    <span className="px-2.5 py-1 rounded-md bg-[#E04A24] text-white font-peyda text-[11px] font-semibold">
                      {product.badge}
                    </span>
                  )}
                  {product.discountPrice && (
                    <span className="px-2.5 py-1 rounded-md bg-[#FF5A1F] text-white font-peyda text-[11px] font-semibold">
                      تخفیف ویژه
                    </span>
                  )}
                </div>

                {/* GALLERY NAVIGATION ARROWS */}
                {product.images.length > 1 && (
                  <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() =>
                        setSelectedImageIndex(
                          (prev) => (prev - 1 + product.images.length) % product.images.length
                        )
                      }
                      className="pointer-events-auto p-2 rounded-full bg-black/60 hover:bg-black text-white border border-white/20"
                      title="قبلی"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setSelectedImageIndex(
                          (prev) => (prev + 1) % product.images.length
                        )
                      }
                      className="pointer-events-auto p-2 rounded-full bg-black/60 hover:bg-black text-white border border-white/20"
                      title="بعدی"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* THUMBNAILS */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-16 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      idx === selectedImageIndex
                        ? 'border-[#E04A24] scale-105 shadow-md'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* PRODUCT DETAILS AREA (7 COLS) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5">

              {/* BRAND, TITLE & RATING */}
              <div className="space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-mono font-bold text-[#E04A24] uppercase tracking-widest">
                    {product.brand}
                  </span>

                  {/* RATING */}
                  <div className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-mono font-bold text-white">
                      {product.rating}
                    </span>
                    <span className="text-[11px] text-slate-400 font-peyda font-medium">
                      ({product.reviewCount} نظر)
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold font-peyda text-white leading-tight">
                  {product.name}
                </h2>

                <div className="flex items-center gap-3 text-xs text-slate-400 font-peyda font-medium">
                  <span>کد کالا: <span className="font-mono text-slate-300">{product.sku || product.id}</span></span>
                  <span>•</span>
                  <span>تن‌خور: <span className="text-slate-300">{product.fit}</span></span>
                </div>
              </div>

              {/* PRICE AREA */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-peyda font-medium block mb-0.5">
                    قیمت واحد:
                  </span>
                  {product.discountPrice ? (
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl font-bold font-mono text-[#E04A24]">
                        {formatPrice(product.discountPrice)}
                      </span>
                      <span className="text-xs font-mono text-slate-500 line-through">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-lg sm:text-xl font-bold font-mono text-white">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-peyda font-medium text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>تضمین اصالت ٪۱۰۰</span>
                </div>
              </div>

              {/* COLOR SELECTOR */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-peyda">
                  <span className="font-semibold text-slate-300">رنگ انتخاب شده:</span>
                  <span className="font-bold text-white bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                    {currentColor?.name || 'مشکی'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {product.colors.map((c, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColorIndex(idx)}
                      className={`group relative p-1 rounded-full border-2 transition-all ${
                        selectedColorIndex === idx
                          ? 'border-[#E04A24] scale-110'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                      title={c.name}
                    >
                      <span
                        className="w-7 h-7 rounded-full block border border-white/20 shadow-inner"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* SIZE SELECTOR & SIZE GUIDE MODAL TRIGGER */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-semibold font-peyda text-slate-300">
                    انتخاب سایز:
                  </span>

                  {/* SIZE GUIDE TRIGGER BUTTON */}
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="text-xs font-medium font-peyda text-[#E04A24] hover:text-white flex items-center gap-1.5 bg-[#E04A24]/10 hover:bg-[#E04A24]/20 border border-[#E04A24]/30 px-3 py-1.5 rounded-xl transition-colors"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>راهنمای سایز</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setSizeWarning(false);
                      }}
                      className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold border transition-all ${
                        selectedSize === size
                          ? 'bg-[#E04A24] text-white border-[#E04A24] shadow-md scale-105'
                          : 'bg-white/5 text-white border-white/10 hover:border-white/30'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {sizeWarning && (
                  <p className="text-xs text-rose-400 font-peyda font-medium animate-pulse">
                    لطفا ابتدا یکی از سایزها را انتخاب کنید.
                  </p>
                )}
              </div>

              {/* QUANTITY & ADD TO CART ACTION - Sticky on Mobile Bottom */}
              <div className="sticky bottom-0 bg-[#111111] pt-3 pb-2 border-t border-white/10 space-y-3 -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="flex items-center gap-3">
                  {/* QUANTITY COUNTER */}
                  <div className="flex items-center border border-white/15 bg-white/5 rounded-2xl p-1 shrink-0">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white"
                      title="کاهش"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-mono font-bold text-sm text-white">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white"
                      title="افزایش"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* ADD TO CART BUTTON */}
                  <button
                    onClick={handleAdd}
                    className={`flex-1 py-3.5 sm:py-4 px-4 rounded-2xl font-bold font-peyda text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                      isAdded
                        ? 'bg-[#2455FF] text-white'
                        : 'bg-[#E04A24] hover:bg-white text-white hover:text-black shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>با موفقیت افزوده شد</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5" />
                        <span>
                          افزودن به سبد خرید • {formatPrice(totalPrice)}
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* TRUST BADGES */}
                <div className="grid grid-cols-3 gap-2 text-[10px] sm:text-[11px] font-peyda font-medium text-slate-400">
                  <div className="flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-white/5 border border-white/5">
                    <Truck className="w-3.5 h-3.5 text-[#E04A24]" />
                    <span>ارسال سریع</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-white/5 border border-white/5">
                    <RotateCcw className="w-3.5 h-3.5 text-[#E04A24]" />
                    <span>۷ روز بازگشت</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-white/5 border border-white/5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#E04A24]" />
                    <span>ضمانت کیفیت</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* LOWER SECTION: PRODUCT DESCRIPTION & SPECIFICATIONS TABS */}
          <div className="pt-6 mt-6 border-t border-white/10 space-y-4">

            {/* TAB BUTTONS */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-2">
              <button
                onClick={() => setActiveTab('desc')}
                className={`pb-2 text-xs sm:text-sm font-semibold font-peyda relative transition-colors ${
                  activeTab === 'desc'
                    ? 'text-[#E04A24]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                توضیحات و ویژگی‌های محصول
                {activeTab === 'desc' && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#E04A24] rounded-full" />
                )}
              </button>

              <button
                onClick={() => setActiveTab('specs')}
                className={`pb-2 text-xs sm:text-sm font-semibold font-peyda relative transition-colors ${
                  activeTab === 'specs'
                    ? 'text-[#E04A24]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                مشخصات فنی و نگهداری
                {activeTab === 'specs' && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#E04A24] rounded-full" />
                )}
              </button>
            </div>

            {/* TAB CONTENT: DESCRIPTION & FEATURES */}
            {activeTab === 'desc' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <p className="text-xs sm:text-sm text-slate-300 font-peyda leading-relaxed font-medium">
                  {product.description}
                </p>

                {product.features && product.features.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold font-peyda text-white block">
                      ویژگی‌های برجسته این محصول:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-peyda font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#E04A24] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: TECHNICAL SPECS */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-peyda font-medium animate-in fade-in duration-200">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">جنس و متریال:</span>
                  <span className="text-white font-semibold">{product.material}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">نوع تن‌خور (Fit):</span>
                  <span className="text-white font-semibold">{product.fit}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">کشور مبدا برند:</span>
                  <span className="text-white font-semibold">{product.countryOfOrigin || 'اروپا/آسیا'}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">کد شناسه محصول (SKU):</span>
                  <span className="text-white font-mono font-bold">{product.sku || product.id}</span>
                </div>

                {product.careInstructions && (
                  <div className="sm:col-span-2 p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-slate-400 font-semibold block">دستورالعمل نگهداری و شستشو:</span>
                    <p className="text-slate-300 leading-relaxed">{product.careInstructions}</p>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      </div>

      {/* SIZE GUIDE MODAL */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        productCategory={product.category}
        availableSizes={product.sizes}
        onSelectSize={(size) => {
          setSelectedSize(size);
          setSizeWarning(false);
        }}
      />
    </>
  );
}
