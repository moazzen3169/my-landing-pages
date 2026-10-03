'use client';

import React, { useState } from 'react';
import Header from '@/components/landing/woman-lux/Header';
import HeroSection from '@/components/landing/woman-lux/HeroSection';
import CategorySection from '@/components/landing/woman-lux/CategorySection';
import ProductCollection from '@/components/landing/woman-lux/ProductCollection';
import ScrollInteractiveSection from '@/components/landing/woman-lux/ScrollInteractiveSection';
import EditorialBrandSection from '@/components/landing/woman-lux/EditorialBrandSection';
import ProductGridSection from '@/components/landing/woman-lux/ProductGridSection';
import Footer from '@/components/landing/woman-lux/Footer';

import ProductDetailModal from '@/components/landing/woman-lux/ProductDetailModal';
import CartDrawer, { CartItemType } from '@/components/landing/woman-lux/CartDrawer';
import WishlistModal from '@/components/landing/woman-lux/WishlistModal';
import SearchOverlay from '@/components/landing/woman-lux/SearchOverlay';

import { WOMAN_LUX_PRODUCTS, WomanLuxProduct, ScrollSectionProduct } from '@/data/woman-lux';

type AnyProduct = WomanLuxProduct | ScrollSectionProduct;

export default function WomanLuxuryEditorialPage() {
  // STATE MANAGEMENT
  const [selectedProductDetail, setSelectedProductDetail] = useState<AnyProduct | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // CART & WISHLIST LOCAL STATE
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    {
      product: WOMAN_LUX_PRODUCTS[0],
      selectedColor: WOMAN_LUX_PRODUCTS[0].colors[0]?.name || 'مشکی زغالی',
      selectedSize: '۳۸',
      quantity: 1,
    },
  ]);
  const [wishlistIds, setWishlistIds] = useState<string[]>(['wlux-01', 'wlux-02']);

  // WISHLIST TOGGLE
  const handleToggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // ADD TO CART
  const handleAddToCart = (
    product: AnyProduct,
    selectedColor: string,
    selectedSize: string,
    quantity: number
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
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          { product, selectedColor, selectedSize, quantity },
        ];
      }
    });
  };

  // QUANTITY & REMOVE
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

  const wishlistedProductsList = WOMAN_LUX_PRODUCTS.filter((p) =>
    wishlistIds.includes(p.id)
  );

  return (
    <div
      className="min-h-screen bg-[#FFFFFF] text-[#111111] font-peyda selection:bg-[#000000] selection:text-white dir-rtl"
      dir="rtl"
      lang="fa"
    >
      {/* 01 HEADER */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      <main className="space-y-0">
        {/* 02 FULLSCREEN HERO VIDEO */}
        <HeroSection
          onExploreClick={() => {
            const el = document.getElementById('catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onNewArrivalsClick={() => {
            const el = document.getElementById('new-arrivals');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />



        {/* 04 NEW COLLECTION PRODUCT ROW */}
        <ProductCollection
          products={WOMAN_LUX_PRODUCTS}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onOpenDetail={(prod) => setSelectedProductDetail(prod)}
          onViewAllClick={() => {
            const el = document.getElementById('catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 05 SCROLL-DRIVEN INTERACTIVE COLLECTION */}
        <ScrollInteractiveSection
          onOpenProductDetail={(prod) => setSelectedProductDetail(prod)}
        />

        {/* 06 EDITORIAL BRAND STORY */}
        <EditorialBrandSection
          onExploreClick={() => {
            const el = document.getElementById('catalog');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 07 PRODUCT GRID */}
        <ProductGridSection
          products={WOMAN_LUX_PRODUCTS}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onOpenDetail={(prod) => setSelectedProductDetail(prod)}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </main>

      {/* 08 FOOTER */}
      <Footer />

      {/* MODALS & OVERLAYS */}
      <ProductDetailModal
        product={selectedProductDetail}
        onClose={() => setSelectedProductDetail(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProductDetail ? wishlistIds.includes(selectedProductDetail.id) : false}
        onToggleWishlist={handleToggleWishlist}
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
        onOpenDetail={(prod) => setSelectedProductDetail(prod)}
      />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={WOMAN_LUX_PRODUCTS}
        onOpenDetail={(prod) => setSelectedProductDetail(prod)}
      />
    </div>
  );
}
