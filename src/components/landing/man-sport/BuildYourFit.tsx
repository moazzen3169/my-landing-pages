'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

interface BuildYourFitProps {
  onAddToCart?: (item: any) => void;
}

const FIT_STEPS = [
  {
    step: 1,
    number: '01',
    heading: 'پایه استایل',
    brand: 'NIKE SPORTSWEAR',
    productName: 'تی‌شرت اورسایز Street',
    price: '۲٬۸۹۰٬۰۰۰ تومان',
    image: '/images/man-sport/T-shirt-1.webp',
  },
  {
    step: 2,
    number: '02',
    heading: 'لایه رویی',
    brand: 'ADIDAS ORIGINALS',
    productName: 'هودی Heavy Fleece',
    price: '۳٬۹۵۰٬۰۰۰ تومان',
    image: '/images/man-sport/1975203_BLAC_1.webp',
  },
  {
    step: 3,
    number: '03',
    heading: 'شلوار و اسلش',
    brand: 'NEW BALANCE',
    productName: 'شلوار اسلش Cargo',
    price: '۳٬۲۰۰٬۰۰۰ تومان',
    image: '/images/man-sport/116812_BLAC_1.webp',
  },
  {
    step: 4,
    number: '04',
    heading: 'استایلت آماده‌ست',
    brand: 'COMPLETE LOOK',
    productName: 'پک استایل کامل Street Energy',
    price: '۱۰٬۰۴۰٬۰۰۰ تومان',
    image: '/images/man-sport/118624_BLAC_1.webp',
  },
];

export default function BuildYourFit({ onAddToCart }: BuildYourFitProps) {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll listener to update step as user scrolls through pinned container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const sectionHeight = rect.height - window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const scrolled = Math.abs(rect.top);
        const progress = Math.min(Math.max(scrolled / sectionHeight, 0), 1);
        const newStep = Math.min(
          Math.floor(progress * FIT_STEPS.length),
          FIT_STEPS.length - 1
        );
        setActiveStep(newStep);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentFit = FIT_STEPS[activeStep];

  return (
    <section
      id="build-your-fit"
      ref={containerRef}
      className="relative bg-[#111111] text-[#F5F3EE] min-h-[250vh]"
    >
      {/* STICKY CONTAINER FOR PINNED EXPERIENCE */}
      <div className="sticky top-0 h-screen flex flex-col justify-between py-10 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">

        {/* TOP HEADER & STEP INDICATORS */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 z-10">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#B7FF00] uppercase block">
              BUILD YOUR FIT
            </span>
            <h2 className="text-xl sm:text-3xl font-black font-peyda text-white">
              استایل خودتو بساز
            </h2>
          </div>

          {/* STEP TABS */}
          <div className="flex items-center gap-2">
            {FIT_STEPS.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-colors ${
                  idx === activeStep
                    ? 'bg-[#B7FF00] text-black'
                    : idx < activeStep
                    ? 'bg-white/20 text-white'
                    : 'bg-white/5 text-slate-500'
                }`}
              >
                0{s.step}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN DISPLAY AREA - VISUAL OUTFIT BUILDER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-10">

          {/* LEFT/CENTER: VISUAL OUTFIT BUILDER IMAGES */}
          <div className="lg:col-span-7 flex items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black">

              {/* LAYER 1: TEE */}
              <img
                src={FIT_STEPS[0].image}
                alt={FIT_STEPS[0].productName}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ${
                  activeStep === 0
                    ? 'opacity-100 scale-100'
                    : 'opacity-30 blur-[1px]'
                }`}
              />

              {/* LAYER 2: HOODIE (APPEARS STEP 2+) */}
              {activeStep >= 1 && (
                <img
                  src={FIT_STEPS[1].image}
                  alt={FIT_STEPS[1].productName}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ${
                    activeStep === 1
                      ? 'opacity-100 scale-100'
                      : 'opacity-40 blur-[1px]'
                  }`}
                />
              )}

              {/* LAYER 3: PANTS (APPEARS STEP 3+) */}
              {activeStep >= 2 && (
                <img
                  src={FIT_STEPS[2].image}
                  alt={FIT_STEPS[2].productName}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ${
                    activeStep === 2
                      ? 'opacity-100 scale-100'
                      : 'opacity-40 blur-[1px]'
                  }`}
                />
              )}

              {/* LAYER 4: COMPLETE OUTFIT (STEP 4) */}
              {activeStep === 3 && (
                <img
                  src={FIT_STEPS[3].image}
                  alt={FIT_STEPS[3].productName}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 opacity-100 scale-100"
                />
              )}

              {/* STEP NUMBER WATERMARK OVERLAY */}
              <div className="absolute top-4 left-4 text-4xl sm:text-6xl font-black font-mono text-[#B7FF00]/80">
                {currentFit.number}
              </div>

              {/* OVERLAY HEADING */}
              <div className="absolute bottom-4 right-4 left-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 text-right">
                <span className="text-[10px] font-mono text-[#B7FF00] uppercase block">
                  STEP 0{currentFit.step}
                </span>
                <h3 className="text-lg font-bold font-peyda text-white">
                  {currentFit.heading}
                </h3>
              </div>
            </div>
          </div>

          {/* RIGHT: MINIMAL PRODUCT INFORMATION & CTA */}
          <div className="lg:col-span-5 text-right space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#B7FF00] uppercase tracking-wider block">
                {currentFit.brand}
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-peyda text-white leading-tight">
                {currentFit.productName}
              </h3>
              <p className="text-xl font-mono font-bold text-white pt-2">
                {currentFit.price}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              {activeStep < 3 ? (
                <button
                  onClick={() => setActiveStep((prev) => Math.min(prev + 1, 3))}
                  className="w-full py-4 rounded-xl bg-[#B7FF00] hover:bg-white text-black font-extrabold font-peyda text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>لایه بعدی</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => onAddToCart && onAddToCart(currentFit)}
                  className="w-full py-4 rounded-xl bg-[#B7FF00] hover:bg-white text-black font-extrabold font-peyda text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>خرید این استایل</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* BOTTOM PROGRESS SCROLL GUIDE */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-t border-white/10 pt-4 z-10">
          <span>SCROLL TO BUILD FIT</span>
          <span>0{activeStep + 1} / 04</span>
        </div>

      </div>
    </section>
  );
}
