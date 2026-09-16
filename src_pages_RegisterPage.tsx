import React, { useState } from 'react';
import { Flower2, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { PageType } from '../types';

export const RegisterPage: React.FC<{ onNavigate: (page: PageType) => void }> = ({ onNavigate }) => {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const success = await register(name, email, password);
      if (success) {
        onNavigate('account');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch {
      setError('An error occurred during registration.');
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
          <h1 className="text-2xl font-black text-[#831843]">Create Your Account</h1>
          <p className="text-xs text-[#8A7480]">Join Lochi Store for easy ordering and delivery tracking across Sri Lanka</p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-[#831843]">Your Full Name</label>
            <div className="relative mt-1">
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Kasuni Perera"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-pink-200 focus:outline-hidden focus:ring-2 focus:ring-[#DB2777]"
              />
              <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
          </div>

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
                placeholder="Create a password"
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
            <span>{loading ? 'Creating Account...' : 'Register'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-[#8A7480] pt-2 border-t border-pink-100">
          Already have an account?{' '}
          <button
            onClick={() => onNavigate('login')}
            className="text-[#BE185D] font-bold hover:underline"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};