import type { MetadataRoute } from "next";

import { HOME_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("sitemap.xml", HOME_URL).toString(),
  };
}
