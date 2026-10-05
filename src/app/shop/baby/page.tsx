"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
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
  SlidersHorizontal,
  ChevronDown,
  Star,
  User,
  Menu,
  CheckCircle2,
  Phone,
  Mail,
  Send,
  HelpCircle,
  ArrowLeft,
  FlowerIcon,
} from "lucide-react";

export default function BabyLandingPage() {
  // Navigation & Drawers State
  const [activeMegaCategory, setActiveMegaCategory] = useState<string | null>(
    null,
  );
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // E-commerce Cart & Wishlist State
  const [cartItems, setCartItems] = useState<
    { product: BabyProduct; color: string; size: string; quantity: number }[]
  >([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([
    "baby-01",
    "baby-03",
    "baby-05",
  ]);

  // Dynamic Interactive Features State
  const [selectedAgeId, setSelectedAgeId] = useState<
    "0-3m" | "3-6m" | "6-12m" | "1-2y" | "2-4y" | "4y+"
  >("0-3m");
  const [selectedCategoryFilter, setSelectedCategoryFilter] =
    useState<string>("all");
  const [selectedBrandHover, setSelectedBrandHover] = useState<BrandItem>(
    BRANDS_LIST[0],
  );

  // Floating Hero Interactive Object Hover
  const [hoveredHeroObject, setHoveredHeroObject] = useState<{
    title: string;
    category: string;
  } | null>(null);

  // Detail Modal State
  const [selectedProductForDetail, setSelectedProductForDetail] =
    useState<BabyProduct | null>(null);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart operations
  const addToCart = (
    product: BabyProduct,
    colorName?: string,
    sizeName?: string,
    quantity: number = 1,
  ) => {
    const chosenColor =
      colorName ||
      (product.colors && product.colors[0] ? product.colors[0].name : "تک رنگ");
    const chosenSize = sizeName || "استاندارد";

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.color === chosenColor &&
          item.size === chosenSize,
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        { product, color: chosenColor, size: chosenSize, quantity: quantity },
      ];
    });
    showToast(`«${product.name}» به سبد خرید اضافه شد ♡`);
  };

  const removeFromCart = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const updateCartQuantity = (index: number, delta: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0,
    );
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  // Wishlist toggle
  const toggleWishlist = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlistIds((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast("از لیست علاقه‌مندی‌ها حذف شد");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("به لیست علاقه‌مندی‌ها اضافه شد ♡");
        return [...prev, productId];
      }
    });
  };

  // Filtered products for Age section
  const ageFilteredProducts = useMemo(() => {
    return BABY_PRODUCTS.filter((p) => p.ageGroup === selectedAgeId);
  }, [selectedAgeId]);

  // Discount / Sale section products
  const saleProducts = useMemo(() => {
    return BABY_PRODUCTS.filter((p) => p.isDiscounted || p.originalPrice);
  }, []);

  // Best seller products
  const bestSellerProducts = useMemo(() => {
    return BABY_PRODUCTS.filter((p) => p.isBestSeller);
  }, []);

  // New arrivals products
  const newArrivalProducts = useMemo(() => {
    return BABY_PRODUCTS.filter(
      (p) => p.isNew || p.id === "baby-07" || p.id === "baby-09",
    );
  }, []);

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return BABY_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const formatPrice = (price: number) => {
    return price.toLocaleString("fa-IR");
  };

  const activeAgeCategoryObj =
    AGE_CATEGORIES.find((a) => a.id === selectedAgeId) || AGE_CATEGORIES[0];

  return (
    <div
      className="min-h-screen bg-[#fff] text-[#302D2A] font-vazir dir-rtl selection:bg-[#2B70C9] selection:text-white relative overflow-x-hidden"
      dir="rtl"
    >
      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#302D2A] text-[#F8F5EF] px-6 py-3 rounded-full text-sm font-medium border border-[#2B70C9]/40 shadow-xl transition-all duration-300 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#F2E3A9] animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. ANNOUNCEMENT BAR
      <div className="bg-[#FFD500] text-[#270C0C] text-xs py-2.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-4 relative z-50 border-b border-[#F8F5EF]/10">
        <span className="hidden sm:inline">🌱</span>
        <span>
          ارسال سریع سراسری | ضمانت ۱۰۰٪ اصالت کالا | خرید امن و مطمئن برای
          کوچولوها
        </span>
        <span className="hidden sm:inline">✨</span>
      </div> */}

      {/* 2. MAIN NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#FFFBF3] stransition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          {/* RIGHT: LOGO & MOBILE TOGGLE */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#302D2A] hover:bg-[#302D2A]/5"
              aria-label="منو"
            >
              <Menu className="w-6 h-6" />
            </button>
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
                 کوچولوها
              </span>
            </Link>
          </div>
          </div>

          {/* CENTER: DESKTOP NAVIGATION WITH MEGA MENU TRIGGER */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium font-peyda text-[#302D2A]">
            {MEGA_MENU_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="relative py-2 group cursor-pointer"
                onMouseEnter={() => {
                  setActiveMegaCategory(cat.id);
                  setIsMegaMenuOpen(true);
                }}
              >
                <span className="hover:text-[#2B70C9] transition-colors flex items-center gap-1">
                  <span>{cat.title}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />
                </span>
              </div>
            ))}
          </nav>

          {/* LEFT: ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="جستجو"
              className="p-2.5 rounded-2xl hover:bg-[#302D2A]/5 text-[#302D2A] transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="علاقه‌مندی‌ها"
              className="p-2.5 rounded-2xl hover:bg-[#302D2A]/5 text-[#302D2A] transition-colors relative"
            >
              <Heart className="w-5 h-5" />
              {wishlistIds.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#D96C5F] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistIds.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="سبد خرید"
              className="px-3.5 py-2 rounded-2xl bg-[#F36A21] hover:bg-[#302D2A] text-[#F8F5EF] transition-colors flex items-center gap-2 relative shadow-xs"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline text-xs font-bold font-peyda">
                سبد خرید
              </span>
              {cartCount > 0 && (
                <span className="w-5 h-5 bg-[#F2E3A9] text-[#302D2A] text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* 3. MEGA MENU DROPDOWN */}
        {isMegaMenuOpen && activeMegaCategory && (
          <div
            className="hidden lg:block absolute top-full inset-x-0 bg-[#FFFFFF] border-b border-[#302D2A]/15 shadow-2xl py-8 px-8 z-50 animate-in fade-in duration-200"
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <div className="max-w-7xl mx-auto">
              {(() => {
                const megData =
                  MEGA_MENU_CATEGORIES.find(
                    (m) => m.id === activeMegaCategory,
                  ) || MEGA_MENU_CATEGORIES[0];
                return (
                  <div className="grid grid-cols-5 gap-8 text-right">
                    {/* COL 1: CATEGORY GROUPS */}
                    <div className="space-y-3 border-l border-[#302D2A]/10 pl-6">
                      <h4 className="font-peyda font-bold text-sm text-[#2B70C9] flex items-center gap-2">
                        <span>{megData.icon}</span>
                        <span>دسته گروه‌ها</span>
                      </h4>
                      <ul className="space-y-2 text-xs text-[#302D2A]/80 font-medium">
                        {megData.subcategories.slice(0, 4).map((sub, idx) => (
                          <li
                            key={idx}
                            className="hover:text-[#2B70C9] cursor-pointer transition-colors"
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* COL 2: SUBCATEGORIES */}
                    <div className="space-y-3 border-l border-[#302D2A]/10 pl-6">
                      <h4 className="font-peyda font-bold text-sm text-[#2B70C9]">
                        زیرمجموعه‌ها
                      </h4>
                      <ul className="space-y-2 text-xs text-[#302D2A]/80 font-medium">
                        {megData.subcategories.slice(3).map((sub, idx) => (
                          <li
                            key={idx}
                            className="hover:text-[#2B70C9] cursor-pointer transition-colors"
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* COL 3: AGE RANGES */}
                    <div className="space-y-3 border-l border-[#302D2A]/10 pl-6">
                      <h4 className="font-peyda font-bold text-sm text-[#2B70C9]">
                        تفکیک رده سنی
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {megData.ageRanges.map((age, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-[#F8F5EF] text-[11px] font-bold text-[#302D2A] hover:bg-[#2B70C9] hover:text-white cursor-pointer transition-colors"
                          >
                            {age}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* COL 4: POPULAR BRANDS */}
                    <div className="space-y-3 border-l border-[#302D2A]/10 pl-6">
                      <h4 className="font-peyda font-bold text-sm text-[#2B70C9]">
                        برندهای محبوب
                      </h4>
                      <ul className="space-y-2 text-xs text-[#302D2A]/80 font-medium">
                        {megData.brands.map((brand, idx) => (
                          <li
                            key={idx}
                            className="hover:text-[#2B70C9] cursor-pointer transition-colors flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2B70C9]" />
                            <span>{brand}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* COL 5: EDITORIAL PROMO PHOTO */}
                    <div className="space-y-3 bg-[#F8F5EF] p-4 rounded-2xl border border-[#302D2A]/10 text-center">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-2">
                        <img
                          src={megData.promoImage}
                          alt={megData.promoTitle}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h5 className="font-peyda font-bold text-xs text-[#302D2A]">
                        {megData.promoTitle}
                      </h5>
                      <a
                        href="#categories-section"
                        className="inline-block text-[11px] font-bold text-[#2B70C9] hover:underline"
                      >
                        مشاهده همه محصولات {megData.title} ←
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </header>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs lg:hidden flex justify-end">
          <div className="w-full max-w-xs bg-[#F8F5EF] text-[#302D2A] h-full p-6 space-y-6 overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#302D2A]/10 pb-4">
              <span className="font-peyda font-bold text-lg">منوی فروشگاه</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 text-right">
              {MEGA_MENU_CATEGORIES.map((cat) => (
                <div key={cat.id} className="space-y-2">
                  <div className="font-peyda font-bold text-sm text-[#2B70C9] flex items-center gap-2">
                    <span>{cat.icon}</span>
                    <span>{cat.title}</span>
                  </div>
                  <div className="pr-6 space-y-1 text-xs text-[#302D2A]/70">
                    {cat.subcategories.slice(0, 4).map((sub, i) => (
                      <div key={i} className="py-1">
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <a
                href="#brands-section"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 font-bold text-sm text-[#302D2A]"
              >
                برندها
              </a>
              <a
                href="#sale-section"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 font-bold text-sm text-[#D96C5F]"
              >
                تخفیف‌های ویژه
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= HERO SECTION (REFERENCE MATCH) ================= */}
      <section className="relative pt-8 md:pt-12 pb-16 md:pb-12 px-4 md:px-12 bg-[#FFFBF3] overflow-hidden min-h-[600px] md:min-h-[720px] flex flex-col justify-between">
        {/* Layer 1: Oversized Editorial Headline */}
        <div className="text-center relative z-10 select-none">
          <h1 className="text-[64px] sm:text-[96px] md:text-[140px] lg:text-[170px] font-black leading-[0.85] tracking-tight text-[#1E0001] opacity-95">
            دنیــــای کوچولوها
          </h1>
        </div>

        {/* Layer 2: Floating Organic Decorative Shapes */}
        {/* Yellow Flower Top Left */}
        <div className="absolute top-12 left-[10%] md:left-[15%] z-20 animate-pulse pointer-events-none">
          <FlowerIcon className="w-16 h-16 md:w-24 md:h-24" fill="#FFD500" />
        </div>
        {/* Green Flower Bottom Right */}
        <div className="absolute bottom-48 right-[25%] md:right-[25%] z-200 pointer-events-none">
          <FlowerIcon className="w-14 h-14 md:w-20 md:h-20" fill="#20C98A" />
        </div>

        {/* Layer 3: Central Cut-out Hero Product (Overlapping Headline) */}
        <div className="absolute bottom-[-400px] left-1/2 -translate-x-1/2 -translate-y-[48%] z-20 w-[650px] h-[650px]  pointer-events-none flex flex-col items-center justify-end">
          <div className="relative w-full h-full">
            <img
              src="/images/BABY/hero5.png"
              alt="صندلی نوزاد ارگونومیک"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>
          {/* Primary CTA Pill positioned cleanly over product base */}
        </div>

        {/* Layer 4: Supporting Text & Primary CTA (Bottom Right/Left Composition) */}
        <div className="relative z-30 mb-26  flex justify-between items-center gap-6 pt-4 md:pt-6">
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
                <img
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

      {/* 5. CATEGORY DISCOVERY - ASYMMETRIC GRID */}
      <section
        id="categories-section"
        className="py-16 px-4 sm:px-8 max-w-7xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div className="text-right">
            <span className="text-xs font-bold font-peyda text-[#2B70C9] tracking-wider uppercase">
              CATEGORY DISCOVERY
            </span>
            <h2 className="font-peyda font-extrabold text-3xl sm:text-4xl text-[#302D2A] mt-1">
              دسته‌بندی‌های پیشنهادی
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#302D2A]/70 font-medium max-w-md text-right">
            محصولات منتخب از برندهای بین‌المللی تفکیک‌شده بر اساس نیازهای واقعی
            رشد فرزند شما.
          </p>
        </div>

        {/* ASYMMETRIC GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* CARD 1: LARGE - CLOTHING (#F1C9BD) */}
          <a
            href="#shop-by-age"
            className="md:col-span-7 bg-[#F1C9BD]/40 hover:bg-[#F1C9BD]/70 rounded-[32px] p-6 sm:p-8 border border-[#302D2A]/10 transition-all duration-300 group flex flex-col justify-between min-h-[320px] relative overflow-hidden"
          >
            <div className="space-y-2 z-10 text-right max-w-xs">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/80 text-[#302D2A] inline-block">
                پرطرفدارترین
              </span>
              <h3 className="font-peyda font-extrabold text-2xl sm:text-3xl text-[#302D2A]">
                لباس کودک
              </h3>
              <p className="text-xs sm:text-sm text-[#302D2A]/80 font-medium">
                نرم، راحت، دوست‌داشتنی و تهیه شده از پنبه ارگانیک خالص.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 z-10">
              <span className="text-xs font-bold font-peyda text-[#2B70C9] group-hover:underline flex items-center gap-1">
                <span>مشاهده محصولات لباس</span>
                <ArrowLeft className="w-4 h-4" />
              </span>
            </div>

            <img
              src="/images/BABY/hero4.png"
              alt="Clothing"
              className="absolute -bottom-6 -left-6 w-56 sm:w-72 h-56 sm:h-72 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          {/* CARD 2: MEDIUM - TOYS (#F2E3A9) */}
          <a
            href="#shop-by-age"
            className="md:col-span-5 bg-[#F2E3A9]/50 hover:bg-[#F2E3A9]/80 rounded-[32px] p-6 sm:p-8 border border-[#302D2A]/10 transition-all duration-300 group flex flex-col justify-between min-h-[320px] relative overflow-hidden"
          >
            <div className="space-y-2 z-10 text-right">
              <h3 className="font-peyda font-extrabold text-2xl text-[#302D2A]">
                اسباب‌بازی و رشد
              </h3>
              <p className="text-xs text-[#302D2A]/80 font-medium">
                بازی‌های چوبی و آموزشی هوش مونته‌سوری.
              </p>
            </div>

            <div className="pt-6 z-10">
              <span className="text-xs font-bold font-peyda text-[#2B70C9] group-hover:underline flex items-center gap-1">
                <span>مشاهده اسباب‌بازی‌ها</span>
                <ArrowUpLeft className="w-4 h-4" />
              </span>
            </div>

            <img
              src="/images/BABY/Product-Play-Kit-2026-Coconut-01.webp"
              alt="Toys"
              className="absolute -bottom-4 -left-4 w-48 h-48 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          {/* CARD 3: SMALL - CARE (#D7E5E9) */}
          <a
            href="#shop-by-age"
            className="md:col-span-4 bg-[#D7E5E9]/60 hover:bg-[#D7E5E9]/90 rounded-[32px] p-6 border border-[#302D2A]/10 transition-all duration-300 group flex flex-col justify-between min-h-[260px] relative overflow-hidden"
          >
            <div className="space-y-1 z-10 text-right">
              <h3 className="font-peyda font-extrabold text-xl text-[#302D2A]">
                مراقبت و بهداشت
              </h3>
              <p className="text-xs text-[#302D2A]/80">
                محافظت از پوست حساس نوزاد.
              </p>
            </div>

            <span className="text-xs font-bold font-peyda text-[#2B70C9] z-10 flex items-center gap-1">
              <span>دیدن بهداشتی‌ها</span>
              <ArrowUpLeft className="w-3.5 h-3.5" />
            </span>

            <img
              src="/images/BABY/hero2.png"
              alt="Care"
              className="absolute -bottom-4 -left-4 w-40 h-40 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          {/* CARD 4: MEDIUM - FEEDING (#D5E1D0) */}
          <a
            href="#shop-by-age"
            className="md:col-span-4 bg-[#D5E1D0]/60 hover:bg-[#D5E1D0]/90 rounded-[32px] p-6 border border-[#302D2A]/10 transition-all duration-300 group flex flex-col justify-between min-h-[260px] relative overflow-hidden"
          >
            <div className="space-y-1 z-10 text-right">
              <h3 className="font-peyda font-extrabold text-xl text-[#302D2A]">
                تغذیه و شیشه
              </h3>
              <p className="text-xs text-[#302D2A]/80">
                ظروف نسوز سیلیکونی ارگونومیک.
              </p>
            </div>

            <span className="text-xs font-bold font-peyda text-[#2B70C9] z-10 flex items-center gap-1">
              <span>دیدن لوازم تغذیه</span>
              <ArrowUpLeft className="w-3.5 h-3.5" />
            </span>

            <img
              src="/images/BABY/hero1.png"
              alt="Feeding"
              className="absolute -bottom-4 -left-4 w-40 h-40 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </a>

          {/* CARD 5: SMALL - NURSERY (#E7E1DA) */}
          <a
            href="#shop-by-age"
            className="md:col-span-4 bg-[#E7E1DA]/70 hover:bg-[#E7E1DA] rounded-[32px] p-6 border border-[#302D2A]/10 transition-all duration-300 group flex flex-col justify-between min-h-[260px] relative overflow-hidden"
          >
            <div className="space-y-1 z-10 text-right">
              <h3 className="font-peyda font-extrabold text-xl text-[#302D2A]">
                اتاق کودک و گهواره
              </h3>
              <p className="text-xs text-[#302D2A]/80">
                طراحی مدرن و آرامش‌بخش.
              </p>
            </div>

            <span className="text-xs font-bold font-peyda text-[#2B70C9] z-10 flex items-center gap-1">
              <span>دیدن اتاق کودک</span>
              <ArrowUpLeft className="w-3.5 h-3.5" />
            </span>

            <img
              src="/images/BABY/hero3.png"
              alt="Nursery"
              className="absolute -bottom-4 -left-4 w-40 h-40 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </a>
        </div>
      </section>

      {/* 6. PROMOTIONAL / SALE SECTION */}
      <section
        id="sale-section"
        className="py-16 bg-[#FFFFFF] border-y border-[#302D2A]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* SECTION HEADER */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4 text-right">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#D96C5F]/15 text-[#D96C5F] text-xs font-bold font-peyda mb-2">
                OFFERS & DISCOUNTS
              </span>
              <h2 className="font-peyda font-extrabold text-3xl sm:text-4xl text-[#302D2A]">
                چیزهای دوست‌داشتنی، با قیمت دوست‌داشتنی‌تر
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#302D2A]/70 font-medium max-w-sm">
              منتخب محصولات محبوب با تخفیف ویژه برای خرید به‌صرفه و اقتصادی
              والدین.
            </p>
          </div>

          {/* PRODUCT CARDS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {saleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={toggleWishlist}
                onAddToCart={addToCart}
                onOpenDetail={setSelectedProductForDetail}
                formatPrice={formatPrice}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. BEST SELLERS */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10 text-right">
          <div>
            <span className="text-xs font-bold font-peyda text-[#2B70C9] uppercase tracking-wider">
              BEST SELLERS
            </span>
            <h2 className="font-peyda font-extrabold text-3xl sm:text-4xl text-[#302D2A] mt-1">
              محبوب‌ترین انتخاب‌ها
            </h2>
            <p className="text-xs sm:text-sm text-[#302D2A]/70 mt-1">
              چیزهایی که والدین بیشتر از همه دوست داشته‌اند.
            </p>
          </div>

          <a
            href="#categories-section"
            className="text-xs sm:text-sm font-bold font-peyda text-[#2B70C9] hover:underline flex items-center gap-1"
          >
            <span>مشاهده همه</span>
            <ArrowUpLeft className="w-4 h-4" />
          </a>
        </div>

        {/* BEST SELLERS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestSellerProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={toggleWishlist}
              onAddToCart={addToCart}
              onOpenDetail={setSelectedProductForDetail}
              formatPrice={formatPrice}
            />
          ))}
        </div>
      </section>

      {/* 9. SHOP BY AGE */}
      <section
        id="shop-by-age"
        className="py-16 bg-[#F2E3A9]/30 border-y border-[#302D2A]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold font-peyda text-[#2B70C9] uppercase tracking-wider">
              AGE BASED DISCOVERY
            </span>
            <h2 className="font-peyda font-extrabold text-3xl sm:text-4xl text-[#302D2A]">
              برای هر مرحله از رشد
            </h2>
            <p className="text-xs sm:text-sm text-[#302D2A]/70">
              انتخاب سریع و دقیق محصولات بر اساس سن و نیازمندی‌های حرکتی و
              تغذیه‌ای کودک.
            </p>
          </div>

          {/* AGE NAVIGATION TABS */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
            {AGE_CATEGORIES.map((cat) => {
              const isSelected = selectedAgeId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedAgeId(cat.id)}
                  className={`shrink-0 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold font-peyda transition-all duration-300 ${
                    isSelected
                      ? "bg-[#2B70C9] text-[#F8F5EF] shadow-md scale-105"
                      : "bg-[#FFFFFF] text-[#302D2A] border border-[#302D2A]/10 hover:bg-[#FFFFFF]/80"
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* SELECTED AGE SUMMARY & PRODUCTS */}
          <div className="bg-[#FFFFFF] rounded-[32px] p-6 sm:p-8 border border-[#302D2A]/10 space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-[#302D2A]/10 pb-6 text-right">
              <img
                src={activeAgeCategoryObj.image}
                alt={activeAgeCategoryObj.title}
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl bg-[#F8F5EF] p-2"
              />
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#2B70C9] font-peyda">
                  {activeAgeCategoryObj.subhead}
                </span>
                <h3 className="font-peyda font-bold text-xl sm:text-2xl text-[#302D2A]">
                  {activeAgeCategoryObj.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#302D2A]/80 max-w-xl">
                  {activeAgeCategoryObj.description}
                </p>
              </div>
            </div>

            {/* AGE FILTERED PRODUCTS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {ageFilteredProducts.length === 0 ? (
                <p className="col-span-full text-center text-xs text-[#302D2A]/60 py-8">
                  محصولات این رده سنی به زودی اضافه خواهند شد.
                </p>
              ) : (
                ageFilteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlistIds.includes(product.id)}
                    onToggleWishlist={toggleWishlist}
                    onAddToCart={addToCart}
                    onOpenDetail={setSelectedProductForDetail}
                    formatPrice={formatPrice}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 10. EDITORIAL / LIFESTYLE STORY */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-[#302D2A] text-[#F8F5EF] rounded-[40px] p-8 sm:p-14 relative overflow-hidden">
          {/* DECORATIVE LIGHT BLUR */}
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#F1C9BD] rounded-full blur-[140px] opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* COPY (6 COLS) */}
            <div className="lg:col-span-6 space-y-6 text-right">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#2B70C9] text-[#F8F5EF] text-xs font-bold font-peyda border border-[#F2E3A9]/30">
                EDITORIAL & LIFESTYLE STORY
              </span>

              <h2 className="font-peyda font-extrabold text-3xl sm:text-5xl text-[#F8F5EF] ">
                کوچک‌ترین لحظه‌ها، <br />
                <span className="text-[#F2E3A9]">
                  بزرگ‌ترین خاطره‌ها هستند.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#F8F5EF]/80 font-normal leading-relaxed">
                محصولاتی را انتخاب کرده‌ایم که در روزهای واقعی زندگی، کنار شما و
                فرزندتان باشند. کیفیت بی‌نظیر، استانداردهای سلامتی اروپا و
                زیبایی ماندگار اسکاندیناوی.
              </p>

              <div>
                <a
                  href="#categories-section"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#F2E3A9] hover:bg-[#2B70C9] text-[#302D2A] hover:text-white font-peyda font-bold text-sm rounded-2xl transition-all duration-300"
                >
                  <span>دنیای کوچولوها را ببینید</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* EDITORIAL IMAGES (6 COLS) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#F8F5EF]/10 p-2">
                <img
                  src="/images/BABY/BearRobe_Fog_a6ebae70-1475-4668-8b82-9b96cc6412de.webp"
                  alt="Editorial"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#F8F5EF]/10 p-2 mt-6">
                <img
                  src="/images/BABY/The-Play-Tent-A1.webp"
                  alt="Editorial 2"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. NEW ARRIVALS */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10 text-right">
          <div>
            <span className="text-xs font-bold font-peyda text-[#2B70C9] uppercase tracking-wider">
              NEW COLLECTION
            </span>
            <h2 className="font-peyda font-extrabold text-3xl sm:text-4xl text-[#302D2A] mt-1 flex items-center gap-2">
              <span>تازه رسیده‌ها</span>
              <span className="text-xs bg-[#D7E5E9] text-[#302D2A] px-2.5 py-0.5 rounded-full font-mono">
                NEW
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {newArrivalProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={toggleWishlist}
              onAddToCart={addToCart}
              onOpenDetail={setSelectedProductForDetail}
              formatPrice={formatPrice}
            />
          ))}
        </div>
      </section>

      {/* 12. BRANDS SECTION */}
      <section
        id="brands-section"
        className="py-20 bg-[#FFFFFF] border-y border-[#302D2A]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold font-peyda text-[#2B70C9] uppercase tracking-wider">
              CURATED BRANDS
            </span>
            <h2 className="font-peyda font-extrabold text-3xl sm:text-4xl text-[#302D2A]">
              برندهایی که انتخاب کرده‌ایم
            </h2>
            <p className="text-xs sm:text-sm text-[#302D2A]/70">
              تامین مستقیم بدون واسطه از معتبرترین برندهای جهانی سیسمونی و پوشاک
              کودک.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* BRAND CARDS LIST (7 COLS) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BRANDS_LIST.map((brand) => {
                const isSelected = selectedBrandHover.id === brand.id;
                return (
                  <div
                    key={brand.id}
                    onClick={() => setSelectedBrandHover(brand)}
                    className={`p-5 rounded-3xl border text-right cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? "bg-[#2B70C9] text-[#F8F5EF] border-[#2B70C9] shadow-md scale-[1.02]"
                        : "bg-[#F8F5EF] text-[#302D2A] border-[#302D2A]/10 hover:border-[#302D2A]/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-peyda font-extrabold text-lg">
                        {brand.name}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-[#F2E3A9] text-[#302D2A]"
                            : "bg-[#FFFFFF] text-[#2B70C9]"
                        }`}
                      >
                        {brand.origin}
                      </span>
                    </div>
                    <p
                      className={`text-xs line-clamp-2 font-medium ${
                        isSelected ? "text-[#F8F5EF]/90" : "text-[#302D2A]/70"
                      }`}
                    >
                      {brand.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* SELECTED BRAND FEATURE CARD (5 COLS) */}
            <div className="lg:col-span-5 bg-[#F8F5EF] rounded-[36px] p-6 border border-[#302D2A]/10 text-center space-y-4">
              <span className="text-xs font-bold text-[#2B70C9] font-peyda">
                کالکشن منتخب {selectedBrandHover.name}
              </span>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white p-2 border border-[#302D2A]/10">
                <img
                  src={selectedBrandHover.image}
                  alt={selectedBrandHover.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="font-peyda font-extrabold text-xl text-[#302D2A]">
                {selectedBrandHover.name}
              </h4>
              <p className="text-xs text-[#302D2A]/80 leading-relaxed font-medium">
                {selectedBrandHover.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. CURATED COLLECTION / NURSERY BUNDLE */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F1C9BD]/30 rounded-[40px] p-8 sm:p-12 border border-[#302D2A]/10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold font-peyda text-[#2B70C9] uppercase tracking-wider">
              NURSERY STARTER BUNDLE
            </span>
            <h2 className="font-peyda font-extrabold text-3xl sm:text-4xl text-[#302D2A]">
              {CURATED_NURSERY_BUNDLE.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#302D2A]/80 font-medium">
              {CURATED_NURSERY_BUNDLE.subtitle}
            </p>
          </div>

          {/* BUNDLE ITEMS ROW */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
            {CURATED_NURSERY_BUNDLE.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-3 text-center border border-[#302D2A]/10 space-y-2"
              >
                <div className="aspect-square  rounded-xl bg-[#F8F5EF]  overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] font-bold text-[#2B70C9] block">
                  {item.brand}
                </span>
                <h5 className="font-bold text-xs text-[#302D2A] line-clamp-1">
                  {item.title}
                </h5>
              </div>
            ))}
          </div>

          {/* BUNDLE PRICE & CTA */}
          <div className="bg-white rounded-3xl p-6 border border-[#302D2A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-right space-y-1">
              <span className="text-xs text-[#D96C5F] font-bold font-peyda block">
                🔥 {CURATED_NURSERY_BUNDLE.discountAmount}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-peyda font-extrabold text-2xl text-[#302D2A]">
                  {formatPrice(CURATED_NURSERY_BUNDLE.totalPrice)} تومان
                </span>
                <span className="text-xs text-[#302D2A]/40 line-through">
                  {formatPrice(CURATED_NURSERY_BUNDLE.originalPrice)}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                showToast("پک کامل سیسمونی به سبد خرید اضافه شد ♡");
                addToCart(BABY_PRODUCTS[0]);
                addToCart(BABY_PRODUCTS[2]);
              }}
              className="px-8 py-4 bg-[#2B70C9] hover:bg-[#302D2A] text-[#F8F5EF] font-peyda font-bold text-sm rounded-2xl transition-colors shadow-md flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>افزودن کامل پک به سبد خرید</span>
            </button>
          </div>
        </div>
      </section>

      {/* 14. TRUST SECTION */}
      <section className="py-16 bg-[#FFFFFF] border-t border-[#302D2A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#D7E5E9] text-[#302D2A] flex items-center justify-center mx-auto text-xl">
              🛡️
            </div>
            <h3 className="font-peyda font-bold text-sm text-[#302D2A]">
              ضمانت اصالت کالا
            </h3>
            <p className="text-xs text-[#302D2A]/60">۱۰۰٪ اورجینال و مستقیم</p>
          </div>

          <div className="p-4 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#D5E1D0] text-[#302D2A] flex items-center justify-center mx-auto text-xl">
              🚀
            </div>
            <h3 className="font-peyda font-bold text-sm text-[#302D2A]">
              ارسال سریع
            </h3>
            <p className="text-xs text-[#302D2A]/60">تحویل اکسپرس سراسری</p>
          </div>

          <div className="p-4 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#F2E3A9] text-[#302D2A] flex items-center justify-center mx-auto text-xl">
              💳
            </div>
            <h3 className="font-peyda font-bold text-sm text-[#302D2A]">
              پرداخت امن
            </h3>
            <p className="text-xs text-[#302D2A]/60">درگاه‌های بانکی معتبر</p>
          </div>

          <div className="p-4 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#F1C9BD] text-[#302D2A] flex items-center justify-center mx-auto text-xl">
              🎧
            </div>
            <h3 className="font-peyda font-bold text-sm text-[#302D2A]">
              پشتیبانی تخصصی
            </h3>
            <p className="text-xs text-[#302D2A]/60">
              مشاوره قبل و بعد از خرید
            </p>
          </div>
        </div>
      </section>

      {/* 15. FINAL CTA */}
      <section className="py-20 bg-[#2B70C9] text-[#F8F5EF] text-center relative overflow-hidden">
        {/* ORGANIC PEBBLE MOTIF */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F2E3A9]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#F2E3A9] text-xs font-bold font-peyda">
            SWEET SHOPPING FOR YOUR LITTLE ONES
          </span>
          <h2 className="font-peyda font-extrabold  text-3xl  sm:text-5xl text- text-[#F8F5EF]">
            برای کوچولوی شما، <br />
            چیزهای خوب کم نیستند.
          </h2>
          <p className="text-sm sm:text-base text-[#F8F5EF]/80 font-medium">
            انتخاب‌های دوست‌داشتنی را پیدا کنید.
          </p>
          <div>
            <a
              href="#categories-section"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#F2E3A9] hover:bg-white text-[#302D2A] font-peyda font-bold text-base rounded-2xl transition-all duration-300 shadow-lg"
            >
              <span>شروع خرید</span>
              <ArrowUpLeft className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 16. FOOTER */}
      <footer className="bg-[#302D2A] text-[#F8F5EF] py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 text-right">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-[#2B70C9] text-white font-bold flex items-center justify-center">
                👶
              </span>
              <span className="font-peyda font-extrabold text-xl text-white">
                دنیای کوچولوها
              </span>
            </div>
            <p className="text-xs text-[#F8F5EF]/70 leading-relaxed font-normal">
              فروشگاه آنلاین تخصصی چندبرند سیسمونی، پوشاک و اسباب‌بازی‌های
              ارگانیک کودک با تضمین اصالت و بهترین کیفیت جهانی.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-peyda font-bold text-sm text-[#F2E3A9]">
              دسته‌بندی‌های اصلی
            </h4>
            <ul className="space-y-2 text-xs text-[#F8F5EF]/80">
              <li>
                <a
                  href="#categories-section"
                  className="hover:text-white transition-colors"
                >
                  لباس و سرهمی نوزاد
                </a>
              </li>
              <li>
                <a
                  href="#categories-section"
                  className="hover:text-white transition-colors"
                >
                  مراقبت و بهداشت کودک
                </a>
              </li>
              <li>
                <a
                  href="#categories-section"
                  className="hover:text-white transition-colors"
                >
                  ظروف و تغذیه سیلیکونی
                </a>
              </li>
              <li>
                <a
                  href="#categories-section"
                  className="hover:text-white transition-colors"
                >
                  اسباب‌بازی‌های چوبی مونته‌سوری
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-peyda font-bold text-sm text-[#F2E3A9]">
              برندهای مطرح
            </h4>
            <ul className="space-y-2 text-xs text-[#F8F5EF]/80">
              <li>Liewood • Mushie</li>
              <li>Konges Sløjd • Stokke</li>
              <li>PlanToys • BIBS</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="space-y-3">
            <h4 className="font-peyda font-bold text-sm text-[#F2E3A9]">
              عضو دنیای کوچولوها شوید
            </h4>
            <p className="text-xs text-[#F8F5EF]/70 leading-relaxed">
              با ثبت ایمیل خود از کد تخفیف‌های ویژه و ورود کالکشن‌های جدید مطلع
              شوید.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <input
                type="email"
                placeholder="ایمیل شما"
                className="bg-[#FFFFFF]/10 border border-white/20 text-xs px-3 py-2.5 rounded-xl text-white focus:outline-none flex-1 text-right"
              />
              <button className="px-4 py-2.5 bg-[#2B70C9] hover:bg-[#F2E3A9] hover:text-[#302D2A] text-white text-xs font-bold rounded-xl transition-colors">
                عضویت
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 mt-10 border-t border-white/10 text-center text-xs text-[#F8F5EF]/50 font-mono">
          © 2026 BABY & KIDS STORE. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
          <div className="w-full max-w-md bg-[#F8F5EF] text-[#302D2A] h-full flex flex-col p-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#302D2A]/10 pb-4">
              <h3 className="font-peyda font-bold text-lg text-[#302D2A] flex items-center gap-2">
                <span>سبد خرید</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#2B70C9] text-white font-mono">
                  {cartCount}
                </span>
              </h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-[#302D2A]/5 text-[#302D2A]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* CART ITEMS LIST */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <ShoppingBag className="w-12 h-12 text-[#302D2A]/20 mx-auto" />
                  <p className="text-sm font-medium text-[#302D2A]/60">
                    سبد خرید شما خالی است
                  </p>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-3 bg-[#FFFFFF] rounded-2xl border border-[#302D2A]/10 items-center"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain rounded-xl bg-[#F8F5EF] p-1"
                    />
                    <div className="flex-1 space-y-1 text-right">
                      <h4 className="font-bold text-xs text-[#302D2A] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-[#302D2A]/60">
                        {item.color} • سایز {item.size}
                      </p>
                      <p className="font-bold text-xs text-[#2B70C9]">
                        {formatPrice(item.product.price)} تومان
                      </p>

                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => updateCartQuantity(idx, -1)}
                          className="w-6 h-6 rounded-md bg-[#F8F5EF] border border-[#302D2A]/20 text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(idx, 1)}
                          className="w-6 h-6 rounded-md bg-[#F8F5EF] border border-[#302D2A]/20 text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(idx)}
                      className="p-1.5 text-[#302D2A]/40 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* CART FOOTER */}
            {cartItems.length > 0 && (
              <div className="border-t border-[#302D2A]/10 pt-4 space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span>مبلغ قابل پرداخت:</span>
                  <span className="text-lg text-[#2B70C9]">
                    {formatPrice(cartTotal)} تومان
                  </span>
                </div>
                <button
                  onClick={() => {
                    alert("ثبت سفارش با موفقیت انجام شد!");
                    setCartItems([]);
                    setIsCartOpen(false);
                  }}
                  className="w-full py-3.5 bg-[#2B70C9] text-white font-peyda font-bold text-sm rounded-xl hover:bg-[#302D2A] transition-colors"
                >
                  تکمیل و پرداخت نهایی
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* WISHLIST DRAWER */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
          <div className="w-full max-w-md bg-[#F8F5EF] text-[#302D2A] h-full flex flex-col p-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#302D2A]/10 pb-4">
              <h3 className="font-peyda font-bold text-lg text-[#302D2A] flex items-center gap-2">
                <span>لیست علاقه‌مندی‌ها</span>
                <Heart className="w-4 h-4 text-[#D96C5F] fill-[#D96C5F]" />
              </h3>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="p-2 rounded-full hover:bg-[#302D2A]/5 text-[#302D2A]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {wishlistIds.length === 0 ? (
                <p className="text-center text-sm text-[#302D2A]/60 py-12">
                  هیچ آیتمی در لیست علاقه‌مندی نیست
                </p>
              ) : (
                BABY_PRODUCTS.filter((p) => wishlistIds.includes(p.id)).map(
                  (product) => (
                    <div
                      key={product.id}
                      className="flex gap-4 p-3 bg-white rounded-2xl border border-[#302D2A]/10 items-center"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-16 h-16 object-contain bg-[#F8F5EF] rounded-xl p-1"
                      />
                      <div className="flex-1 text-right space-y-1">
                        <h4 className="font-bold text-xs text-[#302D2A]">
                          {product.name}
                        </h4>
                        <p className="font-bold text-xs text-[#2B70C9]">
                          {formatPrice(product.price)} تومان
                        </p>
                        <button
                          onClick={() => {
                            addToCart(product);
                            toggleWishlist(product.id);
                          }}
                          className="text-[11px] font-bold text-[#2B70C9] underline"
                        >
                          انتقال به سبد خرید
                        </button>
                      </div>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="p-1.5 text-[#302D2A]/40 hover:text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ),
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* SEARCH DRAWER */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm p-4 sm:p-8 flex justify-center items-start pt-20">
          <div className="w-full max-w-2xl bg-[#F8F5EF] text-[#302D2A] rounded-3xl p-6 shadow-2xl relative space-y-4">
            <div className="flex items-center justify-between border-b border-[#302D2A]/10 pb-4">
              <div className="flex items-center gap-2 flex-1">
                <Search className="w-5 h-5 text-[#302D2A]/40" />
                <input
                  type="text"
                  placeholder="جستجوی نام محصول، برند، یا سن..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none text-sm font-medium focus:outline-none text-right"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 rounded-full hover:bg-[#302D2A]/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto space-y-3">
              {searchQuery && searchResults.length === 0 && (
                <p className="text-center text-sm text-[#302D2A]/60 py-8">
                  محصولی با این مشخصات یافت نشد
                </p>
              )}

              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setSelectedProductForDetail(product);
                    setIsSearchOpen(false);
                  }}
                  className="flex items-center gap-4 p-3 hover:bg-white rounded-2xl cursor-pointer transition-colors"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-12 h-12 object-contain bg-white rounded-xl p-1"
                  />
                  <div className="flex-1 text-right">
                    <span className="text-[10px] text-[#2B70C9] font-bold block">
                      {product.brand}
                    </span>
                    <h4 className="font-bold text-xs text-[#302D2A]">
                      {product.name}
                    </h4>
                    <span className="text-xs font-bold text-[#302D2A]">
                      {formatPrice(product.price)} تومان
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PRODUCT DETAIL MODAL */}
      {selectedProductForDetail && (
        <ProductDetailModal
          product={selectedProductForDetail}
          isWishlisted={wishlistIds.includes(selectedProductForDetail.id)}
          onClose={() => setSelectedProductForDetail(null)}
          onToggleWishlist={toggleWishlist}
          onAddToCart={addToCart}
          formatPrice={formatPrice}
        />
      )}
    </div>
  );
}

// ----------------------------------------------------------------------
// REUSABLE NORMALIZED PRODUCT CARD COMPONENT
// Consistent crop, soft background tint, wishlist button, brand name,
// title, rating, pricing, original price, discount %, add to cart CTA.
// ----------------------------------------------------------------------
interface ProductCardProps {
  product: BabyProduct;
  isWishlisted: boolean;
  onToggleWishlist: (id: string, e?: React.MouseEvent) => void;
  onAddToCart: (p: BabyProduct, colorName?: string) => void;
  onOpenDetail: (p: BabyProduct) => void;
  formatPrice: (price: number) => string;
}

function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onOpenDetail,
  formatPrice,
}: ProductCardProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  return (
    <div className="group flex flex-col bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#302D2A]/10 hover:border-[#2B70C9]/50 transition-all duration-300 relative text-right">
      {/* SALE BADGE */}
      {product.discountPercent && (
        <span className="absolute top-3 right-3 z-20 bg-[#D96C5F] text-white text-[10px] font-bold font-peyda px-2.5 py-1 rounded-full pointer-events-none">
          {product.discountPercent}٪ تخفیف
        </span>
      )}

      {/* WISHLIST BUTTON */}
      <button
        onClick={(e) => onToggleWishlist(product.id, e)}
        aria-label="افزودن به علاقه‌مندی"
        className="absolute top-3 left-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110 shadow-xs"
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            isWishlisted ? "text-[#D96C5F] fill-[#D96C5F]" : "text-[#302D2A]"
          }`}
        />
      </button>

      {/* IMAGE CONTAINER WITH BACKGROUND TINT NORMALIZATION */}
      <div
        onClick={() => onOpenDetail(product)}
        className="w-full aspect-[4/5] relative overflow-hidden p-4 group/img cursor-pointer transition-colors"
        style={{ backgroundColor: product.bgTint || "#F8F5EF" }}
      >
        <img
          src={product.images[currentImgIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full accept-[4/5] object-cover rounded-2xl transition-transform duration-500 group-hover/img:scale-105"
        />

        {/* HOVER QUICK ACTION CTA */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="absolute inset-x-3 bottom-3 z-20 py-2.5 bg-[#2B70C9] hover:bg-[#302D2A] text-white text-xs font-bold font-peyda rounded-xl opacity-0 group-hover/img:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/img:translate-y-0"
        >
          افزودن سریع به سبد
        </button>
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="p-4 flex flex-col justify-between flex-1 space-y-2">
        <div
          onClick={() => onOpenDetail(product)}
          className="space-y-1 cursor-pointer"
        >
          <span className="text-[10px] font-bold font-mono uppercase text-[#302D2A]/50 tracking-wider block">
            {product.brand}
          </span>
          <h3 className="font-bold text-xs sm:text-sm text-[#302D2A] line-clamp-1 hover:text-[#2B70C9] transition-colors">
            {product.name}
          </h3>
        </div>

        {/* RATING */}
        <div className="flex items-center gap-1 text-[11px] text-[#302D2A]/70">
          <Star className="w-3.5 h-3.5 text-[#F2E3A9] fill-[#F2E3A9]" />
          <span className="font-bold">{product.rating}</span>
          <span className="text-[#302D2A]/40">({product.reviewCount})</span>
        </div>

        {/* PRICE & DISCOUNT */}
        <div className="flex items-baseline justify-between pt-1 border-t border-[#302D2A]/5">
          <div className="flex flex-col">
            <span className="font-bold text-xs sm:text-sm text-[#302D2A]">
              {formatPrice(product.price)}{" "}
              <span className="text-[10px] font-normal text-[#302D2A]/60">
                تومان
              </span>
            </span>
            {product.originalPrice && (
              <span className="text-[11px] text-[#302D2A]/40 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <button
            onClick={() => onOpenDetail(product)}
            className="text-[11px] font-bold text-[#2B70C9] hover:underline"
          >
            جزئیات
          </button>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// PRODUCT DETAIL MODAL COMPONENT
// ----------------------------------------------------------------------
interface ProductDetailModalProps {
  product: BabyProduct;
  isWishlisted: boolean;
  onClose: () => void;
  onToggleWishlist: (id: string, e?: React.MouseEvent) => void;
  onAddToCart: (
    p: BabyProduct,
    colorName?: string,
    sizeName?: string,
    quantity?: number,
  ) => void;
  formatPrice: (price: number) => string;
}

function ProductDetailModal({
  product,
  isWishlisted,
  onClose,
  onToggleWishlist,
  onAddToCart,
  formatPrice,
}: ProductDetailModalProps) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors[0] ? product.colors[0].name : "تک رنگ",
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#fff] text-[#302D2A] w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[32px] p-5 sm:p-8 shadow-2xl relative border border-[#302D2A]/10 text-right space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 z-30 p-2.5 rounded-full bg-[#302D2A]/5 hover:bg-[#302D2A] hover:text-white transition-colors"
          aria-label="بستن"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">
          {/* LEFT: IMAGE GALLERY (6 COLS) */}
          <div className="md:col-span-6 space-y-3">
            <div
              className="w-full aspect-square rounded-3xl overflow-hidden p-6 relative border border-[#302D2A]/10"
              style={{ backgroundColor: product.bgTint || "#FFFFFF" }}
            >
              <img
                src={product.images[selectedImgIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain"
              />

              {/* WISHLIST BUTTON */}
              <button
                onClick={(e) => onToggleWishlist(product.id, e)}
                className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-md transition-transform hover:scale-110"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted
                      ? "text-[#D96C5F] fill-[#D96C5F]"
                      : "text-[#302D2A]"
                  }`}
                />
              </button>
            </div>

            {/* THUMBNAILS */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  className={`aspect-square rounded-2xl overflow-hidden bg-white p-1 border-2 transition-all ${
                    selectedImgIndex === idx
                      ? "border-[#2B70C9] scale-105 shadow-md"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`نمای ${idx + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: SPECS & BUY (6 COLS) */}
          <div className="md:col-span-6 space-y-5">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase text-[#2B70C9] tracking-wider">
                {product.brand}
              </span>
              <h2 className="font-peyda font-extrabold text-xl sm:text-2xl text-[#302D2A] leading-snug">
                {product.name}
              </h2>
            </div>

            {/* PRICE & DISCOUNT */}
            <div className="flex items-baseline gap-3 p-3.5 bg-white rounded-2xl border border-[#302D2A]/10">
              <span className="font-peyda font-extrabold text-2xl text-[#302D2A]">
                {formatPrice(product.price)}{" "}
                <span className="text-xs font-medium text-[#302D2A]/70">
                  تومان
                </span>
              </span>

              {product.originalPrice && (
                <span className="text-xs text-[#302D2A]/40 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* DESCRIPTION */}
            <p className="text-xs sm:text-sm text-[#302D2A]/80 leading-relaxed font-medium">
              {product.description}
            </p>

            {product.material && (
              <div className="text-xs bg-[#D5E1D0]/40 p-3 rounded-xl text-[#302D2A] font-medium">
                🌱 <span className="font-bold">جنس و متریال:</span>{" "}
                {product.material}
              </div>
            )}

            {/* QUANTITY & ADD TO CART CTA */}
            <div className="space-y-3 pt-3 border-t border-[#302D2A]/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#302D2A]">تعداد:</span>
                <div className="flex items-center border border-[#302D2A]/20 rounded-xl bg-white p-1">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="w-8 h-8 rounded-lg hover:bg-[#302D2A]/5 font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-8 h-8 rounded-lg hover:bg-[#302D2A]/5 font-bold text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  onAddToCart(product, selectedColor, "استاندارد", quantity);
                  onClose();
                }}
                className="w-full py-4 bg-[#2B70C9] hover:bg-[#302D2A] text-white font-peyda font-bold text-sm rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>
                  افزودن به سبد خرید ({formatPrice(product.price * quantity)}{" "}
                  تومان)
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
