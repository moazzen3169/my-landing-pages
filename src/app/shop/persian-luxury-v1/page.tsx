'use client';

import React, { useState, Suspense } from 'react';
import Header from '@/components/landing/persian-luxury/Header';
import HeroSection from '@/components/landing/persian-luxury/HeroSection';
import NewArrivals from '@/components/landing/persian-luxury/NewArrivals';
import CategoryShowcase from '@/components/landing/persian-luxury/CategoryShowcase';
import BrandSection from '@/components/landing/persian-luxury/BrandSection';
import CuratedEditSection from '@/components/landing/persian-luxury/CuratedEditSection';
import Bestsellers from '@/components/landing/persian-luxury/Bestsellers';
import CampaignSection from '@/components/landing/persian-luxury/CampaignSection';
import CatalogGrid from '@/components/landing/persian-luxury/CatalogGrid';
import AuthenticitySection from '@/components/landing/persian-luxury/AuthenticitySection';
import PhysicalStoreSection from '@/components/landing/persian-luxury/PhysicalStoreSection';
import SupportSection from '@/components/landing/persian-luxury/SupportSection';
import Newsletter from '@/components/landing/persian-luxury/Newsletter';
import Footer from '@/components/landing/persian-luxury/Footer';
import MobileBottomNav from '@/components/landing/persian-luxury/MobileBottomNav';

import QuickViewModal from '@/components/landing/persian-luxury/QuickViewModal';
import SearchOverlay from '@/components/landing/persian-luxury/SearchOverlay';
import CartDrawer, { CartItem } from '@/components/landing/persian-luxury/CartDrawer';
import WishlistModal from '@/components/landing/persian-luxury/WishlistModal';

import { LUXURY_PRODUCTS, LuxuryProduct } from '@/data/persian-luxury-women';
import { useStore } from '@/hooks/useStore';

function PersianLuxuryContent() {
  const { storeName, theme } = useStore('persian-luxury-v1');

  // STATE MANAGEMENT
  const [quickViewProduct, setQuickViewProduct] = useState<LuxuryProduct | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string | null>(null);

  // CART & WISHLIST LOCAL STATE
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: LUXURY_PRODUCTS[0],
      selectedColor: LUXURY_PRODUCTS[0].colors[0]?.name || 'مشکی',
      selectedSize: 'One Size',
      quantity: 1,
    },
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['pl-w-01', 'pl-w-04']);

  // WISHLIST TOGGLE
  const handleToggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // ADD TO CART
  const handleAddToCart = (
    product: LuxuryProduct,
    selectedColor: string,
    selectedSize: string
  ) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          { product, selectedColor, selectedSize, quantity: 1 },
        ];
      }
    });
  };

  // CART QUANTITY ADJUST
  const handleUpdateCartQuantity = (index: number, delta: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const wishlistedProductsList = LUXURY_PRODUCTS.filter((p) =>
    wishlistIds.includes(p.id)
  );

  return (
    <div
      className="min-h-screen bg-[#FFFFFF] text-[#111111] font-peyda selection:bg-[#000000] selection:text-white dir-rtl"
      dir="rtl"
      lang="fa"
      style={{
        '--landing-primary': theme.primary,
        '--landing-secondary': theme.secondary || theme.primary,
      } as React.CSSProperties}
    >
      {/* 01 STICKY HEADER */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenMobileMenu={() => setIsSearchOpen(true)}
        storeName={storeName}
      />

      {/* MAIN STOREFRONT BODY */}
      <main className="space-y-0">
        {/* 02 HERO SECTION */}
        <HeroSection />

        {/* 04 NEW ARRIVALS */}
        <NewArrivals
          products={LUXURY_PRODUCTS}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* 05 CATEGORY SHOWCASE */}
        <CategoryShowcase />

        {/* 06 BRAND SECTION */}
        <BrandSection
          onSelectBrand={(brand) => setSelectedBrandFilter(brand)}
        />

        {/* 07 THE EDIT / CURATED COLLECTION */}
        <CuratedEditSection
          products={LUXURY_PRODUCTS}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* 08 BESTSELLERS */}
        <Bestsellers
          products={LUXURY_PRODUCTS}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* 09 CAMPAIGN / PRIVATE SALE */}
        <CampaignSection
          products={LUXURY_PRODUCTS}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* 10 FULL STORE CATALOG */}
        <CatalogGrid
          products={LUXURY_PRODUCTS}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onQuickView={(p) => setQuickViewProduct(p)}
          selectedBrandFilter={selectedBrandFilter}
        />

        {/* 11 AUTHENTICITY SECTION */}
        <AuthenticitySection />

        {/* 12 PHYSICAL STORE CONNECTION */}
        <PhysicalStoreSection />

        {/* 13 CUSTOMER SUPPORT */}
        <SupportSection />

        {/* 14 NEWSLETTER */}
        <Newsletter />
      </main>

      {/* 15 FOOTER */}
      <Footer storeName={storeName} />

      {/* 16 MOBILE BOTTOM STICKY NAVIGATION */}
      <MobileBottomNav
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      {/* MODALS & OVERLAYS */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={LUXURY_PRODUCTS}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistedProducts={wishlistedProductsList}
        onRemoveWishlist={handleToggleWishlist}
        onQuickView={(p) => setQuickViewProduct(p)}
      />
    </div>
  );
}

export default function PersianLuxuryWomenPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <PersianLuxuryContent />
    </Suspense>
  );
}
