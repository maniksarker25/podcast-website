import { BulbIcon, ChartIncreaseIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Section, SectionHeader, stagger } from "@/components/shared/section";
import {
  dailyPlays,
  engagement,
  growthInsights,
  hourlyAudience,
  kpis,
  liveStats,
  topContent,
  trafficSources,
} from "@/content/creator-insights";
import { cn } from "@/lib/utils";
import { AreaChart, BarChart, Donut } from "./charts";
import { ExampleBadge } from "./example-badge";

function Panel({ title, children, className, aside }: { title: string; children: React.ReactNode; className?: string; aside?: React.ReactNode }) {
  return (
    <div className={cn("min-w-0 rounded-2xl border border-border bg-card p-5", className)}>
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-sm font-semibold">{title}</h4>
        {aside}
      </div>
      {children}
    </div>
  );
}

const peakHour = hourlyAudience.indexOf(Math.max(...hourlyAudience));

export function InsightsDashboard() {
  return (
    <Section id="insights" className="bg-surface">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Creator insights"
          title="Know what's working — and why."
          description="Track plays, listeners and watch time, see which content people finish and share, and learn when your audience is listening."
        />
        <ul data-reveal className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground lg:justify-end">
          {["Performance tracking", "Audience growth", "Content performance", "Engagement"].map((t) => (
            <li key={t} className="rounded-full border border-border bg-card px-3 py-1.5">
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Dashboard */}
      <div data-reveal className="mt-12 rounded-[1.75rem] border border-border bg-background p-3 shadow-2xl shadow-black/10 sm:p-4">
        <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-1 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex gap-1.5" aria-hidden>
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </span>
            <p className="text-sm font-semibold">Insights · Grace Adeyemi</p>
            <ExampleBadge />
          </div>
          <div className="flex rounded-full bg-secondary p-1 text-xs font-medium">
            {["7 days", "30 days", "90 days"].map((r) => (
              <span key={r} className={cn("rounded-full px-3 py-1", r === "30 days" ? "bg-card shadow-sm" : "text-muted-foreground")}>
                {r}
              </span>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {kpis.map((k, i) => (
            <div key={k.label} style={stagger(i)} className="rounded-2xl border border-border bg-card p-4">
              <dt className="text-xs text-muted-foreground">{k.label}</dt>
              <dd className="mt-2 font-heading text-3xl font-semibold tracking-tight">{k.value}</dd>
              <dd className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-success">
                <HugeiconsIcon icon={ChartIncreaseIcon} className="size-3.5" /> {k.delta}
                <span className="font-normal text-muted-foreground">vs last period</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.7fr_1fr]">
          <Panel
            title="Plays over time"
            aside={
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="size-2 rounded-full bg-brand" /> Plays · Sundays peak
              </span>
            }
          >
            <AreaChart id="insights-plays" values={dailyPlays} className="mt-5 h-48 text-foreground sm:h-56" />
            <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
              <span>30 days ago</span>
              <span>Today</span>
            </div>
          </Panel>
          <Panel title="When your audience listens">
            <BarChart values={hourlyAudience} highlight={peakHour} className="mt-6 h-40 text-foreground" />
            <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
              <span>12 AM</span>
              <span>12 PM</span>
              <span>11 PM</span>
            </div>
            <p className="mt-4 rounded-xl bg-surface-2 p-3 text-xs leading-relaxed">
              <span className="font-semibold">Peak: 7–8 PM.</span>{" "}
              <span className="text-muted-foreground">Schedule live sessions and new episodes for the evening.</span>
            </p>
          </Panel>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.7fr_1fr]">
          <Panel title="Top content">
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[440px] text-left text-sm">
                <thead className="text-xs text-muted-foreground">
                  <tr>
                    <th className="pb-2 font-medium">Title</th>
                    <th className="pb-2 font-medium">Plays</th>
                    <th className="pb-2 font-medium">Completion</th>
                    <th className="pb-2 text-right font-medium">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {topContent.map((row) => (
                    <tr key={row.title}>
                      <td className="py-3 pr-3">
                        <p className="font-medium">{row.title}</p>
                        <p className="text-xs text-muted-foreground">{row.type}</p>
                      </td>
                      <td className="py-3 pr-3 tabular-nums">{row.plays}</td>
                      <td className="py-3 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-16 overflow-hidden rounded-full bg-secondary">
                            <span className="block h-full rounded-full bg-lavender" style={{ width: `${row.completion}%` }} />
                          </span>
                          <span className="text-xs tabular-nums">{row.completion}%</span>
                        </div>
                      </td>
                      <td className="py-3 text-right text-xs font-semibold text-success tabular-nums">{row.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
          <Panel title="Where listeners find you">
            <div className="mt-4 flex items-center gap-5">
              <div className="relative">
                <Donut segments={trafficSources} className="size-32 text-foreground" />
                <span className="absolute inset-0 grid place-items-center text-center">
                  <span>
                    <span className="block font-heading text-2xl font-semibold">38%</span>
                    <span className="block text-[10px] text-muted-foreground">home feed</span>
                  </span>
                </span>
              </div>
              <ul className="min-w-0 flex-1 space-y-2 text-xs">
                {trafficSources.map((s) => (
                  <li key={s.label} className="flex items-center gap-2">
                    <span className="size-2 shrink-0 rounded-full" style={{ background: s.color }} />
                    <span className="flex-1 truncate">{s.label}</span>
                    <span className="text-muted-foreground tabular-nums">{s.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <Panel title="Engagement">
            <dl className="mt-4 grid grid-cols-2 gap-4">
              {engagement.map((e) => (
                <div key={e.label}>
                  <dd className="font-heading text-2xl font-semibold">{e.value}</dd>
                  <dt className="text-xs text-muted-foreground">{e.label}</dt>
                </div>
              ))}
            </dl>
          </Panel>
          <Panel title="Live sessions">
            <dl className="mt-4 space-y-3">
              {liveStats.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between gap-3">
                  <dt className="text-xs text-muted-foreground">{s.label}</dt>
                  <dd className="font-heading text-xl font-semibold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Panel>
          <Panel title="Growth insights" className="md:col-span-2 lg:col-span-1">
            <ul className="mt-4 space-y-3">
              {growthInsights.map((g) => (
                <li key={g.title} className="flex gap-2.5">
                  <HugeiconsIcon icon={BulbIcon} className="mt-0.5 size-4 shrink-0 text-primary" />
                  <p className="text-xs leading-relaxed">
                    <span className="font-semibold">{g.title}.</span>{" "}
                    <span className="text-muted-foreground">{g.text}</span>
                  </p>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </Section>
  );
}
