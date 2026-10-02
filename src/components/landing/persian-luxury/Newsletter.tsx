'use client';

import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-14 bg-[#F7F5F1] font-peyda border-b border-[#DDD9D2]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 text-center max-w-xl">
        <h3 className="text-xl font-bold text-[#171717] mb-2">
          از انتخاب‌های تازه باخبر شوید
        </h3>
        <p className="text-xs text-[#77736D] mb-6">
          با ثبت ایمیل خود، از ورودی جدیدترین کیف و کفش‌های لوکس و کمپین‌های خصوصی مطلع گردید.
        </p>

        {submitted ? (
          <div className="p-3 bg-[#EAE4DA] border border-[#DDD9D2] text-xs font-semibold text-[#171717]">
            ✓ ایمیل شما با موفقیت ثبت گردید.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل شما..."
              required
              className="flex-grow px-4 py-3 bg-[#F2EFE9] border border-[#DDD9D2] text-xs text-[#171717] focus:outline-none focus:border-[#171717]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#171717] hover:bg-[#2C2926] text-[#F7F5F1] text-xs font-semibold transition-all shrink-0"
            >
              عضویت
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
