import type { Metadata } from "next";
import "./globals.css";

const title = "Ewa Trading Co. | Chinese Herbs & Tea in NYC Chinatown";
const description =
  "Visit Ewa Trading Co. at 80 Mulberry Street for Chinese herbs, tea, ginseng, pantry goods, and friendly guidance in English, Cantonese, and Mandarin.";
const siteUrl = "https://bkhzhou.github.io/ewatrading/";
const imageUrl = `${siteUrl}og-v2.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/ewatrading/favicon.svg",
    shortcut: "/ewatrading/favicon.svg",
  },
  openGraph: {
    title: "Ewa Trading Co.",
    description: "Rooted in Chinatown. Here for generations.",
    type: "website",
    url: siteUrl,
    images: [{ url: imageUrl, width: 1731, height: 909, alt: "Ewa Trading Co. storefront in Chinatown" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ewa Trading Co.",
    description: "Rooted in Chinatown. Here for generations.",
    images: [imageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
