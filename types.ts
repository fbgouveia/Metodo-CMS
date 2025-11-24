import { ReactNode } from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon?: ReactNode; // Tornado opcional
  color?: string; // Adicionado para controlar o gradiente de fundo
}

export interface StepItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  href?: string;
}