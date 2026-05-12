import React from 'react';
import { Search, Filter, UserPlus, ArrowRight, Cake, User as UserIcon } from 'lucide-react';
import { cn } from '../lib/utils';

const patients = [
  { id: 'WA-2023-0891', name: 'Kwame Mensah', age: 45, gender: 'Male', status: 'ACTIVE' },
  { id: 'WA-2023-1042', name: 'Abena Osei', age: 28, gender: 'Female', status: 'EXPIRED' },
  { id: 'WA-2021-0034', name: 'Kofi Addo', age: 62, gender: 'Male', status: 'ACTIVE' },
];

export default function Patients() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Patient Directory</h2>
          <nav className="flex items-center text-xs font-semibold text-slate-400 mt-1 uppercase tracking-widest">
            <span>Dashboard</span>
            <span className="mx-2">/</span>
            <span className="text-blue-600">Patients</span>
          </nav>
        </div>
        <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-100">
          <UserPlus className="w-5 h-5" />
          NEW PATIENT
        </button>
      </div>

      {/* Search & Filter Area */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search by Name, NHIS Number, or System ID..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium placeholder:text-slate-400"
            />
          </div>
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-4 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <Filter className="w-5 h-5" />
            FILTERS
          </button>
        </div>
      </div>

      {/* Results Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest w-20">Photo</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Patient Details</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">System ID</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">NHIS Status</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-500 transition-colors">
                      <UserIcon className="w-6 h-6" />
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{patient.name}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 uppercase">
                        <Cake className="w-3 h-3" />
                        {patient.age} yrs
                      </div>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-xs font-semibold text-slate-500 uppercase">{patient.gender}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-mono text-sm text-slate-500 font-medium">
                    {patient.id}
                  </td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-black tracking-widest border transition-all",
                      patient.status === 'ACTIVE' 
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                        : 'bg-red-50 text-red-600 border-red-100'
                    )}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                      VIEW RECORDS
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-slate-50 flex items-center justify-between bg-slate-50/20">
          <p className="text-sm font-medium text-slate-500">
            Showing <span className="text-slate-900 font-bold">1</span> to <span className="text-slate-900 font-bold">3</span> of <span className="text-slate-900 font-bold">45</span> results
          </p>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg border border-slate-200 bg-white text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all disabled:opacity-50" disabled>
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button className="p-2 rounded-lg border border-slate-200 bg-white text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
