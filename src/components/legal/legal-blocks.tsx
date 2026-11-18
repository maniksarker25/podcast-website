import { InformationCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { LegalBlock } from "@/types";

/** Renders one block of a legal document. New block types are added here once. */
export function LegalBlockView({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="leading-[1.8] text-foreground/85">{block.text}</p>;
    case "subheading":
      return <h3 className="pt-2 font-heading text-xl font-semibold tracking-tight">{block.text}</h3>;
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List className={block.ordered ? "list-decimal space-y-2.5 pl-5" : "space-y-2.5"}>
          {block.items.map((item) => (
            <li key={item} className={block.ordered ? "pl-1 leading-[1.75] text-foreground/85" : "flex gap-3 leading-[1.75] text-foreground/85"}>
              {!block.ordered && <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-primary" />}
              <span>{item}</span>
            </li>
          ))}
        </List>
      );
    }
    case "callout":
      return (
        <aside className="flex gap-3 rounded-2xl border border-border bg-surface-2 p-4 text-sm leading-relaxed">
          <HugeiconsIcon icon={InformationCircleIcon} className="mt-0.5 size-5 shrink-0 text-primary" />
          <p>{block.text}</p>
        </aside>
      );
  }
}
