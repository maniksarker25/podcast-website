import type { NavItem } from "@/types";

/**
 * Site-wide settings. Contact addresses and store links live here so they can be
 * changed in one place. A store link set to `null` renders as "Coming soon".
 */
export const siteConfig = {
  name: "Preach Radio",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://preachradio.com",
  tagline: "Listen. Watch. Go live.",
  description:
    "Preach Radio brings radio stations, podcasts, video and live broadcasts together in one app — for listeners, creators and stations.",
  contact: {
    supportEmail: "support@preachradio.com",
    creatorsEmail: "creators@preachradio.com",
    privacyEmail: "privacy@preachradio.com",
  },
  appLinks: {
    appStore: null as string | null,
    googlePlay: null as string | null,
  },
  nav: [
    { label: "Home", href: "/" },
    // { label: "About", href: "/about" },
    // { label: "Creators", href: "/creators" },
    // { label: "Support", href: "/support" },
  ] satisfies NavItem[],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ] satisfies NavItem[],
};
