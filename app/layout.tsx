import type { Metadata, Viewport } from "next";
import { Inter, Rajdhani } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ECM, TCM Tuning & ECU Remapping Specialists`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Precision ECM tuning, TCM tuning, ECU remapping, transmission rebuild and engine rebuild services. Dyno-backed tuning, transparent process, and results you can feel. Get a free consultation today.",
  keywords: [
    "ECM tuning",
    "TCM tuning",
    "ECU remapping",
    "ECU tuning",
    "engine remapping",
    "transmission rebuild",
    "engine rebuild",
    "car performance tuning",
    "diesel remapping",
    "petrol remapping",
    "automatic transmission repair",
    "Redline Auto",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ECM, TCM Tuning & ECU Remapping Specialists`,
    description:
      "Precision ECM tuning, TCM tuning, ECU remapping, transmission rebuild and engine rebuild services. Dyno-backed tuning and a transparent, no-surprises process.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ECM, TCM Tuning & ECU Remapping Specialists`,
    description:
      "Precision ECM tuning, TCM tuning, ECU remapping, transmission rebuild and engine rebuild services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b0b0d",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.name,
  image: `${siteConfig.url}/opengraph-image`,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLine,
    addressCountry: "IN",
  },
  areaServed: siteConfig.serviceArea,
  description: siteConfig.description,
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "ECM Tuning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "TCM Tuning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "ECU Remapping" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transmission Rebuild" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engine Rebuild" } },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
