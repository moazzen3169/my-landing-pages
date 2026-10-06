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
    <section className="py-28 lg:py-40 bg-white font-peyda text-right border-b border-neutral-200" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16">

        <div className="bg-[#F8F8F6] text-black p-10 sm:p-16 lg:p-20 border border-neutral-200 rounded-3xl relative overflow-hidden shadow-2xs">

          <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200 text-xs font-mono font-bold text-black uppercase tracking-wider rounded-full shadow-2xs">
              <span>NEWSLETTER & DROPS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-black leading-tight">
              در جریان جدیدترین کتانی‌ها
              <br />
              <span className="text-neutral-400">و تخفیف‌های ویژه باشید</span>
            </h2>

            <p className="text-base text-neutral-600 font-normal leading-relaxed max-w-xl mx-auto">
              با ثبت ایمیل، زودتر از دیگران از موجود شدن مدل‌های جدید، دراپ‌های محدود و پیشنهادهای ویژه اطلاع پیدا کنید.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#products"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded-full transition-colors group shadow-xs"
              >
                <span>مشاهده همه کفش‌های اسپورت</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#limited-drop"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white hover:bg-neutral-100 text-black border border-neutral-200 font-semibold text-sm rounded-full transition-colors shadow-2xs"
              >
                <span>دراپ‌های محدود</span>
              </a>
            </div>

            {/* NEWSLETTER FORM */}
            <div className="pt-8 border-t border-neutral-200 max-w-md mx-auto">
              <div className="text-xs font-mono font-bold text-neutral-500 mb-3 uppercase">
                عضویت در خبرنامه
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
                {subscribed ? (
                  <div className="w-full py-3.5 px-6 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs rounded-full flex items-center justify-center gap-2">
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
                      className="w-full px-5 py-3.5 bg-white border border-neutral-200 text-xs font-peyda text-black placeholder-neutral-400 focus:outline-none focus:border-black rounded-full shadow-2xs"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3.5 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-full transition-colors shrink-0 shadow-xs"
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
