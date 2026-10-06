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

  // Animation variants for smooth entrance and exit of shoe
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
      x: dir > 0 ? 30 : -30,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir < 0 ? -30 : 30,
      transition: {
        duration: 0.2,
      },
    }),
  };

  return (
    <section
      className="relative bg-[#313131] pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden font-peyda border-b border-neutral-200"
      dir="rtl"
    >
      {/* BACKGROUND DECORATIVE WATERMARK */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden opacity-[0.03]">
        <span className="text-[20vw] font-black tracking-tighter text-black uppercase leading-none font-mono">
          {currentProduct.brand}
        </span>
      </div>



      {/* MAIN HERO CENTERPIECE CONTAINER */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 w-full">

        {/* 2-COLUMN GRID CANVAS: RIGHT = PRODUCT INFO, LEFT = SHOE IMAGE SLIDER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ">

          {/* RIGHT COLUMN (RTL): PRODUCT INFORMATION & ACTIONS (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-right space-y-6">

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={infoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                {/* BRAND BADGE & RATING */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5  text-white text-xs font-bold  uppercase tracking-wider shadow-2xs">
                      {currentProduct.brand}
                    </span>
                    {currentProduct.badge && (
                      <span className="px-3  text-amber-600  text-xs font-semibold rounded-full flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        {currentProduct.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold px-2.5 py-1z">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{currentProduct.rating}</span>
                    <span className="text-neutral-400 font-normal">({currentProduct.reviewCount})</span>
                  </div>
                </div>

                {/* TITLE & DESCRIPTION */}
                <div>
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-1">
                    {currentProduct.gender === 'men' ? 'اسنیکر مردانه' : currentProduct.gender === 'women' ? 'اسنیکر زنانه' : 'اسنیکر یونیسکس'}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight mb-3">
                    {currentProduct.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                    {currentProduct.description}
                  </p>
                </div>


                {/* COLOR VARIANTS SELECTOR */}
                {currentProduct.colors.length > 0 && (
                  <div>

                    <div className="flex items-center gap-2.5">
                      {currentProduct.colors.map((color, idx) => (
                        <button
                          key={color.name + idx}
                          onClick={() => setSelectedColorIndex(idx)}
                          className={`w-8 h-8 rounded-full transition-all duration-200 border flex items-center justify-center p-0.5 ${
                            selectedColorIndex === idx
                              ? "border-black ring-2 ring-black/20 scale-110"
                              : "border-neutral-300 hover:border-neutral-500"
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
                  <div>

                    <div className="flex flex-wrap gap-2">
                      {currentProduct.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${
                            selectedSize === sz
                              ? "bg-white text-black shadow-xs"
                              : " text-white/90 hover:bg-black"
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* PRICE BLOCK */}
                <div className="pt-2 flex items-baseline gap-3">
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {formatPersianPrice(currentProduct.price)}
                  </div>
                  {currentProduct.compareAtPrice && (
                    <span className="text-sm text-neutral-400 line-through">
                      {formatPersianPrice(currentProduct.compareAtPrice)}
                    </span>
                  )}
                  {currentProduct.discountPercentage && (
                    <span className="px-2.5 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-md border border-rose-200">
                      ٪{currentProduct.discountPercentage}-
                    </span>
                  )}
                </div>

                {/* DUAL ACTION BUTTONS: ADD TO CART + WISHLIST ("پسندیدن") */}
                <div className="grid grid-cols-12 gap-3 pt-2">

                  {/* ADD TO CART BUTTON (8 COLS) */}
                  <button
                    onClick={handleAddToCart}
                    className={`col-span-8 py-4 px-5 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-xs active:scale-98 ${
                      isAddedToCart
                        ? "bg-emerald-600 text-white"
                        : "bg-amber-600 hover:bg-neutral-800 text-black"
                    }`}
                  >
                    {isAddedToCart ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>به سبد اضافه شد</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5" />
                        <span>افزودن به سبد خرید</span>
                      </>
                    )}
                  </button>

                  {/* FAVORITE / WISHLIST BUTTON (4 COLS / "پسندیدن") */}
                  <button
                    onClick={handleToggleWishlist}
                    className={`col-span-4 py-4 px-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 border active:scale-98 ${
                      isLiked
                        ? "bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100"
                        : "bg-white hover:bg-neutral-100 text-black border-neutral-300 hover:border-black"
                    }`}
                    title={isLiked ? "حذف از پسندیده‌ها" : "پسندیدن"}
                  >
                    <Heart
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                        isLiked ? "fill-rose-500 text-rose-500 scale-110" : "text-black"
                      }`}
                    />
                    <span>
                      {isLiked ? "پسندیده شد" : "پسندیدن"}
                    </span>
                  </button>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* LEFT COLUMN (RTL): FULL HEIGHT CENTRALLY DISPLAYED SHOE SLIDER (7 COLS) */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-between min-h-[440px] sm:min-h-[500px]">


            {/* CENTER DISPLAY AREA: NAVIGATION BUTTONS + CENTRALLY POSITIONED FULL HEIGHT SHOE */}
            <div className="relative w-full flex-1 flex items-center justify-center py-4 my-2 select-none">

              {/* PREVIOUS SLIDE BUTTON (RIGHT ARROW IN RTL) */}
              <button
                onClick={() => paginate(-1)}
                className="absolute right-0 sm:right-2 z-30 w-12 h-12  transition-all border-0 text-white  duration-300 flex items-center justify-center shadow-xs hover:scale-105 active:scale-95 group"
                aria-label="محصول قبلی"
              >
                <ChevronRight className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
              </button>

              {/* NEXT SLIDE BUTTON (LEFT ARROW IN RTL) */}
              <button
                onClick={() => paginate(1)}
                className="absolute left-0 sm:left-2 z-30 w-12 h-12 border-0 text-white duration-300 flex items-center justify-center shadow-xs  hover:scale-105 active:scale-95 group"
                aria-label="محصول بعدی"
              >
                <ChevronLeft className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
              </button>

              {/* FULL HEIGHT CENTRAL SHOE DISPLAY WITH DRAG AND ANIMATED TRANSITION */}
              <div className="relative w-full max-w-[540px] h-[300px] sm:h-[380px] lg:h-[420px] flex items-center justify-center overflow-visible">

                {/* RADIAL AMBIENT GLOW BEHIND SHOE */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-300/30 via-neutral-200/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10 scale-90"></div>

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
                    {/* IDLE FLOATING MOTION WRAPPER WITH MIX-BLEND-MULTIPLY */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 1.2, 0],
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
                        sizes="(max-width: 768px) 90vw, 50vw"
                        className="object-cover p-2 pointer-events-none mix-blend-multiply"
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

              </div>

            </div>

            {/* SLIDER DOTS PAGINATION */}
            <div className="flex items-center justify-center gap-2 mt-2 z-20">
              {HERO_PRODUCTS.map((prod, idx) => (
                <button
                  key={prod.id}
                  onClick={() => handleSelectProduct(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === productIndex
                      ? "w-8 h-2.5 bg-amber-600"
                      : "w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-500"
                  }`}
                  aria-label={`اسلاید ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
