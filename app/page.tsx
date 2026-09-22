import type { Metadata } from "next";
import { HomeContent } from "@/components/home/HomeContent";

const title = "Tijdelijke huisvesting in Lille, vlakbij Turnhout en Antwerpen";
const description =
  "Verblijfpark De Brem verhuurt kant-en-klare chalets voor tijdelijke huisvesting in Lille, vlakbij Turnhout en Antwerpen. Voor bedrijven met personeel op een tijdelijke opdracht en voor particulieren.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${title} | Verblijfpark De Brem`,
    description,
  },
  twitter: {
    title: `${title} | Verblijfpark De Brem`,
    description,
  },
};

export default function Home() {
  return <HomeContent />;
}
