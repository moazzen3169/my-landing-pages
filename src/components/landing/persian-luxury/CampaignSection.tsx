'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { LuxuryProduct, PRIVATE_SALE_CAMPAIGN } from '@/data/persian-luxury-women';

interface CampaignSectionProps {
  products: LuxuryProduct[];
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: LuxuryProduct) => void;
}

export default function CampaignSection({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
}: CampaignSectionProps) {
  const campaignProducts = products.filter((p) => p.discountPercent).slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-b border-[#E5E5E5] font-peyda text-[#111111]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12">

        {/* BANNER HEADER */}
        <div className="mb-12 border-b border-[#E5E5E5] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="block text-[11px] font-mono font-medium text-[#999999] uppercase tracking-widest mb-2">
              SPECIAL CAMPAIGN
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#000000]">
              {PRIVATE_SALE_CAMPAIGN.titlePersian}
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] mt-2 font-normal max-w-xl leading-relaxed">
              {PRIVATE_SALE_CAMPAIGN.descriptionPersian}
            </p>
          </div>

          <div className="text-xs font-mono text-[#000000] border border-[#000000] px-4 py-2 self-start md:self-auto uppercase">
            {PRIVATE_SALE_CAMPAIGN.subtitlePersian}
          </div>
        </div>

        {/* CAMPAIGN PRODUCTS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {campaignProducts.map((product) => (
            <ProductCard
              key={`camp-${product.id}`}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
