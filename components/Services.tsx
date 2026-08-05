import ScrollReveal from "./ScrollReveal";

type Service = {
  id: string;
  title: string;
  summary: string;
  points: string[];
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    id: "ecm-tuning",
    title: "ECM Tuning",
    summary:
      "Your Engine Control Module (ECM) decides how your engine breathes, fuels, and fires — get it wrong and you lose power, efficiency, and reliability. We recalibrate fuel maps, ignition timing, boost control, and torque limiters using real data from your car, not a generic file pulled off the internet.",
    points: [
      "Custom fuel & ignition mapping for your exact engine",
      "Boost and torque limiter optimisation",
      "Improved throttle response and drivability",
      "Safe, conservative margins that protect engine internals",
    ],
    icon: (
      <path
        d="M8 20a12 12 0 1 1 24 0v6a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-6Z M18 30v6 M22 30v10 M26 30v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "tcm-tuning",
    title: "TCM Tuning",
    summary:
      "A powerful engine is wasted on a lazy gearbox. We tune the Transmission Control Module (TCM) to sharpen shift points, firm up clutch pressure, and match shift behaviour to your new power delivery — so every gear change feels intentional, not delayed.",
    points: [
      "Faster, firmer, and smarter shift logic",
      "Shift points recalibrated to match your ECM tune",
      "Reduced shift shock and clutch slip",
      "Available for automatic, DSG/DCT, and CVT transmissions",
    ],
    icon: (
      <path
        d="M20 6v10 M20 26v10 M6 20h10 M26 20h10 M13 13l7 7 M27 27l-7-7 M27 13l-7 7 M13 27l7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "ecu-remapping",
    title: "ECU Remapping",
    summary:
      "ECU remapping goes beyond a single parameter — it's a full rewrite of your car's software calibration for real, measurable gains in power, torque, and fuel efficiency. Every remap is built around your car's specification, fuel quality, and how you actually drive.",
    points: [
      "Stage-based tuning options to match your goals",
      "Read-write-verify process with pre-tune diagnostics",
      "Fuel efficiency and performance remaps available separately",
      "Original file backup kept for full reversibility",
    ],
    icon: (
      <path
        d="M20 8v6 M20 26v6 M8 20h6 M26 20h6 M12.5 12.5l4.2 4.2 M23.3 23.3l4.2 4.2 M27.5 12.5l-4.2 4.2 M16.7 23.3l-4.2 4.2 M20 15a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "transmission-rebuild",
    title: "Transmission Rebuild",
    summary:
      "Slipping gears, delayed engagement, or a transmission that's given up? We strip the gearbox down completely, inspect every clutch pack, band, solenoid, and bearing, and rebuild it with fresh components to factory-plus tolerances — not a quick patch-up.",
    points: [
      "Full teardown, inspection, and component-level diagnosis",
      "OEM-grade or upgraded internals depending on your needs",
      "Fresh seals, filters, and fluid as standard",
      "Post-rebuild road testing before handover",
    ],
    icon: (
      <path
        d="M12 20a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z M20 10v2 M20 28v2 M10 20h2 M28 20h2 M13.5 13.5l1.4 1.4 M25.1 25.1l1.4 1.4 M26.5 13.5l-1.4 1.4 M14.9 25.1l-1.4 1.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    id: "engine-rebuild",
    title: "Engine Rebuild",
    summary:
      "When an engine has worn past what a repair can fix — low compression, bearing knock, oil consumption, or overheating damage — a full rebuild is what actually solves it. We machine, measure, and rebuild your engine from the block up, so it runs like new, not like a temporary fix.",
    points: [
      "Complete strip-down with precision machining where needed",
      "New bearings, gaskets, rings, and wear components",
      "Compression and leak-down testing before reassembly",
      "Break-in guidance to protect your rebuilt engine",
    ],
    icon: (
      <path
        d="M10 26V14l6-4h8l6 4v12a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2Z M16 10v4 M24 10v4 M14 30v2 M26 30v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-background-alt py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-bright">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tuning &amp; Rebuild Services Built Around Your Car
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            From a precise ECM recalibration to a ground-up engine rebuild, every
            service starts with proper diagnostics — not assumptions.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal
              key={service.id}
              delay={(i % 3) * 100}
              className={`group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-red-bright/40 ${
                i === services.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0"
                aria-hidden="true"
              />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red/10 text-red-bright">
                <svg viewBox="0 0 40 40" width="24" height="24" fill="none" aria-hidden="true">
                  {service.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-muted">{service.summary}</p>
              <ul className="mt-4 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-foreground/90">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-1 shrink-0 text-red-bright"
                      aria-hidden="true"
                    >
                      <path d="M13.5 4.5 6.5 11.5 3 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-red-bright"
              >
                Ask about {service.title}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
