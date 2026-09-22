import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const description =
  "Tijdelijke woonruimte bij Verblijfpark De Brem in Lille: kant-en-klare chalets voor bedrijven en particulieren, met flexibele huurperiodes van een maand tot een jaar.";

export const metadata: Metadata = {
  title: "Tijdelijke woonruimte",
  description,
  alternates: { canonical: "/tijdelijke-woonruimte" },
  openGraph: {
    title: "Tijdelijke woonruimte | Verblijfpark De Brem",
    description,
    images: [{ url: "/tijdelijke-woonruimte-hero-wide.webp", width: 1920, height: 500 }],
  },
};

const voorzieningen = [
  {
    title: "Twee- of driekamerchalet",
    description: "Geschikt voor 4 of 6 personen, met een indeling die rust en ruimte geeft.",
    icon: (
      <path d="M4 19V9l8-5 8 5v10H4Zm5 0v-6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Complete keuken",
    description: "Koelkast, kookplaat, magnetron, waterkoker en koffiezetapparaat.",
    icon: (
      <path d="M6 3v6M10 3v6M6 6h4M8 9v12M15 3v18M15 8h4a2 2 0 0 1 2 2v2h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Eigen badkamer",
    description: "Douche, toilet en wastafel, voor uzelf of uw medewerkers.",
    icon: (
      <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Zm2 0V6a2 2 0 0 1 2-2h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Zithoek met tv",
    description: "Een plek om tot rust te komen na een werkdag, met verwarming voor de koelere maanden.",
    icon: (
      <path d="M4 16V8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8M3 16h18v2H3v-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Terras met tuinmeubilair",
    description: "Buiten zitten met een parasol, direct voor de deur van uw chalet.",
    icon: (
      <path d="M12 3v8M4 11h16l-2 4H6l-2-4ZM4 21v-6M20 21v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Eigen parkeerplek",
    description: "Naast de chalet, zodat u of uw medewerkers altijd dichtbij staan.",
    icon: (
      <path d="M5 17h14M6 17V9l2-4h8l2 4v8M9 13h1.5a1.5 1.5 0 0 0 0-3H9v3Zm0 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Speeltuin op het park",
    description: "Voor gezinnen die tijdelijk bij De Brem wonen.",
    icon: (
      <path d="M12 3v18M7 7l5-4 5 4M5 21l7-7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Flexibele huurperiode",
    description: "Van een maand tot een jaar, in overleg met u afgestemd.",
    icon: (
      <path d="M12 8v4l3 2M20 12a8 8 0 1 1-8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

const accommodaties = [
  {
    title: "Comforthome 4 pers.",
    description: "Compleet ingericht chalet voor 4 personen, met terras. Ook beschikbaar zonder huisdieren.",
    image: "/hero-chalet-terras.webp",
    alt: "Comforthome chalet met terras op Verblijfpark De Brem",
  },
  {
    title: "Comforthome 6 pers.",
    description: "Ruim chalet voor 6 personen, geschikt voor een langer verblijf. Ook beschikbaar zonder huisdieren.",
    image: "/chalet-blauw-terras.webp",
    alt: "Comforthome chalet met terras op Verblijfpark De Brem",
  },
];

export default function TijdelijkeWoonruimtePage() {
  return (
    <main>
      {/* Intro */}
      <Section size="lg" className="pt-16 md:pt-20 pb-8 md:pb-10 text-center">
        <Container className="max-w-[720px]">
          <style>{`
            @keyframes twFadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
            .tw-intro-fade { animation: twFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both; }
          `}</style>
          <div className="tw-intro-fade">
            <h1
              className="font-display font-semibold text-foreground mb-5"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)", lineHeight: 1.1 }}
            >
              Tijdelijke woonruimte in Lille
            </h1>
            <p className="font-body text-muted leading-relaxed mb-8" style={{ fontSize: "1.05rem" }}>
              Op zoek naar onderdak voor uw personeel, of zelf tijdelijk op zoek naar een plek om te wonen? Bij
              Verblijfpark De Brem huurt u een compleet ingericht chalet, van een maand tot een jaar. Geen
              vakantiesfeer, gewoon een rustige plek om te wonen zolang u dat nodig heeft.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/boeken" size="lg">Verblijf aanvragen</Button>
              <Button href="#accommodaties" variant="outline" size="lg">Bekijk de chalets</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Hero-afbeelding, zelfde breedte en afgeronde hoeken als de homepage-hero */}
      <div className="px-3 sm:px-5 lg:px-8">
        <div className="relative w-full aspect-[1920/500] rounded-[24px] md:rounded-[32px] overflow-hidden">
          <Image
            src="/tijdelijke-woonruimte-hero-wide.webp"
            alt="Chalets van Verblijfpark De Brem tussen de bomen, met een blauw en een wit chalet naast elkaar"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Voor wie */}
      <Section className="bg-surface-2">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
            <Card
              title="Voor bedrijven"
              description="Heeft uw bedrijf tijdelijk extra woonruimte nodig voor een bouwproject, seizoenswerk of een tijdelijke opdracht in de regio? Wij regelen onderdak voor uw arbeidsmigranten of tijdelijke medewerkers, ook als het om meerdere chalets tegelijk gaat."
            />
            <Card
              title="Voor particulieren"
              description="Staat uw huis in de verkoop, wordt er verbouwd, of zoekt u gewoon een rustige periode ergens anders? Bij De Brem huurt u een chalet voor zo lang als u nodig heeft, zonder u aan een vakantiepark te hoeven voelen."
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button href="/boeken" size="lg">Reserveer nu</Button>
          </div>
        </Container>
      </Section>

      {/* Wat mag u verwachten */}
      <Section className="pb-8 md:pb-10">
        <Container>
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <h2 className="font-display font-semibold text-foreground" style={{ fontSize: "clamp(2rem, 3.8vw, 2.75rem)" }}>
              Wat u aantreft in de chalet
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {voorzieningen.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
                icon={
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {item.icon}
                  </svg>
                }
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Accommodaties */}
      <Section id="accommodaties" className="bg-surface-2">
        <Container>
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <h2 className="font-display font-semibold text-foreground" style={{ fontSize: "clamp(2rem, 3.8vw, 2.75rem)" }}>
              Onze accommodaties
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[840px] mx-auto">
            {accommodaties.map((a) => (
              <div key={a.title} className="rounded-lg overflow-hidden border border-line bg-surface">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={a.image}
                    alt={a.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 420px, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container className="max-w-[560px] text-center">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">Woonruimte nodig?</h2>
          <p className="font-body text-muted leading-relaxed mb-8">
            Bel of mail ons met uw gewenste periode en aantal personen of chalets, dan denken we graag met u mee.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Button href="tel:+3214880214" size="lg">+32 (0)14 88 02 14</Button>
            <Button href="mailto:info@verblijfparkdebrem.be" variant="outline" size="lg">
              info@verblijfparkdebrem.be
            </Button>
          </div>
          <Button href="/boeken" variant="ghost">Of vraag direct een verblijf aan</Button>
        </Container>
      </Section>
    </main>
  );
}
