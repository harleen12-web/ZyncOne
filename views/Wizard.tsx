import React, { useState } from 'react';
import { ArrowRight, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { UserConfig, Industry, Role } from '../types';

interface WizardProps {
  onComplete: (config: UserConfig) => void;
  onCancel: () => void;
}

const InputField = ({ label, value, onChange, placeholder }: { label: string, value: string, onChange: (val: string) => void, placeholder?: string }) => (
  <div className="mb-4">
    <label className="block text-gray-400 text-sm mb-2">{label}</label>
    <input 
      type="text" 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#111] border border-brand-border rounded-lg p-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
      placeholder={placeholder}
    />
  </div>
);

const SelectButton = ({ active, onClick, children }: { active: boolean, onClick: () => void, children: React.ReactNode }) => (
  <button 
    onClick={onClick}
    className={`w-full p-4 rounded-lg border flex items-center justify-between group transition-all duration-200 mb-3 text-left ${
      active 
        ? 'bg-brand-yellow/10 border-brand-yellow text-white' 
        : 'bg-[#111] border-brand-border text-gray-300 hover:border-gray-500'
    }`}
  >
    <span className={active ? 'text-brand-yellow font-medium' : ''}>{children}</span>
    {active && <span className="text-brand-yellow text-sm">Select &rarr;</span>}
  </button>
);

export const Wizard: React.FC<WizardProps> = ({ onComplete, onCancel }) => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState<UserConfig>({
    name: '',
    age: '',
    country: '',
    company: '',
    industry: null,
    role: null,
    challenge: ''
  });

  const updateConfig = (key: keyof UserConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(s => s + 1);

  const isStep1Valid = config.name && config.company;
  
  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="animate-fade-in">
             <div className="flex gap-2 mb-8 justify-center">
               {[1,2,3,4].map(i => (
                 <div key={i} className={`h-1 rounded-full w-16 transition-colors ${i <= 1 ? 'bg-brand-yellow' : 'bg-gray-800'}`} />
               ))}
             </div>
             <h2 className="text-3xl font-bold mb-2">About You</h2>
             <p className="text-gray-400 mb-8">Fill your details so that we can personalise our website for you.</p>
             
             <InputField label="Name" value={config.name} onChange={(v) => updateConfig('name', v)} placeholder="e.g. Rahul" />
             <div className="grid grid-cols-2 gap-4">
               <InputField label="Age" value={config.age} onChange={(v) => updateConfig('age', v)} placeholder="35" />
               <InputField label="Country" value={config.country} onChange={(v) => updateConfig('country', v)} placeholder="India" />
             </div>
             <InputField label="Company Name" value={config.company} onChange={(v) => updateConfig('company', v)} placeholder="e.g. Nexus Retail Ltd." />
             
             <Button fullWidth onClick={nextStep} disabled={!isStep1Valid} className={!isStep1Valid ? 'opacity-50 cursor-not-allowed' : ''}>
               Next Step <ArrowRight size={18} />
             </Button>
          </div>
        );
      case 2:
        return (
          <div className="animate-fade-in">
             <div className="flex gap-2 mb-8 justify-center">
               {[1,2,3,4].map(i => (
                 <div key={i} className={`h-1 rounded-full w-16 transition-colors ${i <= 2 ? 'bg-brand-yellow' : 'bg-gray-800'}`} />
               ))}
             </div>
             <h2 className="text-3xl font-bold mb-8">Select Industry</h2>
             
             {Object.values(Industry).map((ind) => (
               <SelectButton 
                  key={ind} 
                  active={config.industry === ind} 
                  onClick={() => {
                    updateConfig('industry', ind);
                    // Small delay for effect before auto-advance (optional, but smooth)
                    setTimeout(() => nextStep(), 300);
                  }}
               >
                 {ind}
               </SelectButton>
             ))}
          </div>
        );
      case 3:
        const challenges = [
          'Inventory & Stock Chaos',
          'Workforce Mismatch',
          'Compliance & Audits',
          'System Fragmentation'
        ];
        return (
          <div className="animate-fade-in">
             <div className="flex gap-2 mb-8 justify-center">
               {[1,2,3,4].map(i => (
                 <div key={i} className={`h-1 rounded-full w-16 transition-colors ${i <= 3 ? 'bg-brand-yellow' : 'bg-gray-800'}`} />
               ))}
             </div>
             <h2 className="text-3xl font-bold mb-8">Biggest Challenge</h2>
             
             {challenges.map((c) => (
               <SelectButton 
                  key={c} 
                  active={config.challenge === c} 
                  onClick={() => {
                    updateConfig('challenge', c);
                    setTimeout(() => nextStep(), 300);
                  }}
               >
                 {c}
               </SelectButton>
             ))}
          </div>
        );
      case 4:
        return (
          <div className="animate-fade-in">
             <div className="flex gap-2 mb-8 justify-center">
               {[1,2,3,4].map(i => (
                 <div key={i} className={`h-1 rounded-full w-16 transition-colors ${i <= 4 ? 'bg-brand-yellow' : 'bg-gray-800'}`} />
               ))}
             </div>
             <h2 className="text-3xl font-bold mb-8">Your Role</h2>
             
             {Object.values(Role).map((r) => (
               <SelectButton 
                  key={r} 
                  active={config.role === r} 
                  onClick={() => {
                    updateConfig('role', r);
                    // This is the last step
                    setTimeout(() => onComplete({...config, role: r}), 300);
                  }}
               >
                 {r}
               </SelectButton>
             ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <nav className="w-full py-6 px-12 flex items-center justify-between border-b border-brand-border">
         <button onClick={onCancel} className="flex items-center gap-2 text-white text-xl font-bold tracking-tight">
        <div className="flex items-center gap-2 text-white text-xl font-bold tracking-tight">
          <img
            src="/image.png"
            alt="ZyncOne Logo"
            className="h-18 w-auto object-contain"
          />
        </div>
        <span>ZyncOne</span>
        </button>
        <div className="flex items-center gap-8">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Features</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Solutions</a>
            <span className="text-white text-sm font-medium">Login</span>
            <Button variant="outline" className="px-5 py-2 text-sm h-auto">Sign Up</Button>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-[#0e0e0e] border border-brand-border rounded-2xl p-8 md:p-12 shadow-2xl">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};