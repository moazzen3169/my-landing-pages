'use client';

import React from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, RefreshCw, Truck, Headphones } from 'lucide-react';

export function PersianCraftsmanship() {
  return (
    <section id="about" className="py-24 bg-[#0A0B0E] text-white font-peyda relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Left */}
          <div>
            <span className="text-xs font-semibold text-[#C8A97E] tracking-widest uppercase mb-3 block">
              اصالت و فلسفه برند گارنِت
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
              دست‌سازه، وقار بی‌زمان و کمال در جزییات
            </h2>
            <p className="text-[#A0A4B8] text-base font-vazir leading-relaxed mb-6">
              برند گارنِت بر پایه تعهد کامل به هنر خیاطی لوکس و نوآوری در الگوسازی ارگونومیک شکل گرفته است. ما معتقدیم یک لباس فاخر باید علاوه بر ظاهری خیره‌کننده، حس راحتی و اعتمادبه‌نفس بی‌نظیری به شما ببخشد.
            </p>
            <p className="text-[#888C9E] text-sm font-vazir leading-relaxed mb-8">
              تمامی پارچه‌ها از باکیفیت‌ترین کارخانجات نخ‌ریسی ارگانیک انتخاب شده و فرایند برش و دوخت با رعایت دقیق‌ترین استانداردهای خیاطی فاخر انجام می‌شود.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#1F222E]">
              <div>
                <span className="text-3xl font-black text-[#C8A97E] block mb-1 font-peyda">۱۰۰٪</span>
                <span className="text-xs text-[#A0A4B8] font-vazir">پنبه و دنیم خام ارگانیک</span>
              </div>
              <div>
                <span className="text-3xl font-black text-[#C8A97E] block mb-1 font-peyda">۷ روز</span>
                <span className="text-xs text-[#A0A4B8] font-vazir">ضمانت تعویض و بازگشت</span>
              </div>
            </div>
          </div>

          {/* Visual Banner Right */}
          <div className="relative h-[480px] rounded-3xl overflow-hidden border border-[#252838] shadow-2xl">
            <Image
              src="/images/banners/Group 242.jpg"
              alt="داستان برند گارنت"
              fill
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent" />
            <div className="absolute bottom-8 right-8 left-8 p-6 bg-[#0E1017]/90 backdrop-blur-md rounded-2xl border border-white/10">
              <p className="text-sm font-bold text-white mb-1">تضمین اصالت و خیاطی لوکس</p>
              <p className="text-xs text-[#9094A6] font-vazir">خلق تجربه‌ای متفاوت برای کسانی که به جزییات اهمیت می‌دهند.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PersianServices() {
  return (
    <section className="py-16 bg-[#0E0F13] text-white font-peyda border-t border-[#1F222D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-right">
          <div className="p-6 bg-[#13151D] border border-[#232635] rounded-2xl">
            <div className="w-12 h-12 bg-[#1C1F2B] border border-[#C8A97E]/30 text-[#C8A97E] rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">ارسال رایگان و اکسپرس</h4>
            <p className="text-xs text-[#9094A6] font-vazir leading-relaxed">تحویل سریع در سراسر کشور با بسته‌بندی فاخر</p>
          </div>

          <div className="p-6 bg-[#13151D] border border-[#232635] rounded-2xl">
            <div className="w-12 h-12 bg-[#1C1F2B] border border-[#C8A97E]/30 text-[#C8A97E] rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">ضمانت اصالت ۱۰۰٪</h4>
            <p className="text-xs text-[#9094A6] font-vazir leading-relaxed">تضمین کیفیت پارچه و دوخت پریمیوم</p>
          </div>

          <div className="p-6 bg-[#13151D] border border-[#232635] rounded-2xl">
            <div className="w-12 h-12 bg-[#1C1F2B] border border-[#C8A97E]/30 text-[#C8A97E] rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">۷ روز مهلت تعویض</h4>
            <p className="text-xs text-[#9094A6] font-vazir leading-relaxed">امکان تعویض سایز و مدل بدون هزینه اضافی</p>
          </div>

          <div className="p-6 bg-[#13151D] border border-[#232635] rounded-2xl">
            <div className="w-12 h-12 bg-[#1C1F2B] border border-[#C8A97E]/30 text-[#C8A97E] rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Headphones className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">مشاوره اختصاصی استایل</h4>
            <p className="text-xs text-[#9094A6] font-vazir leading-relaxed">پشتیبانی و راهنمایی تخصصی استایلیست</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PersianFooter() {
  return (
    <footer className="bg-[#07080A] text-white font-peyda border-t border-[#1B1E29] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1B1E29]">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <span className="text-2xl font-black text-white block mb-2 font-peyda">GARNET</span>
            <span className="text-xs text-[#C8A97E] uppercase tracking-widest block mb-4 font-sans">HAUTE COUTURE</span>
            <p className="text-xs text-[#8A8E9E] font-vazir leading-relaxed max-w-sm mb-6">
              خلق کالکشن‌های فاخر پوشاک مردانه بر پایه وقار، کیفیت پارچه‌های ارگانیک و طراحی ماندگار.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h5 className="text-sm font-bold text-white mb-4">دسترسی سریع</h5>
            <ul className="space-y-2.5 text-xs text-[#8A8E9E] font-vazir">
              <li><a href="#hero" className="hover:text-[#C8A97E] transition-colors">صفحه اصلی</a></li>
              <li><a href="#categories" className="hover:text-[#C8A97E] transition-colors">دسته‌بندی‌ها</a></li>
              <li><a href="#products" className="hover:text-[#C8A97E] transition-colors">کالکشن جدید</a></li>
              <li><a href="#outfits" className="hover:text-[#C8A97E] transition-colors">ست‌های پیشنهادی</a></li>
              <li><a href="#about" className="hover:text-[#C8A97E] transition-colors">داستان برند</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h5 className="text-sm font-bold text-white mb-2">عضویت در باشگاه مشتریان خاص</h5>
            <p className="text-xs text-[#8A8E9E] font-vazir leading-relaxed mb-4">
              جهت اطلاع از رونمایی کالکشن‌های جدید و دعوت‌نامه‌های اختصاصی، شماره تماس خود را ثبت کنید.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="شماره موبایل..."
                className="w-full bg-[#13151F] border border-[#252838] rounded-xl px-4 py-3 text-xs text-white placeholder-[#5A5E70] focus:outline-none focus:border-[#C8A97E]"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[#C8A97E] text-black font-bold text-xs rounded-xl hover:bg-[#D8B88D] transition-colors whitespace-nowrap"
              >
                عضویت
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6A6E7E] font-vazir gap-4">
          <p>© ۱۴۰۴ برند پوشاک فاخر گارنِت. تمام حقوق محفوظ است.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">حریم خصوصی</a>
            <a href="#" className="hover:text-white transition-colors">شرایط خریداران</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
