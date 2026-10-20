import type { MetadataRoute } from "next";

const BASE = "https://thevintagepalace.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/venue", priority: 0.9 },
    { path: "/experiences", priority: 0.8 },
    { path: "/gallery", priority: 0.7 },
    { path: "/reviews", priority: 0.7 },
    { path: "/pricing", priority: 0.9 },
    { path: "/contact", priority: 0.8 },
  ];
  const now = new Date();
  return pages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));
}
