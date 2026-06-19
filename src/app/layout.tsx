import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import PageTransitionOverlay from "./components/PageTransitionOverlay";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizzgrowlabs.com"),
  title: {
    default: "BizzGrowLabs - Digital Transformation for Small & Medium Businesses",
    template: "%s | BizzGrowLabs",
  },
  description:
    "End-to-end digital transformation services for SMBs. Web design, development, digital marketing, branding & automation. Helping businesses scale sustainably with modern technology.",
  keywords: [
    "digital transformation",
    "web design",
    "digital marketing",
    "branding",
    "SMB",
    "small business",
    "automation",
    "web development",
  ],
  authors: [{ name: "BizzGrowLabs Team" }],
  creator: "BizzGrowLabs",
  publisher: "BizzGrowLabs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bizzgrowlabs.com",
    title: "BizzGrowLabs - Digital Transformation for Small & Medium Businesses",
    description:
      "End-to-end digital transformation services for SMBs. Web design, development, digital marketing, branding & automation.",
    siteName: "BizzGrowLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "BizzGrowLabs - Digital Transformation for SMBs",
    description:
      "End-to-end digital transformation services. Web design, development, digital marketing, branding & automation.",
    creator: "@bizzgrow",
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
  verification: {
    google: "your-google-verification-code",
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
              "@type": "Organization",
              name: "BizzGrowLabs",
              description:
                "Digital transformation services for small and medium businesses",
              url: "https://bizzgrow.com",
              logo: "/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+918939036141",
                contactType: "customer service",
                email: "bizzgrowlabs@gmail.com",
              },
              sameAs: [
                "https://linkedin.com/company/bizzgrow",
                "https://twitter.com/bizzgrow",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "106, A Proad, Choolai",
                addressLocality: "Chennai-112",
                addressCountry: "IN",
              },
              foundingDate: "2024",
              numberOfEmployees: "2-10",
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
        <div className="fixed inset-0 pointer-events-none z-[9990] opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

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
