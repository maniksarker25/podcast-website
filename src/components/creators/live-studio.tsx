import {
  Camera01Icon,
  CheckmarkCircle02Icon,
  Mic01Icon,
  Settings02Icon,
  UserGroupIcon,
  WavingHand01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CoverArt } from "@/components/shared/cover-art";
import { Avatar, LiveBadge } from "@/components/shared/media-bits";
import { Eyebrow, Section, stagger } from "@/components/shared/section";

const requests = [
  { name: "Esther Bello", note: "wants to share a testimony", seed: 3 },
  { name: "Michael Obi", note: "has a question", seed: 5 },
];

const points = [
  "Go live with video, or audio only for a radio-style show",
  "Followers get notified the moment you start",
  "Invite listeners on stage when they raise a hand",
  "Chat and reactions keep everyone involved",
];

export function LiveStudio() {
  return (
    <Section id="go-live" bleed className="relative overflow-hidden bg-app text-app-text">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -left-40 h-[420px] w-[520px] rounded-full bg-brand/25 blur-[120px]" />
      </div>
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.2fr_0.9fr] lg:gap-16">
        {/* Studio */}
        <div data-reveal className="order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl lg:order-1">
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <CoverArt seed={1} className="absolute inset-0" rounded="rounded-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <LiveBadge />
              <span className="rounded-full bg-black/50 px-2.5 py-0.5 text-[11px] backdrop-blur tabular-nums">42:18</span>
            </div>
            <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[11px] backdrop-blur">
              <HugeiconsIcon icon={UserGroupIcon} className="size-3.5" /> 1,204
            </span>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
              <div>
                <p className="text-xs text-white/70">Grace Adeyemi</p>
                <p className="font-heading text-2xl font-semibold">Sunday Evening Live</p>
              </div>
              <div className="flex gap-2">
                {[Mic01Icon, Camera01Icon, Settings02Icon].map((icon, i) => (
                  <span key={i} className="grid size-10 place-items-center rounded-full bg-white/15 backdrop-blur">
                    <HugeiconsIcon icon={icon} className="size-[18px]" />
                  </span>
                ))}
                <span className="grid h-10 place-items-center rounded-full bg-brand px-4 text-xs font-semibold">End</span>
              </div>
            </div>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-black/30 p-4">
              <p className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.12em] text-app-muted uppercase">
                <HugeiconsIcon icon={WavingHand01Icon} className="size-3.5" /> Requests to speak
              </p>
              <ul className="mt-3 space-y-3">
                {requests.map((r) => (
                  <li key={r.name} className="flex items-center gap-3">
                    <Avatar name={r.name} seed={r.seed} className="size-8 text-[11px]" />
                    <p className="min-w-0 flex-1 text-[13px] leading-tight">
                      <span className="font-semibold">{r.name}</span>
                      <span className="block truncate text-[11px] text-app-muted">{r.note}</span>
                    </p>
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-app">Invite</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-black/30 p-4">
              <p className="text-xs font-semibold tracking-[0.12em] text-app-muted uppercase">Right now</p>
              <dl className="mt-3 grid grid-cols-2 gap-3">
                {[
                  ["1,204", "watching"],
                  ["386", "reactions"],
                  ["142", "messages"],
                  ["12", "new followers"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dd className="font-heading text-xl font-semibold">{v}</dd>
                    <dt className="text-[11px] text-app-muted">{l}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div data-reveal className="space-y-4">
            <Eyebrow className="text-app-rose [&>span]:bg-app-rose/60">Broadcasting & going live</Eyebrow>
            <h2 className="font-heading text-4xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-5xl">
              Go live in a tap. Bring your audience on stage.
            </h2>
            <p className="text-lg leading-relaxed text-app-muted">
              Services, worship nights, Q&amp;As and talk shows — broadcast them as they happen, and make the audience
              part of it.
            </p>
          </div>
          <ul className="mt-8 space-y-3.5">
            {points.map((p, i) => (
              <li key={p} data-reveal style={stagger(i)} className="flex gap-3 text-[15px]">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} className="mt-0.5 size-5 shrink-0 text-app-rose" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
