import React from 'react';
import { ArrowRight, Box, Users, Shield, Zap, Layers } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Header } from '../components/Header';

interface HomeProps {
  onStartConfig: () => void;
}

export const Home: React.FC<HomeProps> = ({ onStartConfig }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col">
      <Header onSignUp={onStartConfig} onLogin={() => {}} />
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 md:pt-32 md:pb-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            One Platform.<br />
            <span className="text-gray-400">Configured For Your Business.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
            ZyncOne adapts to your industry, role, and challenges — in real time.
          </p>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-brand-yellow/20 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Button onClick={onStartConfig} className="relative text-lg px-8 py-4">
              Configure My ZyncOne <ArrowRight size={20} />
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 mb-24 max-w-7xl mx-auto w-full">
          <div className="bg-[#111] border border-brand-border rounded-2xl p-10 flex flex-col items-center text-center hover:border-gray-600 transition-colors group">
            <div className="w-16 h-16 rounded-full bg-brand-card border border-brand-border flex items-center justify-center mb-6 text-brand-yellow group-hover:scale-110 transition-transform">
              <Box size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Inventory & Assets</h3>
            <p className="text-gray-500 text-sm">Unified tracking for physical and digital assets across your entire organization.</p>
          </div>
          
          <div className="bg-[#111] border border-brand-border rounded-2xl p-10 flex flex-col items-center text-center hover:border-gray-600 transition-colors group">
            <div className="w-16 h-16 rounded-full bg-brand-card border border-brand-border flex items-center justify-center mb-6 text-brand-yellow group-hover:scale-110 transition-transform">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Workforce</h3>
            <p className="text-gray-500 text-sm">Real-time performance metrics and intelligent scheduling for teams of any size.</p>
          </div>

          <div className="bg-[#111] border border-brand-border rounded-2xl p-10 flex flex-col items-center text-center hover:border-gray-600 transition-colors group">
            <div className="w-16 h-16 rounded-full bg-brand-card border border-brand-border flex items-center justify-center mb-6 text-brand-yellow group-hover:scale-110 transition-transform">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Compliance</h3>
            <p className="text-gray-500 text-sm">Automated regulatory adherence and risk management for high-stakes industries.</p>
          </div>
        </div>

        {/* Value Prop 1 */}
        <div className="px-6 md:px-12 py-16 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
             <div className="w-12 h-12 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center mb-6 text-brand-yellow">
               <Zap size={24} />
             </div>
             <span className="text-brand-yellow text-xs font-bold tracking-wider uppercase mb-2 block border border-brand-yellow/30 px-2 py-1 rounded inline-block">Built for Pressure</span>
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-time Clarity for High-Stakes Decisions</h2>
             <p className="text-gray-400 leading-relaxed text-lg">
               When every second impacts your bottom line, you can't afford latency. ZyncOne is engineered for high-throughput environments where reliability isn't a luxury, it's a requirement.
             </p>
          </div>
          <div className="flex-1 flex justify-center">
             <div className="w-full max-w-sm aspect-square bg-[#111] rounded-3xl border border-brand-border flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent"></div>
               <Zap size={64} className="text-brand-yellow opacity-80" />
             </div>
          </div>
        </div>

        {/* Value Prop 2 */}
        <div className="px-6 md:px-12 py-16 max-w-7xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
             <div className="w-12 h-12 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center mb-6 text-brand-yellow">
               <Layers size={24} />
             </div>
             <span className="text-brand-yellow text-xs font-bold tracking-wider uppercase mb-2 block border border-brand-yellow/30 px-2 py-1 rounded inline-block">One Platform, Many Industries</span>
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Retail, FinTech, Healthcare, Logistics</h2>
             <p className="text-gray-400 leading-relaxed text-lg">
               Whether you're managing supply chains across continents or patient data across clinics, ZyncOne's polymorphic architecture adapts to your specific sector compliance and operational flows.
             </p>
          </div>
          <div className="flex-1 flex justify-center">
             <div className="w-full max-w-sm aspect-square bg-[#111] rounded-3xl border border-brand-border flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-bl from-brand-yellow/5 to-transparent"></div>
               <Layers size={64} className="text-brand-yellow opacity-80" />
             </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-brand-border py-8 text-center text-gray-500 text-sm">
        © 2024 ZyncOne. Engineered for the Future.
      </footer>
    </div>
  );
};