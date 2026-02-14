import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { 
  Activity, Users, AlertTriangle, Clock, Bed, HeartPulse, 
  Stethoscope, FileText, Settings, ArrowRight, Ambulance, Shield 
} from 'lucide-react';

export const HealthcareOps = ({ userName, company }: { userName: string, company: string }) => {
  return (
    <div className="space-y-6 animate-fade-in pb-10">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
             <span className="uppercase tracking-wider font-bold text-brand-yellow">{company}</span>
             <span>•</span>
             <span>Operations Manager View</span>
             <span>•</span>
             <span>Delhi</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Good Afternoon, {userName}</h1>
        </div>
        <div className="text-right">
           <div className="text-xs text-gray-500 mb-1">Updated: 14 secs ago <span className="text-green-500">||||</span></div>
        </div>
      </div>

      {/* Live Hospital Snapshot */}
      <Card className="border border-brand-border bg-[#0a0a0a]">
         <div className="flex items-center gap-2 mb-6">
            <Activity className="text-brand-yellow" size={20} />
            <h3 className="font-bold text-lg">Live Hospital Snapshot</h3>
            <div className="ml-auto flex items-center gap-4 text-xs">
               <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Stable</span>
               <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Moderate Load</span>
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-gray-800">
            <div className="px-4">
               <div className="text-xs text-gray-500 mb-1">Total Beds: <span className="text-green-500">450</span></div>
               <div className="text-3xl font-bold text-white">368</div>
               <div className="text-xs text-green-500">41% Occupied</div>
            </div>
            <div className="px-4">
               <div className="text-xs text-gray-500 mb-1">ICU</div>
               <div className="text-3xl font-bold text-white">81</div>
               <div className="text-xs text-gray-500">Available &raquo;</div>
            </div>
            <div className="px-4">
               <div className="text-xs text-gray-500 mb-1">ICU Occupancy</div>
               <div className="text-3xl font-bold text-red-500">93% <span className="text-xs">▲</span></div>
               <div className="text-xs text-red-400">Critical Load</div>
            </div>
            <div className="px-4">
               <div className="flex justify-between">
                  <div className="text-xs text-gray-500 mb-1">Emergency</div>
                  <span className="text-white font-bold">17 &raquo;</span>
               </div>
               <div className="text-xs text-gray-500 mt-2">Cases Last 2 hrs: 17</div>
               <div className="mt-2 text-right">
                  <div className="text-xs text-gray-500">OT running</div>
                  <div className="text-white font-bold">6 / 8</div>
               </div>
            </div>
         </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Bed & Ward Status */}
         <Card>
            <div className="flex items-center justify-between mb-4">
               <div className="flex items-center gap-2">
                  <Bed className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Bed & Ward Status</h3>
               </div>
               <Settings size={14} className="text-gray-500" />
            </div>
            
            <div className="space-y-4">
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">General Ward</span>
                  <span className="text-white font-mono">123 / 150 &raquo;</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">ICU</span>
                  <span className="text-red-500 font-bold font-mono">42 / 45 &raquo;</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">NICU</span>
                  <span className="text-white font-mono">19 / 20 &raquo;</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Private Rooms</span>
                  <span className="text-white font-mono">72 / 90 &raquo;</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Isolation Ward</span>
                  <span className="text-white font-mono">13 / 15 &raquo;</span>
               </div>
            </div>

            <div className="flex gap-2 mt-6">
               <Button variant="outline" className="text-xs h-8 flex-1">Allocate Bed</Button>
               <Button variant="outline" className="text-xs h-8 flex-1">View Waiting List</Button>
            </div>
         </Card>

         {/* Staff & Shift Management */}
         <Card>
            <div className="flex items-center justify-between mb-4">
               <div className="flex items-center gap-2">
                  <Users className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Staff & Shift Management</h3>
               </div>
               <Settings size={14} className="text-gray-500" />
            </div>

            <div className="space-y-4">
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Nurses</span>
                  <div className="flex items-center gap-2">
                     <span className="text-white">138 / 148</span>
                     <Badge variant="danger" className="text-[10px]">Critical</Badge>
                  </div>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Doctors</span>
                  <div className="flex items-center gap-2">
                     <span className="text-white">37 / 40</span>
                     <div className="flex gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span></div>
                  </div>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Support</span>
                  <div className="flex items-center gap-2">
                     <span className="text-white">86 / 95</span>
                     <div className="flex gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500"></span></div>
                  </div>
               </div>

               <div className="pt-2 border-t border-gray-800">
                  <div className="flex justify-between text-xs mb-1">
                     <span className="text-brand-yellow flex items-center gap-1"><AlertTriangle size={10} /> Shift Risk Alerts</span>
                     <span className="text-white font-bold">24</span>
                  </div>
                  <div className="space-y-1">
                     <div className="flex justify-between text-xs text-gray-500">
                        <span>Emergency Dept</span>
                        <span className="text-white">Understaffed</span>
                     </div>
                     <div className="flex justify-between text-xs text-gray-500">
                        <span>Cardiology ICU</span>
                        <span className="text-red-400">High Workload</span>
                     </div>
                  </div>
               </div>
            </div>
             <div className="flex gap-2 mt-4">
               <Button variant="outline" className="text-xs h-8 flex-1">Adjust Shift</Button>
               <Button variant="outline" className="text-xs h-8 flex-1 bg-brand-yellow/10 text-brand-yellow border-brand-yellow">Call Backup</Button>
            </div>
         </Card>

         {/* Emergency & Patient Flow */}
         <Card>
            <div className="flex items-center justify-between mb-4">
               <div className="flex items-center gap-2">
                  <Ambulance className="text-brand-yellow" size={18} />
                  <h3 className="font-bold text-base">Emergency Flow</h3>
               </div>
               <Settings size={14} className="text-gray-500" />
            </div>

            <div className="space-y-4">
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Current ER Queue</span>
                  <span className="text-white font-bold">11</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Critical Cases</span>
                  <span className="text-white font-bold">3 &raquo;</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Ambulances Incoming</span>
                  <span className="text-white font-bold">2 &raquo;</span>
               </div>

               <div className="bg-[#1a1a1a] p-3 rounded border border-gray-800 mt-2">
                  <div className="text-xs text-gray-400 mb-2">Next 6 Hours:</div>
                  <div className="flex justify-between items-center text-xs mb-1">
                     <span>Cardiac Surgery - 1 PM</span>
                     <Badge variant="danger" className="text-[10px]">Delayed</Badge>
                  </div>
                  <div className="text-[10px] text-gray-500">Neuro • 2:30 PM • Dr Sharma</div>
               </div>
            </div>
             <div className="flex gap-2 mt-4">
               <Button variant="outline" className="text-xs h-8 flex-1">View ER Status</Button>
               <Button variant="outline" className="text-xs h-8 flex-1">Reassign OT</Button>
            </div>
         </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         {/* Billing & Revenue */}
         <Card>
            <div className="flex items-center gap-2 mb-4">
               <FileText className="text-brand-yellow" size={18} />
               <h3 className="font-bold text-base">Billing</h3>
            </div>
            <div className="space-y-3">
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Today's Revenue</span>
                  <span className="text-white font-bold">₹42.7 Lakhs</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Pending Discharge</span>
                  <span className="text-white font-bold">14 &raquo;</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Ins Claims Init</span>
                  <span className="text-white font-bold">21 &raquo;</span>
               </div>
            </div>
             <Button variant="outline" className="text-xs h-8 w-full mt-4">View OT Schedule</Button>
         </Card>

         {/* Pharmacy & Supply */}
         <Card>
            <div className="flex items-center gap-2 mb-4">
               <Stethoscope className="text-brand-yellow" size={18} />
               <h3 className="font-bold text-base">Pharmacy</h3>
            </div>
            <div className="space-y-3">
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Critical Stock</span>
                  <span className="text-green-500 font-bold">● 1.3%</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Isolation Ward</span>
                  <span className="text-white font-bold">13.0/18</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Bio-Waste Pickup</span>
                  <span className="text-brand-yellow font-bold">Scheduled &raquo;</span>
               </div>
            </div>
             <Button variant="outline" className="text-xs h-8 w-full mt-4">View ER Status</Button>
         </Card>

         {/* Compliance */}
         <Card>
            <div className="flex items-center gap-2 mb-4">
               <Shield className="text-brand-yellow" size={18} />
               <h3 className="font-bold text-base">Compliance</h3>
            </div>
            <div className="space-y-3">
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Unauth Access</span>
                  <span className="text-white font-bold">1 &raquo;</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Med Override</span>
                  <span className="text-white font-bold">2 &raquo;</span>
               </div>
               <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Audit Flags</span>
                  <span className="text-green-500 font-bold">7.4 Mod</span>
               </div>
            </div>
             <Button variant="outline" className="text-xs h-8 w-full mt-4">View Billing Requests</Button>
         </Card>

          {/* Predictive Alerts */}
         <Card>
            <div className="flex items-center gap-2 mb-4">
               <AlertTriangle className="text-brand-yellow" size={18} />
               <h3 className="font-bold text-base">Predictive Alerts</h3>
            </div>
            <div className="space-y-3">
               <div className="flex justify-between text-sm items-center">
                  <span className="text-gray-400">ICU Overload</span>
                  <Badge variant="danger" className="text-[10px]">High Risk</Badge>
               </div>
               <div className="flex justify-between text-sm items-center">
                  <span className="text-gray-400">Weekend Surge</span>
                  <span className="text-green-500 font-bold">↗ 7% &raquo;</span>
               </div>
               <div className="flex justify-between text-sm items-center">
                  <span className="text-gray-400">Burnout Index</span>
                  <span className="text-white font-bold">7.4</span>
               </div>
            </div>
             <Button variant="outline" className="text-xs h-8 w-full mt-4">Deploy Temp Staff</Button>
         </Card>
      </div>
    </div>
  );
};