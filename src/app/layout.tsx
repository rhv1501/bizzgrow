import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "BizzGrow - Digital Transformation for Small & Medium Businesses",
    template: "%s | BizzGrow",
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
  authors: [{ name: "BizzGrow Team" }],
  creator: "BizzGrow",
  publisher: "BizzGrow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bizzgrowlabs.com",
    title: "BizzGrow - Digital Transformation for Small & Medium Businesses",
    description:
      "End-to-end digital transformation services for SMBs. Web design, development, digital marketing, branding & automation.",
    siteName: "BizzGrow",
  },
  twitter: {
    card: "summary_large_image",
    title: "BizzGrow - Digital Transformation for SMBs",
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#004C80" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BizzGrow",
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
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <Analytics />
        <Navbar />

        <main id="main-content" role="main">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
