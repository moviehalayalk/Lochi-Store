import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const WhatsAppFloatingButton: React.FC = () => {
  const { siteContent } = useStore();
  const phone = (siteContent.whatsappNumber || '94772016921').replace(/\+/g, '').trim();

  return (
    <a
      href={`https://wa.me/${phone}?text=Hello%20Lochi%20Store!%20I%20would%20like%20to%20inquire%20about%20your%20hair%20accessories.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-xl hover:scale-110 transition-all flex items-center gap-2 group"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pr-1">
        WhatsApp Order & Support
      </span>
    </a>
  );
};