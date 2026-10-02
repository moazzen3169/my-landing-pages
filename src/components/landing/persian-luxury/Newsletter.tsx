'use client';

import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('ایمیل شما با موفقیت ثبت شد.');
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#E5E5E5] font-peyda text-[#111111]">
      <div className="max-w-[600px] mx-auto px-6 text-center">

        <span className="block text-[11px] font-mono font-medium text-[#999999] uppercase tracking-widest mb-2">
          NEWSLETTER
        </span>
        <h2 className="text-2xl sm:text-3xl font-light text-[#000000] mb-4">
          عضویت در خبرنامه MOR'E
        </h2>
        <p className="text-xs text-[#666666] mb-8 font-normal leading-relaxed">
          برای اطلاع از کالکشن‌های جدید، دعوت‌نامه‌های خصوصی و پیشنهادات ویژه، ایمیل خود را وارد نمایید.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="آدرس ایمیل شما"
            required
            className="flex-1 px-4 py-3 bg-[#FAFAFA] border border-[#E5E5E5] text-xs text-[#000000] focus:outline-none focus:border-[#000000] rounded-none dir-ltr text-start font-sans"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#000000] hover:bg-[#111111] text-white text-xs font-normal tracking-wider transition-colors rounded-none"
          >
            عضویت
          </button>
        </form>

      </div>
    </section>
  );
}
