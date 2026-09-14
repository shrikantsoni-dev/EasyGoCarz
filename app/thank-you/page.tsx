"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCta from "@/components/StickyMobileCta";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { pushToDataLayer } from "@/lib/gtm";

export default function ThankYouPage() {
  useEffect(() => {
    pushToDataLayer({
      event: "generate_lead",
      form_name: "contact_cta",
      page_path: "/thank-you",
    });
  }, []);

  return (
    <div className="flex flex-1 flex-col bg-background pb-16 lg:pb-0">
      <Header />
      <main id="main-content" className="flex-1">
        <section className="container-px mx-auto flex max-w-2xl flex-col items-center py-24 text-center sm:py-32">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red/10 text-red-bright">
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4 10.5 8 14l8-8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Thanks, we&apos;ve got your details.
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">
            Our team at {siteConfig.name} will reach out to you shortly. If it&apos;s
            urgent, call or message us directly and we&apos;ll pick up right away.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${siteConfig.phone}`}
              className="rounded-full bg-gradient-to-r from-red-bright to-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-dark/30 transition-transform hover:scale-[1.01]"
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={whatsappLink("Hi, I just submitted the contact form on your website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border-subtle bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-red-bright/40"
            >
              Chat on WhatsApp
            </a>
          </div>

          <Link
            href="/"
            className="mt-8 text-sm font-medium text-muted transition-colors hover:text-red-bright"
          >
            Back to homepage
          </Link>
        </section>
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
