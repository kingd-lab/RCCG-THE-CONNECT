import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://rccg-the-connect-sjcs.vercel.app"
  ),

  title: "RCCG The Connect",

  description: "",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "RCCG The Connect",
    description: "",
    url: "https://rccg-the-connect-sjcs.vercel.app",
    siteName: "RCCG The Connect",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "RCCG The Connect",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "RCCG The Connect",
    description: "",
    images: ["/logo.png"],
  },
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
