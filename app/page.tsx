import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Location from "@/components/Location";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";
import { faqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site-config";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteConfig.url}/#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background pb-16 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustStrip />
        <Services />
        <WhyChooseUs />
        <Process />
        <Faq />
        <Location />
        <ContactCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
