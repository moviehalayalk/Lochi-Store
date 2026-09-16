import React from 'react';
import { ShieldCheck, Lock, Eye, ArrowLeft } from 'lucide-react';
import { PageType } from '../types';

export const PrivacyPolicyPage: React.FC<{ onNavigate: (page: PageType) => void }> = ({ onNavigate }) => {
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
          <h1 className="text-2xl sm:text-3xl font-black text-[#831843]">Privacy Policy</h1>
          <p className="text-xs text-[#8A7480] mt-1">Last Updated: September 2026 • Lochi Store Boutique, Galle</p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#6E5A65] leading-relaxed">
          <p>
            At <strong>Lochi Store</strong>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy describes how we collect, use, and safeguard your details when you purchase our handcrafted hair accessories or interact with our website.
          </p>

          <h3 className="text-base font-bold text-[#831843] pt-2">1. Information We Collect</h3>
          <p>
            When you place an order or contact our boutique, we collect necessary dispatch information including your full name, delivery address, phone number (for courier and WhatsApp notifications), and email address.
          </p>

          <h3 className="text-base font-bold text-[#831843] pt-2">2. How Your Information is Used</h3>
          <p>
            Your information is strictly used for:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Processing and dispatching your handmade hair accessories directly from our Galle studio.</li>
            <li>Providing order confirmations, waybill tracking numbers, and delivery updates.</li>
            <li>Customer support inquiries through WhatsApp or phone.</li>
          </ul>

          <h3 className="text-base font-bold text-[#831843] pt-2">3. Payment & Data Security</h3>
          <p>
            We do not store your credit/debit card credentials on our servers. For bank transfer orders, payment slips uploaded or sent via WhatsApp are strictly used to verify order settlement and are held securely.
          </p>

          <h3 className="text-base font-bold text-[#831843] pt-2">4. Contacting Our Privacy Officer</h3>
          <p>
            If you have questions regarding your data or wish to update your records, contact us at <strong>lochistore68@gmail.com</strong> or call <strong>+94 77 201 6921</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};