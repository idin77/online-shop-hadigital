export interface WebPackage {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  badge?: string;
  description: string;
  features: string[];
}

export interface VideoPackage {
  id: string;
  duration: number; // in seconds
  price: string;
  priceValue: number;
  badge?: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PortfolioItem {
  id: string;
  type: 'website' | 'video';
  title: string;
  category: string;
  image: string;
  description: string;
}
