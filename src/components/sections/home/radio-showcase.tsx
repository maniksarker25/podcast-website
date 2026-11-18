import {
  CheckmarkCircle02Icon,
  NextIcon,
  PauseIcon,
  PreviousIcon,
  UserGroupIcon,
  VolumeHighIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CoverArt } from "@/components/shared/cover-art";
import { Equalizer, LiveBadge, Waveform } from "@/components/shared/media-bits";
import { Section, SectionHeader, stagger } from "@/components/shared/section";
import { nowPlaying, stationSchedule, stations } from "@/content/showcase";

const points = [
  "Station streams with a live show schedule",
  "Follow stations and get notified when they go live",
  "Keep listening while you browse the rest of the app",
];

export function RadioShowcase() {
  return (
    <Section id="radio">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader
            eyebrow="Radio streaming"
            title="Radio that feels like it was made for your phone."
            description="Tune in to stations for teaching, talk and music. See what's on now, what's coming up, and who's on the mic — then keep listening while you explore."
          />
          <ul className="mt-8 space-y-3.5">
            {points.map((p, i) => (
              <li key={p} data-reveal style={stagger(i)} className="flex gap-3 text-[15px]">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} className="mt-0.5 size-5 shrink-0 text-primary" />
                {p}
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-10 flex flex-wrap gap-2">
            {stations.map((s) => (
              <span
                key={s.name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card py-1 pr-3.5 pl-1 text-sm"
              >
                <CoverArt seed={s.seed} className="size-7" rounded="rounded-full" />
                {s.name}
              </span>
            ))}
          </div>
        </div>

        {/* Station console */}
        <div data-reveal className="relative">
          <div aria-hidden className="glow-brand absolute inset-10 opacity-60" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-app text-app-text shadow-2xl">
            <div className="relative p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CoverArt seed={0} className="size-10" rounded="rounded-xl" />
                  <div>
                    <p className="text-sm font-semibold">{nowPlaying.station}</p>
                    <p className="text-xs text-app-muted">Talk & teaching</p>
                  </div>
                </div>
                <LiveBadge label="On air" />
              </div>

              <div className="mt-7 grid gap-6 sm:grid-cols-[140px_1fr] sm:items-center">
                <CoverArt
                  seed={0}
                  title={nowPlaying.show}
                  subtitle="Live now"
                  className="aspect-square w-32 text-xl sm:w-full"
                  rounded="rounded-2xl"
                />
                <div className="min-w-0">
                  <p className="flex items-center gap-2 text-xs text-app-muted">
                    <Equalizer /> Now playing
                  </p>
                  <p className="mt-1.5 font-heading text-3xl leading-none font-semibold">{nowPlaying.show}</p>
                  <p className="mt-1.5 text-sm text-app-muted">with {nowPlaying.host}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-app-muted">
                    <HugeiconsIcon icon={UserGroupIcon} className="size-3.5" /> {nowPlaying.listeners} listening
                  </p>
                </div>
              </div>

              <Waveform className="mt-7 h-12 text-white" bars={64} seed={4} progress={0.41} />
              <div className="mt-2 flex justify-between text-[11px] text-app-muted tabular-nums">
                <span>{nowPlaying.elapsed}</span>
                <span>{nowPlaying.length}</span>
              </div>
              <div className="relative mt-5 flex items-center justify-center gap-6">
                <HugeiconsIcon icon={PreviousIcon} className="size-5 text-app-muted" />
                <span className="grid size-14 place-items-center rounded-full bg-white text-app shadow-lg">
                  <HugeiconsIcon icon={PauseIcon} className="size-6" />
                </span>
                <HugeiconsIcon icon={NextIcon} className="size-5 text-app-muted" />
                <HugeiconsIcon icon={VolumeHighIcon} className="absolute right-0 size-5 text-app-muted" />
              </div>
            </div>

            <div className="border-t border-app-line bg-black/20 px-6 py-5 sm:px-7">
              <p className="text-xs font-semibold tracking-[0.14em] text-app-muted uppercase">Today on air</p>
              <ul className="mt-3 divide-y divide-app-line">
                {stationSchedule.map((slot, i) => (
                  <li key={slot.time} style={stagger(i)} className="flex items-center gap-4 py-2.5 text-sm">
                    <span className="w-11 font-medium text-app-muted tabular-nums">{slot.time}</span>
                    <span className="min-w-0 flex-1 truncate">
                      <span className="font-medium">{slot.show}</span>
                      <span className="text-app-muted"> · {slot.host}</span>
                    </span>
                    {slot.live && <span className="size-2 rounded-full bg-brand" aria-label="On air now" />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
