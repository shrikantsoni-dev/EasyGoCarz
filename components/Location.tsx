import { siteConfig } from "@/lib/site-config";
import ScrollReveal from "./ScrollReveal";

const hours = [
  { day: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
  { day: "Sunday", time: "By appointment" },
];

export default function Location() {
  return (
    <section id="location" className="relative bg-background py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-bright">
            Visit Our Workshop
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Find Us in Vasant Kunj, New Delhi
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Drop by the workshop for a diagnostic check, or call ahead to book a
            slot so your car goes straight onto the ramp.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface">
              <iframe
                src={siteConfig.mapEmbedUrl}
                title={`${siteConfig.name} workshop location on Google Maps`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[320px] w-full border-0 sm:h-[420px]"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5 rounded-2xl border border-border-subtle bg-surface p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 text-red-bright">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 18s6-5.2 6-9.4A6 6 0 0 0 4 8.6C4 12.8 10 18 10 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="10" cy="8.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">Address</p>
                  <address className="mt-1 text-sm not-italic leading-6 text-foreground">
                    386/76, Opp. Vasant Square Mall,
                    <br />
                    Vasant Kunj, New Delhi, 110070
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 text-red-bright">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <circle cx="10" cy="10" r="7.2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M10 5.8V10l2.8 1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="w-full">
                  <p className="text-xs uppercase tracking-wide text-muted">Working Hours</p>
                  <ul className="mt-1 space-y-1">
                    {hours.map((h) => (
                      <li key={h.day} className="flex flex-wrap justify-between gap-x-3 text-sm text-foreground">
                        <span>{h.day}</span>
                        <span className="text-muted">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-2.5 pt-2">
                <a
                  href={siteConfig.gmbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-bright to-red px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 18s6-5.2 6-9.4A6 6 0 0 0 4 8.6C4 12.8 10 18 10 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <circle cx="10" cy="8.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  View on Google Maps
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-border-subtle px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-red-bright hover:text-red-bright"
                >
                  Call {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
