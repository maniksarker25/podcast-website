import type { IconSvgElement } from "@hugeicons/react";

export type NavItem = { label: string; href: string };

/** A Hugeicons icon definition (from @hugeicons/core-free-icons). */
export type Icon = IconSvgElement;

export type Feature = {
  icon: Icon;
  title: string;
  description: string;
};

// ---------------------------------------------------------------------------
// Legal documents — rendered from data so the content can later come from a CMS.
// ---------------------------------------------------------------------------

export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "subheading"; text: string }
  | { type: "callout"; text: string };

export type LegalSection = {
  /** Anchor id used by the table of contents. */
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  slug: "terms" | "privacy";
  title: string;
  /** One-paragraph plain-language summary shown above the document. */
  summary: string;
  /** ISO date (YYYY-MM-DD). */
  lastUpdated: string;
  sections: LegalSection[];
};

// ---------------------------------------------------------------------------
// Support
// ---------------------------------------------------------------------------

export type FaqItem = { question: string; answer: string };

export type FaqCategory = {
  id: string;
  title: string;
  description: string;
  icon: Icon;
  items: FaqItem[];
};
