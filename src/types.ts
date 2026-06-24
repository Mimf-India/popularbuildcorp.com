export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features?: string[];
  details?: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'industrial' | 'turnkey' | 'renovation';
  location: string;
  area: string;
  completionYear: string;
  image: string;
  description: string;
}

export interface TurnkeyStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

