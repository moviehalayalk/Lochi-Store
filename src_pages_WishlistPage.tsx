import React from 'react';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/common/ProductCard';
import { PageType, Product } from '../types';

export const WishlistPage: React.FC<{ onNavigate: (page: PageType, product?: Product) => void }> = ({ onNavigate }) => {
  const { items, clearWishlist } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-4">
        <Heart className="w-16 h-16 text-[#FBCFE8] mx-auto" />
        <h2 className="text-2xl font-black text-[#831843]">Your Wishlist is Empty</h2>
        <p className="text-xs text-[#8A7480]">Save your favorite scrunchies, velvet bands, and pearl clips here.</p>
        <button
          onClick={() => onNavigate('shop')}
          className="mt-4 px-6 py-2.5 rounded-full bg-[#BE185D] text-white text-xs font-bold"
        >
          Discover Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex items-center justify-between pb-4 border-b border-[#FCE7F0]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#831843]">My Wishlist ({items.length})</h1>
          <p className="text-xs text-[#8A7480]">Your curated selection of delicate hair accessories</p>
        </div>
        <button
          onClick={clearWishlist}
          className="text-xs font-semibold text-red-500 hover:underline"
        >
          Clear Wishlist
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map(product => (
          <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
};