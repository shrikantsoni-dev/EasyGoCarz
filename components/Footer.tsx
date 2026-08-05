import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const serviceLinks = [
  "ECM Tuning",
  "TCM Tuning",
  "ECU Remapping",
  "Transmission Rebuild",
  "Engine Rebuild",
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background pb-24 pt-14 lg:pb-14">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#top" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-red-bright to-red-dark font-display text-lg font-bold text-white">
                R
              </span>
              <span className="font-display text-lg font-bold tracking-wide text-foreground">
                REDLINE<span className="text-red-bright">AUTO</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted">
              Precision ECM &amp; TCM tuning, ECU remapping, and full engine &amp;
              transmission rebuilds — done right, explained clearly.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-muted transition-colors hover:text-red-bright">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              <li><a href="#why-us" className="text-sm text-muted transition-colors hover:text-red-bright">Why Choose Us</a></li>
              <li><a href="#process" className="text-sm text-muted transition-colors hover:text-red-bright">Our Process</a></li>
              <li><a href="#faq" className="text-sm text-muted transition-colors hover:text-red-bright">FAQ</a></li>
              <li><a href="#contact" className="text-sm text-muted transition-colors hover:text-red-bright">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>{siteConfig.addressLine}</li>
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
          <p className="text-xs text-muted">{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  );
}
