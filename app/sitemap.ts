import type { MetadataRoute } from "next";

import { HOME_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: HOME_URL }];
}
