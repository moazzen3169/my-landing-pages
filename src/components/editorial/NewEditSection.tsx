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
    <section className="py-24 bg-[#0B0B0B] text-[#F3F2EE] border-y border-[#2B2B2B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Text */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-[10px] font-mono tracking-[0.35em] text-[#A58B68] uppercase">
            {isPersian ? 'ادیتوریال فصل' : 'SEASONAL EDITORIAL'}
          </span>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-light font-display tracking-tight text-white uppercase leading-none">
            {isPersian ? (
              <>
                مجموعه <br />
                جدید <br />
                فصل.
              </>
            ) : (
              <>
                THE <br />
                NEW <br />
                EDIT.
              </>
            )}
          </h2>

          <p className="text-sm md:text-base text-[#D7D4CD] font-light leading-relaxed max-w-md">
            {isPersian
              ? 'خیاطی مدرن و بی‌نقص طراحی‌شده برای زندگی شهری با تراکم بالا. مشخص‌شده با خطوط تمیز، پارچه‌های ارگانیک سنگین و کاربرد بی‌دردسر.'
              : 'Uncompromising modern tailoring designed for high-density city living. Defined by clean lines, heavy organic textiles, and effortless versatility.'}
          </p>

          <div className="pt-4">
            <Link
              href="/shop"
              className="inline-flex items-center space-x-3 space-x-reverse text-[11px] font-bold tracking-[0.25em] uppercase text-white hover:text-[#A58B68] transition-colors border-b border-[#D7D4CD] pb-2"
              data-cursor-text={isPersian ? 'کشف' : 'DISCOVER'}
            >
              <span>{isPersian ? 'کشف جدیدترین کالکشن' : 'DISCOVER THE LATEST COLLECTION'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Large Image Reveal */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[3/4] w-full bg-[#181818] border border-[#2B2B2B] overflow-hidden">
            <Image
              src="/images/banners/Group 242.jpg"
              alt="The New Edit Look 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 35vw"
            />
          </div>

          <div className="relative aspect-[3/4] w-full bg-[#181818] border border-[#2B2B2B] overflow-hidden md:translate-y-8">
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
