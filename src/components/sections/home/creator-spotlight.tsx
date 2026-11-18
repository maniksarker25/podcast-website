import { ChartIncreaseIcon, FavouriteIcon, LiveStreaming02Icon, PlayIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ButtonLink } from "@/components/shared/button-link";
import { CoverArt } from "@/components/shared/cover-art";
import { Avatar } from "@/components/shared/media-bits";
import { Section, SectionHeader, stagger } from "@/components/shared/section";
import { episodes, featuredCreator } from "@/content/showcase";

const perks = [
  { icon: LiveStreaming02Icon, text: "Go live to your followers from your phone" },
  { icon: PlayIcon, text: "Publish podcasts, video and short clips" },
  { icon: ChartIncreaseIcon, text: "See what your audience plays, saves and shares" },
  { icon: FavouriteIcon, text: "Let listeners support you directly" },
];

export function CreatorSpotlight() {
  return (
    <Section id="creators">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        {/* Profile preview */}
        <div data-reveal className="relative order-2 lg:order-1">
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] sm:-inset-6 bg-gradient-to-br from-primary/15 via-transparent to-lavender/15 blur-2xl" />
          <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-black/5">
            <CoverArt seed={featuredCreator.seed} className="h-36" rounded="rounded-none" />
            <div className="px-6 pb-6">
              <div className="-mt-10 flex items-end justify-between gap-4">
                <Avatar
                  name={featuredCreator.name}
                  seed={featuredCreator.seed}
                  className="size-20 border-4 border-card text-xl"
                />
                <span className="mb-1 inline-flex h-9 items-center rounded-full bg-foreground px-4 text-sm font-semibold text-background">
                  Follow
                </span>
              </div>
              <h3 className="mt-3 font-heading text-2xl font-semibold">{featuredCreator.name}</h3>
              <p className="text-sm text-muted-foreground">{featuredCreator.handle}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">{featuredCreator.bio}</p>
              <dl className="mt-5 grid grid-cols-3 rounded-2xl bg-surface-2 py-3 text-center">
                {[
                  [featuredCreator.followers, "Followers"],
                  [String(featuredCreator.episodes), "Episodes"],
                  [featuredCreator.live, "Live"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dd className="font-heading text-xl font-semibold">{v}</dd>
                    <dt className="text-[11px] text-muted-foreground">{l}</dt>
                  </div>
                ))}
              </dl>
              <ul className="mt-5 space-y-2.5">
                {episodes.slice(0, 2).map((ep) => (
                  <li key={ep.title} className="flex items-center gap-3">
                    <CoverArt seed={ep.seed} className="size-11" rounded="rounded-lg" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{ep.title}</p>
                      <p className="text-xs text-muted-foreground">{ep.length}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeader
            eyebrow="For creators"
            title="Built for the people behind the mic."
            description="Preachers, podcasters, radio hosts and artists get a home for everything they make — and the tools to grow the community around it."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {perks.map((p, i) => (
              <li key={p.text} data-reveal style={stagger(i)} className="flex gap-3 rounded-2xl border border-border bg-card p-4">
                <HugeiconsIcon icon={p.icon} className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed">{p.text}</span>
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-9">
            <ButtonLink href="/creators" arrow>
              Explore Preach Radio for creators
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
