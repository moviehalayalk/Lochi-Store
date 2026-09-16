import React, { useState } from 'react';
import { User, LogOut, Package, MapPin, ShieldCheck, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { PageType } from '../types';

export const AccountPage: React.FC<{ onNavigate: (page: PageType) => void }> = ({ onNavigate }) => {
  const { user, logout, updateProfile, isAdmin } = useAuth();
  const [name, setName] = useState(user?.displayName || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [address, setAddress] = useState(user?.address || '');
  const [city, setCity] = useState(user?.city || 'Galle');
  const [saved, setSaved] = useState(false);

  if (!user) {
    onNavigate('login');
    return null;
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ displayName: name, phone, address, city });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex items-center justify-between pb-4 border-b border-[#FCE7F0]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#831843]">Customer Account</h1>
          <p className="text-xs text-[#8A7480]">Manage delivery address and contact information</p>
        </div>
        <button
          onClick={() => { logout(); onNavigate('home'); }}
          className="flex items-center gap-1.5 text-xs font-bold text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-full"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-3xl border border-[#FCE7F0] space-y-4 shadow-xs h-fit">
          <div className="w-16 h-16 rounded-full bg-[#FCE7F0] text-[#BE185D] flex items-center justify-center font-black text-xl mx-auto">
            {user.displayName.charAt(0).toUpperCase()}
          </div>
          <div className="text-center">
            <h3 className="font-bold text-sm text-[#4A2838]">{user.displayName}</h3>
            <p className="text-xs text-[#8A7480]">{user.email}</p>
            {isAdmin && (
              <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-[#BE185D] text-white text-[10px] font-black">
                Verified Store Administrator
              </span>
            )}
          </div>

          <div className="pt-4 border-t border-pink-100 space-y-2">
            <button
              onClick={() => onNavigate('orders')}
              className="w-full py-2 px-3 rounded-xl bg-pink-50 hover:bg-pink-100 text-[#831843] text-xs font-bold flex items-center justify-center gap-2"
            >
              <Package className="w-4 h-4" />
              <span>Track Orders</span>
            </button>
            {isAdmin && (
              <button
                onClick={() => onNavigate('admin')}
                className="w-full py-2 px-3 rounded-xl bg-[#BE185D] text-white text-xs font-bold flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Admin Console</span>
              </button>
            )}
          </div>
        </div>

        {/* Address & Profile Edit Form */}
        <form onSubmit={handleSave} className="md:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-[#FCE7F0] space-y-4 shadow-xs">
          <h3 className="text-base font-bold text-[#831843]">Saved Delivery Details</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-semibold text-[#831843]">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-pink-200 mt-1"
              />
            </div>
            <div>
              <label className="font-semibold text-[#831843]">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-pink-200 mt-1"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="font-semibold text-[#831843]">Default Delivery Address</label>
              <input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-pink-200 mt-1"
              />
            </div>
            <div>
              <label className="font-semibold text-[#831843]">City</label>
              <input
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-pink-200 mt-1"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center gap-3">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#BE185D] hover:bg-[#9D174D] text-white text-xs font-bold"
            >
              Update Profile
            </button>
            {saved && (
              <span className="text-xs text-green-600 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Details saved!
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};