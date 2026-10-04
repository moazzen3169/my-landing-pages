'use client';

import React, { useState } from 'react';
import { BUILD_YOUR_FIT_STEPS } from '@/data/man-sport';
import { ArrowLeft, CheckCircle2, Sparkles, ShoppingBag, RefreshCw, Layers } from 'lucide-react';

interface BuildYourFitProps {
  onAddToCart?: (item: any) => void;
}

export default function BuildYourFit({ onAddToCart }: BuildYourFitProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = BUILD_YOUR_FIT_STEPS[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < BUILD_YOUR_FIT_STEPS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  return (
    <section id="build-your-fit" className="py-16 sm:py-24 bg-[#111111] text-[#F5F3EE] relative overflow-hidden">
      {/* GLOW EFFECTS */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#B7FF00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2455FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#B7FF00] border border-white/10 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#B7FF00]" />
            <span>SIGNATURE SCROLL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-peyda text-white tracking-tight">
            استایل خودتو بساز (Build Your Fit)
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-peyda font-normal max-w-xl mx-auto leading-relaxed">
            مرحله به مرحله آیتم‌های برتر استریت‌ویر را لایه‌بندی کن و استایل نهایی و اختصاصی خودت را تجربه کن.
          </p>
        </div>

        {/* STEP PROGRESS NAVIGATION BARS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {BUILD_YOUR_FIT_STEPS.map((step, idx) => {
            const isActive = idx === currentStepIndex;
            const isCompleted = idx < currentStepIndex;

            return (
              <button
                key={step.step}
                onClick={() => setCurrentStepIndex(idx)}
                className={`text-right p-3.5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-white/15 border-[#B7FF00] text-white shadow-lg ring-1 ring-[#B7FF00]'
                    : isCompleted
                    ? 'bg-white/5 border-white/20 text-slate-300 hover:bg-white/10'
                    : 'bg-black/40 border-white/5 text-slate-500 hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[10px] font-mono tracking-widest uppercase font-bold ${
                      isActive ? 'text-[#B7FF00]' : isCompleted ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    STEP 0{step.step}
                  </span>
                  {isCompleted && <CheckCircle2 className="w-4 h-4 text-[#B7FF00]" />}
                </div>
                <span className="block text-xs font-bold font-peyda truncate">{step.title.split('—')[1] || step.title}</span>
              </button>
            );
          })}
        </div>

        {/* MAIN INTERACTIVE DISPLAY AREA */}
        <div className="bg-[#181818] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* IMAGE PREVIEW DISPLAY */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img
                src={currentStep.image}
                alt={currentStep.productName}
                className="w-full h-full object-cover object-center transition-all duration-500 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

              {/* FLOATING STEP BADGE */}
              <div
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-bold text-black uppercase shadow-lg"
                style={{ backgroundColor: currentStep.accent }}
              >
                {currentStep.title}
              </div>

              {/* OVERLAY DETAILS */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  {currentStep.brand}
                </span>
                <h3 className="text-lg font-extrabold font-peyda text-white">{currentStep.productName}</h3>
                <span className="text-sm font-mono font-bold text-[#B7FF00] block mt-1">
                  {currentStep.price}
                </span>
              </div>
            </div>
          </div>

          {/* STEP DETAILS & ACTIONS */}
          <div className="lg:col-span-6 space-y-6 text-right">
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase text-black mb-3"
                style={{ backgroundColor: currentStep.accent }}
              >
                {currentStep.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-peyda text-white leading-tight">
                {currentStep.productName}
              </h3>
              <p className="text-sm font-mono text-[#B7FF00] mt-1">{currentStep.brand}</p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-peyda leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/5">
              {currentStep.description}
            </p>

            {/* PRICE & FIT SUMMARY */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
              <div>
                <span className="text-xs text-slate-400 block font-peyda">قیمت کل این لایه:</span>
                <span className="text-xl font-bold font-mono text-[#B7FF00]">{currentStep.price}</span>
              </div>
              <div className="text-left">
                <span className="text-xs text-slate-400 block font-peyda">وضعیت موجودی:</span>
                <span className="text-xs font-bold text-[#B7FF00] font-peyda">موجود در انبار تهران (ارسال فوری)</span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {currentStepIndex < BUILD_YOUR_FIT_STEPS.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#B7FF00] hover:bg-[#a5e600] text-black font-extrabold font-peyda text-base transition-all shadow-xl hover:scale-[1.02]"
                >
                  <span>لایه بعدی (Next Step)</span>
                  <ArrowLeft className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => onAddToCart && onAddToCart(currentStep)}
                  className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#B7FF00] hover:bg-white text-black font-extrabold font-peyda text-base transition-all shadow-xl hover:scale-[1.02]"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>خرید این استایل کامل (FIT COMPLETE)</span>
                </button>
              )}

              <button
                onClick={handleReset}
                className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="شروع مجدد"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
