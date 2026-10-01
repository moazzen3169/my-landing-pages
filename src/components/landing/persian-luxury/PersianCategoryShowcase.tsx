'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  count: string;
  image: string;
  badge?: string;
}

export default function PersianCategoryShowcase() {
  const categories: CategoryItem[] = [
    {
      id: 'pants',
      title: 'شلوار و کارگو سه‌بعدی',
      subtitle: 'کتان ارگانیک و دنیم ژاپنی',
      count: '۱۲ محصول فاخر',
      image: '/images/Men-panets/g-star-rovic-zip-3d-straight-tapered-pant-grey.png',
      badge: 'پرفروش‌ترین'
    },
    {
      id: 'hoodies',
      title: 'هودی، دورس و سوئیت‌شرت',
      subtitle: 'پنبه متراکم ۴۲۰ گرمی',
      count: '۱۶ محصول جدید',
      image: '/images/men-hoodies/g-star-premium-core-hooded-sweater-grey.png',
      badge: 'ویژه فصل'
    },
    {
      id: 'shirts',
      title: 'تی‌شرت و پولوشرت هافلی',
      subtitle: 'بافت وافل و کتان مصر',
      count: '۱۴ محصول کلاسیک',
      image: '/images/Men-shirts/g-star-waffle-henley-relaxed-t-shirt-white.png'
    }
  ];

  return (
    <section id="categories" className="py-24 bg-[#0E0F13] text-white font-peyda relative border-t border-[#1F222D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold text-[#C8A97E] tracking-widest uppercase mb-2 block flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              دسته‌بندی‌های برگزیده
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              تفکیک هوشمندانه پوشاک لوکس
            </h2>
          </div>
          <p className="text-[#9699A8] text-sm sm:text-base max-w-md font-vazir leading-relaxed">
            طراحی شده با الهام از معماری مدرن، با ماندگاری بالا و تناسب اندام استثنایی.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href="#products"
              className="group relative h-[450px] rounded-2xl overflow-hidden bg-[#161820] border border-[#262A38] hover:border-[#C8A97E]/70 transition-all duration-500 shadow-xl flex flex-col justify-end p-8"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 z-0 bg-[#12141A]">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-contain object-center p-8 group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F13] via-[#0E0F13]/40 to-transparent" />
              </div>

              {/* Badge if exists */}
              {cat.badge && (
                <div className="absolute top-6 right-6 z-10">
                  <span className="px-3 py-1 bg-[#C8A97E] text-black text-xs font-bold rounded-md shadow-lg">
                    {cat.badge}
                  </span>
                </div>
              )}

              {/* Content Overlay */}
              <div className="relative z-10">
                <span className="text-xs font-mono text-[#C8A97E] font-medium tracking-wider mb-2 block">
                  {cat.count}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#C8A97E] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-[#A0A4B6] font-vazir mb-6">
                  {cat.subtitle}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#C8A97E] transition-colors">
                  <span>مشاهده محصولات این دسته‌بندی</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
