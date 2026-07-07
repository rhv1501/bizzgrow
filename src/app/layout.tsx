import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
// @ts-ignore Next.js handles this global stylesheet import at build time.
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import PageTransitionOverlay from "./components/PageTransitionOverlay";
import Script from "next/script";
import { siteConfig } from "./utils/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "BizzGrowLabs | Digital Transformation & Web Design for SMBs",
    template: "%s | BizzGrowLabs",
  },

  description: "BizzGrowLabs helps small and medium businesses scale sustainably. We provide premium web design, digital marketing, and automation to build your digital identity.",
  keywords: [
    "digital agency",
    "web design",
    "digital marketing",
    "branding",
    "business automation",
    "SMB growth",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "BizzGrowLabs | Digital Agency for Small Business Growth",
    description: "BizzGrowLabs helps small and medium businesses scale sustainably. We provide premium web design, digital marketing, and automation to build your digital identity.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1024,
        height: 1024,
        alt: "BizzGrowLabs - Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizzGrowLabs | Digital Agency for Small Business Growth",
    description: "BizzGrowLabs helps small and medium businesses scale sustainably. We provide premium web design, digital marketing, and automation to build your digital identity.",
    creator: "@bizzgrowlabs",
    images: [`${siteConfig.url}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TLNGPF3D');
`}
        </Script>
        <Script id="google-ads-tag" strategy="beforeInteractive">
          {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18058135486');
`}
        </Script>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#F7F4EE" />
        <meta name="color-scheme" content="light" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteConfig.url}/#organization`,
                  name: siteConfig.name,
                  description: siteConfig.description,
                  url: siteConfig.url,
                  logo: `${siteConfig.url}/logo.png`,
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: siteConfig.phone,
                    contactType: "customer service",
                    email: siteConfig.email,
                  },
                  sameAs: siteConfig.socialLinks,
                  foundingDate: "2024",
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteConfig.url}/#website`,
                  url: siteConfig.url,
                  name: siteConfig.name,
                  description: siteConfig.description,
                  inLanguage: "en-US",
                  publisher: {
                    "@id": `${siteConfig.url}/#organization`,
                  },
                },
              ],
            }),
          }}
        />
        <Script id="matomo" strategy="afterInteractive">
          {`
var _paq = window._paq = window._paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="https://matomo.bizzgrowlabs.com/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '1']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
`}
        </Script>
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} bg-background text-foreground antialiased selection:bg-brand-secondary selection:text-foreground`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLNGPF3D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-surface text-foreground px-4 py-2 rounded-full z-50 border border-border shadow-md"
        >
          Skip to main content
        </a>

        {/* Cinematic Film Grain Overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-9990 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <PageTransitionOverlay />
        <CustomCursor />

        <SmoothScroll>
          <Navbar />

          <main id="main-content" role="main">
            {children}
          </main>

          <Footer />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
