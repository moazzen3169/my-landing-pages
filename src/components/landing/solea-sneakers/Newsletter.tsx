'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowLeft } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-10 sm:py-14 font-peyda text-right" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="bg-[#C8D1CE] border border-[#111111]/10 rounded-[32px] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl shadow-black/5">

          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#111111] text-white flex items-center justify-center mx-auto shadow-md">
              <Mail className="w-6 h-6 shrink-0" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#111111]">
              از جدیدترین دراپ‌ها باخبر شو
            </h2>

            <p className="text-xs sm:text-base text-[#3A3A37] font-vazir leading-relaxed max-w-xl mx-auto font-normal">
              با عضویت در خبرنامه سولئا، اولین نفری باشید که از انتشار مدل‌های لیمیتد ادیشن، تخفیف‌های خاص و کالکشن‌های جدید مطلع می‌شوید.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
              {subscribed ? (
                <div className="w-full py-3.5 px-6 bg-emerald-700 text-white font-medium text-sm rounded-full flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>عضویت شما با موفقیت ثبت شد!</span>
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="آدرس ایمیل شما..."
                    required
                    className="w-full px-6 py-4 bg-white/90 border border-[#111111]/15 rounded-full text-sm font-vazir text-[#111111] placeholder-[#888] focus:outline-none focus:border-[#111111] shadow-sm"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-[#111111] hover:bg-[#252525] text-white font-semibold text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2 shrink-0 shadow-lg shadow-black/10"
                  >
                    <span>عضویت</span>
                    <ArrowLeft className="w-4 h-4 shrink-0" />
                  </button>
                </>
              )}
            </form>

            <div className="text-[11px] text-[#6B6B68] font-vazir pt-2 font-normal">
              ما به حریم خصوصی شما احترام می‌گذاریم. هر زمان خواستید می‌توانید لغو عضویت کنید.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
