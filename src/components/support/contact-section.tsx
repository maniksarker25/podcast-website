import { Flag02Icon, Mail01Icon, Mic01Icon, Shield01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ButtonLink } from "@/components/shared/button-link";
import { stagger } from "@/components/shared/section";
import { siteConfig } from "@/config/site";
import type { Icon } from "@/types";

const channels: { icon: Icon; title: string; text: string; action?: { label: string; href: string } }[] = [
  {
    icon: Mail01Icon,
    title: "General support",
    text: "Account, playback or app questions.",
    action: { label: siteConfig.contact.supportEmail, href: `mailto:${siteConfig.contact.supportEmail}` },
  },
  {
    icon: Mic01Icon,
    title: "Creator team",
    text: "Becoming a creator, publishing and going live.",
    action: { label: siteConfig.contact.creatorsEmail, href: `mailto:${siteConfig.contact.creatorsEmail}` },
  },
  {
    icon: Shield01Icon,
    title: "Privacy requests",
    text: "Access, correct or delete your data.",
    action: { label: siteConfig.contact.privacyEmail, href: `mailto:${siteConfig.contact.privacyEmail}` },
  },
  {
    icon: Flag02Icon,
    title: "Report content",
    text: "Use Report on any content or profile in the app — it reaches our team fastest.",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border bg-surface py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div data-reveal>
          <h2 className="font-heading text-4xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-5xl">
            Still need help? Talk to a real person.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
            Tell us what&apos;s happening — include your account email and, if you can, a screenshot. It helps us help you
            faster.
          </p>
          <ButtonLink href={`mailto:${siteConfig.contact.supportEmail}`} className="mt-8" arrow>
            Email the support team
          </ButtonLink>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {channels.map((c, i) => (
            <li key={c.title} data-reveal style={stagger(i)} className="flex flex-col rounded-2xl border border-border bg-card p-5">
              <HugeiconsIcon icon={c.icon} className="size-5 text-primary" />
              <p className="mt-4 font-heading text-xl font-semibold">{c.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              {c.action && (
                <a
                  href={c.action.href}
                  className="mt-auto pt-4 text-sm font-medium break-all text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary"
                >
                  {c.action.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
