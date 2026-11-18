import { cacheLife } from "next/cache";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "./logo";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Get the app", href: "/#download" },
    ],
  },
  {
    title: "Creators",
    links: [
      { label: "For creators", href: "/creators" },
      { label: "Creator insights", href: "/creators#insights" },
      { label: "Get started", href: "/creators#get-started" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Support center", href: "/support" },
      { label: "FAQ", href: "/support#faq" },
      { label: "Contact us", href: "/support#contact" },
    ],
  },
];

/** The current year, cached so pages stay fully prerendered (refreshes daily). */
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.4fr_2fr]">
        <div className="max-w-sm space-y-5">
          <Logo />
          <p className="text-sm leading-relaxed text-muted-foreground">{siteConfig.description}</p>
          <a
            href={`mailto:${siteConfig.contact.supportEmail}`}
            className="inline-block text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
          >
            {siteConfig.contact.supportEmail}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">{col.title}</h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {siteConfig.legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
