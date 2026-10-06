'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { HERO_LEFT_IMAGES, HERO_RIGHT_IMAGES } from '@/data/gravity-data';
import { ArrowDownLeft, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GravityHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the Hero section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate index thresholds for 4 images (0 to 1 progress)
  // [0 - 0.25]: image 0
  // [0.25 - 0.5]: image 1
  // [0.5 - 0.75]: image 2
  // [0.75 - 1.0]: image 3

  // We can transform scroll progress into opacities or positions for each slide
  const leftOpacity0 = useTransform(scrollYProgress, [0, 0.18, 0.25], [1, 1, 0]);
  const leftOpacity1 = useTransform(scrollYProgress, [0.20, 0.25, 0.43, 0.50], [0, 1, 1, 0]);
  const leftOpacity2 = useTransform(scrollYProgress, [0.45, 0.50, 0.68, 0.75], [0, 1, 1, 0]);
  const leftOpacity3 = useTransform(scrollYProgress, [0.70, 0.75, 0.88, 1], [0, 1, 1, 0]);

  const rightOpacity0 = useTransform(scrollYProgress, [0, 0.18, 0.25], [1, 1, 0]);
  const rightOpacity1 = useTransform(scrollYProgress, [0.20, 0.25, 0.43, 0.50], [0, 1, 1, 0]);
  const rightOpacity2 = useTransform(scrollYProgress, [0.45, 0.50, 0.68, 0.75], [0, 1, 1, 0]);
  const rightOpacity3 = useTransform(scrollYProgress, [0.70, 0.75, 0.88, 1], [0, 1, 1, 0]);

  // Full page Y translations so images enter and completely exit the viewport
  const leftY0 = useTransform(scrollYProgress, [0, 0.18, 0.25], ['0%', '0%', '-120%']);
  const leftY1 = useTransform(scrollYProgress, [0.20, 0.25, 0.43, 0.50], ['120%', '0%', '0%', '-120%']);
  const leftY2 = useTransform(scrollYProgress, [0.45, 0.50, 0.68, 0.75], ['120%', '0%', '0%', '-120%']);
  const leftY3 = useTransform(scrollYProgress, [0.70, 0.75, 0.88, 1.0], ['120%', '0%', '0%', '-120%']);

  const rightY0 = useTransform(scrollYProgress, [0, 0.18, 0.25], ['0%', '0%', '120%']);
  const rightY1 = useTransform(scrollYProgress, [0.20, 0.25, 0.43, 0.50], ['-120%', '0%', '0%', '120%']);
  const rightY2 = useTransform(scrollYProgress, [0.45, 0.50, 0.68, 0.75], ['-120%', '0%', '0%', '120%']);
  const rightY3 = useTransform(scrollYProgress, [0.70, 0.75, 0.88, 1.0], ['-120%', '0%', '0%', '120%']);

  const leftOpacities = [leftOpacity0, leftOpacity1, leftOpacity2, leftOpacity3];
  const rightOpacities = [rightOpacity0, rightOpacity1, rightOpacity2, rightOpacity3];
  const leftY = [leftY0, leftY1, leftY2, leftY3];
  const rightY = [rightY0, rightY1, rightY2, rightY3];

  return (
    <div
      ref={containerRef}
      className="relative w-full font-peyda"
      style={{ height: '380vh' }}
    >
      {/* Sticky Hero Viewport Container */}
      <div className="sticky top-0 h-screen w-full  overflow-hidden flex flex-col justify-between ">
        {/* Main Desktop 3-Column Layout */}
        <div className="flex gap-6 items-end h-full w-full mx-auto w-full">
          {/* LEFT COLUMN (Desktop: 3 cols, Tablet: 3 cols) */}
          <div className="hidden md:block  h-[68vh] lg:h-[90vh] w-[450px] relative rounded-xs overflow-hidden ">
            {HERO_LEFT_IMAGES.map((img, idx) => (
              <motion.div
                key={img.id}
                style={{
                  opacity: leftOpacities[idx],
                  y: leftY[idx],
                }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={idx === 0}
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t  pointer-events-none" />
                <div className="absolute bottom-3 right-3 bg-[#111111]/80 text-white text-[10px] px-2 py-0.5 rounded-xs backdrop-blur-xs font-medium">
                  کالکشن گراویتی {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER COLUMN (Desktop: 6 cols, Mobile: 12 cols) - VISUALLY DOMINANT & STICKY ANCHOR */}
          <div className="col-span-1  flex flex-col items-center justify-center text-center px-2 sm:px-6 lg:px-8 z-10 my-auto">


            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] leading-[1.15] tracking-normal mb-5">
              استایل خودت را
              <br />
              پیدا کن.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#555555] max-w-lg mb-8 leading-relaxed font-medium">
              منتخبی از پوشاک مردانه برای استایل رسمی، نیمه‌رسمی و روزمره از
              برترین برندهای ایرانی و بین‌المللی.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#new-arrivals"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#111111] text-white hover:bg-[#333333] transition-all duration-300 rounded-xs font-semibold text-sm flex items-center justify-center gap-2 group"
              >
                <span>مشاهده محصولات</span>
                <ArrowDownLeft size={16} className="group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#styles"
                className="w-full sm:w-auto px-7 py-3.5 bg-transparent border border-[#111111]/80 text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-300 rounded-xs font-semibold text-sm text-center"
              >
                کشف استایل‌ها
              </a>
            </div>

            {/* Mobile-Only Hero Showcase Image Carousel/Indicator */}
            <div className="md:hidden mt-8 w-full relative h-[38vh] rounded-xs overflow-hidden border border-[#D7D4CD]">
              {HERO_LEFT_IMAGES.map((img, idx) => (
                <motion.div
                  key={`mobile-${img.id}`}
                  style={{ opacity: leftOpacities[idx] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={idx === 0}
                    className="object-cover object-top"
                    sizes="90vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN (Desktop: 3 cols, Tablet: 3 cols) */}
          <div className="hidden md:block  h-[68vh] lg:h-[90vh] w-[450px] relative rounded-xs overflow-hidden ">
            {HERO_RIGHT_IMAGES.map((img, idx) => (
              <motion.div
                key={img.id}
                style={{
                  opacity: rightOpacities[idx],
                  y: rightY[idx],
                }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={idx === 0}
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t  pointer-events-none" />
                <div className="absolute bottom-3 left-3 bg-[#111111]/80 text-white text-[10px] px-2 py-0.5 rounded-xs backdrop-blur-xs font-medium">
                  گراویتی استایل {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator Prompt */}
        <div className="flex flex-col absolute bottom-4 left-1/2 transform -translate-x-1/2 items-center justify-center pt-2 text-[#777777] text-xs font-medium gap-1 animate-pulse">
          <span>برای مرور کاتالوگ گشت‌وگذار کنید</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}
