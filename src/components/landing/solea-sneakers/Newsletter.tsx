'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section className="py-24 lg:py-32 bg-[#F3F3F1] font-peyda text-right border-b border-[#D9D9D5]" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12">

        {/* 25 — FINAL CONVERSION SECTION */}
        <div className="bg-[#0A0A0A] text-[#F3F3F1] p-10 sm:p-16 lg:p-24 border border-[#0A0A0A] relative overflow-hidden">

          {/* OVERSIZED BACKGROUND TEXT */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 left-0 pointer-events-none select-none opacity-5 text-center overflow-hidden">
            <span className="text-[20vw] font-black leading-none uppercase tracking-tighter text-[#F3F3F1]">
              JOIN SOLEA
            </span>
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">

            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#181818] border border-[#333333] text-xs font-mono font-bold text-[#D9D9D5] uppercase tracking-wider">
              <span>FINAL STEP</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-[#F3F3F1] leading-tight">
              قدم بعدی،
              <br />
              <span className="text-[#6B6B68]">از اینجا شروع می‌شود.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#D9D9D5] font-normal leading-relaxed max-w-xl mx-auto">
              کالکشن تخصصی SOLEA را کشف کن و با ثبت ایمیل، زودتر از همه از دراپ‌های محدود و انتشار نسل جدید اسنیکرها باخبر شو.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#products"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F3F3F1] hover:bg-[#D9D9D5] text-[#0A0A0A] font-bold text-sm rounded-full transition-colors group"
              >
                <span>مشاهده همه اسنیکرها</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#limited-drop"
                className="inline-flex items-center gap-2 px-7 py-4 bg-transparent hover:bg-[#181818] text-[#F3F3F1] border border-[#333333] font-semibold text-sm rounded-full transition-colors"
              >
                <span>کشف دراپ‌های محدود</span>
              </a>
            </div>

            {/* NEWSLETTER FORM */}
            <div className="pt-8 border-t border-[#333333] max-w-md mx-auto">
              <div className="text-xs font-mono font-bold text-[#6B6B68] mb-3 uppercase">
                NEWSLETTER REGISTRATION
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3">
                {subscribed ? (
                  <div className="w-full py-3.5 px-6 bg-emerald-900/80 border border-emerald-700 text-emerald-100 font-bold text-xs rounded-full flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
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
                      className="w-full px-5 py-3.5 bg-[#181818] border border-[#333333] text-xs font-peyda text-[#F3F3F1] placeholder-[#6B6B68] focus:outline-none focus:border-[#F3F3F1] rounded-none"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3.5 bg-[#F3F3F1] hover:bg-[#D9D9D5] text-[#0A0A0A] font-bold text-xs rounded-none transition-colors shrink-0"
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
