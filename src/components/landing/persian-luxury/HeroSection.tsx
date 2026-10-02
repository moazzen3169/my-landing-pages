'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Smooth video scrolling using lerp (requestAnimationFrame)
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const videoDurationRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  // Track scroll progress within the sticky hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Handle video metadata loaded
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      videoDurationRef.current = videoRef.current.duration || 0;
      setIsVideoReady(true);
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    // Unsubscribe scroll progress to continuously update target time
    const unsubscribeScroll = scrollYProgress.on('change', (latestProgress) => {
      if (videoDurationRef.current > 0) {
        const clampedProgress = Math.min(Math.max(latestProgress, 0), 0.999);
        targetTimeRef.current = clampedProgress * videoDurationRef.current;
      }
    });

    // Lerp loop for smooth 60fps frame interpolation
    const updateVideoFrame = () => {
      if (videoRef.current && videoDurationRef.current > 0) {
        // Lerp towards targetTimeRef
        const diff = targetTimeRef.current - currentTimeRef.current;
        if (Math.abs(diff) > 0.001) {
          currentTimeRef.current += diff * 0.12; // Smooth damping factor
          videoRef.current.currentTime = currentTimeRef.current;
        }
      }
      animationFrameRef.current = requestAnimationFrame(updateVideoFrame);
    };

    animationFrameRef.current = requestAnimationFrame(updateVideoFrame);

    return () => {
      unsubscribeScroll();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollYProgress]);

  // Initial video check
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      if (video.readyState >= 1) {
        videoDurationRef.current = video.duration || 0;
        setIsVideoReady(true);
      }
    }
  }, []);

  // Transforms for Title 1 (Right Side - RTL Start)
  const title1Opacity = useTransform(scrollYProgress, [0, 0.12], [1, 0], { clamp: true });
  const title1Y = useTransform(scrollYProgress, [0, 0.12], [0, -20], { clamp: true });
  const title1Visibility = useTransform(scrollYProgress, (v) => (v >= 0.12 ? 'hidden' : 'visible'));

  // Transforms for Title 2 (Left Side - RTL End)
  const title2Opacity = useTransform(scrollYProgress, [0.08, 0.20], [0, 1], { clamp: true });
  const title2Y = useTransform(scrollYProgress, [0.08, 0.20], [20, 0], { clamp: true });
  const title2Visibility = useTransform(scrollYProgress, (v) => (v < 0.08 ? 'hidden' : 'visible'));

  return (
    <section
      id="hero-video-section"
      ref={containerRef}
      className="relative w-full h-[280vh] bg-white font-peyda text-black dir-rtl"
    >
      {/* STICKY FULLSCREEN VIEWPORT */}
      <div className="sticky top-0 h-screen w-full bg-white overflow-hidden flex items-center justify-center">

        {/* HERO CONTAINER */}
        <div className="relative w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12 h-full flex items-center justify-between">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">

            {/* RIGHT SIDE (RTL START): PRIMARY TITLE */}
            <div className="lg:col-span-4 text-start z-20 order-2 lg:order-1 relative min-h-[220px] flex flex-col justify-center">
              <motion.div
                style={{
                  opacity: title1Opacity,
                  y: title1Y,
                  visibility: title1Visibility,
                }}
                className="space-y-4"
              >
                <span className="block text-[11px] font-mono text-[#666666] tracking-widest uppercase">
                  HAUTE COUTURE 2026
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#000000] leading-[1.15] tracking-normal">
                  معماری چرم و شکوه جاودانه
                </h1>

                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed font-normal max-w-sm">
                  مرجع تخصصی کیف‌های چرمی دست‌ساز و کفش‌های لوکس زنانه. طراحی متمایز با استانداردهای دوخت اصیل.
                </p>

                <div className="pt-4 flex items-center gap-2 text-[11px] text-[#666666] font-normal">
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce stroke-[1.5]" />
                  <span>اسکرول کنید</span>
                </div>
              </motion.div>
            </div>

            {/* CENTER: 3D VIDEO CONTAINER (NO BORDER, NO SHADOW, PURE Seamless INTEGRATION) */}
            <div className="lg:col-span-4 flex items-center justify-center z-10 order-1 lg:order-2 my-4 lg:my-0">
              <div className="relative w-full aspect-[3/4] max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] bg-white flex items-center justify-center overflow-hidden pointer-events-none select-none border-0 outline-none shadow-none ring-0">
                <video
                  ref={videoRef}
                  src="/images/landings/persian-luxury-v1/bag-3901.mp4"
                  muted
                  playsInline
                  preload="auto"
                  onLoadedMetadata={handleLoadedMetadata}
                  className="w-full h-full object-contain border-0 outline-none shadow-none ring-0 pointer-events-none select-none bg-white"
                  style={{
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                    backgroundColor: '#ffffff',
                  }}
                />

                {!isVideoReady && (
                  <div className="absolute inset-0 bg-white flex items-center justify-center">
                    <span className="text-xs text-[#999999] font-mono">Loading model...</span>
                  </div>
                )}
              </div>
            </div>

            {/* LEFT SIDE (RTL END): SECONDARY TITLE */}
            <div className="lg:col-span-4 text-start z-20 order-3 relative min-h-[220px] flex flex-col justify-center">
              <motion.div
                style={{
                  opacity: title2Opacity,
                  y: title2Y,
                  visibility: title2Visibility,
                }}
                className="space-y-4"
              >
                <span className="block text-[11px] font-mono text-[#666666] tracking-widest uppercase">
                  3D DETAIL SHOWCASE
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#000000] leading-snug">
                  ظرافت ساختار و بافت چرم
                </h2>

                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed font-normal">
                  کیف‌های ساختاریافته با چرم طبیعی ایتالیایی و قطعات طلایی برای استایلی بی‌نقص.
                </p>

                <div className="pt-4">
                  <a
                    href="#catalog"
                    className="inline-block px-8 py-3.5 bg-[#000000] hover:bg-[#111111] text-white text-xs tracking-wider font-normal transition-colors rounded-none"
                  >
                    مشاهده تمام کیف‌ها
                  </a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* BOTTOM PROGRESS BAR */}
        <div className="absolute bottom-8 inset-x-0 max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12 flex items-center justify-between text-[11px] text-[#666666] font-mono">
          <span>mor'e • 2026</span>
          <div className="w-32 sm:w-48 h-[1px] bg-[#E5E5E5] overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-[#000000] origin-right"
            />
          </div>
          <span>SCROLL TO EXPLORE</span>
        </div>

      </div>
    </section>
  );
}
