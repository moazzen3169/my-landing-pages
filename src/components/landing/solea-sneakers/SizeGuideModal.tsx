'use client';

import React, { useState, useEffect } from 'react';
import { X, Ruler, Calculator, HelpCircle, CheckCircle2, ShieldAlert, ArrowLeft, RefreshCw } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: 'men' | 'women' | 'unisex';
}

type SizeRow = {
  eur: string;
  usMen: string;
  usWomen: string;
  uk: string;
  cm: number;
  in: number;
};

const SIZE_DATA: SizeRow[] = [
  { eur: '36', usMen: '4', usWomen: '5.5', uk: '3.5', cm: 22.5, in: 8.86 },
  { eur: '37', usMen: '5', usWomen: '6.5', uk: '4.5', cm: 23.5, in: 9.25 },
  { eur: '38', usMen: '5.5', usWomen: '7', uk: '5', cm: 24.0, in: 9.45 },
  { eur: '39', usMen: '6.5', usWomen: '8', uk: '6', cm: 24.5, in: 9.65 },
  { eur: '40', usMen: '7', usWomen: '8.5', uk: '6.5', cm: 25.0, in: 9.84 },
  { eur: '41', usMen: '8', usWomen: '9.5', uk: '7.5', cm: 26.0, in: 10.24 },
  { eur: '42', usMen: '8.5', usWomen: '10', uk: '8', cm: 26.5, in: 10.43 },
  { eur: '43', usMen: '9.5', usWomen: '11', uk: '9', cm: 27.5, in: 10.83 },
  { eur: '44', usMen: '10', usWomen: '11.5', uk: '9.5', cm: 28.0, in: 11.02 },
  { eur: '45', usMen: '11', usWomen: '12.5', uk: '10.5', cm: 29.0, in: 11.42 },
  { eur: '46', usMen: '12', usWomen: '13.5', uk: '11.5', cm: 30.0, in: 11.81 },
];

