import { ArrowDown01Icon, Calendar03Icon, File01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Eyebrow } from "@/components/shared/section";
import { siteConfig } from "@/config/site";
import { formatLegalDate } from "@/lib/legal";
import type { LegalDocument } from "@/types";
import { LegalBlockView } from "./legal-blocks";

function TableOfContents({ doc }: { doc: LegalDocument }) {
  const links = doc.sections.map((s) => (
    <li key={s.id}>
      <a
        href={`#${s.id}`}
        className="block rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        {s.title}
      </a>
    </li>
  ));
  return (
    <>
      {/* Mobile: collapsible */}
      <details className="group rounded-2xl border border-border bg-card lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3.5 text-sm font-semibold">
          On this page
          <HugeiconsIcon icon={ArrowDown01Icon} className="size-4 transition-transform group-open:rotate-180" />
        </summary>
        <ol className="border-t border-border p-2">{links}</ol>
      </details>
      {/* Desktop: sticky */}
      <nav aria-label="On this page" className="sticky top-24 hidden max-h-[calc(100dvh-8rem)] overflow-y-auto lg:block">
        <p className="px-3 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">On this page</p>
        <ol className="mt-3 space-y-0.5">{links}</ol>
      </nav>
    </>
  );
}

/** Shared layout for Terms, Privacy and any future legal page — rendered from data. */
export function LegalDocumentView({ doc }: { doc: LegalDocument }) {
  const other = siteConfig.legal.find((l) => l.href !== `/${doc.slug}`);
  return (
    <>
      <header className="border-b border-border bg-surface">
        <div className="container-page py-16 sm:py-20">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 font-heading text-5xl leading-none font-bold tracking-tight sm:text-6xl">{doc.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <HugeiconsIcon icon={Calendar03Icon} className="size-4" />
              Last updated <time dateTime={doc.lastUpdated}>{formatLegalDate(doc.lastUpdated)}</time>
            </span>
            <span className="inline-flex items-center gap-2">
              <HugeiconsIcon icon={File01Icon} className="size-4" />
              {doc.sections.length} sections
            </span>
          </div>
          <p className="mt-8 max-w-3xl rounded-2xl border border-border bg-card p-5 leading-relaxed text-foreground/85">
            <span className="font-semibold text-foreground">In short: </span>
            {doc.summary}
          </p>
        </div>
      </header>

      <div className="container-page grid gap-10 py-14 lg:grid-cols-[260px_1fr] lg:gap-16 lg:py-20">
        <aside>
          <TableOfContents doc={doc} />
        </aside>
        <article className="max-w-3xl min-w-0">
          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 border-b border-border py-9 first:pt-0 last:border-0">
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">{section.title}</h2>
              <div className="mt-5 space-y-4">
                {section.blocks.map((block, i) => (
                  <LegalBlockView key={i} block={block} />
                ))}
              </div>
            </section>
          ))}
          <footer className="mt-6 flex flex-col gap-4 rounded-2xl bg-surface-2 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Questions?{" "}
              <a href={`mailto:${siteConfig.contact.supportEmail}`} className="font-medium text-foreground underline underline-offset-4">
                {siteConfig.contact.supportEmail}
              </a>
            </p>
            {other && (
              <Link href={other.href} className="text-sm font-semibold text-primary hover:underline">
                Read our {other.label} →
              </Link>
            )}
          </footer>
        </article>
      </div>
    </>
  );
}
