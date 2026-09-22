import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Faciliteiten",
  description:
    "Alle voorzieningen op Verblijfpark De Brem in Lille: sanitair met wasserette, chemisch lozingspunt, containerpark, petanquebanen, speeltuin en parkeergelegenheid bij elke chalet.",
  alternates: { canonical: "/faciliteiten" },
};

const faciliteiten = [
  {
    title: "Sanitair blok met wasserette",
    description:
      "Een sanitair blok met toiletten, douches en een wasserette, zodat u ook tijdens uw verblijf uw was kunt doen.",
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="14" r="4.3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="14" r="1.6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 6.2h1.2M11 6.2h1.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Chemisch lozingspunt",
    description: "Een vast lozingspunt op het park om het chemisch toilet van uw camper of caravan te legen.",
    icon: (
      <>
        <path
          d="M12 3.5c-2.3 2.9-3.8 5.3-3.8 7.2a3.8 3.8 0 0 0 7.6 0c0-1.9-1.5-4.3-3.8-7.2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M6 18.5h12M7.5 20.5h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Containerpark",
    description: "Een eigen containerpark op het terrein om uw afval gescheiden kwijt te kunnen.",
    icon: (
      <>
        <path
          d="M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M7 7l1 12.2a2 2 0 0 0 2 1.8h4a2 2 0 0 0 2-1.8L17 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 10.5v7M14 10.5v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Petanquebanen",
    description: "Petanquebanen op het park voor een potje jeu de boules met de buren.",
    icon: (
      <>
        <circle cx="8" cy="9.5" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.5" cy="9.5" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12.2" cy="17" r="1.7" stroke="currentColor" strokeWidth="1.6" />
      </>
    ),
  },
  {
    title: "Speeltuin voor kinderen",
    description: "Een speeltuin met glijbaan, schommels en wipwappen voor de kinderen.",
    icon: (
      <>
        <path d="M5 20V5M19 20V5M5 5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 5v7.5M14 5v7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9.2 13.5h5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Parkeergelegenheid",
    description: "Bij elke chalet hoort een eigen parkeerplek, vlak naast uw verblijf.",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M9.5 16V8h3a2.5 2.5 0 0 1 0 5h-3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
];

const sfeerbeelden = [
  {
    title: "Speeltuin",
    image: "/faciliteiten-speeltuin.webp",
    alt: "Speeltuin met glijbaan, klimtoestel en wipwappen op Verblijfpark De Brem",
  },
  {
    title: "Petanque",
    image: "/faciliteiten-jeudeboules.webp",
    alt: "Gasten spelen petanque op Verblijfpark De Brem",
  },
];

export default function FaciliteitenPage() {
  return (
    <main>
      <Section size="lg" className="pt-16 md:pt-20 text-center">
        <Container className="max-w-[680px]">
          <h1 className="font-display font-semibold text-foreground mb-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)", lineHeight: 1.1 }}>
            Faciliteiten op het park
          </h1>
          <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1.05rem" }}>
            Op Verblijfpark De Brem vindt u de voorzieningen die het verblijf makkelijk maken, van sanitair
            tot een speelplek voor de kinderen.
          </p>
        </Container>
      </Section>

      <Section className="bg-surface-2">
        <Container>
          <h2 className="font-display text-xl font-semibold text-foreground mb-8 text-center">
            Voorzieningen op het park
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {faciliteiten.map((f) => (
              <Card
                key={f.title}
                title={f.title}
                description={f.description}
                icon={
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {f.icon}
                  </svg>
                }
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="font-display text-xl font-semibold text-foreground mb-8 text-center">
            Ontspannen op het park
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[720px] mx-auto">
            {sfeerbeelden.map((s) => (
              <div key={s.title} className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(40,58,45,0.75) 0%, transparent 55%)" }}
                />
                <span className="absolute bottom-5 left-5 font-display text-lg font-semibold text-on-dark">
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface-2">
        <Container className="max-w-[900px]">
          <div className="text-center max-w-[600px] mx-auto mb-8">
            <h2 className="font-display font-semibold text-foreground mb-5" style={{ fontSize: "clamp(2rem, 3.8vw, 2.75rem)" }}>
              Parkeren bij uw chalet
            </h2>
            <p className="font-body text-muted leading-relaxed">
              Bij elke chalet hoort een eigen parkeerplek, vlak naast uw verblijf. Op de plattegrond ziet u
              precies waar u terechtkomt.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-line shadow-[0_20px_48px_rgba(43,71,54,0.12)] mb-8">
            <Image
              src="/faciliteiten-parkeerplekken.webp"
              alt="Rij chalets met eigen parkeerplekken naast elke woning op Verblijfpark De Brem"
              width={1920}
              height={500}
              className="w-full h-auto"
              sizes="(min-width: 900px) 900px, 100vw"
            />
          </div>
          <div className="flex justify-center">
            <Button href="/plattegrond" variant="outline">Bekijk de plattegrond</Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[560px] text-center">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">Vragen over de faciliteiten?</h2>
          <p className="font-body text-muted leading-relaxed mb-8">
            Neem gerust contact op, we helpen u graag verder.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Button href="tel:+3214880214" size="lg">+32 (0)14 88 02 14</Button>
            <Button href="mailto:info@verblijfparkdebrem.be" variant="outline" size="lg">
              info@verblijfparkdebrem.be
            </Button>
          </div>
          <p className="font-body text-sm text-subtle">Poeyelheide z/n, 2275 Lille</p>
        </Container>
      </Section>
    </main>
  );
}
