import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PageType } from '../types';

export const TermsConditionsPage: React.FC<{ onNavigate: (page: PageType) => void }> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <button
        onClick={() => onNavigate('home')}
        className="inline-flex items-center gap-2 text-xs font-bold text-[#BE185D] hover:underline"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </button>

      <div className="bg-white rounded-3xl border border-[#FCE7F0] p-8 sm:p-12 space-y-6 shadow-xs">
        <div className="border-b border-[#FCE7F0] pb-4">
          <h1 className="text-2xl sm:text-3xl font-black text-[#831843]">Terms & Conditions</h1>
          <p className="text-xs text-[#8A7480] mt-1">Lochi Store • Galle, Sri Lanka</p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#6E5A65] leading-relaxed">
          <p>
            Welcome to <strong>Lochi Store</strong>. By accessing our boutique website and ordering our handcrafted products, you agree to comply with and be bound by the following terms.
          </p>

          <h3 className="text-base font-bold text-[#831843] pt-2">1. Handcrafted Product Variations</h3>
          <p>
            Because each scrunchie, hairband, and gift box is handmade by our artisans in Galle, minor variations in fabric sheen, stitching, or flower accents may occur. These nuances reflect authentic craftsmanship.
          </p>

          <h3 className="text-base font-bold text-[#831843] pt-2">2. Pricing & Currency</h3>
          <p>
            All prices are listed in Sri Lankan Rupees (LKR / Rs.). Delivery fees are calculated during checkout according to standard islandwide courier rates. Free delivery applies on qualifying orders exceeding Rs. 10,000.
          </p>

          <h3 className="text-base font-bold text-[#831843] pt-2">3. Orders & Cancellations</h3>
          <p>
            Orders can be canceled within 4 hours of placement before packaging and courier handover. Once dispatched from our Galle studio with a tracking number, orders cannot be canceled.
          </p>
        </div>
      </div>
    </div>
  );
};