import { Droplets, Home, Sparkles, Sofa, Warehouse, Monitor, Building2, Bug, Armchair } from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: 'bathroom',
    title: 'Bathroom Cleaning',
    icon: Droplets,
    shortDesc: 'Complete sanitization, acid wash, and stain removal.',
    features: [
      'Stain Removing',
      'Salt Removing',
      'Foam Wash',
      'Disinfecting cleaning',
      'Gloss finish Shines'
    ],
    offerings: [
      'Ventilator glass cleaning',
      'Tap & Toilet Cleaning',
      'Washbasin Cleaning',
      'Wall tiles Cleaning',
      'Floor tiles cleaning',
      'Door cleaning'
    ]
  },
  {
    id: 'tank',
    title: 'Water Tank & Sump',
    icon: Home,
    shortDesc: 'Mechanized dewatering and sludge removal.',
    features: [
      'Dewatering',
      'Sludge removing',
      'High pressure wash',
      'Disinfecting & fungus cleaning',
      'Vacuum dry'
    ],
    offerings: [
      'Sintex Tank',
      'Concrete Tank',
      'Sump',
      'Overhead Tank'
    ]
  },
  {
    id: 'floor',
    title: 'Floor Cleaning',
    icon: Sparkles,
    shortDesc: 'Machine scrubbing for tiles, marble, and granite.',
    features: [
      'Dust Removing',
      'Spray & Foam Wash',
      'Glass Cleaning',
      'Stain Removing',
      'Salt Removing',
      'Gloss finish Shines'
    ]
  },
  {
    id: 'sofa',
    title: 'Sofa & Mattress',
    icon: Sofa,
    shortDesc: 'Shampoo wash and dry heat treatment.',
    features: [
      'Dust Removing',
      'Lint Removing',
      'Deep Shampoo wash',
      'Vacuum dry',
      'Dry heat wash'
    ]
  },
  {
    id: 'kitchen',
    title: 'Kitchen Deep Clean',
    icon: Warehouse,
    shortDesc: 'Oil and grease removal for a hygienic kitchen.',
    features: [
      'Oil Removing',
      'Foam Cleaning',
      'Gloss finish Shines',
      'Chimney Cleaning'
    ],
    offerings: [
      'Wall tiles Cleaning',
      'Tap Cleaning',
      'Kitchen Top (Slab)',
      'Sink Wash',
      'Cupboard Cleaning'
    ]
  },
  {
    id: 'appliances',
    title: 'Home Appliances',
    icon: Monitor,
    shortDesc: 'Specialized cleaning for electronics.',
    features: [
      'Deep degreasing',
      'Filter cleaning',
      'Exterior polishing',
      'Rust removal'
    ]
  },
  {
    id: 'furniture',
    title: 'Furniture Cleaning',
    icon: Armchair,
    shortDesc: 'Polishing and cleaning for wooden furniture.',
    features: [
      'Dust Removing',
      'Lint Removing',
      'Shampoo wash',
      'Vacuum dry'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    icon: Building2,
    shortDesc: 'For offices, schools, hospitals, and hotels.',
    features: [
      'Oil & Dust Removing',
      'Stain Removing',
      'Foam wash',
      'Gloss finish Shines'
    ],
    offerings: [
      'Commercial Kitchens',
      'Hospitals',
      'Schools & Colleges',
      'Theatres & Malls',
      'Gyms & Spas'
    ]
  },
  {
    id: 'pest',
    title: 'Pest Control',
    icon: Bug,
    shortDesc: 'Professional treatment for all household pests.',
    features: [
      'Termite treatment',
      'Cockroach treatment',
      'Bed bugs treatment',
      'Mosquito control'
    ]
  }
];