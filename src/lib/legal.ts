import "server-only";
import { privacyPolicy } from "@/content/legal/privacy";
import { termsAndConditions } from "@/content/legal/terms";
import type { LegalDocument } from "@/types";

const documents: Record<LegalDocument["slug"], LegalDocument> = {
  terms: termsAndConditions,
  privacy: privacyPolicy,
};

/**
 * Loads a legal document. Today it reads the local content files; to move the
 * text into a CMS (for example the dashboard's Terms/Privacy editor), fetch it
 * here and map it to `LegalDocument` — the pages and components stay unchanged.
 */
export async function getLegalDocument(slug: LegalDocument["slug"]): Promise<LegalDocument> {
  return documents[slug];
}

export const formatLegalDate = (iso: string) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
