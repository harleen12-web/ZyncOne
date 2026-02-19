import React from 'react';
import { DollarSign, Grid, Settings, Bell, HelpCircle } from 'lucide-react';
import { UserConfig, Industry, Role } from '../types';
import { RetailCEO } from './dashboards/RetailCEO';
import { RetailEmployee } from './dashboards/RetailEmployee';
import { RetailOps } from './dashboards/RetailOps';
import { HealthcareCEO } from './dashboards/HealthcareCEO';
import { HealthcareOps } from './dashboards/HealthcareOps';
import { HealthcareEmployee } from './dashboards/HealthcareEmployee';
import { SaasCEO } from './dashboards/SaasCEO';
import { SaasOps } from './dashboards/SaasOps';
import { SaasEmployee } from './dashboards/SaasEmployee';

interface DashboardLayoutProps {
  config: UserConfig;
  onLogout: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ config, onLogout }) => {
  const getDashboard = () => {
    // Logic to select dashboard based on industry and role
    
    // Healthcare
    if (config.industry === Industry.Healthcare) {
      if (config.role === Role.OpsManager) {
         return <HealthcareOps userName={config.name || 'User'} company={config.company || 'Company'} />;
      }
      if (config.role === Role.Employee) {
         return <HealthcareEmployee userName={config.name || 'User'} company={config.company || 'Company'} />;
      }
      return <HealthcareCEO userName={config.name || 'User'} company={config.company || 'Company'} />;
    }
    
    // SaaS
    if (config.industry === Industry.SaaS) {
      if (config.role === Role.OpsManager) {
         return <SaasOps userName={config.name || 'User'} company={config.company || 'Company'} />;
      }
      if (config.role === Role.Employee) {
         return <SaasEmployee userName={config.name || 'User'} company={config.company || 'Company'} />;
      }
      return <SaasCEO userName={config.name || 'User'} company={config.company || 'Company'} />;
    }

    // Default to Retail logic for others or if specifically Retail
    if (config.role === Role.Employee) {
      return <RetailEmployee userName={config.name || 'User'} company={config.company || 'Company'} />;
    }
    
    if (config.role === Role.OpsManager) {
      return <RetailOps userName={config.name || 'User'} company={config.company || 'Company'} />;
    }

    // Default Fallback is Retail CEO view
    return <RetailCEO userName={config.name || 'User'} company={config.company || 'Company'} />;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      {/* Top Navbar */}
      <nav className="w-full h-16 border-b border-brand-border bg-[#050505] flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-2 text-white text-xl font-bold tracking-tight">
          <img
            src="/image.png"
            alt="ZyncOne Logo"
            className="h-18 w-auto object-contain"
          />
          <span>ZyncOne</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex text-sm font-medium gap-6 text-gray-400">
             <a href="#" className="text-white">Features</a>
             <a href="#" className="hover:text-white transition-colors">Solutions</a>
             <button onClick={onLogout} className="hover:text-white transition-colors">Login</button>
          </div>
          <button className="px-4 py-1.5 rounded-full border border-brand-yellow text-brand-yellow text-xs font-medium hover:bg-brand-yellow hover:text-black transition-all">
            Sign Up
          </button>
        </div>
      </nav>
      
      <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
         {getDashboard()}
      </main>
    </div>
  );
};