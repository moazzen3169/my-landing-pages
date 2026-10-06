'use client';

import React, { useState } from 'react';
import { ArrowLeft, Send, PhoneCall, ShieldCheck, Share2 } from 'lucide-react';

interface FooterProps {
  storeName?: string;
}

export default function Footer({ storeName = 'دپیکس' }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#111111] text-white pt-16 pb-12 border-t border-[#222222]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">

        {/* TOP ROW: BRAND INFO & NEWSLETTER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">

          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-4 text-right">
            <span className="font-serif tracking-widest text-2xl font-bold uppercase block">
              {storeName}
            </span>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              خانه مد {storeName}؛ ارائه‌دهنده پوشاک فاخر و مینیمال زنانه با تمرکز بر اصالت پارچه، دقت خیاطی سفارشی و تجربه خرید متمایز دیجیتال.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="p-2 bg-white/5 hover:bg-white/20 transition-colors" aria-label="Social Link">
                <Share2 className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/20 transition-colors" aria-label="Telegram">
                <Send className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-3 space-y-3 text-right">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/50">
              دسترسی سریع
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-medium">
              <li><a href="#new-arrivals" className="hover:text-white transition-colors">جدیدترین محصولات</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">دسته‌بندی‌ها</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">کاتالوگ کامل</a></li>
              <li><a href="#" className="hover:text-white transition-colors">داستان برند</a></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="md:col-span-4 space-y-3 text-right">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/50">
              خبرنامه
            </h4>
            <p className="text-xs text-white/70">
              برای دریافت جدیدترین مجموعه‌ها و دعوت‌نامه‌های اختصاصی عضو شوید.
            </p>

            {subscribed ? (
              <div className="p-3 bg-white/10 text-white text-xs font-medium text-center">
                عضویت شما با موفقیت ثبت شد.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="آدرس ایمیل شما..."
                  required
                  className="w-full bg-white/5 border border-white/20 px-3 py-2.5 text-xs text-white placeholder-white/40 focus:outline-hidden focus:border-white text-right"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-white text-[#111111] text-xs font-semibold hover:bg-neutral-200 transition-colors min-w-max flex items-center gap-1"
                >
                  <span>عضویت</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* BOTTOM ROW: GUARANTEES & COPYRIGHT */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 pt-2">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-white/70" />
              <span>ضمانت اصالت و کیفیت پارچه</span>
            </div>
            <div className="flex items-center gap-1.5">
              <PhoneCall className="w-4 h-4 text-white/70" />
              <span>پشتیبانی اختصاصی مشتریان</span>
            </div>
          </div>

          <p className="text-center sm:text-left text-[11px]">
            © 2026 {storeName}. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
