import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | BizzGrow",
  description:
    "Expert insights on digital transformation, web development, marketing strategies, and business growth.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "10 SEO Mistakes Small Businesses Make",
      excerpt: "Common SEO pitfalls that hurt your search rankings and practical solutions to improve your online visibility.",
      date: "2024-10-15",
      category: "SEO",
      readTime: "8 min read",
      color: "bg-brand-primary",
      textColor: "text-white"
    },
    {
      title: "The Complete Guide to Website Performance",
      excerpt: "Speed up your website and improve user experience with these proven performance optimization techniques.",
      date: "2024-10-08",
      category: "Development",
      readTime: "12 min read",
      color: "bg-brand-mint",
      textColor: "text-gray-900"
    },
    {
      title: "Digital Marketing ROI: Measure What Matters",
      excerpt: "Track the metrics that actually impact your bottom line and optimize your marketing spend for better results.",
      date: "2024-09-28",
      category: "Marketing",
      readTime: "6 min read",
      color: "bg-brand-accent",
      textColor: "text-gray-900"
    },
    {
      title: "Branding vs Marketing: What's The Difference?",
      excerpt: "Learn why both branding and marketing are essential for business growth and how they work together.",
      date: "2024-09-22",
      category: "Branding",
      readTime: "5 min read",
      color: "bg-brand-secondary",
      textColor: "text-white"
    },
    {
      title: "E-commerce Conversion Optimization Strategies",
      excerpt: "Increase your online sales with these tested conversion rate optimization techniques for e-commerce stores.",
      date: "2024-09-15",
      category: "E-commerce",
      readTime: "10 min read",
      color: "bg-white",
      textColor: "text-gray-900"
    },
    {
      title: "The Future of Web Design: 2024 Trends",
      excerpt: "Stay ahead of the curve with these emerging web design trends that will shape user experiences.",
      date: "2024-09-08",
      category: "Design",
      readTime: "7 min read",
      color: "bg-[#FF9E80]",
      textColor: "text-gray-900"
    },
  ];

  const categories = [
    "All", "SEO", "Development", "Marketing", "Branding", "E-commerce", "Design",
  ];

  return (
    <main className="py-32 bg-background relative min-h-screen">
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <div className="inline-block bg-white px-6 py-2 rounded-full border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 transform -rotate-2">
            <span className="font-bold text-gray-900 uppercase tracking-widest text-sm">Our Brain Dump</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tight leading-[1] mb-8">
            Expert Insights & <br/> <span className="bg-brand-accent px-4 py-1 inline-block border-2 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mt-4 rotate-1">Hot Takes</span>
          </h1>
          <p className="text-2xl text-gray-600 font-bold max-w-3xl mx-auto leading-relaxed">
            Actionable advice on digital transformation, growth strategies, and why your current website is probably losing you money.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-6 py-3 rounded-full text-lg font-bold border-2 border-gray-900 transition-transform hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                  i === 0 ? "bg-brand-primary text-white" : "bg-white text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {posts.map((post, i) => (
            <article
              key={i}
              className={`${post.color} rounded-[2rem] p-8 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 flex flex-col`}
            >
              <div className="mb-8">
                <span className="bg-white border-2 border-gray-900 text-gray-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {post.category}
                </span>
              </div>

              <h2 className={`text-3xl font-black mb-4 leading-tight ${post.textColor}`}>
                {post.title}
              </h2>
              <p className={`font-semibold opacity-90 mb-8 flex-1 ${post.textColor}`}>
                {post.excerpt}
              </p>

              <div className={`flex justify-between items-center text-sm font-bold border-t-2 ${post.textColor === 'text-white' ? 'border-white/20' : 'border-gray-900/20'} pt-6`}>
                <span className={post.textColor}>{new Date(post.date).toLocaleDateString()}</span>
                <span className={post.textColor}>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mb-32">
          <button className="btn-secondary bg-white text-xl">Load More Posts</button>
        </div>

        <div className="max-w-4xl mx-auto bg-brand-secondary rounded-[3rem] p-12 lg:p-20 border-4 border-gray-900 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-black text-white mb-6">
              Get Insights Delivered
            </h2>
            <p className="text-xl font-bold text-white/90 mb-10 max-w-xl mx-auto">
              Subscribe to our newsletter for weekly tips on digital growth. We promise not to spam you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-full border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-transparent text-gray-900 font-bold text-lg placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-brand-accent text-gray-900 font-black text-lg px-8 py-4 rounded-full border-2 border-gray-900 hover:bg-brand-primary hover:text-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
