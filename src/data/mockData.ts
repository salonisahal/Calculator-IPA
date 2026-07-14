import { CollaborationCard, CompanyValue, FeatureItem, PricingPlan, ResourceItem, TestimonialItem } from '../types';

export const collaborationCards: CollaborationCard[] = [
  { id: 'collab-1', title: 'Unified Analytics', subtitle: 'Dashboards that align teams fast.' },
  { id: 'collab-2', title: 'AI Insights', subtitle: 'Real-time guidance for smarter moves.' },
  { id: 'collab-3', title: 'Secure Workflows', subtitle: 'Compliance-ready automation for scale.' },
  { id: 'collab-4', title: 'Customer Journeys', subtitle: 'Visualize engagement in one place.' },
];

export const features: FeatureItem[] = [
  {
    id: 'feature-analytics',
    title: 'Analytics',
    description: 'Reporting and engagement metrics tailored for decisive action.',
    icon: 'insights',
  },
  {
    id: 'feature-community',
    title: 'Community',
    description: 'Build stronger customer relationships with unified profiles.',
    icon: 'groups',
  },
  {
    id: 'feature-automation',
    title: 'Automation',
    description: 'Streamline workflows with trigger-based orchestration.',
    icon: 'autorenew',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    name: 'Alicia Gray',
    company: 'Northwind Capital',
    rating: 5,
    review: 'Circle gave us premium analytics and instant executive reporting. Our engagement metrics jumped 32% in six weeks.',
  },
  {
    id: 'testimonial-2',
    name: 'Marcus Lee',
    company: 'Helios Payments',
    rating: 5,
    review: 'The automation engine saved days of manual work each month. The UI is clean and lightning fast.',
  },
  {
    id: 'testimonial-3',
    name: 'Priya Shah',
    company: 'Vertex Labs',
    rating: 4,
    review: 'Onboarding was effortless and the support team is unmatched. We finally have a single source of truth.',
  },
  {
    id: 'testimonial-4',
    name: 'Jonas Wright',
    company: 'Orbit AI',
    rating: 5,
    review: 'From dashboards to reports, everything feels premium. Our leadership team trusts the data now.',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    priceLabel: 'Free',
    highlight: false,
    features: ['Core analytics dashboard', 'Email reports', 'Community workspace'],
    cta: 'Start Free',
  },
  {
    id: 'professional',
    name: 'Professional',
    priceLabel: '$29/month',
    highlight: true,
    features: ['Advanced analytics suite', 'Automation workflows', 'Priority support'],
    cta: 'Upgrade Now',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceLabel: 'Custom',
    highlight: false,
    features: ['Dedicated success team', 'Custom integrations', 'Security governance'],
    cta: 'Talk to Sales',
  },
];

export const resources: ResourceItem[] = [
  {
    id: 'resource-1',
    title: 'State of Engagement 2024',
    description: 'Benchmark your retention and engagement across industries.',
    tag: 'Report',
  },
  {
    id: 'resource-2',
    title: 'Automation Playbook',
    description: 'Blueprints for scaling customer success operations.',
    tag: 'Guide',
  },
  {
    id: 'resource-3',
    title: 'Circle Academy',
    description: 'Training for admins, analysts, and revenue leaders.',
    tag: 'Training',
  },
];

export const companyValues: CompanyValue[] = [
  {
    id: 'value-1',
    title: 'Trust by Design',
    description: 'Security-first architecture with enterprise-grade compliance.',
  },
  {
    id: 'value-2',
    title: 'Outcome Focused',
    description: 'Metrics that prove growth, retention, and customer impact.',
  },
  {
    id: 'value-3',
    title: 'Always On Support',
    description: 'Dedicated success engineers and rapid response SLAs.',
  },
];
