'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Only run preloader once per session if desired, or run always on refresh
    const countInterval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(countInterval);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 2;
        return next > 100 ? 100 : next;
      });
    }, 30);

    return () => clearInterval(countInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-[#0B0B0B] text-[#F3F2EE] flex flex-col items-center justify-between py-12 px-6 select-none"
        >
          <div className="w-full flex justify-between items-center text-[10px] tracking-[0.25em] text-[#77746E] uppercase">
            <span>PARIS / MILAN / TOKYO</span>
            <span>EST. 2026</span>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.h1
              initial={{ letterSpacing: '0.1em', opacity: 0 }}
              animate={{ letterSpacing: '0.35em', opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-light tracking-[0.35em] font-display text-white"
            >
              NOIRÉ
            </motion.h1>
            <p className="text-[11px] tracking-[0.3em] text-[#77746E] uppercase">
              CONTEMPORARY MENSWEAR
            </p>
          </div>

          <div className="w-full max-w-xs flex flex-col items-center space-y-2">
            <div className="flex justify-between w-full text-[12px] font-mono text-[#D7D4CD]">
              <span>LOADING EXPERIENCE</span>
              <span>{count.toString().padStart(3, '0')} %</span>
            </div>
            <div className="w-full bg-[#181818] h-[1px] overflow-hidden">
              <motion.div
                className="bg-[#F3F2EE] h-full"
                style={{ width: `${count}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
