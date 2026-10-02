'use client';

import React from 'react';
import Image from 'next/image';

export default function CategoryShowcase() {
  const categories = [
    {
      title: 'کیف‌های ساختاریافته',
      sub: 'STRUCTURED BAGS',
      image: '/images/landings/persian-luxury-v1/164ecee416c045cbaf64a689ec1deccc.png',
      count: '۱۲ مدل',
    },
    {
      title: 'کفش پاشنه‌دار مجلسی',
      sub: 'OCCASION HEELS',
      image: '/images/landings/persian-luxury-v1/db894d0562154b5c8fd4b785407a6d5e.png',
      count: '۱۸ مدل',
    },
    {
      title: 'مینی‌بگ‌های شب',
      sub: 'EVENING MINI BAGS',
      image: '/images/landings/persian-luxury-v1/916909c204ed45bbbcaac75d7249e761.png',
      count: '۹ مدل',
    },
  ];

  return (
    <section id="categories" className="py-20 md:py-28 bg-[#FAFAFA] font-peyda text-[#111111]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12">

        <div className="mb-12 text-center sm:text-start">
          <span className="block text-[11px] font-mono font-medium text-[#999999] uppercase tracking-widest mb-2">
            CATEGORIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-[#000000]">
            دسته‌بندی‌های برجسته
          </h2>
        </div>

        {/* 3 EDITORIAL TILES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4] w-full bg-[#E5E5E5] overflow-hidden cursor-pointer"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                unoptimized
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

              {/* OVERLAY CONTENT */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-[10px] font-mono tracking-widest text-[#FFFFFF]/80 uppercase">
                  {cat.sub}
                </span>
                <h3 className="text-xl font-normal mt-1 text-[#FFFFFF]">
                  {cat.title}
                </h3>
                <span className="text-xs text-[#FFFFFF]/70 mt-2 font-mono">
                  {cat.count}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
