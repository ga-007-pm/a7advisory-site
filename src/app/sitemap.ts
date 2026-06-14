import type { MetadataRoute } from "next"

const BASE = "https://a7advisory.ai"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: BASE,
          he: `${BASE}/he`,
        },
      },
    },
    {
      url: `${BASE}/he`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
