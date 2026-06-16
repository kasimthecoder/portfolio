import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kasim Saifi | Full Stack Web Developer",
  description:
    "Minimal portfolio of Kasim Saifi, a full stack web developer based in Uttar Pradesh, India.",
  keywords: [
    "Kasim Saifi",
    "Full Stack Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Uttar Pradesh",
  ],
  authors: [{ name: "Kasim Saifi" }],
  creator: "Kasim Saifi",
  metadataBase: new URL("https://kasimsaifi.in"),
  openGraph: {
    title: "Kasim Saifi | Full Stack Web Developer",
    description:
      "Full stack web developer specializing in modern, fast, and scalable web applications.",
    url: "https://kasimsaifi.in",
    siteName: "Kasim Saifi",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kasim Saifi | Full Stack Web Developer",
    description:
      "Full stack web developer specializing in modern, fast, and scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">{children}</body>
    </html>
  );
}
