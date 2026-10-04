'use client';

import React from 'react';
import { Camera, Sparkles, Heart, Share2 } from 'lucide-react';

export default function CommunitySection() {
  const communityPosts = [
    {
      id: 1,
      user: '@ali.streetfit',
      image: '/images/man-sport/T-shirt-1.webp',
      likes: '1,240',
      tag: 'استایل با تیشرت اورسایز نایکی',
    },
    {
      id: 2,
      user: '@reza_kicks',
      image: '/images/man-sport/1975203_BLAC_1.webp',
      likes: '890',
      tag: 'ست هودی آدیداس و شلوار اسلش',
    },
    {
      id: 3,
      user: '@kian.urban',
      image: '/images/man-sport/118624_BLAC_1.webp',
      likes: '2,150',
      tag: 'کاپشن ویندبریکر آندر آرمور',
    },
    {
      id: 4,
      user: '@saman_casual',
      image: '/images/man-sport/1925216_BONE_2.webp',
      likes: '1,560',
      tag: 'دورس کارهارت استخوانی',
    },
  ];

  return (
    <section className="py-16 bg-white text-[#111111] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5A1F]/10 text-[#FF5A1F] text-xs font-mono font-bold uppercase">
            <Camera className="w-3.5 h-3.5" />
            <span>COMMUNITY & UGC</span>
          </div>
          <h2 className="text-3xl font-black font-peyda text-[#111111]">
            شما چطور می‌پوشینش؟
          </h2>
          <p className="text-xs sm:text-sm font-peyda text-slate-600">
            عکس استایل خودت رو با هشتگ <span className="font-mono font-bold text-[#2455FF]">#MANSPORT_FIT</span> در اینستاگرام منتشر کن و جایزه ببر!
          </p>
        </div>

        {/* UGC GALLERY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {communityPosts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 border border-slate-200 shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={post.image}
                alt={post.user}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-3 right-3 text-white">
                <Share2 className="w-5 h-5" />
              </div>

              <div className="absolute bottom-3 inset-x-3 text-white space-y-1">
                <span className="text-xs font-mono font-bold text-[#B7FF00] block">{post.user}</span>
                <p className="text-[11px] font-peyda text-slate-200 line-clamp-1">{post.tag}</p>
                <div className="flex items-center gap-1 text-[10px] font-mono text-slate-300 pt-1">
                  <Heart className="w-3 h-3 text-[#FF5A1F] fill-current" />
                  <span>{post.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
