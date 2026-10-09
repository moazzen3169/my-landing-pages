'use client';

import React, { useState } from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';

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
    <section className="py-12 sm:py-20 lg:py-28 bg-white font-peyda text-right border-b border-neutral-200" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12">

        <div className="bg-[#ffffff] text-black relative overflow-hidden">

          <div className="max-w-2xl mx-auto text-center space-y-5 sm:space-y-6 relative z-10">

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F8F6] border border-neutral-200 text-[11px] sm:text-xs font-mono font-bold text-black uppercase tracking-wider rounded-full shadow-2xs">
              <span>NEWSLETTER & DROPS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-black leading-tight">
              در جریان جدیدترین کتانی‌ها
              <br />
              <span className="text-neutral-400 font-normal">و تخفیف‌های ویژه باشید</span>
            </h2>

            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed max-w-lg mx-auto">
              با ثبت ایمیل، زودتر از دیگران از موجود شدن مدل‌های جدید، دراپ‌های محدود و پیشنهادهای ویژه اطلاع پیدا کنید.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm rounded-full transition-colors group shadow-xs active:scale-95"
              >
                <span>مشاهده همه کفش‌های اسپورت</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </a>

              <a
                href="#limited-drop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F8F8F6] hover:bg-neutral-200 text-black border border-neutral-200 font-semibold text-xs sm:text-sm rounded-full transition-colors active:scale-95"
              >
                <span>دراپ‌های محدود</span>
              </a>
            </div>

            {/* NEWSLETTER FORM */}
            <div className="pt-6 sm:pt-8 border-t border-neutral-200 max-w-md mx-auto">
              <div className="text-[11px] sm:text-xs font-mono font-bold text-neutral-500 mb-2.5 uppercase">
                عضویت در خبرنامه
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2.5">
                {subscribed ? (
                  <div className="w-full py-3 px-5 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs rounded-full flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0 text-emerald-600" />
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
                      className="w-full px-4 py-3 bg-[#F8F8F6] border border-neutral-200 text-xs font-peyda text-black placeholder-neutral-400 focus:outline-none focus:border-black rounded-full shadow-2xs"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-full transition-colors shrink-0 shadow-xs active:scale-95"
                    >
                      عضویت
                    </button>
                  </>
                )}
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
