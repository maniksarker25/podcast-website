import { CreatorHero } from "@/components/creators/creator-hero";
import { EngagementAndProfile } from "@/components/creators/engagement-profile";
import { FormatsAndPublishing } from "@/components/creators/formats-publish";
import { InsightsDashboard } from "@/components/creators/insights-dashboard";
import { LiveStudio } from "@/components/creators/live-studio";
import { Onboarding, Opportunities } from "@/components/creators/opportunities-onboarding";
import { WhyJoin } from "@/components/creators/why-join";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "For creators",
  description:
    "Go live, publish podcasts, video and Preach Clips, build your community and understand your audience with creator insights on Preach Radio.",
  path: "/creators",
});

export default function CreatorsPage() {
  return (
    <>
      <CreatorHero />
      <WhyJoin />
      <LiveStudio />
      <FormatsAndPublishing />
      <EngagementAndProfile />
      <InsightsDashboard />
      <Opportunities />
      <Onboarding />
    </>
  );
}
