import React from 'react';

interface ProductSortDropdownProps {
  sortBy: string;
  onChangeSort: (value: string) => void;
}

export const ProductSortDropdown: React.FC<ProductSortDropdownProps> = ({ sortBy, onChangeSort }) => {
  return (
    <select
      value={sortBy}
      onChange={(e) => onChangeSort(e.target.value)}
      className="py-1.5 px-3 rounded-full border border-pink-300 text-xs bg-white text-[#4A2838] focus:outline-hidden font-semibold"
    >
      <option value="featured">Sort: Featured</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="rating">Top Rated</option>
    </select>
  );
};