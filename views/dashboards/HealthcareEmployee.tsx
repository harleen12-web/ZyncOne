import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { 
  User, Calendar, Clock, AlertTriangle, FileText, Search, 
  Activity, HeartPulse, Stethoscope, Mic, Save, Pill, ArrowRight, Users, CheckCircle 
} from 'lucide-react';

export const HealthcareEmployee = ({ userName, company }: { userName: string, company: string }) => {
  return (
    <div className="space-y-6 animate-fade-in pb-10">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
             <span className="uppercase tracking-wider font-bold text-brand-yellow">{company}</span>
             <span>•</span>
             <span>Dr. Arjun Mehta - Senior Consultant</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Good Morning, Dr. Mehta</h1>
          <div className="text-sm text-gray-500 mt-1">Tuesday, April 23 | 9:15 AM</div>
        </div>
        <div className="text-right">
           <div className="text-xs text-gray-500 mb-1">Updated just now <span className="text-green-500">||||</span></div>
           <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden ml-auto">
             {/* Avatar placeholder */}
             <div className="w-full h-full flex items-center justify-center text-xs">AM</div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="space-y-6">
           <Card>
              <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2">
                    <User className="text-brand-yellow" size={18} />
                    <h3 className="font-bold text-base">My Appointments</h3>
                 </div>
                 <div className="text-gray-500">⋮</div>
              </div>
              
              <div className="space-y-4 mb-6">
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Today's Patients Total</span>
                    <span className="text-2xl font-bold text-white">28</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 flex items-center gap-2"><Stethoscope size={14} /> OPD</span>
                    <span className="text-white font-bold">19</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 flex items-center gap-2"><Activity size={14} /> IPD Rounds</span>
                    <span className="text-red-500 font-bold flex items-center gap-1">● 3</span>
                 </div>
              </div>

              <div className="bg-[#1a1a1a] rounded p-3 mb-4">
                 <div className="flex justify-between items-start mb-1">
                    <span className="text-white font-bold">Next Patient</span>
                    <span className="text-gray-400 text-xs">Rajesh Sharma</span>
                 </div>
                 <div className="text-xs text-gray-500">UID: 12226 | Low GF</div>
                 <div className="text-xs text-white mt-2">10:30 AM | Diabetes Review</div>
              </div>

              <Button fullWidth className="bg-brand-yellow text-black border-none hover:bg-yellow-500 font-bold">
                 <ArrowRight className="mr-2" size={16} /> Start Consultation
              </Button>
           </Card>

           <Card>
              <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2">
                    <Users className="text-brand-yellow" size={18} />
                    <h3 className="font-bold text-base">Patient Queue</h3>
                 </div>
                 <div className="text-gray-500">:</div>
              </div>
              
              <div className="space-y-3">
                 <div className="flex justify-between items-center p-2 rounded hover:bg-white/5 cursor-pointer">
                    <span className="text-white text-sm">Token #12</span>
                    <span className="text-gray-400 text-sm">Fever</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Clock size={10} /> 25min</span>
                 </div>
                 <div className="flex justify-between items-center p-2 rounded bg-red-500/10 border border-red-500/20 cursor-pointer">
                    <span className="text-white text-sm">Token #13</span>
                    <span className="text-red-500 text-sm font-bold flex items-center gap-1"><AlertTriangle size={10} /> Critical</span>
                    <span className="text-xs text-red-400 font-bold">8mins</span>
                 </div>
                 <div className="flex justify-between items-center p-2 rounded hover:bg-white/5 cursor-pointer">
                    <span className="text-white text-sm">Token #14</span>
                    <span className="text-gray-400 text-sm">Cough</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Clock size={10} /> 10min</span>
                 </div>
                 <div className="flex justify-between items-center p-2 rounded hover:bg-white/5 cursor-pointer">
                    <span className="text-white text-sm">Token #15</span>
                    <span className="text-gray-400 text-sm">Riya Sharma</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Clock size={10} /> 7mins</span>
                 </div>
              </div>
              
              <Button variant="outline" fullWidth className="mt-4 text-xs h-9">View Full Queue</Button>
           </Card>
        </div>

        {/* Middle Column */}
        <div className="space-y-6">
           <Card>
              <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2">
                    <Activity className="text-brand-yellow" size={18} />
                    <h3 className="font-bold text-base">Lab Results & Alerts</h3>
                 </div>
                 <div className="text-gray-500">&rsaquo;</div>
              </div>
              
              <div className="space-y-3">
                 <div className="p-3 bg-[#1a1a1a] rounded border border-gray-800">
                    <div className="flex justify-between mb-1">
                       <span className="text-white font-bold text-sm">Anita Verma</span>
                       <span className="text-xs text-gray-500">ICU Bed 3</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-xs text-gray-400">Post Surgery</span>
                       <Badge variant="danger" className="text-[10px]">Critical &rsaquo;</Badge>
                    </div>
                 </div>

                 <div className="p-3 bg-[#1a1a1a] rounded border border-gray-800">
                    <div className="flex justify-between mb-1">
                       <span className="text-white font-bold text-sm">Mr. Rakesh Iyer</span>
                       <span className="text-xs text-gray-500">Ward 402</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-xs text-gray-400">Pneumonia</span>
                       <span className="text-green-500 text-xs flex items-center gap-1"><CheckCircle size={10} /> Stable</span>
                    </div>
                 </div>

                 <div className="p-3 bg-[#1a1a1a] rounded border border-gray-800">
                    <div className="flex justify-between mb-1">
                       <span className="text-white font-bold text-sm">Master Aarav Sinha</span>
                       <span className="text-xs text-gray-500">Room 309</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-xs text-gray-400">Age 8</span>
                       <span className="text-red-500 text-xs flex items-center gap-1">❤ Dengue</span>
                    </div>
                 </div>
              </div>
              <Button variant="outline" fullWidth className="mt-4 text-xs h-9">See All Patients</Button>
           </Card>

           <Card>
              <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2">
                    <User className="text-brand-yellow" size={18} />
                    <h3 className="font-bold text-base">My Patients</h3>
                 </div>
                 <div className="text-gray-500">&rsaquo;</div>
              </div>

              <div className="space-y-3">
                 <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-2">
                    <span className="text-white">Ms. Anita Verma</span>
                    <span className="text-gray-500 text-xs">ICU Bed 3</span>
                    <span className="text-red-500 text-xs">❤ Critical</span>
                 </div>
                 <div className="flex justify-between items-center text-sm border-b border-gray-800 pb-2">
                    <span className="text-white">Mr. Rakesh Iyer</span>
                    <span className="text-gray-500 text-xs">Ward 402</span>
                    <span className="text-gray-400 text-xs">Pneumonia</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-white">Master Aarav Sinha</span>
                    <span className="text-gray-500 text-xs">Room 309</span>
                    <span className="text-red-400 text-xs">⊗ Dengue</span>
                 </div>
              </div>
              <Button variant="outline" fullWidth className="mt-4 text-xs h-9">See All Patients</Button>
           </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
           {/* Search */}
           <div className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-800 flex items-center gap-3">
              <Search className="text-gray-500" size={18} />
              <input type="text" placeholder="Name, UHID, Phone..." className="bg-transparent border-none focus:outline-none text-sm text-white w-full" />
           </div>

           {/* Medication History */}
           <Card>
              <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2">
                    <Pill className="text-brand-yellow" size={18} />
                    <h3 className="font-bold text-base">Medication History</h3>
                 </div>
                 <span className="text-xs text-gray-500 cursor-pointer">See All Meds</span>
              </div>
              
              <div className="mb-4">
                 <div className="flex justify-between">
                    <span className="text-white font-bold text-sm">Metformin, 500mg tab</span>
                    <span className="text-white text-sm">1 tab twice a day</span>
                 </div>
                 <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Ordered 2 days ago</span>
                    <span>8 months</span>
                 </div>
                 <div className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                    <User size={10} /> Dr. Iyer, 24y ago
                 </div>
              </div>
              
              <Button variant="outline" fullWidth className="text-xs h-9">See All Meds</Button>
           </Card>

           {/* Emergency Alerts */}
           <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
              <div className="flex justify-between items-center mb-3">
                 <div className="flex items-center gap-2 text-red-500 font-bold">
                    <AlertTriangle size={18} />
                    <h3>Emergency Alerts</h3>
                 </div>
                 <span className="text-gray-500">&rsaquo;</span>
              </div>
              
              <div className="flex justify-between items-center mb-1">
                 <span className="text-white font-bold text-sm">Code Blue</span>
                 <span className="text-xs text-gray-400">ICU, Ward 2</span>
                 <Badge variant="danger" className="text-[10px]">Critical</Badge>
              </div>
              <div className="text-xs text-gray-500 mb-3">9:06 AM</div>
              
              <Button variant="outline" fullWidth className="text-xs h-8 border-gray-700">View All Alerts</Button>
           </div>

           {/* Clinical Notes */}
           <Card>
              <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2">
                    <FileText className="text-brand-yellow" size={18} />
                    <h3 className="font-bold text-base">Clinical Notes</h3>
                 </div>
                 <div className="text-gray-500">:</div>
              </div>

              <div className="space-y-3 mb-4">
                 <div className="flex items-center gap-2 text-sm text-gray-300">
                    <User size={14} /> Shivani Mishra, UHID: 178982
                 </div>
                 <div className="bg-[#1a1a1a] p-2 rounded text-xs text-gray-400 flex justify-between">
                    <span>Headache</span>
                    <span>Every 6 hours • 8 days</span>
                 </div>
                 <div className="bg-[#1a1a1a] p-2 rounded text-xs text-gray-400 flex justify-between">
                    <span>Ibuprofen</span>
                    <span>400mg tablet • 9 days</span>
                 </div>
                 <div className="bg-[#1a1a1a] p-3 rounded text-xs text-gray-400 italic">
                    Diagnosed migraine. Patient advised to rest and hydrate. Follow up in 3 days.
                 </div>
              </div>
              
              <div className="flex gap-2">
                 <Button className="flex-1 h-9 text-xs bg-brand-yellow text-black border-none">Save & Close</Button>
                 <Button variant="outline" className="flex-1 h-9 text-xs"><Mic size={14} className="mr-1"/> Dictate</Button>
              </div>
           </Card>
        </div>

      </div>
    </div>
  );
};