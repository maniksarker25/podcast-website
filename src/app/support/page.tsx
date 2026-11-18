import { Eyebrow } from "@/components/shared/section";
import { ContactSection } from "@/components/support/contact-section";
import { FaqExplorer } from "@/components/support/faq-explorer";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Support",
  description:
    "Help with your Preach Radio account, listening and streaming, creating and broadcasting, live sessions and community safety.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div aria-hidden className="glow-brand pointer-events-none absolute top-[-60%] left-1/2 h-[420px] w-[760px] -translate-x-1/2 opacity-40" />
        <div className="container-page relative pt-16 pb-20 text-center sm:pt-20 sm:pb-24">
          <div data-reveal className="flex justify-center">
            <Eyebrow>Support center</Eyebrow>
          </div>
          <h1 data-reveal className="mx-auto mt-5 max-w-3xl font-heading text-5xl leading-[0.95] font-bold tracking-tight text-balance sm:text-7xl">
            How can we help?
          </h1>
          <p data-reveal className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Answers for listeners, creators and stations — from your first sign-in to your hundredth live broadcast.
          </p>
        </div>
      </section>
      <div className="container-page pb-20 sm:pb-28">
        <FaqExplorer />
      </div>
      <ContactSection />
    </>
  );
}
