"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingBag,
  Check,
  Star,
  Sparkles,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { SOLEA_PRODUCTS, SneakerProduct } from "@/data/solea-sneakers";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { formatPersianPrice } from "@/lib/utils";

interface HeroProps {
  onOpenSearch?: () => void;
  onOpenQuickView?: (productId: string) => void;
}

// We select top featured products for the Hero showcase slider
const HERO_PRODUCTS: SneakerProduct[] = SOLEA_PRODUCTS.slice(0, 6);

export default function Hero({ onOpenSearch }: HeroProps) {
  // Slider state: [currentSlideIndex, slideDirection (+1 or -1)]
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>("41");
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  // Wrap around index calculation
  const productIndex = Math.abs(page % HERO_PRODUCTS.length);
  const currentProduct = HERO_PRODUCTS[productIndex];

  // Selected color image fallback
  const activeColor = currentProduct.colors[selectedColorIndex] || currentProduct.colors[0];
  const activeImage = activeColor?.image || currentProduct.images[0];

  // Wishlist product object structure
  const standardProduct: Product = {
    id: currentProduct.id,
    name: currentProduct.name,
    brand: currentProduct.brand,
    slug: currentProduct.slug,
    category: "accessories" as const,
    price: currentProduct.price,
    currency: "TMN",
    colors: currentProduct.colors,
    sizes: currentProduct.sizes,
    images: currentProduct.images,
    description: currentProduct.description,
    material: currentProduct.specifications.upper,
    fit: "استاندارد اسنیکر",
  };

  const isLiked = isInWishlist(currentProduct.id);

  // Navigate slider
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setSelectedColorIndex(0);
    if (currentProduct.sizes.length > 0) {
      setSelectedSize(currentProduct.sizes[0]);
    }
  };

  const handleSelectProduct = (index: number) => {
    const newDir = index > productIndex ? 1 : -1;
    setPage([index, newDir]);
    setSelectedColorIndex(0);
  };

  const handleAddToCart = () => {
    addToCart(standardProduct, activeColor || currentProduct.colors[0], selectedSize);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2200);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(standardProduct);
  };

  // Drag threshold sensitivity
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  // Animation variants for smooth entrance and exit
  const shoeVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 280 : -280,
      opacity: 0,
      scale: 0.8,
      rotate: dir > 0 ? 10 : -10,
      filter: "blur(4px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring", stiffness: 220, damping: 24, mass: 0.8 },
        opacity: { duration: 0.35, ease: "easeOut" },
        scale: { type: "spring", stiffness: 220, damping: 24, mass: 0.8 },
        rotate: { type: "spring", stiffness: 200, damping: 22 },
        filter: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 280 : -280,
      opacity: 0,
      scale: 0.8,
      rotate: dir < 0 ? -10 : 10,
      filter: "blur(4px)",
      transition: {
        x: { type: "spring", stiffness: 220, damping: 24, mass: 0.8 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
        rotate: { duration: 0.25 },
        filter: { duration: 0.2 },
      },
    }),
  };

  const infoVariants: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? 12 : -12,
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: dir < 0 ? -12 : 12,
      transition: {
        duration: 0.2,
      },
    }),
  };

  return (
    <section
      className="relative bg-[#F8F8F6] pt-20 pb-12 lg:pt-28 lg:pb-16 overflow-hidden font-peyda border-b border-neutral-200"
      dir="rtl"
    >
      {/* BACKGROUND DECORATIVE WATERMARK */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden opacity-[0.03]">
        <span className="text-[18vw] font-black tracking-tighter text-black uppercase leading-none font-mono">
          {currentProduct.brand}
        </span>
      </div>

      {/* TOP META STRIP */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-4 sm:px-6 w-full mb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200/80 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>ویترین جدیدترین اسنیکرهای اورجینال ۲۰۲۶</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-500 font-medium">
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-black" />
              تضـمین ۱۰۰٪ اصـالت
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-black" />
              ارسال سریع کشوری
            </span>
            <span className="inline-flex items-center gap-1.5">
              <RotateCcw className="w-4 h-4 text-black" />
              ۷ روز ضمانت تعویض
            </span>
          </div>
        </div>
      </div>

      {/* MAIN HERO CENTERPIECE CONTAINER */}
      <div className="relative z-10 max-w-[1350px] mx-auto px-4 sm:px-6 w-full">

        {/* FULL HEIGHT CENTRAL SNEAKER VISUAL CANVAS */}
        <div className="relative w-full rounded-2xl bg-white border border-neutral-200/90 p-5 sm:p-7 lg:p-8 flex flex-col justify-between shadow-xs">

          {/* CANVAS TOP HEADER: BADGES & COUNTER */}
          <div className="w-full flex items-center justify-between z-20 mb-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-black text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-2xs">
                {currentProduct.brand}
              </span>
              {currentProduct.badge && (
                <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-200/80 text-[11px] font-semibold rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  {currentProduct.badge}
                </span>
              )}
            </div>

            {/* SLIDE COUNTER */}
            <div className="flex items-center gap-3">
              <div className="text-xs font-mono font-bold text-neutral-500">
                <span className="text-black text-sm font-extrabold">0{productIndex + 1}</span> / 0{HERO_PRODUCTS.length}
              </div>
            </div>
          </div>

          {/* CENTER DISPLAY AREA: NAVIGATION BUTTONS + CENTRALLY POSITIONED FULL HEIGHT SHOE */}
          <div className="relative w-full flex items-center justify-center py-2 sm:py-4 select-none">

            {/* PREVIOUS SLIDE BUTTON (RIGHT ARROW IN RTL) */}
            <button
              onClick={() => paginate(-1)}
              className="absolute right-0 sm:right-2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-black text-black hover:text-white border border-neutral-200 hover:border-black transition-all duration-300 flex items-center justify-center shadow-xs hover:shadow-md hover:scale-105 active:scale-95 group"
              aria-label="محصول قبلی"
            >
              <ChevronRight className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
            </button>

            {/* NEXT SLIDE BUTTON (LEFT ARROW IN RTL) */}
            <button
              onClick={() => paginate(1)}
              className="absolute left-0 sm:left-2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-black text-black hover:text-white border border-neutral-200 hover:border-black transition-all duration-300 flex items-center justify-center shadow-xs hover:shadow-md hover:scale-105 active:scale-95 group"
              aria-label="محصول بعدی"
            >
              <ChevronLeft className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
            </button>

            {/* FULL HEIGHT CENTRAL SHOE DISPLAY WITH DRAG AND ANIMATED TRANSITION */}
            <div className="relative w-full max-w-[620px] h-[260px] sm:h-[320px] lg:h-[350px] flex items-center justify-center overflow-visible">

              {/* RADIAL AMBIENT GLOW BEHIND SHOE */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200/30 via-neutral-100/50 to-transparent rounded-full blur-2xl pointer-events-none -z-10 scale-90"></div>

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={page}
                  custom={direction}
                  variants={shoeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing p-2"
                >
                  {/* IDLE FLOATING MOTION WRAPPER */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={activeImage}
                      alt={currentProduct.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 90vw, 50vw"
                      className="object-contain p-2 pointer-events-none mix-blend-multiply"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>

            </div>

          </div>

          {/* SLIDER DOTS PAGINATION */}
          <div className="flex items-center justify-center gap-1.5 mb-5 z-20">
            {HERO_PRODUCTS.map((prod, idx) => (
              <button
                key={prod.id}
                onClick={() => handleSelectProduct(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === productIndex
                    ? "w-7 h-2 bg-black"
                    : "w-2 h-2 bg-neutral-300 hover:bg-neutral-500"
                }`}
                aria-label={`اسلاید ${idx + 1}`}
              />
            ))}
          </div>

          {/* SUB-HERO: PRODUCT DETAILS & ACTION BUTTONS SECTION */}
          <div className="w-full border-t border-neutral-100 pt-5 z-20">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={infoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center"
              >

                {/* PRODUCT TITLE, RATING & SPECS (5 COLS) */}
                <div className="lg:col-span-5 flex flex-col items-start text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest">
                      {currentProduct.brand} • {currentProduct.gender === 'men' ? 'مردانه' : currentProduct.gender === 'women' ? 'زنانه' : 'یونیسکس'}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 text-[11px] font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{currentProduct.rating}</span>
                      <span className="text-neutral-400 font-normal">({currentProduct.reviewCount})</span>
                    </div>
                  </div>

                  <h1 className="text-xl sm:text-2xl font-black text-black leading-tight tracking-tight mb-1.5">
                    {currentProduct.name}
                  </h1>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-2.5 font-normal">
                    {currentProduct.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-neutral-500">
                    <span className="px-2 py-0.5 bg-neutral-100 rounded-md font-medium">
                      رویه: {currentProduct.specifications.upper}
                    </span>
                    {currentProduct.specifications.weight && (
                      <span className="px-2 py-0.5 bg-neutral-100 rounded-md font-mono font-medium">
                        وزن: {currentProduct.specifications.weight}
                      </span>
                    )}
                  </div>
                </div>

                {/* COLOR & SIZE SELECTOR (3 COLS) */}
                <div className="lg:col-span-3 flex flex-col justify-center gap-2.5 text-right">
                  {/* COLOR VARIANTS */}
                  {currentProduct.colors.length > 0 && (
                    <div>
                      <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1 flex items-center justify-between">
                        <span>رنگ: <strong className="text-black font-semibold">{activeColor.name}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {currentProduct.colors.map((color, idx) => (
                          <button
                            key={color.name + idx}
                            onClick={() => setSelectedColorIndex(idx)}
                            className={`w-6 h-6 rounded-full transition-all duration-200 border flex items-center justify-center p-0.5 ${
                              selectedColorIndex === idx
                                ? "border-black ring-2 ring-black/20 scale-110"
                                : "border-neutral-300 hover:border-neutral-500"
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          >
                            {selectedColorIndex === idx && (
                              <span className={`w-1.5 h-1.5 rounded-full ${color.hex === '#FAFAF7' || color.hex === '#FFFFFF' ? 'bg-black' : 'bg-white'}`} />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SIZES */}
                  {currentProduct.sizes.length > 0 && (
                    <div>
                      <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1">
                        سایز: <strong className="text-black font-semibold">{selectedSize}</strong>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {currentProduct.sizes.map((sz) => (
                          <button
                            key={sz}
                            onClick={() => setSelectedSize(sz)}
                            className={`px-2 py-0.5 text-xs font-mono font-bold rounded-md transition-all ${
                              selectedSize === sz
                                ? "bg-black text-white"
                                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* PRICE & ACTION BUTTONS: ADD TO CART + WISHLIST (4 COLS) */}
                <div className="lg:col-span-4 flex flex-col justify-center items-stretch lg:items-end gap-2.5 text-right border-t lg:border-t-0 border-neutral-100 pt-3 lg:pt-0">

                  {/* PRICE DISPLAY */}
                  <div className="flex items-baseline justify-between lg:justify-end gap-2.5">
                    {currentProduct.compareAtPrice && (
                      <span className="text-xs text-neutral-400 line-through">
                        {formatPersianPrice(currentProduct.compareAtPrice)}
                      </span>
                    )}
                    <div className="text-lg sm:text-xl font-black text-black">
                      {formatPersianPrice(currentProduct.price)}
                    </div>
                    {currentProduct.discountPercentage && (
                      <span className="px-1.5 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-bold rounded border border-rose-200">
                        ٪{currentProduct.discountPercentage}-
                      </span>
                    )}
                  </div>

                  {/* DUAL BUTTONS: ADD TO CART + LIKE/WISHLIST */}
                  <div className="grid grid-cols-12 gap-2 w-full">

                    {/* ADD TO CART BUTTON */}
                    <button
                      onClick={handleAddToCart}
                      className={`col-span-8 py-3 px-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-xs active:scale-98 ${
                        isAddedToCart
                          ? "bg-emerald-600 text-white"
                          : "bg-black hover:bg-neutral-800 text-white"
                      }`}
                    >
                      {isAddedToCart ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>به سبد اضافه شد</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4" />
                          <span>افزودن به سبد خرید</span>
                        </>
                      )}
                    </button>

                    {/* FAVORITE / WISHLIST BUTTON ("پسندیدن") */}
                    <button
                      onClick={handleToggleWishlist}
                      className={`col-span-4 py-3 px-2 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-1.5 border active:scale-98 ${
                        isLiked
                          ? "bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100"
                          : "bg-white hover:bg-neutral-100 text-black border-neutral-300 hover:border-black"
                      }`}
                      title={isLiked ? "حذف از پسندیده‌ها" : "پسندیدن"}
                    >
                      <Heart
                        className={`w-4 h-4 transition-transform ${
                          isLiked ? "fill-rose-500 text-rose-500 scale-110" : "text-black"
                        }`}
                      />
                      <span>
                        {isLiked ? "پسندیده شد" : "پسندیدن"}
                      </span>
                    </button>

                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
