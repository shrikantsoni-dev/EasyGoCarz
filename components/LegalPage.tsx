import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyMobileCta from "./StickyMobileCta";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col bg-background pb-16 lg:pb-0">
      <Header />
      <main id="main-content" className="flex-1">
        <article className="container-px mx-auto max-w-3xl py-16 sm:py-20">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
          <div className="mt-10 space-y-8 text-sm leading-7 text-muted [&_a]:text-red-bright [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:space-y-1.5">
            {children}
          </div>
        </article>
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
