import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kasim Saifi — Independent Developer & Product Builder",
  description:
    "Kasim Saifi is an independent full-stack developer in India building practical software products and thoughtful digital experiences.",
  keywords: [
    "Kasim Saifi",
    "Full Stack Developer",
    "Product Builder",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "India",
  ],
  authors: [{ name: "Kasim Saifi" }],
  creator: "Kasim Saifi",
  metadataBase: new URL("https://www.kasimsaifi.in"),
  openGraph: {
    title: "Kasim Saifi — Independent Developer & Product Builder",
    description:
      "Software, products and thoughtful digital experiences, made to solve actual problems.",
    url: "https://www.kasimsaifi.in",
    siteName: "Kasim Saifi",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kasim Saifi — Independent Developer & Product Builder",
    description:
      "Software, products and thoughtful digital experiences, made to solve actual problems.",
  },
  robots: { index: true, follow: true },
};

const themeScript = `(()=>{try{const saved=localStorage.getItem("portfolio-theme");if(saved==="light"||saved==="dark")document.documentElement.dataset.theme=saved}catch{}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
