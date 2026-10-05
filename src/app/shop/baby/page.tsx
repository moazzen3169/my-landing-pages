"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BABY_PRODUCTS,
  AGE_CATEGORIES,
  BRANDS_LIST,
  CURATED_NURSERY_BUNDLE,
  MEGA_MENU_CATEGORIES,
  BabyProduct,
  AgeCategory,
  BrandItem,
} from "@/data/baby";
import {
  ShoppingBag,
  Heart,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  Check,
  ArrowUpLeft,
  Sparkles,
  Truck,
  ShieldCheck,
  RefreshCw,
  Award,
  ChevronDown,
  Star,
  User,
  Menu,
  Phone,
  Mail,
  Send,
  HelpCircle,
  Eye,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

// Organic Decorative Flower SVG Icon
const FlowerIcon = ({
  className = "w-6 h-6",
  fill = "#FFD500",
  centerFill = "#1E0001",
}: {
  className?: string;
  fill?: string;
  centerFill?: string;
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M50 15C56 5 68 5 74 16C80 27 75 38 65 44C76 48 82 60 76 71C70 82 58 81 50 71C42 81 30 82 24 71C18 60 24 48 35 44C25 38 20 27 26 16C32 5 44 5 50 15Z"
      fill={fill}
    />
    <circle cx="50" cy="44" r="11" fill={centerFill} />
  </svg>
);

// Format prices with Persian digits
const formatPersianPrice = (num: number) => {
  return num.toLocaleString("fa-IR");
};

export default function BabyLandingPage() {
  // Drawers & Modals State
  const [activeMegaCategory, setActiveMegaCategory] = useState<string | null>(
    null
  );
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState<
    { product: BabyProduct; color: string; size: string; quantity: number }[]
  >([
    {
      product: BABY_PRODUCTS[0],
      color: "هلویی لطیف",
      size: "۰–۳ ماه",
      quantity: 1,
    },
    {
      product: BABY_PRODUCTS[2],
      color: "سبز مریم‌گلی",
      size: "۶–۱۲ ماه",
      quantity: 1,
    },
  ]);

  const [wishlistIds, setWishlistIds] = useState<string[]>([
    "baby-01",
    "baby-03",
    "baby-05",
  ]);

  // Filtering State
  const [selectedAgeId, setSelectedAgeId] = useState<
    "0-3m" | "3-6m" | "6-12m" | "1-2y" | "2-4y" | "4y+"
  >("0-3m");
  const [selectedCategoryFilter, setSelectedCategoryFilter] =
    useState<string>("all");

  // Detail Modal State
  const [selectedProductForDetail, setSelectedProductForDetail] =
    useState<BabyProduct | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart Operations
  const addToCart = (
    product: BabyProduct,
    colorName?: string,
    sizeName?: string,
    quantity: number = 1
  ) => {
    const chosenColor =
      colorName || (product.colors ? product.colors[0].name : "تک رنگ");
    const chosenSize = sizeName || "استاندارد";

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.color === chosenColor &&
          item.size === chosenSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        { product, color: chosenColor, size: chosenSize, quantity },
      ];
    });
    showToast(`«${product.name}» به سبد خرید اضافه شد.`);
  };

  const removeFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const updateCartQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }, [cartItems]);

  // Wishlist Operations
  const toggleWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      if (prev.includes(productId)) {
        showToast("از لیست علاقه‌مندی‌ها حذف شد.");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("به لیست علاقه‌مندی‌ها اضافه شد.");
        return [...prev, productId];
      }
    });
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return BABY_PRODUCTS.filter((item) => {
      const matchesAge =
        selectedAgeId === "0-3m" ? true : item.ageGroup === selectedAgeId;
      const matchesCategory =
        selectedCategoryFilter === "all"
          ? true
          : item.category === selectedCategoryFilter;
      return matchesAge && matchesCategory;
    });
  }, [selectedAgeId, selectedCategoryFilter]);

  // Search Results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return BABY_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#5F4A4A] p-2 sm:p-4 md:p-6 lg:p-8 font-peyda text-[#1E0001] dir-rtl selection:bg-[#FFD500] selection:text-[#1E0001]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-[#1E0001] text-[#FFFBF3] px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm font-medium border border-[#FFD500]/30 animate-bounce">
          <Sparkles className="w-4 h-4 text-[#FFD500]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* MAIN CENTERED FRAMED WEBSITE CONTAINER */}
      <div className="max-w-[1380px] mx-auto bg-[#FFFBF3] border-[3px] md:border-[4px] border-[#1E0001] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-2xl relative">

        {/* ================= HEADER / NAVIGATION ================= */}
        <header className="h-16 md:h-20 bg-[#FFFBF3] border-b border-[#1E0001]/15 px-4 md:px-8 flex items-center justify-between relative z-40">
          {/* Right: Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#1E0001]/5"
            >
              <Menu className="w-6 h-6 text-[#1E0001]" />
            </button>
            <Link href="/shop/baby" className="flex items-center gap-2 group">
              <FlowerIcon className="w-7 h-7 transition-transform group-hover:rotate-45 duration-300" />
              <span className="font-bold text-xl md:text-2xl tracking-tight text-[#1E0001]">
                دنیای کوچولوها
              </span>
            </Link>
          </div>

          {/* Center: Primary Category Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className="flex items-center gap-1.5 py-2 px-3 rounded-full hover:bg-[#1E0001]/5 transition-colors font-semibold"
            >
              <span>دسته‌بندی‌ها</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isMegaMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <a
              href="#products-section"
              className="hover:text-[#F36A21] transition-colors"
            >
              لباس
            </a>
            <a
              href="#products-section"
              className="hover:text-[#F36A21] transition-colors"
            >
              مراقبت
            </a>
            <a
              href="#products-section"
              className="hover:text-[#F36A21] transition-colors"
            >
              تغذیه
            </a>
            <a
              href="#products-section"
              className="hover:text-[#F36A21] transition-colors"
            >
              اسباب‌بازی
            </a>
            <a
              href="#products-section"
              className="hover:text-[#F36A21] transition-colors"
            >
              کالسکه
            </a>
            <a
              href="#nursery-bundle"
              className="hover:text-[#F36A21] transition-colors"
            >
              اتاق کودک
            </a>
            <a
              href="#brands-section"
              className="hover:text-[#F36A21] transition-colors"
            >
              برندها
            </a>
          </nav>

          {/* Left: Utilities (Search, Wishlist, Cart) */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search Input Bar */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 bg-[#1E0001]/5 hover:bg-[#1E0001]/10 px-3.5 py-2 rounded-full text-xs md:text-sm text-[#1E0001]/70 transition-colors"
            >
              <Search className="w-4 h-4 text-[#1E0001]" />
              <span className="hidden sm:inline">جستجو در محصولات...</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-[#1E0001]/5 transition-colors"
              aria-label="لیست علاقه‌مندی‌ها"
            >
              <Heart className="w-5 h-5 text-[#1E0001]" />
              {wishlistIds.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#F36A21] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistIds.length.toLocaleString("fa-IR")}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-[#1E0001] text-[#FFFBF3] px-4 py-2 rounded-full hover:bg-[#1E0001]/90 transition-colors text-xs md:text-sm font-semibold"
            >
              <ShoppingBag className="w-4 h-4 text-[#FFD500]" />
              <span>سبد خرید</span>
              <span className="bg-[#F36A21] text-white text-[11px] px-2 py-0.5 rounded-full font-bold">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0).toLocaleString("fa-IR")}
              </span>
            </button>
          </div>
        </header>

        {/* MEGA MENU DROPDOWN */}
        {isMegaMenuOpen && (
          <div className="absolute top-16 md:top-20 right-0 left-0 bg-[#FFFBF3] border-b border-[#1E0001]/15 z-50 p-6 md:p-8 shadow-2xl animate-fadeIn">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Category List */}
              <div className="space-y-3 border-l border-[#1E0001]/10 pl-6">
                <h4 className="font-bold text-xs text-[#1E0001]/50 uppercase tracking-wider">
                  دسته‌بندی‌های اصلی
                </h4>
                {MEGA_MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onMouseEnter={() => setActiveMegaCategory(cat.id)}
                    onClick={() => {
                      setSelectedCategoryFilter(cat.id);
                      setIsMegaMenuOpen(false);
                    }}
                    className={`w-full text-right flex items-center justify-between p-2.5 rounded-xl text-sm font-medium transition-colors ${
                      activeMegaCategory === cat.id ||
                      (!activeMegaCategory && cat.id === "clothing")
                        ? "bg-[#1E0001] text-[#FFFBF3]"
                        : "hover:bg-[#1E0001]/5 text-[#1E0001]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{cat.icon}</span>
                      <span>{cat.title}</span>
                    </span>
                    <ChevronLeft className="w-4 h-4 opacity-70" />
                  </button>
                ))}
              </div>

              {/* Dynamic Subcategories & Age Ranges */}
              <div className="md:col-span-2 space-y-6">
                {(() => {
                  const currentCat =
                    MEGA_MENU_CATEGORIES.find(
                      (c) => c.id === (activeMegaCategory || "clothing")
                    ) || MEGA_MENU_CATEGORIES[0];
                  return (
                    <>
                      <div>
                        <h5 className="font-bold text-sm text-[#1E0001] mb-3">
                          زیردسته‌ها — {currentCat.title}
                        </h5>
                        <div className="grid grid-cols-2 gap-2 text-sm text-[#1E0001]/80">
                          {currentCat.subcategories.map((sub, i) => (
                            <a
                              key={i}
                              href="#products-section"
                              onClick={() => setIsMegaMenuOpen(false)}
                              className="p-2 rounded-lg hover:bg-[#FFF0E1] hover:text-[#1E0001] transition-colors"
                            >
                              • {sub}
                            </a>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-bold text-xs text-[#1E0001]/60 mb-2">
                          برندهای برجسته این دسته
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {currentCat.brands.map((b, i) => (
                            <span
                              key={i}
                              className="text-xs bg-[#1E0001]/5 border border-[#1E0001]/10 px-3 py-1 rounded-full font-medium"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>

              {/* Menu Editorial Spotlight */}
              <div className="bg-[#FFF0E1] border border-[#1E0001]/10 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F36A21] text-white px-2 py-0.5 rounded-md">
                    پیشنهاد ویژه
                  </span>
                  <h4 className="font-bold text-base mt-2 text-[#1E0001]">
                    کالکشن بهاره نوزاد
                  </h4>
                  <p className="text-xs text-[#1E0001]/70 mt-1">
                    جدیدترین محصولات پنبه‌ای ارگانیک با تخفیف محدود.
                  </p>
                </div>
                <div className="relative h-32 w-full rounded-xl overflow-hidden mt-3 bg-white/50">
                  <Image
                    src="/images/BABY/PACK_KS104958_P25004_1_260617031136.webp"
                    alt="پیشنهاد ویژه"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MOBILE MENU DRAWER */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#1E0001]/60 backdrop-blur-sm z-50 lg:hidden flex justify-end">
            <div className="bg-[#FFFBF3] w-[80%] max-w-sm h-full p-6 overflow-y-auto flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#1E0001]/15">
                  <div className="flex items-center gap-2">
                    <FlowerIcon className="w-6 h-6" />
                    <span className="font-bold text-lg">دنیای کوچولوها</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="py-6 space-y-4 text-base font-semibold">
                  <a
                    href="#products-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 hover:text-[#F36A21]"
                  >
                    لباس و پوشاک
                  </a>
                  <a
                    href="#products-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 hover:text-[#F36A21]"
                  >
                    مراقبت و حمام
                  </a>
                  <a
                    href="#products-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 hover:text-[#F36A21]"
                  >
                    تغذیه و ظروف
                  </a>
                  <a
                    href="#products-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 hover:text-[#F36A21]"
                  >
                    اسباب‌بازی و رشد
                  </a>
                  <a
                    href="#nursery-bundle"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 hover:text-[#F36A21]"
                  >
                    اتاق کودک و گهواره
                  </a>
                  <a
                    href="#brands-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 hover:text-[#F36A21]"
                  >
                    برندهای معتبر
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1E0001]/15 space-y-3 text-xs text-[#1E0001]/70">
                <p>پشتیبانی ۲۴ ساعته: ۰۲۱-۸۸۸۸۹۹۹۹</p>
                <p>ارسال رایگان برای خریدهای بالای ۱,۵۰۰,۰۰۰ تومان</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= HERO SECTION (REFERENCE MATCH) ================= */}
        <section className="relative pt-8 md:pt-12 pb-16 md:pb-24 px-4 md:px-12 bg-[#FFFBF3] overflow-hidden min-h-[600px] md:min-h-[720px] flex flex-col justify-between">

          {/* Layer 1: Oversized Editorial Headline */}
          <div className="text-center relative z-10 select-none">
            <h1 className="text-[64px] sm:text-[96px] md:text-[140px] lg:text-[170px] font-extrabold leading-[0.85] tracking-tight text-[#1E0001] opacity-95">
              دنیای کوچولوها
            </h1>
          </div>

          {/* Layer 2: Floating Organic Decorative Shapes */}
          {/* Yellow Flower Top Left */}
          <div className="absolute top-12 left-[10%] md:left-[15%] z-20 animate-pulse pointer-events-none">
            <FlowerIcon className="w-16 h-16 md:w-24 md:h-24" fill="#FFD500" />
          </div>
          {/* Green Flower Bottom Right */}
          <div className="absolute bottom-20 right-[10%] md:right-[18%] z-20 pointer-events-none">
            <FlowerIcon className="w-14 h-14 md:w-20 md:h-20" fill="#20C98A" />
          </div>

          {/* Layer 3: Central Cut-out Hero Product (Overlapping Headline) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[48%] z-20 w-[240px] sm:w-[320px] md:w-[400px] lg:w-[440px] h-[300px] sm:h-[380px] md:h-[440px] lg:h-[480px] pointer-events-none flex flex-col items-center justify-end">
            <div className="relative w-full h-full">
              <Image
                src="/images/BABY/Product-The-Chair-II-Coconut-01.webp"
                alt="صندلی نوزاد ارگونومیک"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
            {/* Primary CTA Pill positioned cleanly over product base */}
            <div className="pointer-events-auto -mt-6 z-30">
              <a
                href="#products-section"
                className="inline-flex items-center gap-3 bg-[#1E0001] text-[#FFFBF3] hover:bg-[#1E0001]/90 px-7 py-3 rounded-full text-sm font-bold shadow-2xl transition-all duration-300 hover:scale-105 group border border-[#FFFBF3]/20"
              >
                <span>مشاهده محصولات</span>
                <div className="w-7 h-7 rounded-full bg-[#F36A21] text-white flex items-center justify-center transition-transform group-hover:-translate-x-1">
                  <ArrowLeft className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </div>

          {/* Layer 4: Supporting Text & Primary CTA (Bottom Right/Left Composition) */}
          <div className="relative z-30 grid grid-cols-1 md:grid-cols-3 items-end gap-6 pt-24 md:pt-36">

            {/* Supporting Copy */}
            <div className="space-y-2 max-w-xs">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F36A21]">
                <Sparkles className="w-3.5 h-3.5" />
                منتخب والدین هوشمند
              </span>
              <p className="text-lg md:text-xl font-bold text-[#1E0001] leading-tight">
                ایمن، دوست‌داشتنی، برای روزهای کوچک و بزرگ
              </p>
              <p className="text-xs md:text-sm text-[#1E0001]/70 leading-relaxed">
                مجموعه‌ای دست‌چین شده از برترین برندهای بین‌المللی سیسمونی و
                مراقبت از کودک.
              </p>
            </div>

            {/* Empty Center Space (CTA is embedded under product) */}
            <div className="hidden md:block"></div>

            {/* Promotional Card inside Hero (Bottom Left) */}
            <div className="flex justify-end">
              <div className="bg-[#FFF0E1] border border-[#1E0001]/15 rounded-[18px] p-3.5 md:p-4 max-w-xs w-full shadow-lg flex items-center gap-3 relative overflow-hidden group">
                <div className="w-16 h-16 md:w-20 md:h-20 relative bg-white/70 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src="/images/BABY/DinnerwareCutlerySet_Sage.webp"
                    alt="پیشنهاد ویژه"
                    fill
                    className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold bg-[#F36A21] text-white px-2 py-0.5 rounded-full">
                    پیشنهاد ویژه
                  </span>
                  <p className="font-bold text-sm md:text-base text-[#1E0001] leading-none">
                    تا ۵۰٪ تخفیف
                  </p>
                  <p className="text-[11px] text-[#1E0001]/70">
                    ظروف نسوز سیلیکونی
                  </p>
                  <a
                    href="#products-section"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#F36A21] hover:underline pt-0.5"
                  >
                    <span>مشاهده مجموعه</span>
                    <ArrowLeft className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= LOWER DARK SECTION (#1E0001 DRAMATIC TRANSITION) ================= */}
        <section className="bg-[#1E0001] text-[#FFFBF3] py-16 md:py-24 px-4 md:px-12 relative overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">

            {/* PART 1: Lifestyle / Baby Image & Editorial Title */}
            <div className="space-y-4 border-b md:border-b-0 md:border-l border-white/10 pb-6 md:pb-0 md:pl-8">
              <div className="relative h-64 md:h-72 w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src="/images/BABY/BearRobe_Fog_a6ebae70-1475-4668-8b82-9b96cc6412de.webp"
                  alt="لحظه‌های زیبا با کودک"
                  fill
                  className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#FFFBF3] leading-snug">
                  لحظه‌های کوچک،
                  <br />
                  مهم‌اند.
                </h3>
                <p className="text-xs md:text-sm text-white/70 mt-2 leading-relaxed">
                  هر محصول با دقت و وسواس ارگونومیک انتخاب شده تا آسایش کامل
                  کودک شما تضمین شود.
                </p>
                <a
                  href="#products-section"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#FFD500] hover:text-[#20C98A] transition-colors mt-4"
                >
                  <span>مشاهده کلیه محصولات</span>
                  <ChevronLeft className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* PART 2: Featured Spotlight Product */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center relative space-y-4 hover:border-[#FFD500]/40 transition-colors">
              <span className="inline-block bg-[#FFD500] text-[#1E0001] text-[11px] font-extrabold px-3 py-1 rounded-full">
                محصول برتر هفته
              </span>

              <div className="relative h-48 w-full">
                <Image
                  src="/images/BABY/Product-The-Rocker-Oatmeal-01.webp"
                  alt="راکر آغوشی نوزاد"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">
                  گهواره و راکر آغوشی ارگونومیک
                </h4>
                <p className="text-xs text-white/60 mt-1">
                  حرکت نرم بدون نیاز به باتری با پارچه ۳ بعدی تنفس‌پذیر
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <div className="text-right">
                  <div className="text-lg font-extrabold text-[#FFD500]">
                    {formatPersianPrice(2490000)} تومان
                  </div>
                  <div className="text-xs text-white/40 line-through">
                    {formatPersianPrice(3190000)} تومان
                  </div>
                </div>

                <button
                  onClick={() => addToCart(BABY_PRODUCTS[4])}
                  className="w-12 h-12 rounded-full bg-[#F36A21] hover:bg-[#F36A21]/80 text-white flex items-center justify-center font-bold text-xl transition-transform hover:scale-110 shadow-lg"
                  title="افزودن سریع به سبد خرید"
                >
                  +
                </button>
              </div>
            </div>

            {/* PART 3: Trust & Social Proof */}
            <div className="space-y-6 md:pr-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2 space-x-reverse">
                    <div className="w-10 h-10 rounded-full border-2 border-[#1E0001] bg-[#FFD500] flex items-center justify-center font-bold text-xs text-[#1E0001]">
                      سارا
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#1E0001] bg-[#20C98A] flex items-center justify-center font-bold text-xs text-[#1E0001]">
                      مریم
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#1E0001] bg-[#F36A21] flex items-center justify-center font-bold text-xs text-white">
                      علی
                    </div>
                  </div>
                  <span className="text-3xl font-black text-[#FFD500]">
                    ۱۰K+
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white">
                  والدینی که به ما اعتماد کرده‌اند
                </h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  بیش از ۱۰ هزار خانواده ایرانی تجربه‌ای مطمئن و لذت‌بخش از خرید
                  سیسمونی آنلاین داشته‌اند.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#20C98A]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>تضمین ۱۰۰٪ اصالت برندهای بین‌المللی</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#20C98A]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>۷ روز ضمانت بازگشت بی‌قید و شرط</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#20C98A]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>ارسال فوق‌سریع به سراسر کشور</span>
                </div>
              </div>

              <a
                href="#trust-section"
                className="inline-block text-xs font-bold text-white/80 hover:text-white underline"
              >
                چرا والدین ما را انتخاب می‌کنند؟ ↗
              </a>
            </div>

          </div>
        </section>

        {/* ================= SHOP BY AGE SECTION (HORIZONTAL EDITORIAL) ================= */}
        <section className="py-12 md:py-16 px-4 md:px-12 bg-[#FFFBF3] border-b border-[#1E0001]/15">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#F36A21] uppercase tracking-wider">
                  انتخاب بر اساس رده سنی
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#1E0001] mt-1">
                  برای هر مرحله از رشد فرزند شما
                </h2>
              </div>
              <p className="text-xs md:text-sm text-[#1E0001]/70 max-w-sm">
                محصولات استاندارد و متناسب با ارگونومی سن نوزاد و کودک.
              </p>
            </div>

            {/* Age Tabs */}
            <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-4 no-scrollbar">
              {AGE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedAgeId(cat.id)}
                  className={`px-5 py-3 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    selectedAgeId === cat.id
                      ? "bg-[#1E0001] text-[#FFFBF3] shadow-md scale-105"
                      : "bg-[#1E0001]/5 text-[#1E0001] hover:bg-[#1E0001]/10"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Selected Age Banner */}
            {(() => {
              const currentAge =
                AGE_CATEGORIES.find((a) => a.id === selectedAgeId) ||
                AGE_CATEGORIES[0];
              return (
                <div className="bg-[#FFF0E1] border border-[#1E0001]/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
                  <div className="space-y-2 max-w-xl">
                    <span className="text-xs font-bold text-[#F36A21]">
                      {currentAge.subhead}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1E0001]">
                      محصولات ویژه سن {currentAge.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#1E0001]/80 leading-relaxed">
                      {currentAge.description}
                    </p>
                  </div>
                  <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-xl overflow-hidden bg-white/80 shrink-0">
                    <Image
                      src={currentAge.image}
                      alt={currentAge.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ================= FEATURED PRODUCTS SECTION ================= */}
        <section
          id="products-section"
          className="py-12 md:py-20 px-4 md:px-12 bg-[#FFFBF3] border-b border-[#1E0001]/15"
        >
          <div className="max-w-6xl mx-auto space-y-8">

            {/* Header & Category Filter Buttons */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-xs font-bold text-[#F36A21] uppercase tracking-wider">
                  کالکشن محبوب
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#1E0001] mt-1">
                  منتخب‌ترین محصولات سیسمونی
                </h2>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                {[
                  { id: "all", label: "همه" },
                  { id: "clothing", label: "لباس" },
                  { id: "care", label: "مراقبت" },
                  { id: "feeding", label: "تغذیه" },
                  { id: "toys", label: "اسباب‌بازی" },
                  { id: "nursery", label: "اتاق کودک" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedCategoryFilter(f.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                      selectedCategoryFilter === f.id
                        ? "bg-[#1E0001] text-[#FFFBF3]"
                        : "bg-[#1E0001]/5 text-[#1E0001] hover:bg-[#1E0001]/10"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => {
                const isWishlisted = wishlistIds.includes(product.id);
                return (
                  <div
                    key={product.id}
                    className="bg-[#F7F3E9] border border-[#1E0001]/10 rounded-2xl p-3 md:p-4 flex flex-col justify-between group hover:border-[#1E0001]/40 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Badge / Discount */}
                    <div className="absolute top-3 right-3 z-10 flex flex-col gap-1 items-start">
                      {product.badge && (
                        <span className="text-[10px] font-bold bg-[#1E0001] text-[#FFFBF3] px-2 py-0.5 rounded-md">
                          {product.badge}
                        </span>
                      )}
                      {product.discountPercent && (
                        <span className="text-[10px] font-extrabold bg-[#F36A21] text-white px-2 py-0.5 rounded-md">
                          {product.discountPercent.toLocaleString("fa-IR")}٪
                          تخفیف
                        </span>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="absolute top-3 left-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-[#1E0001] transition-colors shadow-sm"
                      aria-label="افزودن به علاقه‌مندی"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWishlisted ? "fill-[#F36A21] text-[#F36A21]" : ""
                        }`}
                      />
                    </button>

                    {/* Product Image */}
                    <div
                      onClick={() => setSelectedProductForDetail(product)}
                      className="relative h-44 md:h-52 w-full rounded-xl overflow-hidden bg-white/60 cursor-pointer group-hover:scale-105 transition-transform duration-300 my-2"
                    >
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    {/* Info */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center justify-between text-[11px] text-[#1E0001]/60">
                        <span className="font-semibold">{product.brand}</span>
                        <div className="flex items-center gap-1 text-[#FFD500]">
                          <Star className="w-3 h-3 fill-current" />
                          <span className="font-bold text-[#1E0001]">
                            {product.rating.toLocaleString("fa-IR")}
                          </span>
                        </div>
                      </div>

                      <h3
                        onClick={() => setSelectedProductForDetail(product)}
                        className="font-bold text-xs md:text-sm text-[#1E0001] line-clamp-2 cursor-pointer hover:text-[#F36A21] transition-colors h-9"
                      >
                        {product.name}
                      </h3>

                      {/* Price & Add */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#1E0001]/10">
                        <div>
                          <div className="font-extrabold text-sm md:text-base text-[#1E0001]">
                            {formatPersianPrice(product.price)} تومان
                          </div>
                          {product.originalPrice && (
                            <div className="text-[10px] text-[#1E0001]/40 line-through">
                              {formatPersianPrice(product.originalPrice)} تومان
                            </div>
                          )}
                        </div>

                        <button
                          onClick={() => addToCart(product)}
                          className="w-8 h-8 rounded-full bg-[#1E0001] hover:bg-[#F36A21] text-[#FFFBF3] flex items-center justify-center transition-colors shadow-md"
                          title="افزودن به سبد"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= ASYMMETRIC CATEGORY SHOWCASE ================= */}
        <section className="py-12 md:py-20 px-4 md:px-12 bg-[#FFFBF3] border-b border-[#1E0001]/15">
          <div className="max-w-6xl mx-auto space-y-8">
            <div>
              <span className="text-xs font-bold text-[#F36A21] uppercase tracking-wider">
                دنیای دسته‌بندی‌ها
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1E0001] mt-1">
                نگاهی به مجموعه‌های اصلی
              </h2>
            </div>

            {/* Asymmetric Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Large (Clothing) */}
              <div
                onClick={() => setSelectedCategoryFilter("clothing")}
                className="md:col-span-2 bg-[#FFF0E1] border border-[#1E0001]/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center cursor-pointer hover:shadow-xl transition-all group overflow-hidden relative"
              >
                <div className="space-y-3 max-w-sm z-10">
                  <span className="text-xs font-bold bg-[#1E0001] text-[#FFFBF3] px-3 py-1 rounded-full">
                    کالکشن پوشاک
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1E0001]">
                    لباس و سرهمی پنبه‌ای
                  </h3>
                  <p className="text-xs md:text-sm text-[#1E0001]/70 leading-relaxed">
                    ۱۰۰٪ پنبه ارگانیک، پارچه‌های لطیف ضدحساسیت با طراحی‌های دلنشین
                    اروپایی.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F36A21] group-hover:underline pt-2">
                    مشاهده لباس‌ها ↗
                  </span>
                </div>
                <div className="relative h-48 md:h-64 w-full md:w-64 mt-4 md:mt-0">
                  <Image
                    src="/images/BABY/PACK_KS104958_P25004_1_260617031136.webp"
                    alt="لباس کودک"
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Card 2: Medium (Toys) */}
              <div
                onClick={() => setSelectedCategoryFilter("toys")}
                className="bg-[#F7F3E9] border border-[#1E0001]/15 rounded-2xl p-6 flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all group"
              >
                <div>
                  <span className="text-xs font-bold bg-[#FFD500] text-[#1E0001] px-3 py-1 rounded-full">
                    اسباب‌بازی و هوش
                  </span>
                  <h3 className="text-xl font-bold text-[#1E0001] mt-3">
                    بازی‌های چوبی مونته‌سوری
                  </h3>
                  <p className="text-xs text-[#1E0001]/70 mt-1">
                    تقویت مهارت‌های حرکتی و خلاقیت کودک
                  </p>
                </div>
                <div className="relative h-40 w-full my-4">
                  <Image
                    src="/images/BABY/Product-Play-Kit-2026-Coconut-01.webp"
                    alt="اسباب‌بازی"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs font-bold text-[#F36A21]">
                  کشف اسباب‌بازی‌ها ↗
                </span>
              </div>

              {/* Card 3: Medium (Feeding) */}
              <div
                onClick={() => setSelectedCategoryFilter("feeding")}
                className="bg-[#F7F3E9] border border-[#1E0001]/15 rounded-2xl p-6 flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all group"
              >
                <div>
                  <span className="text-xs font-bold bg-[#20C98A] text-[#1E0001] px-3 py-1 rounded-full">
                    تغذیه و ظروف
                  </span>
                  <h3 className="text-xl font-bold text-[#1E0001] mt-3">
                    ظروف سیلیکونی نسوز
                  </h3>
                  <p className="text-xs text-[#1E0001]/70 mt-1">
                    فاقد مواد شیمیایی با پایه مکشی ضدلغزش
                  </p>
                </div>
                <div className="relative h-40 w-full my-4">
                  <Image
                    src="/images/BABY/DinnerwareCutlerySet_Sage.webp"
                    alt="تغذیه کودک"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs font-bold text-[#F36A21]">
                  مشاهده ظروف ↗
                </span>
              </div>

              {/* Card 4: Large (Nursery) */}
              <div
                onClick={() => setSelectedCategoryFilter("nursery")}
                className="md:col-span-2 bg-[#FFF0E1] border border-[#1E0001]/15 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center cursor-pointer hover:shadow-xl transition-all group overflow-hidden"
              >
                <div className="space-y-3 max-w-sm z-10">
                  <span className="text-xs font-bold bg-[#1E0001] text-[#FFFBF3] px-3 py-1 rounded-full">
                    اتاق کودک
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1E0001]">
                    گهواره، راکر و چادر بازی
                  </h3>
                  <p className="text-xs md:text-sm text-[#1E0001]/70 leading-relaxed">
                    محیطی امن، راحت و زیبا برای خواب و بازی روزمره فرزند شما.
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F36A21] group-hover:underline pt-2">
                    تجهیز اتاق کودک ↗
                  </span>
                </div>
                <div className="relative h-48 md:h-64 w-full md:w-64 mt-4 md:mt-0">
                  <Image
                    src="/images/BABY/The-Play-Tent-A1.webp"
                    alt="اتاق کودک"
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= CURATED NURSERY STARTER BUNDLE ================= */}
        <section
          id="nursery-bundle"
          className="py-12 md:py-20 px-4 md:px-12 bg-[#FFF0E1] border-b border-[#1E0001]/15 relative overflow-hidden"
        >
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold bg-[#F36A21] text-white px-3 py-1 rounded-full uppercase tracking-wider">
                بسته کامل خرید
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E0001]">
                {CURATED_NURSERY_BUNDLE.title}
              </h2>
              <p className="text-xs md:text-sm text-[#1E0001]/80">
                {CURATED_NURSERY_BUNDLE.subtitle}
              </p>
            </div>

            {/* Bundle Items Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {CURATED_NURSERY_BUNDLE.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFBF3] border border-[#1E0001]/10 rounded-xl p-3 text-center space-y-2 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-28 w-full bg-[#F7F3E9] rounded-lg overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-[#F36A21]">
                    {item.brand}
                  </span>
                  <h4 className="font-bold text-xs text-[#1E0001] line-clamp-1">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>

            {/* Bundle Pricing Card */}
            <div className="bg-[#1E0001] text-[#FFFBF3] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="space-y-1 text-center md:text-right">
                <div className="text-xs text-[#FFD500] font-bold">
                  {CURATED_NURSERY_BUNDLE.discountAmount}
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-2xl md:text-3xl font-extrabold text-[#FFFBF3]">
                    {formatPersianPrice(CURATED_NURSERY_BUNDLE.totalPrice)}{" "}
                    تومان
                  </span>
                  <span className="text-sm text-white/40 line-through">
                    {formatPersianPrice(CURATED_NURSERY_BUNDLE.originalPrice)}{" "}
                    تومان
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  CURATED_NURSERY_BUNDLE.items.forEach((item, i) => {
                    addToCart(BABY_PRODUCTS[i % BABY_PRODUCTS.length]);
                  });
                  setIsCartOpen(true);
                }}
                className="w-full md:w-auto bg-[#FFD500] hover:bg-[#FFD500]/90 text-[#1E0001] px-8 py-4 rounded-full font-extrabold text-sm transition-transform hover:scale-105 shadow-lg"
              >
                افزودن کامل پکیج به سبد خرید
              </button>
            </div>
          </div>
        </section>

        {/* ================= BRAND SECTION ================= */}
        <section
          id="brands-section"
          className="py-12 md:py-20 px-4 md:px-12 bg-[#FFFBF3] border-b border-[#1E0001]/15"
        >
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-[#F36A21] uppercase tracking-wider">
                اصالت و کیفیت بی‌نظیر
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1E0001]">
                برندهایی که انتخاب کرده‌ایم
              </h2>
            </div>

            {/* Monochrome Brand Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {BRANDS_LIST.map((brand) => (
                <div
                  key={brand.id}
                  className="bg-[#F7F3E9] border border-[#1E0001]/10 rounded-2xl p-6 text-center space-y-3 hover:border-[#1E0001] transition-all cursor-pointer group"
                >
                  <div className="text-xl md:text-2xl font-black text-[#1E0001] tracking-widest uppercase group-hover:scale-105 transition-transform">
                    {brand.logoText}
                  </div>
                  <span className="text-[10px] font-bold bg-[#1E0001]/5 text-[#1E0001]/80 px-2 py-0.5 rounded-full inline-block">
                    {brand.origin}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TRUST & GUARANTEE SECTION ================= */}
        <section
          id="trust-section"
          className="py-12 md:py-16 px-4 md:px-12 bg-[#F7F3E9] border-b border-[#1E0001]/15"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#FFFBF3] border border-[#1E0001]/15 flex items-center justify-center mx-auto text-[#F36A21]">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-[#1E0001]">
                ارسال رایگان و سریع
              </h4>
              <p className="text-xs text-[#1E0001]/70">
                برای تمامی خریدهای بالای ۱.۵ میلیون تومان
              </p>
            </div>

            <div className="p-4 space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#FFFBF3] border border-[#1E0001]/15 flex items-center justify-center mx-auto text-[#20C98A]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-[#1E0001]">
                ضمانت اصالت کالاهایی
              </h4>
              <p className="text-xs text-[#1E0001]/70">
                تضمین ۱۰۰٪ اورجینال بودن برندهای وارداتی
              </p>
            </div>

            <div className="p-4 space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#FFFBF3] border border-[#1E0001]/15 flex items-center justify-center mx-auto text-[#FFD500]">
                <RefreshCw className="w-6 h-6 text-[#1E0001]" />
              </div>
              <h4 className="font-bold text-sm text-[#1E0001]">
                ۷ روز مهلت تعویض
              </h4>
              <p className="text-xs text-[#1E0001]/70">
                تعویض سایز و کالا بدون دردسر
              </p>
            </div>

            <div className="p-4 space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#FFFBF3] border border-[#1E0001]/15 flex items-center justify-center mx-auto text-[#F36A21]">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-[#1E0001]">
                مشاوره اختصاصی سیسمونی
              </h4>
              <p className="text-xs text-[#1E0001]/70">
                پاسخگویی کارشناسان باتجربه کودک
              </p>
            </div>
          </div>
        </section>

        {/* ================= EDITORIAL FOOTER ================= */}
        <footer className="bg-[#1E0001] text-[#FFFBF3] pt-12 pb-8 px-4 md:px-12">
          <div className="max-w-6xl mx-auto space-y-12">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">

              {/* Col 1: Brand info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FlowerIcon className="w-7 h-7" fill="#FFD500" />
                  <span className="font-extrabold text-xl text-white">
                    دنیای کوچولوها
                  </span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  فروشگاه چندبرندی و مرجع تخصصی پوشاک، مراقبت و لوازم سیسمونی نوزاد
                  و کودک با بالاترین استانداردهای جهانی.
                </p>
              </div>

              {/* Col 2: Fast Links */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-[#FFD500]">
                  دسته‌بندی‌های محبوب
                </h4>
                <ul className="space-y-2 text-xs text-white/70">
                  <li>
                    <a href="#products-section" className="hover:text-white">
                      سرهمی و بادی پنبه‌ای
                    </a>
                  </li>
                  <li>
                    <a href="#products-section" className="hover:text-white">
                      ست ظروف غذاخوری سیلیکونی
                    </a>
                  </li>
                  <li>
                    <a href="#products-section" className="hover:text-white">
                      اسباب‌بازی چوبی مونته‌سوری
                    </a>
                  </li>
                  <li>
                    <a href="#nursery-bundle" className="hover:text-white">
                      راکر و گهواره نوزاد
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 3: Customer Service */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-[#FFD500]">
                  خدمات مشتریان
                </h4>
                <ul className="space-y-2 text-xs text-white/70">
                  <li>راهنمای انتخاب سایز لباس</li>
                  <li>شرایط بازگشت و تعویض کالا</li>
                  <li>پیگیری سفارشات ارسال شده</li>
                  <li>سوالات متداول سیسمونی</li>
                </ul>
              </div>

              {/* Col 4: Newsletter */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-[#FFD500]">
                  عضویت در خبرنامه تخفیف‌ها
                </h4>
                <p className="text-xs text-white/70">
                  از تازه‌ترین پیشنهادها و کد‌های تخفیف مطلع شوید.
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    placeholder="شماره موبایل یا ایمیل..."
                    className="bg-white/10 border border-white/20 px-3 py-2 rounded-lg text-xs w-full text-white placeholder-white/40 focus:outline-none focus:border-[#FFD500]"
                  />
                  <button className="bg-[#F36A21] hover:bg-[#F36A21]/80 text-white px-4 py-2 rounded-lg text-xs font-bold shrink-0">
                    ثبت
                  </button>
                </div>
              </div>

            </div>

            <div className="flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
              <p>© ۱۴۰۳ تمامی حقوق برای فروشگاه دنیای کوچولوها محفوظ است.</p>
              <div className="flex items-center gap-6">
                <span>قوانین و مقررات</span>
                <span>حریم خصوصی</span>
                <span>درباره ما</span>
              </div>
            </div>

          </div>
        </footer>

      </div>

      {/* ================= CART DRAWER ================= */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-[#1E0001]/60 backdrop-blur-sm z-50 flex justify-start">
          <div className="bg-[#FFFBF3] w-full max-w-md h-full p-6 overflow-y-auto flex flex-col justify-between shadow-2xl animate-slideIn">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#1E0001]/15">
                <div className="flex items-center gap-2 font-bold text-lg text-[#1E0001]">
                  <ShoppingBag className="w-5 h-5 text-[#F36A21]" />
                  <span>سبد خرید شما</span>
                  <span className="text-xs text-[#1E0001]/60">
                    ({cartItems.length.toLocaleString("fa-IR")} کالا)
                  </span>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 hover:bg-[#1E0001]/5 rounded-full"
                >
                  <X className="w-5 h-5 text-[#1E0001]" />
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <ShoppingBag className="w-12 h-12 text-[#1E0001]/20 mx-auto" />
                  <p className="text-sm font-semibold text-[#1E0001]/60">
                    سبد خرید شما خالی است.
                  </p>
                </div>
              ) : (
                <div className="py-4 space-y-4">
                  {cartItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 bg-[#F7F3E9] p-3 rounded-xl border border-[#1E0001]/10 relative"
                    >
                      <div className="relative h-16 w-16 bg-white rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="font-bold text-xs text-[#1E0001] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <div className="text-[10px] text-[#1E0001]/60 flex gap-2">
                          <span>رنگ: {item.color}</span>
                          <span>سایز: {item.size}</span>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <span className="font-extrabold text-xs text-[#1E0001]">
                            {formatPersianPrice(item.product.price)} تومان
                          </span>
                          <div className="flex items-center gap-2 bg-white rounded-lg px-2 py-0.5 border border-[#1E0001]/10 text-xs font-bold">
                            <button
                              onClick={() =>
                                updateCartQuantity(idx, item.quantity - 1)
                              }
                              className="text-[#1E0001]/70"
                            >
                              -
                            </button>
                            <span>{item.quantity.toLocaleString("fa-IR")}</span>
                            <button
                              onClick={() =>
                                updateCartQuantity(idx, item.quantity + 1)
                              }
                              className="text-[#1E0001]/70"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(idx)}
                        className="text-[#1E0001]/40 hover:text-[#F36A21] p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="pt-4 border-t border-[#1E0001]/15 space-y-3">
                <div className="flex justify-between font-extrabold text-base text-[#1E0001]">
                  <span>مبلغ قابل پرداخت:</span>
                  <span>{formatPersianPrice(cartTotal)} تومان</span>
                </div>
                <button
                  onClick={() => {
                    showToast("سفارش شما با موفقیت ثبت گردید.");
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-[#1E0001] hover:bg-[#F36A21] text-[#FFFBF3] py-3.5 rounded-full font-bold text-sm transition-colors shadow-lg"
                >
                  تکمیل و پرداخت سفارش
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= SEARCH OVERLAY ================= */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-[#1E0001]/70 backdrop-blur-md z-50 flex items-start justify-center pt-16 px-4">
          <div className="bg-[#FFFBF3] border border-[#1E0001]/20 rounded-2xl w-full max-w-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#1E0001]/15 pb-4">
              <div className="flex items-center gap-2 flex-1">
                <Search className="w-5 h-5 text-[#1E0001]/60" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="نام کالا، برند یا دسته مورد نظر را جستجو کنید..."
                  className="w-full bg-transparent border-none text-base font-semibold focus:outline-none text-[#1E0001] placeholder-[#1E0001]/40"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 hover:bg-[#1E0001]/5 rounded-full"
              >
                <X className="w-5 h-5 text-[#1E0001]" />
              </button>
            </div>

            {/* Results */}
            {searchQuery.trim() !== "" && (
              <div className="max-h-80 overflow-y-auto space-y-2">
                {searchResults.length === 0 ? (
                  <p className="text-xs text-[#1E0001]/60 py-4 text-center">
                    محصولی با این عبارت یافت نشد.
                  </p>
                ) : (
                  searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        setSelectedProductForDetail(product);
                        setIsSearchOpen(false);
                      }}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#F7F3E9] hover:bg-[#FFF0E1] cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 bg-white rounded-lg overflow-hidden shrink-0">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs text-[#1E0001]">
                            {product.name}
                          </h4>
                          <span className="text-[10px] text-[#1E0001]/60">
                            {product.brand}
                          </span>
                        </div>
                      </div>
                      <span className="font-extrabold text-xs text-[#1E0001]">
                        {formatPersianPrice(product.price)} تومان
                      </span>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= PRODUCT DETAIL MODAL ================= */}
      {selectedProductForDetail && (
        <div className="fixed inset-0 bg-[#1E0001]/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#FFFBF3] border border-[#1E0001]/20 rounded-2xl w-full max-w-2xl p-6 md:p-8 shadow-2xl relative space-y-6 animate-fadeIn max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProductForDetail(null)}
              className="absolute top-4 left-4 p-2 rounded-full hover:bg-[#1E0001]/5"
            >
              <X className="w-5 h-5 text-[#1E0001]" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="relative h-64 md:h-80 w-full bg-[#F7F3E9] rounded-xl overflow-hidden">
                <Image
                  src={selectedProductForDetail.images[0]}
                  alt={selectedProductForDetail.name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold text-[#F36A21]">
                  {selectedProductForDetail.brand}
                </span>
                <h3 className="text-xl font-extrabold text-[#1E0001]">
                  {selectedProductForDetail.name}
                </h3>
                <p className="text-xs text-[#1E0001]/80 leading-relaxed">
                  {selectedProductForDetail.description}
                </p>

                {selectedProductForDetail.material && (
                  <div className="text-xs bg-[#1E0001]/5 p-2.5 rounded-lg border border-[#1E0001]/10">
                    <span className="font-bold">جنس / ترکیبات: </span>
                    <span>{selectedProductForDetail.material}</span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-black text-[#1E0001]">
                    {formatPersianPrice(selectedProductForDetail.price)} تومان
                  </span>
                  <button
                    onClick={() => {
                      addToCart(selectedProductForDetail);
                      setSelectedProductForDetail(null);
                      setIsCartOpen(true);
                    }}
                    className="bg-[#1E0001] hover:bg-[#F36A21] text-[#FFFBF3] px-6 py-3 rounded-full font-bold text-xs transition-colors shadow-lg"
                  >
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
