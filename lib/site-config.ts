// Central place for business details. Replace the placeholders below with
// your real details. Every component on the site reads from here.
export const siteConfig = {
  name: "Redline Autotech",
  domain: "redlineauto.in",
  url: "https://redlineauto.in",
  tagline: "ECM & TCM Tuning, ECU Remapping, Engine & Transmission Rebuild",
  description:
    "Redline Autotech specialises in precision ECM tuning, TCM tuning, ECU remapping, transmission rebuild, and engine rebuild services. Dyno tested, data backed tuning for real power gains, smoother shifts, and a longer engine life.",
  phone: "+919555998843",
  phoneDisplay: "+91 95559 98843",
  whatsapp: "919555998843",
  email: "sachin@redlineauto.in",
  city: "New Delhi",
  serviceArea: "New Delhi NCR",
  addressLine:
    "386/76, Opposite Vasant Square Mall, Masoodpur, Sector D, Vasant Kunj, New Delhi, Delhi 110070",
  // Google Business Profile share link
  gmbUrl: "https://share.google/dWVNCCsFotb4Zpspp",
  // No-API-key embeddable map centered on the address above
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Redline+Autotech%2C+386%2F76%2C+Opposite+Vasant+Square+Mall%2C+Masoodpur%2C+Sector+D%2C+Vasant+Kunj%2C+New+Delhi%2C+Delhi+110070&output=embed",
  socials: {
    instagram: "https://instagram.com/redlineauto.in",
    facebook: "https://facebook.com/redlineauto.in",
    youtube: "",
  },
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
