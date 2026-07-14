export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type TestimonialItem = {
  id: string;
  name: string;
  company: string;
  rating: number;
  review: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  priceLabel: string;
  highlight: boolean;
  features: string[];
  cta: string;
};

export type CollaborationCard = {
  id: string;
  title: string;
  subtitle: string;
};

export type ResourceItem = {
  id: string;
  title: string;
  description: string;
  tag: string;
};

export type CompanyValue = {
  id: string;
  title: string;
  description: string;
};
