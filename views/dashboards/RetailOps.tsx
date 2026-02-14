import React from 'react';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ArrowRight, AlertTriangle, CheckCircle, Package, Users, Shield, ArrowUpRight, Ban, ChevronRight, FileText, Download } from 'lucide-react';

export const RetailOps = ({ userName, company }: { userName: string, company: string }) => {
  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
             <span className="uppercase tracking-wider font-bold text-brand-yellow">{company}</span>
             <span>•</span>
             <span>Operations View</span>
             <span>•</span>
             <span>India (Delhi, Mumbai)</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Good Afternoon, {userName}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Store Performance Overview - Spans 2 cols */}
         <div className="lg:col-span-2">
            <Card className="h-full">
              <h3 className="font-bold text-lg mb-6">Store Performance Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Delhi Store */}
                 <div className="bg-[#0f0f0f] rounded-xl p-5 border border-gray-800">
                    <div className="flex justify-between items-center mb-4">
                       <span className="font-bold text-white">Delhi Store <span className="text-gray-500 font-normal text-sm">• 9/6</span></span>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                       <span className="text-3xl font-bold text-white">92%</span>
                       <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[92%] rounded-full"></div>
                       </div>
                       <span className="text-green-500 font-bold text-sm">92%</span>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                       <div className="flex justify-between text-gray-400">
                          <span>Billing Counters Active</span>
                          <span className="text-white">6/6</span>
                       </div>
                       <div className="flex justify-between text-gray-400">
                          <span>Stock Alerts</span>
                          <span className="text-white">1</span>
                       </div>
                       <div className="flex justify-between text-gray-400">
                          <span>Staff Present</span>
                          <span className="text-white">9/10</span>
                       </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                       <button className="text-xs text-green-500 flex items-center gap-1 hover:underline">
                         Approve Transfer: <span className="text-white font-bold">10 Units</span> <ArrowRight size={12} />
                       </button>
                    </div>
                 </div>

                 {/* Mumbai Store */}
                 <div className="bg-[#0f0f0f] rounded-xl p-5 border border-gray-800">
                    <div className="flex justify-between items-center mb-4">
                       <span className="font-bold text-white">Mumbai Store <span className="text-gray-500 font-normal text-sm">• 9/6</span></span>
                       <AlertTriangle size={16} className="text-brand-yellow" />
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                       <span className="text-3xl font-bold text-white">87%</span>
                       <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-brand-yellow w-[87%] rounded-full"></div>
                       </div>
                       <span className="text-brand-yellow font-bold text-sm flex items-center gap-1"><AlertTriangle size={10} /> Caut</span>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                       <div className="flex justify-between text-gray-400">
                          <span>Billing Counters Active</span>
                          <span className="text-white">5/6</span>
                       </div>
                       <div className="flex justify-between text-gray-400">
                          <span>Stock Alerts</span>
                          <span className="text-white">2</span>
                       </div>
                       <div className="flex justify-between text-gray-400">
                          <span>Staff Present</span>
                          <span className="text-white">8/10</span>
                       </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                       <button className="text-xs text-brand-yellow flex items-center gap-1 hover:underline">
                         Approve Transfer: <span className="text-white font-bold">10 Units Mumbai</span> → Delhi <ArrowRight size={12} />
                       </button>
                    </div>
                 </div>
              </div>
            </Card>
         </div>

         {/* Active Operational Alerts */}
         <Card>
            <h3 className="font-bold text-lg mb-6">Active Operational Alerts</h3>
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="text-sm text-gray-300">Mumbai Shrinkage Anomaly</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  <span className="text-sm text-gray-300">Delhi SKU-104 Low Stock</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-brand-yellow"></span>
                  <span className="text-sm text-gray-300">2 Unauthorized Discount Overrides</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-teal-500"></span>
                  <span className="text-sm text-gray-300">VIP Customer Alert</span>
               </div>
            </div>
            <div className="mt-8 text-right">
               <button className="text-sm text-gray-400 hover:text-white flex items-center justify-end gap-2">
                 View All Alerts <ArrowRight size={14} />
               </button>
            </div>
         </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Inventory Control */}
         <Card>
            <div className="flex items-center gap-2 mb-6">
               <Package className="text-brand-yellow" size={18} />
               <h3 className="font-bold text-base">Inventory Control</h3>
            </div>
            
            <div className="space-y-4">
               <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-red-500"></span>
                     <span className="text-gray-300">Running Shoes <span className="text-gray-500">(SKU-104)</span></span>
                  </div>
                  <span className="text-orange-500 flex items-center gap-1 text-xs"><AlertTriangle size={10} /> 3 Units <ArrowRight size={10} /></span>
               </div>

               <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-green-500"></span>
                     <span className="text-gray-300">Mumbai <span className="text-gray-500">- 36 Units</span></span>
                  </div>
                  <span className="text-white text-xs">2</span>
               </div>

               <div className="mt-4">
                  <button className="w-full bg-[#1a1a1a] hover:bg-[#252525] border border-brand-yellow/30 text-brand-yellow text-xs py-2 rounded transition-colors">
                     Approve Transfer: <span className="text-white">10 Units Mumbai → Delhi</span>
                  </button>
               </div>
            </div>
         </Card>

         {/* GST Compliance Center */}
         <Card>
            <div className="flex items-center gap-2 mb-6">
               <Shield className="text-brand-yellow" size={18} />
               <h3 className="font-bold text-base">GST Compliance Center</h3>
            </div>
            
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-sm">
                  <AlertTriangle size={16} className="text-brand-yellow" />
                  <span className="text-gray-300">1 Mismatch Case</span>
               </div>
               <div className="flex items-center gap-3 text-sm border-t border-gray-800 pt-3">
                  <ArrowUpRight size={16} className="text-gray-500" />
                  <span className="text-gray-300">2 MissUaking HSN Code</span>
               </div>
               <div className="flex items-center gap-3 text-sm border-t border-gray-800 pt-3">
                  <Package size={16} className="text-brand-yellow" />
                  <span className="text-gray-300">2 Unauthorized Discounts</span>
               </div>
            </div>

            <div className="mt-6 flex justify-end">
               <button className="text-xs text-brand-yellow border border-brand-yellow/30 px-3 py-1.5 rounded hover:bg-brand-yellow/10 transition-colors flex items-center gap-2">
                 Review Audit Trail <ArrowRight size={12} />
               </button>
            </div>
         </Card>

         {/* AI Action Console */}
         <Card className="row-span-2">
            <h3 className="font-bold text-lg mb-4">AI Action Console</h3>
            
            <div className="space-y-4 mb-6">
               <div className="flex items-center gap-2 text-sm text-gray-300">
                  <span className="text-xs">✨</span> Running Shoes (SKU-104)
               </div>
               
               <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                     <div className="mt-1 bg-green-500/20 p-0.5 rounded"><CheckCircle size={10} className="text-green-500" /></div>
                     <span className="text-gray-300">Reduce price by ₹150</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                     <div className="mt-1 bg-green-500/20 p-0.5 rounded"><CheckCircle size={10} className="text-green-500" /></div>
                     <span className="text-gray-300">Transfer 10 units Mumbai → Delhi</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                     <div className="mt-1 bg-green-500/20 p-0.5 rounded"><CheckCircle size={10} className="text-green-500" /></div>
                     <span className="text-gray-300">Launch "Weekend Sports Offer"</span>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
               <button className="bg-green-500/10 text-green-500 border border-green-500/30 py-2 rounded text-sm hover:bg-green-500/20">Approve</button>
               <button className="bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/30 py-2 rounded text-sm hover:bg-brand-yellow/20">Modify</button>
               <button className="bg-red-500/10 text-red-500 border border-red-500/30 py-2 rounded text-sm hover:bg-red-500/20">Reject</button>
            </div>
         </Card>
      </div>

       {/* Enhanced Staff Utilization */}
       <Card className="border border-gray-800">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
               <Shield className="text-brand-yellow" size={20} />
               <h3 className="font-bold text-lg">Staff Utilization – Operational Drilldown</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
             
             {/* Employee 1 */}
             <div className="space-y-4 pt-4 lg:pt-0">
                <div className="flex justify-between items-start">
                   <div>
                      <h4 className="font-bold text-white text-base">Rohit Sharma</h4>
                      <Badge variant="neutral" className="mt-1">Billing</Badge>
                   </div>
                   <div className="text-right">
                      <div className="text-xs text-green-500 font-bold flex items-center gap-1 justify-end"><CheckCircle size={10} /> On Time</div>
                      <div className="text-[10px] text-gray-500">10:00 AM</div>
                   </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-400">
                   <div className="flex justify-between">
                      <span>Transactions</span>
                      <span className="text-white font-medium">42</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Total Billing</span>
                      <span className="text-white font-medium">₹1,98,500</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Avg Time</span>
                      <span className="text-white font-medium">2m 14s</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Overrides</span>
                      <span className="text-orange-500 font-medium flex items-center gap-1">2 <AlertTriangle size={10} /></span>
                   </div>
                   <div className="flex justify-between">
                      <span>Refunds</span>
                      <span className="text-white font-medium">1</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Accuracy</span>
                      <span className="text-green-500 font-bold">99.1%</span>
                   </div>
                </div>
                
                <div className="pt-2">
                   <div className="flex items-center gap-1 text-xs text-yellow-500">
                      <span>⭐ 4.7 Customer Rating</span>
                   </div>
                </div>
             </div>

             {/* Employee 2 */}
             <div className="space-y-4 pt-4 lg:pt-0 lg:pl-6">
                <div className="flex justify-between items-start">
                   <div>
                      <h4 className="font-bold text-white text-base">Neha Verma</h4>
                      <Badge variant="neutral" className="mt-1">Floor Ops</Badge>
                   </div>
                   <div className="text-right">
                      <div className="text-xs text-green-500 font-bold flex items-center gap-1 justify-end"><CheckCircle size={10} /> Active</div>
                   </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-400">
                   <div className="flex justify-between">
                      <span>Replenishments</span>
                      <span className="text-white font-medium">12</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Stock Audits</span>
                      <span className="text-white font-medium">5</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Avg Delay</span>
                      <span className="text-white font-medium">8 mins</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Adjustments</span>
                      <span className="text-white font-medium">2</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Missed Tasks</span>
                      <span className="text-white font-medium">0</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Section Health</span>
                      <span className="text-green-500 font-bold">94%</span>
                   </div>
                </div>
             </div>

             {/* Employee 3 */}
             <div className="space-y-4 pt-4 lg:pt-0 lg:pl-6">
                <div className="flex justify-between items-start">
                   <div>
                      <h4 className="font-bold text-white text-base">Aman Gupta</h4>
                      <Badge variant="neutral" className="mt-1">Inventory</Badge>
                   </div>
                   <div className="text-right">
                      <Badge variant="warning">Med Risk</Badge>
                   </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-400">
                   <div className="flex justify-between">
                      <span>Transfers</span>
                      <span className="text-white font-medium">3</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Variance Reports</span>
                      <span className="text-red-500 font-medium flex items-center gap-1">1 <AlertTriangle size={10} /></span>
                   </div>
                   <div className="flex justify-between">
                      <span>Warehouse Logs</span>
                      <span className="text-white font-medium">4</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Last Access</span>
                      <span className="text-white font-medium">2:15 PM</span>
                   </div>
                </div>
             </div>

          </div>

          <div className="mt-8 pt-4 border-t border-gray-800 flex justify-end gap-4">
             <Button variant="ghost" className="text-xs h-9">
               <FileText size={14} /> View Full Activity Log
             </Button>
             <Button variant="outline" className="text-xs h-9">
               <Download size={14} /> Download Staff Report
             </Button>
          </div>
       </Card>
    </div>
  );
};