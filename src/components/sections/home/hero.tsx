import { PlayIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ButtonLink } from "@/components/shared/button-link";
import { CoverArt } from "@/components/shared/cover-art";
import { Avatar, LiveBadge, Waveform } from "@/components/shared/media-bits";
import { PhoneFrame } from "@/components/shared/phone-frame";
import { stagger } from "@/components/shared/section";
import { episodes, liveRoom } from "@/content/showcase";

const episode = episodes[1];
import { AppHomeScreen } from "./app-home-screen";

const formats = ["Radio", "Podcasts", "Video", "Live"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* backdrop: faint grid + brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)] opacity-[0.35] dark:opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="container-page relative grid items-center gap-16 pt-12 pb-20 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-20 lg:pb-28">
        <div className="max-w-xl">
          <div data-reveal className="flex flex-wrap items-center gap-2">
            {formats.map((f, i) => (
              <span
                key={f}
                className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
              >
                {i === 3 ? (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-brand" /> {f}
                  </span>
                ) : (
                  f
                )}
              </span>
            ))}
          </div>

          <h1
            data-reveal
            style={stagger(1)}
            className="mt-7 font-heading text-[3.4rem] leading-[0.92] font-bold tracking-tight text-balance sm:text-7xl lg:text-[5.2rem]"
          >
            Where every message finds its <span className="text-primary">audience.</span>
          </h1>

          <p
            data-reveal
            style={stagger(2)}
            className="mt-6 max-w-lg text-lg leading-relaxed text-pretty text-muted-foreground"
          >
            Preach Radio is one app for radio stations, podcasts, video and live broadcasts. Tune in to
            stations, follow the creators you love, and step into live sessions the moment they begin.
          </p>

          <div
            data-reveal
            style={stagger(3)}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/#download" arrow>
              Get the app
            </ButtonLink>
            <ButtonLink href="/creators" variant="secondary">
              I&apos;m a creator
            </ButtonLink>
          </div>

          <dl
            data-reveal
            style={stagger(4)}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6"
          >
            {[
              ["4-in-1", "radio, podcasts, video, live"],
              ["Adaptive", "streams that start fast"],
              ["Live", "rooms you can join"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-heading text-2xl font-semibold">{value}</dd>
                <dd className="mt-0.5 text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Product composition */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div aria-hidden className="glow-brand absolute inset-[8%] -z-0 rounded-full opacity-90" />
          <div className="relative flex justify-center">
            <PhoneFrame className="animate-float">
              <AppHomeScreen />
            </PhoneFrame>
          </div>

          {/* floating: live room */}
          <div className="absolute top-[9%] -right-2 w-56 rounded-2xl border border-white/10 bg-app/95 p-3.5 text-app-text shadow-2xl backdrop-blur sm:right-0 lg:-right-4">
            <div className="flex items-center justify-between">
              <LiveBadge />
              <span className="text-[11px] text-app-muted">{liveRoom.watching} watching</span>
            </div>
            <p className="mt-2.5 font-heading text-lg leading-tight font-semibold">{liveRoom.title}</p>
            <div className="mt-2.5 flex -space-x-2">
              {liveRoom.speakers.map((s, i) => (
                <Avatar key={s.name} name={s.name} seed={i + 1} ring className="size-7 text-[10px]" />
              ))}
              <span className="ml-3 self-center pl-3 text-[11px] text-app-muted">+ hosts on stage</span>
            </div>
          </div>

          {/* floating: now playing */}
          <div className="absolute bottom-[8%] -left-2 w-64 rounded-2xl border border-white/10 bg-app/95 p-3.5 text-app-text shadow-2xl backdrop-blur sm:left-0 lg:-left-8">
            <div className="flex items-center gap-3">
              <CoverArt seed={episode.seed} className="size-11" rounded="rounded-lg" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold">{episode.title}</p>
                <p className="truncate text-[11px] text-app-muted">
                  {episode.kind} · {episode.creator}
                </p>
              </div>
              <span className="grid size-9 place-items-center rounded-full bg-brand text-white">
                <HugeiconsIcon icon={PlayIcon} className="size-4" />
              </span>
            </div>
            <Waveform className="mt-3 h-7 text-white" seed={2} progress={0.42} bars={40} />
            <div className="mt-1.5 flex justify-between text-[10px] text-app-muted tabular-nums">
              <span>21:06</span>
              <span>{episode.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
