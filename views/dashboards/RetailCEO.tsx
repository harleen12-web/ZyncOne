import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import {  AlertTriangle, ArrowUpRight, CheckCircle, Wallet, Activity, ShieldAlert, Package, TrendingUp, AlertCircle, Search, FileText, Lock, Users } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: '1', value: 10 },
  { name: '5', value: 12 },
  { name: '10', value: 11 },
  { name: '15', value: 14 },
  { name: '20', value: 20 },
  { name: '25', value: 25 },
  { name: '30', value: 24 },
];

export const RetailCEO = ({ userName, company }: { userName: string, company: string }) => {
  const [revenue, setRevenue] = useState(1423123);
  const [delhiStock, setDelhiStock] = useState(45);
  const [mumbaiStock, setMumbaiStock] = useState(9);
  const [lastUpdated, setLastUpdated] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
        // Update Revenue: Increment by random amount between 200 and 1500
        const increment = Math.floor(Math.random() * (1500 - 200 + 1) + 200);
        setRevenue(prev => prev + increment);
        setLastUpdated(0); // Reset timer
        
        // Occasionally update stock to simulate live sales/movement
        // 30% chance to change Delhi stock
        if (Math.random() > 0.7) {
             setDelhiStock(prev => Math.max(0, prev + (Math.random() > 0.6 ? -1 : 1))); // Mostly down (-1) but sometimes restocking (+1)
        }
        // 20% chance to change Mumbai stock
        if (Math.random() > 0.8) {
             setMumbaiStock(prev => Math.max(0, prev + (Math.random() > 0.6 ? -1 : 1)));
        }

    }, 3000);

    // Timer for "Last updated X seconds ago"
    const timerInterval = setInterval(() => {
        setLastUpdated(prev => prev + 1);
    }, 1000);

    return () => {
        clearInterval(interval);
        clearInterval(timerInterval);
    };
  }, []);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const currentDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Header
    doc.setFontSize(22);
    doc.setTextColor(20, 20, 20); // Dark Gray
    doc.text("NEXUS RETAIL LTD.", 20, 20);
    
    doc.setFontSize(16);
    doc.text("GST Compliance Summary Report", 20, 30);
    
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100); // Light Gray
    doc.text(`Generated: ${currentDate} IST`, 20, 38);
    doc.text("CIN: U74999DL2021PTCXXXX", 20, 44);
    doc.text("GSTIN: 07ABCDE1234F1Z5", 20, 50);
    doc.text("Registered Office: Delhi, India", 20, 56);
    
    // Separator
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 62, 190, 62);
    
    let yPos = 75;
    
    // 1. Revenue Summary
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("1. Revenue Summary (Monthly)", 20, yPos);
    yPos += 8;
    
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    doc.text(`Total Revenue (Dec): Rs. ${revenue.toLocaleString('en-IN')}`, 25, yPos);
    yPos += 7;
    // Approx 18% GST calculation
    const gstAmount = Math.round(revenue * 0.18);
    const netValue = revenue - gstAmount;
    doc.text(`GST Collected (18% Avg): Rs. ${gstAmount.toLocaleString('en-IN')}`, 25, yPos);
    yPos += 7;
    doc.text(`Net Taxable Value: Rs. ${netValue.toLocaleString('en-IN')}`, 25, yPos);
    
    yPos += 15;
    
    // 2. GST Filing Status
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("2. GST Filing Status", 20, yPos);
    yPos += 8;
    
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    doc.text("GSTR-1: Filed", 25, yPos);
    yPos += 7;
    doc.text("GSTR-3B: Ready for Filing", 25, yPos);
    yPos += 7;
    doc.text("Input Credit Claimed: Rs. 2,12,000", 25, yPos);
    yPos += 7;
    doc.text("Variance Cases: 1", 25, yPos);

    yPos += 15;

    // 3. Risk & Exception Summary
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("3. Risk & Exception Summary", 20, yPos);
    yPos += 8;

    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    doc.text("High Discount Overrides: 2", 25, yPos);
    yPos += 7;
    doc.text(`Inventory Variance (Mumbai): ${mumbaiStock - 12} Units`, 25, yPos); // Dynamic-ish
    yPos += 7;
    doc.text("Shrinkage Risk: 82%", 25, yPos);

    yPos += 15;

    // 4. Store-Level Breakdown
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("4. Store-Level Breakdown", 20, yPos);
    yPos += 8;

    const delhiRev = Math.round(revenue * 0.62);
    const mumbaiRev = revenue - delhiRev;
    
    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    doc.text(`Delhi Revenue: Rs. ${delhiRev.toLocaleString('en-IN')}`, 25, yPos);
    yPos += 7;
    doc.text(`Mumbai Revenue: Rs. ${mumbaiRev.toLocaleString('en-IN')}`, 25, yPos);

    yPos += 15;

    // 5. Audit Trail Summary
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text("5. Audit Trail Summary", 20, yPos);
    yPos += 8;

    doc.setFontSize(11);
    doc.setTextColor(60, 60, 60);
    doc.text("Total System Logins: 32", 25, yPos);
    yPos += 7;
    doc.text("Price Overrides: 2", 25, yPos);
    yPos += 7;
    doc.text("Manual Stock Updates: 1", 25, yPos);
    yPos += 7;
    doc.text("Flagged Activities: 1", 25, yPos);
    
    // Footer
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text("System Generated via SyncOne AI Compliance Engine.", 20, 280);
    doc.text("Digitally Verified - Immutable Audit Trail Enabled", 20, 285);
    
    doc.save("NEXUS_GST_Compliance_Report.pdf");
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-1">
             <span className="uppercase tracking-wider font-bold text-brand-yellow">{company}</span>
             <span>•</span>
             <span>CEO View</span>
             <span>•</span>
             <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-500"></span> India (Delhi, Mumbai)</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Good Afternoon, {userName}</h1>
        </div>
        <div className="flex items-center gap-2">
           <span className="flex h-3 w-3 relative">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
           </span>
           <span className="text-green-500 font-medium text-sm">System Operational</span>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="flex flex-col justify-between h-full">
           <div className="flex justify-between items-start mb-2">
             <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Total Revenue</span>
             <Wallet size={16} className="text-gray-400" />
           </div>
           <div>
             <div className="text-2xl font-bold mb-1 transition-all duration-300">₹{revenue.toLocaleString('en-IN')}</div>
             <div className="flex justify-between items-center">
                <Badge variant="success" className="text-[10px]">+12.5%</Badge>
                <span className="text-[10px] text-gray-500">Updated {lastUpdated}s ago</span>
             </div>
           </div>
        </Card>
        
        <Card className="flex flex-col justify-between h-full">
           <div className="flex justify-between items-start mb-2">
             <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Operational Health</span>
             <Activity size={16} className="text-gray-400" />
           </div>
           <div>
             <div className="text-2xl font-bold mb-1">96.3%</div>
             <Badge variant="success" className="text-[10px]">+2.4%</Badge>
           </div>
        </Card>

        <Card className="flex flex-col justify-between h-full">
           <div className="flex justify-between items-start mb-2">
             <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Compliance Score</span>
             <ShieldAlert size={16} className="text-gray-400" />
           </div>
           <div>
             <div className="flex items-end gap-2 mb-1">
                <span className="text-2xl font-bold">98/100</span>
             </div>
             <span className="text-xs text-gray-500">GST Audit Ready</span>
           </div>
        </Card>

        <Card className="flex flex-col justify-between h-full">
           <div className="flex justify-between items-start mb-2">
             <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Active Alerts</span>
             <AlertTriangle size={16} className="text-red-500" />
           </div>
           <div>
             <div className="text-2xl font-bold mb-1 text-red-500">3</div>
             <div className="flex items-center gap-2">
                <Badge variant="danger" className="text-[10px]">Critical</Badge>
                <span className="text-xs text-gray-400">1 Critical Needs Attention</span>
             </div>
           </div>
        </Card>
      </div>

      {/* Inventory Section */}
      <Card className="border border-brand-border">
         <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Package className="text-brand-yellow" size={20} />
              <h3 className="font-bold text-lg">Real-Time Inventory</h3>
            </div>
            <div className="flex items-center gap-2 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
              <span className="text-xs text-brand-yellow">Live Sync</span>
            </div>
         </div>

         <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Leather Jackets <span className="text-gray-500">(SKU-992)</span></span>
                <span className="text-gray-500 text-xs">Delhi Warehouse</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-1">
                {/* Visual bar width approx */}
                <div 
                    className="h-full bg-teal-500 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, (delhiStock / 60) * 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400 font-mono transition-all duration-300">{delhiStock} Units</span>
                <span className="text-gray-400">Optimal</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Running Shoes <span className="text-gray-500">(SKU-104)</span></span>
                <span className="text-gray-500 text-xs">Mumbai Warehouse</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-1">
                 <div 
                    className="h-full bg-red-500 rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, (mumbaiStock / 40) * 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-red-400 font-mono transition-all duration-300">{mumbaiStock} Units</span>
                <span className="text-red-400 flex items-center gap-1"><AlertTriangle size={10} /> Low Stock Alert</span>
              </div>
            </div>
         </div>
      </Card>

      {/* Decision Intelligence */}
      <Card className="border border-blue-900/30 bg-blue-950/5">
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="text-brand-yellow"><span className="text-lg">🧠</span></div>
              <h3 className="font-bold text-lg">SKU-Level Decision Intelligence</h3>
            </div>
            <Badge variant="blue">AI-Generated</Badge>
         </div>
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between items-start mb-4">
                 <h4 className="font-bold text-lg">Running Shoes (SKU-104)</h4>
                 <span className="text-red-500 text-sm font-medium">-14% Wk Sales</span>
              </div>
              <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                 <span className="text-gray-400">MRP: <span className="text-white font-medium">₹2,499</span></span>
                 <span className="text-gray-400">Competitor Avg: <span className="text-white font-medium">₹2,199</span></span>
                 <span className="text-gray-400">Delhi Stock: <span className="text-red-400 font-medium">8 Units</span></span>
                 <span className="text-gray-400">Mumbai Stock: <span className="text-green-400 font-medium">36 Units</span></span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Search size={12} /> Price 13% higher than competitor avg
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Search size={12} /> Size 8 overstock in Mumbai
                </div>
              </div>
            </div>

            <div className="border-l border-gray-800 pl-0 lg:pl-8 pt-4 lg:pt-0">
               <h5 className="text-brand-yellow text-xs font-bold uppercase mb-3">AI Recommendation</h5>
               <ul className="space-y-3">
                 <li className="flex items-start gap-2 text-sm">
                   <div className="mt-0.5 bg-green-500/20 p-0.5 rounded"><CheckCircle size={12} className="text-green-500" /></div>
                   <span>Reduce price by ₹150</span>
                 </li>
                 <li className="flex items-start gap-2 text-sm">
                   <div className="mt-0.5 bg-green-500/20 p-0.5 rounded"><CheckCircle size={12} className="text-green-500" /></div>
                   <span>Transfer 10 units Mumbai → Delhi</span>
                 </li>
                 <li className="flex items-start gap-2 text-sm">
                   <div className="mt-0.5 bg-green-500/20 p-0.5 rounded"><CheckCircle size={12} className="text-green-500" /></div>
                   <span>Launch "Weekend Sports Offer" campaign</span>
                 </li>
               </ul>
            </div>
         </div>
      </Card>

      {/* Compliance Center */}
      <Card>
        <div className="flex justify-between items-center mb-6">
           <div>
             <h3 className="font-bold text-lg">Auto-Compliance Center</h3>
             <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
               <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
               <span>Fully Updated • Last Generated: 14 Feb 2026 - 11:00 AM IST</span>
             </div>
           </div>
           <button 
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] px-3 py-1.5 rounded-lg border border-gray-800 text-xs transition-colors"
            >
              <FileText size={14} /> Download GST Audit PDF
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <div className="bg-black/40 p-4 rounded-xl border border-gray-800">
             <span className="text-xs text-gray-500 block mb-1">Taxable Value (Dec)</span>
             <span className="text-xl font-bold">₹{Math.floor(revenue * 0.82).toLocaleString('en-IN')}</span>
           </div>
           <div className="bg-black/40 p-4 rounded-xl border border-gray-800">
             <span className="text-xs text-gray-500 block mb-1">Audit Status</span>
             <span className="text-xl font-bold text-green-500">Ready for Filing</span>
           </div>
           <div className="bg-black/40 p-4 rounded-xl border border-gray-800">
             <span className="text-xs text-gray-500 block mb-1">Variance Cases</span>
             <span className="text-xl font-bold text-brand-yellow">1 Flagged</span>
           </div>
        </div>
      </Card>

      {/* Inventory Integrity Monitor (Alert) */}
      <Card className="border border-red-900/30 bg-red-950/5">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle size={18} className="text-red-500" />
          <h3 className="font-bold text-lg">Inventory Integrity Monitor</h3>
        </div>

        <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
           <div className="flex justify-between items-start mb-4">
              <div>
                 <span className="text-red-500 text-xs font-bold uppercase tracking-wider mb-1 block">High Priority Alert</span>
                 <h4 className="font-bold text-base">Discrepancy Detected: Mumbai Warehouse</h4>
              </div>
              <Badge variant="danger" className="bg-red-500/20 border-red-500/30 text-red-400">Risk Prob: 82%</Badge>
           </div>
           
           <div className="flex justify-between text-sm mb-4 border-b border-red-500/10 pb-4">
              <div className="text-center md:text-left">
                <span className="block text-gray-500 text-xs mb-1">Exp. Closing</span>
                <span className="font-medium">48 Units</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-gray-500 text-xs mb-1">Actual Closing</span>
                <span className="font-medium">45 Units</span>
              </div>
              <div className="text-center md:text-right">
                <span className="block text-gray-500 text-xs mb-1">Variance</span>
                <span className="font-bold text-red-500">-3 Units</span>
              </div>
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
              <span className="text-gray-400 bg-black/20 px-2 py-1 rounded">Possible Cause: Unbilled Removal / Internal Theft</span>
              <div className="flex items-center gap-2 text-gray-300">
                <Users size={12} /> Aman Gupta (Inventory Access 2:15 PM)
              </div>
           </div>
        </div>
      </Card>
      
      {/* Risk Meter & Forecast */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* AI Risk Meter */}
         <Card>
            <h3 className="font-bold text-lg mb-6">AI Risk Meter</h3>
            <div className="space-y-6">
              <div>
                 <div className="flex justify-between text-xs mb-2">
                   <span className="text-gray-400">Operational Risk</span>
                   <span className="text-green-500">Low</span>
                 </div>
                 <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                   <div className="h-full bg-green-500 w-[25%] rounded-full"></div>
                 </div>
              </div>
              <div>
                 <div className="flex justify-between text-xs mb-2">
                   <span className="text-gray-400">Compliance Risk</span>
                   <span className="text-brand-yellow">Medium</span>
                 </div>
                 <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                   <div className="h-full bg-brand-yellow w-[65%] rounded-full"></div>
                 </div>
              </div>
              <div>
                 <div className="flex justify-between text-xs mb-2">
                   <span className="text-gray-400">Shrinkage Risk</span>
                   <span className="text-red-500">High</span>
                 </div>
                 <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                   <div className="h-full bg-red-500 w-[92%] rounded-full"></div>
                 </div>
              </div>
            </div>
         </Card>

         {/* 30 Day Forecast */}
         <Card>
            <h3 className="font-bold text-lg mb-1">30-Day Forecast</h3>
            <p className="text-xs text-gray-400 mb-4">Prediction: <span className="text-brand-yellow">₹32.50L</span> (+14% Holi Uplift)</p>
            <div className="h-[140px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FCD34D" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#FCD34D" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', borderColor: '#333', borderRadius: '8px', fontSize: '12px' }}
                    itemStyle={{ color: '#FCD34D' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#FCD34D" fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
         </Card>
      </div>

      {/* Staff Utilization & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
             <div className="flex items-center gap-2 mb-6">
               <Users className="text-gray-400" size={18} />
               <h3 className="font-bold text-base">Staff Utilization</h3>
             </div>
             
             <div className="space-y-5">
                <div>
                   <div className="flex justify-between text-sm mb-1">
                     <span className="font-medium">Rohit Sharma</span>
                     <span className="text-green-500 text-xs font-bold">92%</span>
                   </div>
                   <span className="text-xs text-gray-500 block mb-2">Billing</span>
                   <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500 w-[92%] rounded-full"></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-sm mb-1">
                     <span className="font-medium">Neha Verma</span>
                     <span className="text-green-500 text-xs font-bold">88%</span>
                   </div>
                   <span className="text-xs text-gray-500 block mb-2">Floor Ops</span>
                   <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500 w-[88%] rounded-full"></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-sm mb-1">
                     <span className="font-medium">Aman Gupta</span>
                     <span className="text-orange-500 text-xs font-bold">45%</span>
                   </div>
                   <span className="text-xs text-gray-500 block mb-2">Inventory</span>
                   <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                     <div className="h-full bg-orange-500 w-[45%] rounded-full"></div>
                   </div>
                </div>
             </div>
          </Card>

          <Card>
             <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-6">Top Strategic Alerts</h3>
             <div className="space-y-4">
                <div className="flex items-start gap-3">
                   <AlertTriangle size={16} className="text-orange-500 mt-0.5" />
                   <span className="text-sm">Delhi SKU-104 Low Stock</span>
                </div>
                <div className="flex items-start gap-3">
                   <AlertTriangle size={16} className="text-red-500 mt-0.5" />
                   <span className="text-sm">Mumbai Shrinkage Anomaly</span>
                </div>
                <div className="flex items-start gap-3">
                   <FileText size={16} className="text-brand-yellow mt-0.5" />
                   <span className="text-sm">2 High Discount Overrides</span>
                </div>
             </div>
          </Card>
      </div>

      {/* Audit Trail */}
      <Card>
        <div className="flex items-center gap-2 mb-6">
           <ShieldAlert className="text-brand-yellow" size={18} />
           <h3 className="font-bold text-base">Immutable Audit Trail</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="pb-3 font-medium">Time</th>
                <th className="pb-3 font-medium">Action</th>
                <th className="pb-3 font-medium">User</th>
                <th className="pb-3 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              <tr>
                <td className="py-3 text-xs">10:42 AM</td>
                <td className="py-3 text-white font-medium">Stock Update (Manual)</td>
                <td className="py-3">Manager (Delhi)</td>
                <td className="py-3 text-right text-xs"><span className="flex items-center justify-end gap-1"><Lock size={10} /> Locked</span></td>
              </tr>
              <tr>
                <td className="py-3 text-xs">10:15 AM</td>
                <td className="py-3 text-white font-medium">Price Override</td>
                <td className="py-3">Rohit Sharma</td>
                <td className="py-3 text-right text-xs"><span className="flex items-center justify-end gap-1 text-orange-500"><AlertTriangle size={10} /> Flagged</span></td>
              </tr>
              <tr>
                <td className="py-3 text-xs">09:30 AM</td>
                <td className="py-3 text-white font-medium">System Login</td>
                <td className="py-3">Neha Verma</td>
                <td className="py-3 text-right text-xs"><span className="flex items-center justify-end gap-1 text-green-500"><CheckCircle size={10} /> Verified</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};