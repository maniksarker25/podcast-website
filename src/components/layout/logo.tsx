import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * The brand logo. Its "RADIO" lettering is white, so in light mode it sits on a
 * small charcoal tile (the app's own colour) instead of disappearing.
 */
export function Logo({ className, size = "md" }: { className?: string; size?: "md" | "lg" }) {
  return (
    <Link
      href="/"
      aria-label="Preach Radio — home"
      className={cn(
        "inline-flex shrink-0 items-center rounded-xl bg-app px-2.5 py-1.5 transition-opacity hover:opacity-90 dark:bg-transparent dark:px-0 dark:py-0",
        className
      )}
    >
      <Image
        src="/favicon.png"
        alt="Preach Radio"
        width={195}
        height={124}
        priority
        className={cn("w-auto", size === "lg" ? "h-12" : "h-8")}
      />
    </Link>
  );
}
