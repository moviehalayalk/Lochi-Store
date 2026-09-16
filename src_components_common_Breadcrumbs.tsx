import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageType } from '../../types';

interface BreadcrumbsProps {
  paths: { label: string; page?: PageType }[];
  onNavigate: (page: PageType) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths, onNavigate }) => {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-[#8A7480] py-2 mb-4">
      <button 
        onClick={() => onNavigate('home')} 
        className="flex items-center gap-1 hover:text-[#BE185D]"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      {paths.map((p, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3 h-3 text-pink-300" />
          {p.page ? (
            <button 
              onClick={() => onNavigate(p.page!)} 
              className="hover:text-[#BE185D] font-medium"
            >
              {p.label}
            </button>
          ) : (
            <span className="text-[#831843] font-bold">{p.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};