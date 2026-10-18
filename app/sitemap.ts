import type { MetadataRoute } from "next";
import { publishedPosts } from "@/data/posts";
import { regions } from "@/data/regions";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: SITE_URL,
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
  };

  const bolgePages = regions.map((region) => ({
    url: `${SITE_URL}/cilingir/${region.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const mahallePages = regions.flatMap((region) =>
    region.neighborhoods.map((neighborhood) => ({
      url: `${SITE_URL}/cilingir/${region.slug}/${neighborhood.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  const extra = [
    {
      url: `${SITE_URL}/hakkimizda`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/gizlilik-politikasi`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/hizmet-sartlari`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/sss`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/iletisim`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...publishedPosts().map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [home, ...bolgePages, ...mahallePages, ...extra];
}
