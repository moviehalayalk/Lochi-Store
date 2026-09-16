import React, { useState } from 'react';
import { Flower2, Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { PageType } from '../types';

export const LoginPage: React.FC<{ onNavigate: (page: PageType) => void }> = ({ onNavigate }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      if (success) {
        if (email.toLowerCase().includes('mathishpahasara9@gmail.com')) {
          onNavigate('admin');
        } else {
          onNavigate('account');
        }
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl border border-[#FCE7F0] p-8 shadow-xs space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#FCE7F0] text-[#BE185D] flex items-center justify-center mx-auto">
            <Flower2 className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black text-[#831843]">Welcome to Lochi Store</h1>
          <p className="text-xs text-[#8A7480]">Sign in to track your hair accessory orders or access administration</p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-[#831843]">Email Address</label>
            <div className="relative mt-1">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-pink-200 focus:outline-hidden focus:ring-2 focus:ring-[#DB2777]"
              />
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="font-bold text-[#831843]">Password</label>
            <div className="relative mt-1">
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-pink-200 focus:outline-hidden focus:ring-2 focus:ring-[#DB2777]"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#BE185D] hover:bg-[#9D174D] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>{loading ? 'Signing In...' : 'Sign In'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick hint for Owner */}
        <div className="p-3 bg-[#FFF5F8] border border-pink-100 rounded-xl text-[11px] text-[#6E5A65] flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#BE185D] shrink-0" />
          <span>
            Store Owner: Use <strong className="text-[#BE185D]">mathishpahasara9@gmail.com</strong> for instant Admin Console access.
          </span>
        </div>

        <div className="text-center text-xs text-[#8A7480] pt-2 border-t border-pink-100">
          Don't have an account?{' '}
          <button
            onClick={() => onNavigate('register')}
            className="text-[#BE185D] font-bold hover:underline"
          >
            Create one now
          </button>
        </div>
      </div>
    </div>
  );
};