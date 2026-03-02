import {
  DollarSign,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

export type PortfolioProjectResult = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  results: PortfolioProjectResult[];
  technologies: string[];
  gradient: string;
  image: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "TechFlow SaaS Platform",
    category: "Web Development & Design",
    description:
      "Complete redesign and development of a B2B SaaS platform serving 10,000+ users",
    results: [
      { label: "User Growth", value: "+180%", icon: Users },
      { label: "Revenue Increase", value: "+250%", icon: DollarSign },
      { label: "Engagement", value: "+95%", icon: TrendingUp },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-blue-500 to-purple-600",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "GreenLeaf E-commerce",
    category: "E-commerce & Marketing",
    description:
      "Full e-commerce solution with integrated marketing automation and analytics",
    results: [
      { label: "Sales Growth", value: "+320%", icon: DollarSign },
      { label: "Conversion Rate", value: "+85%", icon: TrendingUp },
      { label: "Customer Base", value: "+150%", icon: Users },
    ],
    technologies: ["Shopify", "React", "Node.js", "Stripe"],
    gradient: "from-green-500 to-emerald-600",
    image: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  },
  {
    title: "Urban Fitness Brand",
    category: "Branding & Digital Marketing",
    description:
      "Complete brand identity and digital marketing campaign for fitness startup",
    results: [
      { label: "Brand Awareness", value: "+400%", icon: TrendingUp },
      { label: "Lead Generation", value: "+280%", icon: Users },
      { label: "ROI", value: "+190%", icon: DollarSign },
    ],
    technologies: [
      "Adobe Creative",
      "Facebook Ads",
      "Google Analytics",
      "HubSpot",
    ],
    gradient: "from-orange-500 to-red-600",
    image: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)",
  },
  {
    title: "MedTech Dashboard",
    category: "Custom Development",
    description:
      "Advanced analytics dashboard for healthcare data visualization and reporting",
    results: [
      { label: "Efficiency Gain", value: "+300%", icon: TrendingUp },
      { label: "Data Accuracy", value: "+99%", icon: Users },
      { label: "Cost Savings", value: "+40%", icon: DollarSign },
    ],
    technologies: ["Vue.js", "Python", "D3.js", "AWS"],
    gradient: "from-cyan-500 to-blue-600",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "LocalBites Marketplace",
    category: "Mobile App & Platform",
    description:
      "Multi-vendor marketplace connecting local restaurants with customers",
    results: [
      { label: "Active Users", value: "+500%", icon: Users },
      { label: "Order Volume", value: "+380%", icon: TrendingUp },
      { label: "Revenue", value: "+420%", icon: DollarSign },
    ],
    technologies: ["React Native", "Firebase", "Stripe", "Google Maps"],
    gradient: "from-purple-500 to-pink-600",
    image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
  {
    title: "FinanceFlow Platform",
    category: "Fintech Solution",
    description:
      "Comprehensive financial management platform for small businesses",
    results: [
      { label: "User Retention", value: "+95%", icon: Users },
      { label: "Processing Speed", value: "+250%", icon: TrendingUp },
      { label: "Client Savings", value: "+60%", icon: DollarSign },
    ],
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker"],
    gradient: "from-teal-500 to-green-600",
    image: "linear-gradient(135deg, #13547a 0%, #80d0c7 100%)",
  },
];
