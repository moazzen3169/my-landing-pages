'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only desktop and non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || isReducedMotion) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, select, [role="button"]');
      const cursorTextAttr = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

      if (cursorTextAttr) {
        setIsHovered(true);
        setCursorText(cursorTextAttr);
      } else if (interactive) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center rounded-full bg-white text-[#111111]"
      animate={{
        x: position.x - (cursorText ? 40 : isHovered ? 24 : 6),
        y: position.y - (cursorText ? 40 : isHovered ? 24 : 6),
        width: cursorText ? 80 : isHovered ? 48 : 12,
        height: cursorText ? 80 : isHovered ? 48 : 12,
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 350,
        mass: 0.2,
      }}
    >
      {cursorText && (
        <span className="text-[10px] font-bold tracking-widest uppercase text-center px-1">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
