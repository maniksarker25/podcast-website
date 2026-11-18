import {
  ChartIncreaseIcon,
  FavouriteIcon,
  Layers01Icon,
  LiveStreaming02Icon,
  Location01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Section, SectionHeader, stagger } from "@/components/shared/section";
import type { Feature } from "@/types";

const reasons: Feature[] = [
  { icon: Layers01Icon, title: "Every format in one place", description: "Live broadcasts, radio shows, podcasts, video and clips live on one profile instead of five platforms." },
  { icon: LiveStreaming02Icon, title: "Live, without the studio", description: "Go live from your phone. Your followers are notified the moment you start." },
  { icon: UserGroupIcon, title: "An audience that shows up", description: "People come to Preach Radio to listen with intent — sermons, teaching, worship and conversation." },
  { icon: Location01Icon, title: "Be found nearby", description: "Listeners discover creators from their own city and region, not just the biggest names." },
  { icon: ChartIncreaseIcon, title: "Insights you can act on", description: "See what people play, finish, save and share — and when they're listening." },
  { icon: FavouriteIcon, title: "Direct support", description: "Add your support link so the people who value your work can give back." },
];

export function WhyJoin() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Why Preach Radio"
        title="Made for creators who have something to say."
        description="Whether you lead a congregation, host a radio show or run a podcast, Preach Radio gives your work a home — and gives you the tools to grow it."
      />
      <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <li key={r.title} data-reveal style={stagger(i)} className="border-t border-border pt-6">
            <HugeiconsIcon icon={r.icon} className="size-6 text-primary" />
            <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
