import { LegalDocumentView } from "@/components/legal/legal-document";
import { getLegalDocument } from "@/lib/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "The terms that apply when you listen, watch, join live sessions or publish as a creator on Preach Radio.",
  path: "/terms",
});

export default async function TermsPage() {
  const doc = await getLegalDocument("terms");
  return <LegalDocumentView doc={doc} />;
}
