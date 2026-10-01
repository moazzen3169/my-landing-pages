'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, ShieldCheck, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroScrollStorytellingProps {
  isPersian?: boolean;
}

export default function HeroScrollStorytelling({ isPersian = false }: HeroScrollStorytellingProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const STORY_STEPS = [
    {
      id: 'step-1',
      stepNum: '01',
      stepTotal: '04',
      badge: isPersian ? 'مرحله اول: اصالت متریال' : 'STEP 01: MATERIAL AUTHENTICITY',
      title: isPersian ? 'گزینش و ارزیابی پارچه‌های فاخر' : 'CURATION OF FINEST FABRICS',
      subtitle: isPersian ? '۱۰۰٪ الیاف طبیعی و گران‌بها' : '100% PURE NATURAL FIBERS',
      image: '/images/banners/Group-242.jpg',
      description: isPersian
        ? 'تمامی محصولات فروشگاه نوآر از برترین کارخانجات پارچه‌بافی جهان (مانند زگنیا و لورو پیانا) انتخاب می‌شوند؛ شامل پشم مرینوس Super 130s، ابریشم کرپ و کشمیر درجه یک مغولی.'
        : 'All garments curated in NOIRÉ boutique are sourced from world-renowned textile mills, featuring Super 130s merino wool, pure silk crepe, and grade-A Mongolian cashmere.',
      highlights: isPersian
        ? ['پارچه‌های ایتالیایی و بریتانیایی', 'بافت نرم و خنک با تنفس‌پذیری بالا', 'تضمین اصالت ۱۰۰٪ متریال']
        : ['Italian & British luxury mills', 'Breathable tactile comfort', '100% material authenticity guaranteed']
    },
    {
      id: 'step-2',
      stepNum: '02',
      stepTotal: '04',
      badge: isPersian ? 'مرحله دوم: خیاطی و الگو' : 'STEP 02: TAILORING & SILHOUETTE',
      title: isPersian ? 'مهندسی سیلوئت و دوخت خیاطی' : 'SILHOUETTE & PRECISION TAILORING',
      subtitle: isPersian ? 'الگوهای دقیق معماری پوشاک' : 'ARCHITECTURAL PATTERN MAKING',
      image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
      description: isPersian
        ? 'الگوبرداری ساختاریافته با لایه‌دوزی سینه، شانه‌های نرم و برش‌های متناسب که وقار ایستایی عالی را بدون ایجاد حس سنگینی برای کاربر به ارمغان می‌آورد.'
        : 'Engineered pattern-making with soft padded shoulders, chest canvassing, and sculpted lapels that guarantee impeccable posture without restriction.',
      highlights: isPersian
        ? ['لایه‌دوزی سینه و یقه ایستاده', 'ایستایی فوق‌العاده در تمام روز', 'تناسب کامل با ارگونومی بدن']
        : ['Soft canvassing & sculpted lapels', 'All-day posture perfection', 'Ergonomic contemporary fit']
    },
    {
      id: 'step-3',
      stepNum: '03',
      stepTotal: '04',
      badge: isPersian ? 'مرحله سوم: جزییات دست‌ساز' : 'STEP 03: HANDMADE FINISHING',
      title: isPersian ? 'ظرافت دوخت و جزییات نهایی' : 'HAND-CRAFTED FINISHING TOUCHES',
      subtitle: isPersian ? 'دکمه‌های شاخ و جافتحه‌های دست‌دوز' : 'NATURAL HORN & HAND-SEWN DETAILS',
      image: '/images/Men-panets/g-star-bend-loose-jeans-dark-blue.png',
      description: isPersian
        ? 'توجه به ریزترین جزییات که متمایزکننده پوشاک لوکس واقعی است؛ دکمه‌های شاخ طبیعی بوفالو، جافتحه‌های دست‌دوز و آسترهای ابریشم ابریشمی بسیار نرم.'
        : 'Attention to micro-details defining high-end menswear: hand-sewn buttonholes, genuine buffalo horn buttons, and silky cupro linings.',
      highlights: isPersian
        ? ['دکمه‌های شاخ طبیعی بوفالو', 'جافتحه‌های دست‌دوز استادکاران', 'آسترهای ابریشمی تنفس‌پذیر']
        : ['Natural buffalo horn buttons', 'Hand-stitched buttonholes', 'Breathable silk cupro lining']
    },
    {
      id: 'step-4',
      stepNum: '04',
      stepTotal: '04',
      badge: isPersian ? 'مرحله چهارم: تجربه لوکس' : 'STEP 04: BOUTIQUE EXPERIENCE',
      title: isPersian ? 'خدمات پرو، استایل و بسته‌بندی' : 'BESPOKE FIT & LUXURY PACKAGING',
      subtitle: isPersian ? 'تجربه‌ای متفاوت برای صاحب سبک‌ها' : 'UNCOMPROMISING LUXURY SERVICE',
      image: '/images/Men-shirts/g-star-waffle-henley-relaxed-t-shirt-white.png',
      description: isPersian
        ? 'از مشاوره اختصاصی استایلینگ گرفته تا بسته‌بندی فاخر نوآر و ارسال اکسپرس بیمه‌شده، همه چیز آماده است تا احساس لوکس بودن و تمایز واقعی را لمس کنید.'
        : 'From personal styling consultation to bespoke signature packaging and insured express delivery, every detail is engineered for an elite boutique experience.',
      highlights: isPersian
        ? ['بسته‌بندی فاخر هدیه نوآر', 'ارسال اکسپرس بیمه‌شده', 'مشاوره استایل شخصی']
        : ['Signature NOIRÉ gift packaging', 'Insured luxury delivery', 'Personal styling advisory']
    }
  ];

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion || !triggerRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.story-card');

      cards.forEach((card, index) => {
        if (index === 0) return;

        gsap.fromTo(
          card,
          { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: 'none',
            scrollTrigger: {
              trigger: triggerRef.current,
              start: () => `top+=${index * 100}% top`,
              end: () => `top+=${(index + 1) * 100}% top`,
              scrub: true,
              onUpdate: (self) => {
                if (self.progress > 0.5) {
                  setActiveStepIndex(index);
                } else if (self.progress <= 0.5 && index - 1 >= 0) {
                  setActiveStepIndex(index - 1);
                }
              }
            },
          }
        );
      });

      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'top top',
        end: () => `+=${STORY_STEPS.length * 100}%`,
        pin: containerRef.current,
        scrub: 1,
        anticipatePin: 1,
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [STORY_STEPS.length]);

  const scrollToStep = (index: number) => {
    if (!triggerRef.current) return;
    const totalHeight = triggerRef.current.offsetHeight;
    const stepHeight = totalHeight / STORY_STEPS.length;
    const targetY = triggerRef.current.offsetTop + index * stepHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <div
      ref={triggerRef}
      id="story-steps-section"
      className="relative w-full story-steps-section"
      style={{ height: `${STORY_STEPS.length * 100}vh` }}
    >
      <div
        ref={containerRef}
        className="sticky top-0 left-0 w-full h-screen bg-[#0B0B0B] text-[#F3F2EE] overflow-hidden flex flex-col justify-between"
      >
        {/* Story Cards Stack */}
        <div className="relative w-full h-full">
          {STORY_STEPS.map((step, idx) => (
            <div
              key={step.id}
              className={`story-card absolute inset-0 w-full h-full flex flex-col justify-between py-8 sm:py-12 md:py-14 select-none ${
                idx === 0 ? 'z-10' : ''
              }`}
              style={{ zIndex: idx + 10 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover object-center filter brightness-40 contrast-110"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-[#0B0B0B]/80" />
              </div>

              {/* Inner Content Container */}
              <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-between h-full pt-16 md:pt-20 pb-20">

                {/* Header Explanatory Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/15 pb-4 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-lg bg-[#A58B68]/20 border border-[#A58B68]/40 text-[#A58B68]">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[11px] font-mono tracking-widest text-[#A58B68] uppercase block">
                        {isPersian ? 'داستان کیفیت و اصالت بوتیک نوآر' : 'BOUTIQUE CURATION STORY'}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {isPersian ? 'مراحل ۴ گانه تضمین استایل و کیفیت پوشاک' : '4 STEPS OF UNCOMPROMISING MENSWEAR QUALITY'}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start md:self-auto">
                    <span className="px-3 py-1 bg-[#252019] border border-[#A58B68]/30 text-[#A58B68] text-xs font-mono font-bold rounded-full">
                      {step.badge}
                    </span>
                  </div>
                </div>

                {/* Center Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
                  <div className="lg:col-span-8 space-y-5 text-start">
                    <div className="inline-flex items-center gap-2 text-[#A58B68] font-mono text-xs tracking-wider">
                      <span>{step.subtitle}</span>
                    </div>

                    <h2
                      className={
                        isPersian
                          ? 'text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-peyda text-white leading-[1.25]'
                          : 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light font-display tracking-tight text-white leading-tight uppercase'
                      }
                    >
                      {step.title}
                    </h2>

                    <p
                      className={`text-[#D7D4CD] leading-relaxed max-w-2xl ${
                        isPersian
                          ? 'text-sm sm:text-base font-normal font-peyda'
                          : 'text-sm sm:text-base font-light'
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Feature bullet list */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                      {step.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#E8E6E1]">
                          <ShieldCheck className="w-4 h-4 text-[#A58B68] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Big Step Counter Display */}
                  <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                    <div className="relative flex items-baseline font-mono text-[#A58B68] font-extrabold">
                      <span className="text-7xl sm:text-9xl tracking-tighter">{step.stepNum}</span>
                      <span className="text-2xl sm:text-4xl text-white/30">/{step.stepTotal}</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Bar for Steps */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Step Selector Tabs */}
                  <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
                    {STORY_STEPS.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={() => scrollToStep(i)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                          idx === i
                            ? 'bg-[#A58B68] text-black font-bold shadow-md'
                            : 'bg-white/5 hover:bg-white/15 text-[#A0A5B5]'
                        }`}
                      >
                        <span>مرحله {s.stepNum}</span>
                      </button>
                    ))}
                  </div>

                  {/* Next Step Scroll Hint */}
                  <div className="flex items-center gap-3 text-xs text-[#8E90A6]">
                    <span>{isPersian ? 'برای دیدن مرحله بعد اسکرول کنید' : 'SCROLL DOWN TO REVEAL NEXT STEP'}</span>
                    <span className="w-2 h-2 rounded-full bg-[#A58B68] animate-ping"></span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
