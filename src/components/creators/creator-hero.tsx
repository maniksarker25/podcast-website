import { ChartIncreaseIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ButtonLink } from "@/components/shared/button-link";
import { Avatar, LiveBadge } from "@/components/shared/media-bits";
import { Eyebrow, stagger } from "@/components/shared/section";
import { dailyPlays, kpis } from "@/content/creator-insights";
import { AreaChart } from "./charts";
import { ExampleBadge } from "./example-badge";

export function CreatorHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden className="glow-brand pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[720px] opacity-40" />
      <div className="container-page relative grid items-center gap-14 pt-14 pb-20 lg:grid-cols-[1fr_1.1fr] lg:pt-20 lg:pb-28">
        <div className="max-w-xl">
          <div data-reveal>
            <Eyebrow>Preach Radio for creators</Eyebrow>
          </div>
          <h1
            data-reveal
            style={stagger(1)}
            className="mt-6 font-heading text-[3.3rem] leading-[0.92] font-bold tracking-tight text-balance sm:text-7xl"
          >
            Your voice. Your stage. <span className="text-primary">Your people.</span>
          </h1>
          <p data-reveal style={stagger(2)} className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
            Broadcast live, publish podcasts and video, share short clips, and see exactly how your audience responds —
            all from one creator profile.
          </p>
          <div data-reveal style={stagger(3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#get-started" arrow>
              Start creating
            </ButtonLink>
            <ButtonLink href="#insights" variant="secondary">
              See creator insights
            </ButtonLink>
          </div>
        </div>

        {/* Overview preview */}
        <div data-reveal className="relative">
          <div className="rounded-3xl border border-border bg-card p-5 shadow-2xl shadow-black/10 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Avatar name="Grace Adeyemi" seed={1} className="size-10 text-sm" />
                <div>
                  <p className="text-sm font-semibold">Creator overview</p>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </div>
              </div>
              <ExampleBadge />
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {kpis.map((k) => (
                <div key={k.label} className="rounded-2xl bg-surface-2 p-3">
                  <dt className="text-[11px] text-muted-foreground">{k.label}</dt>
                  <dd className="mt-1 font-heading text-2xl font-semibold">{k.value}</dd>
                  <dd className="text-[11px] font-semibold text-success">{k.delta}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 rounded-2xl border border-border p-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold">Plays</span>
                <span className="inline-flex items-center gap-1 text-success">
                  <HugeiconsIcon icon={ChartIncreaseIcon} className="size-3.5" /> Trending up
                </span>
              </div>
              <AreaChart id="hero-plays" values={dailyPlays} className="mt-3 h-32 text-foreground" />
            </div>
          </div>

          <div className="absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-app p-3.5 pr-5 text-app-text shadow-2xl sm:-left-8">
            <LiveBadge />
            <div>
              <p className="text-[13px] font-semibold">You&apos;re live · 1,204 watching</p>
              <p className="text-[11px] text-app-muted">Sunday Evening Live</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
