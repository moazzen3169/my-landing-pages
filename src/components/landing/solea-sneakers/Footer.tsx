'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, Globe, MessageCircle, Ruler } from 'lucide-react';

interface FooterProps {
  onOpenSizeGuide?: () => void;
  storeName?: string;
}

export default function Footer({ onOpenSizeGuide, storeName = 'دپیکس' }: FooterProps) {
  return (
    <footer className="bg-[#0A0A0A] text-[#F3F3F1] pt-20 pb-12 font-peyda text-right border-t border-[#222222]" dir="rtl">
    
    </footer>
  );
}
