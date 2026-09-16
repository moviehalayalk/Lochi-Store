import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem } from '../../types';

interface CartItemRowProps {
  item: CartItem;
  onUpdateQty: (qty: number) => void;
  onRemove: () => void;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({ item, onUpdateQty, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-2xl border border-pink-100 gap-3">
      <img src={item.product.images[0]} alt={item.product.name} className="w-14 h-14 rounded-xl object-cover" />
      <div className="flex-1 min-w-0">
        <h4 className="text-xs font-bold text-[#4A2838] truncate">{item.product.name}</h4>
        {item.selectedColor && <p className="text-[10px] text-gray-400">Color: {item.selectedColor}</p>}
        <span className="text-xs font-black text-[#9D174D]">Rs. {item.product.price.toLocaleString()}</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center border border-pink-200 rounded-lg">
          <button onClick={() => onUpdateQty(item.quantity - 1)} className="p-1 text-xs">-</button>
          <span className="px-2 text-xs font-bold">{item.quantity}</span>
          <button onClick={() => onUpdateQty(item.quantity + 1)} className="p-1 text-xs">+</button>
        </div>
        <button onClick={onRemove} className="text-gray-400 hover:text-red-500 p-1">
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};