import { cn } from "@/lib/utils";

/**
 * Lightweight, server-rendered SVG charts for the static dashboard previews.
 * No chart library: the data never changes at runtime.
 */

const smoothPath = (points: [number, number][]) =>
  points.reduce((d, [x, y], i, arr) => {
    if (i === 0) return `M${x},${y}`;
    const [px, py] = arr[i - 1];
    const cx = (px + x) / 2;
    return `${d} C${cx},${py} ${cx},${y} ${x},${y}`;
  }, "");

export function AreaChart({
  values,
  className,
  id,
  stroke = "var(--color-brand)",
  grid = true,
}: {
  values: number[];
  className?: string;
  /** Unique id for the gradient (several charts may be on a page). */
  id: string;
  stroke?: string;
  grid?: boolean;
}) {
  const W = 600;
  const H = 200;
  const max = Math.max(...values) * 1.1;
  const pts = values.map((v, i) => [(i / (values.length - 1)) * W, H - (v / max) * H] as [number, number]);
  const line = smoothPath(pts);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden className={cn("h-40 w-full overflow-visible", className)}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.32" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      {grid &&
        [0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="currentColor" strokeOpacity="0.08" vectorEffect="non-scaling-stroke" />
        ))}
      <path d={`${line} L${W},${H} L0,${H} Z`} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={stroke} strokeWidth="2.25" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
    </svg>
  );
}

export function BarChart({
  values,
  className,
  highlight,
  barClass = "bg-current opacity-20",
  highlightClass = "bg-brand",
}: {
  values: number[];
  className?: string;
  /** Index of the bar to emphasise. */
  highlight?: number;
  barClass?: string;
  highlightClass?: string;
}) {
  const max = Math.max(...values);
  return (
    <div aria-hidden className={cn("flex h-28 items-end gap-[3px]", className)}>
      {values.map((v, i) => (
        <span
          key={i}
          className={cn("flex-1 rounded-t-[3px]", i === highlight ? highlightClass : barClass)}
          style={{ height: `${Math.max(4, (v / max) * 100)}%` }}
        />
      ))}
    </div>
  );
}

export function Donut({
  segments,
  className,
  thickness = 14,
}: {
  segments: { label: string; value: number; color: string }[];
  className?: string;
  thickness?: number;
}) {
  const r = 50 - thickness / 2;
  const c = 2 * Math.PI * r;
  const total = segments.reduce((s, x) => s + x.value, 0);
  // Each arc starts where the previous ones end.
  const arcs = segments.map((s, i) => ({
    ...s,
    len: (s.value / total) * c,
    start: (segments.slice(0, i).reduce((sum, x) => sum + x.value, 0) / total) * c,
  }));
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={cn("size-36 -rotate-90", className)}>
      <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth={thickness} />
      {arcs.map((a) => (
        <circle
          key={a.label}
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={a.color}
          strokeWidth={thickness}
          strokeDasharray={`${Math.max(a.len - 1.2, 0)} ${c}`}
          strokeDashoffset={-a.start}
        />
      ))}
    </svg>
  );
}
