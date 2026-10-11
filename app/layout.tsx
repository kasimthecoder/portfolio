import type { Metadata } from "next";

import { HOME_URL, SITE_ORIGIN } from "@/lib/seo";
import "./globals.css";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "Kasim Saifi — Full-Stack Developer & Product Builder",
  description:
    "Explore Kasim Saifi’s software projects, full-stack development work, developer tools, and approach to building useful digital products.",
  authors: [{ name: "Kasim Saifi" }],
  creator: "Kasim Saifi",
  alternates: { canonical: HOME_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Kasim Saifi — Full-Stack Developer & Product Builder",
    description:
      "Explore Kasim Saifi’s software projects, full-stack development work, developer tools, and approach to building useful digital products.",
    url: HOME_URL,
    siteName: "Kasim Saifi",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kasim Saifi — Full-Stack Developer & Product Builder",
    description:
      "Explore Kasim Saifi’s software projects, full-stack development work, developer tools, and approach to building useful digital products.",
  },
  ...(googleVerification || bingVerification
    ? {
        verification: {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(bingVerification
            ? { other: { "msvalidate.01": bingVerification } }
            : {}),
        },
      }
    : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
