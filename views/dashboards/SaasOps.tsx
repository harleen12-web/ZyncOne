import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { 
  Terminal, AlertTriangle, Activity, Database, GitPullRequest, 
  BarChart2, Server, Clock, Play, List, Users, Shield, Zap, Layers
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, Cell, AreaChart, Area } from 'recharts';

export const SaasOps = ({ userName, company }: { userName: string, company: string }) => {
  const pipelineData = [
    { name: 'Tue', value: 20 },
    { name: 'Wed', value: 15 },
    { name: 'Thu', value: 12 },
    { name: 'Fri', value: 25 },
    { name: 'Sat', value: 18 },
    { name: 'Sun', value: 10 },
    { name: 'Tue2', value: 22 },
    { name: 'Mon', value: 14 },
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-10">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
             <span className="uppercase tracking-wider font-bold text-brand-yellow">{company}</span>
             <span>•</span>
             <span>Operations Dashboard</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Sprint Progress</h1>
        </div>
        <div className="text-right">
           <div className="text-xs text-gray-500 mb-1">Updated just now <span className="text-green-500">●●●</span></div>
           <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden ml-auto">
             <div className="w-full h-full flex items-center justify-center text-xs">RV</div>
           </div>
        </div>
      </div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         <Card className="bg-[#111] border-gray-800 p-4">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">SPRINT 42 COMPLETION</div>
            <div className="flex items-end justify-between mb-2">
               <span className="text-4xl font-bold text-white">74%</span>
               <span className="text-xs text-gray-500 mb-1">50 stories</span>
            </div>
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden mb-1">
               <div className="h-full bg-brand-yellow w-[74%]"></div>
            </div>
            <div className="text-right text-xs text-gray-400">2.1 days</div>
         </Card>

         <Card className="bg-[#111] border-gray-800 p-4">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">ACTIVE INCIDENTS</div>
            <div className="flex items-center gap-4">
               <span className="text-4xl font-bold text-white">2</span>
               <div className="flex flex-col">
                  <span className="text-xs text-red-500 font-bold">▲ 2 remaining</span>
                  <Badge variant="danger" className="mt-1 text-[10px]">Critical</Badge>
               </div>
            </div>
         </Card>

         <Card className="bg-[#111] border-gray-800 p-4">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">DEPLOYMENT FREQUENCY</div>
            <div className="flex items-center gap-2">
               <span className="text-4xl font-bold text-white">9</span>
               <div className="flex flex-col">
                  <span className="text-sm text-white">deployments</span>
                  <span className="text-xs text-gray-500">this week</span>
               </div>
            </div>
            <div className="mt-2 text-xs bg-gray-800 inline-block px-2 py-0.5 rounded text-gray-400">● 35 collector</div>
         </Card>

         <Card className="bg-[#111] border-gray-800 p-4">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">TEAM CAPACITY</div>
            <div className="flex items-center gap-4 mb-2">
               <span className="text-4xl font-bold text-white">83%</span>
               <span className="text-[10px] text-gray-500 bg-gray-800 px-1 rounded">● Capacity Locked</span>
            </div>
            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden flex">
               <div className="h-full bg-brand-yellow w-[60%]"></div>
               <div className="h-full bg-blue-500 w-[23%]"></div>
            </div>
         </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Column 1: Sprint & Deployment Pipeline */}
         <div className="space-y-6">
            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                     <List className="text-brand-yellow" size={18} />
                     <h3 className="font-bold text-base">Sprint Progress</h3>
                  </div>
               </div>

               <div className="flex justify-between items-center mb-4">
                  <span className="text-white font-medium">Sprint 42 Completion</span>
                  <span className="text-brand-yellow font-bold">74% &rsaquo;</span>
               </div>
               <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-brand-yellow w-[74%]"></div>
               </div>

               <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                     <span className="text-gray-400">41 of 52 stories completed</span>
                     <span className="text-gray-500 text-xs line-through">34 1.75</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-gray-400">3 spilled over stories</span>
                     <span className="text-red-500 font-bold">3 ▲</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-gray-400">2 days remaining</span>
                     <span className="text-white">2.1 days</span>
                  </div>
               </div>

               <div className="mb-2 text-sm text-gray-400 font-bold">Stories at Risk</div>
               <div className="space-y-2">
                  <div className="flex justify-between items-center bg-gray-900/50 p-2 rounded border border-gray-800">
                     <div className="flex items-center gap-2">
                        <Terminal size={14} className="text-green-500" />
                        <span className="text-sm text-white">Add Webhooks API</span>
                     </div>
                     <div className="flex gap-2">
                        <Activity size={14} className="text-gray-500" />
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                     </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-900/50 p-2 rounded border border-gray-800">
                     <div className="flex items-center gap-2">
                        <Shield size={14} className="text-red-500" />
                        <span className="text-sm text-white">Rework Access Controls</span>
                     </div>
                     <Badge variant="danger" className="text-[10px]">Critical</Badge>
                  </div>
                  <div className="flex gap-2 mt-2">
                     <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded">Frontend</span>
                     <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded">Backend</span>
                     <span className="text-[10px] text-brand-yellow ml-auto flex items-center gap-1">● CTE</span>
                  </div>
               </div>

               <Button variant="outline" fullWidth className="mt-4 text-xs h-9 border-gray-700">View Full Sprint ▾</Button>
            </Card>

            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <Zap className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Deployment Pipeline</h3>
               </div>
               
               <div className="flex justify-between items-end mb-4">
                  <div>
                     <div className="text-sm text-white mb-1"><span className="text-2xl font-bold">31</span> builds this week</div>
                     <div className="text-xs text-gray-500"><CloudIcon size={10} className="inline mr-1"/> Duilp deployments</div>
                  </div>
                  <div className="text-2xl font-bold text-white">31</div>
               </div>

               <div className="h-16 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={pipelineData}>
                        <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} strokeWidth={2} />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
               <div className="flex justify-between text-[10px] text-gray-500 mt-2">
                  <span>Tests</span>
                  <span>Timenray</span>
                  <span>Qhs</span>
                  <span>II--</span>
                  <span>New</span>
                  <span>devicus</span>
                  <span>TVOOO0 Ook</span>
               </div>

               <div className="mt-6 pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2 mb-2">
                     <Users className="text-brand-yellow" size={16} />
                     <h4 className="font-bold text-sm text-white">Task Aging</h4>
                  </div>
                  <div className="space-y-2 text-xs">
                     <div className="flex justify-between text-gray-400">
                        <span className="flex items-center gap-1"><AlertTriangle size={10} className="text-red-500"/> Blocked tasks</span>
                        <span className="text-white font-bold flex items-center gap-1"><AlertTriangle size={10}/> 9</span>
                     </div>
                     <div className="flex justify-between text-gray-400">
                        <span className="flex items-center gap-1"><Activity size={10} className="text-brand-yellow"/> 17 Open more 7 days</span>
                        <span className="text-brand-yellow font-bold flex items-center gap-1">▲ 64 6</span>
                     </div>
                     <div className="flex justify-between text-gray-400">
                        <span className="flex items-center gap-1"><Activity size={10} className="text-brand-yellow"/> 17 Open more 30 days</span>
                        <span className="text-white font-bold flex items-center gap-1">▲ 4</span>
                     </div>
                  </div>
               </div>
            </Card>
         </div>

         {/* Column 2: Deployment Detail & Reliability */}
         <div className="space-y-6">
            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <Server className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Deployment Pipeline</h3>
               </div>

               <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="text-white font-bold">31 <span className="font-normal text-gray-400">builds this week</span></span>
                  <span className="text-white font-bold">3 <span className="font-normal text-gray-400">failed</span></span>
                  <span className="text-red-500 font-bold flex items-center gap-1"><Activity size={12}/> ▲ 9</span>
               </div>

               <div className="h-32 w-full mb-2">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={pipelineData}>
                        <Bar dataKey="value" fill="#374151" radius={[2, 2, 0, 0]}>
                           {pipelineData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={index === 1 ? '#10B981' : (index === 3 ? '#374151' : (index === 7 ? '#3b82f6' : '#374151'))} />
                           ))}
                        </Bar>
                     </BarChart>
                  </ResponsiveContainer>
               </div>
               <div className="flex justify-between text-[10px] text-gray-500 uppercase">
                  <span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span><span>Tue</span><span>Mon</span><span>Down</span>
               </div>

               <div className="mt-6 flex justify-between items-center text-sm">
                  <span className="text-white font-bold">Deployment Velocity <span className="text-red-500">▲</span></span>
                  <span className="text-white font-bold">2.3 days <span className="text-red-500 text-xs">▲ 1</span></span>
               </div>

               <div className="mt-4 bg-gray-900/50 p-2 rounded border border-gray-800 text-[10px] text-gray-400">
                  <div className="flex justify-between mb-1">
                     <span>28% development cost but drives only 4% revenue</span>
                     <span className="text-green-500">+4 15%</span>
                  </div>
                  <div className="bg-brand-yellow/10 text-brand-yellow p-1.5 rounded flex items-center gap-2 border border-brand-yellow/20 mt-2">
                     <AlertTriangle size={10} /> Reassign: 2 backend engineers to collaboration hub
                  </div>
               </div>
               
               <Button variant="outline" fullWidth className="mt-3 text-xs h-8 border-gray-700">Reallocate Now</Button>
            </Card>

            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <Activity className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">System Reliability & Incidents</h3>
               </div>

               <div className="bg-[#111] p-3 rounded border border-gray-800 mb-4">
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-white font-bold text-sm">Incident Command Center</span>
                     <span className="text-[10px] bg-gray-800 px-2 py-0.5 rounded text-gray-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span> Arlth Sunees Tearity 1
                     </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                     <div className="flex items-center gap-2">
                        <span className="bg-red-600 text-white px-1 rounded font-bold">P1</span>
                        <span className="text-gray-300">API Slowdown</span>
                     </div>
                     <span className="text-red-500 bg-red-900/20 px-1 rounded">▲ 8% 1 Letigp</span>
                     <span className="text-gray-500">Abbased</span>
                     <span className="text-white font-bold">18 mins</span>
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-gray-500">
                     <span>Oweneed clicks trask</span>
                     <span className="text-brand-yellow">Views AI SUMMARY</span>
                  </div>
               </div>

               <div className="mb-2 flex items-center gap-2 text-sm text-gray-300">
                  <Database size={14} className="text-brand-yellow" /> Cloud Spend
               </div>
               <div className="flex justify-between items-end mb-2">
                  <div>
                     <span className="text-brand-yellow font-bold text-lg">₹9.6 Lakhs</span>
                     <span className="text-gray-500 text-xs ml-2">Cost mrs month</span>
                  </div>
                  <div className="text-right">
                     <span className="text-white text-xs">₹235</span>
                     <span className="text-green-500 text-[10px] ml-1">▲ 8%</span>
                  </div>
               </div>
               
               <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-900 p-2 rounded">
                  <span className="text-brand-yellow">AWS</span>
                  <span>Database High</span>
                  <span className="ml-auto border border-gray-700 px-2 rounded flex items-center gap-1">Usage &rsaquo;</span>
               </div>

               <Button fullWidth className="mt-4 text-xs h-8 bg-brand-yellow text-black border-none font-bold">Reassign Developers</Button>
            </Card>
         </div>

         {/* Column 3: Efficiency & Roadmap */}
         <div className="space-y-6">
            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <GitPullRequest className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Focus Drift & Execution Efficiency</h3>
               </div>

               <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                     <span className="text-white font-medium">Low-Code Builder</span>
                     <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">+v 7 0</span>
                        <span className="text-brand-yellow font-bold">23%</span>
                     </div>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-brand-yellow w-[23%]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                     <span>Usage: 6/8 sslownal</span>
                     <span>Deployment time 0.6.3</span>
                  </div>
               </div>

               <div className="h-8 w-full border-b border-gray-800 mb-2">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={pipelineData}>
                        <Area type="monotone" dataKey="value" stroke="#6b7280" fill="none" strokeWidth={1} />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
               
               <div className="flex justify-between text-[10px] text-gray-500">
                  <span>Avg deployments time: 2.3 days</span>
                  <span className="text-red-500">▲ 1 Iss3 bevrplaron time</span>
                  <span>0.2 Retti1estds</span>
               </div>
            </Card>

            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <BarChart2 className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Roadmap Alignment</h3>
               </div>

               <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                     <span className="text-white font-medium">Q2 AI-Based Assistant</span>
                     <span className="text-green-500 bg-green-900/30 px-1 rounded text-[10px]">#1 89%</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-brand-yellow w-[89%]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                     <span>1 Week Behind</span>
                     <span>$16% Projections</span>
                  </div>
               </div>

               <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                     <span className="text-white"><span className="font-bold">71%</span> of sprint work tied to revenue drivers</span>
                     <span className="text-[10px] text-gray-500">$.33 Fullune Featiling --</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden flex">
                     <div className="h-full bg-blue-500 w-[71%]"></div>
                     <div className="h-full bg-gray-600 w-[29%]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                     <span>+ro Antinies</span>
                     <span>Tales</span>
                     <span>Time apo revents</span>
                     <span>Views</span>
                  </div>
               </div>
            </Card>

            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Escalated Issues & Resource Usage</h3>
               </div>

               <div className="flex justify-between text-sm mb-2">
                  <span className="text-white">4 Escalated Tickets</span>
                  <div className="flex items-center gap-2">
                     <span className="text-gray-400 text-xs">3 SLA rreounts</span>
                     <span className="bg-gray-800 text-gray-300 text-[10px] px-1 rounded">↓ 5%</span>
                  </div>
               </div>

               <div className="bg-[#111] p-2 rounded mb-3">
                  <div className="flex items-start gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500 mt-1"></div>
                     <div className="flex-1">
                        <div className="text-xs text-gray-300">Enterprise Client: Alpha Soft Solutions</div>
                        <div className="text-[10px] text-gray-500">Feature: Analytics Tool</div>
                     </div>
                     <div className="text-right">
                        <div className="text-[10px] text-red-500 bg-red-900/20 px-1 rounded font-bold">▲ Samecs by: 4.2% ▲</div>
                        <div className="text-[8px] text-gray-500 mt-1">Becloses @ 62% - 1 3.22%</div>
                     </div>
                  </div>
               </div>

               <div className="flex items-end justify-between mb-2">
                  <div>
                     <div className="flex items-center gap-1 text-sm font-bold text-white"><Database size={12} className="text-brand-yellow"/> ₹9.6 Lakh <span className="text-green-500 text-[10px]">✔01</span></div>
                     <div className="text-[10px] text-gray-500">Compor nontes</div>
                  </div>
               </div>
               <div className="h-8 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={pipelineData}>
                        <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} strokeWidth={1} />
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
               <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span className="flex items-center gap-1"><Layers size={10}/> Analytics</span>
                  <span>High usage</span>
                  <span>TeasK</span>
               </div>

               <Button fullWidth className="mt-4 text-xs h-8 bg-brand-yellow/90 text-black border-none font-bold hover:bg-brand-yellow">Raise Infrastructure Alert</Button>
            </Card>
         </div>
      </div>
    </div>
  );
};

// Helper for generic icon
const CloudIcon = ({ size, className }: { size: number, className?: string }) => (
   <svg 
     xmlns="http://www.w3.org/2000/svg" 
     width={size} 
     height={size} 
     viewBox="0 0 24 24" 
     fill="none" 
     stroke="currentColor" 
     strokeWidth="2" 
     strokeLinecap="round" 
     strokeLinejoin="round" 
     className={className}
   >
     <path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19" />
     <path d="M12 13.5V4.5" />
     <path d="m15.5 8-3.5-3.5L8.5 8" />
   </svg>
);