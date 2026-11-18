import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
  bleed = false,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  /** Skip the page container (for full-width backgrounds that set their own). */
  bleed?: boolean;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-20 sm:py-28", className)}>
      {bleed ? children : <div className="container-page">{children}</div>}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase",
        className
      )}
    >
      <span aria-hidden className="h-px w-6 bg-primary/60" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div
      data-reveal
      className={cn(
        "max-w-2xl space-y-4",
        align === "center" && "mx-auto text-center [&_p:first-child]:justify-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className="font-heading text-4xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-5xl">
        {title}
      </Heading>
      {description && (
        <p className="text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">{description}</p>
      )}
    </div>
  );
}

/** Staggered reveal: `style={stagger(i)}` on items of a list (offsets the scroll range). */
export const stagger = (index: number, step = 4): CSSProperties =>
  ({ "--reveal-start": `${Math.min(index * step, 24)}%` }) as CSSProperties;
