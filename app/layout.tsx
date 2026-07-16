import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Ewa Trading Co. | Chinese Herbs & Tea in NYC Chinatown";
const description =
  "Visit Ewa Trading Co. at 80 Mulberry Street for Chinese herbs, tea, ginseng, pantry goods, and friendly guidance in English, Cantonese, and Mandarin.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "ewa-trading-chinatown.typeoffline.chatgpt.site";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title,
    description,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Ewa Trading Co.",
      description: "Rooted in Chinatown. Here for generations.",
      type: "website",
      images: [{ url: imageUrl, width: 1731, height: 909, alt: "Ewa Trading Co. storefront in Chinatown" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ewa Trading Co.",
      description: "Rooted in Chinatown. Here for generations.",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
