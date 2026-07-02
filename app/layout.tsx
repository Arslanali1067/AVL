import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Aloha AVL | Professional Audio, Video and Lighting",
  description:
    "Production-ready AVL systems integration for churches, venues, campuses, corporate environments and mission-critical spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
