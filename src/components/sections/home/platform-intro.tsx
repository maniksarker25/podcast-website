import { HeadphonesIcon, LiveStreaming02Icon, Mic01Icon, Video01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Section, SectionHeader, stagger } from "@/components/shared/section";
import type { Feature } from "@/types";

const pillars: Feature[] = [
  {
    icon: HeadphonesIcon,
    title: "Radio",
    description: "Stations streaming talk, teaching and music, with show schedules so you know what's on next.",
  },
  {
    icon: Mic01Icon,
    title: "Podcasts",
    description: "Episodes and series from creators you follow, organised into albums and playlists.",
  },
  {
    icon: Video01Icon,
    title: "Video",
    description: "Full services, sessions and short Preach Clips that stream smoothly on any connection.",
  },
  {
    icon: LiveStreaming02Icon,
    title: "Live",
    description: "Broadcasts from stations and creators that you join in real time — and take part in.",
  },
];

export function PlatformIntro() {
  return (
    <Section className="border-y border-border bg-surface">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.6fr] lg:gap-20">
        <SectionHeader
          eyebrow="One app"
          title="Four ways to tune in. One place to belong."
          description="Most people listen in one app, watch in another and join live somewhere else. Preach Radio brings it all together — with the creators and stations at the centre."
        />
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {pillars.map((p, i) => (
            <li key={p.title} data-reveal style={stagger(i)} className="group bg-card p-7 transition-colors hover:bg-surface-2">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                  <HugeiconsIcon icon={p.icon} className="size-[22px]" />
                </span>
                <span className="font-heading text-sm font-semibold text-muted-foreground tabular-nums">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-heading text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
