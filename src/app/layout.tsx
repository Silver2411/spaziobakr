import type { Metadata, Viewport } from "next";
import { Inter_Tight, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/context";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

// Modern geometric grotesk — distinctive but not elegant, brand-identity tone.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spaziobakr.vercel.app"),
  title: {
    default: "Spazio BAKR — Concrete loft for shooting & content",
    template: "%s — Spazio BAKR",
  },
  description:
    "A minimal concrete loft in Milan. A space for editorial shoots, brand content, video, podcast and private events.",
  openGraph: {
    title: "Spazio BAKR — Concrete loft for shooting & content",
    description:
      "A minimal concrete loft in Milan. A space for editorial shoots, brand content, video, podcast and private events.",
    type: "website",
    siteName: "Spazio BAKR",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f5f2ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${interTight.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body className="bg-bone text-ink antialiased">
        <LanguageProvider>
          <SmoothScroll />
          <Cursor />
          <div className="grain" aria-hidden="true" />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
