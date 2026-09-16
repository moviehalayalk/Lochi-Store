import React, { useState } from 'react';
import { Sparkles, Send, Check } from 'lucide-react';

export const NewsletterBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="rounded-3xl bg-gradient-to-r from-[#FCE7F0] via-[#FBCFE8] to-[#FCE7F0] p-8 sm:p-12 text-center border border-[#F9A8D4] space-y-4 max-w-5xl mx-auto my-12">
      <div className="w-10 h-10 rounded-full bg-white text-[#BE185D] flex items-center justify-center mx-auto shadow-xs">
        <Sparkles className="w-5 h-5" />
      </div>
      <h3 className="text-2xl sm:text-3xl font-black text-[#831843]">
        Join the Lochi Boutique Circle
      </h3>
      <p className="text-xs sm:text-sm text-[#6E5A65] max-w-md mx-auto">
        Be the first to receive updates on new silk scrunchie collections, seasonal gift boxes, and special Galle studio offers.
      </p>

      {subscribed ? (
        <div className="p-3 bg-white/80 rounded-2xl text-green-700 font-bold text-xs inline-flex items-center gap-2">
          <Check className="w-4 h-4" /> Thank you for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-full border border-pink-300 text-xs bg-white focus:outline-hidden"
          />
          <button
            type="submit"
            className="px-6 py-2.5 rounded-full bg-[#BE185D] hover:bg-[#9D174D] text-white text-xs font-bold transition-all shadow-xs"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};