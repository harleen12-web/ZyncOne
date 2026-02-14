import React from 'react';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { 
  Server, AlertTriangle, Layers, TrendingUp, Users, DollarSign, 
  Activity, BarChart3, CreditCard, Clock, Smile, MessageSquare, 
  GitBranch, Zap
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, Cell } from 'recharts';

export const SaasCEO = ({ userName, company }: { userName: string, company: string }) => {
  const growthData = [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 45 },
    { name: 'Mar', value: 40 },
    { name: 'Apr', value: 60 },
    { name: 'May', value: 55 },
    { name: 'Jun', value: 70 },
  ];

  const financialData = [
    { name: '1', value: 24 },
    { name: '2', value: 22 },
    { name: '3', value: 20 },
    { name: '4', value: 18 },
    { name: '5', value: 15 },
    { name: '6', value: 13 },
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
             <span className="uppercase tracking-wider font-bold text-brand-yellow">Signalera Tech</span>
             <span>•</span>
             <span>CEO Dashboard</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Growth Overview</h1>
        </div>
        <div className="text-right">
           <div className="text-xs text-gray-500 mb-1">Updated just now <span className="text-green-500">●●●</span></div>
        </div>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#111] border-gray-800">
           <div className="flex justify-between items-start mb-2">
             <span className="text-xs text-brand-yellow uppercase tracking-wider font-bold">MRR ₹2.8CR</span>
           </div>
           <div className="flex items-end justify-between">
             <div className="text-3xl font-bold text-white">₹2.8 CR</div>
             <Badge variant="success" className="bg-green-900/30 text-green-400 border-green-900">+9.4%</Badge>
           </div>
        </Card>
        
        <Card className="bg-[#111] border-gray-800">
           <div className="flex justify-between items-start mb-2">
             <span className="text-xs text-gray-400 uppercase tracking-wider">CHURN RATE</span>
           </div>
           <div className="flex items-end justify-between">
             <div className="text-3xl font-bold text-white">4.2%</div>
             <Badge variant="danger" className="bg-red-900/30 text-red-400 border-red-900">~0.1%</Badge>
           </div>
        </Card>

        <Card className="bg-[#111] border-gray-800">
           <div className="flex justify-between items-start mb-2">
             <span className="text-xs text-gray-400 uppercase tracking-wider">ACTIVE USERS</span>
           </div>
           <div className="flex items-end justify-between">
             <div className="text-3xl font-bold text-white">48,920</div>
             <Badge variant="success" className="bg-green-900/30 text-green-400 border-green-900">+7.8%</Badge>
           </div>
        </Card>

        <Card className="bg-[#111] border-gray-800">
           <div className="flex justify-between items-start mb-2">
             <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 uppercase tracking-wider">UPTIME</span>
                <span className="text-xl font-bold text-white">99.91%</span>
                <AlertTriangle size={12} className="text-red-500" />
             </div>
           </div>
           <div className="mt-2 bg-red-900/20 border border-red-900/50 rounded p-1.5 flex items-center gap-2">
              <span className="bg-red-600 text-white text-[10px] px-1 rounded font-bold">1 Critical</span>
              <span className="text-xs text-gray-400">Prometheus down</span>
           </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Column 1: Growth Overview */}
         <div className="space-y-6">
            <Card className="h-full border-gray-800 bg-[#0e0e0e]">
               <div className="flex items-center gap-2 mb-6">
                  <BarChart3 className="text-brand-yellow" size={20} />
                  <h3 className="font-bold text-lg">Growth Overview</h3>
               </div>
               
               <div className="space-y-5">
                  <div>
                     <div className="flex justify-between text-xs mb-1 text-gray-400">
                        <span>Free</span>
                        <span>16%</span>
                     </div>
                     <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-teal-500 w-[16%]"></div>
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-xs mb-1 text-gray-400">
                        <span>Starter</span>
                        <span>21%</span>
                     </div>
                     <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[21%]"></div>
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-xs mb-1 text-gray-400">
                        <span>Pro</span>
                        <span>42%</span>
                     </div>
                     <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-yellow w-[42%]"></div>
                     </div>
                  </div>
                  <div>
                     <div className="flex justify-between text-xs mb-1 text-gray-400">
                        <span>Enterprise</span>
                        <span>19%</span>
                     </div>
                     <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-[19%]"></div>
                     </div>
                  </div>
               </div>

               <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="flex justify-between items-center mb-1">
                     <span className="text-gray-400">Total Revenue</span>
                     <span className="text-xl font-bold text-white">₹33.6 CR</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-gray-500">New users this month</span>
                     <span className="font-bold text-white">5,826</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
                     <span>Conversions to paid</span>
                     <span className="text-green-500">↑ 12.7%</span>
                  </div>
               </div>
            </Card>

            <Card className="border-gray-800 bg-[#0e0e0e]">
               <div className="flex items-center gap-2 mb-4">
                  <Zap className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-sm">Product & Engineering Performance</h3>
               </div>
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-gray-400 flex items-center gap-2"><GitBranch size={14} /> Deployments this month</span>
                     <span className="text-white font-bold">23</span>
                  </div>
                  
                  <div className="space-y-1">
                     <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-yellow w-[70%]"></div>
                     </div>
                     <div className="flex justify-end text-xs text-red-400">
                        ▼ 4.3%
                     </div>
                  </div>

                  <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-800">
                     <span className="text-gray-400 flex items-center gap-2"><AlertTriangle size={14} /> Incidents</span>
                     <span className="text-white font-bold">₹ 8,226</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                     <span className="text-gray-400 flex items-center gap-2"><Clock size={14} /> Uptime</span>
                     <span className="text-green-500 font-bold">↑ 12.7%</span>
                  </div>
               </div>
            </Card>
         </div>

         {/* Column 2: Feature Mapping & Sentiment */}
         <div className="space-y-6">
            <Card className="border-gray-800 bg-[#0e0e0e]">
               <h3 className="font-bold text-lg mb-6">Feature-to-Revenue Mapping</h3>
               
               <div className="space-y-6">
                  <div>
                     <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">Automation Workflows</span>
                        <span className="text-brand-yellow font-bold">₹1,34,000</span>
                     </div>
                     <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-yellow w-[90%]"></div>
                     </div>
                  </div>

                  <div>
                     <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">AI Insights</span>
                        <span className="text-white font-bold">₹18,000</span>
                     </div>
                     <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-600 w-[15%]"></div>
                     </div>
                     <div className="text-right text-[10px] text-gray-500 mt-0.5">2.2%</div>
                  </div>

                  <div>
                     <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">Low-Code Builder</span>
                        <span className="text-white font-bold">₹4,400</span>
                     </div>
                     <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-600 w-[5%]"></div>
                     </div>
                     <div className="text-right text-[10px] text-gray-500 mt-0.5">1.1%</div>
                  </div>
               </div>

               <div className="mt-6 bg-red-900/10 border border-red-900/30 rounded p-3">
                  <div className="flex items-center gap-2 text-red-500 text-xs font-bold mb-1">
                     <AlertTriangle size={12} /> Focus Drift Detection
                  </div>
                  <p className="text-[10px] text-gray-400">35% of engineering hours spent last month on Low-Code Builder which has only 1.1% usage</p>
               </div>

               <Button variant="outline" fullWidth className="mt-4 text-xs h-8 border-gray-700">View Team Workload</Button>
            </Card>

            <Card className="border-gray-800 bg-[#0e0e0e]">
               <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-sm">Customer Sentiment & Retention</h3>
               </div>
               
               <div className="flex justify-between items-center mb-4 bg-gray-900/50 p-2 rounded">
                  <div className="flex items-center gap-2">
                     <span className="text-white font-bold">NPS Score</span>
                     <Badge variant="success" className="text-[10px] py-0">GOOD</Badge>
                  </div>
                  <span className="text-green-500 font-bold text-xl">41 °</span>
               </div>

               <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Support Tickets</span>
                     <span className="text-white font-bold">283 <span className="text-gray-500 text-xs font-normal">↑ Change</span></span>
                  </div>
                  <div className="flex justify-between text-sm">
                     <span className="text-gray-400">Product Sentiment Summary</span>
                     <span className="text-gray-500 text-xs flex items-center gap-1"><MessageSquare size={10} /> 6.1 mixed remarks</span>
                  </div>
                  <div className="p-2 border border-dashed border-gray-700 rounded text-xs text-gray-400 bg-gray-900/30">
                     Customers request more integrations and faster API response times.
                  </div>
               </div>
               
               <Button variant="primary" fullWidth className="mt-4 text-xs h-8 bg-brand-yellow text-black border-none">Save Team Workload</Button>
            </Card>
         </div>

         {/* Column 3: Insights & Financial */}
         <div className="space-y-6">
            <Card className="border-gray-800 bg-[#0e0e0e]">
               <div className="flex items-center gap-2 mb-6">
                  <CreditCard className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-sm">Customer Sentiment</h3>
               </div>
               
               <div className="mb-2 text-xs text-gray-400 uppercase tracking-wider">Enterprise & Billing Insights</div>
               
               <div className="flex justify-between items-end mb-4 border-b border-gray-800 pb-4">
                  <div>
                     <div className="text-2xl font-bold text-brand-yellow">₹8.4 CR</div>
                     <div className="text-[10px] text-gray-500">Potential Pipeline</div>
                  </div>
                  <div className="text-right">
                     <div className="text-white font-bold">⏱ 8 3.0</div>
                     <div className="text-[10px] text-gray-500">Hpt 63P</div>
                  </div>
               </div>

               <div className="flex justify-between items-end mb-4 border-b border-gray-800 pb-4">
                  <div>
                     <div className="text-xl font-bold text-white">₹68 Lakh <span className="text-[10px] bg-green-900 text-green-400 px-1 rounded">Seath</span></div>
                     <div className="text-[10px] text-gray-500">Average acce Bsafe</div>
                  </div>
                  <div className="text-right">
                     <div className="text-white font-bold">2.1 Months</div>
                     <div className="text-[10px] text-gray-500">Average sales cycle</div>
                  </div>
               </div>

               <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                     <span className="text-xl font-bold text-white">99.91%</span>
                     <Badge variant="danger" className="text-[10px]">{`L > 31M remaining`}</Badge>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                     <span className="text-xs text-gray-500">60.. Uptime</span>
                     <button className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">View Team Workload ▾</button>
                  </div>
                  
                  <div className="h-16 w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={growthData}>
                           <defs>
                              <linearGradient id="colorUptime" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#FCD34D" stopOpacity={0.3}/>
                                 <stop offset="95%" stopColor="#FCD34D" stopOpacity={0}/>
                              </linearGradient>
                           </defs>
                           <Area type="monotone" dataKey="value" stroke="#FCD34D" fill="url(#colorUptime)" strokeWidth={2} />
                        </AreaChart>
                     </ResponsiveContainer>
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                     <span>Slower</span>
                     <span>Time scale in testing</span>
                  </div>
               </div>
            </Card>

            <Card className="border-gray-800 bg-[#0e0e0e]">
               <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-sm">Financial Health</h3>
               </div>
               
               <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-gray-400">Enterprise & Billing Insights</span>
                  <Badge variant="warning" className="text-[10px] bg-yellow-900/30 text-yellow-500 border-none">NEEDS ATTN</Badge>
               </div>

               <div className="flex justify-between items-end mb-6">
                  <div>
                     <div className="text-2xl font-bold text-brand-yellow">₹23.3 CR</div>
                     <div className="text-[10px] text-gray-500">Cash in Bank</div>
                  </div>
                  <div className="text-right">
                     <div className="text-white font-bold flex items-center justify-end gap-2">₹13 <Badge variant="success" className="py-0 px-1 text-[8px]">Healthy</Badge></div>
                     <div className="text-[10px] text-gray-500">Monthly Burn Rate</div>
                  </div>
               </div>

               <div className="h-16 w-full relative">
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={financialData}>
                        <Area type="monotone" dataKey="value" stroke="#FCD34D" fill="none" strokeWidth={2} />
                     </AreaChart>
                  </ResponsiveContainer>
                  <div className="absolute top-0 right-0 text-right">
                     <div className="text-xl font-bold text-white">13 Months</div>
                     <div className="text-[10px] text-gray-500">Runway score</div>
                  </div>
               </div>
               <div className="text-[10px] text-gray-500 mt-1">Cash in Bank</div>
            </Card>
         </div>
      </div>
    </div>
  );
};