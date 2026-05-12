import React from 'react';
import { Search, Filter, PlusCircle, AlertTriangle, MoreVertical, Download, Clock, ArrowDown } from 'lucide-react';
import { cn } from '../lib/utils';

const inventory = [
  { name: 'Amoxicillin 250mg', category: 'DRUG', batch: 'BATCH-8821', expiry: '2025-10-15', quantity: '450 units', status: 'normal' },
  { name: 'Paracetamol Syrup', category: 'DRUG', batch: 'BATCH-9012', expiry: '2024-03-01', quantity: '85 units', status: 'near-expiry' },
  { name: 'Malaria RDTs', category: 'CONSUMABLE', batch: 'RDT-2023-X', expiry: '2024-12-01', quantity: '5 boxes', status: 'low-stock' },
  { name: 'Surgical Gloves (M)', category: 'CONSUMABLE', batch: 'GLV-M-009', expiry: '2026-05-20', quantity: '120 boxes', status: 'normal' },
  { name: 'Digital Thermometer', category: 'EQUIPMENT', batch: 'N/A', expiry: 'N/A', quantity: '15 units', status: 'normal' },
];

export default function Inventory() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Inventory Management</h2>
          <p className="text-slate-500 font-medium mt-1">Manage medical supplies, pharmaceuticals, and equipment.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
            <Download className="w-5 h-5" />
            ISSUE ITEMS
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-blue-600 border border-blue-600 px-6 py-3 rounded-xl font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
            <PlusCircle className="w-5 h-5" />
            ADD STOCK
          </button>
        </div>
      </div>

      {/* Critical Alert */}
      <div className="bg-red-50 border border-red-100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="bg-red-100 p-4 rounded-2xl text-red-600">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-black text-red-900">Critical Low Stock Alerts</h3>
          <p className="text-red-700 font-medium text-sm mt-1">The following essential items are below minimum reorder thresholds and require immediate attention.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
          <div className="bg-white border border-red-100 rounded-xl px-4 py-3 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">ACTs (Adult)</p>
            <p className="text-sm font-black text-red-600">12 units</p>
          </div>
          <div className="bg-white border border-red-100 rounded-xl px-4 py-3 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Malaria RDTs</p>
            <p className="text-sm font-black text-red-600">5 boxes</p>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search item name, batch number..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all placeholder:text-slate-400"
            />
          </div>
          <div className="flex gap-4">
            <select className="bg-white border border-slate-200 px-6 py-4 rounded-xl font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer">
              <option>All Categories</option>
              <option>Drugs</option>
              <option>Consumables</option>
              <option>Equipment</option>
            </select>
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-4 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <Filter className="w-5 h-5" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Item Name</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Category</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Batch #</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Expiry Date</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Quantity</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {inventory.map((item) => (
                <tr key={item.name} className={cn(
                  "hover:bg-slate-50 transition-colors group",
                  item.status === 'low-stock' && 'bg-red-50/30'
                )}>
                  <td className="px-8 py-6 font-bold text-slate-900">{item.name}</td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "px-2.5 py-1 rounded-md text-[10px] font-black tracking-widest",
                      item.category === 'DRUG' && 'bg-blue-100 text-blue-700',
                      item.category === 'CONSUMABLE' && 'bg-amber-100 text-amber-700',
                      item.category === 'EQUIPMENT' && 'bg-slate-100 text-slate-700',
                    )}>
                      {item.category}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-500 font-medium font-mono">{item.batch}</td>
                  <td className="px-8 py-6">
                    <div className={cn(
                      "flex items-center gap-2 text-sm font-bold",
                      item.status === 'near-expiry' ? 'text-amber-600' : 'text-slate-500'
                    )}>
                      {item.status === 'near-expiry' && <Clock className="w-4 h-4" />}
                      {item.expiry}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className={cn(
                      "inline-flex items-center gap-1 font-black",
                      item.status === 'low-stock' ? 'text-red-600' : 'text-slate-900'
                    )}>
                      {item.status === 'low-stock' && <ArrowDown className="w-4 h-4" />}
                      {item.quantity}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
