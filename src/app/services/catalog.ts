export type Service = {
  slug: string;
  title: string;
  description: string;
  features: string[];
  headline: string;
  outcomes: string[];
  alignment: string[];
  deliverables: string[];
  howItWorks: string[];
  subServices: Array<{
    name: string;
    description: string;
    keywords: string[];
  }>;
};

export const services: Service[] = [
  {
    slug: "website",
    title: "Web Design & Development",
    description:
      "Custom websites and web applications built with modern technologies, optimized for performance and user experience.",
    features: ["Responsive Design", "SEO Optimization", "Performance Focused"],
    headline: "Turn your website into a 24/7 sales engine.",
    outcomes: [
      "More qualified leads from organic search and referrals",
      "Higher conversion rates with clear messaging + faster pages",
      "Better trust with modern design, proof, and clear calls-to-action",
      "Less drop-off on mobile with responsive, accessible layouts",
    ],
    alignment: [
      "We start from your business goals (leads, bookings, purchases), not templates",
      "We align the site structure to your customer journey (awareness → decision)",
      "We align copy and design to your positioning so you look premium and credible",
      "We align tracking to outcomes so you know what is working",
    ],
    deliverables: [
      "Strategy + sitemap and page plan",
      "High-converting pages (Home, Services, About, Contact)",
      "Speed, SEO, and analytics setup",
      "Launch + handover with support",
    ],
    howItWorks: [
      "Discovery: goals, audience, competitors, offers",
      "UX & messaging: structure, wireframes, copy direction",
      "Design & build: modern UI, responsive development",
      "Launch & optimize: SEO, tracking, performance tuning",
    ],
    subServices: [
      {
        name: "Business Website Design",
        description:
          "A modern, credibility-first website that communicates your offer clearly, builds trust fast, and turns visitors into leads.",
        keywords: ["business website", "responsive design", "lead generation"],
      },
      {
        name: "High-Converting Landing Pages",
        description:
          "Conversion-focused landing pages for ads, promotions, and campaigns with clear messaging, proof, and strong calls-to-action.",
        keywords: ["landing page", "conversion rate optimization", "CRO"],
      },
      {
        name: "E-commerce Websites",
        description:
          "Online stores that make browsing, checkout, and mobile purchasing frictionless — designed to increase average order value and repeat customers.",
        keywords: ["e-commerce", "online store", "checkout optimization"],
      },
      {
        name: "Website Redesign",
        description:
          "A strategic redesign that improves brand perception, clarifies your positioning, and upgrades UX, performance, and SEO.",
        keywords: ["website redesign", "UX", "performance"],
      },
      {
        name: "Website Maintenance & Support",
        description:
          "Ongoing updates, monitoring, and improvements to keep your site fast, secure, and always aligned with your business goals.",
        keywords: ["website maintenance", "support", "security"],
      },
      {
        name: "Performance & Core Web Vitals",
        description:
          "Speed improvements that reduce bounce rates and increase conversions through better Core Web Vitals and fast loading experiences.",
        keywords: ["Core Web Vitals", "site speed", "performance optimization"],
      },
    ],
  },
  {
    slug: "marketing",
    title: "Social Media & Content Marketing",
    description:
      "Consistent, high-quality content that builds your audience, establishes authority, and engages your target market.",
    features: [
      "Social Media Management",
      "Content Strategy",
      "Brand Voice & Storytelling",
    ],
    headline: "Build an audience that actually cares about what you sell.",
    outcomes: [
      "Higher brand awareness and engagement",
      "Consistent posting without taking up your time",
      "Clear brand voice that resonates with your ideal customer",
      "Organic growth that compounds over time",
    ],
    alignment: [
      "We align your content to what your audience wants to see",
      "We align your posting schedule to platform best practices",
      "We align visuals and copy to your overarching brand identity",
      "We align organic reach with your sales funnel",
    ],
    deliverables: [
      "Content strategy and calendar",
      "High-quality graphics, reels, and copy",
      "Community management and engagement",
      "Monthly performance reporting",
    ],
    howItWorks: [
      "Audit: current presence and competitor analysis",
      "Plan: strategy and 30-day calendar",
      "Create: batch production of assets",
      "Publish: scheduling and community interaction",
    ],
    subServices: [
      {
        name: "Social Media Management",
        description:
          "Consistent content creation and posting that builds trust, grows your audience, and drives inquiries through a clear brand voice.",
        keywords: ["social media management", "content calendar", "engagement"],
      },
      {
        name: "Content Strategy",
        description:
          "A strategic plan that answers customer questions, builds authority, and supports your funnel across all social platforms.",
        keywords: ["content marketing", "content strategy", "lead nurturing"],
      },
      {
        name: "Video & Reel Production",
        description:
          "Engaging short-form video content designed for TikTok, Instagram Reels, and YouTube Shorts to maximize organic reach.",
        keywords: ["reels", "tiktok", "video production"],
      },
      {
        name: "Email Marketing & Lead Nurturing",
        description:
          "Automated sequences and newsletters that follow up, educate, and convert leads into booked calls and purchases.",
        keywords: ["email marketing", "automation", "lead nurturing"],
      },
      {
        name: "Influencer Marketing",
        description:
          "Strategic partnerships with relevant creators to expand your reach, build authentic trust, and drive targeted traffic to your brand.",
        keywords: ["influencer marketing", "creator partnerships", "brand awareness"],
      },
    ],
  },
  {
    slug: "branding",
    title: "Branding & Creative",
    description:
      "Comprehensive brand identity design that captures your essence and resonates with your target audience.",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials"],
    headline: "Look credible, memorable, and premium — instantly.",
    outcomes: [
      "Higher trust and better first impressions",
      "Stronger differentiation versus competitors",
      "Consistent look and voice across all channels",
      "Faster content production with clear brand rules",
    ],
    alignment: [
      "We align visual identity to your positioning and audience expectations",
      "We align messaging to your values and what customers care about",
      "We align brand assets to where you sell (web, social, print)",
      "We align the system so every future design looks consistent",
    ],
    deliverables: [
      "Brand strategy and positioning notes",
      "Logo suite + color and typography system",
      "Brand guidelines (do/don't, usage, tone)",
      "Core marketing assets (social templates, pitch deck, etc.)",
    ],
    howItWorks: [
      "Discover: brand story, audience, competitors",
      "Design: concepts, iterations, direction lock",
      "Systemize: guidelines + templates",
      "Rollout: apply to website and key channels",
    ],
    subServices: [
      {
        name: "Brand Strategy & Positioning",
        description:
          "Clarify who you serve, what makes you different, and the message that makes customers choose you.",
        keywords: ["brand strategy", "positioning", "messaging"],
      },
      {
        name: "Logo & Visual Identity",
        description:
          "A professional logo system with colors and typography that looks premium and works across web, print, and social.",
        keywords: ["logo design", "visual identity", "brand design"],
      },
      {
        name: "Brand Guidelines",
        description:
          "A brand rulebook that keeps your team consistent — from visuals to tone of voice — so every touchpoint feels unified.",
        keywords: ["brand guidelines", "brand consistency", "tone of voice"],
      },
      {
        name: "Creative Assets & Templates",
        description:
          "Reusable marketing templates for social posts, stories, presentations, and ads to speed up production without sacrificing quality.",
        keywords: ["templates", "creative assets", "marketing design"],
      },
      {
        name: "Sales Decks & Company Profiles",
        description:
          "Compelling decks and profiles that communicate value clearly and help close deals faster.",
        keywords: ["pitch deck", "company profile", "sales collateral"],
      },
    ],
  },
  {
    slug: "performance",
    title: "Performance Marketing",
    description:
      "Data-driven paid advertising campaigns designed to generate predictable leads, sales, and ROI.",
    features: ["Google Ads", "Meta Ads", "Conversion Optimization"],
    headline: "Create predictable lead flow with a focused growth system.",
    outcomes: [
      "More inbound leads from the right channels",
      "Lower cost per lead by improving targeting + landing pages",
      "Clear reporting that ties marketing to revenue outcomes",
      "Scalable campaigns that grow with your budget",
    ],
    alignment: [
      "We align campaigns to your best offers and margins",
      "We align targeting to your ideal customer profile",
      "We align creatives and landing pages to the same promise",
      "We align reporting to real business KPIs (calls, bookings, purchases)",
    ],
    deliverables: [
      "Campaign plan (channels, budget, goals)",
      "Ad creative + landing page recommendations",
      "Tracking (pixels, events) and dashboards",
      "Optimization cycle (tests, learnings, iterations)",
    ],
    howItWorks: [
      "Audit: what works, what leaks, what to fix first",
      "Launch: campaigns + tracking + baseline reporting",
      "Optimize: weekly improvements and experiments",
      "Scale: double down on winners, expand channels",
    ],
    subServices: [
      {
        name: "Google Ads Management",
        description:
          "Search and Performance Max campaigns that capture high-intent leads and purchases with structured targeting, keywords, and landing page alignment.",
        keywords: ["Google Ads", "PPC", "search ads"],
      },
      {
        name: "Meta Ads (Facebook & Instagram)",
        description:
          "Full-funnel ad campaigns with creative testing, audience targeting, and retargeting to generate leads and sales predictably.",
        keywords: ["Meta ads", "Facebook ads", "Instagram ads"],
      },
      {
        name: "Conversion Funnel Optimization",
        description:
          "Improve results by aligning ads, landing pages, offers, and tracking — reducing drop-off and increasing conversion rates.",
        keywords: ["funnel", "conversion optimization", "landing pages"],
      },
      {
        name: "Analytics & ROI Tracking",
        description:
          "Advanced tracking setups to ensure every dollar spent is accounted for, tying campaigns directly to booked revenue.",
        keywords: ["tracking", "ROI", "analytics"],
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO & Analytics",
    description:
      "Comprehensive SEO strategies and analytics setup to improve your search rankings and track performance.",
    features: ["Keyword Research", "Technical SEO", "Conversion Tracking"],
    headline: "Get found by the customers already searching.",
    outcomes: [
      "More organic traffic from high-intent keywords",
      "Better rankings through technical fixes and content focus",
      "Clear visibility into what drives leads and revenue",
      "Continuous improvement based on data (not guesses)",
    ],
    alignment: [
      "We align keywords to your offers and customer intent",
      "We align content to decision-making questions",
      "We align tracking to your funnel (forms, calls, bookings)",
      "We align technical SEO to performance and indexability",
    ],
    deliverables: [
      "SEO audit + prioritized action plan",
      "Keyword map and content recommendations",
      "Tracking setup (events, goals) + reporting",
      "Ongoing optimization suggestions",
    ],
    howItWorks: [
      "Audit: technical + content + competitors",
      "Fix: speed, metadata, structure, schema",
      "Grow: content plan + on-page optimization",
      "Measure: dashboards and monthly insights",
    ],
    subServices: [
      {
        name: "Technical SEO",
        description:
          "Fix crawlability, indexation, site architecture, and performance so search engines can understand and rank your pages.",
        keywords: ["technical SEO", "indexing", "site architecture"],
      },
      {
        name: "On-Page SEO",
        description:
          "Optimize titles, headings, internal links, and content structure so each page targets the right intent and converts visitors.",
        keywords: ["on-page SEO", "keywords", "content optimization"],
      },
      {
        name: "Local SEO",
        description:
          "Improve local visibility with Google Business Profile optimization, location pages, and consistent local citations.",
        keywords: ["local SEO", "Google Business Profile", "maps"],
      },
      {
        name: "Keyword Research & Content Plan",
        description:
          "A keyword map and content plan that targets high-intent searches and builds authority over time.",
        keywords: ["keyword research", "content plan", "SEO strategy"],
      },
      {
        name: "Analytics & Conversion Tracking (GA4)",
        description:
          "Set up clean tracking for forms, calls, bookings, and purchases so you know what drives growth.",
        keywords: ["GA4", "conversion tracking", "analytics"],
      },
      {
        name: "Schema Markup",
        description:
          "Structured data that helps search engines understand your business and can improve visibility in rich results.",
        keywords: ["schema", "structured data", "rich results"],
      },
    ],
  },
  {
    slug: "automation",
    title: "Business Automation",
    description:
      "Streamline your operations with automated workflows, reducing manual tasks and increasing productivity.",
    features: ["Workflow Automation", "CRM Integration", "Process Optimization"],
    headline: "Reduce busywork and keep your team focused on revenue.",
    outcomes: [
      "Faster response times and follow-ups",
      "More consistent customer experience",
      "Less time wasted on repetitive admin work",
      "Better visibility across pipeline and operations",
    ],
    alignment: [
      "We align workflows to your real processes and approvals",
      "We align automations to your CRM and source-of-truth data",
      "We align notifications to the right people at the right time",
      "We align reporting so you can see throughput and bottlenecks",
    ],
    deliverables: [
      "Workflow map + automation blueprint",
      "Automations (forms → CRM → email/SMS → tasks)",
      "Integrations and monitoring",
      "Team training + documentation",
    ],
    howItWorks: [
      "Map: current process and pain points",
      "Design: future workflow + rules",
      "Implement: automations and integrations",
      "Improve: iterate based on results",
    ],
    subServices: [
      {
        name: "CRM Workflow Automation",
        description:
          "Automate lead routing, task creation, follow-ups, and pipeline stages so nothing slips through the cracks.",
        keywords: ["CRM automation", "workflow", "pipeline"],
      },
      {
        name: "Lead Capture & Follow-Up Automation",
        description:
          "Connect forms, chat, and ads to instant email/SMS follow-ups and booking flows to improve conversion speed.",
        keywords: ["lead capture", "follow-up", "SMS automation"],
      },
      {
        name: "n8n Automations & Integrations",
        description:
          "Custom n8n workflows that connect your tools, move data reliably, and automate repetitive work across marketing and operations.",
        keywords: ["n8n", "workflow automation", "integrations"],
      },
      {
        name: "Client Onboarding Automation",
        description:
          "Automate onboarding steps like forms, contracts, welcome emails, and task checklists for a smoother customer experience.",
        keywords: ["client onboarding", "automation", "workflows"],
      },
      {
        name: "Reporting & Dashboards",
        description:
          "Track pipeline, conversions, and operational throughput with dashboards that keep your team aligned.",
        keywords: ["dashboards", "reporting", "KPIs"],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
