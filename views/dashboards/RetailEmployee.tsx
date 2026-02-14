import React from 'react';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Clock, CheckSquare, Bell, User, ChevronRight, Send, AlertTriangle, ArrowRight } from 'lucide-react';

export const RetailEmployee = ({ userName, company }: { userName: string, company: string }) => {
  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
             <span className="uppercase tracking-wider font-bold text-brand-yellow">{company}</span>
             <span>•</span>
             <span>Employee View</span>
             <span>•</span>
             <span>Delhi Store</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Welcome, {userName}</h1>
        </div>
        <div className="text-right">
           <div className="text-xs text-gray-400">End of Shift: <span className="text-white font-medium">7:00 PM</span> | Billing Counter: <span className="text-green-500">12</span></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Today's Tasks */}
         <Card className="h-full">
            <div className="flex justify-between items-center mb-6">
               <div className="flex items-center gap-2">
                 <CheckSquare className="text-brand-yellow" size={20} />
                 <h3 className="font-bold text-lg">Today's Tasks</h3>
               </div>
               <div className="flex gap-1">
                 <div className="w-4 h-1 bg-brand-yellow rounded-full"></div>
                 <div className="w-4 h-1 bg-brand-yellow/30 rounded-full"></div>
                 <div className="w-4 h-1 bg-brand-yellow/30 rounded-full"></div>
               </div>
            </div>
            
            <div className="space-y-4">
               <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-gray-800">
                  <div className="flex items-center gap-3">
                     <Clock size={16} className="text-gray-400" />
                     <span className="text-sm font-medium">Restock Running Shoes - Aisle 3</span>
                  </div>
                  <span className="text-xs text-gray-400">Due <span className="text-white">12:00 PM</span></span>
               </div>
               
               <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-gray-800">
                  <div className="flex items-center gap-3">
                     <Clock size={16} className="text-gray-400" />
                     <span className="text-sm font-medium">Verify Leather Jackets Price Tags</span>
                  </div>
                  <span className="text-xs text-brand-yellow font-medium">In Progress</span>
               </div>

               <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-gray-800">
                  <div className="flex items-center gap-3">
                     <Bell size={16} className="text-gray-400" />
                     <span className="text-sm font-medium">Weekend Offer Display Setup</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    Start by <span className="text-brand-yellow">4:00 PM</span> <ChevronRight size={12} />
                  </div>
               </div>

               <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-gray-800">
                  <div className="flex items-center gap-3">
                     <Bell size={16} className="text-gray-400" />
                     <span className="text-sm font-medium">Stock Count - Kids Section</span>
                  </div>
                  <span className="text-xs text-brand-yellow font-medium">Pending</span>
               </div>
            </div>

            <div className="mt-6 flex justify-end">
               <Button variant="outline" className="text-xs py-2 px-4 h-auto">Confirm Completion <ChevronRight size={14} /></Button>
            </div>
         </Card>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shift Performance */}
            <Card>
               <div className="flex items-center gap-2 mb-4">
                 <div className="text-brand-yellow">🚀</div>
                 <h3 className="font-bold text-sm">Current Shift Performance</h3>
               </div>
               
               <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                     <span className="text-gray-400">Current Shift Sales</span>
                     <span className="font-bold">₹38,450</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-gray-400">Transactions</span>
                     <span className="font-bold">42</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-gray-400">Billing Accuracy</span>
                     <span className="font-bold text-green-500">99.1%</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-gray-400">Waiting</span>
                     <span className="font-bold text-brand-yellow">2 Low</span>
                  </div>
               </div>
               
               <Button className="w-full mt-4 text-xs py-2 h-auto" variant="outline">
                 Submit Day End Report <ChevronRight size={14} />
               </Button>
            </Card>

            {/* Shift Sales Leaderboard */}
            <Card className="bg-[#111]">
               <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs text-gray-400 block">Current Shift Sales</span>
                    <span className="text-2xl font-bold">₹38,450</span>
                  </div>
                  <span className="text-green-500 text-xs font-bold">+31.2%</span>
               </div>
               <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                  <div>
                    <span className="block text-gray-500">Transactions</span>
                    <span className="font-bold text-white">42</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-gray-500">Billing Accuracy</span>
                    <span className="font-bold text-white">99.1%</span>
                  </div>
               </div>
               <div className="pt-2 border-t border-gray-800 flex justify-between items-center text-xs text-gray-400">
                  <span className="flex items-center gap-1"><span className="text-white">🏆</span> Employee Leaderboard</span>
                  <ChevronRight size={14} />
               </div>
            </Card>
         </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Assigned Inventory */}
         <Card>
             <div className="flex items-center gap-2 mb-6">
               <div className="text-brand-yellow">📋</div>
               <h3 className="font-bold text-base">Assigned Section Inventory</h3>
             </div>

             <div className="space-y-4">
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-red-500"></span>
                     <span className="text-sm text-gray-300">Running Shoes - 8 Units</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full border border-red-500"></span>
                     <span className="text-xs text-red-500 font-medium">Low</span>
                     <ChevronRight size={12} className="text-gray-600" />
                   </div>
                </div>

                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-500"></span>
                     <span className="text-sm text-gray-300">Track Pants - 42 Units</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-900"></span>
                     <span className="text-xs text-green-500 font-medium">99.1%</span>
                     <ChevronRight size={12} className="text-gray-600" />
                   </div>
                </div>

                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                     <span className="text-sm text-gray-300">Sports Caps - 2 Units</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <AlertTriangle size={10} className="text-red-500" />
                     <span className="text-xs text-red-500 font-medium">Critical</span>
                     <ChevronRight size={12} className="text-gray-600" />
                   </div>
                </div>
             </div>

             <div className="mt-6 flex justify-end">
                <Button variant="outline" className="text-xs py-2 px-4 h-auto">Request Restock <ArrowRight size={14} /></Button>
             </div>
         </Card>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Real Time Alerts */}
             <Card>
                <div className="flex items-center gap-2 mb-4">
                  <Bell size={18} className="text-brand-yellow" />
                  <h3 className="font-bold text-sm">Real-Time Alerts</h3>
                </div>
                <div className="space-y-3">
                   <div className="flex gap-2 text-xs">
                     <span className="text-brand-yellow font-bold">VIP</span>
                     <span className="text-gray-400">Customer Entered (Loyalty Gold)</span>
                   </div>
                   <div className="flex gap-2 text-xs">
                     <AlertTriangle size={12} className="text-yellow-600" />
                     <span className="text-gray-400">Refund Request Pending</span>
                   </div>
                   <div className="flex gap-2 text-xs">
                     <AlertTriangle size={12} className="text-red-500" />
                     <span className="text-gray-400">Payment Failure Alert</span>
                   </div>
                </div>
                <div className="mt-4 flex justify-end">
                   <button className="text-xs text-brand-yellow flex items-center gap-1 hover:underline">
                     SendMessage <Send size={10} />
                   </button>
                </div>
             </Card>

             {/* Leaderboard */}
             <Card>
                <h3 className="font-bold text-sm text-white mb-4">Employee Leaderboard</h3>
                <div className="space-y-3">
                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">RS</div>
                         <div>
                            <div className="text-xs font-bold text-white">Rohit Sharma</div>
                            <div className="text-[10px] text-gray-500">Billing</div>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="text-xs font-bold text-white">₹1,98,500</div>
                         <div className="text-[10px] text-gray-500">Billing</div>
                      </div>
                   </div>

                   <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">KS</div>
                         <div>
                            <div className="text-xs font-bold text-white">Kavita Singh</div>
                            <div className="text-[10px] text-gray-500">Floor Ops</div>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="text-xs font-bold text-green-500">₹1,85,700</div>
                         <div className="text-[10px] text-gray-500">Floor Ops</div>
                      </div>
                   </div>
                </div>
                <div className="mt-4 text-right">
                   <button className="text-xs text-gray-400 hover:text-white flex items-center gap-1 justify-end">
                     View Full Leaderboard <ArrowRight size={10} />
                   </button>
                </div>
             </Card>
         </div>
      </div>

      {/* Clock Out Bar */}
      <div className="bg-[#111] border border-brand-border rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
         <div className="flex items-center gap-4">
            <div className="bg-brand-yellow/10 p-2 rounded-lg text-brand-yellow">
              <CheckSquare size={24} />
            </div>
            <div>
               <div className="text-sm font-bold text-white mb-1">Today : <span className="text-brand-yellow">10:00 AM – 7:00 PM</span> <span className="text-gray-500 font-normal">| 6.2 hrs</span></div>
               <div className="flex items-center gap-1 text-xs text-green-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Shifting Setup - Panning
               </div>
            </div>
         </div>
         
         <div className="flex items-center gap-6 w-full md:w-auto">
            <div className="hidden md:block bg-black/40 px-4 py-2 rounded-lg border border-brand-border/30">
               <span className="text-2xl font-mono text-brand-yellow font-bold">06:02:18</span>
            </div>
            <div className="text-right hidden md:block">
               <div className="text-xs text-gray-400">Clocked In Since:</div>
               <div className="text-sm font-bold text-white">10:00 AM</div>
            </div>
            <Button className="w-full md:w-auto whitespace-nowrap">Clock Out Now</Button>
         </div>
      </div>
    </div>
  );
};