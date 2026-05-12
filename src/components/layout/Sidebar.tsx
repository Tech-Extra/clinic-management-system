import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  Users, 
  BarChart, 
  Box, 
  Settings 
} from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: User, label: 'Patients', href: '/patients' },
  { icon: Users, label: 'Staff', href: '/staff' },
  { icon: BarChart, label: 'Reports', href: '/reports' },
  { icon: Box, label: 'Inventory', href: '/inventory' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 z-50 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
            W
          </div>
          <div>
            <h2 className="font-bold text-blue-900 text-lg leading-tight">Admin Portal</h2>
            <p className="text-slate-500 text-xs font-medium">Wa East Admin</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-semibold transition-all duration-200 group",
              isActive 
                ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600 rounded-l-none" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5",
              item.icon === LayoutDashboard && "fill-current opacity-80"
            )} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-100">
        <div className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop" 
            alt="User" 
            className="w-10 h-10 rounded-full object-cover border border-slate-200"
            referrerPolicy="no-referrer"
          />
          <div className="overflow-hidden">
            <p className="font-bold text-slate-900 text-sm truncate">Dr. Kwame Mensah</p>
            <p className="text-slate-500 text-xs truncate">Lead Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
