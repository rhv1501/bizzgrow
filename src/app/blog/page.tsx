import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights on digital transformation, web development, marketing strategies, and business growth for small and medium businesses.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "10 SEO Mistakes Small Businesses Make (And How to Fix Them)",
      excerpt:
        "Common SEO pitfalls that hurt your search rankings and practical solutions to improve your online visibility.",
      date: "2024-10-15",
      category: "SEO",
      readTime: "8 min read",
    },
    {
      title: "The Complete Guide to Website Performance Optimization",
      excerpt:
        "Speed up your website and improve user experience with these proven performance optimization techniques.",
      date: "2024-10-08",
      category: "Development",
      readTime: "12 min read",
    },
    {
      title: "Digital Marketing ROI: How to Measure What Matters",
      excerpt:
        "Track the metrics that actually impact your bottom line and optimize your marketing spend for better results.",
      date: "2024-09-28",
      category: "Marketing",
      readTime: "6 min read",
    },
    {
      title: "Branding vs Marketing: Understanding the Difference",
      excerpt:
        "Learn why both branding and marketing are essential for business growth and how they work together.",
      date: "2024-09-22",
      category: "Branding",
      readTime: "5 min read",
    },
    {
      title: "E-commerce Conversion Optimization: 15 Proven Strategies",
      excerpt:
        "Increase your online sales with these tested conversion rate optimization techniques for e-commerce stores.",
      date: "2024-09-15",
      category: "E-commerce",
      readTime: "10 min read",
    },
    {
      title: "The Future of Web Design: Trends to Watch in 2024",
      excerpt:
        "Stay ahead of the curve with these emerging web design trends that will shape user experiences.",
      date: "2024-09-08",
      category: "Design",
      readTime: "7 min read",
    },
  ];

  const categories = [
    "All",
    "SEO",
    "Development",
    "Marketing",
    "Branding",
    "E-commerce",
    "Design",
  ];

  return (
    <main className="py-20">
      <div className="site-container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Expert Insights & Resources
          </h1>
          <p className="text-lg muted">
            Actionable advice on digital transformation, growth strategies, and
            business optimization.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  i === 0 ? "btn-primary" : "btn-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post, i) => (
            <article
              key={i}
              className="card card-animate reveal"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="mb-4">
                <span
                  className="px-3 py-1 text-xs font-semibold rounded-full"
                  style={{
                    backgroundColor: "var(--brand-light)",
                    color: "var(--brand-navy)",
                  }}
                >
                  {post.category}
                </span>
              </div>

              <h2 className="text-xl font-bold mb-3 line-clamp-2">
                {post.title}
              </h2>
              <p className="muted mb-4">{post.excerpt}</p>

              <div className="flex justify-between items-center text-sm muted">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.readTime}</span>
              </div>

              <div className="mt-4">
                <button
                  className="text-sm font-semibold"
                  style={{ color: "var(--brand-primary)" }}
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="btn btn-secondary">Load More Posts</button>
        </div>

        <div
          className="mt-16 p-8 rounded-lg text-center"
          style={{ backgroundColor: "var(--brand-light)" }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Get Expert Insights Delivered
          </h2>
          <p className="muted mb-6">
            Subscribe to our newsletter for weekly tips on digital
            transformation and business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </main>
  );
}
