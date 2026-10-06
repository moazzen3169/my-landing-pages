'use client';

import React, { useState } from 'react';
import { X, Calculator, Table, CheckCircle2, HelpCircle } from 'lucide-react';

interface GravitySizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export default function GravitySizeGuideModal({
  isOpen,
  onClose,
  defaultCategory = 'suits',
}: GravitySizeGuideModalProps) {
  const [activeTab, setActiveTab] = useState<'chart' | 'calculator'>('chart');
  const [chartCategory, setChartCategory] = useState<string>(
    defaultCategory === 'shoes'
      ? 'shoes'
      : defaultCategory === 'trousers'
      ? 'trousers'
      : defaultCategory === 'shirts'
      ? 'shirts'
      : 'suits'
  );

  // Calculator inputs
  const [height, setHeight] = useState<number>(178);
  const [weight, setWeight] = useState<number>(76);
  const [fitPreference, setFitPreference] = useState<'slim' | 'regular' | 'comfort'>('regular');
  const [calculatedResult, setCalculatedResult] = useState<{
    suitSize: string;
    shirtSize: string;
    trouserSize: string;
    note: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleCalculate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    let suit = '50';
    let shirt = 'L';
    let trouser = '44';
    let note = 'این محاسبات بر اساس قواره استاندارد پوشاک مردانه گراویتی انجام شده است.';

    if (weight <= 64) {
      suit = fitPreference === 'comfort' ? '48' : '46';
      shirt = fitPreference === 'comfort' ? 'M' : 'S';
      trouser = fitPreference === 'comfort' ? '42' : '40';
    } else if (weight <= 73) {
      suit = fitPreference === 'comfort' ? '50' : '48';
      shirt = fitPreference === 'comfort' ? 'L' : 'M';
      trouser = fitPreference === 'comfort' ? '44' : '42';
    } else if (weight <= 82) {
      suit = fitPreference === 'comfort' ? '52' : fitPreference === 'slim' ? '48' : '50';
      shirt = fitPreference === 'comfort' ? 'XL' : fitPreference === 'slim' ? 'M' : 'L';
      trouser = fitPreference === 'comfort' ? '46' : fitPreference === 'slim' ? '42' : '44';
    } else if (weight <= 92) {
      suit = fitPreference === 'comfort' ? '54' : fitPreference === 'slim' ? '50' : '52';
      shirt = fitPreference === 'comfort' ? 'XXL' : fitPreference === 'slim' ? 'L' : 'XL';
      trouser = fitPreference === 'comfort' ? '48' : fitPreference === 'slim' ? '44' : '46';
    } else if (weight <= 102) {
      suit = fitPreference === 'slim' ? '52' : '54';
      shirt = fitPreference === 'slim' ? 'XL' : 'XXL';
      trouser = fitPreference === 'slim' ? '46' : '48';
    } else {
      suit = '56';
      shirt = 'XXL';
      trouser = '50';
    }

    // Height adjustments
    if (height > 188 && weight <= 80) {
      note = 'با توجه به قد بلند، اگر سرشانه‌های پهنی دارید ترجیحاً یک سایز بزرگ‌تر کت انتخاب کرده و کمر آن را ساسون بزنید.';
    }

    setCalculatedResult({
      suitSize: suit,
      shirtSize: shirt,
      trouserSize: trouser,
      note,
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 font-peyda dir-rtl text-[#111111]" dir="rtl">
      <div className="bg-white max-w-2xl w-full rounded-xs shadow-2xl overflow-hidden border border-[#D7D4CD] relative animate-scaleUp flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#111111] text-white p-4 sm:p-5 flex items-center justify-between border-b border-white/10">
          <div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              راهنمای جامع انتخاب سایز
            </h3>
            <p className="text-xs text-[#AAAAAA] mt-0.5">
              جدول استاندارد اندازه‌ها و محاسبه‌گر هوشمند
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
            aria-label="بستن"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#E5E5E5] bg-[#F8F9FA]">
          <button
            onClick={() => setActiveTab('chart')}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === 'chart'
                ? 'border-[#111111] text-[#111111] bg-white'
                : 'border-transparent text-[#777777] hover:text-[#111111]'
            }`}
          >
            <Table size={16} />
            <span>جدول اندازه‌ها</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('calculator');
              if (!calculatedResult) handleCalculate();
            }}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${
              activeTab === 'calculator'
                ? 'border-[#111111] text-[#111111] bg-white'
                : 'border-transparent text-[#777777] hover:text-[#111111]'
            }`}
          >
            <Calculator size={16} />
            <span>محاسبه‌گر خودکار سایز</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-grow space-y-6">
          {activeTab === 'chart' && (
            <div>
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  { id: 'suits', label: 'کت و شلوار / کت تک' },
                  { id: 'shirts', label: 'پیراهن مردانه' },
                  { id: 'trousers', label: 'شلوار پارچه‌ای' },
                  { id: 'shoes', label: 'کفش و لوفر' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setChartCategory(cat.id)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-xs transition-all border ${
                      chartCategory === cat.id
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'bg-[#F8F9FA] text-[#444444] border-[#E5E5E5] hover:border-[#111111]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Table Renderings */}
              {chartCategory === 'suits' && (
                <div className="overflow-x-auto rounded-xs border border-[#E5E5E5]">
                  <table className="w-full text-xs text-right border-collapse">
                    <thead>
                      <tr className="bg-[#111111] text-white text-[11px] font-bold">
                        <th className="p-2.5">سایز (EUR)</th>
                        <th className="p-2.5">دور سینه (cm)</th>
                        <th className="p-2.5">دور کمر (cm)</th>
                        <th className="p-2.5">عرض شانه (cm)</th>
                        <th className="p-2.5">قد آستین (cm)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E5E5]">
                      {[
                        { size: '46 (S)', chest: '۹۰ - ۹۳', waist: '۷۸ - ۸۱', shoulder: '۴۳', sleeve: '۶۲' },
                        { size: '48 (M)', chest: '۹۴ - ۹۷', waist: '۸۲ - ۸۵', shoulder: '۴۴.۵', sleeve: '۶۳' },
                        { size: '50 (L)', chest: '۹۸ - ۱۰۱', waist: '۸۶ - ۸۹', shoulder: '۴۶', sleeve: '۶۴' },
                        { size: '52 (XL)', chest: '۱۰۲ - ۱۰۵', waist: '۹۰ - ۹۳', shoulder: '۴۷.۵', sleeve: '۶۵' },
                        { size: '54 (XXL)', chest: '۱۰۶ - ۱۰۹', waist: '۹۴ - ۹۸', shoulder: '۴۹', sleeve: '۶۶' },
                        { size: '56 (3XL)', chest: '۱۱۰ - ۱۱۴', waist: '۹۹ - ۱۰۳', shoulder: '۵۰.۵', sleeve: '۶۷' },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}>
                          <td className="p-2.5 font-bold text-[#111111]">{row.size}</td>
                          <td className="p-2.5 text-[#555555]">{row.chest}</td>
                          <td className="p-2.5 text-[#555555]">{row.waist}</td>
                          <td className="p-2.5 text-[#555555]">{row.shoulder}</td>
                          <td className="p-2.5 text-[#555555]">{row.sleeve}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {chartCategory === 'shirts' && (
                <div className="overflow-x-auto rounded-xs border border-[#E5E5E5]">
                  <table className="w-full text-xs text-right border-collapse">
                    <thead>
                      <tr className="bg-[#111111] text-white text-[11px] font-bold">
                        <th className="p-2.5">سایز اصلی</th>
                        <th className="p-2.5">سایز یقه (cm)</th>
                        <th className="p-2.5">دور سینه (cm)</th>
                        <th className="p-2.5">قد پیراهن (cm)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E5E5]">
                      {[
                        { size: 'S', collar: '۳۷ - ۳۸', chest: '۹۲ - ۹۶', length: '۷۳' },
                        { size: 'M', collar: '۳۹ - ۴۰', chest: '۹۷ - ۱۰۱', length: '۷۵' },
                        { size: 'L', collar: '۴۱ - ۴۲', chest: '۱۰۲ - ۱۰۶', length: '۷۷' },
                        { size: 'XL', collar: '۴۳ - ۴۴', chest: '۱۰۷ - ۱۱۱', length: '۷۹' },
                        { size: 'XXL', collar: '۴۵ - ۴۶', chest: '۱۱۲ - ۱۱۶', length: '۸۱' },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}>
                          <td className="p-2.5 font-bold text-[#111111]">{row.size}</td>
                          <td className="p-2.5 text-[#555555]">{row.collar}</td>
                          <td className="p-2.5 text-[#555555]">{row.chest}</td>
                          <td className="p-2.5 text-[#555555]">{row.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {chartCategory === 'trousers' && (
                <div className="overflow-x-auto rounded-xs border border-[#E5E5E5]">
                  <table className="w-full text-xs text-right border-collapse">
                    <thead>
                      <tr className="bg-[#111111] text-white text-[11px] font-bold">
                        <th className="p-2.5">سایز شلوار</th>
                        <th className="p-2.5">دور کمر (cm)</th>
                        <th className="p-2.5">دور باسن (cm)</th>
                        <th className="p-2.5">قد شلوار (cm)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E5E5]">
                      {[
                        { size: '40 (S)', waist: '۷۸ - ۸۰', hips: '۹۲ - ۹۵', length: '۱۰۲' },
                        { size: '42 (M)', waist: '۸۲ - ۸۴', hips: '۹۶ - ۹۹', length: '۱۰۴' },
                        { size: '44 (L)', waist: '۸۶ - ۸۸', hips: '۱۰۰ - ۱۰۳', length: '۱۰۵' },
                        { size: '46 (XL)', waist: '۹۰ - ۹۲', hips: '۱۰۴ - ۱۰۷', length: '۱۰۶' },
                        { size: '48 (XXL)', waist: '۹۴ - ۹۷', hips: '۱۰۸ - ۱۱۱', length: '۱۰۷' },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}>
                          <td className="p-2.5 font-bold text-[#111111]">{row.size}</td>
                          <td className="p-2.5 text-[#555555]">{row.waist}</td>
                          <td className="p-2.5 text-[#555555]">{row.hips}</td>
                          <td className="p-2.5 text-[#555555]">{row.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {chartCategory === 'shoes' && (
                <div className="overflow-x-auto rounded-xs border border-[#E5E5E5]">
                  <table className="w-full text-xs text-right border-collapse">
                    <thead>
                      <tr className="bg-[#111111] text-white text-[11px] font-bold">
                        <th className="p-2.5">سایز اروپایی (EUR)</th>
                        <th className="p-2.5">طول کف پا (سانتی‌متر)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E5E5E5]">
                      {[
                        { size: '40', foot: '۲۵.۵' },
                        { size: '41', foot: '۲۶.۲' },
                        { size: '42', foot: '۲۷.۰' },
                        { size: '43', foot: '۲۷.۸' },
                        { size: '44', foot: '۲۸.۵' },
                        { size: '45', foot: '۲۹.۲' },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}>
                          <td className="p-2.5 font-bold text-[#111111]">{row.size}</td>
                          <td className="p-2.5 text-[#555555]">{row.foot} cm</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="mt-4 p-3 bg-[#F8F9FA] rounded-xs border border-[#E5E5E5] text-[11px] text-[#666666] flex items-start gap-2">
                <HelpCircle size={15} className="text-[#111111] shrink-0 mt-0.5" />
                <p>
                  اندازه‌ها بر اساس پارچه‌های رسمی با خطای استاندارد ۱± سانتی‌متر تنظیم شده‌اند. در صورت وجود سؤال درباره تن‌خور، می‌توانید از تب «محاسبه‌گر خودکار» استفاده کنید.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'calculator' && (
            <div className="space-y-6">
              {/* Form inputs */}
              <form onSubmit={handleCalculate} className="bg-[#F8F9FA] p-4 sm:p-5 rounded-xs border border-[#E5E5E5] space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Height Input */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#111111] mb-1.5">
                      <span>قد شما:</span>
                      <span className="text-[#111111] font-black dir-ltr" dir="ltr">{height} cm</span>
                    </div>
                    <input
                      type="range"
                      min="160"
                      max="205"
                      value={height}
                      onChange={(e) => {
                        setHeight(Number(e.target.value));
                        handleCalculate();
                      }}
                      className="w-full accent-[#111111] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-[#777777] mt-1">
                      <span>۱۶۰ سانتی‌متر</span>
                      <span>۱۸۰ سانتی‌متر</span>
                      <span>۲۰۵ سانتی‌متر</span>
                    </div>
                  </div>

                  {/* Weight Input */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#111111] mb-1.5">
                      <span>وزن شما:</span>
                      <span className="text-[#111111] font-black dir-ltr" dir="ltr">{weight} kg</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="120"
                      value={weight}
                      onChange={(e) => {
                        setWeight(Number(e.target.value));
                        handleCalculate();
                      }}
                      className="w-full accent-[#111111] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-[#777777] mt-1">
                      <span>۵0 کیلوگرم</span>
                      <span>۸۵ کیلوگرم</span>
                      <span>۱۲۰ کیلوگرم</span>
                    </div>
                  </div>
                </div>

                {/* Fit Preference */}
                <div>
                  <label className="block text-xs font-bold text-[#111111] mb-2">
                    تن‌خور دلخواه (برش لباس):
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'slim', label: 'اسلیم فیت (چسبان)' },
                      { id: 'regular', label: 'استاندارد (معمولی)' },
                      { id: 'comfort', label: 'آزاد (کلاسیک)' },
                    ].map((fit) => (
                      <button
                        type="button"
                        key={fit.id}
                        onClick={() => {
                          setFitPreference(fit.id as any);
                          handleCalculate();
                        }}
                        className={`py-2 px-2 text-[11px] font-bold rounded-xs border transition-all ${
                          fitPreference === fit.id
                            ? 'bg-[#111111] text-white border-[#111111]'
                            : 'bg-white text-[#444444] border-[#D7D4CD] hover:border-[#111111]'
                        }`}
                      >
                        {fit.label}
                      </button>
                    ))}
                  </div>
                </div>
              </form>

              {/* Calculated Results output */}
              {calculatedResult && (
                <div className="bg-white p-4 sm:p-5 rounded-xs border-2 border-[#111111] space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#111111] border-b border-[#E5E5E5] pb-3">
                    <CheckCircle2 size={18} className="text-[#111111]" />
                    <span>سایز پیشنهادی هوشمند گراویتی برای شما:</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-[#F8F9FA] p-3 rounded-xs border border-[#E5E5E5]">
                      <span className="text-[11px] text-[#666666] block mb-1">کت و شلوار / کت</span>
                      <span className="text-lg font-black text-[#111111]">{calculatedResult.suitSize}</span>
                    </div>

                    <div className="bg-[#F8F9FA] p-3 rounded-xs border border-[#E5E5E5]">
                      <span className="text-[11px] text-[#666666] block mb-1">پیراهن رسمی</span>
                      <span className="text-lg font-black text-[#111111]">{calculatedResult.shirtSize}</span>
                    </div>

                    <div className="bg-[#F8F9FA] p-3 rounded-xs border border-[#E5E5E5]">
                      <span className="text-[11px] text-[#666666] block mb-1">شلوار پارچه‌ای</span>
                      <span className="text-lg font-black text-[#111111]">{calculatedResult.trouserSize}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#555555] leading-relaxed pt-1 font-medium">
                    {calculatedResult.note}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#F8F9FA] p-4 border-t border-[#E5E5E5] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#111111] hover:bg-[#333333] text-white font-bold text-xs rounded-xs transition-colors"
          >
            متوجه شدم
          </button>
        </div>
      </div>
    </div>
  );
}
