import type { MetadataRoute } from "next";

const baseUrl = "https://www.verblijfparkdebrem.be";

const routes = [
  { path: "", priority: 1 },
  { path: "/tijdelijke-woonruimte", priority: 0.9 },
  { path: "/over-het-park", priority: 0.8 },
  { path: "/faciliteiten", priority: 0.8 },
  { path: "/plattegrond", priority: 0.7 },
  { path: "/boeken", priority: 0.9 },
  { path: "/contact", priority: 0.7 },
  { path: "/algemene-voorwaarden", priority: 0.3 },
  { path: "/privacyverklaring", priority: 0.3 },
  { path: "/disclaimer", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    priority: route.priority,
  }));
}
