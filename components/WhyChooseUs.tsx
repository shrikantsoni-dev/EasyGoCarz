import { siteConfig } from "@/lib/site-config";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    title: "Diagnostics Before Decisions",
    desc: "We read your ECM/TCM data and inspect mechanical condition before recommending any tune or rebuild — no cookie-cutter files, no guesswork.",
  },
  {
    title: "Original File Backups",
    desc: "Every ECU tune starts with a full backup of your original file, so your car can always be returned to stock condition if you ever need it.",
  },
  {
    title: "Built for Your Fuel & Climate",
    desc: "Maps are calibrated for real-world conditions — fuel quality, altitude, and load — not a generic tune built for a different market.",
  },
  {
    title: "Clear, Honest Pricing",
    desc: "You get a written quote before any work begins. No hidden charges, no surprise add-ons once your car is on the lift.",
  },
  {
    title: "Post-Service Support",
    desc: "Tuning and rebuilds are followed up with a check-in and support window, so any fine-tuning after your first few drives is covered.",
  },
  {
    title: "Every Part Explained",
    desc: "In a rebuild, we show you what was worn and why it's being replaced — you approve the work, you understand the invoice.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-background py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-10">
          <ScrollReveal className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-bright">
              Why {siteConfig.name}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Tuning Is Technical. Trust Shouldn&rsquo;t Be Optional.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              ECM and TCM tuning directly affects how safely and reliably your car
              runs. That&rsquo;s why our process is built around transparency at
              every step — from the first diagnostic read to the final test drive.
            </p>
            <div className="mt-8 rounded-2xl border border-red-bright/20 bg-gradient-to-br from-red/10 to-transparent p-5">
              <p className="text-sm leading-6 text-foreground/90">
                &ldquo;A tune is only as good as the diagnosis behind it.&rdquo;
                That principle guides every ECM, TCM, remap, and rebuild job that
                comes through our workshop.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
            {reasons.map((reason, i) => (
              <ScrollReveal
                key={reason.title}
                delay={(i % 2) * 100}
                className="rounded-2xl border border-border-subtle bg-surface p-5 transition-colors hover:border-red-bright/40"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red/10 text-sm font-bold text-red-bright">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{reason.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
