// Central place for business details. Replace the placeholders below with
// your real details — every component on the site reads from here.
export const siteConfig = {
  name: "Redline Auto",
  domain: "redlineauto.in",
  url: "https://redlineauto.in",
  tagline: "ECM & TCM Tuning, ECU Remapping, Engine & Transmission Rebuild",
  description:
    "Redline Auto specialises in precision ECM tuning, TCM tuning, ECU remapping, transmission rebuild, and engine rebuild services. Dyno-tested, data-backed tuning for real power gains, smoother shifts, and a longer engine life.",
  // TODO: replace with your real phone number (with country code, no spaces for tel: links)
  phone: "+91XXXXXXXXXX",
  phoneDisplay: "+91 XXXXX XXXXX",
  // TODO: replace with your real WhatsApp number (with country code, no + or spaces)
  whatsapp: "91XXXXXXXXXX",
  // TODO: replace with your business email
  email: "info@redlineauto.in",
  // TODO: replace with your real service area / city
  city: "your city",
  serviceArea: "Pan-India",
  addressLine: "[Workshop address — add your street, city, state, PIN]",
  mapEmbedUrl: "",
  socials: {
    instagram: "https://instagram.com/redlineauto.in",
    facebook: "https://facebook.com/redlineauto.in",
    youtube: "",
  },
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
