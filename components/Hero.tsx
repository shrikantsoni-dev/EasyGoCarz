import { siteConfig, whatsappLink } from "@/lib/site-config";
import ScrollReveal from "./ScrollReveal";

const trustBadges = [
  "Free Consultation",
  "Dyno-Verified Tuning",
  "Post-Tune Warranty",
  "Transparent Pricing",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-red/25 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[360px] w-[360px] rounded-full bg-red-dark/20 blur-[110px]"
        aria-hidden="true"
      />

      <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <ScrollReveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-bright/30 bg-red-bright/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-red-bright pulse-ring" />
            ECM &amp; TCM Tuning Specialists
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Unlock Your Engine&rsquo;s True Potential with{" "}
            <span className="text-gradient-red">Precision ECU Tuning</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {siteConfig.name} delivers professional ECM tuning, TCM tuning, ECU remapping,
            transmission rebuild, and engine rebuild services — backed by dyno data,
            not guesswork. More power, smoother shifts, better efficiency, and an
            engine that lasts.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-bright to-red px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-red-dark/30 transition-transform hover:scale-[1.03] sm:text-base"
            >
              Get a Free Consultation
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={whatsappLink("Hi, I want to know more about ECM/TCM tuning and rebuild services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-border-subtle px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-red-bright hover:text-red-bright sm:text-base"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-muted">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 text-red-bright">
                  <path d="M13.5 4.5 6.5 11.5 3 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <HeroGauge />
        </ScrollReveal>
      </div>
    </section>
  );
}

function HeroGauge() {
  return (
    <div className="relative float-y">
      <svg
        viewBox="0 0 480 480"
        className="w-full drop-shadow-[0_25px_60px_rgba(226,19,27,0.25)]"
        role="img"
        aria-label="Illustration of a performance tuning gauge cluster"
      >
        <defs>
          <radialGradient id="dialGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#1e1e23" />
            <stop offset="100%" stopColor="#0b0b0d" />
          </radialGradient>
          <linearGradient id="needleGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff3b3f" />
            <stop offset="100%" stopColor="#a30e14" />
          </linearGradient>
        </defs>

        <circle cx="240" cy="240" r="220" fill="url(#dialGlow)" stroke="#2a2a30" strokeWidth="2" />
        <circle cx="240" cy="240" r="188" fill="none" stroke="#2a2a30" strokeWidth="1.5" />

        {Array.from({ length: 28 }).map((_, i) => {
          const angle = -220 + i * (260 / 27);
          const rad = (angle * Math.PI) / 180;
          const isMajor = i % 3 === 0;
          const r1 = isMajor ? 160 : 172;
          const r2 = 188;
          const x1 = 240 + r1 * Math.cos(rad);
          const y1 = 240 + r1 * Math.sin(rad);
          const x2 = 240 + r2 * Math.cos(rad);
          const y2 = 240 + r2 * Math.sin(rad);
          const isRedZone = i > 21;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isRedZone ? "#ff3b3f" : "#66656c"}
              strokeWidth={isMajor ? 3 : 1.5}
              strokeLinecap="round"
            />
          );
        })}

        <text x="240" y="150" textAnchor="middle" fill="#a3a2a8" fontSize="14" letterSpacing="2" fontFamily="var(--font-sans)">
          RPM x1000
        </text>

        <g className="needle-sweep">
          <polygon points="240,240 234,246 240,120 246,246" fill="url(#needleGrad)" />
          <circle cx="240" cy="240" r="16" fill="#0b0b0d" stroke="#ff3b3f" strokeWidth="3" />
        </g>

        <rect x="150" y="330" width="180" height="46" rx="10" fill="#131316" stroke="#2a2a30" />
        <text x="240" y="359" textAnchor="middle" fill="#ff3b3f" fontSize="18" fontWeight="700" fontFamily="var(--font-display)">
          DATA-DRIVEN TUNE
        </text>

        <rect x="60" y="60" width="110" height="36" rx="18" fill="#131316" stroke="#2a2a30" />
        <text x="115" y="83" textAnchor="middle" fill="#f2f1ef" fontSize="13" fontWeight="600" fontFamily="var(--font-sans)">
          ECU Remap
        </text>

        <rect x="310" y="60" width="110" height="36" rx="18" fill="#131316" stroke="#2a2a30" />
        <text x="365" y="83" textAnchor="middle" fill="#f2f1ef" fontSize="13" fontWeight="600" fontFamily="var(--font-sans)">
          Dyno Tested
        </text>
      </svg>
    </div>
  );
}
