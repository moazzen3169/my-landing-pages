'use client';

import React, { useState, useMemo } from 'react';
import { X, Ruler, Sparkles, Check, Info } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  productCategory?: string;
  availableSizes?: string[];
  onSelectSize: (size: string) => void;
}

// Measurement data for tops
const TOPS_SIZE_TABLE = [
  { size: 'S', chest: '۱۰۰ - ۱۰۴', length: '۷۰', shoulder: '۴۸', sleeve: '۲۱' },
  { size: 'M', chest: '۱۰۵ - ۱۰۹', length: '۷۳', shoulder: '۵۰', sleeve: '۲۲' },
  { size: 'L', chest: '۱۱۰ - ۱۱۵', length: '۷۶', shoulder: '۵۲', sleeve: '۲۳' },
  { size: 'XL', chest: '۱۱۶ - ۱۲۱', length: '۷۹', shoulder: '۵۴', sleeve: '۲۴' },
  { size: '2XL', chest: '۱۲۲ - ۱۲۸', length: '۸۲', shoulder: '۵۶', sleeve: '۲۵' },
];

// Measurement data for pants
const PANTS_SIZE_TABLE = [
  { size: 'M', waist: '۷۸ - ۸۴', length: '۱۰۲', thigh: '۶۰', legOpening: '۱۶' },
  { size: 'L', waist: '۸۵ - ۹۱', length: '۱۰۴', thigh: '۶۳', legOpening: '۱۷' },
  { size: 'XL', waist: '۹۲ - ۹۸', length: '۱۰۶', thigh: '۶۶', legOpening: '۱۸' },
  { size: '2XL', waist: '۹۹ - ۱۰۵', length: '۱۰۸', thigh: '۶۹', legOpening: '۱۹' },
];

