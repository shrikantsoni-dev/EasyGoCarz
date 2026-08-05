"use client";

import { useState } from "react";
import Script from "next/script";

export const faqs = [
  {
    q: "What is the difference between ECM tuning and ECU remapping?",
    a: "ECM tuning usually refers to adjusting specific parameters — like fuel, ignition timing, or boost — for a targeted improvement. ECU remapping is a broader rewrite of the car's software calibration, often combining several parameter changes into one comprehensive tune. In practice we tailor the scope to what your car and goals actually need.",
  },
  {
    q: "Will ECM or TCM tuning void my car's warranty?",
    a: "Modifying factory calibration can affect manufacturer warranty coverage on tuning-related components — this varies by manufacturer and region. We keep a backup of your original file so the ECM/TCM can be reverted to stock, and we're always upfront about this trade-off before we start any work.",
  },
  {
    q: "How do I know if my car needs a transmission rebuild or just a repair?",
    a: "Symptoms like delayed engagement, harsh or slipping shifts, unusual noises, or fluid leaks don't always mean a full rebuild is necessary. We start with diagnostics to identify the actual cause — sometimes it's a solenoid or fluid issue, sometimes the internals genuinely need a rebuild. We'll tell you honestly which one applies.",
  },
  {
    q: "How long does an engine rebuild take?",
    a: "It depends on the extent of the damage and parts availability, but most engine rebuilds take anywhere from a few days to a couple of weeks. We'll give you a realistic timeline in writing once we've inspected the engine, and keep you updated if anything changes.",
  },
  {
    q: "Is TCM tuning available for automatic, DSG/DCT, and CVT transmissions?",
    a: "TCM tuning is available for most automatic and dual-clutch transmissions. CVT tuning options are more limited depending on the platform. Share your car's make, model, and transmission type with us and we'll confirm exactly what's possible before you commit to anything.",
  },
  {
    q: "Do you offer support after the tuning or rebuild is done?",
    a: "Yes. After a tune, we check in to see how the car is behaving on the road and can make small adjustments if needed. After a rebuild, we walk you through what was replaced and remain reachable if any follow-up questions come up.",
  },
  {
    q: "How much does ECM/TCM tuning or a rebuild cost?",
    a: "Costs depend on your vehicle, the scope of work, and parts required — there's no honest one-size-fits-all number. Get in touch with your car's details and we'll get back to you with a clear, written quote before any work begins.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section id="faq" className="relative bg-background py-20 sm:py-28">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-px mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-bright">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Straight Answers Before You Book
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-border-subtle bg-surface"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-foreground sm:text-base">
                    {faq.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`shrink-0 text-red-bright transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-6 text-muted">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
