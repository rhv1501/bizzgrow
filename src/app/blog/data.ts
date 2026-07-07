export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level: 2 | 3 }
  | { type: "quote"; text: string; author?: string }
  | { type: "image"; url: string; alt: string; caption?: string }
  | { type: "highlight"; text: string };

export type BlogPost = {
  slug: string;
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
    slug: "seo-mistakes-small-businesses-2026",
    title: "10 SEO Mistakes Small Businesses Make in 2026",
    excerpt:
      "A practical technical SEO guide for small businesses that want better rankings, stronger local visibility, and cleaner site structure.",
    date: "2024-10-15",
    category: "Technical SEO",
    readTime: "9 min read",
    color: "bg-brand-primary",
    author: {
      name: "Alex Rivera",
      role: "Head of Search Strategy",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    content: [
      {
        type: "paragraph",
        text: "Most small business websites do not lose rankings because of one big mistake. They lose visibility because a dozen small problems stack up: weak titles, vague content, poor internal linking, and pages that are hard for search engines to interpret.",
      },
      {
        type: "highlight",
        text: "If Google cannot understand the page, it cannot confidently rank the page.",
      },
      {
        type: "heading",
        text: "Mistake 1: Publishing without search intent",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Every page should answer a clear intent. Some pages need to educate. Others need to compare, convert, or capture local demand. If the content does not match the searcher's goal, users bounce and rankings weaken.",
      },
      {
        type: "heading",
        text: "Mistake 2: Ignoring internal linking",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Internal links help search engines find your best content and understand how topics connect. Use service pages, blog posts, and supporting articles to build a topical map that points toward your most important commercial pages.",
      },
      {
        type: "heading",
        text: "Mistake 3: Missing local trust signals",
        level: 3,
      },
      {
        type: "paragraph",
        text: "If you serve a region, include location references, contact details, business identity, and service area context. Those signals help both search engines and AI systems trust that your business is real, relevant, and specific.",
      },
    ],
  },
  {
    slug: "website-performance-checklist",
    title: "Website Performance Checklist for Faster Rankings",
    excerpt:
      "A Core Web Vitals and performance checklist that improves speed, usability, and search visibility without redesigning the site.",
    date: "2024-10-08",
    category: "Performance & Core Web Vitals",
    readTime: "10 min read",
    color: "bg-brand-mint",
    author: {
      name: "Samira Jones",
      role: "Lead Performance Engineer",
      avatar: "https://i.pravatar.cc/150?u=a2462d826712d",
    },
    content: [
      {
        type: "paragraph",
        text: "Speed is not just a technical metric. It changes how many visitors stay, how many leads you get, and how search engines interpret the quality of the experience.",
      },
      {
        type: "highlight",
        text: "Fast pages create better engagement, and better engagement supports better rankings.",
      },
      {
        type: "heading",
        text: "Check your Core Web Vitals first",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Focus on LCP, INP, and CLS. Large hero media, slow JavaScript, and layout shifts are the most common reasons a site feels heavy even when the design looks polished.",
      },
      {
        type: "heading",
        text: "Trim the obvious bottlenecks",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Compress images, defer unnecessary scripts, and avoid loading heavy assets before the main content is visible. In many cases, a cleaner asset strategy does more for rankings than a full redesign.",
      },
      {
        type: "heading",
        text: "Build a repeatable optimization loop",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Measure before and after every change. The best performance work is boring: remove waste, simplify delivery, and keep checking the site after each release.",
      },
    ],
  },
  {
    slug: "measure-digital-marketing-roi",
    title: "How to Measure Digital Marketing ROI",
    excerpt:
      "A practical guide to conversion tracking, attribution, and reporting for marketers who care about revenue instead of vanity metrics.",
    date: "2024-09-28",
    category: "Analytics & Attribution",
    readTime: "7 min read",
    color: "bg-brand-secondary",
    author: {
      name: "Marcus Chen",
      role: "Growth Director",
      avatar: "https://i.pravatar.cc/150?u=a582a2462d826712d",
    },
    content: [
      {
        type: "paragraph",
        text: "Marketing only works when you can connect activity to outcomes. That means tracking leads, booked calls, purchases, and the revenue that follows them.",
      },
      {
        type: "highlight",
        text: "If you cannot tie spend to revenue, you do not have a marketing system. You have activity.",
      },
      {
        type: "heading",
        text: "Define the conversion before you optimize",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Decide whether the real goal is a form fill, a qualified call, an email capture, or a purchase. Different conversion goals require different landing pages, offers, and attribution setups.",
      },
      {
        type: "heading",
        text: "Use attribution that matches your sales cycle",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Short sales cycles can often be measured with clean last-touch reporting. Longer cycles need a clearer picture that includes source, assisted conversions, and CRM stages.",
      },
      {
        type: "heading",
        text: "Report the numbers that matter",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Focus reports on leads, revenue, cost per acquisition, and conversion rate. Those numbers are far more useful than clicks or impressions when you are deciding where to spend next month.",
      },
    ],
  },
  {
    slug: "schema-markup-ai-overviews",
    title: "How Schema Markup Helps AI Overviews Understand Your Site",
    excerpt:
      "Learn how structured data improves entity clarity, rich results eligibility, and AI answer extraction across search surfaces.",
    date: "2024-09-20",
    category: "Schema Markup",
    readTime: "8 min read",
    color: "bg-brand-accent",
    author: {
      name: "Nora Patel",
      role: "AI Search Strategist",
      avatar: "https://i.pravatar.cc/150?u=a346581f4e29026705d",
    },
    content: [
      {
        type: "paragraph",
        text: "Schema markup does not replace good content, but it gives search engines a cleaner map of what your pages mean. That matters more as AI Overviews and answer engines rely on structured understanding.",
      },
      {
        type: "highlight",
        text: "Schema helps machines interpret the page with less guesswork.",
      },
      {
        type: "heading",
        text: "Start with the basics",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Organization, WebSite, Service, Article, FAQPage, and BreadcrumbList are the most practical starting points for agency sites and service businesses.",
      },
      {
        type: "heading",
        text: "Match schema to page intent",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Use Article for educational posts, Service for service pages, and FAQPage for pages that answer common pre-sale questions. Only mark up what is actually on the page.",
      },
      {
        type: "heading",
        text: "Use schema to reinforce entities",
        level: 3,
      },
      {
        type: "paragraph",
        text: "When your business name, services, and contact details are repeated consistently in schema and on-page content, AI systems have a much easier time trusting the entity behind the content.",
      },
    ],
  },
  {
    slug: "internal-linking-topical-authority",
    title: "Internal Linking Strategies for Topical Authority",
    excerpt:
      "Build a stronger site structure with internal links that support topical authority, crawl depth, and AI understanding.",
    date: "2024-09-12",
    category: "Internal Linking",
    readTime: "7 min read",
    color: "bg-brand-primary",
    author: {
      name: "Alex Rivera",
      role: "Head of Search Strategy",
      avatar: "https://i.pravatar.cc/150?u=a642581f4e29026704d",
    },
    content: [
      {
        type: "paragraph",
        text: "Internal linking is one of the easiest ways to show both users and search engines what your site thinks is important. It also helps AI systems map related topics together.",
      },
      {
        type: "highlight",
        text: "A strong internal link structure makes authority easier to discover.",
      },
      {
        type: "heading",
        text: "Link from broad to specific",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Use service hubs, resource pages, and supporting articles to push authority toward your most valuable commercial pages.",
      },
      {
        type: "heading",
        text: "Use descriptive anchors",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Anchor text should describe the destination clearly. Avoid vague links like 'click here' and use phrases that tell the reader what the page covers.",
      },
      {
        type: "heading",
        text: "Reduce orphan pages",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Every important page should receive internal links from at least one other page. Orphan content is harder to crawl, harder to rank, and easier to forget.",
      },
    ],
  },
  {
    slug: "entity-seo-for-brands",
    title: "Building Digital Trust: How to Make Your Brand Stand Out Online",
    excerpt:
      "Explain your company, services, and relationships in a way that makes your brand easier for customers and search engines to trust.",
    date: "2024-09-05",
    category: "Entity SEO",
    readTime: "8 min read",
    color: "bg-brand-peach",
    author: {
      name: "Liam Brooks",
      role: "Generative Search Lead",
      avatar: "https://i.pravatar.cc/150?u=a746581f4e29026706d",
    },
    content: [
      {
        type: "paragraph",
        text: "Entity SEO is about making sure search engines know exactly who you are, what you do, who you serve, and how your pages relate to each other.",
      },
      {
        type: "highlight",
        text: "The clearer the entity, the easier it is to cite and recommend.",
      },
      {
        type: "heading",
        text: "Use consistent naming everywhere",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Your brand name, service names, and contact details should match across the site, schema, and external profiles. Consistency reduces ambiguity.",
      },
      {
        type: "heading",
        text: "Connect services to outcomes",
        level: 2,
      },
      {
        type: "paragraph",
        text: "When your pages explain not only what a service is but what it changes for the customer, AI systems can better interpret the value of your offer.",
      },
      {
        type: "heading",
        text: "Show relationship signals",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Use internal links, author bios, company pages, and contact pages to show how the site's entities connect. Relationships make the site more machine-readable.",
      },
    ],
  },
  {
    slug: "search-console-checklist",
    title: "Search Console Checklist for SEO Recovery and Growth",
    excerpt:
      "A practical Search Console checklist for indexing, performance, coverage, and query analysis when a site needs clearer search visibility.",
    date: "2024-08-28",
    category: "Search Console",
    readTime: "7 min read",
    color: "bg-foreground",
    author: {
      name: "Samira Jones",
      role: "Lead Performance Engineer",
      avatar: "https://i.pravatar.cc/150?u=a8462d826712d",
    },
    content: [
      {
        type: "paragraph",
        text: "Search Console is where technical SEO meets reality. It shows which pages are indexed, which queries you appear for, and where the site is losing opportunities.",
      },
      {
        type: "highlight",
        text: "The best SEO decisions start with Search Console data.",
      },
      {
        type: "heading",
        text: "Check indexing first",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Confirm that the pages you want indexed are actually in the index and that the pages you do not want indexed are excluded for the right reasons.",
      },
      {
        type: "heading",
        text: "Review query opportunities",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Look for queries where you are already appearing but not getting enough clicks. Those pages often need title improvements, better snippets, or stronger alignment to the query intent.",
      },
      {
        type: "heading",
        text: "Use coverage and enhancements to prioritize work",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Coverage, experience, and enhancement reports reveal which fixes will have the most effect. Work from the highest-impact problems first.",
      },
    ],
  },
  {
    slug: "local-seo-service-businesses",
    title: "Local SEO for Service Businesses That Want More Calls",
    excerpt:
      "How to improve local rankings, trust signals, and conversion intent for service businesses targeting nearby customers.",
    date: "2024-08-20",
    category: "Local SEO",
    readTime: "8 min read",
    color: "bg-brand-mint",
    author: {
      name: "Nora Patel",
      role: "AI Search Strategist",
      avatar: "https://i.pravatar.cc/150?u=a946581f4e29026705d",
    },
    content: [
      {
        type: "paragraph",
        text: "Local SEO is not just about maps. It is about showing clear service area relevance, strong trust signals, and enough page quality for search engines to recommend you.",
      },
      {
        type: "highlight",
        text: "Local visibility improves when your business identity is unmistakable.",
      },
      {
        type: "heading",
        text: "Optimize your service pages",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Service pages should state who you help, what you do, where you work, and why a customer should contact you. That combination builds relevance and trust.",
      },
      {
        type: "heading",
        text: "Match your content to local intent",
        level: 2,
      },
      {
        type: "paragraph",
        text: "People searching locally usually want a nearby provider, quick contact info, and proof that the business can solve their problem. Make those answers easy to find.",
      },
      {
        type: "heading",
        text: "Reinforce your local entity signals",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Use consistent business information, service areas, FAQs, and contact details across the site so search systems can connect your brand to the region you serve.",
      },
    ],
  },
  {
    slug: "crawl-budget-indexation",
    title: "Crawl Budget and Indexation for Large or Growing Sites",
    excerpt:
      "Understand crawl budget, indexation control, and duplicate content management so search engines spend more time on the right pages.",
    date: "2024-08-12",
    category: "Crawlability",
    readTime: "8 min read",
    color: "bg-brand-primary",
    author: {
      name: "Alex Rivera",
      role: "Head of Search Strategy",
      avatar: "https://i.pravatar.cc/150?u=a642581f4e29026704d",
    },
    content: [
      {
        type: "paragraph",
        text: "Crawl budget matters most when a site gets bigger, more dynamic, or more duplicated. If search engines waste time on low-value URLs, important pages can take longer to be discovered and refreshed.",
      },
      {
        type: "highlight",
        text: "Control crawl waste so important pages get more attention.",
      },
      {
        type: "heading",
        text: "Reduce duplicate URL paths",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Use canonicals, redirects, and clean navigation to avoid showing search engines multiple versions of the same content.",
      },
      {
        type: "heading",
        text: "Keep low-value pages out of the path",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Filter pages, parameter-heavy URLs, and thin archives can dilute crawl effort. Keep your important content close to the homepage and internal link paths.",
      },
      {
        type: "heading",
        text: "Use Search Console to spot crawl waste",
        level: 3,
      },
      {
        type: "paragraph",
        text: "If index coverage or crawl behavior looks inefficient, investigate what is being fetched repeatedly and whether those URLs are worth keeping in play.",
      },
    ],
  },
  {
    slug: "content-clusters-for-seo",
    title: "How to Organize Your Website Content to Drive More Traffic",
    excerpt:
      "Plan content clusters around core topics so your blog and service pages reinforce one another, building trust and discoverability.",
    date: "2024-08-05",
    category: "Content Strategy",
    readTime: "9 min read",
    color: "bg-brand-secondary",
    author: {
      name: "Liam Brooks",
      role: "Generative Search Lead",
      avatar: "https://i.pravatar.cc/150?u=a946581f4e29026705d",
    },
    content: [
      {
        type: "paragraph",
        text: "A content cluster helps a site cover one topic deeply instead of publishing disconnected posts that never build authority. This is especially useful for building long-term search visibility.",
      },
      {
        type: "highlight",
        text: "Depth plus structure beats random publishing.",
      },
      {
        type: "heading",
        text: "Pick one pillar topic",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Your pillar topic might be technical SEO, AI search visibility, or local SEO. Around that topic, create supporting posts that answer sub-questions and link back to the pillar.",
      },
      {
        type: "heading",
        text: "Support the pillar with articles",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Supporting posts should be specific, answer-shaped, and internally linked. That creates a more complete topical map for search engines and AI systems.",
      },
      {
        type: "heading",
        text: "Update clusters instead of starting over",
        level: 3,
      },
      {
        type: "paragraph",
        text: "As search evolves, you can update existing cluster pages with new examples, refreshed dates, and better internal links rather than starting from scratch each time.",
      },
    ],
  },
  {
    slug: "aeo-writing-for-answer-engines",
    title: "Writing Website Copy That Answers Customer Questions Fast",
    excerpt:
      "Write content that search engines can easily extract, summarize, and cite without losing the meaning of the page.",
    date: "2024-07-28",
    category: "Copywriting",
    readTime: "8 min read",
    color: "bg-brand-peach",
    author: {
      name: "Nora Patel",
      role: "AI Search Strategist",
      avatar: "https://i.pravatar.cc/150?u=a146581f4e29026705d",
    },
    content: [
      {
        type: "paragraph",
        text: "Answer engine optimization is about writing with enough clarity that a model can quote your page accurately. That means concise answers, strong headings, and direct language.",
      },
      {
        type: "highlight",
        text: "The best converting pages answer the question before they sell the service.",
      },
      {
        type: "heading",
        text: "Lead with the answer",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Use the opening paragraph to define the term or explain the process. The user should understand the page in seconds, not after reading three sections.",
      },
      {
        type: "heading",
        text: "Use subheads like question prompts",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Headings that mirror search questions make the page easier to scan and easier for AI systems to map to user intent.",
      },
      {
        type: "heading",
        text: "Keep examples close to definitions",
        level: 3,
      },
      {
        type: "paragraph",
        text: "When examples sit close to the answer they support, the page becomes easier to quote and more useful to the reader.",
      },
    ],
  },
  {
    slug: "geo-content-for-ai-citations",
    title: "Creating High-Value Content That Customers Actually Read",
    excerpt:
      "A practical framework for building content that is easy for search engines to cite, summarize, and recommend.",
    date: "2024-07-20",
    category: "Content Strategy",
    readTime: "8 min read",
    color: "bg-brand-mint",
    author: {
      name: "Liam Brooks",
      role: "Generative Search Lead",
      avatar: "https://i.pravatar.cc/150?u=a246581f4e29026705d",
    },
    content: [
      {
        type: "paragraph",
        text: "Content optimization is about making the page helpful enough that AI models can use it as a source. That means specificity, structure, and a visible point of view.",
      },
      {
        type: "highlight",
        text: "AI systems quote pages that are clear, specific, and trustworthy.",
      },
      {
        type: "heading",
        text: "Be explicit about who the content is for",
        level: 2,
      },
      {
        type: "paragraph",
        text: "An optimized page should make the audience obvious. Service businesses, founders, marketers, and local brands all need different framing.",
      },
      {
        type: "heading",
        text: "Use proof and specifics",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Frameworks, checklists, and concrete examples are easier for AI systems to reuse than generic claims.",
      },
      {
        type: "heading",
        text: "Make the page machine-readable",
        level: 3,
      },
      {
        type: "paragraph",
        text: "Structured headings, schema markup, and consistent terminology all help machines interpret the page with less ambiguity.",
      },
    ],
  },
  {
    slug: "ai-overviews-faq-content",
    title: "Why a Great FAQ Section is Your Best Sales Tool",
    excerpt:
      "How to write FAQ content that answers customer queries quickly and improves your visibility in search engines.",
    date: "2024-07-12",
    category: "AI Search",
    readTime: "7 min read",
    color: "bg-brand-primary",
    author: {
      name: "Nora Patel",
      role: "AI Search Strategist",
      avatar: "https://i.pravatar.cc/150?u=a546581f4e29026705d",
    },
    content: [
      {
        type: "paragraph",
        text: "FAQ content works well for AI Overviews because it directly mirrors the way people ask questions. The trick is to answer clearly without turning the page into a keyword dump.",
      },
      {
        type: "highlight",
        text: "Short questions and direct answers are easier to extract.",
      },
      {
        type: "heading",
        text: "Write the question the way users ask it",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Use natural language questions that match real search intent, not internal jargon.",
      },
      {
        type: "heading",
        text: "Lead with one clear answer",
        level: 2,
      },
      {
        type: "paragraph",
        text: "Start with the answer in the first sentence. If needed, add a second sentence with context, but keep the core meaning obvious.",
      },
      {
        type: "heading",
        text: "Add supporting questions around the main one",
        level: 3,
      },
      {
        type: "paragraph",
        text: "A strong FAQ page can support multiple related questions, making it more likely to show up in answer engines and rich results.",
      },
    ],
  },
];