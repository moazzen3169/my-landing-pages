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
    <section className="py-12 sm:py-16 font-peyda text-right" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-[#FFFFFF] border border-[#E5E4E0] rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">

          <div className="max-w-xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5F4F0] border border-[#E5E4E0] rounded-full text-[11px] font-mono font-bold text-[#171717] uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5 text-[#171717]" />
              GET THE NEXT DROP
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
              عضویت در خبرنامه دراپ‌های سولئا
            </h2>

            <p className="text-xs sm:text-sm text-[#777777] font-vazir leading-relaxed font-normal">
              جدیدترین دراپ‌ها، انتشار مدل‌های لیمیتد و پیشنهادهای هفتگی استایلیست‌ها مستقیم در ایمیل شما.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 pt-2">
              {subscribed ? (
                <div className="w-full py-3 px-6 bg-[#171717] text-[#CCFF00] font-bold text-xs rounded-full flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
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
                    className="w-full px-5 py-3 bg-[#F5F4F0] border border-[#E5E4E0] rounded-full text-xs font-vazir text-[#171717] placeholder-[#777777] focus:outline-none focus:border-[#171717]"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-[#171717] hover:bg-[#262626] text-white font-semibold text-xs rounded-full transition-all flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>عضویت</span>
                    <ArrowLeft className="w-3.5 h-3.5 text-[#CCFF00]" />
                  </button>
                </>
              )}
            </form>

            <div className="text-[10px] text-[#777777] font-vazir pt-1 font-normal">
              احترام به حریم خصوصی شما؛ لغو عضویت در هر زمان با یک کلیک.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
