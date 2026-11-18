"use client";

import { Cancel01Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useDeferredValue, useId, useMemo, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqCategories } from "@/content/faq";
import { cn } from "@/lib/utils";

const normalise = (s: string) => s.toLowerCase().normalize("NFKD");

/**
 * Help-centre search and FAQ. Filtering happens entirely in the browser over the
 * static FAQ content — nothing is sent anywhere.
 */
export function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const deferred = useDeferredValue(query);
  const inputId = useId();

  const groups = useMemo(() => {
    const q = normalise(deferred.trim());
    return faqCategories
      .filter((c) => !category || c.id === category)
      .map((c) => ({
        ...c,
        items: q ? c.items.filter((i) => normalise(`${i.question} ${i.answer}`).includes(q)) : c.items,
      }))
      .filter((c) => c.items.length > 0);
  }, [deferred, category]);

  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div>
      {/* Search */}
      <div className="relative z-10 mx-auto -mt-8 max-w-2xl">
        <label htmlFor={inputId} className="sr-only">
          Search help articles
        </label>
        <div className="flex h-16 items-center gap-3 rounded-2xl border border-border bg-card px-5 shadow-2xl shadow-black/10 focus-within:border-primary/50">
          <HugeiconsIcon icon={Search01Icon} className="size-5 text-muted-foreground" />
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for answers — e.g. “go live”, “password”, “report”"
            className="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="text-muted-foreground hover:text-foreground">
              <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
            </button>
          )}
        </div>
      </div>

      {/* Topics */}
      <div className="mt-14">
        <h2 className="sr-only">Help topics</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {faqCategories.map((c) => {
            const active = category === c.id;
            return (
              <li key={c.id}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(active ? null : c.id)}
                  className={cn(
                    "group flex h-full w-full flex-col items-start rounded-2xl border p-5 text-left transition-all duration-200",
                    active
                      ? "border-primary bg-primary/5 shadow-[0_0_0_1px_var(--primary)]"
                      : "border-border bg-card hover:-translate-y-0.5 hover:border-foreground/20"
                  )}
                >
                  <span
                    className={cn(
                      "grid size-10 place-items-center rounded-xl transition-colors",
                      active ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                    )}
                  >
                    <HugeiconsIcon icon={c.icon} className="size-5" />
                  </span>
                  <span className="mt-4 font-heading text-lg leading-tight font-semibold">{c.title}</span>
                  <span className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.description}</span>
                  <span className="mt-auto pt-3 text-xs font-medium text-primary">{c.items.length} articles</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* FAQ */}
      <div id="faq" className="mt-16 scroll-mt-24">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {total} {total === 1 ? "answer" : "answers"}
            {category && (
              <>
                {" · "}
                <button type="button" onClick={() => setCategory(null)} className="font-medium text-primary hover:underline">
                  Show all topics
                </button>
              </>
            )}
          </p>
        </div>

        {groups.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-border p-10 text-center">
            <p className="font-semibold">No answers match “{query}”.</p>
            <p className="mt-1 text-sm text-muted-foreground">Try a different word, or contact our support team below.</p>
          </div>
        ) : (
          <div className="mt-8 space-y-10">
            {groups.map((g) => (
              <section key={g.id} id={g.id} className="grid scroll-mt-24 gap-4 lg:grid-cols-[220px_1fr] lg:gap-10">
                <h3 className="flex items-center gap-2.5 self-start font-heading text-xl font-semibold lg:sticky lg:top-24 lg:pt-3">
                  <HugeiconsIcon icon={g.icon} className="size-5 text-primary" />
                  {g.title}
                </h3>
                <Accordion type="multiple" className="rounded-2xl bg-card">
                  {g.items.map((item) => (
                    <AccordionItem key={item.question} value={item.question} className="border-border data-open:bg-transparent">
                      <AccordionTrigger className="px-5 py-4 text-[15px] font-semibold hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-1 text-[15px] leading-relaxed text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
