'use client';

import React from 'react';

export default function CommunitySection() {
  const communityPosts = [
    {
      id: 1,
      user: '@ali.streetfit',
      image: '/images/man-sport/T-shirt-1.webp',
    },
    {
      id: 2,
      user: '@reza_kicks',
      image: '/images/man-sport/1975203_BLAC_1.webp',
    },
    {
      id: 3,
      user: '@kian.urban',
      image: '/images/man-sport/118624_BLAC_1.webp',
    },
    {
      id: 4,
      user: '@saman_casual',
      image: '/images/man-sport/1925216_BONE_2.webp',
    },
  ];

  return (
    <section className="py-12 bg-white text-[#111111] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-black font-peyda text-[#111111]">
            شما چطور می‌پوشینش؟
          </h2>
        </div>

        {/* UGC GALLERY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {communityPosts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 border border-slate-200"
            >
              <img
                src={post.image}
                alt={post.user}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-3 right-3 left-3 text-right">
                <span className="text-xs font-mono font-bold text-[#B7FF00] block">{post.user}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
