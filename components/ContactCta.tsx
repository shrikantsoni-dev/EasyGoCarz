"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { pushToDataLayer } from "@/lib/gtm";
import ScrollReveal from "./ScrollReveal";

const serviceOptions = [
  "ECM Tuning",
  "TCM Tuning",
  "ECU Remapping",
  "Transmission Rebuild",
  "Engine Rebuild",
  "Not sure yet",
];

export default function ContactCta() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [message, setMessage] = useState("");

  const buildMessage = () =>
    [
      `Hi ${siteConfig.name}, I'd like a free consultation.`,
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      `Car: ${car || "-"}`,
      `Service: ${service}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pushToDataLayer({
      event: "form_submit",
      form_name: "contact_cta",
      service_interest: service,
    });
    window.open(whatsappLink(buildMessage()), "_blank", "noopener,noreferrer");
    router.push("/thank-you");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background-alt py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-red/10 blur-[140px]"
        aria-hidden="true"
      />
      <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-5">
        <ScrollReveal className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-bright">
            Get In Touch
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Get Your Car Sorted?
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Share a few details about your car and what you&apos;re looking for. We&apos;ll
            get back to you with honest advice, even if that advice is
            &ldquo;you don&rsquo;t need this yet.&rdquo;
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface p-4 transition-colors hover:border-red-bright/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 text-red-bright">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4.5 3h2.6l1.2 3.6-1.7 1.3a10.5 10.5 0 0 0 4.5 4.5l1.3-1.7 3.6 1.2v2.6a1.5 1.5 0 0 1-1.6 1.5A13.5 13.5 0 0 1 3 5.6 1.5 1.5 0 0 1 4.5 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-xs text-muted">Call us</p>
                <p className="text-sm font-semibold text-foreground">{siteConfig.phoneDisplay}</p>
              </div>
            </a>
            <a
              href={whatsappLink("Hi, I want to know more about ECM/TCM tuning and rebuild services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface p-4 transition-colors hover:border-red-bright/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 text-red-bright">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 2.5A7.5 7.5 0 0 0 3.4 14L2.5 17.5l3.6-.94A7.5 7.5 0 1 0 10 2.5Z" />
                </svg>
              </span>
              <div>
                <p className="text-xs text-muted">WhatsApp</p>
                <p className="text-sm font-semibold text-foreground">Chat with us instantly</p>
              </div>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 rounded-xl border border-border-subtle bg-surface p-4 transition-colors hover:border-red-bright/40"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 text-red-bright">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 5h14v10H3V5Zm0 0 7 6 7-6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <p className="text-xs text-muted">Email</p>
                <p className="text-sm font-semibold text-foreground">{siteConfig.email}</p>
              </div>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground/90">
                  Your Name
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-red-bright"
                  placeholder="Rohan Sharma"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-foreground/90">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-red-bright"
                  placeholder="98765 43210"
                />
              </div>
              <div>
                <label htmlFor="car" className="text-sm font-medium text-foreground/90">
                  Car Make &amp; Model
                </label>
                <input
                  id="car"
                  value={car}
                  onChange={(e) => setCar(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-red-bright"
                  placeholder="e.g. VW Polo GT TSI"
                />
              </div>
              <div>
                <label htmlFor="service" className="text-sm font-medium text-foreground/90">
                  Service Needed
                </label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-red-bright"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/90">
                  Tell us a bit more (optional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="mt-1.5 w-full resize-none rounded-lg border border-border-subtle bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-red-bright"
                  placeholder="What symptoms are you noticing, or what result are you hoping for?"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-bright to-red px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-dark/30 transition-transform hover:scale-[1.01] sm:text-base"
            >
              Send via WhatsApp
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <p className="mt-3 text-center text-xs text-muted">
              This opens WhatsApp with your details pre filled. Nothing is sent until you hit send there.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
