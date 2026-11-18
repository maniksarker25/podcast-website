import Link from "next/link";
import { HeaderShell } from "./header-shell";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <HeaderShell>
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden md:block">
          <NavLinks />
        </nav>
        <div className="flex items-center gap-1.5">
          <ThemeToggle className="hidden md:grid" />
          <Link
            href="/#download"
            className="hidden h-9 items-center rounded-full bg-foreground px-4 text-sm font-semibold text-background transition-opacity hover:opacity-85 md:inline-flex"
          >
            Get the app
          </Link>
          <MobileNav />
        </div>
      </div>
    </HeaderShell>
  );
}
