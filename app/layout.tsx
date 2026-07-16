import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ewa Trading Co. | Chinese Herbs & Tea in NYC Chinatown",
  description:
    "Visit Ewa Trading Co. at 80 Mulberry Street for Chinese herbs, tea, ginseng, pantry goods, and friendly guidance in English, Cantonese, and Mandarin.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
