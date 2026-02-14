import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { 
  ShieldCheck, Activity, AlertTriangle, Users, FileText, CheckCircle, 
  Gavel, Scale, TrendingUp, DollarSign, Building, HeartPulse, 
  Thermometer, AlertOctagon, Map, Calendar, ArrowRight, Download, ArrowUpRight 
} from 'lucide-react';

export const HealthcareCEO = ({ userName, company }: { userName: string, company: string }) => {
  const [lastUpdated, setLastUpdated] = useState(0);
  const [revenue, setRevenue] = useState(40.3); // Crores
  const [activeCases, setActiveCases] = useState(4); // Legal cases

  // Real-time simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setLastUpdated(prev => (prev + 1) % 60);
    }, 1000);

    const dataTimer = setInterval(() => {
      // Fluctuate revenue slightly
      setRevenue(prev => {
        const change = (Math.random() - 0.5) * 0.1;
        return Number((prev + change).toFixed(2));
      });
      
      // Randomly flicker active cases or other metrics could go here
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(dataTimer);
    };
  }, []);

  // Generic PDF Generator function
  const generateReport = (title: string, sections: any[]) => {
    const doc = new jsPDF();
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Header
    doc.setFillColor(10, 10, 10);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.text("NEXUS CARE HOSPITAL GROUP", 15, 20);
    doc.setFontSize(12);
    doc.setTextColor(200, 200, 200);
    doc.text("Healthcare Executive Report", 15, 30);
    doc.text(`Generated: ${timestamp}`, 140, 30);

    // Corporate Info
    doc.setTextColor(50, 50, 50);
    doc.setFontSize(10);
    doc.text("Corporate Office: Cyber City, Gurugram, India", 15, 50);
    doc.text("CIN: L85110DL2024PLC123456", 15, 55);
    doc.text("Hospitals: Delhi, Mumbai, Bangalore, Hyderabad", 15, 60);
    doc.line(15, 65, 195, 65);

    // Title
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text(title, 15, 80);

    let yPos = 100;

    sections.forEach(section => {
      // Check for page break
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "bold");
      doc.text(section.heading, 15, yPos);
      yPos += 10;

      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(60, 60, 60);

      section.items.forEach((item: string) => {
        doc.text(`• ${item}`, 20, yPos);
        yPos += 7;
      });
      yPos += 10;
    });

    // Footer
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(9);
      doc.setTextColor(150, 150, 150);
      doc.text("System Generated via SyncOne AI Governance Engine", 15, 280);
      doc.text("Digitally Verified | Confidential - Executive Access Only", 15, 285);
      doc.text(`Page ${i} of ${pageCount}`, 180, 285);
    }

    doc.save(`${title.replace(/\s+/g, '_')}_Nexus_Care.pdf`);
  };

  // Specific Report Handlers
  const downloadLegalReport = () => {
    generateReport("Legal & Litigation Risk Report", [
      {
        heading: "Active Legal Cases Summary",
        items: [
          `Total Active Cases: ${activeCases}`,
          "Medical Negligence Claims: 1 (High Risk)",
          "Consumer Court Notices: 2",
          "Potential Financial Exposure: ₹2.3 Crores"
        ]
      },
      {
        heading: "Pending Insurance Litigation",
        items: [
          "Pending Claims Under Litigation: ₹6.7 Cr",
          "Top Insurer Disputes: Star Health, HDFC Ergo",
          "Average Resolution Time: 14 Months"
        ]
      }
    ]);
  };

  const downloadMultiHospitalReport = () => {
    generateReport("Multi-Hospital Performance Report", [
      {
        heading: "Occupancy & Revenue",
        items: [
          "Delhi: 82% Occupancy | ₹15.6 Cr Revenue | Low Risk",
          "Mumbai: 75% Occupancy | ₹9.8 Cr Revenue | Low Risk",
          "Bangalore: 88% Occupancy | ₹2.9 Cr Revenue | High Risk",
          "Hyderabad: 88% Occupancy | ₹4.6 Cr Revenue | High Risk"
        ]
      },
      {
        heading: "Operational Efficiency",
        items: [
          "Network Average Occupancy: 83%",
          "Average Revenue Per Bed (ARPOB): ₹42,000",
          "Critical Care Utilization: 91%"
        ]
      }
    ]);
  };

  const downloadCapexReport = () => {
    generateReport("Capital Expenditure & Expansion Report", [
      {
        heading: "Insurance Pending Summary",
        items: [
          "Total Pending Insurance: ₹3.3 Cr",
          "Ayushman Bharat: ₹42 Lakhs",
          "Private Insurance: ₹2.6 Cr",
          "CGHS Receivables: ₹2.6 Cr"
        ]
      },
      {
        heading: "Expansion Projects",
        items: [
          "Jaipur New Wing: 45% Complete (On Schedule)",
          "Equipment Procurement: MRI Machine (Mumbai) - Pending Approval",
          "Renovation: Delhi OPD Block - Budget ₹1.2 Cr"
        ]
      }
    ]);
  };

  const downloadPatientExpReport = () => {
    generateReport("Patient Experience & Reputation Report", [
      {
        heading: "Net Promoter Score (NPS)",
        items: [
          "Network NPS: 68 (Excellent)",
          "Recent Findings: 95% Positive Sentiment",
          "Key Complaint Area: Discharge Wait Times (Delhi)"
        ]
      },
      {
        heading: "Reputation Metrics",
        items: [
          "Google Rating: 4.6/5.0",
          "Social Media Sentiment: Positive",
          "Doctor Specific Feedback: Dr. Mehta (Cardiology) Top Rated"
        ]
      }
    ]);
  };

  const downloadSupplyChainReport = () => {
    generateReport("Supply Chain & Critical Inventory Report", [
      {
        heading: "Critical Clinical Metrics",
        items: [
          "Infection Rate: 1.2% (Within Limits)",
          "Readmission Rate: 4.4% (Spike Detected)",
          "Medication Error Rate: 1.0%",
          "Mortality Index: 0.88"
        ]
      },
      {
        heading: "Inventory Alerts",
        items: [
          "Oxygen Supply: Adequate (4 Days Reserve)",
          "Cardiac Stents: Low Stock in Mumbai",
          "PPE Kits: Fully Stocked"
        ]
      }
    ]);
  };

  const downloadForecastReport = () => {
    generateReport("Predictive Forecast Report", [
      {
        heading: "Demand Forecasting",
        items: [
          "ICU Overload Alert: Expected in 3 Days (Delhi)",
          "Predicted Cost Impact: ₹2.4 Cr",
          "Disease Spike: Monsoonal Fever (Dengue/Malaria) +19%"
        ]
      },
      {
        heading: "Resource Allocation",
        items: [
          "Staffing Recommendation: Increase Night Shift Nursing by 15%",
          "Bed Allocation: Reserve 20 Beds for Fever Cases"
        ]
      }
    ]);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-1">
             <span className="uppercase tracking-wider font-bold text-gray-300">{company}</span>
             <span>•</span>
             <span>CEO View</span>
             <span>•</span>
             <span>India (Delhi, Mumbai, Bangalore)</span>
          </div>
          <h1 className="text-3xl font-bold text-white">Good Afternoon, {userName}</h1>
        </div>
        <div className="text-right">
           <div className="text-xs text-gray-500 mb-1">
             Updated: {lastUpdated} secs ago 
             <span className="inline-flex gap-0.5 ml-2">
               <span className="w-1 h-3 bg-green-500 rounded-full animate-pulse"></span>
               <span className="w-1 h-3 bg-green-500 rounded-full animate-pulse delay-75"></span>
               <span className="w-1 h-3 bg-green-500 rounded-full animate-pulse delay-150"></span>
             </span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Litigation & Legal Risk */}
        <Card className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Gavel className="text-brand-yellow" size={20} />
            <h3 className="font-bold text-lg">Litigation & Legal Risk</h3>
          </div>
          
          <div className="flex justify-between items-end mb-4">
            <span className="text-gray-400 text-sm">Active Legal Cases:</span>
            <span className="text-2xl font-bold text-green-500">{activeCases}.4<span className="text-sm text-gray-500">/5</span></span>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center bg-[#1a1a1a] p-2 rounded border border-gray-800">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Users size={14} /> Medical Negligence Claims: 1
              </div>
              <Badge variant="danger" className="text-[10px]">High Risk</Badge>
            </div>
            <div className="flex justify-between items-center bg-[#1a1a1a] p-2 rounded border border-gray-800">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <FileText size={14} /> Consumer Court Notices: 2
              </div>
              <ArrowRight size={14} className="text-gray-500" />
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-2 text-gray-400"><ShieldCheck size={14} /> Potential Exposure:</span>
              <span className="text-white font-bold">₹2.3 Crores</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-2 text-gray-400"><AlertOctagon size={14} /> Pending Claims:</span>
              <span className="text-brand-yellow font-bold">₹6.7 Cr</span>
            </div>
          </div>

          <div className="mt-auto">
             <Button variant="outline" fullWidth onClick={downloadLegalReport} className="text-xs h-9">
               View Legal Report <ArrowRight size={14} />
             </Button>
          </div>
        </Card>

        {/* Multi-Hospital KPIs */}
        <Card className="flex flex-col lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Multi-Hospital KPIs</h3>
            <div className="text-xs text-gray-500">Risk Index</div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-gray-500 border-b border-gray-800">
                  <th className="pb-2 font-medium">Hospitals</th>
                  <th className="pb-2 font-medium text-center">Occupancy</th>
                  <th className="pb-2 font-medium text-right">Revenue</th>
                  <th className="pb-2 font-medium text-right">Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="py-3 text-white">Delhi</td>
                  <td className="py-3 text-center text-white">82%</td>
                  <td className="py-3 text-right text-white">₹15.6 Cr</td>
                  <td className="py-3 text-right"><span className="text-green-500 flex items-center justify-end gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Low</span></td>
                </tr>
                <tr>
                  <td className="py-3 text-white">Mumbai</td>
                  <td className="py-3 text-center text-white">75%</td>
                  <td className="py-3 text-right text-white">₹9.8 Cr</td>
                  <td className="py-3 text-right"><span className="text-green-500 flex items-center justify-end gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Low</span></td>
                </tr>
                <tr>
                  <td className="py-3 text-white">Bangalore</td>
                  <td className="py-3 text-center text-white">88%</td>
                  <td className="py-3 text-right text-white">₹2.9 Cr</td>
                  <td className="py-3 text-right"><span className="text-red-500 flex items-center justify-end gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> High</span></td>
                </tr>
                <tr>
                  <td className="py-3 text-white">Hyderabad</td>
                  <td className="py-3 text-center text-white">88%</td>
                  <td className="py-3 text-right text-white">₹4.6 Cr</td>
                  <td className="py-3 text-right"><span className="text-orange-500 flex items-center justify-end gap-1"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Med</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex gap-2 mt-4">
             <Button variant="outline" className="text-xs py-1.5 px-3 h-8 flex-1">Drill Down</Button>
             <Button variant="outline" className="text-xs py-1.5 px-3 h-8 flex-1">Compare</Button>
             <Button variant="primary" onClick={downloadMultiHospitalReport} className="text-xs py-1.5 px-3 h-8 flex-1 text-black bg-brand-yellow border-none">Gen Report</Button>
          </div>
        </Card>

        {/* Capital Expenditure & Expansion */}
        <Card className="flex flex-col">
           <div className="flex items-center gap-2 mb-4">
            <Building className="text-brand-yellow" size={20} />
            <h3 className="font-bold text-lg">Capital Expenditure</h3>
          </div>

          <div className="flex justify-between items-center mb-4">
             <span className="text-gray-400 text-sm">Pending Insurance</span>
             <span className="text-xl font-bold text-white">₹3.3 Cr</span>
          </div>

          <div className="space-y-3 mb-6 flex-1">
             <div className="flex justify-between text-sm">
                <span className="text-gray-400">Ayushman Bharat</span>
                <span className="text-white">₹42 Lakhs</span>
             </div>
             <div className="flex justify-between text-sm">
                <span className="text-gray-400">Private Insurance</span>
                <span className="text-white">₹2.6 Cr</span>
             </div>
             <div className="flex justify-between text-sm">
                <span className="text-gray-400">CGHS</span>
                <span className="text-white">₹2.6 Cr</span>
             </div>
             
             <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center gap-2 text-green-500 text-xs font-bold mb-1">
                   <TrendingUp size={12} /> 13% patient spike for the weekend
                </div>
             </div>
          </div>

          <div className="mt-auto">
             <Button variant="outline" fullWidth onClick={downloadCapexReport} className="text-xs h-9">
               Explore Forecast <ArrowRight size={14} />
             </Button>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Experience */}
        <Card className="flex flex-col">
           <div className="flex items-center gap-2 mb-4">
            <HeartPulse className="text-brand-yellow" size={20} />
            <h3 className="font-bold text-lg">Patient Experience</h3>
          </div>
           
           <div className="flex justify-between items-end mb-6">
             <div>
               <span className="text-gray-400 text-sm block mb-1">Recent Findings:</span>
               <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-gray-800 rounded text-xs text-gray-300">NPS</span>
                  <span className="text-2xl font-bold text-green-500">95%</span>
               </div>
             </div>
           </div>

           <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center text-sm">
                 <span className="text-white">Delhi: 1,540</span>
                 <span className="text-gray-400">RB: 148</span>
                 <span className="text-brand-yellow font-bold">R: 4.8 Cr</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                 <span className="text-white">Mumbai: 980</span>
                 <span className="text-gray-400">RB: 790</span>
                 <div className="flex text-brand-yellow text-xs">★★★★☆</div>
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-2 mt-auto">
             <Button variant="outline" className="text-[10px] px-2 h-8">View Audit</Button>
             <Button variant="outline" onClick={downloadPatientExpReport} className="text-[10px] px-2 h-8">Download Rpt</Button>
           </div>
        </Card>

        {/* Network Risk Heatmap */}
        <Card className="flex flex-col">
           <div className="flex items-center gap-2 mb-4">
            <Map className="text-brand-yellow" size={20} />
            <h3 className="font-bold text-lg">Network Risk Heatmap</h3>
          </div>

          <div className="space-y-4 mb-6">
             <div className="flex justify-between items-center">
                <span className="text-white font-bold">Delhi: 142 Cr</span>
                <span className="text-gray-400 text-sm">Bangalore: <span className="text-white">Low</span></span>
                <span className="text-red-500 font-bold flex items-center gap-1 text-sm"><ArrowUpRight size={14} /> 0.58%</span>
             </div>
             <div className="flex justify-between items-center">
                <span className="text-white font-bold">Mumbai: 168</span>
                <span className="text-gray-400 text-sm">Jaipur: <span className="text-green-500">Low</span></span>
                <span className="text-green-500 font-bold flex items-center gap-1 text-sm"><CheckCircle size={14} /> 0.8%</span>
             </div>
          </div>
          
          <div className="relative h-24 w-full bg-[#1a1a1a] rounded-lg border border-gray-800 overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-yellow-900/20 to-red-900/20"></div>
             <span className="text-xs text-gray-500">Interactive Map Visualization Placeholder</span>
          </div>
        </Card>

        {/* Supply Chain & Inventory */}
        <Card className="flex flex-col">
           <div className="flex items-center gap-2 mb-4">
            <Activity className="text-brand-yellow" size={20} />
            <h3 className="font-bold text-lg">Supply Chain & Inventory</h3>
          </div>

          <div className="space-y-3 mb-6">
             <div className="flex justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2"><Thermometer size={14} /> Infection Rate</span>
                <span className="text-green-500 font-bold flex items-center gap-1"><ArrowUpRight size={12} className="rotate-45" /> 1.2%</span>
             </div>
             <div className="flex justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2"><Activity size={14} /> Readmission Rate</span>
                <span className="text-red-500 font-bold flex items-center gap-1"><ArrowUpRight size={12} /> 4.4%</span>
             </div>
             <div className="flex justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2"><AlertTriangle size={14} /> Med Error Rate</span>
                <span className="text-green-500 font-bold flex items-center gap-1"><ArrowUpRight size={12} className="rotate-90" /> 1.0%</span>
             </div>
             <div className="flex justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2"><HeartPulse size={14} /> Mortality Index</span>
                <span className="text-green-500 font-bold flex items-center gap-1"><ArrowUpRight size={12} className="rotate-90" /> 0.88</span>
             </div>
          </div>

          <div className="mt-auto">
             <Button variant="primary" fullWidth onClick={downloadSupplyChainReport} className="text-xs h-9 bg-brand-yellow text-black border-none">
               <ShieldCheck size={14} /> View Governance Log
             </Button>
          </div>
        </Card>
      </div>

       {/* Predictive Forecast - Full Width Bottom */}
      <Card>
         <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
               <Calendar className="text-brand-yellow" size={20} />
               <h3 className="font-bold text-lg">Predictive Forecast</h3>
            </div>
         </div>
         
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-lg w-full md:w-auto">
               <AlertOctagon className="text-red-500" size={24} />
               <div>
                  <div className="text-white font-bold text-sm">ICU Overload Alert</div>
                  <div className="text-red-400 text-lg font-bold">₹2.4 Cr Impact</div>
               </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
               <Activity className="text-gray-500" size={20} />
               <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                     <span className="text-gray-300">Disease Spike (Monsoon)</span>
                     <span className="text-brand-yellow">19% Risk</span>
                  </div>
                  <div className="h-1.5 w-48 bg-gray-800 rounded-full">
                     <div className="h-full bg-brand-yellow w-[19%] rounded-full"></div>
                  </div>
               </div>
            </div>

            <Button variant="outline" onClick={downloadForecastReport} className="text-xs">
               Generate Forecast Report <ArrowRight size={14} />
            </Button>
         </div>
      </Card>
    </div>
  );
};