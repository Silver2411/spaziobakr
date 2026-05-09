import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/context";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { StickyWatermark } from "@/components/StickyWatermark";

// Hanken Grotesk — Helvetica/Aktiv-Grotesk-clone, single family across the
// entire brand: body copy, display, eyebrows, navigation. Brand-1:1.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="it" className={hanken.variable}>
      <body className="bg-bone text-ink antialiased">
        <LanguageProvider>
          <SmoothScroll />
          <Cursor />
          <div className="grain" aria-hidden="true" />
          {children}
          <StickyWatermark />
        </LanguageProvider>
      </body>
    </html>
  );
}
