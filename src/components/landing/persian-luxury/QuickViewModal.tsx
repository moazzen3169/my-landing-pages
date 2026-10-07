'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Heart, ShoppingBag, Check, Ruler, ShieldCheck, Sparkles, Truck } from 'lucide-react';
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
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'care'>('details');

  React.useEffect(() => {
    if (product) {
      setSelectedImageIdx(0);
      setSelectedColor(product.colors[0]?.name || '');
      setSelectedSize(product.category === 'shoes' ? product.sizes[0] || '37' : '');
      setAddedSuccess(false);
      setIsSizeGuideOpen(false);
      setActiveTab('details');
    }
  }, [product]);

  if (!product) return null;

  const isShoes = product.category === 'shoes';

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const shoeSizeChart = [
    { eu: '36', cm: '23.0', us: '6', uk: '3.5' },
    { eu: '37', cm: '23.5', us: '6.5', uk: '4' },
    { eu: '38', cm: '24.0', us: '7.5', uk: '5' },
    { eu: '39', cm: '24.5', us: '8.5', uk: '6' },
    { eu: '40', cm: '25.0', us: '9', uk: '6.5' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-md font-peyda dir-rtl">

      {/* MAIN CONTAINER WITH SPACIOUS LAYOUT */}
      <div
        className="relative w-full max-w-5xl bg-[#FFFFFF] border border-[#E5E5E5] overflow-hidden max-h-[92vh] flex flex-col md:flex-row shadow-2xl rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-30 p-2 text-[#000000] hover:opacity-50 transition-opacity bg-white/80 backdrop-blur-sm rounded-full"
          aria-label="بستن"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* GALLERY SECTION (LEFT ON DESKTOP, TOP ON MOBILE) */}
        <div className="w-full md:w-1/2 bg-[#F7F7F7] relative flex flex-col justify-between p-6 sm:p-8">
          <div className="relative aspect-[3/4] w-full bg-[#FAFAFA] overflow-hidden">
            <Image
              src={product.images[selectedImageIdx] || product.images[0]}
              alt={product.name}
              fill
              className="object-cover object-center transition-all duration-500"
              unoptimized
            />
          </div>

          {/* GALLERY THUMBNAILS */}
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3 justify-center">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImageIdx(i)}
                  className={`w-14 h-16 relative border transition-all ${
                    selectedImageIdx === i
                      ? 'border-[#000000] opacity-100 scale-105'
                      : 'border-transparent opacity-60 hover:opacity-90'
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" unoptimized />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* DETAILS SECTION WITH GENEROUS WHITE SPACE */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-12 overflow-y-auto flex flex-col justify-between text-start space-y-8 bg-[#FFFFFF]">

          <div className="space-y-6">

            {/* BRAND & NAME */}
            <div>
              <span className="block text-[11px] font-mono text-[#666666] uppercase tracking-widest mb-1.5" dir="ltr">
                {product.brand}
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#000000] leading-snug tracking-tight">
                {product.name}
              </h2>

              {/* PRICE */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-lg font-normal text-[#000000]">
                  {product.priceFormatted}
                </span>
                {product.originalPriceFormatted && (
                  <span className="text-xs text-[#999999] line-through font-normal">
                    {product.originalPriceFormatted}
                  </span>
                )}
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-xs text-[#444444] leading-relaxed font-normal pt-2 border-t border-[#F0F0F0]">
              {product.descriptionPersian}
            </p>

            {/* COLOR SELECTION */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-3 pt-2">
                <span className="block text-xs font-medium text-[#111111]">
                  رنگ: <span className="font-normal text-[#666666]">{selectedColor}</span>
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`px-3.5 py-1.5 text-xs transition-all border ${
                        selectedColor === c.name
                          ? 'border-[#000000] bg-[#000000] text-white'
                          : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#111111] hover:border-[#000000]'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SHOE SIZE SELECTION & SIZE GUIDE (ONLY FOR SHOES) */}
            {isShoes && product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3 pt-3 border-t border-[#F0F0F0]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#111111]">انتخاب سایز کفش</span>

                  {/* SIZE GUIDE TRIGGER BUTTON */}
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="flex items-center gap-1.5 text-[11px] text-[#000000] underline underline-offset-4 hover:opacity-70 transition-opacity"
                  >
                    <Ruler className="w-3.5 h-3.5 stroke-[1.25]" />
                    <span>راهنمای سایز</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`w-11 h-11 text-xs border flex items-center justify-center transition-all ${
                        selectedSize === s
                          ? 'border-[#000000] bg-[#000000] text-white font-medium'
                          : 'border-[#E5E5E5] bg-[#FFFFFF] text-[#111111] hover:border-[#000000]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PRODUCT SPECIFICATIONS ACCORDION / TABS */}
            <div className="pt-4 border-t border-[#F0F0F0] space-y-3">
              <div className="flex border-b border-[#E5E5E5] text-xs">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-2.5 px-1 font-medium transition-colors border-b-2 ml-6 ${
                    activeTab === 'details'
                      ? 'border-[#000000] text-[#000000]'
                      : 'border-transparent text-[#888888] hover:text-[#000000]'
                  }`}
                >
                  مشخصات فنی
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`pb-2.5 px-1 font-medium transition-colors border-b-2 ${
                    activeTab === 'care'
                      ? 'border-[#000000] text-[#000000]'
                      : 'border-transparent text-[#888888] hover:text-[#000000]'
                  }`}
                >
                  اصالت و نگهداری
                </button>
              </div>

              {activeTab === 'details' ? (
                <div className="space-y-2 text-xs text-[#555555] py-2 leading-relaxed">
                  <div className="flex justify-between py-1 border-b border-[#F7F7F7]">
                    <span className="text-[#888888]">جنس متریال:</span>
                    <span className="font-normal text-[#111111]">{product.materialPersian}</span>
                  </div>

                  {product.dimensionsPersian && (
                    <div className="flex justify-between py-1 border-b border-[#F7F7F7]">
                      <span className="text-[#888888]">ابعاد دقیق:</span>
                      <span className="font-normal text-[#111111]">{product.dimensionsPersian}</span>
                    </div>
                  )}

                  {product.heelHeightPersian && (
                    <div className="flex justify-between py-1 border-b border-[#F7F7F7]">
                      <span className="text-[#888888]">ارتفاع پاشنه:</span>
                      <span className="font-normal text-[#111111]">{product.heelHeightPersian}</span>
                    </div>
                  )}

                  <div className="pt-1 text-[#666666]">
                    {product.detailsPersian}
                  </div>
                </div>
              ) : (
                <div className="space-y-3 text-xs text-[#555555] py-2 leading-relaxed">
                  <div className="flex items-start gap-2 text-[#333333]">
                    <ShieldCheck className="w-4 h-4 text-[#111111] shrink-0 mt-0.5 stroke-[1.5]" />
                    <span>{product.shippingInfoPersian}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#333333]">
                    <Sparkles className="w-4 h-4 text-[#111111] shrink-0 mt-0.5 stroke-[1.5]" />
                    <span>{product.careInstructionsPersian}</span>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* ACTION BUTTONS */}
          <div className="pt-6 border-t border-[#E5E5E5] flex gap-3 mt-8">
            <button
              onClick={handleAdd}
              className="flex-1 py-4 bg-[#000000] hover:bg-[#222222] text-white text-xs font-normal tracking-wider transition-colors flex items-center justify-center gap-2 rounded-none"
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4 stroke-[1.5]" />
                  <span>به سبد اضافه شد</span>
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
              className="p-4 border border-[#000000] text-[#000000] hover:bg-[#F9F9F9] transition-colors"
              title="افزودن به علاقمندی‌ها"
            >
              <Heart className={`w-4 h-4 stroke-[1.25] ${isWishlisted ? 'fill-[#000000]' : ''}`} />
            </button>
          </div>

        </div>
      </div>

      {/* SIZE GUIDE MODAL (SPECIFIC TO SHOES) */}
      {isSizeGuideOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-peyda dir-rtl"
          onClick={() => setIsSizeGuideOpen(false)}
        >
          <div
            className="bg-[#FFFFFF] p-6 sm:p-8 max-w-lg w-full relative space-y-6 border border-[#E5E5E5] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="absolute top-4 right-4 p-1 text-[#000000] hover:opacity-60"
            >
              <X className="w-5 h-5 stroke-[1.25]" />
            </button>

            <div className="border-b border-[#E5E5E5] pb-4">
              <span className="text-[10px] font-mono text-[#888888] uppercase tracking-widest block mb-1">
                SIZE GUIDE
              </span>
              <h3 className="text-lg font-light text-[#000000]">
                راهنمای جامع سایز کفش زنانه
              </h3>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-center border-collapse">
                <thead>
                  <tr className="bg-[#F7F7F7] text-[#111111] border-b border-[#E5E5E5]">
                    <th className="py-2.5 px-3 font-medium">سایز اروپایی (EU)</th>
                    <th className="py-2.5 px-3 font-medium">طول پا (سانتی‌متر)</th>
                    <th className="py-2.5 px-3 font-medium">سایز آمریکا (US)</th>
                    <th className="py-2.5 px-3 font-medium">سایز انگلیس (UK)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0F0F0] text-[#444444]">
                  {shoeSizeChart.map((row) => (
                    <tr key={row.eu} className="hover:bg-[#FAFAFA]">
                      <td className="py-2.5 px-3 font-mono font-medium text-[#000000]">{row.eu}</td>
                      <td className="py-2.5 px-3 font-mono">{row.cm}</td>
                      <td className="py-2.5 px-3 font-mono">{row.us}</td>
                      <td className="py-2.5 px-3 font-mono">{row.uk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* FITTING TIPS */}
            <div className="bg-[#FAF9F6] p-4 text-xs text-[#555555] space-y-2 border-r-2 border-[#000000]">
              <p className="font-medium text-[#111111]">نکات کلیدی انتخاب سایز:</p>
              <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed">
                <li>برای کفش‌های پاشنه‌دار نوک‌تیز (مانند Louboutin)، نیم سایز بزرگتر پیشنهاد می‌شود.</li>
                <li>اندازه‌گیری طول پا بهتر است در انتهای روز و با جوراب نازک انجام پذیرد.</li>
                <li>در صورت تردید بین دو سایز، کارشناسان ما آماده مشاوره تلفنی می‌باشند.</li>
              </ul>
            </div>

            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="w-full py-3 bg-[#000000] text-white text-xs font-normal transition-colors"
            >
              متوجه شدم
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
