'use client';

import React, { useState } from 'react';
import { X, Calculator, Table, Check, HelpCircle, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSize?: (size: string) => void;
}

interface SizeRow {
  size: string;
  euSize: string;
  bust: string;
  waist: string;
  hips: string;
}

const SIZE_TABLE_DATA: SizeRow[] = [
  { size: '۳۶', euSize: 'S', bust: '۸۲ - ۸۶', waist: '۶۴ - ۶۸', hips: '۹۰ - ۹۴' },
  { size: '۳۸', euSize: 'M', bust: '۸۶ - ۹۰', waist: '۶۸ - ۷۲', hips: '۹۴ - ۹۸' },
  { size: '۴۰', euSize: 'L', bust: '۹۰ - ۹۴', waist: '۷۲ - ۷۶', hips: '۹۸ - ۱۰۲' },
  { size: '۴۲', euSize: 'XL', bust: '۹۴ - ۹۸', waist: '۷۶ - ۸۰', hips: '۱۰۲ - ۱۰۶' },
];

export default function SizeGuideModal({
  isOpen,
  onClose,
  onSelectSize,
}: SizeGuideModalProps) {
  const [activeTab, setActiveTab] = useState<'table' | 'calculator'>('table');

  // CALCULATOR INPUT STATES (in cm)
  const [bustCm, setBustCm] = useState<number>(88);
  const [waistCm, setWaistCm] = useState<number>(70);
  const [hipsCm, setHipsCm] = useState<number>(96);

  if (!isOpen) return null;

  // Calculate suggested size based on input measurements
  const calculateSuggestedSize = () => {
    // Determine max implied size based on measurements
    const bustSizeVal = bustCm <= 86 ? 36 : bustCm <= 90 ? 38 : bustCm <= 94 ? 40 : 42;
    const waistSizeVal = waistCm <= 68 ? 36 : waistCm <= 72 ? 38 : waistCm <= 76 ? 40 : 42;
    const hipsSizeVal = hipsCm <= 94 ? 36 : hipsCm <= 98 ? 38 : hipsCm <= 102 ? 40 : 42;

    const maxVal = Math.max(bustSizeVal, waistSizeVal, hipsSizeVal);

    if (maxVal === 36) return { fa: '۳۶', en: 'S', note: 'تن‌خور اندامی متناسب' };
    if (maxVal === 38) return { fa: '۳۸', en: 'M', note: 'تن‌خور استاندارد مایل به راحت' };
    if (maxVal === 40) return { fa: '۴۰', en: 'L', note: 'تن‌خور آزاد و شیک' };
    return { fa: '۴۲', en: 'XL', note: 'تن‌خور کلاسیک و راحت' };
  };

  const suggestedResult = calculateSuggestedSize();

  const handleApplySize = (sizeStr: string) => {
    if (onSelectSize) {
      onSelectSize(sizeStr);
    }
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white text-[#111111] shadow-2xl overflow-hidden border border-black/10 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-5 border-b border-[#E5E5E5] bg-[#F9F9F9]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center">
              <Ruler className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-peyda text-[#111111]">
                راهنمای سایز و محاسبه‌گر
              </h3>
              <p className="text-[11px] text-[#6B6B6B] font-peyda">
                جدول دقیق اندازه‌ها و ابزار هوشمند پیشنهاد سایز
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#111111] hover:bg-black/5 transition-colors border border-black/10"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex border-b border-[#E5E5E5] bg-white">
          <button
            onClick={() => setActiveTab('table')}
            className={`flex-1 py-3 px-4 text-xs font-semibold font-peyda flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === 'table'
                ? 'border-[#111111] text-[#111111] bg-white'
                : 'border-transparent text-[#6B6B6B] hover:text-[#111111] bg-[#FDFDFD]'
            }`}
          >
            <Table className="w-4 h-4" />
            <span>جدول اندازه‌ها</span>
          </button>

          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex-1 py-3 px-4 text-xs font-semibold font-peyda flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === 'calculator'
                ? 'border-[#111111] text-[#111111] bg-white'
                : 'border-transparent text-[#6B6B6B] hover:text-[#111111] bg-[#FDFDFD]'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>محاسبه‌گر هوشمند سایز</span>
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* TAB 1: SIZE CHART TABLE */}
          {activeTab === 'table' && (
            <div className="space-y-6">
              <div className="border border-[#E5E5E5] overflow-hidden">
                <table className="w-full text-center text-xs font-peyda">
                  <thead>
                    <tr className="bg-[#111111] text-white font-medium">
                      <th className="py-3 px-2 border-b border-[#333333]">سایز (ایران)</th>
                      <th className="py-3 px-2 border-b border-[#333333]">استاندارد EU</th>
                      <th className="py-3 px-2 border-b border-[#333333]">دور سینه (cm)</th>
                      <th className="py-3 px-2 border-b border-[#333333]">دور کمر (cm)</th>
                      <th className="py-3 px-2 border-b border-[#333333]">دور باسن (cm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5E5]">
                    {SIZE_TABLE_DATA.map((row) => (
                      <tr
                        key={row.size}
                        className="hover:bg-[#F5F5F5] transition-colors cursor-pointer"
                        onClick={() => handleApplySize(row.size)}
                      >
                        <td className="py-3 px-2 font-bold text-[#111111]">{row.size}</td>
                        <td className="py-3 px-2 text-[#6B6B6B] font-mono">{row.euSize}</td>
                        <td className="py-3 px-2 text-[#333333]">{row.bust}</td>
                        <td className="py-3 px-2 text-[#333333]">{row.waist}</td>
                        <td className="py-3 px-2 text-[#333333]">{row.hips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* HOW TO MEASURE INSTRUCTIONS */}
              <div className="bg-[#F9F9F9] border border-[#E5E5E5] p-4 text-xs space-y-2 text-[#444444]">
                <div className="flex items-center gap-1.5 font-bold text-[#111111] font-peyda">
                  <HelpCircle className="w-4 h-4" />
                  <span>راهنمای اندازه‌گیری دقیق:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-[#6B6B6B] leading-relaxed pr-1 font-peyda">
                  <li><strong>دور سینه:</strong> برجسته‌ترین بخش سینه را به صورت افقی اندازه‌گیری کنید.</li>
                  <li><strong>دور کمر:</strong> باریک‌ترین قسمت کمر (بالای ناف) را اندازه بگیرید.</li>
                  <li><strong>دور باسن:</strong> برجسته‌ترین بخش باسن را به شکل موازی با زمین بسنجید.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: SIZE CALCULATOR */}
          {activeTab === 'calculator' && (
            <div className="space-y-6">
              <div className="space-y-4">
                {/* BUST INPUT */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-peyda">
                    <span className="font-semibold text-[#111111]">دور سینه:</span>
                    <span className="font-mono text-[#111111] bg-[#F0F0F0] px-2 py-0.5 border border-[#E0E0E0]">
                      {bustCm} سانتی‌متر
                    </span>
                  </div>
                  <input
                    type="range"
                    min="75"
                    max="110"
                    value={bustCm}
                    onChange={(e) => setBustCm(Number(e.target.value))}
                    className="w-full accent-[#111111] cursor-pointer h-1.5 bg-[#E5E5E5] rounded-xs"
                  />
                </div>

                {/* WAIST INPUT */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-peyda">
                    <span className="font-semibold text-[#111111]">دور کمر:</span>
                    <span className="font-mono text-[#111111] bg-[#F0F0F0] px-2 py-0.5 border border-[#E0E0E0]">
                      {waistCm} سانتی‌متر
                    </span>
                  </div>
                  <input
                    type="range"
                    min="60"
                    max="98"
                    value={waistCm}
                    onChange={(e) => setWaistCm(Number(e.target.value))}
                    className="w-full accent-[#111111] cursor-pointer h-1.5 bg-[#E5E5E5] rounded-xs"
                  />
                </div>

                {/* HIPS INPUT */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-peyda">
                    <span className="font-semibold text-[#111111]">دور باسن:</span>
                    <span className="font-mono text-[#111111] bg-[#F0F0F0] px-2 py-0.5 border border-[#E0E0E0]">
                      {hipsCm} سانتی‌متر
                    </span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="115"
                    value={hipsCm}
                    onChange={(e) => setHipsCm(Number(e.target.value))}
                    className="w-full accent-[#111111] cursor-pointer h-1.5 bg-[#E5E5E5] rounded-xs"
                  />
                </div>
              </div>

              {/* RESULT DISPLAY BOX */}
              <div className="p-4 bg-[#111111] text-white border border-black flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-right">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#A0A0A0]">
                    SUGGESTED SIZE — سایز پیشنهادی
                  </span>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <span className="text-2xl font-bold font-peyda">
                      سایز {suggestedResult.fa}
                    </span>
                    <span className="text-xs font-mono text-[#CCCCCC] bg-white/10 px-2 py-0.5">
                      ({suggestedResult.en})
                    </span>
                  </div>
                  <p className="text-[11px] text-[#BBBBBB] font-peyda">
                    {suggestedResult.note}
                  </p>
                </div>

                <button
                  onClick={() => handleApplySize(suggestedResult.fa)}
                  className="w-full sm:w-auto py-2.5 px-5 bg-white text-[#111111] hover:bg-[#F0F0F0] font-bold text-xs font-peyda flex items-center justify-center gap-2 transition-colors shrink-0"
                >
                  <Check className="w-4 h-4" />
                  <span>انتخاب این سایز</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="p-4 border-t border-[#E5E5E5] bg-[#F9F9F9] text-center">
          <p className="text-[11px] text-[#6B6B6B] font-peyda">
            برای راهنمایی بیشتر می‌توانید با پشتیبانی اختصاصی نوآر تماس بگیرید.
          </p>
        </div>
      </div>
    </div>
  );
}
