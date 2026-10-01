'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface CategoryShowcaseProps {
  isPersian?: boolean;
}

export default function CategoryShowcase({ isPersian = false }: CategoryShowcaseProps) {
  const CATEGORIES = [
    {
      title: isPersian ? 'رسمی و تشریفات' : 'FORMAL',
      subtitle: isPersian ? 'کت و شلوار و استایل شب' : 'SUITS & EVENING TAILORING',
      itemCount: isPersian ? '۱۴ آیتم' : '14 PIECES',
      image: '/images/banners/Group 242.jpg',
      href: '/shop/suits',
      span: 'lg:col-span-7'
    },
    {
      title: isPersian ? 'اسپرت شیک' : 'SMART CASUAL',
      subtitle: isPersian ? 'بلیزر و اورشرت' : 'BLAZERS & OVERSHIRTS',
      itemCount: isPersian ? '۲۲ آیتم' : '22 PIECES',
      image: '/images/men-hoodies/g-star-premium-core-track-jacket-sweater-dark-blue.png',
      href: '/shop/blazers',
      span: 'lg:col-span-5'
    },
    {
      title: isPersian ? 'اساسی و بیسیک' : 'ESSENTIALS',
      subtitle: isPersian ? 'تی‌شرت، هودی و بافت' : 'TEES, HOODIES & KNITS',
      itemCount: isPersian ? '۱۸ آیتم' : '18 PIECES',
      image: '/images/Men-shirts/g-star-waffle-henley-relaxed-t-shirt-white.png',
      href: '/shop/t-shirts',
      span: 'lg:col-span-5'
    },
    {
      title: isPersian ? 'لباس بیرونی' : 'OUTERWEAR',
      subtitle: isPersian ? 'پالتو، بارانی و کاپشن' : 'COATS, MACS & JACKETS',
      itemCount: isPersian ? '۱۱ آیتم' : '11 PIECES',
      image: '/images/men-hoodies/g-star-unit-washed-full-zip-hooded-sweater-brown.png',
      href: '/shop/jackets',
      span: 'lg:col-span-7'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#D7D4CD] pb-8">
        <div>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#77746E] uppercase">
            {isPersian ? 'دسته‌بندی‌های ادیتوریال' : 'CATEGORICAL EDIT'}
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight uppercase font-display text-[#111111] mt-2">
            {isPersian ? 'قلمروهای معماری پوشاک' : 'THE ARCHITECTURAL DOMAINS'}
          </h2>
        </div>
        <p className="max-w-sm text-sm text-[#77746E] font-light mt-4 md:mt-0">
          {isPersian
            ? 'دسته‌بندی‌های متمایز پوشاک مردانه یکپارچه‌شده با ظرافت بصری و پارچه‌های پریمیوم.'
            : 'Distinct menswear categories unified by strict visual restraint and premium material choice.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.title}
            href={cat.href}
            className={`group relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-[#E8E6E1] border border-[#D7D4CD] block ${cat.span}`}
            data-cursor-text={isPersian ? 'مشاهده' : 'EXPLORE'}
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-[#0B0B0B]/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
              <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-[#A58B68] uppercase">
                <span>{cat.subtitle}</span>
                <span>{cat.itemCount}</span>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-3xl md:text-5xl font-light font-display tracking-wider uppercase group-hover:translate-x-2 transition-transform duration-300">
                    {cat.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#111111] transition-all">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
