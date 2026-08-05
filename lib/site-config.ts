// Central place for business details. Replace the placeholders below with
// your real details — every component on the site reads from here.
export const siteConfig = {
  name: "Redline Autotech",
  domain: "redlineauto.in",
  url: "https://redlineauto.in",
  tagline: "ECM & TCM Tuning, ECU Remapping, Engine & Transmission Rebuild",
  description:
    "Redline Autotech specialises in precision ECM tuning, TCM tuning, ECU remapping, transmission rebuild, and engine rebuild services. Dyno-tested, data-backed tuning for real power gains, smoother shifts, and a longer engine life.",
  phone: "+919555999843",
  phoneDisplay: "+91 95559 99843",
  whatsapp: "919555999843",
  email: "sachin@redlineauto.in",
  city: "New Delhi",
  serviceArea: "New Delhi NCR",
  addressLine: "386/76, Opp. Vasant Square Mall, Vasant Kunj, New Delhi, 110070",
  // Google Business Profile share link
  gmbUrl: "https://share.google/dWVNCCsFotb4Zpspp",
  // No-API-key embeddable map centered on the address above
  mapEmbedUrl:
    "https://maps.google.com/maps?q=386%2F76%2C+Opp.+Vasant+Square+Mall%2C+Vasant+Kunj%2C+New+Delhi%2C+110070&output=embed",
  socials: {
    instagram: "https://instagram.com/redlineauto.in",
    facebook: "https://facebook.com/redlineauto.in",
    youtube: "",
  },
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
