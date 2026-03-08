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
  slug: string;
  title: string;
  category: string;
  description: string;
  overview?: string;
  whatWeDid?: string[];
  results: PortfolioProjectResult[];
  technologies: string[];
  gradient: string;
  image: string;
  websiteUrl?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "virasvault",
    title: "VirasVault",
    category: "E-commerce (Shopify)",
    description:
      "A premium Shopify fashion storefront brought to life with custom Liquid development, high-end visuals, and conversion-focused UX.",
    overview:
      "VirasVault is a fashion brand with a strong visual identity. Our goal was to translate their imagination into a polished e-commerce experience — combining clean UI/UX, custom-coded Shopify sections, and on-page SEO across collection, product, and core pages.",
    whatWeDid: [
      "Shopify theme customization with custom Liquid sections and tailored interactions",
      "High-end UI/UX to showcase products with a premium, fashion-forward feel",
      "On-page SEO across key pages (home, collections, product pages) with clean structure and metadata",
      "Custom Shopify email notifications to improve conversions and recover abandoned carts",
      "QA across devices and polish pass for spacing, typography, and visuals",
    ],
    results: [
      { label: "Storefront", value: "Premium", icon: Users },
      { label: "SEO", value: "On-page", icon: TrendingUp },
      { label: "Conversion", value: "Improved", icon: DollarSign },
    ],
    technologies: ["Shopify", "Liquid", "Custom Theme Code", "On-page SEO"],
    gradient: "from-blue-500 to-purple-600",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    websiteUrl: "https://virasvault.com",
  },
  {
    slug: "naya-gadgets",
    title: "Naya Gadgets",
    category: "E-commerce (Shopify)",
    description:
      "A Shopify store built for a Chennai retail brand to go pan‑India — with strong on-page SEO, clean UX, and a credible online identity.",
    overview:
      "Naya Gadgets is a gadget store in Chennai (Express Avenue). They wanted to expand pan‑India, so we built a Shopify website that strengthens their identity online — balancing trust, usability, and search visibility through solid on‑page SEO and a streamlined shopping experience.",
    whatWeDid: [
      "Shopify store setup and custom theme implementation",
      "UI/UX focused on clarity, trust, and easy product browsing",
      "On-page SEO across core pages, collections, and product pages",
      "Performance and mobile responsiveness checks",
      "Launch support and final QA pass",
    ],
    results: [
      { label: "Identity", value: "Credible", icon: Users },
      { label: "SEO", value: "Strong", icon: TrendingUp },
      { label: "Scale", value: "Pan‑India", icon: DollarSign },
    ],
    technologies: ["Shopify", "Liquid", "On-page SEO", "Custom Theme Code"],
    gradient: "from-teal-500 to-green-600",
    image: "linear-gradient(135deg, #13547a 0%, #80d0c7 100%)",
    websiteUrl: "https://nayagadget.com",
  },
  {
    slug: "framex",
    title: "Framex",
    category: "Digital Marketing + Content Production",
    description:
      "Digital marketing for an aluminium profile manufacturer — supported by a professional product shoot and a clean, sales-ready catalogue.",
    overview:
      "Framex manufactures aluminium profiles. We handle their digital marketing and strengthened their brand presentation with professional product photography and a structured catalogue that sales teams can use confidently for B2B outreach.",
    whatWeDid: [
      "Digital marketing strategy and ongoing execution",
      "Professional product shoot with consistent visual direction",
      "Catalogue design with clear product presentation and structure",
      "Content planning aligned to B2B decision-makers",
      "Iteration based on reach/engagement signals",
    ],
    results: [
      { label: "Content", value: "Professional", icon: Users },
      { label: "Marketing", value: "Active", icon: TrendingUp },
      { label: "Collateral", value: "Catalogue", icon: DollarSign },
    ],
    technologies: [
      "Instagram",
      "Digital Marketing",
      "Product Photography",
      "Catalogue Design",
      "B2B Content",
    ],
    gradient: "from-cyan-500 to-blue-600",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    websiteUrl: "https://www.instagram.com/framex_india?igsh=eGU4b3A1ZzAwYng=",
  },
  {
    slug: "soul-garden-bistro",
    title: "Soul Garden Bistro",
    category: "Social Media + Digital Marketing",
    description:
      "Instagram management and digital marketing for a pure-veg cafe in Chennai — with a focus on reach, footfall, and consistent brand storytelling.",
    overview:
      "Soul Garden is a Chennai-based cafe that is pure vegetarian and also serves vegan food. We manage their Instagram presence and digital marketing to grow local awareness, keep the brand consistent, and convert attention into visits and inquiries.",
    whatWeDid: [
      "Instagram content planning and calendar execution",
      "Creative direction to match the cafe’s vibe and audience",
      "Reach-focused organic growth strategy (reels, posts, stories)",
      "Conversion-oriented content (menus, offers, location cues, CTAs)",
      "Ongoing iteration based on performance and engagement",
    ],
    results: [
      { label: "Presence", value: "Consistent", icon: Users },
      { label: "Reach", value: "Organic", icon: TrendingUp },
      { label: "Footfall", value: "Improved", icon: DollarSign },
    ],
    technologies: [
      "Instagram",
      "Local Marketing",
      "Content Strategy",
      "Organic Growth",
      "Digital Marketing",
    ],
    gradient: "from-green-500 to-emerald-600",
    image: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    websiteUrl:
      "https://www.instagram.com/soulgarden_ekolyfe?igsh=YXNydDJmMmtsOHg2",
  },
  {
    slug: "shvalk",
    title: "Shvalk",
    category: "Social Media Management (Instagram)",
    description:
      "Organic Instagram growth for a designer label — designer grid curation, reach-focused content, and conversion-oriented social strategy.",
    overview:
      "Shvalk is a designer label creating customizable clothing across Indian-western and modern styles. We handle their social media management with a focus on maintaining a premium, designer grid, improving reach through organic marketing, and turning attention into inquiries and conversions.",
    whatWeDid: [
      "Instagram content planning with a consistent brand voice and aesthetic",
      "Designer grid curation for a premium, cohesive feed",
      "Organic reach growth through content strategy and publishing consistency",
      "Conversion-focused content direction (CTAs, product highlights, social proof)",
      "Ongoing iteration based on performance and engagement signals",
    ],
    results: [
      { label: "Feed", value: "Designer", icon: Users },
      { label: "Reach", value: "Organic", icon: TrendingUp },
      { label: "Conversions", value: "Driven", icon: DollarSign },
    ],
    technologies: [
      "Instagram",
      "Organic Marketing",
      "Content Strategy",
      "Designer Grid",
      "Social Media Management",
    ],
    gradient: "from-orange-500 to-red-600",
    image: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)",
    websiteUrl: "https://www.instagram.com/shvalkofficial?igsh=eHRlcHE0Z2xldjZr",
  },
  {
    slug: "the-wrong-girls",
    title: "The Wrong Girls",
    category: "E-commerce (Shopify)",
    description:
      "A premium, minimal, and aesthetic Shopify storefront for a fashion-led designer clothing brand — built for high-end perception and smooth shopping.",
    overview:
      "The Wrong Girls is a fashion-led clothing brand selling designer-inspired pieces. We built a Shopify store with a restrained, premium vibe — clean layout, thoughtful spacing, and a frictionless browsing experience — supported by on-page SEO and optimized email notifications to improve conversions.",
    whatWeDid: [
      "Shopify theme build/customization with premium-minimal design direction",
      "UI/UX polish for a smooth, aesthetic shopping experience",
      "On-page SEO across core pages, collections, and product pages",
      "Shopify email notification setup and customization",
      "QA across devices for consistency and visual refinement",
    ],
    results: [
      { label: "Brand vibe", value: "Premium", icon: Users },
      { label: "UX", value: "Minimal", icon: TrendingUp },
      { label: "SEO", value: "On-page", icon: DollarSign },
    ],
    technologies: [
      "Shopify",
      "Liquid",
      "Custom Theme Code",
      "On-page SEO",
      "Email Notifications",
    ],
    gradient: "from-purple-500 to-pink-600",
    image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    websiteUrl: "https://thewronggirls.in",
  },
  {
    slug: "xpose-nutrition",
    title: "Xpose Nutrition",
    category: "E-commerce (Shopify)",
    description:
      "A custom Shopify store for a supplements dealer — built with an out-of-the-box layout, seamless browsing, and conversion-focused UI/UX.",
    overview:
      "Xpose Nutrition is a nutrition supplements dealer selling products from multiple brands. We designed and developed a custom Shopify storefront that breaks common e-commerce stereotypes — a fresh concept with carefully structured categories and a smooth product discovery experience, backed by strong on-page SEO across key pages and product listings.",
    whatWeDid: [
      "Custom Shopify theme build with tailored Liquid sections and custom coding",
      "Unique UI/UX concept with clean hierarchy and seamless navigation",
      "Category and collection structuring for fast product discovery",
      "On-page SEO across core pages, collections, and product pages",
      "QA and polish across devices for consistent spacing and interactions",
    ],
    results: [
      { label: "Experience", value: "Seamless", icon: Users },
      { label: "Design", value: "Out-of-box", icon: TrendingUp },
      { label: "SEO", value: "On-page", icon: DollarSign },
    ],
    technologies: ["Shopify", "Liquid", "Custom Theme Code", "UI/UX", "On-page SEO"],
    gradient: "from-orange-500 to-red-600",
    image: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)",
    websiteUrl: "https://xposenutri.com",
  },
  {
    slug: "layered-luxe",
    title: "Layered Luxe",
    category: "B2B Website (Lead Generation)",
    description:
      "A clean, professional B2B website for a custom clothing brand — designed to build trust, stay minimal, and convert high-intent corporate inquiries.",
    overview:
      "Layered Luxe is a B2B clothing brand delivering customised apparel for corporates, events, and businesses. We built a fast Next.js website that stays professional (without going overboard), with strong on-page SEO and a streamlined lead capture flow that routes every inquiry into Google Sheets and triggers instant email notifications.",
    whatWeDid: [
      "UX + page structure focused on clarity for B2B buyers",
      "Modern, restrained UI that reinforces credibility",
      "High-performance Next.js build with strong on-page SEO",
      "Lead capture integrated with Google Sheets for simple team workflows",
      "Automated email notifications to the user + internal team on new leads",
      "QA and performance polish for a smooth experience",
    ],
    results: [
      { label: "Brand feel", value: "Professional", icon: Users },
      { label: "Leads", value: "Tracked", icon: TrendingUp },
      { label: "Performance", value: "Fast", icon: DollarSign },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "On-page SEO",
      "Google Sheets",
      "Email Automation",
    ],
    gradient: "from-teal-500 to-green-600",
    image: "linear-gradient(135deg, #13547a 0%, #80d0c7 100%)",
    websiteUrl: "https://thelayeredluxe.com/",
  },
  {
    slug: "aure-maison",
    title: "Aure Maison",
    category: "Brand Website (Lead Generation)",
    description:
      "A professional Next.js website for a premium planters brand — built to look high-end and capture inquiries through a simple Google Sheets workflow.",
    overview:
      "Aure Maison creates premium planters for indoor and outdoor spaces. We built a clean, professional website in Next.js that presents the brand with a premium feel and captures leads directly into Google Sheets — making it easy for the team to track and follow up on inquiries.",
    whatWeDid: [
      "Next.js website build with a professional, premium brand presentation",
      "Clear page structure and CTAs for inquiry-driven conversion",
      "Lead capture integration that writes submissions into Google Sheets",
      "Mobile responsiveness and performance-focused polish",
    ],
    results: [
      { label: "Brand feel", value: "Premium", icon: Users },
      { label: "Leads", value: "Captured", icon: TrendingUp },
      { label: "Workflow", value: "Sheets", icon: DollarSign },
    ],
    technologies: ["Next.js", "Google Sheets", "Lead Capture"],
    gradient: "from-blue-500 to-purple-600",
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    websiteUrl: "https://www.auremaison.in/",
  },
];