export default function SizeGuideModal({ isOpen, onClose, initialCategory = 'unisex' }: SizeGuideModalProps) {
  const [activeTab, setActiveTab] = useState<'chart' | 'finder' | 'measure' | 'tips'>('chart');
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');
  const [genderFilter, setGenderFilter] = useState<'men' | 'women' | 'unisex'>(initialCategory);

  // Interactive Finder State
  const [footLength, setFootLength] = useState<number>(26.5);
  const [isWideFoot, setIsWideFoot] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Find closest size row based on footLength
  const recommendedRow = SIZE_DATA.reduce((prev, curr) => {
    return Math.abs(curr.cm - footLength) < Math.abs(prev.cm - footLength) ? curr : prev;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#0B1220]/75 backdrop-blur-sm font-peyda"
      dir="rtl"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F8FAFC] border border-[#CBD5E1] w-full max-w-4xl rounded-[24px] overflow-hidden my-auto text-right max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="bg-[#0B1220] text-[#F8FAFC] px-6 py-5 flex items-center justify-between border-b border-[#1E293B]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E293B] border border-[#334155] flex items-center justify-center text-[#8ADDFD]">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-normal">
                راهنمای تخصصی سایزبندی اسنیکر
              </h2>
              <p className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
                SOLEA SNEAKER FIT & SIZE CONVERSION GUIDE
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#1E293B] hover:bg-[#334155] text-[#F8FAFC] flex items-center justify-center transition-colors border border-[#334155]"
            aria-label="بستن"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* NAVIGATION TABS */}
        <div className="bg-[#FFFFFF] border-b border-[#CBD5E1]/60 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1 scrollbar-none">
            <button
              onClick={() => setActiveTab('chart')}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
                activeTab === 'chart'
                  ? 'bg-[#0B1220] text-[#F8FAFC]'
                  : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'
              }`}
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>جدول تطبیق سایز</span>
            </button>

            <button
              onClick={() => setActiveTab('finder')}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
                activeTab === 'finder'
                  ? 'bg-[#0B1220] text-[#F8FAFC]'
                  : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>محاسبه‌گر سایز پا</span>
            </button>

            <button
              onClick={() => setActiveTab('measure')}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
                activeTab === 'measure'
                  ? 'bg-[#0B1220] text-[#F8FAFC]'
                  : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>روش اندازه‌گیری دقیق</span>
            </button>

            <button
              onClick={() => setActiveTab('tips')}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
                activeTab === 'tips'
                  ? 'bg-[#0B1220] text-[#F8FAFC]'
                  : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>نکات قالب اسنیکرها</span>
            </button>
          </div>

          {/* UNIT TOGGLE (FOR CHART TAB) */}
          {activeTab === 'chart' && (
            <div className="flex items-center gap-2 bg-[#F1F5F9] p-1 rounded-xl border border-[#CBD5E1]/60">
              <button
                onClick={() => setUnit('cm')}
                className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg transition-colors ${
                  unit === 'cm' ? 'bg-[#0B1220] text-[#F8FAFC]' : 'text-[#475569] hover:text-[#0B1220]'
                }`}
              >
                سانتی‌متر (CM)
              </button>
              <button
                onClick={() => setUnit('in')}
                className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg transition-colors ${
                  unit === 'in' ? 'bg-[#0B1220] text-[#F8FAFC]' : 'text-[#475569] hover:text-[#0B1220]'
                }`}
              >
                اینچ (IN)
              </button>
            </div>
          )}
        </div>

        {/* MODAL BODY */}
        <div className="p-5 sm:p-8 overflow-y-auto max-h-[calc(92vh-140px)] space-y-6">

          {/* TAB 1: CONVERSION CHART */}
          {activeTab === 'chart' && (
            <div className="space-y-5">
              {/* CATEGORY SELECTOR & FIT NOTICE */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#EAEFF0] p-4 rounded-2xl border border-[#CBD5E1]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#0B1220]">دسته‌بندی:</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setGenderFilter('unisex')}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-colors ${
                        genderFilter === 'unisex'
                          ? 'bg-[#0B1220] text-[#F8FAFC] border-[#0B1220]'
                          : 'bg-[#FFFFFF] text-[#475569] border-[#CBD5E1]'
                      }`}
                    >
                      یونیسکس
                    </button>
                    <button
                      onClick={() => setGenderFilter('men')}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-colors ${
                        genderFilter === 'men'
                          ? 'bg-[#0B1220] text-[#F8FAFC] border-[#0B1220]'
                          : 'bg-[#FFFFFF] text-[#475569] border-[#CBD5E1]'
                      }`}
                    >
                      مردانه
                    </button>
                    <button
                      onClick={() => setGenderFilter('women')}
                      className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-colors ${
                        genderFilter === 'women'
                          ? 'bg-[#0B1220] text-[#F8FAFC] border-[#0B1220]'
                          : 'bg-[#FFFFFF] text-[#475569] border-[#CBD5E1]'
                      }`}
                    >
                      زنانه
                    </button>
                  </div>
                </div>

                <div className="text-[11px] text-[#475569] flex items-center gap-1.5 font-medium">
                  <ShieldAlert className="w-4 h-4 text-[#0B1220] shrink-0" />
                  <span>تمام اندازه‌ها مطابق استانداردهای بین‌المللی برندهای مطرح تعیین شده‌اند.</span>
                </div>
              </div>

              {/* TABLE */}
              <div className="overflow-x-auto border border-[#CBD5E1] rounded-2xl bg-[#FFFFFF]">
                <table className="w-full text-center text-xs font-peyda border-collapse">
                  <thead>
                    <tr className="bg-[#0B1220] text-[#F8FAFC] border-b border-[#1E293B] font-mono">
                      <th className="py-3.5 px-3 font-bold border-l border-[#1E293B]">EUR (اروپا)</th>
                      <th className="py-3.5 px-3 font-bold border-l border-[#1E293B]">US (مردانه)</th>
                      <th className="py-3.5 px-3 font-bold border-l border-[#1E293B]">US (زنانه)</th>
                      <th className="py-3.5 px-3 font-bold border-l border-[#1E293B]">UK (بریتانیا)</th>
                      <th className="py-3.5 px-3 font-bold">
                        طول پا ({unit === 'cm' ? 'سانتی‌متر' : 'اینچ'})
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#CBD5E1]/60">
                    {SIZE_DATA.map((row) => (
                      <tr
                        key={row.eur}
                        className="hover:bg-[#F1F5F9] transition-colors font-mono font-medium text-[#0B1220]"
                      >
                        <td className="py-3 px-3 font-bold bg-[#F8FAFC] border-l border-[#CBD5E1]/60 text-sm">
                          {row.eur}
                        </td>
                        <td className="py-3 px-3 border-l border-[#CBD5E1]/60">{row.usMen}</td>
                        <td className="py-3 px-3 border-l border-[#CBD5E1]/60">{row.usWomen}</td>
                        <td className="py-3 px-3 border-l border-[#CBD5E1]/60">{row.uk}</td>
                        <td className="py-3 px-3 font-bold text-[#0B1220]">
                          {unit === 'cm' ? `${row.cm} cm` : `${row.in} in`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: FOOT SIZE FINDER */}
          {activeTab === 'finder' && (
            <div className="space-y-6">
              <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-6 rounded-2xl space-y-5">
                <div>
                  <h3 className="text-base font-bold text-[#0B1220] mb-1">
                    محاسبه‌گر هوشمند سایز اسنیکر
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    طول دقیق پاشنه تا نوک شست پا را به سانتی‌متر وارد کنید تا مناسب‌ترین سایز محاسبه شود:
                  </p>
                </div>

                {/* RANGE SLIDER & INPUT */}
                <div className="space-y-3 bg-[#F8FAFC] p-4 rounded-xl border border-[#CBD5E1]/60">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[#0B1220]">طول کفی/پا:</label>
                    <span className="text-lg font-mono font-bold text-[#0B1220] bg-[#EAEFF0] px-3 py-1 rounded-lg border border-[#CBD5E1]">
                      {footLength.toFixed(1)} cm
                    </span>
                  </div>

                  <input
                    type="range"
                    min="22.0"
                    max="30.0"
                    step="0.5"
                    value={footLength}
                    onChange={(e) => setFootLength(parseFloat(e.target.value))}
                    className="w-full accent-[#0B1220] cursor-pointer"
                  />

                  <div className="flex justify-between text-[10px] text-[#94A3B8] font-mono">
                    <span>22.0 cm (EUR 35)</span>
                    <span>26.0 cm (EUR 41)</span>
                    <span>30.0 cm (EUR 46)</span>
                  </div>
                </div>

                {/* WIDE FOOT CHECKBOX */}
                <label className="flex items-center gap-2.5 cursor-pointer text-xs font-bold text-[#0B1220]">
                  <input
                    type="checkbox"
                    checked={isWideFoot}
                    onChange={(e) => setIsWideFoot(e.target.checked)}
                    className="w-4 h-4 rounded border-[#CBD5E1] text-[#0B1220] focus:ring-0 accent-[#0B1220]"
                  />
                  <span>پنجه پای من پهن‌تر از حد معمول است (+۰.۵ سایز بالاتر لحاظ شود)</span>
                </label>

                {/* RESULT DISPLAY BOX */}
                <div className="bg-[#0B1220] text-[#F8FAFC] p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                      RECOMMENDED EUR SIZE
                    </span>
                    <div className="text-2xl sm:text-3xl font-bold font-mono text-[#8ADDFD] flex items-center gap-2">
                      <span>EUR {recommendedRow.eur}</span>
                      {isWideFoot && <span className="text-xs bg-[#1E293B] text-[#F8FAFC] px-2 py-0.5 rounded font-normal">+0.5 سایز</span>}
                    </div>
                  </div>

                  <div className="text-xs space-y-1 font-mono text-left sm:text-right text-[#E2E8F0] border-t sm:border-t-0 sm:border-r border-[#334155] pt-3 sm:pt-0 sm:pr-4">
                    <div>US Men: <strong className="text-white">{recommendedRow.usMen}</strong> | US Women: <strong className="text-white">{recommendedRow.usWomen}</strong></div>
                    <div>UK: <strong className="text-white">{recommendedRow.uk}</strong> | length: <strong className="text-white">{recommendedRow.cm} cm</strong></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: STEP BY STEP MEASUREMENT */}
          {activeTab === 'measure' && (
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto mb-2">
                <h3 className="text-lg font-bold text-[#0B1220]">
                  چگونه طول پای خود را به روش دقیق اندازه بگیریم؟
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  برای بهترین نتیجه، اندازه‌گیری را در ساعات پایانی روز انجام دهید (زیرا پا در اثر فعالیت کمی متورم می‌شود).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* STEP 1 */}
                <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-5 rounded-2xl flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0B1220] text-[#F8FAFC] font-mono font-bold flex items-center justify-center shrink-0 text-sm">
                    ۱
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1220] mb-1">چسباندن برگه به دیوار</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      یک کاغذ A4 را روی سطح صاف به زمین بچسبانید. پاشنه پای خود را کاملاً مماس با دیوار بر روی کاغذ قرار دهید.
                    </p>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-5 rounded-2xl flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0B1220] text-[#F8FAFC] font-mono font-bold flex items-center justify-center shrink-0 text-sm">
                    ۲
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1220] mb-1">علامت‌گذاری نوک شست</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      مستقیم بایستید و وزن خود را روی هر دو پا تقسیم کنید. با یک مداد کاملاً عمود، بلندترین نقطه انگشت پا را روی کاغذ علامت بزنید.
                    </p>
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-5 rounded-2xl flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0B1220] text-[#F8FAFC] font-mono font-bold flex items-center justify-center shrink-0 text-sm">
                    ۳
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1220] mb-1">اندازه‌گیری با خط‌کش</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      فاصله بین لبه دیوار (پاشنه) تا خط علامت‌گذاری شده را با خط‌کش بر حسب سانتی‌متر با دقت اندازه‌گیری کنید.
                    </p>
                  </div>
                </div>

                {/* STEP 4 */}
                <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-5 rounded-2xl flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0B1220] text-[#F8FAFC] font-mono font-bold flex items-center justify-center shrink-0 text-sm">
                    ۴
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1220] mb-1">اضافه کردن margin ایمن</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      به عدد به‌دست‌آمده حدود ۰.۵ سانتی‌متر اضافه کنید تا انگشتان هنگام حرکت آزادی داشته باشند، سپس از جدول سایز استفاده کنید.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SNEAKER FIT TIPS */}
          {activeTab === 'tips' && (
            <div className="space-y-4">
              <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-5 rounded-2xl space-y-3">
                <h4 className="text-sm font-bold text-[#0B1220] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0B1220]"></span>
                  <span>توصیه برای اسنیکرهای رانینگ و تخصصی</span>
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed pr-4">
                  در کفش‌های تخصصی رانینگ (نظیر Nike Pegasus، Adidas Adistar یا On Running)، ترجیح داده می‌شود نیم سایز بزرگتر تهیه کنید. زیرا در حین دویدن و فعالیت طولانی، جریان خون باعث افزایش جزیی حجم پا می‌شود.
                </p>
              </div>

              <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-5 rounded-2xl space-y-3">
                <h4 className="text-sm font-bold text-[#0B1220] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0B1220]"></span>
                  <span>کفش‌های چرم طبیعی و لایف‌استایل</span>
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed pr-4">
                  اسنیکرهای ساخته شده از چرم طبیعی (مانند Adidas Samba یا Handball Spezial) پس از چند بار استفاده کاملاً شکل پا را قالب گرفته و منعطف‌تر می‌شوند. بنابراین سایز دقیق پا بهترین گزینه است.
                </p>
              </div>

              <div className="bg-[#FFFFFF] border border-[#CBD5E1] p-5 rounded-2xl space-y-3">
                <h4 className="text-sm font-bold text-[#0B1220] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0B1220]"></span>
                  <span>تفاوت اندازه دو پا</span>
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed pr-4">
                  در اکثر افراد، یکی از پاها جزیی بزرگتر از دیگری است. همیشه اندازه‌گیری را روی پای بزرگتر ملاک انتخاب سایز قرار دهید.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* FOOTER */}
        <div className="bg-[#F1F5F9] border-t border-[#CBD5E1] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <div className="flex items-center gap-2 font-medium">
            <ShieldAlert className="w-4 h-4 text-[#0B1220] shrink-0" />
            <span>نیاز به مشاوره اختصاصی دارید؟ پشتیبانی سولئا آماده راهنمایی شماست.</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#0B1220] hover:bg-[#1E293B] text-[#F8FAFC] font-bold rounded-xl transition-colors shrink-0"
          >
            متوجه شدم / بستن
          </button>
        </div>

      </div>
    </div>
  );
}
