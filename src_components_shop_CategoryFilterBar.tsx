import React from 'react';

interface CategoryFilterBarProps {
  categories: { id: string; name: string }[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryFilterBar: React.FC<CategoryFilterBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
            selectedCategory === cat.id
              ? 'bg-[#BE185D] text-white shadow-xs'
              : 'bg-white text-[#6E5A65] border border-[#FCE7F0] hover:bg-pink-50'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};