export default function SizeGuideModal({
  isOpen,
  onClose,
  productCategory = 't-shirt',
  availableSizes = ['S', 'M', 'L', 'XL', '2XL'],
  onSelectSize,
}: SizeGuideModalProps) {
  const [activeTab, setActiveTab] = useState<'chart' | 'smart'>('chart');

  // Smart size calculator states
  const [height, setHeight] = useState<number>(178);
  const [weight, setWeight] = useState<number>(76);
  const [fitPreference, setFitPreference] = useState<'slim' | 'standard' | 'loose'>('standard');

  const isPants = productCategory === 'pants';

  // Smart size recommendation logic (HOOK CALL BEFORE ANY RETURN)
  const recommendation = useMemo(() => {
    // Basic calculation using Height/Weight ratio index
    let sizeIndex = 2; // Default L (0: S, 1: M, 2: L, 3: XL, 4: 2XL)

    if (height < 170) {
      if (weight < 62) sizeIndex = 0; // S
      else if (weight < 72) sizeIndex = 1; // M
      else if (weight < 82) sizeIndex = 2; // L
      else sizeIndex = 3; // XL
    } else if (height < 182) {
      if (weight < 65) sizeIndex = 1; // M
      else if (weight < 80) sizeIndex = 2; // L
      else if (weight < 92) sizeIndex = 3; // XL
      else sizeIndex = 4; // 2XL
    } else {
      if (weight < 72) sizeIndex = 1; // M
      else if (weight < 85) sizeIndex = 2; // L
      else if (weight < 98) sizeIndex = 3; // XL
      else sizeIndex = 4; // 2XL
    }

    // Adjust for fit preference
    if (fitPreference === 'slim') {
      sizeIndex = Math.max(0, sizeIndex - 1);
    } else if (fitPreference === 'loose') {
      sizeIndex = Math.min(4, sizeIndex + 1);
    }

    const allSizes = ['S', 'M', 'L', 'XL', '2XL'];
    let recommended = allSizes[sizeIndex];

    // Ensure recommended size is in availableSizes
    if (!availableSizes.includes(recommended)) {
      recommended = availableSizes.find((s) => allSizes.indexOf(s) >= sizeIndex) || availableSizes[0] || 'L';
    }

    // Match percentage
    let confidence = 96;
    if (fitPreference !== 'standard') confidence = 92;

    let explanation = '';
    if (fitPreference === 'slim') {
      explanation = `با قد ${height} سانتی‌متر و وزن ${weight} کیلوگرم و ترجیح تن‌خور جذب، سایز ${recommended} فرم بدن شما را شیک و متناسب نشان می‌دهد.`;
    } else if (fitPreference === 'loose') {
      explanation = `با قد ${height} سانتی‌متر و وزن ${weight} کیلوگرم و ترجیح تن‌خور آزاد، سایز ${recommended} استایل اورسایز و راحت خیابانی به شما می‌دهد.`;
    } else {
      explanation = `با توجه به قد ${height} سانتی‌متر و وزن ${weight} کیلوگرم، سایز ${recommended} استانداردترین و ایده‌آل‌ترین تناسب را با فرم بدن شما دارد.`;
    }

    return { size: recommended, confidence, explanation };
  }, [height, weight, fitPreference, availableSizes]);

  if (!isOpen) return null;

  const handleApplySize = (sizeToApply: string) => {
    onSelectSize(sizeToApply);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      dir="rtl"
    >
      <div className="bg-[#111111] border border-white/15 text-white w-full max-w-2xl rounded-3xl p-5 sm:p-7 relative my-auto shadow-2xl space-y-6">

        {/* HEADER */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#E04A24]/10 border border-[#E04A24]/30 flex items-center justify-center text-[#E04A24]">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-peyda text-white">
                راهنمای سایز و پیشنهاد هوشمند
              </h3>
              <p className="text-xs text-slate-400 font-peyda font-medium">
                انتخاب دقیق‌ترین سایز بر اساس ابعاد استاندارد و ویژگی‌های بدنی
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors"
            title="بستن"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* TAB SWITCHER */}
        <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10">
          <button
            onClick={() => setActiveTab('chart')}
            className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold font-peyda flex items-center justify-center gap-2 transition-all ${
              activeTab === 'chart'
                ? 'bg-[#E04A24] text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Ruler className="w-4 h-4" />
            <span>جدول سایزبندی</span>
          </button>

          <button
            onClick={() => setActiveTab('smart')}
            className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold font-peyda flex items-center justify-center gap-2 transition-all ${
              activeTab === 'smart'
                ? 'bg-[#E04A24] text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>پیشنهاد سایز هوشمند</span>
          </button>
        </div>

        {/* TAB CONTENT 1: SIZE CHART TABLE */}
        {activeTab === 'chart' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between text-xs text-slate-400 font-peyda font-medium">
              <span>تمامی اندازه‌ها بر حسب سانتی‌متر (CM) محاسبه شده‌اند.</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 text-[#E04A24] border border-[#E04A24]/30 font-semibold">
                {isPants ? 'دسته‌بندی: شلوار و اسلش' : 'دسته‌بندی: بالا‌پوش (تی‌شرت/هودی/سویشرت)'}
              </span>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
              <table className="w-full text-right text-xs sm:text-sm font-peyda border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-slate-300 font-semibold">
                    <th className="p-3 text-center">سایز</th>
                    {isPants ? (
                      <>
                        <th className="p-3 text-center">دور کمر (cm)</th>
                        <th className="p-3 text-center">قد شلوار (cm)</th>
                        <th className="p-3 text-center">دور ران (cm)</th>
                        <th className="p-3 text-center">دمپا (cm)</th>
                      </>
                    ) : (
                      <>
                        <th className="p-3 text-center">دور سینه (cm)</th>
                        <th className="p-3 text-center">قد لباس (cm)</th>
                        <th className="p-3 text-center">عرض شانه (cm)</th>
                        <th className="p-3 text-center">قد آستین (cm)</th>
                      </>
                    )}
                    <th className="p-3 text-center">انتخاب</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-medium">
                  {(isPants ? PANTS_SIZE_TABLE : TOPS_SIZE_TABLE).map((row) => {
                    const isAvailable = availableSizes.includes(row.size);
                    return (
                      <tr
                        key={row.size}
                        className={`hover:bg-white/5 transition-colors ${
                          !isAvailable ? 'opacity-40' : ''
                        }`}
                      >
                        <td className="p-3 text-center font-mono font-bold text-white text-sm">
                          {row.size}
                        </td>
                        {isPants ? (
                          <>
                            <td className="p-3 text-center text-slate-300 font-mono">{(row as any).waist}</td>
                            <td className="p-3 text-center text-slate-300 font-mono">{(row as any).length}</td>
                            <td className="p-3 text-center text-slate-300 font-mono">{(row as any).thigh}</td>
                            <td className="p-3 text-center text-slate-300 font-mono">{(row as any).legOpening}</td>
                          </>
                        ) : (
                          <>
                            <td className="p-3 text-center text-slate-300 font-mono">{(row as any).chest}</td>
                            <td className="p-3 text-center text-slate-300 font-mono">{(row as any).length}</td>
                            <td className="p-3 text-center text-slate-300 font-mono">{(row as any).shoulder}</td>
                            <td className="p-3 text-center text-slate-300 font-mono">{(row as any).sleeve}</td>
                          </>
                        )}
                        <td className="p-3 text-center">
                          <button
                            disabled={!isAvailable}
                            onClick={() => handleApplySize(row.size)}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold font-peyda transition-colors ${
                              isAvailable
                                ? 'bg-white/10 hover:bg-[#E04A24] text-white'
                                : 'bg-white/5 text-slate-500 cursor-not-allowed'
                            }`}
                          >
                            {isAvailable ? 'انتخاب' : 'ناموجود'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* TIPS */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#2455FF] shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 font-peyda leading-relaxed font-medium">
                <span className="font-bold text-white block mb-0.5">نکته اندازه‌گیری:</span>
                برای اندازه‌گیری دقیق، متر پارچه‌ای را مماس بر برجسته‌ترین قسمت سینه یا کمر قرار دهید. اگر بین دو سایز تردید دارید، برای استایل آزادتر سایز بزرگتر را انتخاب نمایید.
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT 2: SMART SIZE CALCULATOR */}
        {activeTab === 'smart' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* INPUT CONTROLS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 rounded-2xl bg-white/5 border border-white/10">

              {/* HEIGHT */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-medium font-peyda text-slate-300">
                  <span>قد شما:</span>
                  <span className="font-mono font-bold text-[#E04A24] text-sm">
                    {height} سانتی‌متر
                  </span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="205"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-[#E04A24] bg-white/10 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>150 cm</span>
                  <span>205 cm</span>
                </div>
              </div>

              {/* WEIGHT */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-medium font-peyda text-slate-300">
                  <span>وزن شما:</span>
                  <span className="font-mono font-bold text-[#E04A24] text-sm">
                    {weight} کیلوگرم
                  </span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="125"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-[#E04A24] bg-white/10 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>45 kg</span>
                  <span>125 kg</span>
                </div>
              </div>

            </div>

            {/* FIT PREFERENCE */}
            <div className="space-y-2">
              <span className="text-xs font-medium font-peyda text-slate-300 block">
                ترجیح نوع تن‌خور و استایل:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'slim', label: 'جذب / چسبیده' },
                  { id: 'standard', label: 'استاندارد / معمولی' },
                  { id: 'loose', label: 'آزاد / اورسایز' },
                ].map((fit) => (
                  <button
                    key={fit.id}
                    onClick={() => setFitPreference(fit.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold font-peyda border transition-all ${
                      fitPreference === fit.id
                        ? 'bg-[#E04A24] text-white border-[#E04A24]'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    {fit.label}
                  </button>
                ))}
              </div>
            </div>

            {/* RECOMMENDATION RESULT CARD */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1E1E1E] to-[#161616] border border-[#E04A24]/40 relative overflow-hidden space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#E04A24]" />
                  <span className="text-xs font-bold font-peyda text-slate-300">
                    نتیجه پیشنهاد هوشمند:
                  </span>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-[#E04A24]/20 text-[#E04A24] text-xs font-mono font-bold border border-[#E04A24]/40">
                  {recommendation.confidence}% تطابق
                </span>
              </div>

              <div className="flex items-center gap-4 py-2">
                <div className="w-16 h-16 rounded-2xl bg-[#E04A24] text-white flex items-center justify-center text-2xl font-black font-mono shadow-lg shrink-0">
                  {recommendation.size}
                </div>

                <div className="text-xs text-slate-300 font-peyda leading-relaxed font-medium">
                  {recommendation.explanation}
                </div>
              </div>

              {/* ACTION BUTTON */}
              <button
                onClick={() => handleApplySize(recommendation.size)}
                className="w-full py-3 rounded-xl bg-[#E04A24] hover:bg-white hover:text-black text-white font-semibold font-peyda text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors mt-2"
              >
                <Check className="w-4 h-4" />
                <span>اعمال سایز {recommendation.size} و انتخاب محصول</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
