import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    step: "01",
    title: "Book a Consultation",
    desc: "Tell us about your car and what you want to achieve — more power, better shifts, or a fix for an underlying issue. Call, WhatsApp, or fill the form.",
  },
  {
    step: "02",
    title: "Diagnosis & Assessment",
    desc: "We connect diagnostic tools to your ECM/TCM and, where needed, inspect the mechanical condition of the engine or transmission before quoting anything.",
  },
  {
    step: "03",
    title: "Transparent Quote",
    desc: "You receive a clear, written breakdown of the work, timeline, and cost — so there are no surprises once your car is with us.",
  },
  {
    step: "04",
    title: "Tuning / Rebuild Work",
    desc: "Our technicians carry out the ECM tuning, TCM tuning, remap, or rebuild using proper equipment and a documented, checklist-driven process.",
  },
  {
    step: "05",
    title: "Testing & Verification",
    desc: "Every job is verified — data logs reviewed for tunes, compression and leak tests for rebuilds — before your car goes out on a test drive.",
  },
  {
    step: "06",
    title: "Handover & Follow-Up",
    desc: "We walk you through exactly what was done, and stay reachable for follow-up questions or fine-tuning after your first few drives.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-background-alt py-20 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-bright">
            Our Process
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A Straightforward, No-Surprises Workflow
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            Six steps stand between your enquiry and driving away with a properly
            tuned or rebuilt car.
          </p>
        </ScrollReveal>

        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-full border-t border-dashed border-border-subtle lg:block"
            aria-hidden="true"
          />
          {steps.map((s, i) => (
            <ScrollReveal
              key={s.step}
              delay={(i % 3) * 100}
              className="relative rounded-2xl border border-border-subtle bg-surface p-6"
            >
              <span className="font-display text-4xl font-bold text-red-bright/25">
                {s.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
