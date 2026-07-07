import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";
import { posts, ContentBlock } from "../data";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cta from "../../components/Cta";
import { Metadata } from "next";
import BlogClientWrapper from "./BlogClientWrapper";
import { buildBreadcrumbSchema, toJsonLd } from "../../utils/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

const legacySlugRedirects: Record<string, string> = {
  "the-future-of-web-design:-2024-trends": "ai-overviews-faq-content",
};

function resolveSlug(slug: string) {
  return legacySlugRedirects[slug] ?? slug;
}

// Next.js metadata generation for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const canonicalSlug = resolveSlug(resolvedParams.slug);
  const post = posts.find((p) => p.slug === canonicalSlug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${canonicalSlug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

// Custom block renderer
const renderBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className="text-lg md:text-xl leading-[1.8] text-foreground/80 mb-8 font-medium"
        >
          {block.text}
        </p>
      );
    case "heading":
      const sizeClass =
        block.level === 2 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl";
      const headingId = block.text.toLowerCase().replace(/ /g, "-");
      const headingClass = `${sizeClass} font-bold tracking-tight text-foreground mt-16 mb-6`;
      if (block.level === 2) {
        return (
          <h2 key={index} id={headingId} className={headingClass}>
            {block.text}
          </h2>
        );
      }
      return (
        <h3 key={index} id={headingId} className={headingClass}>
          {block.text}
        </h3>
      );
    case "highlight":
      return (
        <div
          key={index}
          className="my-16 md:my-24 py-8 md:py-12 border-y border-border relative"
        >
          <div className="absolute left-0 top-0 w-2 h-full bg-brand-primary" />
          <p className="text-3xl md:text-5xl lg:text-6xl font-serif italic tracking-tight leading-[1.1] text-foreground">
            {block.text}
          </p>
        </div>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="my-12 p-8 md:p-12 bg-surface border border-border rounded-3xl relative"
        >
          <span className="absolute top-4 left-6 text-6xl text-brand-primary/20 font-serif">
            "
          </span>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground relative z-10">
            {block.text}
          </p>
          {block.author && (
            <footer className="mt-6 font-mono text-xs uppercase tracking-widest text-muted">
              — {block.author}
            </footer>
          )}
        </blockquote>
      );
    case "image":
      return (
        <figure key={index} className="my-12 w-full">
          <div className="w-full h-[40vh] md:h-[60vh] bg-surface rounded-3xl overflow-hidden relative border border-border">
            {/* In a real scenario, use next/image. Here we use an abstract placeholder */}
            <div
              className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="absolute inset-0 bg-linear-to-tr from-brand-primary/20 to-brand-mint/20" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={block.url}
              alt={block.alt}
              className="w-full h-full object-cover mix-blend-luminosity opacity-50"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-4 text-center font-mono text-xs uppercase tracking-widest text-muted">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    default:
      return null;
  }
};

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const canonicalSlug = resolveSlug(resolvedParams.slug);

  if (canonicalSlug !== resolvedParams.slug) {
    redirect(`/blog/${canonicalSlug}`);
  }

  const post = posts.find((p) => p.slug === canonicalSlug);

  if (!post) {
    notFound();
  }

  const isDark =
    post.color === "bg-foreground" ||
    post.color === "bg-brand-primary" ||
    post.color === "bg-brand-secondary";
  const textColor = isDark ? "text-background" : "text-foreground";

  // Extract h2 headings for the table of contents
  const toc = post.content
    .filter(
      (block): block is { type: "heading"; text: string; level: 2 | 3 } =>
        block.type === "heading" && block.level === 2,
    )
    .map((h) => ({
      title: h.text,
      id: h.text.toLowerCase().replace(/ /g, "-"),
    }));

  const breadcrumbJsonLd = toJsonLd(
    buildBreadcrumbSchema([
      { name: "Home", url: "https://bizzgrowlabs.com" },
      { name: "Blog", url: "https://bizzgrowlabs.com/blog" },
      { name: post.title, url: `https://bizzgrowlabs.com/blog/${post.slug}` },
    ]),
  );

  const articleSchema = toJsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "BizzGrowLabs",
      url: "https://bizzgrowlabs.com",
    },
    mainEntityOfPage: `https://bizzgrowlabs.com/blog/${post.slug}`,
  });

  return (
    <main className="bg-background min-h-screen selection:bg-brand-mint selection:text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleSchema }}
      />
      <Navbar />

      <BlogClientWrapper>
        <article className="pt-32 pb-24 md:pt-40 md:pb-32">
          {/* Cinematic Hero */}
          <header className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl mb-12 md:mb-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted hover:text-foreground transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Journal
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border border-border bg-surface text-foreground">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <h1 className="text-[clamp(3rem,8vw,8rem)] font-medium tracking-tighter leading-[0.95] text-foreground mb-12 hero-title">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 py-6 border-y border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full border border-border"
              />
              <div>
                <div className="font-bold text-foreground">
                  {post.author.name}
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-muted">
                  {post.author.role}
                </div>
              </div>
            </div>
          </header>

          {/* Dynamic Color Banner */}
          <div
            className={`w-full h-[40vh] md:h-[60vh] ${post.color} relative overflow-hidden mb-16 md:mb-32 flex items-center justify-center banner-image`}
          >
            <div
              className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
            <h2
              className={`text-[15vw] font-black tracking-tighter uppercase opacity-[0.03] ${textColor} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap`}
            >
              {post.category}
            </h2>
          </div>

          {/* Grid Layout: Sidebar + Main Content */}
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24 relative">
              {/* Sticky Left Sidebar */}
              <aside className="hidden lg:block relative">
                <div className="sticky top-40 flex flex-col gap-12 toc-sidebar">
                  {toc.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
                        On this page
                      </h4>
                      <ul className="flex flex-col gap-4">
                        {toc.map((item, i) => (
                          <li key={i}>
                            <a
                              href={`#${item.id}`}
                              className="text-sm font-medium text-foreground hover:text-brand-primary transition-colors hover:translate-x-1 inline-block duration-300"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-muted mb-6">
                      Share
                    </h4>
                    <div className="flex flex-col gap-4">
                      <button className="flex items-center gap-3 text-sm font-medium hover:text-brand-primary transition-colors w-fit">
                        <Twitter className="w-4 h-4" /> Twitter
                      </button>
                      <button className="flex items-center gap-3 text-sm font-medium hover:text-brand-primary transition-colors w-fit">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                      </button>
                      <button className="flex items-center gap-3 text-sm font-medium hover:text-brand-primary transition-colors w-fit">
                        <Share2 className="w-4 h-4" /> Copy Link
                      </button>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Reading Area */}
              <div className="max-w-3xl blog-content">
                {/* Initial massive drop cap effect handled via CSS or just the first paragraph */}
                {post.content.map((block, index) => renderBlock(block, index))}

                <div className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full border border-border"
                    />
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-muted mb-1">
                        Written by
                      </div>
                      <div className="font-bold text-foreground text-xl">
                        {post.author.name}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Share */}
                  <div className="flex lg:hidden gap-4">
                    <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-surface transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </BlogClientWrapper>

      <Cta />
      <Footer />
    </main>
  );
}
