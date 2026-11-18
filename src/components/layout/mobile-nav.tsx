"use client";

import { ArrowRight01Icon, Menu02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { isActivePath } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="grid size-10 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary md:hidden"
      >
        <HugeiconsIcon icon={Menu02Icon} className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm border-l border-border bg-background p-0">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">Site navigation</SheetDescription>
        <nav aria-label="Mobile" className="flex h-full flex-col px-6 pt-20 pb-8">
          <ul className="space-y-1">
            {siteConfig.nav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group flex items-center justify-between rounded-xl px-3 py-3 font-heading text-3xl font-semibold tracking-tight transition-colors",
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      className={cn("size-5 transition-transform group-hover:translate-x-1", active ? "text-primary" : "opacity-40")}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto space-y-4 border-t border-border pt-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              Appearance
              <ThemeToggle />
            </div>
            <Link
              href="/#download"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get the app
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
