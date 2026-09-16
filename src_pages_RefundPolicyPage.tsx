import React from 'react';
import { ArrowLeft, Truck, RefreshCw } from 'lucide-react';
import { PageType } from '../types';

export const RefundPolicyPage: React.FC<{ onNavigate: (page: PageType) => void }> = ({ onNavigate }) => {
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
          <h1 className="text-2xl sm:text-3xl font-black text-[#831843]">Delivery & Return Policy</h1>
          <p className="text-xs text-[#8A7480] mt-1">Dispatched directly from Galle across all Sri Lankan districts</p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#6E5A65] leading-relaxed">
          <h3 className="text-base font-bold text-[#831843]">1. Islandwide Delivery Timeline</h3>
          <p>
            Orders are carefully packed in protective packaging and dispatched within 24–48 hours of order confirmation. Delivery typically takes 2 to 4 business days depending on your district.
          </p>

          <h3 className="text-base font-bold text-[#831843] pt-2">2. Hygiene & Hair Accessory Returns</h3>
          <p>
            Due to strict hygiene standards regarding personal hair accessories, we cannot accept returns on items that have been opened or worn. However, if your order arrives damaged or with a verified defect, we will immediately send a replacement or issue a full refund.
          </p>

          <h3 className="text-base font-bold text-[#831843] pt-2">3. How to Request a Replacement</h3>
          <p>
            Simply notify us within 48 hours of package delivery via WhatsApp at <strong>+94 77 201 6921</strong> with photos of the parcel and receipt. Our Galle customer care team will assist you right away.
          </p>
        </div>
      </div>
    </div>
  );
};