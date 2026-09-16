import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, Check } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors?.[0] || 'Default');
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, 1, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-[#FCE7F0]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#FFF5F8] text-[#831843]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden bg-[#FFF5F8]">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-4 text-left">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#BE185D]">
                {product.category}
              </span>
              <h3 className="text-xl font-black text-[#831843] mt-0.5">{product.name}</h3>
              <div className="flex items-center gap-1 text-[#F59E0B] text-xs mt-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-gray-400">({product.reviewCount})</span>
              </div>
            </div>

            <div className="text-xl font-black text-[#9D174D]">
              Rs. {product.price.toLocaleString()}
            </div>

            <p className="text-xs text-[#6E5A65] line-clamp-3 leading-relaxed">
              {product.description}
            </p>

            {product.colors && product.colors.length > 0 && (
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-[#831843]">Select Color:</label>
                <div className="flex flex-wrap gap-1.5">
                  {product.colors.map(col => (
                    <button
                      key={col}
                      onClick={() => setSelectedColor(col)}
                      className={`px-3 py-1 rounded-full text-[10px] font-semibold border ${
                        selectedColor === col ? 'bg-[#BE185D] text-white' : 'bg-white text-[#6E5A65] border-pink-200'
                      }`}
                    >
                      {col}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={handleAdd}
                className="flex-1 py-2.5 rounded-full bg-[#BE185D] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#9D174D]"
              >
                {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                <span>{added ? 'Added to Bag!' : 'Add to Bag'}</span>
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className="p-2.5 rounded-full border border-pink-200 text-[#BE185D] hover:bg-pink-50"
              >
                <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};