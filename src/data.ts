// @ts-ignore
import interiorDesign from './assets/images/interior_design_1782291625981.jpg';
// @ts-ignore
import constructionSite from './assets/images/construction_site_1782291606547.jpg';
// @ts-ignore
import heroVilla from './assets/images/hero_residential_villa_1782291559403.jpg';

export const COMPANY_INFO = {
  name: "Popular Build Corp",
  tagline: "Building Trust, Delivering Excellence",
  logoSubText: "CONSTRUCTION | DEVELOPMENT | BUILDERS",
  welcomeTitle: "Welcome To POPULAR BUILD CORP",
  welcomeSubtitle: "Building Trust, Delivering Excellence",
  welcomePromo: "From foundation to finishing, we deliver quality construction solutions with commitment, professionalism, and timely execution.",
  bottomSlogan: "WE BUILD MORE THAN STRUCTURES, WE BUILD RELATIONSHIPS.",
  visionCommitment: "YOUR VISION. OUR COMMITMENT.",
  
  contacts: {
    phone1: "+91 9130 737 878",
    phone2: "+91 7972 144 809",
    email: "popularbuildcorp@gmail.com",
    address: "Popular Build Corp. Aurangabad, Maharashtra - 431001",
    location: "Aurangabad, Maharashtra",
    website: "www.popularbuildcorp.com"
  }
};

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Residential Construction",
    description: "Dream homes built with quality, comfort & care.",
    iconName: "Home"
  },
  {
    title: "Commercial Construction",
    description: "Modern commercial spaces that inspire growth and success.",
    iconName: "Building2"
  },
  {
    title: "Industrial Construction",
    description: "Strong, safe & efficient industrial infrastructure solutions.",
    iconName: "Factory"
  },
  {
    title: "Turnkey Projects",
    description: "End-to-end construction solutions from concept to completion.",
    iconName: "KeyRound"
  },
  {
    title: "Renovation & Remodeling",
    description: "Transforming spaces with quality renovation and modern design.",
    iconName: "Wrench"
  },
  {
    title: "Real Estate Development",
    description: "Developing spaces that create value for generations.",
    iconName: "Map"
  },
  {
    title: "Interior & Exterior Works",
    description: "Stylish interiors and durable exteriors that stand the test of time.",
    iconName: "Paintbrush"
  },
  {
    title: "Electrical & Plumbing Works",
    description: "Safe, efficient & reliable MEP solutions for every project.",
    iconName: "Zap"
  }
];

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Experienced Team",
    description: "Skilled professionals with years of industry experience ensure superior project execution.",
    iconName: "Users"
  },
  {
    title: "Quality Assurance",
    description: "We use premium quality materials and follow strict quality control at every stage.",
    iconName: "Sparkles"
  },
  {
    title: "Timely Project Delivery",
    description: "We value your time and ensure projects are completed on schedule without compromising quality.",
    iconName: "Clock"
  },
  {
    title: "End-to-End Solutions",
    description: "From concept to completion, we provide complete turnkey construction solutions.",
    iconName: "Briefcase"
  },
  {
    title: "Client Focused Approach",
    description: "We understand your needs and work closely with you to bring your vision to life.",
    iconName: "HeartHandshake"
  },
  {
    title: "Transparent Pricing",
    description: "Honest quotes, clear communication and no hidden costs - that's our commitment.",
    iconName: "Coins"
  }
];

export const WHY_CHOOSE_BADGES = [
  "Safe Work Environment",
  "Modern Technology",
  "Sustainable Practices",
  "Complete Peace of Mind"
];

export interface TurnkeyStep {
  step: number;
  title: string;
  description: string;
}

export const TURNKEY_STEPS: TurnkeyStep[] = [
  {
    step: 1,
    title: "Requirement Discussion",
    description: "Understanding your vision, programmatic spaces, timeline guidelines, and custom stylistic preferences."
  },
  {
    step: 2,
    title: "Planning & Design",
    description: "Drafting structural floor layout grids, modern elevations, and immersive architectural plans."
  },
  {
    step: 3,
    title: "Estimation & Agreement",
    description: "Providing itemized and honest cost structures backed by a transparent legal construction contract."
  },
  {
    step: 4,
    title: "Construction Execution",
    description: "Deploying high-quality raw materials, masonry, and rigid structural casting under close engineering vision."
  },
  {
    step: 5,
    title: "Quality Control",
    description: "Executing strict structural checks, material testing, and leveling audits at every individual slab milestone."
  },
  {
    step: 6,
    title: "Handover & Support",
    description: "Delivering a pristine, ready-to-use finished space to you with complete satisfaction and post-handover support."
  }
];

export const TURNKEY_PROVIDES = [
  "Design Coordination",
  "Material Procurement",
  "Construction Execution",
  "Electrical & Plumbing",
  "Interior & Exterior Finishing",
  "Quality Assurance",
  "Timely Project Delivery",
  "Handover with Satisfaction"
];

export const TURNKEY_BADGES = [
  "On Time Delivery",
  "Quality Assurance",
  "Cost Efficiency",
  "Transparent Process",
  "Handover with Satisfaction"
];

export const RESIDENTIAL_WE_BUILD = [
  {
    title: "Custom Design",
    description: "Tailored designs that match your lifestyle"
  },
  {
    title: "Quality Materials",
    description: "We use premium quality materials for long-lasting strength"
  },
  {
    title: "Strong Structure",
    description: "Engineered for safety, durability and all-weather performance"
  },
  {
    title: "On Time Delivery",
    description: "We value your time and ensure timely project completion"
  },
  {
    title: "Transparent Pricing",
    description: "Clear estimates with no hidden costs"
  }
];

export const RESIDENTIAL_SERVICES = [
  "Independent Houses",
  "Bungalows",
  "Duplex Houses",
  "Row Houses",
  "Villas",
  "Home Renovation & Remodeling"
];

export const RESIDENTIAL_STAGES = [
  {
    title: "Planning & Design",
    image: interiorDesign
  },
  {
    title: "Construction",
    image: constructionSite
  },
  {
    title: "Interiors",
    image: interiorDesign
  },
  {
    title: "Finished Home",
    image: heroVilla
  }
];

export const RESIDENTIAL_BADGES = [
  {
    title: "Experienced Team",
    desc: "Skilled professionals dedicated to excellence"
  },
  {
    title: "Quality Assurance",
    desc: "Strict quality control at every stage"
  },
  {
    title: "Complete Turnkey Solution",
    desc: "From concept to completion"
  },
  {
    title: "Sustainable Practices",
    desc: "Eco-friendly construction for a better tomorrow"
  }
];
