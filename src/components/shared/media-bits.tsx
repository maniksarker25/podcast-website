import { cn } from "@/lib/utils";

/** Deterministic pseudo-random heights, so waveforms look organic but never change. */
const heights = (count: number, seed: number) =>
  Array.from({ length: count }, (_, i) => {
    const v = Math.sin(i * 0.55 + seed) * 0.5 + Math.sin(i * 1.7 + seed * 2) * 0.3 + 0.55;
    return Math.max(0.12, Math.min(1, v));
  });

/** Static audio waveform; bars before `progress` (0–1) are highlighted. */
export function Waveform({
  bars = 48,
  seed = 1,
  progress = 0.4,
  className,
  activeClass = "bg-brand",
  idleClass = "bg-current opacity-25",
}: {
  bars?: number;
  seed?: number;
  progress?: number;
  className?: string;
  activeClass?: string;
  idleClass?: string;
}) {
  return (
    <div aria-hidden className={cn("flex h-10 items-center gap-[3px]", className)}>
      {heights(bars, seed).map((h, i) => (
        <span
          key={i}
          className={cn("w-full min-w-[2px] rounded-full", i / bars < progress ? activeClass : idleClass)}
          style={{ height: `${Math.round(h * 100)}%` }}
        />
      ))}
    </div>
  );
}

/** Animated "now playing" equalizer. */
export function Equalizer({ className, barClass = "bg-brand" }: { className?: string; barClass?: string }) {
  return (
    <span aria-hidden className={cn("inline-flex h-3.5 items-end gap-[2px]", className)}>
      {[0, 0.25, 0.5, 0.15].map((delay, i) => (
        <span
          key={i}
          className={cn("h-full w-[3px] origin-bottom animate-eq rounded-full", barClass)}
          style={{ animationDelay: `-${delay}s` }}
        />
      ))}
    </span>
  );
}

export function LiveBadge({ className, label = "Live" }: { className?: string; label?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold tracking-[0.14em] text-white uppercase",
        className
      )}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inset-0 animate-ping-slow rounded-full bg-white" />
        <span className="relative size-1.5 rounded-full bg-white" />
      </span>
      {label}
    </span>
  );
}

const AVATAR_TONES = ["#e5323e", "#8b7cf6", "#f59e6b", "#38bdb0", "#f2a7b5", "#fbbf4c", "#60a5fa"];

/** Initials avatar for mock people (no real faces). */
export function Avatar({
  name,
  seed = 0,
  className,
  ring = false,
}: {
  name: string;
  seed?: number;
  className?: string;
  ring?: boolean;
}) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  const tone = AVATAR_TONES[seed % AVATAR_TONES.length];
  return (
    <span
      aria-hidden
      className={cn(
        "inline-grid size-9 shrink-0 place-items-center rounded-full text-[0.8em] font-semibold text-white",
        ring && "ring-2 ring-app",
        className
      )}
      style={{ background: `linear-gradient(140deg, ${tone}, color-mix(in oklab, ${tone} 45%, #141418))` }}
    >
      {initials}
    </span>
  );
}
