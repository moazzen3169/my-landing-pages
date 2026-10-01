'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, RefreshCw, Truck, Lock } from 'lucide-react';

interface EditorialSectionProps {
  isPersian?: boolean;
}

export function BrandStory({ isPersian = false }: EditorialSectionProps) {
  return (
    <section className="section-padding bg-[#0B0B0B] text-[#F3F2EE] border-t border-[#2B2B2B]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 space-y-6 text-start">
          <span
            className={
              isPersian
                ? 'text-xs font-medium text-[#A58B68] font-peyda'
                : 'text-[10px] font-mono tracking-[0.35em] text-[#A58B68] uppercase'
            }
          >
            {isPersian ? 'بیانیه نوآر' : 'OUR MANIFESTO'}
          </span>
          <h2
            className={
              isPersian
                ? 'text-3xl sm:text-5xl font-bold font-peyda text-white leading-[1.25]'
                : 'text-3xl sm:text-5xl md:text-6xl font-light font-display tracking-tight text-white uppercase leading-tight'
            }
          >
            {isPersian ? (
              <>
                طراحی‌شده برای <br /> وقارِ حرکتِ شما.
              </>
            ) : (
              <>
                MADE FOR THE <br /> WAY YOU MOVE.
              </>
            )}
          </h2>
          <p
            className={`text-[#D7D4CD] leading-relaxed ${
              isPersian
                ? 'text-sm md:text-base font-normal font-peyda'
                : 'text-sm md:text-base font-light'
            }`}
          >
            {isPersian
              ? 'فروشگاه چندبرند لوکس نوآر (NOIRÉ) مجموعه‌ای گزینش‌شده از بهترین کالکشن‌های پوشاک مردانه روزمره و مجلسی برندهای مطرح جهانی مانند Tom Ford, Zegna, Loro Piana و Burberry را برای آقایان شیک‌پوش فراهم آورده است.'
              : 'NOIRÉ is a luxury multi-brand menswear boutique curating finest formal tailoring, smart casual, and luxury essentials from iconic fashion houses like Tom Ford, Zegna, Loro Piana, and Burberry.'}
          </p>
          <div
            className={`grid grid-cols-2 gap-6 pt-6 border-t border-[#2B2B2B] ${
              isPersian ? 'text-xs font-peyda' : 'text-xs font-mono'
            }`}
          >
            <div>
              <p className="text-[#A58B68] font-medium">{isPersian ? 'طراحی' : 'DESIGN'}</p>
              <p className={`text-[#D7D4CD] mt-1 ${isPersian ? 'font-normal' : 'font-light'}`}>
                {isPersian
                  ? 'برش‌های معماری مینیمال مهندسی‌شده برای وقار ایستایی.'
                  : 'Minimal architectural cuts engineered for posture.'}
              </p>
            </div>
            <div>
              <p className="text-[#A58B68] font-medium">{isPersian ? 'متریال' : 'MATERIAL'}</p>
              <p className={`text-[#D7D4CD] mt-1 ${isPersian ? 'font-normal' : 'font-light'}`}>
                {isPersian
                  ? '۱۰۰٪ پشم طبیعی، ابریشم کرپ و کشمیر مغولی.'
                  : '100% natural wools, silk crepes & Mongolian cashmere.'}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative aspect-[4/3] w-full bg-[#181818] border border-[#2B2B2B] overflow-hidden">
          <Image
            src="/images/banners/Group-242.jpg"
            alt="Brand Story Editorial"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

export function QualitySection({ isPersian = false }: EditorialSectionProps) {
  const SERVICES = isPersian
    ? [
        { icon: Truck, title: 'ارسال اکسپرس اختصاصی', desc: 'رایگان همراه با پیک ویژه بیمه‌شده' },
        { icon: RefreshCw, title: 'ضمانت اصالت ۱۰۰٪', desc: 'تامین مستقیم از خانه‌های مد بین‌المللی' },
        { icon: ShieldCheck, title: 'مشاوره پرو و استایل', desc: 'خدمات شخصی‌سازی استایل مردانه' },
        { icon: Lock, title: 'پرداخت امن و مطمئن', desc: 'درگاه ایمن با پشتیبانی اختصاصی' },
      ]
    : [
        { icon: Truck, title: 'EXPRESS COURIER', desc: 'Complimentary insured luxury delivery' },
        { icon: RefreshCw, title: '100% AUTHENTIC GUARANTEE', desc: 'Sourced directly from official luxury houses' },
        { icon: ShieldCheck, title: 'PERSONAL STYLING', desc: 'Bespoke tailoring and fit consultations' },
        { icon: Lock, title: 'SECURE CHECKOUT', desc: 'Encrypted multi-currency payment' },
      ];

  return (
    <section className="section-padding-sm bg-[#F3F2EE] border-y border-[#D7D4CD]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {SERVICES.map((srv) => {
          const Icon = srv.icon;
          return (
            <div key={srv.title} className="flex items-start gap-4 text-start p-4 bg-white/60 border border-[#D7D4CD]">
              <div className="p-3 border border-[#D7D4CD] bg-white shrink-0">
                <Icon className="w-5 h-5 text-[#111111]" />
              </div>
              <div>
                <h4
                  className={
                    isPersian
                      ? 'text-xs sm:text-sm font-bold font-peyda text-[#111111]'
                      : 'text-xs font-bold tracking-widest text-[#111111] uppercase font-mono'
                  }
                >
                  {srv.title}
                </h4>
                <p
                  className={`text-xs text-[#77746E] mt-1 ${
                    isPersian ? 'font-normal font-peyda' : 'font-light'
                  }`}
                >
                  {srv.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Newsletter({ isPersian = false }: EditorialSectionProps) {
  return (
    <section className="section-padding bg-[#0B0B0B] text-[#F3F2EE] border-t border-[#2B2B2B]">
      <div className="max-w-2xl mx-auto px-5 text-center space-y-6">
        <span
          className={
            isPersian
              ? 'text-xs font-medium text-[#A58B68] font-peyda'
              : 'text-[10px] font-mono tracking-[0.35em] text-[#A58B68] uppercase'
          }
        >
          {isPersian ? 'دسترسی اختصاصی' : 'PRIVATE ACCESS'}
        </span>
        <h2
          className={
            isPersian
              ? 'text-2xl sm:text-4xl font-bold font-peyda text-white leading-tight'
              : 'text-3xl sm:text-5xl font-light font-display text-white uppercase tracking-tight'
          }
        >
          {isPersian ? 'به دنیای نوآر بپیوندید.' : 'ENTER THE WORLD OF NOIRÉ.'}
        </h2>
        <p
          className={`text-[#D7D4CD] max-w-md mx-auto leading-relaxed ${
            isPersian ? 'text-xs sm:text-sm font-normal font-peyda' : 'text-xs sm:text-sm font-light'
          }`}
        >
          {isPersian
            ? 'اطلاعیه‌های انتشار کالکشن‌های خصوصی، رونمایی‌های محدود و پیش‌نمایش لوک‌بوک‌های معاصر را دریافت کنید.'
            : 'Receive private editorial release notices, invitation-only capsules, and contemporary lookbook previews.'}
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(isPersian ? 'با تشکر از اشتراک شما در نوآر.' : 'Thank you for subscribing to NOIRÉ.');
          }}
          className="flex flex-col sm:flex-row items-center max-w-md mx-auto gap-3 pt-4"
        >
          <input
            type="email"
            required
            placeholder={isPersian ? 'ایمیل خود را وارد کنید...' : 'ENTER YOUR EMAIL'}
            className={`w-full bg-[#181818] border border-[#2B2B2B] px-4 py-3.5 text-white placeholder-[#77746E] focus:outline-none focus:border-[#A58B68] transition-colors ${
              isPersian ? 'text-xs font-normal font-peyda' : 'text-xs font-mono uppercase'
            }`}
          />
          <button
            type="submit"
            className={`w-full sm:w-auto bg-white text-[#111111] px-6 py-3.5 font-bold hover:bg-[#A58B68] hover:text-white transition-colors shrink-0 ${
              isPersian ? 'text-xs font-medium font-peyda' : 'text-[10px] tracking-[0.25em] uppercase font-mono'
            }`}
          >
            {isPersian ? 'عضویت' : 'JOIN THE LIST'}
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer({ isPersian = false }: EditorialSectionProps) {
  return (
    <footer className="bg-[#0B0B0B] text-[#D7D4CD] border-t border-[#2B2B2B] pt-16 pb-12 text-xs">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-5 gap-10 mb-16 text-start">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="text-3xl font-light font-display tracking-[0.3em] text-white inline-block">
            NOIRÉ
          </Link>
          <p
            className={`text-[#77746E] max-w-sm leading-relaxed ${
              isPersian ? 'text-xs font-normal font-peyda' : 'font-light'
            }`}
          >
            {isPersian
              ? 'پوشاک مردانه لوکس معاصر طراحی‌شده با وقار معماری. پاریس — میلان — توکیو.'
              : 'Contemporary luxury menswear designed with architectural restraint. Paris — Milan — Tokyo.'}
          </p>
        </div>

        {/* Shop */}
        <div className={`space-y-3 ${isPersian ? 'font-peyda' : 'font-mono'}`}>
          <p
            className={
              isPersian
                ? 'text-white text-xs font-bold'
                : 'text-white text-[10px] tracking-[0.25em] uppercase font-bold'
            }
          >
            {isPersian ? 'فروشگاه' : 'SHOP'}
          </p>
          <ul className="space-y-2 text-[#77746E]">
            <li><Link href="/shop/suits" className="hover:text-white transition-colors">{isPersian ? 'کت و شلوار' : 'Suits & Tailoring'}</Link></li>
            <li><Link href="/shop/blazers" className="hover:text-white transition-colors">{isPersian ? 'کت تک' : 'Blazers & Jackets'}</Link></li>
            <li><Link href="/shop/shirts" className="hover:text-white transition-colors">{isPersian ? 'پیراهن و ابریشم' : 'Shirts & Silk'}</Link></li>
            <li><Link href="/shop/trousers" className="hover:text-white transition-colors">{isPersian ? 'شلوار و کتان' : 'Trousers & Chinos'}</Link></li>
            <li><Link href="/shop/hoodies" className="hover:text-white transition-colors">{isPersian ? 'بافت و هودی' : 'Knitwear & Hoodies'}</Link></li>
          </ul>
        </div>

        {/* Brand */}
        <div className={`space-y-3 ${isPersian ? 'font-peyda' : 'font-mono'}`}>
          <p
            className={
              isPersian
                ? 'text-white text-xs font-bold'
                : 'text-white text-[10px] tracking-[0.25em] uppercase font-bold'
            }
          >
            {isPersian ? 'برند' : 'COMPANY'}
          </p>
          <ul className="space-y-2 text-[#77746E]">
            <li><Link href="/lookbook" className="hover:text-white transition-colors">{isPersian ? 'لوک‌بوک' : 'The Lookbook'}</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">{isPersian ? 'داستان ما' : 'Our Story'}</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">{isPersian ? 'پایداری' : 'Sustainability'}</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">{isPersian ? 'فرصت‌های شغلی' : 'Careers'}</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className={`space-y-3 ${isPersian ? 'font-peyda' : 'font-mono'}`}>
          <p
            className={
              isPersian
                ? 'text-white text-xs font-bold'
                : 'text-white text-[10px] tracking-[0.25em] uppercase font-bold'
            }
          >
            {isPersian ? 'راهنما' : 'HELP'}
          </p>
          <ul className="space-y-2 text-[#77746E]">
            <li><Link href="/shop" className="hover:text-white transition-colors">{isPersian ? 'ارسال و مرجوعی' : 'Shipping & Returns'}</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">{isPersian ? 'راهنمای سایز' : 'Size Guide'}</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">{isPersian ? 'تماس با ما' : 'Contact Us'}</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">{isPersian ? 'سوالات متداول' : 'FAQ'}</Link></li>
          </ul>
        </div>
      </div>

      <div
        className={`max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 border-t border-[#2B2B2B] pt-8 flex flex-col sm:flex-row justify-between items-center text-[#77746E] gap-4 ${
          isPersian ? 'text-xs font-normal font-peyda' : 'text-[10px] font-mono uppercase'
        }`}
      >
        <p>© 2026 NOIRÉ MENSWEAR. {isPersian ? 'تمام حقوق محفوظ است.' : 'ALL RIGHTS RESERVED.'}</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">{isPersian ? 'حریم خصوصی' : 'PRIVACY POLICY'}</span>
          <span className="hover:text-white cursor-pointer transition-colors">{isPersian ? 'شرایط استفاده' : 'TERMS OF SERVICE'}</span>
          <span className="hover:text-white cursor-pointer transition-colors">{isPersian ? 'کوکی‌ها' : 'COOKIES'}</span>
        </div>
      </div>
    </footer>
  );
}
