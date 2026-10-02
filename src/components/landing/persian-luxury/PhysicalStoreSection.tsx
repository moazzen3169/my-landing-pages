'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Clock, Store } from 'lucide-react';
import { TABRIZ_STORE_INFO } from '@/data/persian-luxury-women';

export default function PhysicalStoreSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F7F5F1] font-peyda">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#EFECE6] border border-[#DDD9D2] p-6 sm:p-10 md:p-12">

          {/* STORE INFO CONTENT (RIGHT IN RTL) */}
          <div className="lg:col-span-6 text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F5F1] border border-[#DDD9D2] text-xs font-bold text-[#B29A6A] mb-4">
              <Store className="w-3.5 h-3.5 shrink-0" />
              <span>{TABRIZ_STORE_INFO.titlePersian}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-normal mb-4">
              {TABRIZ_STORE_INFO.subtitlePersian}
            </h2>

            <p className="text-sm text-[#77736D] leading-relaxed mb-8">
              {TABRIZ_STORE_INFO.noticePersian}
            </p>

            {/* DETAILS LIST */}
            <div className="space-y-4 text-xs text-[#171717] border-t border-[#DDD9D2] pt-6">

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B29A6A] shrink-0 mt-0.5 stroke-[1.75]" />
                <div>
                  <span className="font-bold block text-[#171717]">نشانی فروشگاه:</span>
                  <span className="text-[#77736D]">{TABRIZ_STORE_INFO.addressPersian}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B29A6A] shrink-0 mt-0.5 stroke-[1.75]" />
                <div>
                  <span className="font-bold block text-[#171717]">ساعات کاری:</span>
                  <span className="text-[#77736D]">{TABRIZ_STORE_INFO.workingHoursPersian}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B29A6A] shrink-0 mt-0.5 stroke-[1.75]" />
                <div>
                  <span className="font-bold block text-[#171717]">تلفن هماهنگی و مشاوره:</span>
                  <span className="text-[#77736D] font-vazir">{TABRIZ_STORE_INFO.phone} — {TABRIZ_STORE_INFO.consultationPhone}</span>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href={`tel:${TABRIZ_STORE_INFO.phone}`}
                className="inline-block px-6 py-3 bg-[#171717] hover:bg-[#2C2926] text-[#F7F5F1] text-xs font-semibold transition-all"
              >
                تماس جهت هماهنگی بازدید
              </a>
            </div>

          </div>

          {/* STORE PHOTO GRAPHIC (LEFT IN RTL) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full bg-[#171717] border border-[#DDD9D2] overflow-hidden">
              <Image
                src="/images/landings/persian-luxury-v1/5633740aa337463f8e14fbceebc3fc3b.png"
                alt="نمای فروشگاه حضوری تبریز"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
