import React from 'react';
import { Hospital, Wifi, UserCheck, ShieldCheck, Languages, Calendar, Database, RefreshCcw, Edit2, Plus, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Settings() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">System Settings</h2>
          <p className="text-slate-500 font-medium mt-1">Manage clinic configuration, user access, and system preferences.</p>
        </div>
        <button className="bg-blue-600 text-white font-black px-8 py-3 rounded-xl uppercase tracking-widest text-xs hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-100">
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Clinic Profile */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-3">
              <Hospital className="w-5 h-5 text-blue-600" />
              Clinic Profile
            </h3>
            <button className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1 group">
              <Edit2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Clinic Name</label>
              <input 
                type="text" 
                defaultValue="Wa East Community Clinic"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Facility ID</label>
              <input 
                type="text" 
                defaultValue="GH-WE-001"
                disabled
                className="w-full bg-white border border-slate-100 rounded-xl px-4 py-3 font-bold text-slate-300 cursor-not-allowed"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Physical Address</label>
              <input 
                type="text" 
                defaultValue="Plot 42, Main Road, Wa East District, Upper West Region"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Primary Contact</label>
              <input 
                type="tel" 
                defaultValue="+233 24 123 4567"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Emergency Contact</label>
              <input 
                type="tel" 
                defaultValue="+233 20 987 6543"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Connectivity */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-3">
              <Wifi className="w-5 h-5 text-emerald-500" />
              Connectivity
            </h3>
          </div>

          <div className="space-y-8 flex-1 flex flex-col">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div>
                <p className="font-bold text-slate-800 text-sm">Offline Mode</p>
                <p className="text-xs text-slate-500 mt-0.5">Store data locally when disconnected</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer group">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 group-active:scale-95 transition-transform" />
              </label>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Auto-Sync Frequency</label>
              <div className="relative">
                <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer">
                  <option>Every 15 Minutes</option>
                  <option selected>Every 30 Minutes</option>
                  <option>Every 1 Hour</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-3 mt-auto">
              <p className="text-[10px] font-bold text-slate-400 text-center uppercase tracking-widest">Last sync: Today, 10:45 AM</p>
              <button className="w-full bg-blue-50 text-blue-600 font-bold py-4 rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-blue-100 active:scale-[0.98] transition-all">
                <RefreshCcw className="w-5 h-5" />
                Force Sync Now
              </button>
            </div>
          </div>
        </div>

        {/* User Management */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-3">
              <UserCheck className="w-5 h-5 text-blue-600" />
              User Management
            </h3>
            <button className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-all">
              <Plus className="w-4 h-4" /> Add Role
            </button>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Role Name</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Access Level</th>
                  <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 italic font-medium text-slate-600">
                <SettingsRow role="Administrator" access="Full Access" active badgeColor="blue" />
                <SettingsRow role="Doctor / Physician" access="Clinical Data" badgeColor="amber" />
                <SettingsRow role="Nurse" access="Vitals & Notes" badgeColor="blue" />
                <SettingsRow role="Records Clerk" access="Registration Only" badgeColor="slate" />
              </tbody>
            </table>
          </div>
        </div>

        {/* System Preferences */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
            <h3 className="text-lg font-black text-slate-800 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              System Preferences
            </h3>
          </div>

          <div className="space-y-8 flex-1">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Interface Language</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-700 cursor-pointer">
                    <option selected>English (UK)</option>
                    <option>French</option>
                    <option>Twi</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Date Format</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-700 cursor-pointer">
                    <option selected>DD/MM/YYYY</option>
                    <option>MM/DD/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 mt-auto">
              <div className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Data Backup</h4>
                    <p className="text-xs text-slate-500">Last: Yesterday, 11:30 PM</p>
                  </div>
                </div>
                <button className="text-blue-600 text-xs font-black uppercase tracking-widest hover:bg-blue-100 px-4 py-2 rounded-lg transition-all border border-blue-200">
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsRow({ role, access, badgeColor }: any) {
  const badgeColors = {
    blue: 'bg-blue-600',
    amber: 'bg-amber-600',
    slate: 'bg-slate-600',
  } as any;

  return (
    <tr className="hover:bg-slate-50/50 transition-colors group">
      <td className="px-8 py-5 font-black text-slate-900 not-italic">{role}</td>
      <td className="px-8 py-5">
        <span className={cn(
          "inline-block px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-[0.15em] text-white",
          badgeColors[badgeColor] || badgeColors.blue
        )}>
          {access}
        </span>
      </td>
      <td className="px-8 py-5 text-right">
        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all group-hover:scale-110">
          <Edit2 className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}
