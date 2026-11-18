import { cn } from "@/lib/utils";

/**
 * Generated artwork for mock content (no stock photos): layered gradients picked
 * from a brand-friendly palette by `seed`, with optional typographic title — like
 * real show artwork. Deterministic, so server and client render the same.
 */
const PALETTES = [
  ["#e5323e", "#7a1630", "#2b0f1a"], // brand red
  ["#8b7cf6", "#3b2f8f", "#151233"], // lavender
  ["#f59e6b", "#d9466f", "#3a1530"], // sunset
  ["#38bdb0", "#1d5a7a", "#0f1d2e"], // teal
  ["#f2a7b5", "#b4486a", "#2f1424"], // rose
  ["#fbbf4c", "#c2410c", "#2c1408"], // amber
  ["#94a3b8", "#334155", "#0f172a"], // slate
  ["#a3e635", "#15803d", "#0b2015"], // green
] as const;

export function CoverArt({
  seed,
  title,
  subtitle,
  className,
  rounded = "rounded-xl",
}: {
  seed: number;
  title?: string;
  subtitle?: string;
  className?: string;
  rounded?: string;
}) {
  const [a, b, c] = PALETTES[Math.abs(seed) % PALETTES.length];
  const x = 20 + ((seed * 37) % 60);
  const y = 15 + ((seed * 53) % 55);
  return (
    <div
      aria-hidden
      className={cn("relative isolate overflow-hidden", rounded, className)}
      style={{
        background: `radial-gradient(120% 90% at ${x}% ${y}%, ${a} 0%, transparent 55%), radial-gradient(100% 100% at ${100 - x}% 100%, ${b} 0%, transparent 60%), ${c}`,
      }}
    >
      {/* soft rings, echoing a speaker cone / sound waves */}
      <div
        className="absolute -right-1/4 -bottom-1/4 aspect-square w-[85%] rounded-full opacity-30"
        style={{ background: `repeating-radial-gradient(circle, transparent 0 9px, ${a}55 9px 10px)` }}
      />
      <div className="grain absolute inset-0" />
      {title && (
        <div className="absolute inset-x-0 bottom-0 p-[9%]">
          {subtitle && (
            <p className="mb-1 text-[0.55em] font-semibold tracking-[0.2em] text-white/70 uppercase">{subtitle}</p>
          )}
          <p className="font-heading text-[1.05em] leading-none font-bold tracking-tight text-white uppercase">{title}</p>
        </div>
      )}
    </div>
  );
}
