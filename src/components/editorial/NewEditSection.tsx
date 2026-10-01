'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface NewEditSectionProps {
  isPersian?: boolean;
}

export default function NewEditSection({ isPersian = false }: NewEditSectionProps) {
  return (
    <section className="bg-[#0B0B0B] text-[#F3F2EE] border-y border-[#2B2B2B] overflow-hidden section-padding">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Editorial Text */}
        <div className="lg:col-span-5 space-y-6 text-start">
          <span
            className={
              isPersian
                ? 'text-xs font-medium text-[#A58B68] font-peyda'
                : 'text-[10px] font-mono tracking-[0.35em] text-[#A58B68] uppercase'
            }
          >
            {isPersian ? 'ادیتوریال اختصاصی فصل' : 'SEASONAL EDITORIAL'}
          </span>

          <h2
            className={
              isPersian
                ? 'text-3xl sm:text-5xl md:text-6xl font-bold font-peyda text-white leading-[1.25]'
                : 'text-4xl sm:text-6xl md:text-7xl font-light font-display tracking-tight text-white uppercase leading-none'
            }
          >
            {isPersian ? (
              <>
                روایتِ <br />
                فرمِ <br />
                مدرن.
              </>
            ) : (
              <>
                THE <br />
                NEW <br />
                EDIT.
              </>
            )}
          </h2>

          <p
            className={`text-[#D7D4CD] leading-relaxed max-w-md ${
              isPersian
                ? 'text-sm md:text-base font-normal font-peyda'
                : 'text-sm md:text-base font-light'
            }`}
          >
            {isPersian
              ? 'خیاطی مدرن و بی‌نقص طراحی‌شده برای زندگی شهری با تراکم بالا. مشخص‌شده با خطوط تمیز، پارچه‌های ارگانیک سنگین و کاربرد بی‌دردسر.'
              : 'Uncompromising modern tailoring designed for high-density city living. Defined by clean lines, heavy organic textiles, and effortless versatility.'}
          </p>

          <div className="pt-2">
            <Link
              href="/shop"
              className={`group inline-flex items-center gap-3 text-white hover:text-[#A58B68] transition-colors border-b border-[#D7D4CD]/40 hover:border-[#A58B68] pb-2 ${
                isPersian
                  ? 'text-xs md:text-sm font-medium font-peyda'
                  : 'text-[11px] font-bold tracking-[0.25em] uppercase'
              }`}
              data-cursor-text={isPersian ? 'کشف' : 'DISCOVER'}
            >
              <span>{isPersian ? 'کشف جدیدترین کالکشن' : 'DISCOVER THE LATEST COLLECTION'}</span>
              <ArrowRight
                className={`w-4 h-4 shrink-0 transition-transform ${
                  isPersian ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                }`}
              />
            </Link>
          </div>
        </div>

        {/* Right Large Image Reveal */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative aspect-[3/4] w-full bg-[#181818] border border-[#2B2B2B] overflow-hidden">
            <Image
              src="/images/banners/Group-242.jpg"
              alt="The New Edit Look 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 35vw"
            />
          </div>

          <div className="relative aspect-[3/4] w-full bg-[#181818] border border-[#2B2B2B] overflow-hidden sm:translate-y-8">
            <Image
              src="/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png"
              alt="The New Edit Look 2"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 35vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
