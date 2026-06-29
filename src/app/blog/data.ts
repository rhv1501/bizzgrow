export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level: 2 | 3 }
  | { type: "quote"; text: string; author?: string }
  | { type: "image"; url: string; alt: string; caption?: string }
  | { type: "highlight"; text: string };

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  color: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: ContentBlock[];
};

export const posts: BlogPost[] = [
  {
    title: "10 SEO Mistakes Small Businesses Make",
    excerpt: "Common SEO pitfalls that hurt your search rankings and practical solutions to improve your online visibility.",
    date: "2024-10-15",
    category: "SEO",
    readTime: "8 min read",
    color: "bg-brand-primary",
    author: {
      name: "Alex Rivera",
      role: "Head of Search Strategy",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    content: [
      {
        type: "paragraph",
        text: "Search Engine Optimization (SEO) is a constantly evolving field. While the algorithms change, many small businesses still fall into the same foundational traps. You can have the most beautiful website in the world, but if Google can't understand it, neither will your customers.",
      },
      {
        type: "highlight",
        text: "Ignoring search intent is the single fastest way to burn your marketing budget.",
      },
      {
        type: "paragraph",
        text: "It doesn't matter if you rank #1 for a keyword if the user is looking for information and you are only offering a sales page. Google's ultimate goal is to serve the user the exact answer they are looking for. If your page doesn't align with that intent, you will experience high bounce rates and eventually lose your ranking.",
      },
      {
        type: "heading",
        text: "The Trap of Technical Debt",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Another major pitfall is neglecting technical SEO. Core Web Vitals, mobile responsiveness, and clean URL structures form the foundation of any good strategy. Without a solid technical base, even the best content will struggle to rank.",
      },
      {
        type: "quote",
        text: "Good SEO is built on a foundation of flawless technical architecture. Content is king, but infrastructure is the kingdom.",
        author: "Alex Rivera",
      },
      {
        type: "heading",
        text: "Failing to Localize",
        level: 3,
      },
      {
        type: "paragraph",
        text: "For brick-and-mortar businesses, failing to claim and optimize a Google Business Profile is a cardinal sin. Local SEO is highly intent-driven. When someone searches 'coffee shop near me', they are ready to buy. Ensuring your NAP (Name, Address, Phone number) is consistent across the web is crucial for capturing this local traffic.",
      },
    ],
  },
  {
    title: "The Complete Guide to Website Performance",
    excerpt: "Speed up your website and improve user experience with these proven performance optimization techniques.",
    date: "2024-10-08",
    category: "Development",
    readTime: "12 min read",
    color: "bg-brand-mint",
    author: {
      name: "Samira Jones",
      role: "Lead Performance Engineer",
      avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
    },
    content: [
      {
        type: "paragraph",
        text: "Performance is no longer just a nice-to-have; it's a critical business metric. A slow website leads to higher bounce rates, lower conversion rates, and reduced search engine rankings.",
      },
      {
        type: "highlight",
        text: "Every 100ms decrease in homepage load speed results in a 1.11% increase in conversion.",
      },
      {
        type: "heading",
        text: "The Core Web Vitals Shift",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Google's Core Web Vitals (CWV) are a set of specific factors that Google considers important in a webpage's overall user experience. They measure visual load (LCP), visual stability (CLS), and interactivity (INP). Failing these metrics directly impacts your organic search visibility.",
      },
      {
        type: "heading",
        text: "Optimizing the Critical Rendering Path",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Start by optimizing your assets. Compress images, minify CSS and JavaScript, and utilize modern image formats like WebP or AVIF. Above-the-fold content should load instantaneously. Delay or defer non-critical JavaScript that blocks the main thread.",
      },
      {
        type: "quote",
        text: "Performance is a culture, not a checklist. It must be integrated into the design and development process from day one.",
        author: "Samira Jones",
      },
      {
        type: "paragraph",
        text: "Next, leverage browser caching and consider implementing a Content Delivery Network (CDN) to serve your static assets closer to your users. Edge computing is the future of performant web applications.",
      },
    ],
  },
  {
    title: "Digital Marketing ROI: Measure What Matters",
    excerpt: "Track the metrics that actually impact your bottom line and optimize your marketing spend.",
    date: "2024-09-28",
    category: "Marketing",
    readTime: "6 min read",
    color: "bg-brand-secondary",
    author: {
      name: "Marcus Chen",
      role: "Growth Director",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    content: [
      {
        type: "paragraph",
        text: "Vanity metrics like social media likes and page views might make you feel good, but they don't pay the bills. True digital marketing success is measured by Return on Investment (ROI).",
      },
      {
        type: "highlight",
        text: "Stop tracking likes. Start tracking revenue.",
      },
      {
        type: "paragraph",
        text: "To measure ROI accurately, you need to set up proper conversion tracking. Whether it's a lead form submission, a booked call, or an e-commerce transaction, every key action must be tracked.",
      },
      {
        type: "paragraph",
        text: "Once you know your Customer Acquisition Cost (CAC) and Customer Lifetime Value (LTV), you can start optimizing your campaigns to scale profitability.",
      },
    ],
  },
  {
    title: "Branding vs Marketing: What's The Difference?",
    excerpt: "Learn why both branding and marketing are essential for business growth and how they work together.",
    date: "2024-09-22",
    category: "Branding",
    readTime: "5 min read",
    color: "bg-brand-peach",
    author: {
      name: "Elena Rostova",
      role: "Creative Director",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    },
    content: [
      {
        type: "paragraph",
        text: "Branding and marketing are often used interchangeably, but they serve fundamentally different purposes. Branding is who you are; marketing is how you build awareness.",
      },
      {
        type: "quote",
        text: "Marketing is asking someone on a date. Branding is the reason they say yes.",
        author: "Elena Rostova",
      },
      {
        type: "paragraph",
        text: "Branding encompasses your values, visual identity, and the emotions you evoke in your customers. It's the foundation of long-term loyalty.",
      },
      {
        type: "paragraph",
        text: "Marketing, on the other hand, consists of the tactics and channels you use to communicate that brand to the world. A strong brand makes all marketing efforts more effective.",
      },
    ],
  },
  {
    title: "E-commerce Conversion Optimization Strategies",
    excerpt: "Increase your online sales with these tested conversion rate optimization techniques for e-commerce stores.",
    date: "2024-09-15",
    category: "E-commerce",
    readTime: "10 min read",
    color: "bg-brand-accent",
    author: {
      name: "David Kim",
      role: "E-commerce Specialist",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
    },
    content: [
      {
        type: "paragraph",
        text: "Driving traffic to your e-commerce store is only half the battle. If visitors aren't converting, you're leaving money on the table.",
      },
      {
        type: "heading",
        text: "Frictionless Checkout",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Start by simplifying the checkout process. Every additional step or form field increases the chance of abandonment. Offer guest checkout and multiple payment options.",
      },
      {
        type: "paragraph",
        text: "High-quality product photography and detailed descriptions are also critical. Since customers can't touch or feel the product, your visuals and copy must do the heavy lifting to build trust and desire.",
      },
    ],
  },
  {
    title: "The Future of Web Design: 2024 Trends",
    excerpt: "Stay ahead of the curve with these emerging web design trends that will shape user experiences.",
    date: "2024-09-08",
    category: "Design",
    readTime: "7 min read",
    color: "bg-foreground",
    author: {
      name: "Sarah Jenkins",
      role: "Lead Designer",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026703d",
    },
    content: [
      {
        type: "paragraph",
        text: "Web design is shifting towards more immersive, dynamic, and personalized experiences. Static brochure websites are a thing of the past.",
      },
      {
        type: "highlight",
        text: "The interface of the future doesn't feel like software. It feels like an environment.",
      },
      {
        type: "paragraph",
        text: "We're seeing a rise in 3D elements, micro-interactions, and complex typography layouts that push the boundaries of standard grid systems.",
      },
      {
        type: "paragraph",
        text: "At the same time, accessibility and performance remain paramount. The best designs of 2024 will seamlessly blend cutting-edge aesthetics with flawless usability.",
      },
    ],
  },
];
