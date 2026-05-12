import React from 'react';
import { Download, Calendar, ArrowUp, ArrowDown, Stethoscope, Syringe, Ambulance, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const diseaseData = [
  { disease: 'Malaria', cases: 245, trend: '+15%', status: 'Alert', color: 'red' },
  { disease: 'Respiratory (RTI)', cases: 182, trend: '-5%', status: 'Stable', color: 'blue' },
  { disease: 'Diarrheal', cases: 95, trend: '+8%', status: 'Monitor', color: 'amber' },
  { disease: 'Typhoid Fever', cases: 42, trend: '-12%', status: 'Stable', color: 'blue' },
];

const ancData = [
  { name: '1st Tri', count: 120 },
  { name: '2nd Tri', count: 185 },
  { name: '3rd Tri', count: 210 },
];

export default function Reports() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Reports Dashboard</h2>
          <p className="text-slate-500 font-medium mt-1">Overview of clinic performance and health metrics.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <div className="flex items-center bg-white border border-slate-200 rounded-xl px-4 py-3 h-[52px] group focus-within:ring-2 focus-within:ring-blue-100 transition-all flex-1 lg:flex-none min-w-[220px]">
            <Calendar className="w-4 h-4 text-slate-400 mr-3" />
            <select className="w-full bg-transparent border-none focus:ring-0 font-bold text-slate-700 text-sm p-0 cursor-pointer">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Year to Date</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white font-black h-[52px] px-8 rounded-xl uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-100 w-full lg:w-auto">
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        <CategoryPill active label="All Reports" icon={Check} />
        <CategoryPill label="Maternal Health" />
        <CategoryPill label="Disease Surveillance" />
        <CategoryPill label="OPD Attendance" />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard 
          icon={Stethoscope} 
          title="Total Consultations" 
          value="1,248" 
          trend="+12%" 
          trendUp={true}
          color="blue" 
        />
        <SummaryCard 
          icon={Syringe} 
          title="Immunization Coverage" 
          value="87.4%" 
          trend="+5%" 
          trendUp={true}
          color="amber" 
        />
        <SummaryCard 
          icon={Ambulance} 
          title="Referrals Made" 
          value="42" 
          trend="0%" 
          trendUp={null}
          color="red" 
        />
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Table Column */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-black text-slate-800">Disease Surveillance</h3>
            <button className="text-blue-600 font-bold text-sm hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest pl-8">Disease</th>
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Cases This Month</th>
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Trend vs Last Month</th>
                  <th className="p-4 text-xs font-bold text-slate-400 uppercase tracking-widest pr-8">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {diseaseData.map((d) => (
                  <tr key={d.disease} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-bold text-slate-800 pl-8">{d.disease}</td>
                    <td className="p-4 font-bold text-slate-600">{d.cases}</td>
                    <td className="p-4">
                      <div className={cn(
                        "flex items-center font-bold text-sm",
                        d.trend.startsWith('+') ? 'text-red-500' : 'text-emerald-500'
                      )}>
                        {d.trend.startsWith('+') ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                        {d.trend}
                      </div>
                    </td>
                    <td className="p-4 pr-8">
                      <span className={cn(
                        "inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                        d.status === 'Alert' && 'bg-red-50 text-red-600',
                        d.status === 'Stable' && 'bg-blue-50 text-blue-600',
                        d.status === 'Monitor' && 'bg-amber-50 text-amber-600',
                      )}>
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bar Chart Column */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col">
          <div className="mb-8">
            <h3 className="text-lg font-black text-slate-800">Maternal Health Overview</h3>
            <p className="text-sm font-medium text-slate-500">ANC Visits by Trimester</p>
          </div>
          
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ReBarChart data={ancData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                  dy={10} 
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="count" radius={[8, 8, 8, 8]} barSize={40}>
                  {ancData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === 2 ? '#2563eb' : index === 1 ? '#bfdbfe' : '#dbeafe'} 
                    />
                  ))}
                </Bar>
              </ReBarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <button className="w-full bg-white border border-slate-200 text-slate-700 font-bold py-4 rounded-xl text-sm uppercase tracking-widest hover:bg-slate-50 active:scale-[0.98] transition-all">
              Detailed ANC Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryPill({ label, icon: Icon, active }: { label: string, icon?: any, active?: boolean }) {
  return (
    <button className={cn(
      "h-[48px] px-6 rounded-full font-bold text-sm whitespace-nowrap flex items-center gap-2 transition-all active:scale-95",
      active 
        ? "bg-blue-600 text-white shadow-md shadow-blue-100" 
        : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
    )}>
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </button>
  );
}

function SummaryCard({ icon: Icon, title, value, trend, trendUp, color }: any) {
  const colorMap = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', iconBg: 'bg-blue-100', iconText: 'text-blue-600' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', iconBg: 'bg-amber-100', iconText: 'text-amber-600' },
    red: { bg: 'bg-red-50', text: 'text-red-600', iconBg: 'bg-red-100', iconText: 'text-red-600' },
  } as any;

  const styles = colorMap[color] || colorMap.blue;

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
      <div className="flex justify-between items-start mb-8">
        <div className={cn("p-4 rounded-2xl", styles.iconBg)}>
          <Icon className={cn("w-6 h-6", styles.iconText)} />
        </div>
        {trendUp !== null && (
          <div className={cn(
            "flex items-center font-bold text-xs px-2 py-1 rounded-lg",
            trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
          )}>
            {trendUp ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
            {trend}
          </div>
        )}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-400 mb-1">{title}</p>
        <h4 className="text-4xl font-black text-slate-900 tracking-tighter">{value}</h4>
      </div>
    </div>
  );
}
