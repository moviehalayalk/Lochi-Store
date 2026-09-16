import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '../../types';

interface ProductEditModalProps {
  product: Product;
  onSave: (updates: Partial<Product>) => void;
  onClose: () => void;
}

export const ProductEditModal: React.FC<ProductEditModalProps> = ({ product, onSave, onClose }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [inStock, setInStock] = useState(product.inStock);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, price, inStock });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-sm text-[#831843]">Edit Product Details</h4>
          <button onClick={onClose}><X className="w-4 h-4" /></button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="font-bold">Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 border rounded-lg mt-1" />
          </div>
          <div>
            <label className="font-bold">Price (Rs.)</label>
            <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full p-2 border rounded-lg mt-1" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="stock" checked={inStock} onChange={e => setInStock(e.target.checked)} />
            <label htmlFor="stock" className="font-bold">In Stock</label>
          </div>
          <button type="submit" className="w-full py-2 bg-[#BE185D] text-white font-bold rounded-lg mt-2">Save</button>
        </form>
      </div>
    </div>
  );
};