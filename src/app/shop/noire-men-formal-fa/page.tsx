'use client';

import React, { useState, Suspense } from 'react';
import GravityHeader from '@/components/gravity/GravityHeader';
import GravityHero from '@/components/gravity/GravityHero';
import GravityCategories from '@/components/gravity/GravityCategories';
import GravityNewArrivals from '@/components/gravity/GravityNewArrivals';
import GravityEditorial from '@/components/gravity/GravityEditorial';
import GravityShopByStyle from '@/components/gravity/GravityShopByStyle';
import GravityShopTheLook from '@/components/gravity/GravityShopTheLook';
import GravityBrands from '@/components/gravity/GravityBrands';
import GravityTrustSection from '@/components/gravity/GravityTrustSection';
import GravityStoreSection from '@/components/gravity/GravityStoreSection';
import GravityInstagram from '@/components/gravity/GravityInstagram';
import GravityFooter from '@/components/gravity/GravityFooter';

import GravityCartDrawer, { CartItem } from '@/components/gravity/GravityCartDrawer';
import GravitySearchOverlay from '@/components/gravity/GravitySearchOverlay';
import GravityQuickViewModal from '@/components/gravity/GravityQuickViewModal';
import { GravityProduct } from '@/data/gravity-data';
import { useStore } from '@/hooks/useStore';

function GravityContent() {
  const { storeName, theme } = useStore('noire-men-formal-fa');

  // State management
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<GravityProduct | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  // Cart actions
  const handleAddToCart = (product: GravityProduct | { id: string; name: string; price: number; image: string }, size?: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Wishlist actions
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div
      className="min-h-screen flex flex-col bg-[#F3F2EE] text-[#111111] font-peyda dir-rtl selection:bg-[#111111] selection:text-white"
      dir="rtl"
      style={{
        '--landing-primary': theme.primary,
      } as React.CSSProperties}
    >
      {/* 01 HEADER */}
      <GravityHeader
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => alert(`تعداد کالاها در لیست علاقه‌مندی‌ها: ${wishlistIds.length}`)}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        storeName={storeName}
      />

      <main className="flex-grow">
        {/* 02 HERO SECTION WITH 3-COLUMN STICKY SCROLL STORYTELLING */}
        <GravityHero />

        {/* 03 CATEGORY DISCOVERY */}
        <GravityCategories />

        {/* 04 NEW ARRIVALS */}
        <GravityNewArrivals
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={(p) => handleAddToCart(p)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* 05 EDITORIAL SECTION */}
        <GravityEditorial />

        {/* 06 SHOP BY STYLE */}
        <GravityShopByStyle />

        {/* 07 SHOP THE LOOK */}
        <GravityShopTheLook onAddToCart={(item) => handleAddToCart(item)} />

        {/* 08 SELECTED BRANDS */}
        <GravityBrands />

        {/* 09 TRUST SECTION */}
        <GravityTrustSection />

        {/* 10 PHYSICAL STORE SECTION */}
        <GravityStoreSection />

        {/* 11 INSTAGRAM SECTION */}
        <GravityInstagram />
      </main>

      {/* 12 FOOTER */}
      <GravityFooter storeName={storeName} />

      {/* DRAWERS & OVERLAYS */}
      <GravityCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <GravitySearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      <GravityQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, size) => handleAddToCart(p, size)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
      />
    </div>
  );
}

export default function GravityLandingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F3F2EE]" />}>
      <GravityContent />
    </Suspense>
  );
}
