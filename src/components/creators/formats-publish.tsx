import { CheckmarkCircle02Icon, CloudUploadIcon, HeadphonesIcon, Mic01Icon, Video01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CoverArt } from "@/components/shared/cover-art";
import { Waveform } from "@/components/shared/media-bits";
import { Section, SectionHeader, stagger } from "@/components/shared/section";

const formats = [
  {
    icon: HeadphonesIcon,
    name: "Radio shows",
    text: "Host a regular show and keep listeners company — live on air or as audio they replay later.",
    visual: "wave",
  },
  {
    icon: Mic01Icon,
    name: "Podcasts",
    text: "Publish episodes, group them into albums and series, and build a back catalogue people binge.",
    visual: "covers",
  },
  {
    icon: Video01Icon,
    name: "Video & Preach Clips",
    text: "Share full services and sessions, plus vertical clips of up to two minutes that travel fast.",
    visual: "clips",
  },
] as const;

const steps = [
  { title: "Upload", text: "Pick an audio or video file from your phone." },
  { title: "Add the details", text: "Title, description, category, cover — or let a frame from your video become the cover." },
  { title: "Publish", text: "It's live on your profile and in your followers' feeds right away." },
  { title: "Optimised for streaming", text: "We prepare an adaptive stream in the background, so it starts fast on any connection." },
];

function FormatVisual({ kind }: { kind: (typeof formats)[number]["visual"] }) {
  if (kind === "wave")
    return (
      <div className="flex h-28 items-center rounded-2xl bg-app px-5 text-white">
        <Waveform bars={46} seed={6} progress={0.55} className="h-14" />
      </div>
    );
  if (kind === "covers")
    return (
      <div className="flex h-28 items-center gap-2 rounded-2xl bg-app px-4">
        {[3, 1, 5].map((s, i) => (
          <CoverArt key={s} seed={s} title={["Ep 41", "Ep 42", "Ep 43"][i]} className="aspect-square h-20 text-[11px]" rounded="rounded-lg" />
        ))}
      </div>
    );
  return (
    <div className="flex h-28 items-center justify-center gap-2 rounded-2xl bg-app">
      {[2, 4, 1].map((s) => (
        <CoverArt key={s} seed={s} className="aspect-[9/16] h-24" rounded="rounded-md" />
      ))}
    </div>
  );
}

export function FormatsAndPublishing() {
  return (
    <Section id="formats">
      <SectionHeader
        eyebrow="Radio, podcasts & video"
        title="Make it in the format your message deserves."
        description="Some ideas need an hour. Some need sixty seconds. Publish both — and let your audience choose how they listen or watch."
      />
      <ul className="mt-14 grid gap-5 lg:grid-cols-3">
        {formats.map((f, i) => (
          <li key={f.name} data-reveal style={stagger(i)} className="rounded-3xl border border-border bg-card p-5">
            <FormatVisual kind={f.visual} />
            <div className="mt-5 flex items-center gap-2.5">
              <HugeiconsIcon icon={f.icon} className="size-5 text-primary" />
              <h3 className="font-heading text-2xl font-semibold">{f.name}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
          </li>
        ))}
      </ul>

      {/* Publishing flow */}
      <div className="mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h3 data-reveal className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            From your phone to every feed in minutes.
          </h3>
          <ol className="mt-8 space-y-6">
            {steps.map((s, i) => (
              <li key={s.title} data-reveal style={stagger(i)} className="relative flex gap-4 pb-2">
                {i < steps.length - 1 && <span aria-hidden className="absolute top-9 bottom-[-16px] left-4 w-px bg-border" />}
                <span className="relative grid size-8 shrink-0 place-items-center rounded-full bg-primary font-heading text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div data-reveal className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/5">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <HugeiconsIcon icon={CloudUploadIcon} className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Sunday-service-full.mp4</p>
              <p className="text-xs text-muted-foreground">1.8 GB · 1:12:40</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {[
              { label: "Uploaded", done: true, value: 100 },
              { label: "Published to your profile", done: true, value: 100 },
              { label: "Preparing adaptive stream · 480p · 720p", done: false, value: 64 },
            ].map((row) => (
              <div key={row.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-2">
                    {row.done ? (
                      <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-4 text-success" />
                    ) : (
                      <span className="size-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    )}
                    {row.label}
                  </span>
                  <span className="text-xs text-muted-foreground tabular-nums">{row.value}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className={row.done ? "h-full rounded-full bg-success" : "h-full rounded-full bg-primary"}
                    style={{ width: `${row.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-xl bg-surface-2 p-3 text-xs leading-relaxed text-muted-foreground">
            Your listeners can play it straight away. It switches to the adaptive stream as soon as it&apos;s ready.
          </p>
        </div>
      </div>
    </Section>
  );
}
