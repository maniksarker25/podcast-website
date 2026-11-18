/**
 * Example creator analytics for the dashboard previews on /creators.
 * Illustrative only — not real data from any creator.
 */

/** Plays per day for the last 30 days (Sundays peak). */
export const dailyPlays = [
  3120, 3480, 3390, 3610, 3950, 4410, 6820, 3640, 3820, 3760, 4020, 4380, 4790, 7410, 4010, 4190, 4120, 4460,
  4870, 5210, 8150, 4560, 4720, 4690, 5030, 5480, 5960, 9020, 5140, 5390,
];

export const kpis = [
  { label: "Plays", value: "184.2K", delta: "+18.4%" },
  { label: "Unique listeners", value: "42.7K", delta: "+12.1%" },
  { label: "Hours listened", value: "9,860", delta: "+21.6%" },
  { label: "New followers", value: "3,912", delta: "+9.8%" },
];

/** Share of listening by hour of day (0–23), relative units. */
export const hourlyAudience = [
  8, 5, 3, 3, 4, 9, 22, 41, 38, 27, 21, 19, 24, 22, 18, 17, 20, 29, 44, 58, 52, 36, 21, 13,
];

export const topContent = [
  { title: "Grace Upon Grace, Part 2", type: "Sermon", plays: "21.4K", completion: 74, trend: "+32%" },
  { title: "Sunday Evening Live", type: "Live", plays: "18.9K", completion: 61, trend: "+18%" },
  { title: "A prayer for this week", type: "Clip", plays: "16.2K", completion: 92, trend: "+51%" },
  { title: "Raising Leaders at Home", type: "Podcast", plays: "11.7K", completion: 66, trend: "+9%" },
];

export const trafficSources = [
  { label: "Home feed", value: 38, color: "var(--color-brand)" },
  { label: "Search", value: 21, color: "var(--lavender)" },
  { label: "Your profile", value: 17, color: "#f59e6b" },
  { label: "Nearby", value: 12, color: "#38bdb0" },
  { label: "Shared links", value: 12, color: "var(--rose)" },
];

export const engagement = [
  { label: "Likes", value: "12.4K" },
  { label: "Comments", value: "2,180" },
  { label: "Saves", value: "4,906" },
  { label: "Shares", value: "1,342" },
];

export const liveStats = [
  { label: "Peak live audience", value: "2,416" },
  { label: "Average time in room", value: "34 min" },
  { label: "Hands raised", value: "87" },
];

export const growthInsights = [
  { title: "Sunday 7–9 PM is your strongest window", text: "Listening peaks then. Going live in that slot reached 38% more people." },
  { title: "Clips bring new followers", text: "31% of this month's new followers found you through a Preach Clip." },
  { title: "Your audience is growing in Lagos", text: "Listeners near Lagos grew 22% — try a local live session." },
];
