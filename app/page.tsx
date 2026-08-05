import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background pb-16 lg:pb-0">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <Services />
        <WhyChooseUs />
        <Process />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
