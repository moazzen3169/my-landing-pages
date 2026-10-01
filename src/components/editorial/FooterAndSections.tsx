'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, RefreshCw, Truck, Lock } from 'lucide-react';

export function BrandStory() {
  return (
    <section className="py-24 bg-[#0B0B0B] text-[#F3F2EE] border-t border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[10px] font-mono tracking-[0.35em] text-[#A58B68] uppercase">
            OUR MANIFESTO
          </span>
          <h2 className="text-4xl sm:text-6xl font-light font-display tracking-tight text-white uppercase leading-none">
            MADE FOR THE <br /> WAY YOU MOVE.
          </h2>
          <p className="text-sm md:text-base text-[#D7D4CD] font-light leading-relaxed">
            NOIRÉ was founded on a singular architectural thesis: that contemporary menswear should embody absolute visual restraint while delivering tactile power.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#2B2B2B] text-xs font-mono">
            <div>
              <p className="text-[#A58B68]">DESIGN</p>              <p className="text-[#D7D4CD] mt-1 font-light">Minimal architectural cuts engineered for posture.</p>
            </div>
            <div>
              <p className="text-[#A58B68]">MATERIAL</p>
              <p className="text-[#D7D4CD] mt-1 font-light">100% natural wools, silk crepes & Mongolian cashmere.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative aspect-[4/3] w-full bg-[#181818] border border-[#2B2B2B]">
          <Image
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
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

export function QualitySection() {
  const SERVICES = [
    { icon: Truck, title: 'EXPRESS DELIVERY', desc: 'Complimentary on orders over €300' },
    { icon: RefreshCw, title: 'EASY RETURNS', desc: '15-day worldwide return window' },
    { icon: ShieldCheck, title: 'QUALITY GUARANTEE', desc: 'Sourced from Italian & Japanese mills' },
    { icon: Lock, title: 'SECURE PAYMENT', desc: 'Encrypted end-to-end checkout' },
  ];

  return (
    <section className="py-16 bg-[#F3F2EE] border-y border-[#D7D4CD] px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((srv) => {
          const Icon = srv.icon;
          return (
            <div key={srv.title} className="flex items-start space-x-4">
              <div className="p-3 border border-[#D7D4CD] bg-white flex-shrink-0">
                <Icon className="w-5 h-5 text-[#111111]" />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-[#111111] uppercase">{srv.title}</h4>
                <p className="text-xs text-[#77746E] font-light mt-1">{srv.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="py-24 bg-[#0B0B0B] text-[#F3F2EE] px-6 md:px-12 border-t border-[#2B2B2B]">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <span className="text-[10px] font-mono tracking-[0.35em] text-[#A58B68] uppercase">
          PRIVATE ACCESS
        </span>
        <h2 className="text-3xl sm:text-5xl font-light font-display text-white uppercase tracking-tight">
          ENTER THE WORLD OF NOIRÉ.
        </h2>
        <p className="text-xs sm:text-sm text-[#D7D4CD] font-light max-w-md mx-auto leading-relaxed">
          Receive private editorial release notices, invitation-only capsules, and contemporary lookbook previews.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for subscribing to NOIRÉ.');
          }}
          className="flex flex-col sm:flex-row items-center max-w-md mx-auto gap-3 pt-4"
        >
          <input
            type="email"
            required
            placeholder="ENTER YOUR EMAIL"
            className="w-full bg-[#181818] border border-[#2B2B2B] px-4 py-3.5 text-xs font-mono text-white placeholder-[#77746E] focus:outline-none focus:border-white uppercase"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-white text-[#111111] px-6 py-3.5 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#D7D4CD] transition-colors whitespace-nowrap"
          >
            JOIN THE LIST
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-[#D7D4CD] border-t border-[#2B2B2B] pt-16 pb-12 px-6 md:px-12 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="text-3xl font-light font-display tracking-[0.3em] text-white">
            NOIRÉ
          </Link>
          <p className="text-[#77746E] font-light max-w-sm leading-relaxed">
            Contemporary luxury menswear designed with architectural restraint. Paris — Milan — Tokyo.
          </p>
        </div>

        {/* Shop */}
        <div className="space-y-3 font-mono">
          <p className="text-white text-[10px] tracking-[0.25em] uppercase font-bold">SHOP</p>
          <ul className="space-y-2 text-[#77746E]">
            <li><Link href="/shop/suits" className="hover:text-white transition-colors">Suits & Tailoring</Link></li>
            <li><Link href="/shop/blazers" className="hover:text-white transition-colors">Blazers & Jackets</Link></li>
            <li><Link href="/shop/shirts" className="hover:text-white transition-colors">Shirts & Silk</Link></li>
            <li><Link href="/shop/trousers" className="hover:text-white transition-colors">Trousers & Chinos</Link></li>
            <li><Link href="/shop/hoodies" className="hover:text-white transition-colors">Knitwear & Hoodies</Link></li>
          </ul>
        </div>

        {/* Brand */}
        <div className="space-y-3 font-mono">
          <p className="text-white text-[10px] tracking-[0.25em] uppercase font-bold">COMPANY</p>
          <ul className="space-y-2 text-[#77746E]">
            <li><Link href="/lookbook" className="hover:text-white transition-colors">The Lookbook</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Sustainability</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div className="space-y-3 font-mono">
          <p className="text-white text-[10px] tracking-[0.25em] uppercase font-bold">HELP</p>
          <ul className="space-y-2 text-[#77746E]">
            <li><Link href="/shop" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Size Guide</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#2B2B2B] pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-[#77746E] space-y-4 sm:space-y-0 uppercase">
        <p>© 2026 NOIRÉ MENSWEAR. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6">
          <span className="hover:text-white cursor-pointer">PRIVACY POLICY</span>
          <span className="hover:text-white cursor-pointer">TERMS OF SERVICE</span>
          <span className="hover:text-white cursor-pointer">COOKIES</span>
        </div>
      </div>
    </footer>
  );
}
