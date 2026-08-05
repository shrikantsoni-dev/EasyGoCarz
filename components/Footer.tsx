import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const serviceLinks = [
  "ECM Tuning",
  "TCM Tuning",
  "ECU Remapping",
  "Transmission Rebuild",
  "Engine Rebuild",
];

const quickLinks = [
  { href: "/#why-us", label: "Why Choose Us" },
  { href: "/#process", label: "Our Process" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#location", label: "Location" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background pb-24 pt-14 lg:pb-14">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/RedlineLogoCropped.png"
                alt={`${siteConfig.name} logo`}
                width={524}
                height={140}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted">
              Precision ECM &amp; TCM tuning, ECU remapping, and full engine &amp;
              transmission rebuilds — done right, explained clearly.
            </p>
            <a
              href={siteConfig.gmbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-red-bright"
            >
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 18s6-5.2 6-9.4A6 6 0 0 0 4 8.6C4 12.8 10 18 10 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="10" cy="8.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Find us on Google
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link href="/#services" className="text-sm text-muted transition-colors hover:text-red-bright">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted transition-colors hover:text-red-bright">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <address className="not-italic">{siteConfig.addressLine}</address>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-red-bright">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-red-bright">
                  {siteConfig.email}
                </a>
              </li>
              <li>Serving: {siteConfig.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="text-xs text-muted transition-colors hover:text-red-bright">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted transition-colors hover:text-red-bright">
              Terms &amp; Conditions
            </Link>
            <span className="text-xs text-muted">{siteConfig.domain}</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
