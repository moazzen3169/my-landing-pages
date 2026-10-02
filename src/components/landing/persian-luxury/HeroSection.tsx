'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);

  // Track scroll progress within the sticky hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Handle video metadata loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration || 0);
      setIsVideoReady(true);
      // Ensure video is paused at start
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Sync scroll progress directly to video currentTime
  useMotionValueEvent(scrollYProgress, 'change', (latestProgress) => {
    if (videoRef.current && videoDuration > 0) {
      // Clamp progress between 0 and 0.99 to prevent video loop/ended state glitch
      const clampedProgress = Math.min(Math.max(latestProgress, 0), 0.999);
      const targetTime = clampedProgress * videoDuration;

      if (Math.abs(videoRef.current.currentTime - targetTime) > 0.02) {
        videoRef.current.currentTime = targetTime;
      }
    }
  });

  // Fallback / initial setup for video when mounted
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      if (video.readyState >= 1) {
        setVideoDuration(video.duration || 0);
        setIsVideoReady(true);
      }
    }
  }, []);

  // Transforms for Title 1 (Right Side - RTL Start)
  // Visible at progress = 0, fades out as user begins scrolling
  const title1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0.5, 0]);
  const title1Y = useTransform(scrollYProgress, [0, 0.3], [0, -25]);
  const title1Scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Transforms for Title 2 (Left Side - RTL End)
  // Invisible at start, fades in smoothly when scrolling begins (0.1 -> 0.35)
  const title2Opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.85, 1], [0, 1, 1, 0]);
  const title2Y = useTransform(scrollYProgress, [0.1, 0.3], [25, 0]);
  const title2Scale = useTransform(scrollYProgress, [0.1, 0.3], [0.95, 1]);

  // Video Container scaling / opacity polish
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <section
      id="hero-video-section"
      ref={containerRef}
      className="relative w-full h-[280vh] bg-white font-peyda selection:bg-[#B29A6A] selection:text-white"
    >
      {/* STICKY FULLSCREEN VIEWPORT */}
      <div className="sticky top-0 h-screen w-full bg-white overflow-hidden flex items-center justify-center">

        {/* BACKGROUND SUBTLE LUXURY ACCENTS */}
        <div className="absolute inset-0 pointer-events-none bg-[#FDFDFD]" />

        {/* HERO CONTAINER */}
        <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 h-full flex items-center justify-between">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto">

            {/* RIGHT SIDE (RTL START): PRIMARY TITLE (EXPLAINS BAGS & SHOES SITE) */}
            <div className="lg:col-span-4 text-start z-20 order-2 lg:order-1 relative min-h-[220px] flex flex-col justify-center">
              <motion.div
                style={{
                  opacity: title1Opacity,
                  y: title1Y,
                  scale: title1Scale,
                }}
                className="space-y-4"
              >
                {/* EYEBROW BADGE */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F5F1] text-[#171717] text-[11px] font-semibold border-none rounded-none">
                  <Sparkles className="w-3.5 h-3.5 text-[#B29A6A] shrink-0" />
                  <span className="tracking-wider uppercase font-sans">HAUTE COUTURE 2026</span>
                </div>

                {/* MAIN HEADLINE */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#171717] leading-[1.2] font-serif tracking-normal">
                  معماری چرم و شکوه جاودانه
                </h1>

                {/* EXPLANATORY SUBTITLE FOCUSING ON BAGS */}
                <p className="text-xs sm:text-sm text-[#555] leading-relaxed font-normal max-w-sm">
                  مرجع تخصصی محبوب‌ترین کیف‌های چرمی دست‌ساز و کفش‌های لوکس زنانه. خلقتي متمایز با بالاترین استانداردهای دوخت اصیل.
                </p>

                {/* SCROLL INDICATOR PROMPT */}
                <div className="pt-2 flex items-center gap-2 text-[11px] text-[#B29A6A] font-medium">
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                  <span>برای چرخش سه‌بعدی محصول اسکرول کنید</span>
                </div>
              </motion.div>
            </div>

            {/* CENTER: 3D INTERACTIVE VIDEO CONTAINER (WHITE BG, NO BORDER, NO SHADOW) */}
            <div className="lg:col-span-4 flex items-center justify-center z-10 order-1 lg:order-2 my-4 lg:my-0">
              <motion.div
                style={{ scale: videoScale }}
                className="relative w-full aspect-[3/4] max-w-[360px] bg-amber-0 sm:max-w-[420px] lg:max-w-[460px] flex items-center justify-center overflow-hidden pointer-events-none select-none border-0 shadow-none outline-none"
              >
                {/* HTML5 VIDEO DRIVEN ENTIRELY BY SCROLL */}
                <video
                  ref={videoRef}
                  src="/images/landings/persian-luxury-v1/bag-3901.mp4"
                  muted
                  playsInline
                  preload="auto"
                  onLoadedMetadata={handleLoadedMetadata}
                  className="w-full h-full object-contain border-0 shadow-none outline-none pointer-events-none select-none"
                  style={{
                    border: 'none',
                    boxShadow: 'none',
                    backgroundColor: '#ffffffffffff',
                  }}
                />

                {/* SUBTLE LOADING STATE UNTIL METADATA LOADS */}
                {!isVideoReady && (
                  <div className="absolute inset-0  flex items-center justify-center">
                    <span className="text-xs text-[#999] font-mono animate-pulse">در حال بارگذاری مدل...</span>
                  </div>
                )}
              </motion.div>
            </div>

            {/* LEFT SIDE (RTL END): SECONDARY TITLE (APPEARS WHEN SCROLL STARTS) */}
            <div className="lg:col-span-4 text-start z-20 order-3 relative min-h-[220px] flex flex-col justify-center">
              <motion.div
                style={{
                  opacity: title2Opacity,
                  y: title2Y,
                  scale: title2Scale,
                }}
                className="space-y-3"
              >
                {/* SECONDARY BADGE */}
                <div className="inline-block text-[10px] font-mono font-bold text-[#B29A6A] tracking-widest uppercase">
                  3D DETAIL SHOWCASE
                </div>

                {/* SECONDARY HEADLINE */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171717] font-serif leading-snug">
                  ظرافت ساختار و بافت چرم
                </h2>

                {/* SHORT 1-LINE EXPLANATION */}
                <p className="text-xs sm:text-sm text-[#444] leading-relaxed font-normal">
                  کیف‌های ساختاریافته با چرم طبیعی ایتالیایی و قطعات طلایی برای استایلی بی‌نقص.
                </p>

                {/* DIRECT ACTION BUTTON */}
                <div className="pt-3">
                  <a
                    href="#catalog"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#171717] hover:bg-[#333] text-white text-xs font-semibold transition-all"
                  >
                    مشاهده تمام کیف‌ها
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* BOTTOM PROGRESS BAR */}
        <div className="absolute bottom-6 inset-x-0 max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between text-[10px] text-[#888] font-mono">
          <span>mor'e • 2026</span>
          <div className="w-32 sm:w-48 h-[2px] bg-[#eee] overflow-hidden rounded-full">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-[#B29A6A] origin-right"
            />
          </div>
          <span>SCROLL TO EXPLORE</span>
        </div>

      </div>
    </section>
  );
}
