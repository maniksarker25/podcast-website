import {
  Clock01Icon,
  Location01Icon,
  PlaylistIcon,
  Search01Icon,
  SecurityCheckIcon,
  Wifi01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Section, SectionHeader, stagger } from "@/components/shared/section";
import { cn } from "@/lib/utils";
import type { Feature } from "@/types";

const features: (Feature & { wide?: boolean; visual?: "quality" | "nearby" })[] = [
  {
    icon: Wifi01Icon,
    title: "Starts fast, on any connection",
    description:
      "Video and audio stream adaptively, switching quality to match your network — so long sermons start quickly and keep playing on mobile data.",
    wide: true,
    visual: "quality",
  },
  {
    icon: Location01Icon,
    title: "Discover what's near you",
    description: "Find podcasts and creators from your city and region.",
    visual: "nearby",
  },
  {
    icon: Search01Icon,
    title: "Search everything",
    description: "One search across stations, creators, episodes and clips.",
  },
  {
    icon: PlaylistIcon,
    title: "Your library",
    description: "Favourites, playlists and albums, organised the way you listen.",
  },
  {
    icon: Clock01Icon,
    title: "Pick up where you left off",
    description: "Your listening history is always one tap away.",
  },
  {
    icon: SecurityCheckIcon,
    title: "A safer community",
    description: "Report content in the app; our team reviews it and can remove it.",
    wide: true,
  },
];

function QualityVisual() {
  return (
    <div aria-hidden className="mt-6 flex items-end gap-2">
      {["Auto", "480p", "720p"].map((q, i) => (
        <span
          key={q}
          className={cn(
            "rounded-lg border px-3 py-1.5 text-xs font-semibold",
            i === 0 ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground"
          )}
        >
          {q}
        </span>
      ))}
    </div>
  );
}

function NearbyVisual() {
  return (
    <div aria-hidden className="relative mt-6 h-20 overflow-hidden rounded-xl bg-surface-2">
      {[0, 1, 2].map((r) => (
        <span
          key={r}
          className="absolute top-1/2 left-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25"
          style={{ width: `${(r + 1) * 70}px` }}
        />
      ))}
      <span className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-primary/20" />
      <span className="absolute top-4 left-[28%] size-2 rounded-full bg-lavender" />
      <span className="absolute right-[26%] bottom-5 size-2 rounded-full bg-lavender" />
    </div>
  );
}

export function FeaturesGrid() {
  return (
    <Section id="features">
      <SectionHeader
        eyebrow="Features"
        title="Thoughtful details, everywhere you listen."
        description="The small things that make a big difference when you spend your mornings, commutes and evenings with Preach Radio."
        align="center"
      />
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <li
            key={f.title}
            data-reveal
            style={stagger(i)}
            className={cn(
              "group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5",
              f.wide && "lg:col-span-2"
            )}
          >
            <span className="grid size-11 place-items-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <HugeiconsIcon icon={f.icon} className="size-5" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            {f.visual === "quality" && <QualityVisual />}
            {f.visual === "nearby" && <NearbyVisual />}
          </li>
        ))}
      </ul>
    </Section>
  );
}
