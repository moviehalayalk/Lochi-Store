import React from 'react';
import { ShieldCheck, Truck, Sparkles, RefreshCw } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    { icon: Sparkles, title: "100% Handcrafted", subtitle: "Grade 6A Mulberry silk & satin" },
    { icon: Truck, title: "Islandwide Delivery", subtitle: "Fast dispatch from Galle" },
    { icon: ShieldCheck, title: "Damage-Free Hold", subtitle: "Zero pulling or tension" },
    { icon: RefreshCw, title: "Easy Replacements", subtitle: "Safe hygienic guarantee" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
      {badges.map((b, i) => {
        const Icon = b.icon;
        return (
          <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-[#FCE7F0]">
            <div className="w-8 h-8 rounded-full bg-[#FCE7F0] text-[#BE185D] flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-[#831843]">{b.title}</h5>
              <p className="text-[10px] text-[#8A7480]">{b.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};