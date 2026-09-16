import React from 'react';
import { Star } from 'lucide-react';

export const RatingStars: React.FC<{ rating: number; count?: number; size?: string }> = ({ 
  rating, 
  count, 
  size = 'w-3.5 h-3.5' 
}) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex text-[#F59E0B]">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`${size} ${i < Math.floor(rating) ? 'fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <span className="text-xs font-bold text-[#4A2838] ml-0.5">{rating.toFixed(1)}</span>
      {count !== undefined && (
        <span className="text-[10px] text-[#8A7480]">({count})</span>
      )}
    </div>
  );
};