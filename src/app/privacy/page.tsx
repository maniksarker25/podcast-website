import { LegalDocumentView } from "@/components/legal/legal-document";
import { getLegalDocument } from "@/lib/legal";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "What information Preach Radio collects, how we use it, and the choices you have.",
  path: "/privacy",
});

export default async function PrivacyPage() {
  const doc = await getLegalDocument("privacy");
  return <LegalDocumentView doc={doc} />;
}
