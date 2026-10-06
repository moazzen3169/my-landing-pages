'use client';

import React, { useState, Suspense } from 'react';
import Header from '@/components/landing/man-sport/Header';
import Hero from '@/components/landing/man-sport/Hero';
import QuickCategories from '@/components/landing/man-sport/QuickCategories';
import BuildYourFit from '@/components/landing/man-sport/BuildYourFit';
import ProductGrid from '@/components/landing/man-sport/ProductGrid';
import ShopByStyle from '@/components/landing/man-sport/ShopByStyle';
import BrandSection from '@/components/landing/man-sport/BrandSection';
import CommunitySection from '@/components/landing/man-sport/CommunitySection';
import TrustSection from '@/components/landing/man-sport/TrustSection';
import Footer from '@/components/landing/man-sport/Footer';

import SearchOverlay from '@/components/landing/man-sport/SearchOverlay';
import ProductQuickView from '@/components/landing/man-sport/ProductQuickView';
import CartDrawer from '@/components/landing/man-sport/CartDrawer';
import MobileDrawer from '@/components/landing/man-sport/MobileDrawer';

import { MAN_SPORT_PRODUCTS, ManSportProduct } from '@/data/man-sport';
import { useStore } from '@/hooks/useStore';

interface CartItem {
  product: ManSportProduct;
  quantity: number;
}

function ManSportContent() {
  const { storeName, theme } = useStore('man-sport');

  // OVERLAY & MODAL STATES
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<ManSportProduct | null>(null);

  // CART STATE
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: MAN_SPORT_PRODUCTS[0], quantity: 1 },
    { product: MAN_SPORT_PRODUCTS[1], quantity: 1 },
  ]);

  const handleAddToCart = (product: ManSportProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  return (
    <div
      className="min-h-screen bg-[#F5F3EE] text-[#111111] font-peyda antialiased selection:bg-[#111111] selection:text-[#E04A24]"
      dir="rtl"
      style={{
        '--landing-primary': theme.primary,
      } as React.CSSProperties}
    >

      {/* FLOATING GLASS HEADER */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        wishlistCount={3}
        storeName={storeName}
      />

      {/* MAIN LANDING FLOW */}
      <main>
        {/* 01: HERO */}
        <Hero onOpenSearch={() => setIsSearchOpen(true)} />

        {/* 02: QUICK SHOP CATEGORIES */}
        <QuickCategories />

        {/* 03: SIGNATURE SCROLL EXPERIENCE (BUILD YOUR FIT) */}
        <BuildYourFit onAddToCart={() => setIsCartOpen(true)} />

        {/* 04: NEW ARRIVALS & PRODUCT GRID */}
        <ProductGrid
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
        />

        {/* 05: SHOP BY STYLE */}
        <ShopByStyle />

        {/* 06: MULTI-BRAND SECTION */}
        <BrandSection />

        {/* 07: COMMUNITY & UGC */}
        <CommunitySection />

        {/* 08: TRUST & ECOMMERCE SERVICES */}
        <TrustSection />
      </main>

      {/* FOOTER */}
      <Footer storeName={storeName} />

      {/* INTERACTIVE MODALS & DRAWERS */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
        products={MAN_SPORT_PRODUCTS}
      />

      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

    </div>
  );
}

export default function ManSportLandingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F3EE]" />}>
      <ManSportContent />
    </Suspense>
  );
}
