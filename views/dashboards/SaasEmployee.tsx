import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { 
  CheckSquare, AlertTriangle, Layers, GitPullRequest, Clock, 
  BarChart2, Play, AlertOctagon, RefreshCw, Zap, Database, PlayCircle, BookOpen, List, Users
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, Cell } from 'recharts';

export const SaasEmployee = ({ userName, company }: { userName: string, company: string }) => {
  const sprintData = [
    { name: 'Mon', value: 80 },
    { name: 'Tue', value: 75 },
    { name: 'Wed', value: 60 },
    { name: 'Thu', value: 55 },
    { name: 'Fri', value: 40 },
    { name: 'Sat', value: 30 },
    { name: 'Sun', value: 20 },
  ];

  const burnupData = [
    { name: '1', completed: 10, total: 20 },
    { name: '2', completed: 25, total: 35 },
    { name: '3', completed: 40, total: 45 },
    { name: '4', completed: 60, total: 65 },
    { name: '5', completed: 70, total: 80 },
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-10">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
             <span className="uppercase tracking-wider font-bold text-brand-yellow">{company}</span>
             <span>•</span>
             <span>My Work Dashboard</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Assigned Tasks</h1>
        </div>
        <div className="text-right">
           <div className="text-xs text-gray-500 mb-1">Updated just now <span className="text-green-500">●●●</span></div>
           <div className="flex items-center justify-end gap-2">
              <span className="text-xs text-gray-400">Rajat Verma</span>
              <div className="bg-gray-800 px-2 py-0.5 rounded text-xs text-gray-300">SyncOne [DE2] ▾</div>
              <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden ml-2">
                 <div className="w-full h-full flex items-center justify-center text-xs">RV</div>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
         {/* Column 1: Assigned Tasks & Sprint Overview */}
         <div className="space-y-6">
            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <CheckSquare className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Assigned Tasks</h3>
               </div>

               <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 rounded bg-gray-900/30 border border-gray-800">
                     <div className="flex items-center gap-2">
                        <span className="bg-red-900/50 text-red-400 text-[10px] px-1 rounded border border-red-900">P1</span>
                        <span className="text-sm text-white">Fix API Timeout</span>
                     </div>
                     <span className="text-[10px] bg-brand-yellow/10 text-brand-yellow px-1.5 py-0.5 rounded">P1 Today</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded bg-gray-900/30 border border-gray-800">
                     <div className="flex items-center gap-2">
                        <span className="bg-orange-900/50 text-orange-400 text-[10px] px-1 rounded border border-orange-900">P2</span>
                        <span className="text-sm text-white">Refactor Notification System</span>
                     </div>
                     <span className="text-[10px] text-green-500">P2 Due 2 days</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded bg-gray-900/30 border border-gray-800">
                     <div className="flex items-center gap-2">
                        <span className="bg-orange-900/50 text-orange-400 text-[10px] px-1 rounded border border-orange-900">P2</span>
                        <span className="text-sm text-white">Implement OAuth</span>
                     </div>
                     <span className="text-[10px] text-green-500">P2 Due 4 days</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded bg-gray-900/30 border border-gray-800">
                     <div className="flex items-center gap-2">
                        <span className="bg-gray-800 text-gray-400 text-[10px] px-1 rounded border border-gray-700">P3</span>
                        <span className="text-sm text-gray-300">Update Database Schema</span>
                     </div>
                     <span className="text-[10px] bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded flex items-center gap-1"><Layers size={8}/> Review</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded bg-gray-900/30 border border-gray-800">
                     <div className="flex items-center gap-2">
                        <span className="bg-gray-800 text-gray-400 text-[10px] px-1 rounded border border-gray-700">P3</span>
                        <span className="text-sm text-gray-300">Fix CI/CD Pipeline Errors</span>
                     </div>
                     <span className="text-[10px] bg-red-900/20 text-red-400 px-1.5 py-0.5 rounded flex items-center gap-1"><AlertOctagon size={8}/> Blocked</span>
                  </div>
               </div>

               <Button variant="outline" fullWidth className="mt-4 text-xs h-9 border-gray-700">View All Tasks ▾</Button>
            </Card>

            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <PlayCircle className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Sprint Overview</h3>
               </div>

               <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                     <div className="text-sm text-white">Sprint 42</div>
                     <Badge variant="success" className="text-[10px] py-0">Finished</Badge>
                  </div>
                  <div className="text-sm text-white font-bold mb-2">Improve Automation Module</div>
                  <div className="flex justify-between text-[10px] text-gray-500 mb-2">
                     <span>2 days left</span>
                     <span>91.1%</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-brand-yellow w-[70%]"></div>
                  </div>
               </div>

               <div className="flex gap-4 text-[10px] text-gray-400 mb-2">
                  <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-sm"></div> Stories Completed</span>
                  <span className="flex items-center gap-1"><div className="w-2 h-2 bg-brand-yellow rounded-sm"></div> Spilled over</span>
               </div>

               <div className="h-16 w-full mb-1">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={burnupData}>
                        <Area type="monotone" dataKey="completed" stroke="#10B981" fill="none" strokeWidth={2} />
                        <Area type="monotone" dataKey="total" stroke="#FCD34D" fill="none" strokeWidth={2} strokeDasharray="3 3"/>
                     </AreaChart>
                  </ResponsiveContainer>
               </div>
               <div className="flex justify-between text-[8px] text-gray-600">
                  <span>Sun</span><span>Thu</span><span>Thus</span><span>Wes</span><span>Sart</span><span>Scn</span><span>San</span><span>Tro</span><span>Tas</span><span>Tue</span>
               </div>

               <Button variant="outline" fullWidth className="mt-4 text-xs h-9 border-gray-700">View Sprint ▾</Button>
            </Card>

            <div className="bg-red-900/10 border border-red-900/30 rounded-xl p-3">
               <div className="flex items-center gap-2 text-red-500 font-bold text-sm mb-2">
                  <AlertTriangle size={14} /> Alerts <span className="text-gray-500 font-normal">1</span>
               </div>
               
               <div className="bg-black/40 rounded p-2 border border-gray-800">
                  <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                     <span className="flex items-center gap-1 text-red-400 font-bold"><AlertOctagon size={10}/> P1 Bug</span>
                     <span className="bg-gray-800 px-1 rounded">Retails</span>
                     <span className="text-brand-yellow bg-brand-yellow/10 px-1 rounded">Q1 hour</span>
                  </div>
                  <div className="text-xs text-white font-medium mb-1">33#2991 severe latency issue in API <span className="bg-gray-700 text-[10px] px-1 rounded text-gray-300">DE</span></div>
                  <div className="flex justify-between items-end">
                     <span className="text-[10px] text-gray-500">Ferucind</span>
                     <span className="text-[10px] text-gray-400">1 rester</span>
                  </div>
               </div>

               <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-1 text-xs text-white font-bold"><RefreshCw size={12}/> Recap: <span className="text-gray-400">2</span></div>
                  <button className="text-[10px] text-gray-400 flex items-center gap-1 border border-gray-700 px-2 py-1 rounded hover:text-white">View AI Tasks ▸</button>
               </div>
            </div>
         </div>

         {/* Column 2: Blockers, Sprint Detail, Feature Impact */}
         <div className="space-y-6">
            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <Layers className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Blockers</h3>
               </div>

               <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Zap size={14} className="text-green-500" /> Waiting on Backend API Update
                     </div>
                     <span className="text-[10px] bg-brand-yellow/20 text-brand-yellow px-2 py-0.5 rounded">Depe Ancest</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckSquare size={14} className="text-red-500" /> Pending Approval from QA
                     </div>
                     <Badge variant="danger" className="text-[10px]">▲ 01 days</Badge>
                  </div>
               </div>
               
               <Button variant="outline" fullWidth className="text-[8px] !text-[8px] h-7 border-gray-700">View Dependencies</Button>
            </Card>

            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <List className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Sprint Overview</h3>
               </div>

               <div className="flex justify-between items-end mb-2">
                  <div>
                     <span className="text-xl font-bold text-white">Sprint 42</span>
                     <span className="text-xs text-gray-400 ml-2">Improve Automation Module</span>
                  </div>
                  <div className="text-right">
                     <span className="text-2xl font-bold text-white">78%</span>
                     <div className="text-[10px] text-gray-500">798%</div>
                  </div>
               </div>

               <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-brand-yellow w-[78%]"></div>
               </div>
               <div className="flex justify-between text-[10px] text-gray-500 mb-6">
                  <span>7 days left</span>
                  <span>41/52 completed stories tuni</span>
               </div>

               <div className="h-24 w-full relative mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={sprintData}>
                        <Bar dataKey="value" fill="#374151">
                           {sprintData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={index === 0 ? '#10B981' : (index === 1 ? '#10B981' : '#374151')} />
                           ))}
                        </Bar>
                     </BarChart>
                  </ResponsiveContainer>
                  {/* Overlay Line for BurnDown */}
                  <div className="absolute inset-0 pointer-events-none">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={sprintData}>
                           <Area type="monotone" dataKey="value" stroke="#FCD34D" fill="none" strokeWidth={1} strokeDasharray="3 3"/>
                        </AreaChart>
                     </ResponsiveContainer>
                  </div>
               </div>
               
               <div className="flex justify-between text-[10px] text-gray-500 border-t border-gray-800 pt-2 uppercase">
                  <span>Thut</span><span>This</span><span>Sat</span><span>Sun</span><span>The</span><span>Wed</span><span>This</span><span>Tae</span>
               </div>
               <div className="flex justify-between text-[10px] text-gray-400 mt-2">
                  <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-sm"></div> Stories Completed</span>
                  <span className="flex items-center gap-1"><div className="w-2 h-2 bg-brand-yellow rounded-sm"></div> Planned stories</span>
                  <span className="flex items-center gap-1 text-brand-yellow"><div className="w-2 h-1 bg-brand-yellow rounded-full"></div> Burndown Target</span>
               </div>
            </Card>

            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <Zap className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Feature Usage Impact</h3>
               </div>

               <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                     <span className="text-white">Automation Module</span>
                     <span className="bg-gray-800 px-2 py-0.5 rounded text-white font-bold text-xs">₹1.1 Cr</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-gray-600 w-[20%]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                     <span>Recwent impact</span>
                     <span>Revience inapact ▲▲</span>
                  </div>
               </div>

               <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                     <span className="text-white">AI Insights</span>
                     <span className="text-white font-bold text-xs">₹18 Lakhs</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-brand-yellow w-[60%]"></div>
                  </div>
                  <div className="text-right text-[10px] text-gray-500 mt-1">Fondow rapact</div>
               </div>

               <div className="flex justify-between items-center mb-4">
                  <span className="text-brand-yellow font-bold text-sm">₹4.54 Y <span className="text-gray-500 bg-gray-900 px-1 rounded text-[10px] font-normal">Rage Trasking</span></span>
               </div>
               
               <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-300">A ICw A ll Tasks <span className="bg-green-900/30 text-green-500 px-1 rounded text-[10px]">2 Lanes</span></span>
                  <Button variant="primary" className="text-xs h-7 bg-brand-yellow text-black border-none">View Dependencies</Button>
               </div>
            </Card>
         </div>

         {/* Column 3: Blockers, PR, Performance */}
         <div className="space-y-6">
            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <Play className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Blockers</h3>
               </div>

               <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Zap size={14} /> Waiting on Backend API Update
                     </div>
                     <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded">D days</span>
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Clock size={14} /> Pending Approval from QA
                     </div>
                     <Badge variant="danger" className="text-[10px]">▲ 1 days</Badge>
                  </div>
               </div>
               
               <Button variant="outline" fullWidth className="text-xs h-9 border-gray-700">View Dependencies</Button>
            </Card>

            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <BarChart2 className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">PR Status</h3>
               </div>

               <div className="space-y-4 mb-4">
                  <div>
                     <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center gap-2 text-sm text-white">
                           <span className="text-red-500"><GitPullRequest size={14}/></span>
                           <span>[P1D4] OAuth Flow 0</span>
                           <span className="text-[8px] bg-gray-800 px-1 rounded">2 tur for 2</span>
                        </div>
                     </div>
                     <div className="flex justify-between text-xs text-gray-500">
                        <span>Oxerized the rornow</span>
                        <span className="text-white">2 days</span>
                     </div>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                     <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-brand-yellow"><Zap size={12}/></span> TestNotification Timeout
                     </div>
                     <span className="text-gray-500">● rested in 1</span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                     <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-brand-yellow"><Zap size={12}/></span> TestOAuthLogin Bug
                     </div>
                     <span className="text-gray-500">&rsaquo; 2 days</span>
                  </div>
               </div>
               
               <Button variant="outline" fullWidth className="text-xs h-9 border-gray-700">View Build Status</Button>
            </Card>

            <Card className="bg-[#0e0e0e] border-gray-800">
               <div className="flex items-center gap-2 mb-4">
                  <Users className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">My Performance</h3>
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                     <span className="text-sm text-white">Productivity</span>
                     <span className="bg-green-900/30 text-green-500 px-1.5 py-0.5 rounded text-xs">12.3 Days</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                     <span className="text-sm text-white flex items-center gap-2"><Clock size={14} className="text-brand-yellow"/> Cycle Time</span>
                     <span className="text-white text-sm font-bold">2.3 days</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                     <span className="text-sm text-white font-bold">15 <span className="font-normal text-gray-400">Tasks completed this month</span></span>
                     <span className="text-white text-sm font-bold flex items-center gap-1">15 s <span className="bg-brand-yellow w-2 h-2 inline-block"></span></span>
                  </div>
                  <div className="flex justify-between items-center">
                     <span className="text-sm text-white flex items-center gap-2"><Database size={14} className="text-brand-yellow"/> Cloud Improvement</span>
                     <span className="text-white text-xs font-bold">17 &lt;oot 5h:</span>
                  </div>
               </div>
            </Card>

            <div className="bg-[#0e0e0e] border border-gray-800 rounded-xl p-4">
               <div className="text-sm text-gray-400 mb-2">Learning & Growth</div>
               <div className="flex items-start gap-2 mb-1">
                  <BookOpen size={14} className="text-brand-yellow mt-0.5" />
                  <span className="text-white text-sm">Microservices Architecture Training</span>
               </div>
               <div className="flex justify-between items-center text-xs text-gray-500 ml-6">
                  <span>5 Modules Completed</span>
                  <span className="text-gray-300">More</span>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};