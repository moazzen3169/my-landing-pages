'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/navigation/Header';
import ProductGrid from '@/components/products/ProductGrid';
import CartDrawer from '@/components/cart/CartDrawer';
import SearchOverlay from '@/components/search/SearchOverlay';
import CustomCursor from '@/components/ui/CustomCursor';
import { Footer, QualitySection } from '@/components/editorial/FooterAndSections';
import { CartProvider, useCart } from '@/context/CartContext';
import { WishlistProvider, useWishlist } from '@/context/WishlistContext';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';
import { NOIRE_PRODUCTS } from '@/data/noire';
import { ProductColor } from '@/types';
import { formatPrice } from '@/lib/utils';
import { Heart, ShoppingBag, Check, ShieldCheck, Truck, RefreshCw, ChevronDown } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const product = NOIRE_PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <SmoothScrollProvider>
          <CustomCursor />
          <div className="min-h-screen flex flex-col bg-[#F3F2EE] text-[#111111]">
            <Header onOpenSearch={() => setIsSearchOpen(true)} />

            <main className="flex-grow pt-28 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
              {/* Breadcrumb */}
              <div className="flex items-center space-x-2 text-[10px] font-mono text-[#77746E] uppercase mb-8">
                <Link href="/" className="hover:text-[#111111]">HOME</Link>
                <span>/</span>
                <Link href="/shop" className="hover:text-[#111111]">COLLECTION</Link>
                <span>/</span>
                <span className="text-[#111111]">{product.name}</span>
              </div>

              {/* Product Info Component */}
              <ProductDetailsContent product={product} />

              {/* Quality Badges */}
              <div className="my-16">
                <QualitySection />
              </div>

              {/* Related Products */}
              <ProductGrid
                products={NOIRE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4)}
                title="YOU MAY ALSO LIKE"
                subtitle="CURATED MATCHES"
              />
            </main>

            <Footer />
            <CartDrawer />
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          </div>
        </SmoothScrollProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

function ProductDetailsContent({ product }: { product: any }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [activeImage, setActiveImage] = useState<string>(product.images[0]);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const [activeAccordion, setActiveAccordion] = useState<'desc' | 'details' | 'shipping'>('desc');

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Product Gallery */}
      <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
        {/* Thumbnails list */}
        {product.images.length > 1 && (
          <div className="flex md:flex-col space-x-3 md:space-x-0 md:space-y-3 overflow-x-auto">
            {product.images.map((img: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`relative w-20 h-24 bg-[#E8E6E1] border overflow-hidden flex-shrink-0 transition-all ${
                  activeImage === img ? 'border-[#111111] ring-1 ring-[#111111]' : 'border-[#D7D4CD]'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        )}

        {/* Large Main Image View */}
        <div className="relative aspect-[3/4] w-full bg-[#E8E6E1] border border-[#D7D4CD] overflow-hidden">
          <Image
            src={activeImage}
            alt={product.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </div>

      {/* Right Product Buy Section */}
      <div className="lg:col-span-5 space-y-6 bg-white p-8 border border-[#D7D4CD]">
        <div>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#A58B68] uppercase">
            {product.category}
          </span>
          <h1 className="text-3xl font-light font-display uppercase tracking-wide text-[#111111] mt-1">
            {product.name}
          </h1>
          <p className="text-xl font-mono text-[#111111] mt-2">
            {formatPrice(product.price, product.currency)}
          </p>
        </div>

        <p className="text-xs text-[#77746E] leading-relaxed font-light">
          {product.description}
        </p>

        {/* Color Selector */}
        <div className="space-y-2 pt-2 border-t border-[#D7D4CD]">
          <div className="flex justify-between text-xs font-mono uppercase text-[#111111]">
            <span>COLOR</span>
            <span className="text-[#77746E]">{selectedColor.name}</span>
          </div>
          <div className="flex space-x-3">
            {product.colors.map((color: ProductColor) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  selectedColor.name === color.name
                    ? 'border-[#111111] scale-110'
                    : 'border-transparent hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between text-xs font-mono uppercase text-[#111111]">
            <span>SIZE</span>
            <span className="text-[#77746E]">{selectedSize}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size: string) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-5 py-2.5 text-xs font-mono border transition-all ${
                  selectedSize === size
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'border-[#D7D4CD] text-[#111111] hover:border-[#111111]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#111111] text-[#F3F2EE] py-4 text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-[#0B0B0B] transition-colors flex items-center justify-center space-x-2"
          >
            {addedSuccess ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span>ADDED TO BAG</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>ADD TO BAG</span>
              </>
            )}
          </button>

          <button
            onClick={() => toggleWishlist(product)}
            className={`p-4 border border-[#D7D4CD] hover:border-[#111111] transition-colors ${
              inWishlist ? 'bg-[#111111] text-white' : 'text-[#111111]'
            }`}
          >
            <Heart className={`w-4 h-4 ${inWishlist ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Accordions */}
        <div className="pt-6 border-t border-[#D7D4CD] space-y-3 text-xs">
          {/* Description */}
          <div className="border-b border-[#D7D4CD] pb-3">
            <button
              onClick={() => setActiveAccordion(activeAccordion === 'desc' ? ('' as any) : 'desc')}
              className="flex justify-between items-center w-full font-bold tracking-widest uppercase text-[#111111]"
            >
              <span>MATERIALS & SPECIFICATIONS</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'desc' ? 'rotate-180' : ''}`} />
            </button>
            {activeAccordion === 'desc' && (
              <div className="pt-3 text-[#77746E] font-light space-y-1">
                <p><strong>Composition:</strong> {product.material}</p>
                <p><strong>Silhouette:</strong> {product.fit}</p>
              </div>
            )}
          </div>

          {/* Shipping */}
          <div className="border-b border-[#D7D4CD] pb-3">
            <button
              onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? ('' as any) : 'shipping')}
              className="flex justify-between items-center w-full font-bold tracking-widest uppercase text-[#111111]"
            >
              <span>SHIPPING & WORLDWIDE RETURNS</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'shipping' ? 'rotate-180' : ''}`} />
            </button>
            {activeAccordion === 'shipping' && (
              <p className="pt-3 text-[#77746E] font-light leading-relaxed">
                Complimentary global shipping on all orders over €300. Returns accepted within 15 days of receiving your order.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
