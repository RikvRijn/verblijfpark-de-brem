import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const description =
  "Verblijfpark De Brem ligt rustig in het groen bij Lille, op korte afstand van Turnhout, Antwerpen en Eindhoven.";

export const metadata: Metadata = {
  title: "Over het park",
  description,
  alternates: { canonical: "/over-het-park" },
  openGraph: {
    title: "Over het park | Verblijfpark De Brem",
    description,
    images: [{ url: "/over-het-park-hero-wide.webp", width: 1920, height: 500 }],
  },
};

const reisafstanden = [
  { plaats: "Turnhout", tijd: "circa 20 minuten" },
  { plaats: "Antwerpen", tijd: "circa 40 minuten" },
  { plaats: "Eindhoven", tijd: "circa 45 minuten" },
  { plaats: "Tilburg en Breda", tijd: "circa 1 uur" },
];

const uitstapjes = [
  {
    title: "Mega Speelstad Wechelderzande",
    description: "Binnenspeelparadijs voor kinderen, in het naburige Wechelderzande.",
    href: "https://www.speelstad.be/",
  },
  {
    title: "Turnhout",
    description: "Gezellige stad met winkels en terrasjes, op circa 20 minuten rijden.",
    href: "https://www.visitturnhout.be/nl",
  },
  {
    title: "Wandelen en fietsen",
    description: "De bossen rond Lille lenen zich uitstekend voor een wandeling of fietstocht.",
  },
  {
    title: "Bobbejaanland",
    description: "Pretpark in Lichtaart, leuk uitje voor het hele gezin.",
    href: "https://www.bobbejaanland.be/",
  },
  {
    title: "Antwerpen",
    description: "Voor een dagje shoppen of cultuur is Antwerpen binnen driekwartier te doen.",
    href: "https://visit.antwerpen.be/nl",
  },
];

export default function OverHetParkPage() {
  return (
    <main>
      <Section size="lg" className="pt-16 md:pt-20 pb-8 md:pb-10 text-center">
        <Container className="max-w-[680px]">
          <h1 className="font-display font-semibold text-foreground mb-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)", lineHeight: 1.1 }}>
            Over het park
          </h1>
          <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1.05rem" }}>
            Verblijfpark De Brem ligt rustig tussen het groen in Lille, aan de Poeyelheide. Genoeg ruimte om
            op adem te komen, en toch dichtbij genoeg om zo naar de steden in de buurt te rijden.
          </p>
        </Container>
      </Section>

      {/* Hero-afbeelding, zelfde breedte en afgeronde hoeken als op de andere pagina's */}
      <div className="px-3 sm:px-5 lg:px-8">
        <div className="relative w-full aspect-[1920/500] rounded-[24px] md:rounded-[32px] overflow-hidden">
          <Image
            src="/over-het-park-hero-wide.webp"
            alt="Speeltuin en bloemen op Verblijfpark De Brem, met de groene omgeving op de achtergrond"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Link href="/plattegrond" className="group relative aspect-[4/3] rounded-lg overflow-hidden block border border-line">
              <Image
                src="/plattegrond.jpg"
                alt="Plattegrond van Verblijfpark De Brem"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Link>
            <div>
              <h2 className="font-display font-semibold text-foreground mb-5" style={{ fontSize: "clamp(2rem, 3.8vw, 2.75rem)" }}>
                Rustig in het groen
              </h2>
              <p className="font-body text-muted leading-relaxed">
                De chalets van De Brem staan verspreid tussen hoge dennen, met genoeg afstand tot de buren.
                Een plek om na een dag werken of onderweg tot rust te komen, in Lille, België.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="font-display font-semibold text-on-dark mb-5" style={{ fontSize: "clamp(2rem, 3.8vw, 2.75rem)" }}>
                Dichtbij, zonder de drukte
              </h2>
              <p className="font-body text-on-dark-muted leading-relaxed max-w-[480px]">
                Vanaf De Brem bereikt u binnen een uur meerdere steden. Een praktische uitvalsbasis, of u nu
                voor werk in de regio bent of gewoon graag erop uit trekt.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {reisafstanden.map((item) => (
                <li key={item.plaats} className="flex items-center justify-between gap-3 font-body text-on-dark border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <span className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-clay flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M12 21c4-4.5 7-8.2 7-11.5A7 7 0 0 0 5 9.5C5 12.8 8 16.5 12 21Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    </svg>
                    {item.plaats}
                  </span>
                  <span className="text-on-dark-muted text-sm">{item.tijd}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { src: "/uitstapje-antwerpen.jpg", alt: "Gevel van het Centraal Station in Antwerpen", label: "Antwerpen" },
              { src: "/uitstapje-bobbejaanland.jpg", alt: "Kettingmolen in een attractiepark, gezien van onderaf", label: "Bobbejaanland" },
            ].map((foto) => (
              <div key={foto.src} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,14,11,0.6) 0%, transparent 45%)" }}
                />
                <span className="absolute bottom-5 left-5 font-display text-lg font-semibold text-on-dark">
                  {foto.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-2">
        <Container>
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <h2 className="font-display font-semibold text-foreground" style={{ fontSize: "clamp(2rem, 3.8vw, 2.75rem)" }}>
              Op stap in de omgeving
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {uitstapjes.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} href={item.href} external />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[560px] text-center">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">Meer weten over het park?</h2>
          <p className="font-body text-muted leading-relaxed mb-8">
            Bel of mail ons gerust, we vertellen u graag meer over De Brem en de omgeving.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="tel:+3214880214" size="lg">+32 (0)14 88 02 14</Button>
            <Button href="mailto:info@verblijfparkdebrem.be" variant="outline" size="lg">
              info@verblijfparkdebrem.be
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
