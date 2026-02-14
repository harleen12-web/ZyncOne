export type ViewState = 'home' | 'wizard' | 'dashboard';

export enum Industry {
  Retail = 'Retail',
  Healthcare = 'Healthcare',
  SaaS = 'SaaS / IT',
}

export enum Role {
  CEO = 'CEO / Founder',
  IT = 'IT / Security Lead',
  CFO = 'CFO',
  Employee = 'Employee / Team Lead',
  OpsManager = 'Operations Manager',
}

export interface UserConfig {
  name: string;
  age: string;
  country: string;
  company: string;
  industry: Industry | null;
  role: Role | null;
  challenge: string;
}

export const INITIAL_USER_CONFIG: UserConfig = {
  name: '',
  age: '',
  country: '',
  company: '',
  industry: null,
  role: null,
  challenge: '',
};