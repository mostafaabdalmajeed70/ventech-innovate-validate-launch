import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Stage {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Award {
  title: string;
  description: string;
  value: string;
}

export interface RegistrationFormData {
  teamName: string;
  projectTitle: string;
  leaderName: string;
  email: string;
  phone: string;
  category: string;
  abstract: string;
}