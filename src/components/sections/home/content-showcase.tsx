import { PlayIcon, Video01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CoverArt } from "@/components/shared/cover-art";
import { Section, SectionHeader, stagger } from "@/components/shared/section";
import { clips, episodes, featuredVideo } from "@/content/showcase";

export function ContentShowcase() {
  return (
    <Section id="podcasts" className="bg-surface">
      <SectionHeader
        eyebrow="Podcasts & video"
        title="Listen to the full message. Watch the moment."
        description="Podcast episodes, full-length video and short clips live side by side, so a great sermon, interview or session is always one tap from being heard — or seen."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-[1.55fr_1fr]">
        {/* Video player */}
        <figure data-reveal className="group relative overflow-hidden rounded-3xl border border-border bg-app text-app-text">
          <div className="relative aspect-video">
            <CoverArt seed={featuredVideo.seed} className="absolute inset-0" rounded="rounded-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium backdrop-blur">
              <HugeiconsIcon icon={Video01Icon} className="size-3.5" /> Video · 720p
            </span>
            <span className="absolute inset-0 m-auto grid size-16 place-items-center rounded-full bg-white/95 text-app shadow-xl transition-transform duration-300 group-hover:scale-105">
              <HugeiconsIcon icon={PlayIcon} className="ml-0.5 size-6" />
            </span>
            <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="text-xs text-white/70">{featuredVideo.creator}</p>
              <p className="mt-1 font-heading text-2xl leading-tight font-semibold sm:text-3xl">{featuredVideo.title}</p>
              <div className="mt-4 flex items-center gap-3 text-[11px] text-white/70 tabular-nums">
                <span>26:10</span>
                <span className="relative h-1 flex-1 rounded-full bg-white/20">
                  <span
                    className="absolute inset-y-0 left-0 rounded-full bg-brand"
                    style={{ width: `${featuredVideo.progress * 100}%` }}
                  />
                </span>
                <span>{featuredVideo.length}</span>
              </div>
            </figcaption>
          </div>
        </figure>

        {/* Episode list */}
        <div data-reveal className="flex flex-col rounded-3xl border border-border bg-card p-5 sm:p-6">
          <div className="flex items-baseline justify-between">
            <h3 className="font-heading text-xl font-semibold">New episodes</h3>
            <span className="text-xs font-medium text-lavender">See all</span>
          </div>
          <ul className="mt-4 flex-1 divide-y divide-border">
            {episodes.map((ep, i) => (
              <li key={ep.title} style={stagger(i)} className="group flex items-center gap-4 py-3.5">
                <CoverArt seed={ep.seed} title={ep.show.split(" ").slice(-1)[0]} className="size-16 shrink-0 text-[11px]" />
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold tracking-wide text-primary uppercase">{ep.kind}</p>
                  <p className="mt-0.5 line-clamp-2 text-sm leading-snug font-semibold">{ep.title}</p>
                  <p className="mt-1 truncate text-xs text-muted-foreground">
                    {ep.creator} · {ep.length}
                  </p>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <HugeiconsIcon icon={PlayIcon} className="ml-0.5 size-3.5" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Preach Clips */}
      <div className="mt-16">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="font-heading text-3xl font-semibold tracking-tight">Preach Clips</h3>
            <p className="mt-1.5 text-muted-foreground">Short video and audio moments — two minutes or less.</p>
          </div>
        </div>
        <ul className="mt-6 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-5">
          {clips.map((clip, i) => (
            <li
              key={clip.title}
              data-reveal
              style={stagger(i)}
              className="group relative aspect-[9/16] w-[62%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-auto"
            >
              <CoverArt seed={clip.seed} className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" rounded="rounded-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
              <span className="absolute top-3 left-3 rounded-md bg-black/55 px-1.5 py-0.5 text-[11px] font-medium text-white tabular-nums backdrop-blur">
                {clip.length}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-3.5 text-white">
                <p className="text-sm leading-snug font-semibold">{clip.title}</p>
                <p className="mt-1 text-xs text-white/70">{clip.creator}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
