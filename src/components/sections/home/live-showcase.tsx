import {
  FavouriteIcon,
  Mic01Icon,
  Share08Icon,
  UserGroupIcon,
  WavingHand01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Avatar, LiveBadge } from "@/components/shared/media-bits";
import { Eyebrow, Section, stagger } from "@/components/shared/section";
import { liveRoom } from "@/content/showcase";
import { cn } from "@/lib/utils";

const steps = [
  { title: "Stations and creators go live", text: "A broadcast starts from the app in a few taps — with video or audio only." },
  { title: "Followers get the alert", text: "People who follow the host are notified and join from wherever they are." },
  { title: "The audience takes part", text: "Chat, react, raise a hand, and be invited on stage by the host." },
];

export function LiveShowcase() {
  return (
    <Section id="live" bleed className="relative overflow-hidden bg-app text-app-text">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-brand/25 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[360px] w-[420px] rounded-full bg-app-lavender/15 blur-[120px]" />
      </div>
      <div className="container-page relative grid gap-14 lg:grid-cols-[0.9fr_1.3fr] lg:items-center lg:gap-16">
        <div>
          <div data-reveal className="space-y-4">
            <Eyebrow className="text-app-rose [&>span]:bg-app-rose/60">Live streaming</Eyebrow>
            <h2 className="font-heading text-4xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-5xl">
              When it happens live, you&apos;re in the room.
            </h2>
            <p className="text-lg leading-relaxed text-app-muted">
              Live services, worship nights, talk shows and Q&amp;As — broadcast by stations and creators, joined by
              everyone who wants to be there.
            </p>
          </div>
          <ol className="mt-10 space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} data-reveal style={stagger(i)} className="flex gap-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/15 font-heading text-sm font-semibold">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-app-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Live room */}
        <div data-reveal className="rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl backdrop-blur-sm">
          <div className="grid gap-3 md:grid-cols-[1.45fr_1fr]">
            <div className="rounded-2xl bg-black/30 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <LiveBadge />
                    <span className="inline-flex items-center gap-1 text-xs text-app-muted">
                      <HugeiconsIcon icon={UserGroupIcon} className="size-3.5" /> {liveRoom.watching}
                    </span>
                  </div>
                  <p className="mt-2 truncate font-heading text-xl font-semibold">{liveRoom.title}</p>
                </div>
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-2.5">
                {liveRoom.speakers.map((s, i) => (
                  <li
                    key={s.name}
                    className={cn(
                      "relative flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-xl bg-app-card",
                      s.speaking && "ring-2 ring-brand"
                    )}
                  >
                    <Avatar name={s.name} seed={i + 1} className="size-12 text-sm" />
                    <span className="text-center text-xs leading-tight">
                      <span className="block font-medium">{s.name}</span>
                      <span className="text-[10px] text-app-muted">{s.role}</span>
                    </span>
                    {s.speaking && (
                      <span className="absolute top-2 right-2 grid size-6 place-items-center rounded-full bg-brand">
                        <HugeiconsIcon icon={Mic01Icon} className="size-3.5" />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {[
                  { icon: WavingHand01Icon, label: "Raise hand" },
                  { icon: FavouriteIcon, label: "React" },
                  { icon: Share08Icon, label: "Share" },
                ].map((a) => (
                  <span key={a.label} className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-3.5 py-2 text-xs font-medium">
                    <HugeiconsIcon icon={a.icon} className="size-4" /> {a.label}
                  </span>
                ))}
                <span className="rounded-full bg-brand px-3.5 py-2 text-xs font-semibold">Leave</span>
              </div>
            </div>

            <div className="flex flex-col rounded-2xl bg-black/30 p-4">
              <p className="text-xs font-semibold tracking-[0.14em] text-app-muted uppercase">Live chat</p>
              <ul className="mt-3 flex-1 space-y-3.5">
                {liveRoom.chat.map((m) => (
                  <li key={m.name} className="flex gap-2.5">
                    <Avatar name={m.name} seed={m.seed} className="size-7 text-[10px]" />
                    <p className="text-[13px] leading-snug">
                      <span className="font-semibold">{m.name}</span>{" "}
                      <span className="text-app-text/80">{m.text}</span>
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-full border border-white/10 px-4 py-2.5 text-xs text-app-muted">Say something…</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
