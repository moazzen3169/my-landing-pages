'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroScrollStorytellingProps {
  isPersian?: boolean;
}

export default function HeroScrollStorytelling({ isPersian = false }: HeroScrollStorytellingProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const STORY_STEPS = [
    {
      step: '01 / 04',
      title: isPersian ? 'معماری سیلوئت و ساختار' : 'THE ARCHITECTURE OF SILHOUETTE',
      subtitle: isPersian ? 'خیاطی و دوخت دقیق' : 'PRECISION TAILORING',
      image: '/images/banners/Group 242.jpg',
      description: isPersian
        ? 'هر لباس با یک مفهوم ساختاری آغاز می‌شود. پدهای شانه تمیز، لایه‌دوزی سینه و یقه تراشیده‌شده مهندسی‌شده برای وقار و ایستایی راحت.'
        : 'Every garment begins with a structural concept. Clean shoulder pads, chest canvassing, and sculpted lapels engineered for effortless posture.'
    },
    {
      step: '02 / 04',
      title: isPersian ? 'انضباط و دقت متریال لمسی' : 'TACTILE MATERIAL DISCIPLINE',
      subtitle: isPersian ? 'الیاف کاملاً طبیعی' : 'NATURAL FIBERS',
      image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
      description: isPersian
        ? '۱۰۰٪ پشم خالص Super 120s از بیلا، کشمیر درجه یک مغولی و کتان کج‌راه مصر. لوکس واقعی بدون سازش لمسی.'
        : '100% Super 120s virgin wools from Biella, grade-A Mongolian cashmere, and long-staple Egyptian twill. Pure tactile uncompromising luxury.'
    },
    {
      step: '03 / 04',
      title: isPersian ? 'یونیفرم مدرن شهری' : 'THE MODERN UNIFORM',
      subtitle: isPersian ? 'کاربرد چندمنظوره' : 'VERSATILE FUNCTION',
      image: '/images/Men-panets/g-star-bend-loose-jeans-dark-blue.png',
      description: isPersian
        ? 'طراحی‌شده برای حرکت روان بین جلسات کاری روز و دیدارهای رسمی شبانه. فرم‌های جاودانه برای مسافران مدرن جهان.'
        : 'Designed to move seamlessly between daylight meetings and low-light evening engagements. Timeless forms for the modern global traveler.'
    },
    {
      step: '04 / 04',
      title: isPersian ? 'ساخته‌شده بدون هیچ‌گونه سازش' : 'CRAFTED WITHOUT COMPROMISE',
      subtitle: isPersian ? 'لمس جزییات نهایی' : 'FINISHING TOUCH',
      image: '/images/Men-shirts/g-star-waffle-henley-relaxed-t-shirt-white.png',
      description: isPersian
        ? 'جافتحه‌های دست‌دوز، دکمه‌های شاخ طبیعی و آسترهای ابریشم کوپرو. توجه به ریزترین جزییاتی که پوشاک لوکس مردانه را تعریف می‌کنند.'
        : 'Hand-sewn buttonholes, horn buttons, and cupro silk linings. Attention to the micro-details that define high-end menswear.'
    }
  ];

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion || !triggerRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.story-card');

      cards.forEach((card, index) => {
        if (index === 0) return; // First card is base

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

  return (
    <div ref={triggerRef} className="relative w-full" style={{ height: `${STORY_STEPS.length * 100}vh` }}>
      <div ref={containerRef} className="sticky top-0 left-0 w-full h-screen bg-[#0B0B0B] text-[#F3F2EE] overflow-hidden">
        {STORY_STEPS.map((step, idx) => (
          <div
            key={step.step}
            className={`story-card absolute inset-0 w-full h-full flex flex-col justify-between p-8 md:p-16 select-none ${
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
                className="object-cover object-center filter brightness-50 contrast-110"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent" />
            </div>

            {/* Top Bar */}
            <div className="flex justify-between items-center text-[11px] font-mono tracking-[0.3em] text-[#A58B68] uppercase">
              <span>{step.subtitle}</span>
              <span>{step.step}</span>
            </div>

            {/* Center Main Story text */}
            <div className="max-w-4xl my-auto space-y-6">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-light font-display tracking-tight text-white leading-none">
                {step.title}
              </h2>
              <p className="max-w-lg text-sm sm:text-base text-[#D7D4CD] font-light leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Bottom Indicator */}
            <div className="flex justify-between items-center text-[10px] tracking-[0.2em] text-[#77746E] uppercase border-t border-white/10 pt-4">
              <span>{isPersian ? 'اسکرول کنید تا داستان ادامه یابد' : 'SCROLL TO CONTINUE STORY'}</span>
              <span>{isPersian ? 'بیانیه نوآر' : 'NOIRÉ MANIFESTO'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
