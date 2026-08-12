import { MetadataRoute } from "next";
import { SEO_KEYWORD_PAGES } from "@/data/seoKeywords";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bombaystudio.in";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
  ];

  const seoPageRoutes: MetadataRoute.Sitemap = Object.keys(SEO_KEYWORD_PAGES).map((slug) => ({
    url: `${baseUrl}/seo/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...seoPageRoutes];
}
