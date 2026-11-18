import {
  AboutHero,
  FutureOfMedia,
  HowItConnects,
  MissionVision,
  Principles,
  WhatWeAre,
  WhyWeBuild,
} from "@/components/about/about-sections";
import { DownloadCta } from "@/components/sections/home/download-cta";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About us",
  description:
    "Preach Radio is building a home for the voices that move people — bringing radio, podcasts, video and live broadcasting together for stations, creators and audiences.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhatWeAre />
      <MissionVision />
      <WhyWeBuild />
      <FutureOfMedia />
      <HowItConnects />
      <Principles />
      <DownloadCta />
    </>
  );
}
