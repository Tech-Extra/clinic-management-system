import React from 'react';
import { Search, RefreshCw, Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-slate-200 z-40 bg-white/80 backdrop-blur-md">
      <div className="h-full px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="font-bold text-slate-800 text-xl">Wa East Community Clinic</h1>
          <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-xs font-semibold text-slate-600">Online - Synced</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search patients..."
              className="bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all w-64"
            />
          </div>

          <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all active:scale-95">
            <RefreshCw className="w-5 h-5" />
          </button>
          
          <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all active:scale-95 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>

          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=100&h=100&fit=crop" 
            alt="Profile" 
            className="w-10 h-10 rounded-full object-cover border border-slate-200 cursor-pointer hover:border-blue-400 transition-all"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
}
