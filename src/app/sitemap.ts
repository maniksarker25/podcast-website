import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [
  { path: "", priority: 1 },
  { path: "/creators", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/support", priority: 0.6 },
  { path: "/terms", priority: 0.3 },
  { path: "/privacy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${siteConfig.url}${r.path}`,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
