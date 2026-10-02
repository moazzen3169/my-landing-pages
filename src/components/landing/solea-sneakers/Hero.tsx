"use client";

import React from "react";
import Image from "next/image";
import { Search, Sparkles, ArrowLeft, Flame, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenSearch: () => void;
  onSelectCategory?: (category: string) => void;
}

export default function Hero({ onOpenSearch, onSelectCategory }: HeroProps) {
  const categories = [
    { id: "running", label: "دویدن" },
    { id: "lifestyle", label: "لایف‌استایل" },
    { id: "basketball", label: "بسکتبال" },
    { id: "training", label: "تمرین" },
    { id: "unisex", label: "یونیسکس" },
  ];

  const quickStats = [
    { value: "۲۸۰g", desc: "وزن فوق‌العاده سبک" },
    { value: "۸mm", desc: "زاویه استاندارد گام" },
    { value: "Adiprene+", desc: "جذب ضربه دوگانه" },
  ];

  return (
    <section className="  p-0 font-peyda" dir="rtl">
      <div className="relative w-full ">
        <img
          className="mx-auto w-full "
          src="/images/landings/solea-sneakers/banner.jpg"
          alt="Hero Image"
        />
        <div className="absolute top-50 text-[#313131] font-black text-4xl grid justify-center mx-auto   w-full ">
          <div className="text-[#212121] font-black text-5xl text-center ">فقــط انجامــش بــده</div>
          <p className="text-[#212121] font-light text-xl mt-4 text-center">
           if you don't want to win, you've already lost. just do it.

          </p>
        </div>
      </div>
    </section>
  );
}
