'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LANDING_REGISTRY } from '@/data/noire';
import { STORES } from '@/data/stores';
import { ArrowUpLeft, Store as StoreIcon } from 'lucide-react';

export default function ShowcasePage() {
  const [selectedStoreSlug, setSelectedStoreSlug] = useState<string>('default');

  const storeList = Object.values(STORES);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-peyda selection:bg-slate-900 selection:text-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8 border-b border-slate-200/80 pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">
              لیست صفحات
            </h1>
            <p className="text-xs text-slate-500 font-vazir">
              مشاهده و دسترسی سریع به لندینگ پیج‌ها با امکان انتخاب فروشگاه
            </p>
          </div>

          {/* Store Selector */}
          <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-xs">
            <StoreIcon className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="text-xs text-slate-600 font-medium">فروشگاه:</span>
            <select
              value={selectedStoreSlug}
              onChange={(e) => setSelectedStoreSlug(e.target.value)}
              className="bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer pr-1"
            >
              {storeList.map((st) => (
                <option key={st.slug} value={st.slug}>
                  {st.name} {st.slug === 'default' ? '(پیش‌فرض)' : ''}
                </option>
              ))}
            </select>
          </div>
        </header>

        {/* Minimal Row List Table */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-medium text-xs">
                <th className="py-3.5 px-4 sm:px-6 w-16 text-center">ردیف</th>
                <th className="py-3.5 px-4 sm:px-6">نام پروژه</th>
                <th className="py-3.5 px-4 sm:px-6 w-32 text-center">مشاهده</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {LANDING_REGISTRY.map((landing, index) => {
                const landingPath = selectedStoreSlug === 'default'
                  ? `/shop/${landing.slug}`
                  : `/shop/${landing.slug}?store=${selectedStoreSlug}`;
                return (
                  <tr key={landing.slug} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-mono text-xs text-slate-400 text-center">
                      {index + 1}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-medium text-slate-800">
                      {landing.title}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-center">
                      <Link
                        href={landingPath}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition-colors"
                      >
                        <span>مشاهده</span>
                        <ArrowUpLeft className="w-3.5 h-3.5 shrink-0" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
