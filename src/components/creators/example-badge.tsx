import { cn } from "@/lib/utils";

/** Marks dashboard previews as illustrative, so the numbers are never read as real claims. */
export function ExampleBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] text-muted-foreground uppercase",
        className
      )}
    >
      Example data
    </span>
  );
}
