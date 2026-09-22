import type { Metadata } from "next";
import { Fraunces, Inter, Ovo, Yeseva_One } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
  display: "swap",
});

const yesevaOne = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yeseva",
  display: "swap",
});

const siteName = "Verblijfpark De Brem";
const defaultDescription =
  "Verblijfpark De Brem in Lille, België. Chalets in een rustige, groene omgeving vlakbij Turnhout en Antwerpen.";

export const metadata: Metadata = {
  title: {
    default: "Verblijfpark De Brem | Lille, België",
    template: "%s | Verblijfpark De Brem",
  },
  description: defaultDescription,
  metadataBase: new URL("https://www.verblijfparkdebrem.be"),
  alternates: {
    canonical: "https://www.verblijfparkdebrem.be",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName,
    title: siteName,
    description: defaultDescription,
    url: "https://www.verblijfparkdebrem.be",
    images: [
      {
        url: "/hero-selective-color-v2.webp",
        width: 1713,
        height: 624,
        alt: "Chalet met terras op Verblijfpark De Brem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    images: ["/hero-selective-color-v2.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Verblijfpark De Brem",
  url: "https://www.verblijfparkdebrem.be",
  telephone: "+32 14 88 02 14",
  email: "info@verblijfparkdebrem.be",
  image: "https://www.verblijfparkdebrem.be/hero-selective-color-v2.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Poeyelheide z/n",
    postalCode: "2275",
    addressLocality: "Lille",
    addressCountry: "BE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${inter.variable} ${ovo.variable} ${yesevaOne.variable}`}>
      <body className="antialiased bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <SmoothScroll />
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
