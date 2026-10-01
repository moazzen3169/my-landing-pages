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
        <div className="bg-[#16233A] border border-[#CBD5E1]/20 rounded-[28px] p-8 sm:p-12 lg:p-16 relative overflow-hidden text-[#F8FAFC]">

          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#0B1220] text-[#8FA9C4] border border-[#CBD5E1]/20 flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6 shrink-0" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-[#F8FAFC]">
              اطلاع از دراپ‌ها و کالکشن‌های جدید
            </h2>

            <p className="text-xs sm:text-base text-[#CBD5E1] font-peyda leading-relaxed max-w-xl mx-auto font-normal">
              با ثبت ایمیل، پیش از دیگران از انتشار مدل‌های لیمیتد ادیشن، تخفیف‌های ویژه و ورود کالکشن‌های جدید مطلع شوید.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
              {subscribed ? (
                <div className="w-full py-3.5 px-6 bg-emerald-800 text-white font-medium text-sm rounded-full flex items-center justify-center gap-2">
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
                    className="w-full px-6 py-3.5 bg-[#0B1220] border border-[#CBD5E1]/30 rounded-full text-sm font-peyda text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#8FA9C4]"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#8FA9C4] hover:bg-[#F8FAFC] text-[#0B1220] font-semibold text-sm rounded-full transition-colors flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>عضویت</span>
                    <ArrowLeft className="w-4 h-4 shrink-0" />
                  </button>
                </>
              )}
            </form>

            <div className="text-[11px] text-[#94A3B8] font-peyda pt-2 font-normal">
              اطلاعات شما نزد سولئا محفوظ است. امکان لغو عضویت در هر زمان وجود دارد.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
