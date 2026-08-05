import type { Metadata, Viewport } from "next";
import { Inter, Rajdhani } from "next/font/google";
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
    "Precision ECM tuning, TCM tuning, ECU remapping, transmission rebuild and engine rebuild services. Dyno backed tuning, transparent process, and results you can feel. Get a free consultation today.",
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
      "Precision ECM tuning, TCM tuning, ECU remapping, transmission rebuild and engine rebuild services. Dyno backed tuning and a transparent, no surprises process.",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b0b0d",
};

const BUSINESS_ID = `${siteConfig.url}/#business`;

const services = [
  {
    name: "ECM Tuning",
    description:
      "Custom Engine Control Module recalibration covering fuel maps, ignition timing, boost control, and torque limiters tuned to your specific engine.",
  },
  {
    name: "TCM Tuning",
    description:
      "Transmission Control Module tuning for sharper shift points, firmer clutch pressure, and shift behaviour matched to your engine tune.",
  },
  {
    name: "ECU Remapping",
    description:
      "Full ECU software recalibration for measurable gains in power, torque, and fuel efficiency, with the original file backed up.",
  },
  {
    name: "Transmission Rebuild",
    description:
      "Complete gearbox teardown, component level inspection, and rebuild with fresh clutch packs, seals, solenoids, and fluid.",
  },
  {
    name: "Engine Rebuild",
    description:
      "Ground up engine rebuild with precision machining, new bearings, gaskets and rings, plus compression and leak down testing.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": BUSINESS_ID,
  name: siteConfig.name,
  image: `${siteConfig.url}/opengraph-image`,
  logo: `${siteConfig.url}/RedlineLogoCropped.png`,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "386/76, Opposite Vasant Square Mall, Masoodpur, Sector D, Vasant Kunj",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110070",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "New Delhi",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  sameAs: [siteConfig.gmbUrl, siteConfig.socials.instagram, siteConfig.socials.facebook],
  description: siteConfig.description,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tuning & Rebuild Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        serviceType: s.name,
        provider: { "@id": BUSINESS_ID },
        areaServed: { "@type": "City", name: "New Delhi" },
      },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: { "@id": BUSINESS_ID },
  inLanguage: "en-IN",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-red focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
