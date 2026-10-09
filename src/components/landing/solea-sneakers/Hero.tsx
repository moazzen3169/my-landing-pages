"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingBag,
  Check,
  Star,
  Sparkles,
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

const HERO_PRODUCTS: SneakerProduct[] = SOLEA_PRODUCTS.slice(0, 6);

export default function Hero({ onOpenSearch }: HeroProps) {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>("41");
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const productIndex = Math.abs(page % HERO_PRODUCTS.length);
  const currentProduct = HERO_PRODUCTS[productIndex];

  const activeColor = currentProduct.colors[selectedColorIndex] || currentProduct.colors[0];
  const activeImage = activeColor?.image || currentProduct.images[0];

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

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [page]);

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

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const shoeVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.85,
      rotate: dir > 0 ? 8 : -8,
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
      x: dir < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.85,
      rotate: dir < 0 ? -8 : 8,
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
      y: dir > 0 ? 15 : -15,
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
      y: dir < 0 ? -15 : 15,
      transition: {
        duration: 0.2,
      },
    }),
  };

  return (
    <section
      className="relative bg-[#202020] pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 min-h-[100dvh] lg:h-[100dvh] flex items-center justify-center font-peyda border-b border-neutral-800 overflow-hidden"
      dir="rtl"
    >
      {/* BACKGROUND DECORATIVE WATERMARK */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden opacity-[0.06]">
        <span className="text-[25vw] font-black tracking-tighter text-white uppercase leading-none font-mono">
          {currentProduct.brand}
        </span>
      </div>

      {/* MAIN HERO CONTAINER */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">

          {/* SHOE SLIDER (TOP ON MOBILE, LEFT/7 COLS ON DESKTOP) */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative flex flex-col items-center justify-between min-h-[260px] sm:min-h-[380px] lg:min-h-[460px]">
            {/* CENTER SHOE DISPLAY */}
            <div className="relative w-full flex-1 flex items-center justify-center py-2 sm:py-4 select-none">
              {/* PREVIOUS SLIDE BUTTON */}
              <button
                onClick={() => paginate(-1)}
                className="absolute right-0 sm:right-2 z-30 w-10 h-10 sm:w-12 sm:h-12 text-white/90 hover:text-white bg-black/30 hover:bg-black/60 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group"
                aria-label="محصول قبلی"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:scale-110 transition-transform" />
              </button>

              {/* NEXT SLIDE BUTTON */}
              <button
                onClick={() => paginate(1)}
                className="absolute left-0 sm:left-2 z-30 w-10 h-10 sm:w-12 sm:h-12 text-white/90 hover:text-white bg-black/30 hover:bg-black/60 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group"
                aria-label="محصول بعدی"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:scale-110 transition-transform" />
              </button>

              {/* CENTRAL SHOE CONTAINER */}
              <div className="relative w-full max-w-[480px] sm:max-w-[540px] h-[200px] sm:h-[320px] lg:h-[400px] flex items-center justify-center overflow-visible">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-neutral-100/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10 scale-90"></div>

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
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 1, 0],
                      }}
                      transition={{
                        duration: 4.5,
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
                        sizes="(max-width: 768px) 85vw, 50vw"
                        className="object-contain p-2 pointer-events-none mix-blend-multiply drop-shadow-xl"
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* SLIDER DOTS PAGINATION */}
            <div className="flex items-center justify-center gap-2 mt-1 sm:mt-2 z-20">
              {HERO_PRODUCTS.map((prod, idx) => (
                <button
                  key={prod.id}
                  onClick={() => handleSelectProduct(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === productIndex
                      ? "w-7 h-2 bg-amber-500"
                      : "w-2 h-2 bg-neutral-600 hover:bg-neutral-400"
                  }`}
                  aria-label={`اسلاید ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* PRODUCT INFORMATION & ACTIONS (5 COLS / SECOND ON MOBILE) */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-between text-right space-y-4 sm:space-y-6">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={infoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-3 sm:space-y-5"
              >
                {/* BRAND BADGE & RATING */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/10 border border-white/15 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-md">
                      {currentProduct.brand}
                    </span>
                    {currentProduct.badge && (
                      <span className="px-2.5 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-400 text-[11px] sm:text-xs font-medium rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                        {currentProduct.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold px-2 py-1 bg-white/5 border border-white/10 rounded-md">
                    <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                    <span>{currentProduct.rating}</span>
                    <span className="text-neutral-400 font-normal">({currentProduct.reviewCount})</span>
                  </div>
                </div>

                {/* TITLE & DESCRIPTION */}
                <div>
                  <span className="text-[11px] sm:text-xs font-medium text-neutral-400 uppercase tracking-widest block mb-1">
                    {currentProduct.gender === 'men' ? 'اسنیکر مردانه' : currentProduct.gender === 'women' ? 'اسنیکر زنانه' : 'اسنیکر یونیسکس'}
                  </span>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-2">
                    {currentProduct.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
                    {currentProduct.description}
                  </p>
                </div>

                {/* COLOR VARIANTS SELECTOR */}
                {currentProduct.colors.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] text-neutral-400 font-medium block">رنگ انتخاب‌شده: {activeColor.name}</span>
                    <div className="flex items-center gap-2 flex-wrap">
                      {currentProduct.colors.map((color, idx) => (
                        <button
                          key={color.name + idx}
                          onClick={() => setSelectedColorIndex(idx)}
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all duration-200 border flex items-center justify-center p-0.5 ${
                            selectedColorIndex === idx
                              ? "border-amber-500 ring-2 ring-amber-500/40 scale-105"
                              : "border-neutral-600 hover:border-neutral-400"
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        >
                          {selectedColorIndex === idx && (
                            <span className={`w-2 h-2 rounded-full ${color.hex === '#FAFAF7' || color.hex === '#FFFFFF' ? 'bg-black' : 'bg-white'}`} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* SIZES SELECTOR */}
                {currentProduct.sizes.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] text-neutral-400 font-medium block">انتخاب سایز (EUR):</span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {currentProduct.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                            selectedSize === sz
                              ? "bg-amber-500 text-black shadow-xs"
                              : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* PRICE BLOCK */}
                <div className="pt-1 sm:pt-2 flex items-baseline gap-2.5">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-peyda">
                    {formatPersianPrice(currentProduct.price)}
                  </div>
                  {currentProduct.compareAtPrice && (
                    <span className="text-xs sm:text-sm text-neutral-400 line-through">
                      {formatPersianPrice(currentProduct.compareAtPrice)}
                    </span>
                  )}
                  {currentProduct.discountPercentage && (
                    <span className="px-2 py-0.5 bg-rose-500/20 text-rose-300 text-[11px] sm:text-xs font-semibold rounded border border-rose-500/30">
                      ٪{currentProduct.discountPercentage}-
                    </span>
                  )}
                </div>

                {/* DUAL ACTION BUTTONS: ADD TO CART + WISHLIST */}
                <div className="grid grid-cols-12 gap-2.5 pt-1 sm:pt-2">
                  {/* ADD TO CART BUTTON */}
                  <button
                    onClick={handleAddToCart}
                    className={`col-span-8 py-3.5 sm:py-4 px-4 sm:px-5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 active:scale-98 ${
                      isAddedToCart
                        ? "bg-emerald-600 text-white"
                        : "bg-amber-500 hover:bg-amber-400 text-black shadow-xs"
                    }`}
                  >
                    {isAddedToCart ? (
                      <>
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        <span>به سبد اضافه شد</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        <span>افزودن به سبد خرید</span>
                      </>
                    )}
                  </button>

                  {/* WISHLIST BUTTON */}
                  <button
                    onClick={handleToggleWishlist}
                    className={`col-span-4 py-3.5 sm:py-4 px-2 sm:px-3 rounded-xl font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-1.5 border active:scale-98 ${
                      isLiked
                        ? "bg-rose-500/20 text-rose-300 border-rose-500/40"
                        : "bg-white/10 hover:bg-white/20 text-white border-white/15"
                    }`}
                    title={isLiked ? "حذف از پسندیده‌ها" : "پسندیدن"}
                  >
                    <Heart
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isLiked ? "fill-rose-400 text-rose-400 scale-110" : "text-white"
                      }`}
                    />
                    <span className="truncate">
                      {isLiked ? "پسندیده شد" : "پسندیدن"}
                    </span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
