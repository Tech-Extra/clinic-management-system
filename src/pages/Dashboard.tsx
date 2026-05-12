import React from 'react';
import { UserPlus, Search, TrendingUp, TrendingDown, Users, Calendar, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';

const data = [
  { name: 'Mon', visits: 400, malaria: 240, ana: 120 },
  { name: 'Tue', visits: 300, malaria: 139, ana: 210 },
  { name: 'Wed', visits: 200, malaria: 980, ana: 229 },
  { name: 'Thu', visits: 278, malaria: 390, ana: 200 },
  { name: 'Fri', visits: 189, malaria: 480, ana: 218 },
  { name: 'Sat', visits: 239, malaria: 380, ana: 250 },
  { name: 'Sun', visits: 349, malaria: 430, ana: 210 },
];

const staff = [
  { name: 'Dr. Kwame Mensah', role: 'Doctor', status: 'On-Duty', avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop' },
  { name: 'Ama Serwaa', role: 'Nurse', status: 'On-Duty', avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop' },
  { name: 'Kofi Osei', role: 'CHW', status: 'Off-Duty', avatar: 'https://images.unsplash.com/photo-1537368910025-703d0ad7bf5e?w=100&h=100&fit=crop' },
  { name: 'Grace Appiah', role: 'Admin', status: 'On-Duty', avatar: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?w=100&h=100&fit=crop' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="flex items-center justify-center gap-4 bg-blue-600 text-white p-6 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 group active:scale-[0.98]">
          <div className="p-3 bg-blue-500 rounded-xl group-hover:scale-110 transition-transform">
            <UserPlus className="w-8 h-8" />
          </div>
          <span className="text-xl font-bold uppercase tracking-wider">Register New Patient</span>
        </button>
        <button className="flex items-center justify-center gap-4 bg-white text-blue-600 border-2 border-blue-600 p-6 rounded-2xl hover:bg-blue-50 transition-all shadow-sm group active:scale-[0.98]">
          <div className="p-3 bg-blue-50 rounded-xl group-hover:scale-110 transition-transform">
            <Search className="w-8 h-8" />
          </div>
          <span className="text-xl font-bold uppercase tracking-wider">Find Patient</span>
        </button>
      </div>

      {/* Monthly Overview */}
      <section>
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-800">Monthly Overview</h3>
          <p className="text-sm text-slate-500 font-medium">May 2026</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Patient Visits" value="1,248" color="blue" chartData={data} dataKey="visits" icon={Users} trend="+12%" />
          <StatCard title="Malaria Cases" value="342" color="red" chartData={data} dataKey="malaria" icon={Activity} trend="+4%" />
          <StatCard title="Antenatal Appts" value="156" color="amber" chartData={data} dataKey="ana" icon={Calendar} trend="-2%" />
          <StatCard title="Immunizations" value="89" color="emerald" chartData={data} dataKey="visits" icon={TrendingUp} trend="+8%" />
        </div>
      </section>

      {/* Staff Roster */}
      <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="text-lg font-bold text-slate-800">Staff Roster</h3>
          <button className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            ADD NEW STAFF
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-xs font-bold uppercase tracking-wider border-b border-slate-100">
                <th className="px-8 py-4">Staff Name</th>
                <th className="px-8 py-4">Role</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {staff.map((p) => (
                <tr key={p.name} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <img src={p.avatar} alt="" className="w-10 h-10 rounded-full object-cover border border-slate-100" referrerPolicy="no-referrer" />
                      <span className="font-bold text-slate-900">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-slate-600 font-medium">{p.role}</td>
                  <td className="px-8 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                      p.status === 'On-Duty' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${p.status === 'On-Duty' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                      {p.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <button className="text-blue-600 text-sm font-bold uppercase hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function StatCard({ title, value, color, chartData, dataKey, icon: Icon, trend }: any) {
  const colors = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', stroke: '#2563eb' },
    red: { bg: 'bg-red-50', text: 'text-red-600', stroke: '#dc2626' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', stroke: '#10b981' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', stroke: '#d97706' },
  } as any;

  const activeColor = colors[color] || colors.blue;

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</p>
          <h4 className={cn("text-3xl font-black", activeColor.text)}>{value}</h4>
        </div>
        <div className={cn("p-2 rounded-lg", activeColor.bg)}>
          <Icon className={cn("w-5 h-5", activeColor.text)} />
        </div>
      </div>
      
      <div className="h-16 -mx-6 -mb-6 relative">
        <div className="absolute top-0 right-6 z-10">
          <span className={cn("text-xs font-bold px-2 py-1 rounded-md", 
            trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
          )}>
            {trend}
          </span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={activeColor.stroke} stopOpacity={0.1}/>
                <stop offset="95%" stopColor={activeColor.stroke} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={activeColor.stroke} 
              strokeWidth={2}
              fillOpacity={1} 
              fill={`url(#gradient-${color})`} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
