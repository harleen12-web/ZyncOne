import React, { useState } from 'react';
import { ViewState, UserConfig, INITIAL_USER_CONFIG } from './types';
import { Home } from './views/Home';
import { Wizard } from './views/Wizard';
import { DashboardLayout } from './views/DashboardLayout';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [config, setConfig] = useState<UserConfig>(INITIAL_USER_CONFIG);

  const startConfig = () => setView('wizard');
  
  const completeWizard = (finalConfig: UserConfig) => {
    setConfig(finalConfig);
    setView('dashboard');
  };

  const cancelWizard = () => setView('home');
  
  const logout = () => {
    setConfig(INITIAL_USER_CONFIG);
    setView('home');
  };

  return (
    <>
      {view === 'home' && <Home onStartConfig={startConfig} />}
      {view === 'wizard' && <Wizard onComplete={completeWizard} onCancel={cancelWizard} />}
      {view === 'dashboard' && <DashboardLayout config={config} onLogout={logout} />}
    </>
  );
};

export default App;