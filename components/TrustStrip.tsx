const items = [
  {
    label: "Diagnostic-First Approach",
    icon: (
      <path d="M4 12h4l2-6 4 12 2-6h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "Original File Backup",
    icon: (
      <path d="M12 3v10m0 0-3.5-3.5M12 13l3.5-3.5M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "Written, Transparent Quotes",
    icon: (
      <path d="M6 3h9l3 3v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z M9 12h6M9 16h6M9 8h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "Post-Service Support",
    icon: (
      <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function TrustStrip() {
  return (
    <div className="border-y border-border-subtle bg-surface/60">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-2 gap-y-6 py-8 sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 text-red-bright">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                {item.icon}
              </svg>
            </span>
            <span className="text-sm font-medium text-foreground/90">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
