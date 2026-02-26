import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}