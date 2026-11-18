import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Pill CTA used across the marketing pages. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverted";
  arrow?: boolean;
  className?: string;
}) {
  const external = /^(https?:|mailto:)/.test(href);
  const cls = cn(
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all duration-200 active:translate-y-px",
    variant === "primary" &&
      "bg-primary text-primary-foreground shadow-[0_10px_30px_-12px_var(--primary)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-14px_var(--primary)]",
    variant === "secondary" && "border border-border bg-card text-foreground hover:border-foreground/25 hover:bg-secondary",
    variant === "ghost" && "text-foreground hover:bg-secondary",
    variant === "inverted" && "bg-white text-[#141418] hover:bg-white/90",
    className
  );
  const content = (
    <>
      {children}
      {arrow && <HugeiconsIcon icon={ArrowRight01Icon} className="size-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );
  return external ? (
    <a href={href} className={cls}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
