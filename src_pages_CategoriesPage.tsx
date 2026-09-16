import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PageType } from '../types';

export const CategoriesPage: React.FC<{ onNavigate: (page: PageType, product?: any, category?: string) => void }> = ({ onNavigate }) => {
  const collections = [
    {
      id: 'scrunchies',
      title: 'Silk & Satin Scrunchies',
      description: 'Zero-tension scrunchies made with pure Mulberry silk and smooth satin to eliminate frizz and bedhead dents.',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800',
      badge: 'Bestselling Core'
    },
    {
      id: 'hairbands',
      title: 'Plush Velvet & Pearl Bands',
      description: 'Comfort-cushioned headbands crafted for pressure-free, headache-free wear throughout long work or study days.',
      image: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=800',
      badge: 'Elegance & Daily'
    },
    {
      id: 'clips',
      title: 'Opalite & French Matte Clips',
      description: 'High-grip claw clips with rust-free durable springs, designed to hold thick, wavy, or fine hair seamlessly.',
      image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800',
      badge: 'Everyday Hold'
    },
    {
      id: 'gift-boxes',
      title: 'Aesthetic Keepsake Gift Sets',
      description: 'Curated gift boxes featuring silk scrunchies, pearl accessories, and dried floral bouquets for birthdays and weddings.',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800',
      badge: 'Perfect For Gifting'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-black text-[#831843]">Handcrafted Collections</h1>
        <p className="text-xs sm:text-sm text-[#8A7480]">Explore our boutique categories made for hair health, gentle hold, and delicate style.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map(col => (
          <div
            key={col.id}
            onClick={() => onNavigate('shop', undefined, col.id)}
            className="group bg-white rounded-3xl border border-[#FCE7F0] overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col"
          >
            <div className="aspect-16/9 overflow-hidden relative">
              <img 
                src={col.image} 
                alt={col.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[#BE185D] text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs">
                {col.badge}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#831843] group-hover:text-[#BE185D] transition-colors">{col.title}</h3>
                <p className="text-xs text-[#6E5A65] mt-1.5 leading-relaxed">{col.description}</p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-[#BE185D] group-hover:translate-x-1 transition-transform">
                <span>View All In This Category</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};