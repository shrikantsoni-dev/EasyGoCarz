"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-3.5">
        <Link href="#top" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-red-bright to-red-dark font-display text-lg font-bold text-white">
            R
          </span>
          <span className="font-display text-xl font-bold tracking-wide text-foreground">
            REDLINE<span className="text-red-bright">AUTO</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phone}`}
            className="rounded-full border border-border-subtle px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-red-bright hover:text-red-bright"
          >
            {siteConfig.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-red-bright to-red px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-red-dark/30 transition-transform hover:scale-[1.03]"
          >
            Get Free Consultation
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border-subtle text-foreground lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border-subtle bg-background lg:hidden">
          <nav className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground/90 hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-border-subtle px-4 py-3 text-center text-sm font-semibold text-foreground"
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-red-bright to-red px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
