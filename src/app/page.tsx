import { Community } from "@/components/sections/home/community";
import { ContentShowcase } from "@/components/sections/home/content-showcase";
import { CreatorSpotlight } from "@/components/sections/home/creator-spotlight";
import { DownloadCta } from "@/components/sections/home/download-cta";
import { FeaturesGrid } from "@/components/sections/home/features-grid";
import { Hero } from "@/components/sections/home/hero";
import { LiveShowcase } from "@/components/sections/home/live-showcase";
import { PlatformIntro } from "@/components/sections/home/platform-intro";
import { RadioShowcase } from "@/components/sections/home/radio-showcase";
import type { Metadata } from "next";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformIntro />
      <RadioShowcase />
      <ContentShowcase />
      <LiveShowcase />
      <CreatorSpotlight />
      <Community />
      <FeaturesGrid />
      <DownloadCta />
    </>
  );
}
