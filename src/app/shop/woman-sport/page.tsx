'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  WOMAN_SPORT_PRODUCTS,
  MOOD_OPTIONS,
  COLOR_FILTER_OPTIONS,
  STYLE_OPTIONS,
  BRAND_ITEMS,
  COMMUNITY_POSTS,
  WomanSportProduct,
  MoodOption,
  ColorFilterOption
} from '@/data/woman-sport';
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
  Camera,
  ArrowRight
} from 'lucide-react';

export default function WomanSportLandingPage() {
  // Navigation & Drawers State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // E-commerce Cart & Wishlist State
  const [cartItems, setCartItems] = useState<{ product: WomanSportProduct; color: string; size: string; quantity: number }[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['ws-01', 'ws-04']);

  // Dynamic Interactive Features State
  const [activeMood, setActiveMood] = useState<MoodOption>(MOOD_OPTIONS[0]);
  const [activeColorFilter, setActiveColorFilter] = useState<ColorFilterOption | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeStyle, setActiveStyle] = useState<string>('all');
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(BRAND_ITEMS[0].id);

  // Detail Modal State
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<WomanSportProduct | null>(null);

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart operations
  const addToCart = (product: WomanSportProduct, colorName?: string, sizeName?: string, quantity: number = 1) => {
    const chosenColor = colorName || product.colors[0].name;
    const chosenSize = sizeName || product.sizes[0] || 'M';

    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.color === chosenColor && item.size === chosenSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, color: chosenColor, size: chosenSize, quantity: quantity }];
    });
    showToast(`«${product.name}» به سبد خرید اضافه شد ♡`);
  };

  const removeFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const updateCartQuantity = (index: number, delta: number) => {
    setCartItems(prev => {
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
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cartItems]);

  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  // Wishlist toggle
  const toggleWishlist = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlistIds(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('از لیست علاقه‌مندی‌ها حذف شد');
        return prev.filter(id => id !== productId);
      } else {
        showToast('به لیست علاقه‌مندی‌ها اضافه شد ♡');
        return [...prev, productId];
      }
    });
  };

  // Filtered Products
  const moodFilteredProducts = useMemo(() => {
    return WOMAN_SPORT_PRODUCTS.filter(p => p.moodTag === activeMood.id || p.isTrending);
  }, [activeMood]);

  const colorFilteredProducts = useMemo(() => {
    if (!activeColorFilter) return WOMAN_SPORT_PRODUCTS;
    return WOMAN_SPORT_PRODUCTS.filter(p => p.colorTag === activeColorFilter.id);
  }, [activeColorFilter]);

  const categoryFilteredProducts = useMemo(() => {
    if (activeCategory === 'all') return WOMAN_SPORT_PRODUCTS;
    return WOMAN_SPORT_PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const styleFilteredProducts = useMemo(() => {
    if (activeStyle === 'all') return WOMAN_SPORT_PRODUCTS;
    return WOMAN_SPORT_PRODUCTS.filter(p => p.styleTag === activeStyle);
  }, [activeStyle]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return WOMAN_SPORT_PRODUCTS.filter(
      p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const formatPrice = (price: number) => {
    return price.toLocaleString('fa-IR');
  };

  return (
    <div className="min-h-screen bg-[#FFFDFC] text-[#291A2D] font-vazir dir-rtl selection:bg-[#FF6FAE] selection:text-white relative overflow-x-hidden" dir="rtl">

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#291A2D] text-[#FFFDFC] px-6 py-3 rounded-full text-sm font-medium border border-[#FF6FAE]/30 transition-all duration-300 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FF6FAE] animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* FLOATING GLASS HEADER */}
      <header className="fixed top-4 inset-x-0 z-40 px-4 sm:px-8 max-w-7xl mx-auto pointer-events-none">
        <div className="pointer-events-auto bg-[#FFFDFC]/85 backdrop-blur-md border border-[#291A2D]/10 rounded-full px-5 py-3 flex items-center justify-between transition-all duration-300">

          {/* LOGO */}
          <Link href="/shop/woman-sport" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-[#FF6FAE] text-white font-estedad font-bold flex items-center justify-center text-sm transition-transform group-hover:scale-105">
              G
            </span>
            <div className="flex flex-col">
              <span className="font-estedad font-bold text-lg leading-none tracking-tight text-[#291A2D]">
                GIRLY SPORT
              </span>
              <span className="text-[10px] text-[#291A2D]/60 tracking-wider font-mono">
                WOMEN'S CASUAL
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#291A2D]">
            <a href="#new-arrivals" className="hover:text-[#FF6FAE] transition-colors">
              محصولات
            </a>
            <a href="#mood-section" className="hover:text-[#FF6FAE] transition-colors flex items-center gap-1">
              <span>انتخاب مود</span>
              <span className="text-xs bg-[#FFEBF3] text-[#FF6FAE] px-2 py-0.5 rounded-full font-bold">HOT</span>
            </a>
            <a href="#color-section" className="hover:text-[#FF6FAE] transition-colors">
              رنگ‌ها
            </a>
            <a href="#styles-section" className="hover:text-[#FF6FAE] transition-colors">
              استایل‌ها
            </a>
            <a href="#brands-section" className="hover:text-[#FF6FAE] transition-colors">
              برندها
            </a>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="جستجو"
              className="p-2 rounded-full hover:bg-[#291A2D]/5 text-[#291A2D] transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="علاقه‌مندی‌ها"
              className="p-2 rounded-full hover:bg-[#291A2D]/5 text-[#291A2D] transition-colors relative"
            >
              <Heart className="w-5 h-5" />
              {wishlistIds.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#FF6FAE] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistIds.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="سبد خرید"
              className="p-2 rounded-full bg-[#291A2D] text-[#FFFDFC] hover:bg-[#FF6FAE] transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF6FAE] text-white text-xs font-bold rounded-full border-2 border-[#FFFDFC] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* HERO / FASHION CAMPAIGN */}
      <section className="relative pt-28 pb-16 md:pt-24 md:pb-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* HERO TEXT & CTA */}
          <div className="lg:col-span-5 space-y-6 text-right z-10">
            {/* STICKER 1 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEBF3] border border-[#FF6FAE]/30 text-[#FF6FAE] text-xs font-bold -rotate-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COLLECTION 2026 • JUST IN ♡</span>
            </div>

            <h1 className="font-estedad font-black text-4xl sm:text-6xl xl:text-7xl leading-[1.1] text-[#291A2D]">
              امروز <br />
              <span className="text-[#FF6FAE]">چی می‌پوشی؟</span>
            </h1>

            <p className="text-base sm:text-lg text-[#291A2D]/80 font-normal max-w-md leading-relaxed">
              کالکشن جدید لباس‌های زنانه اسپرت، کژوال و روزمره از برترین برندهای روز دنیا با استایل Gen-Z و رنگ‌های پرانرژی.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#new-arrivals"
                className="px-8 py-4 bg-[#291A2D] hover:bg-[#FF6FAE] text-[#FFFDFC] font-estedad font-bold text-base rounded-2xl transition-all duration-300 flex items-center gap-2 group"
              >
                <span>مشاهده جدیدها</span>
                <ArrowUpLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
              </a>

              <a
                href="#mood-section"
                className="px-8 py-4 bg-[#FFEBF3] hover:bg-[#A98CFF] text-[#291A2D] hover:text-white font-estedad font-bold text-base rounded-2xl transition-all duration-300"
              >
                انتخاب بر اساس مود 🎀
              </a>
            </div>

            {/* TRUST BADGES MINI */}
            <div className="pt-6 border-t border-[#291A2D]/10 grid grid-cols-3 gap-4 text-xs font-medium text-[#291A2D]/70">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#FF6FAE]" />
                <span>۱۰۰٪ اورجینال</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#FF6FAE]" />
                <span>ارسال اکسپرس</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#FF6FAE]" />
                <span>۷ روز تعویض</span>
              </div>
            </div>
          </div>

          {/* HERO IMAGE & ASYMMETRIC COMPOSITION */}
          <div className="lg:col-span-7 relative flex justify-center items-center">
            {/* DECORATIVE COLOR BLOCKS */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#FFEBF3] -top-6 -right-6 -z-10 blur-2xl opacity-80" />
            <div className="absolute w-64 h-64 rounded-full bg-[#EBF8FF] -bottom-6 -left-6 -z-10 blur-2xl opacity-80" />

            {/* STICKER OVERLAY */}
            <div className="absolute top-8 left-4 z-20 bg-[#291A2D] text-[#FFFDFC] text-xs font-bold font-estedad px-4 py-2 rounded-2xl border border-[#FF6FAE]/40 rotate-3 animate-bounce">
              SO CUTE ♡
            </div>

            <div className="absolute bottom-10 right-4 z-20 bg-[#FFE66D] text-[#291A2D] text-xs font-bold font-estedad px-4 py-2 rounded-2xl border border-[#291A2D]/10 -rotate-6">
              100% CASUAL VIBES 🍓
            </div>

            {/* MAIN HERO IMAGE CONTAINER */}
            <div className="w-full w-[600px] h-[600px] overflow-hidden  relative group">
              <img
                src="/images/woman-sport/hero.png"
                alt="Women's Sport Fashion"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CATEGORY DISCOVERY */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold font-estedad text-[#FF6FAE] tracking-wider uppercase">
              CATEGORIES
            </span>
            <h2 className="font-estedad font-extrabold text-2xl sm:text-3xl text-[#291A2D]">
              دسته‌بندی‌های سریع
            </h2>
          </div>
          <button
            onClick={() => setActiveCategory('all')}
            className={`text-xs font-bold px-4 py-2 rounded-full border transition-all ${
              activeCategory === 'all'
                ? 'bg-[#291A2D] text-white border-[#291A2D]'
                : 'bg-transparent text-[#291A2D] border-[#291A2D]/20 hover:border-[#291A2D]'
            }`}
          >
            همه محصولات
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { id: 'outerwear', title: 'کاپشن و ژاکت', en: 'OUTERWEAR', img: '/images/woman-sport/jacket-4.webp', bg: 'bg-[#FFEBF3]' },
            { id: 'sets', title: 'ست‌های ورزشی', en: 'SETS & JUMPSUITS', img: '/images/woman-sport/jumpsuit-1.webp', bg: 'bg-[#EBF8FF]' },
            { id: 'dresses', title: 'جامپ‌سوت و سرهمی', en: 'FULL SUITS', img: '/images/woman-sport/jumpsuit-4.webp', bg: 'bg-[#FFFDEB]' },
            { id: 'bottoms', title: 'لگ و اسوت‌پنتس', en: 'LEGGINGS & PANTS', img: '/images/woman-sport/jumpsuit-7.webp', bg: 'bg-[#F3EFFF]' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                const el = document.getElementById('new-arrivals');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`group relative rounded-3xl overflow-hidden aspect-[3/4] text-right border transition-all duration-300 ${
                activeCategory === cat.id ? 'border-2 border-[#FF6FAE]' : 'border-[#291A2D]/10'
              }`}
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#291A2D]/80 via-[#291A2D]/20 to-transparent p-4 flex flex-col justify-end">
                <span className="text-[10px] text-[#FFFDFC]/80 font-mono tracking-wider">
                  {cat.en}
                </span>
                <span className="font-estedad font-bold text-lg text-[#FFFDFC]">
                  {cat.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* REDESIGNED SIGNATURE FEATURE 01: MOOD & OUTFIT STYLIST ASSISTANT */}
      <section
        id="mood-section"
        className="py-16 md:py-24 transition-colors duration-500 relative"
        style={{ backgroundColor: activeMood.bgColor }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          {/* SECTION HEADER & INTRO */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#291A2D] text-white text-xs font-bold font-estedad">
              <Sparkles className="w-4 h-4 text-[#FF6FAE] animate-pulse" />
              <span>دستیار هوشمند انتخاب استایل & مود</span>
            </div>
            <h2 className="font-estedad font-black text-3xl sm:text-5xl text-[#291A2D] leading-tight">
              امروز چی بپوشم؟ مودت رو انتخاب کن {activeMood.emoji}
            </h2>
            <p className="text-sm sm:text-base text-[#291A2D]/80 font-medium leading-relaxed max-w-2xl mx-auto">
              دیگه وقتت رو برای ست کردن هدر نده! مود یا برنامه‌ی امروزت رو انتخاب کن تا تحلیل استایلیست، ترکیب رنگی و **ست کامل پیشنهادی** رو برات آماده کنیم.
            </p>
          </div>

          {/* MOOD SELECTOR TABS */}
          <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-4 scrollbar-none mb-10">
            {MOOD_OPTIONS.map(mood => {
              const isActive = activeMood.id === mood.id;
              return (
                <button
                  key={mood.id}
                  onClick={() => setActiveMood(mood)}
                  className={`shrink-0 px-5 py-3 rounded-2xl font-estedad font-bold text-sm transition-all duration-300 flex items-center gap-2 border shadow-xs ${
                    isActive
                      ? 'bg-[#291A2D] text-white border-[#291A2D] scale-105 shadow-md'
                      : 'bg-white/90 text-[#291A2D] border-[#291A2D]/10 hover:border-[#291A2D]/30'
                  }`}
                >
                  <span className="text-lg">{mood.emoji}</span>
                  <span>{mood.labelFa}</span>
                  <span className="text-[10px] font-mono opacity-60">({mood.labelEn})</span>
                </button>
              );
            })}
          </div>

          {/* MAIN STYLIST DASHBOARD CONTAINER */}
          <div className="bg-white/90 backdrop-blur-md rounded-[36px] p-6 sm:p-10 border border-[#291A2D]/10 shadow-xl space-y-10">

            {/* TOP BAR: VIBE ANALYSIS & STYLIST RECOMMENDATION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#291A2D]/10 pb-8">

              {/* VIBE ANALYSIS & ENERGY BAR */}
              <div className="lg:col-span-6 space-y-4 text-right">
                <div className="flex items-center justify-between">
                  <span
                    className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold font-estedad text-white shadow-xs"
                    style={{ backgroundColor: activeMood.accentColor }}
                  >
                    {activeMood.sticker}
                  </span>

                  <div className="flex items-center gap-2 text-xs font-bold text-[#291A2D]">
                    <span>سطح انرژی استایل:</span>
                    <span className="font-mono text-sm text-[#FF6FAE]">{activeMood.energyLevel}%</span>
                  </div>
                </div>

                {/* PROGRESS BAR */}
                <div className="w-full h-2.5 bg-[#291A2D]/10 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-700 rounded-full"
                    style={{
                      width: `${activeMood.energyLevel}%`,
                      backgroundColor: activeMood.accentColor
                    }}
                  />
                </div>

                <h3 className="font-estedad font-black text-2xl sm:text-3xl text-[#291A2D]">
                  مود امروز: {activeMood.labelFa}
                </h3>

                <p className="text-sm text-[#291A2D]/80 leading-relaxed font-normal">
                  {activeMood.description}
                </p>

                {/* OCCASION BADGE */}
                <div className="p-4 bg-[#FFF8F0] rounded-2xl border border-[#291A2D]/5 space-y-1">
                  <span className="text-[11px] font-bold text-[#FF6FAE] block font-estedad">
                    📍 موقعیت مناسب:
                  </span>
                  <p className="text-xs font-bold text-[#291A2D]">
                    {activeMood.occasion}
                  </p>
                </div>
              </div>

              {/* STYLIST EXPERT TIP BOX */}
              <div className="lg:col-span-6 bg-[#291A2D] text-[#FFFDFC] rounded-3xl p-6 relative overflow-hidden space-y-3">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6FAE] rounded-full blur-2xl opacity-20 pointer-events-none" />

                <div className="flex items-center gap-2 text-[#FF6FAE] text-xs font-bold font-estedad">
                  <Sparkles className="w-4 h-4" />
                  <span>توصیه استایلیست GIRLY SPORT</span>
                </div>

                <p className="text-xs sm:text-sm text-[#FFFDFC]/90 leading-relaxed font-light">
                  «{activeMood.stylistTip}»
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px] text-[#FFFDFC]/60 border-t border-white/10 font-mono">
                  <span>CURATED OUTFIT VIBE</span>
                  <span>100% MATCH GUARANTEED</span>
                </div>
              </div>

            </div>

            {/* CURATED OUTFIT BUNDLE SECTION ("پیشنهاد ست کامل با تخفیف") */}
            {(() => {
              const mainProd = WOMAN_SPORT_PRODUCTS.find(p => p.id === activeMood.mainProductId) || WOMAN_SPORT_PRODUCTS[0];
              const matchProd = WOMAN_SPORT_PRODUCTS.find(p => p.id === activeMood.matchingProductId) || WOMAN_SPORT_PRODUCTS[1];
              const totalRaw = mainProd.price + matchProd.price;
              const totalDiscounted = Math.round(totalRaw * (1 - activeMood.bundleDiscountPercent / 100));

              return (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-right">
                    <div>
                      <span className="text-xs font-bold font-estedad text-[#FF6FAE] uppercase tracking-wider">
                        RECOMMENDED OUTFIT BUNDLE
                      </span>
                      <h4 className="font-estedad font-black text-2xl text-[#291A2D] flex items-center gap-2">
                        <span>{activeMood.bundleTitle}</span>
                        <span className="text-xs font-bold bg-[#FF6FAE] text-white px-2.5 py-0.5 rounded-full">
                          {activeMood.bundleDiscountPercent}% تخفیف ست
                        </span>
                      </h4>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(mainProd);
                        addToCart(matchProd);
                        showToast(`ست کامل «${activeMood.bundleTitle}» به سبد خرید اضافه شد ♡`);
                      }}
                      className="px-6 py-3.5 bg-[#291A2D] hover:bg-[#FF6FAE] text-white font-estedad font-bold text-xs sm:text-sm rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shrink-0"
                    >
                      <ShoppingBag className="w-4 h-4 text-[#FF6FAE]" />
                      <span>افزودن کامل ست به سبد ({formatPrice(totalDiscounted)} تومان)</span>
                    </button>
                  </div>

                  {/* BUNDLE VISUAL CARDS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* ITEM 1 */}
                    <div
                      onClick={() => setSelectedProductForDetail(mainProd)}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFEBF3]/30 border border-[#291A2D]/10 hover:border-[#FF6FAE]/50 cursor-pointer transition-all group"
                    >
                      <div className="w-20 h-24 rounded-xl overflow-hidden shrink-0 bg-[#F3F2EE]">
                        <img src={mainProd.images[0]} alt={mainProd.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="flex-1 text-right space-y-1">
                        <span className="text-[10px] font-bold text-[#FF6FAE] uppercase font-mono">{mainProd.brand} • آیتم اصلی</span>
                        <h5 className="font-bold text-xs sm:text-sm text-[#291A2D] line-clamp-1 group-hover:text-[#FF6FAE] transition-colors">{mainProd.name}</h5>
                        <p className="text-xs font-bold text-[#291A2D]">{formatPrice(mainProd.price)} تومان</p>
                      </div>
                      <span className="text-xs font-bold text-[#FF6FAE] underline shrink-0">جزییات</span>
                    </div>

                    {/* ITEM 2 */}
                    <div
                      onClick={() => setSelectedProductForDetail(matchProd)}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-[#FFEBF3]/30 border border-[#291A2D]/10 hover:border-[#FF6FAE]/50 cursor-pointer transition-all group"
                    >
                      <div className="w-20 h-24 rounded-xl overflow-hidden shrink-0 bg-[#F3F2EE]">
                        <img src={matchProd.images[0]} alt={matchProd.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="flex-1 text-right space-y-1">
                        <span className="text-[10px] font-bold text-[#A98CFF] uppercase font-mono">{matchProd.brand} • آیتم مکمل</span>
                        <h5 className="font-bold text-xs sm:text-sm text-[#291A2D] line-clamp-1 group-hover:text-[#FF6FAE] transition-colors">{matchProd.name}</h5>
                        <p className="text-xs font-bold text-[#291A2D]">{formatPrice(matchProd.price)} تومان</p>
                      </div>
                      <span className="text-xs font-bold text-[#FF6FAE] underline shrink-0">جزییات</span>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* MORE PRODUCTS MATCHING THIS MOOD */}
            <div className="space-y-4 pt-4 border-t border-[#291A2D]/10">
              <h4 className="font-estedad font-bold text-base text-[#291A2D] text-right">
                سایر آیتم‌های پیشنهادی متناسب با مود {activeMood.labelFa}
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {moodFilteredProducts.slice(0, 4).map(product => (
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

          </div>

        </div>
      </section>

      {/* NEW ARRIVALS ("تازه رسیدن ♡") */}
      <section id="new-arrivals" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold font-estedad text-[#FF6FAE] tracking-wider uppercase">
              NEW COLLECTION
            </span>
            <h2 className="font-estedad font-black text-3xl sm:text-4xl text-[#291A2D] flex items-center gap-2">
              <span>تازه رسیدن</span>
              <span className="text-[#FF6FAE]">♡</span>
            </h2>
          </div>

          {/* CATEGORY FILTER TABS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'همه' },
              { id: 'outerwear', label: 'کاپشن و ژاکت' },
              { id: 'sets', label: 'ست ورزشی' },
              { id: 'dresses', label: 'جامپ‌سوت' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold font-estedad transition-all ${
                  activeCategory === tab.id
                    ? 'bg-[#291A2D] text-white'
                    : 'bg-[#FFEBF3]/60 text-[#291A2D] hover:bg-[#FFEBF3]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCT GRID - 3 IMAGE PRODUCT CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categoryFilteredProducts.map(product => (
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

      {/* SIGNATURE FEATURE 02: SHOP BY COLOR */}
      <section id="color-section" className="py-16 bg-[#FFF8F0] border-y border-[#291A2D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold font-estedad text-[#FF9B78] uppercase tracking-wider">
              COLOR EXPLORER
            </span>
            <h2 className="font-estedad font-black text-3xl sm:text-4xl text-[#291A2D]">
              چه رنگی امروز توی مودته؟
            </h2>
            <p className="text-sm text-[#291A2D]/70 font-medium">
              با انتخاب رنگ دلخواهت، تمام آیتم‌های آن رنگ را یکجا ببین!
            </p>
          </div>

          {/* COLOR SWATCH BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveColorFilter(null)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold font-estedad transition-all ${
                activeColorFilter === null
                  ? 'bg-[#291A2D] text-white'
                  : 'bg-white text-[#291A2D] border border-[#291A2D]/10 hover:border-[#291A2D]'
              }`}
            >
              همه رنگ‌ها
            </button>

            {COLOR_FILTER_OPTIONS.map(c => {
              const isSelected = activeColorFilter?.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveColorFilter(c)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold font-estedad flex items-center gap-2 transition-all border ${
                    isSelected
                      ? 'bg-[#291A2D] text-white border-[#291A2D] scale-105'
                      : 'bg-white text-[#291A2D] border-[#291A2D]/10 hover:border-[#291A2D]/40'
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full border border-black/10"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span>{c.nameFa}</span>
                </button>
              );
            })}
          </div>

          {/* COLOR FILTERED GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {colorFilteredProducts.slice(0, 4).map(product => (
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

      {/* EDITORIAL FASHION MOMENT ("رنگی بپوش.") */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-[#291A2D] text-[#FFFDFC] rounded-[36px] p-8 sm:p-14 relative overflow-hidden">
          {/* DECORATIVE LIGHT BLUR */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6FAE] rounded-full blur-[120px] opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 space-y-6 text-right">
              <span className="inline-block px-3 py-1 rounded-full bg-[#FF6FAE]/20 text-[#FF6FAE] text-xs font-bold font-estedad border border-[#FF6FAE]/40">
                EDITORIAL MOMENT
              </span>

              <h2 className="font-estedad font-black text-4xl sm:text-6xl text-[#FFFDFC] leading-tight">
                رنگی <br />
                <span className="text-[#FF6FAE]">بپوش.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#FFFDFC]/80 font-light leading-relaxed">
                استایل شخصی تو، انعکاس انرژی توست. با انتخاب فرم‌های آزاد، پارچه‌های باکیفیت و رنگ‌های زنده، اعتماد به نفس واقعی رو تجربه کن.
              </p>

              <a
                href="#new-arrivals"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6FAE] hover:bg-white text-white hover:text-[#291A2D] font-estedad font-bold text-sm rounded-2xl transition-all duration-300"
              >
                <span>خرید کالکشن جدید</span>
                <ArrowUpLeft className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/images/woman-sport/jacket-8.webp"
                  alt="Editorial Fashion"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 mt-6">
                <img
                  src="/images/woman-sport/jumpsuit-10.webp"
                  alt="Editorial Fashion 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING PRODUCTS ("اینا خیلی دیده شدن ♡") */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="mb-10 text-right">
          <span className="text-xs font-bold font-estedad text-[#A98CFF] uppercase tracking-wider">
            POPULAR SELECTION
          </span>
          <h2 className="font-estedad font-black text-3xl sm:text-4xl text-[#291A2D] flex items-center gap-2">
            <span>اینا خیلی دیده شدن</span>
            <span className="text-[#FF6FAE]">♡</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {WOMAN_SPORT_PRODUCTS.filter(p => p.isTrending).slice(0, 4).map(product => (
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

      {/* SIGNATURE FEATURE 03: SHOP BY STYLE */}
      <section id="styles-section" className="py-16 bg-[#F4F2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold font-estedad text-[#A98CFF] uppercase tracking-wider">
              STYLE GUIDE
            </span>
            <h2 className="font-estedad font-black text-3xl sm:text-4xl text-[#291A2D]">
              استایل مورد علاقه‌تو پیدا کن
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STYLE_OPTIONS.map(st => (
              <button
                key={st.id}
                onClick={() => {
                  setActiveStyle(st.id);
                  const el = document.getElementById('new-arrivals');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative rounded-3xl overflow-hidden aspect-[3/4] border text-right transition-all ${
                  activeStyle === st.id ? 'border-2 border-[#A98CFF]' : 'border-[#291A2D]/10'
                }`}
              >
                <img
                  src={st.image}
                  alt={st.titleFa}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#291A2D]/90 via-[#291A2D]/30 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[10px] text-[#FFFDFC]/70 font-mono">
                    {st.titleEn}
                  </span>
                  <span className="font-estedad font-bold text-base text-[#FFFDFC]">
                    {st.titleFa}
                  </span>
                  <span className="text-[11px] text-[#FFFDFC]/80 line-clamp-2 mt-1">
                    {st.subtitle}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE FEATURE 04: BRANDS WITH HOVER PREVIEW */}
      <section id="brands-section" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold font-estedad text-[#FF6FAE] uppercase tracking-wider">
            MULTI-BRAND STORE
          </span>
          <h2 className="font-estedad font-black text-3xl sm:text-4xl text-[#291A2D]">
            برند مورد علاقه‌تو پیدا کن
          </h2>
          <p className="text-xs sm:text-sm text-[#291A2D]/60 font-medium">
            تامین کننده مستقیم برترین برندهای ورزشی و کژوال دنیا
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* BRAND LIST */}
          <div className="lg:col-span-7 space-y-2">
            {BRAND_ITEMS.map(b => {
              const isHovered = hoveredBrand === b.id;
              return (
                <div
                  key={b.id}
                  onMouseEnter={() => setHoveredBrand(b.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    isHovered
                      ? 'bg-[#291A2D] text-white border-[#291A2D] scale-[1.02]'
                      : 'bg-white text-[#291A2D] border-[#291A2D]/10 hover:border-[#291A2D]/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-estedad font-black text-2xl tracking-wider">
                      {b.name}
                    </span>
                    <span className="text-xs opacity-70">
                      {b.origin}
                    </span>
                  </div>

                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FF6FAE] text-white font-mono">
                    {b.badge}
                  </span>
                </div>
              );
            })}
          </div>

          {/* HOVER PREVIEW CARD */}
          <div className="lg:col-span-5">
            {hoveredBrand && (
              <div className="bg-[#FFEBF3] p-6 rounded-[32px] border border-[#FF6FAE]/30 text-center space-y-4">
                <span className="text-xs font-bold text-[#FF6FAE] font-estedad">
                  پیش‌نمایش محصولات برند
                </span>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[#291A2D]/10">
                  <img
                    src={BRAND_ITEMS.find(b => b.id === hoveredBrand)?.image || BRAND_ITEMS[0].image}
                    alt="Brand preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-estedad font-bold text-xl text-[#291A2D]">
                  {BRAND_ITEMS.find(b => b.id === hoveredBrand)?.name}
                </h4>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMMUNITY / UGC ("شما چطور می‌پوشینش؟ ♡") */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4 text-right">
            <div>
              <span className="text-xs font-bold font-estedad text-[#FF6FAE] uppercase tracking-wider">
                COMMUNITY VIBES
              </span>
              <h2 className="font-estedad font-black text-3xl sm:text-4xl text-[#291A2D] flex items-center gap-2">
                <span>شما چطور می‌پوشینش؟</span>
                <span className="text-[#FF6FAE]">♡</span>
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#291A2D]">
              <Camera className="w-4 h-4 text-[#FF6FAE]" />
              <span>@GIRLY_SPORT_OFFICIAL</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {COMMUNITY_POSTS.map(post => (
              <div key={post.id} className="bg-white rounded-3xl p-3 border border-[#291A2D]/10 space-y-3">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.username}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-[#291A2D]/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Heart className="w-3 h-3 text-[#FF6FAE] fill-[#FF6FAE]" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <div className="text-right px-1">
                  <span className="font-bold text-xs text-[#291A2D] block">
                    @{post.username}
                  </span>
                  <span className="text-[11px] text-[#291A2D]/60 block font-light">
                    {post.productName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-12 border-t border-[#291A2D]/10 bg-[#FFFDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#FFEBF3] text-[#FF6FAE] flex items-center justify-center mx-auto">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-estedad font-bold text-sm text-[#291A2D]">ارسال سریع</h3>
            <p className="text-xs text-[#291A2D]/60 font-light">تحویل سراسری اکسپرس</p>
          </div>

          <div className="p-4 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF8FF] text-[#7DDCFF] flex items-center justify-center mx-auto">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-estedad font-bold text-sm text-[#291A2D]">پرداخت امن</h3>
            <p className="text-xs text-[#291A2D]/60 font-light">درگاه‌های بانکی شتاب</p>
          </div>

          <div className="p-4 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#F3EFFF] text-[#A98CFF] flex items-center justify-center mx-auto">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-estedad font-bold text-sm text-[#291A2D]">امکان تعویض</h3>
            <p className="text-xs text-[#291A2D]/60 font-light">۷ روز ضمانت بازگشت</p>
          </div>

          <div className="p-4 space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-[#FFFDEB] text-[#FFE66D] flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-estedad font-bold text-sm text-[#291A2D]">اصالت کالا</h3>
            <p className="text-xs text-[#291A2D]/60 font-light">تضمین ۱۰۰٪ برند اصلی</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#FF6FAE] text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 space-y-6 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold font-estedad">
            YOUR NEXT STYLE IS WAITING
          </span>
          <h2 className="font-estedad font-black text-4xl sm:text-6xl text-white">
            استایل بعدیت منتظرته.
          </h2>
          <p className="text-sm sm:text-base text-white/90 font-medium">
            همین حالا کالکشن لباس‌های اسپرت و کژوال زنانه را مرور کن و رنگ مورد علاقه‌ت رو بپوش!
          </p>
          <div>
            <a
              href="#new-arrivals"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#291A2D] hover:bg-white hover:text-[#291A2D] text-white font-estedad font-bold text-base rounded-2xl transition-all duration-300"
            >
              <span>شروع خرید</span>
              <ArrowUpLeft className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER (DEEP PLUM #291A2D) */}
      <footer className="bg-[#291A2D] text-[#FFFDFC] py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 text-right">

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#FF6FAE] text-white font-estedad font-bold flex items-center justify-center text-sm">
                G
              </span>
              <span className="font-estedad font-bold text-xl text-white">
                GIRLY SPORT
              </span>
            </div>
            <p className="text-xs text-[#FFFDFC]/70 leading-relaxed font-light">
              فروشگاه تخصصی چندبرند لباس‌های اسپرت، کژوال و روزمره زنانه با ارائه‌ی جدیدترین ترندهای مد و لایف‌ستایل Gen-Z.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-estedad font-bold text-sm text-[#FF6FAE]">دسته‌بندی‌ها</h4>
            <ul className="space-y-2 text-xs text-[#FFFDFC]/80 font-light">
              <li><a href="#new-arrivals" className="hover:text-white transition-colors">کاپشن و ژاکت</a></li>
              <li><a href="#new-arrivals" className="hover:text-white transition-colors">ست‌های ورزشی</a></li>
              <li><a href="#new-arrivals" className="hover:text-white transition-colors">جامپ‌سوت و سرهمی</a></li>
              <li><a href="#new-arrivals" className="hover:text-white transition-colors">لگ و اسوت‌پنتس</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-estedad font-bold text-sm text-[#FF6FAE]">برندها</h4>
            <ul className="space-y-2 text-xs text-[#FFFDFC]/80 font-light">
              <li>Nike • Adidas • Puma</li>
              <li>Alo Yoga • Lululemon</li>
              <li>Zara • Mango • Gymshark</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-estedad font-bold text-sm text-[#FF6FAE]">ارتباط با ما</h4>
            <p className="text-xs text-[#FFFDFC]/80 leading-relaxed font-light">
              پشتیبانی ۲۴ ساعته تلگرام و اینستاگرام <br />
              ارسال اکسپرس به سراسر کشور
            </p>
            <div className="text-[11px] text-[#FFFDFC]/50 font-mono pt-2">
              © 2026 GIRLY SPORT. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>

      {/* CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
          <div className="w-full max-w-md bg-[#FFFDFC] text-[#291A2D] h-full flex flex-col p-6 shadow-2xl relative animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between border-b border-[#291A2D]/10 pb-4">
              <h3 className="font-estedad font-bold text-lg text-[#291A2D] flex items-center gap-2">
                <span>سبد خرید</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#FFEBF3] text-[#FF6FAE] font-mono">
                  {cartCount}
                </span>
              </h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-[#291A2D]/5 text-[#291A2D]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* CART ITEMS LIST */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <ShoppingBag className="w-12 h-12 text-[#291A2D]/20 mx-auto" />
                  <p className="text-sm font-medium text-[#291A2D]/60">سبد خرید شما خالی است</p>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-3 bg-[#FFEBF3]/30 rounded-2xl border border-[#291A2D]/10 items-center">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-16 h-20 object-cover rounded-xl"
                    />
                    <div className="flex-1 space-y-1 text-right">
                      <h4 className="font-bold text-xs text-[#291A2D] line-clamp-1">{item.product.name}</h4>
                      <p className="text-[11px] text-[#291A2D]/60">{item.color} • سایز {item.size}</p>
                      <p className="font-bold text-xs text-[#FF6FAE]">{formatPrice(item.product.price)} تومان</p>

                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => updateCartQuantity(idx, -1)}
                          className="w-6 h-6 rounded-md bg-white border border-[#291A2D]/20 text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold px-1">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(idx, 1)}
                          className="w-6 h-6 rounded-md bg-white border border-[#291A2D]/20 text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(idx)}
                      className="p-1.5 text-[#291A2D]/40 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* CART FOOTER */}
            {cartItems.length > 0 && (
              <div className="border-t border-[#291A2D]/10 pt-4 space-y-3">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span>مبلغ قابل پرداخت:</span>
                  <span className="text-lg text-[#FF6FAE]">{formatPrice(cartTotal)} تومان</span>
                </div>
                <button
                  onClick={() => {
                    alert('ثبت سفارش با موفقیت انجام شد!');
                    setCartItems([]);
                    setIsCartOpen(false);
                  }}
                  className="w-full py-3.5 bg-[#291A2D] text-white font-estedad font-bold text-sm rounded-xl hover:bg-[#FF6FAE] transition-colors"
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
          <div className="w-full max-w-md bg-[#FFFDFC] text-[#291A2D] h-full flex flex-col p-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#291A2D]/10 pb-4">
              <h3 className="font-estedad font-bold text-lg text-[#291A2D] flex items-center gap-2">
                <span>لیست علاقه‌مندی‌ها</span>
                <Heart className="w-4 h-4 text-[#FF6FAE] fill-[#FF6FAE]" />
              </h3>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="p-2 rounded-full hover:bg-[#291A2D]/5 text-[#291A2D]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {wishlistIds.length === 0 ? (
                <p className="text-center text-sm text-[#291A2D]/60 py-12">هیچ آیتمی در لیست علاقه‌مندی نیست</p>
              ) : (
                WOMAN_SPORT_PRODUCTS.filter(p => wishlistIds.includes(p.id)).map(product => (
                  <div key={product.id} className="flex gap-4 p-3 bg-white rounded-2xl border border-[#291A2D]/10 items-center">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-16 h-20 object-cover rounded-xl"
                    />
                    <div className="flex-1 text-right space-y-1">
                      <h4 className="font-bold text-xs text-[#291A2D]">{product.name}</h4>
                      <p className="font-bold text-xs text-[#FF6FAE]">{formatPrice(product.price)} تومان</p>
                      <button
                        onClick={() => {
                          addToCart(product);
                          toggleWishlist(product.id);
                        }}
                        className="text-[11px] font-bold text-[#291A2D] underline"
                      >
                        انتقال به سبد خرید
                      </button>
                    </div>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className="p-1.5 text-[#291A2D]/40 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* SEARCH DRAWER */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm p-4 sm:p-8 flex justify-center items-start pt-20">
          <div className="w-full max-w-2xl bg-[#FFFDFC] text-[#291A2D] rounded-3xl p-6 shadow-2xl relative space-y-4">
            <div className="flex items-center justify-between border-b border-[#291A2D]/10 pb-4">
              <div className="flex items-center gap-2 flex-1">
                <Search className="w-5 h-5 text-[#291A2D]/40" />
                <input
                  type="text"
                  placeholder="جستجوی نام لباس، برند، یا سبک..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none text-sm font-medium focus:outline-none text-right"
                  autoFocus
                />
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 rounded-full hover:bg-[#291A2D]/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto space-y-3">
              {searchQuery && searchResults.length === 0 && (
                <p className="text-center text-sm text-[#291A2D]/60 py-8">محصولی با این مشخصات یافت نشد</p>
              )}

              {searchResults.map(product => (
                <div
                  key={product.id}
                  onClick={() => {
                    setSelectedProductForDetail(product);
                    setIsSearchOpen(false);
                  }}
                  className="flex items-center gap-4 p-3 hover:bg-[#FFEBF3]/50 rounded-2xl cursor-pointer transition-colors"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-12 h-14 object-cover rounded-xl"
                  />
                  <div className="flex-1 text-right">
                    <span className="text-[10px] text-[#FF6FAE] font-bold block">{product.brand}</span>
                    <h4 className="font-bold text-xs text-[#291A2D]">{product.name}</h4>
                    <span className="text-xs font-bold text-[#291A2D]">{formatPrice(product.price)} تومان</span>
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
// REUSABLE 3-IMAGE PRODUCT CARD COMPONENT
// Meets strictly: 4:5 aspect ratio, edge-to-edge, NO inner image padding,
// wishlist top-corner, hover 3-image slider, color dots, quick add button.
// ----------------------------------------------------------------------
interface ProductCardProps {
  product: WomanSportProduct;
  isWishlisted: boolean;
  onToggleWishlist: (id: string, e?: React.MouseEvent) => void;
  onAddToCart: (p: WomanSportProduct, colorName?: string) => void;
  onOpenDetail: (p: WomanSportProduct) => void;
  formatPrice: (price: number) => string;
}

function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onOpenDetail,
  formatPrice
}: ProductCardProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex(prev => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex(prev => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#291A2D]/10 hover:border-[#FF6FAE]/40 transition-all duration-300 relative text-right">

      {/* BADGE OVERLAY */}
      {product.badge && (
        <span className="absolute top-3 right-3 z-20 bg-[#291A2D] text-[#FFFDFC] text-[10px] font-bold font-estedad px-2.5 py-1 rounded-full border border-[#FF6FAE]/30 pointer-events-none">
          {product.badge}
        </span>
      )}

      {/* WISHLIST BUTTON */}
      <button
        onClick={e => onToggleWishlist(product.id, e)}
        aria-label="افزودن به علاقه‌مندی"
        className="absolute top-3 left-3 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center transition-transform hover:scale-110"
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            isWishlisted ? 'text-[#FF6FAE] fill-[#FF6FAE]' : 'text-[#291A2D]'
          }`}
        />
      </button>

      {/* 3-IMAGE CAROUSEL CONTAINER (4:5 Ratio, Full Bleed Edge-To-Edge) */}
      <div
        onClick={() => onOpenDetail(product)}
        className="w-full aspect-[4/5] relative overflow-hidden bg-[#F3F2EE] group/img cursor-pointer"
      >
        <img
          src={product.images[currentImgIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
        />

        {/* DESKTOP HOVER SLIDER ARROWS */}
        <button
          onClick={prevImage}
          aria-label="تصویر قبلی"
          className="hidden md:flex absolute top-1/2 left-2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/80 backdrop-blur-md items-center justify-center text-[#291A2D] opacity-0 group-hover/img:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={nextImage}
          aria-label="تصویر بعدی"
          className="hidden md:flex absolute top-1/2 right-2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white/80 backdrop-blur-md items-center justify-center text-[#291A2D] opacity-0 group-hover/img:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* IMAGE INDICATOR (01 / 03) */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono opacity-0 group-hover/img:opacity-100 transition-opacity">
          0{currentImgIndex + 1} / 0{product.images.length}
        </div>

        {/* QUICK ADD BUTTON ON HOVER */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product, product.colors[activeColorIndex]?.name);
          }}
          className="absolute inset-x-3 bottom-3 z-20 py-2.5 bg-[#291A2D] hover:bg-[#FF6FAE] text-white text-xs font-bold font-estedad rounded-xl opacity-0 group-hover/img:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/img:translate-y-0"
        >
          افزودن سریع به سبد
        </button>
      </div>

      {/* PRODUCT INFORMATION */}
      <div className="p-4 flex flex-col justify-between flex-1 space-y-2">
        <div
          onClick={() => onOpenDetail(product)}
          className="space-y-1 cursor-pointer group/title"
        >
          <span className="text-[10px] font-bold font-mono uppercase text-[#291A2D]/50 tracking-wider">
            {product.brand}
          </span>
          <h3 className="font-bold text-xs sm:text-sm text-[#291A2D] line-clamp-1 group-hover/title:text-[#FF6FAE] transition-colors">
            {product.name}
          </h3>
        </div>

        {/* COLOR VARIANTS DOTS */}
        <div className="flex items-center gap-1.5 pt-1">
          {product.colors.map((c, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setActiveColorIndex(i);
                if (product.images[i]) setCurrentImgIndex(i);
              }}
              title={c.name}
              className={`w-3.5 h-3.5 rounded-full border transition-transform ${
                activeColorIndex === i ? 'ring-2 ring-[#FF6FAE] ring-offset-1 scale-110' : 'border-black/10'
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>

        {/* PRICE & DETAIL TRIGGER */}
        <div className="flex items-center justify-between pt-1 border-t border-[#291A2D]/5">
          <span className="font-bold text-xs sm:text-sm text-[#291A2D]">
            {formatPrice(product.price)} <span className="text-[10px] font-normal text-[#291A2D]/60">تومان</span>
          </span>

          <button
            onClick={() => onOpenDetail(product)}
            className="text-[11px] font-bold text-[#FF6FAE] hover:underline"
          >
            جزییات بیشتر
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
  product: WomanSportProduct;
  isWishlisted: boolean;
  onClose: () => void;
  onToggleWishlist: (id: string, e?: React.MouseEvent) => void;
  onAddToCart: (p: WomanSportProduct, colorName?: string, sizeName?: string, quantity?: number) => void;
  formatPrice: (price: number) => string;
}

function ProductDetailModal({
  product,
  isWishlisted,
  onClose,
  onToggleWishlist,
  onAddToCart,
  formatPrice
}: ProductDetailModalProps) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState(1);

  const activeColor = product.colors[selectedColorIndex] || product.colors[0];

  const handleColorChange = (index: number) => {
    setSelectedColorIndex(index);
    if (product.images[index]) {
      setSelectedImgIndex(index);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FFFDFC] text-[#291A2D] w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[32px] p-5 sm:p-8 shadow-2xl relative border border-[#291A2D]/10 text-right space-y-6"
        onClick={e => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 z-30 p-2.5 rounded-full bg-[#291A2D]/5 hover:bg-[#291A2D] hover:text-white transition-colors"
          aria-label="بستن"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-2">

          {/* LEFT/TOP: IMAGE GALLERY (7 COLS) */}
          <div className="md:col-span-7 space-y-3">
            {/* MAIN DISPLAY IMAGE */}
            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#F3F2EE] relative border border-[#291A2D]/10">
              <img
                src={product.images[selectedImgIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {product.badge && (
                <span className="absolute top-4 right-4 bg-[#291A2D] text-[#FFFDFC] text-xs font-bold font-estedad px-3 py-1 rounded-full border border-[#FF6FAE]/30">
                  {product.badge}
                </span>
              )}

              {/* WISHLIST BUTTON */}
              <button
                onClick={e => onToggleWishlist(product.id, e)}
                className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-md transition-transform hover:scale-110"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted ? 'text-[#FF6FAE] fill-[#FF6FAE]' : 'text-[#291A2D]'
                  }`}
                />
              </button>
            </div>

            {/* THUMBNAILS GALLERY */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  className={`aspect-[4/5] rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImgIndex === idx
                      ? 'border-[#FF6FAE] scale-105 shadow-md'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`نمای ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT/BOTTOM: PRODUCT SPECS & PURCHASE OPTIONS (5 COLS) */}
          <div className="md:col-span-5 space-y-5">

            {/* BRAND & TITLE */}
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase text-[#FF6FAE] tracking-wider">
                {product.brand}
              </span>
              <h2 className="font-estedad font-black text-xl sm:text-2xl text-[#291A2D] leading-snug">
                {product.name}
              </h2>
            </div>

            {/* PRICE & DISCOUNT */}
            <div className="flex items-baseline gap-3 p-3.5 bg-[#FFEBF3]/50 rounded-2xl border border-[#FF6FAE]/20">
              <span className="font-estedad font-black text-2xl text-[#291A2D]">
                {formatPrice(product.price)} <span className="text-xs font-medium text-[#291A2D]/70">تومان</span>
              </span>

              {product.originalPrice && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#291A2D]/40 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="text-[10px] font-bold bg-[#FF6FAE] text-white px-2 py-0.5 rounded-full">
                    تخفیف ویژه
                  </span>
                </div>
              )}
            </div>

            {/* DESCRIPTION & FIT */}
            <div className="space-y-2 text-xs leading-relaxed text-[#291A2D]/80">
              <p className="font-medium">{product.description}</p>
              <div className="inline-flex items-center gap-1.5 bg-[#F4F2FF] px-3 py-1.5 rounded-xl text-[11px] font-bold text-[#A98CFF]">
                <span>تنخور:</span>
                <span>{product.fit}</span>
              </div>
            </div>

            {/* COLOR SELECTION */}
            <div className="space-y-2 pt-2 border-t border-[#291A2D]/10">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#291A2D]">انتخاب رنگ:</span>
                <span className="font-medium text-[#FF6FAE]">{activeColor?.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => handleColorChange(i)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold font-estedad flex items-center gap-2 transition-all border ${
                      selectedColorIndex === i
                        ? 'bg-[#291A2D] text-white border-[#291A2D] scale-105'
                        : 'bg-white text-[#291A2D] border-[#291A2D]/15 hover:border-[#291A2D]/40'
                    }`}
                  >
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/10"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE SELECTION */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#291A2D]">انتخاب سایز:</span>
                <span className="text-[11px] text-[#291A2D]/50">راهنمای سایز استاندارد</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-11 h-11 rounded-xl text-xs font-bold font-mono transition-all border ${
                      selectedSize === size
                        ? 'bg-[#291A2D] text-white border-[#291A2D] scale-105 shadow-sm'
                        : 'bg-white text-[#291A2D] border-[#291A2D]/15 hover:border-[#291A2D]/40'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY & ADD TO CART CTA */}
            <div className="space-y-3 pt-3 border-t border-[#291A2D]/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#291A2D]">تعداد:</span>
                <div className="flex items-center border border-[#291A2D]/20 rounded-xl bg-white p-1">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="w-8 h-8 rounded-lg hover:bg-[#291A2D]/5 font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="w-8 h-8 rounded-lg hover:bg-[#291A2D]/5 font-bold text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  onAddToCart(product, activeColor?.name, selectedSize, quantity);
                  onClose();
                }}
                className="w-full py-4 bg-[#291A2D] hover:bg-[#FF6FAE] text-white font-estedad font-bold text-sm rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>افزودن به سبد خرید ({formatPrice(product.price * quantity)} تومان)</span>
              </button>
            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] text-center font-medium text-[#291A2D]/70 bg-[#FFF8F0] p-3 rounded-2xl border border-[#291A2D]/5">
              <div>🚚 ارسال اکسپرس</div>
              <div>🛡️ ۱۰۰٪ اورجینال</div>
              <div>🔄 ۷ روز تعویض</div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
