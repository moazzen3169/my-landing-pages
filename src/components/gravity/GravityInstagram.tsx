'use client';

import React from 'react';
import Image from 'next/image';
import { GRAVITY_INSTAGRAM_POSTS } from '@/data/gravity-data';
import { Heart, MessageCircle } from 'lucide-react';

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function GravityInstagram() {
  return (
    <section className="py-20 md:py-24 bg-[#F8F9FA] border-b border-[#D7D4CD] font-peyda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 text-[#2563EB] mb-2 font-bold text-xs uppercase tracking-wider">
          <InstagramIcon size={18} />
          <span>شبکه‌های اجتماعی</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-2">
          گراویتی در اینستاگرام
        </h2>
        <p className="text-sm text-[#666666] max-w-md mx-auto font-medium mb-10">
          جدیدترین استایل‌ها، و ویدیوهای معرفی محصولات را در اینستاگرام ما دنبال کنید.
        </p>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {GRAVITY_INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square bg-[#E8E6E1] rounded-xs overflow-hidden border border-[#E5E5E5]"
            >
              <Image
                src={post.image}
                alt="Gravity Instagram Post"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <Heart size={16} className="fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <MessageCircle size={16} className="fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram CTA Button */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#111111] hover:bg-[#2563EB] text-white font-bold text-xs sm:text-sm rounded-xs transition-colors"
        >
          <InstagramIcon size={16} />
          <span>مشاهده صفحه اینستاگرام (@gravity.menswear)</span>
        </a>
      </div>
    </section>
  );
}
