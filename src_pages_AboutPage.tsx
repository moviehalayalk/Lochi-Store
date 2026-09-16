import React from 'react';
import { 
  Flower2, 
  Heart, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Truck, 
  Award, 
  ArrowRight 
} from 'lucide-react';
import { PageType } from '../types';
import { useStore } from '../context/StoreContext';

export const AboutPage: React.FC<{ onNavigate: (page: PageType) => void }> = ({ onNavigate }) => {
  const { siteContent } = useStore();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Hero Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE7F0] text-[#BE185D] text-xs font-extrabold">
          <Flower2 className="w-4 h-4" />
          <span>Handmade in Galle, Sri Lanka</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#831843] tracking-tight">
          The Story of Lochi Store
        </h1>
        <p className="text-sm sm:text-base text-[#6E5A65] leading-relaxed">
          Crafting gentle, frizz-free, and luxurious hair accessories that celebrate your natural hair with everyday beauty and zero damage.
        </p>
      </div>

      {/* Story Narrative & Imagery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl border border-[#FCE7F0] p-6 sm:p-12 shadow-xs">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#831843]">
            Born from a Passion for Hair Care & Aesthetics
          </h2>
          <p className="text-xs sm:text-sm text-[#6E5A65] leading-relaxed">
            Standard elastic hair bands often pull, create tension headaches, and cause brittle split ends. At <strong>Lochi Store</strong>, we believe every hair strand deserves delicate care.
          </p>
          <p className="text-xs sm:text-sm text-[#6E5A65] leading-relaxed">
            From our serene boutique studio in <strong>Ginimellagaha, Galle</strong>, we source premium grade satins, organzas, and mulberry silks. Each scrunchie and headband is individually cut, stitched, and tension-tested by hand to ensure a secure hold without tugging.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#FFF5F8] border border-pink-100">
              <span className="text-xl font-black text-[#BE185D]">100%</span>
              <p className="text-xs font-semibold text-[#831843] mt-0.5">Handcrafted</p>
              <p className="text-[10px] text-[#8A7480]">Made in small batches</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FFF5F8] border border-pink-100">
              <span className="text-xl font-black text-[#BE185D]">0%</span>
              <p className="text-xs font-semibold text-[#831843] mt-0.5">Friction Damage</p>
              <p className="text-[10px] text-[#8A7480]">Smooth gliding satin</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-md border border-pink-100">
          <img 
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000" 
            alt="Handcrafted Scrunchies in Galle" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Why Choose Lochi Store */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-[#831843]">The Lochi Boutique Promise</h2>
          <p className="text-xs sm:text-sm text-[#8A7480]">What sets our handmade accessories apart</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#FCE7F0] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#FCE7F0] text-[#BE185D] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#831843]">Premium Silk & Soft Elastic</h3>
            <p className="text-xs text-[#6E5A65] leading-relaxed">
              We select high-grade, wrinkle-resistant fabrics and gentle inner elastics that retain their spring for months of daily wear.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#FCE7F0] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#FCE7F0] text-[#BE185D] flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#831843]">Islandwide Sri Lanka Delivery</h3>
            <p className="text-xs text-[#6E5A65] leading-relaxed">
              Dispatched with care straight from Galle to Colombo, Kandy, Kurunegala, Jaffna, and every district across the island.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#FCE7F0] space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#FCE7F0] text-[#BE185D] flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#831843]">Aesthetic Gift Packaging</h3>
            <p className="text-xs text-[#6E5A65] leading-relaxed">
              Every parcel arrives wrapped in delicate pink tissue, floral thank-you notes, and sweet fragrances ready for gifting.
            </p>
          </div>
        </div>
      </div>

      {/* Boutique Visit & Contact Prompt */}
      <div className="rounded-3xl bg-gradient-to-r from-[#FCE7F0] via-[#FFF1F5] to-[#FCE7F0] p-8 sm:p-12 border border-[#FBCFE8] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-black text-[#831843]">Visit Us or Order for Delivery</h3>
          <p className="text-xs sm:text-sm text-[#8A7480] mt-1 max-w-lg">
            {siteContent.boutiqueAddress || "Dehithagama, Horagampita, Ginimellagaha, Galle, Sri Lanka"}
          </p>
        </div>
        <button
          onClick={() => onNavigate('shop')}
          className="px-8 py-3.5 rounded-full bg-[#BE185D] hover:bg-[#9D174D] text-white font-bold text-xs shadow-md shrink-0 flex items-center gap-2"
        >
          <span>Explore Boutique</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};