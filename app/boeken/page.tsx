import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Boeken",
  description: "Bekijk de accommodaties van Verblijfpark De Brem en neem contact op om te boeken.",
  alternates: { canonical: "/boeken" },
};

const accommodaties = [
  { title: "Comforthome 4 pers.", description: "Compleet ingericht chalet voor 4 personen, met terras. Ook beschikbaar zonder huisdieren." },
  { title: "Comforthome 6 pers.", description: "Ruim chalet voor 6 personen, geschikt voor een langer verblijf. Ook beschikbaar zonder huisdieren." },
];

export default function BoekenPage() {
  return (
    <main>
      <Section size="lg" className="pt-16 md:pt-20 text-center">
        <Container className="max-w-[680px]">
          <SectionLabel className="mb-4 justify-center flex">Boeken</SectionLabel>
          <h1 className="font-display font-semibold text-foreground mb-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)", lineHeight: 1.1 }}>
            Online boeken volgt binnenkort
          </h1>
          <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1.05rem" }}>
            We zijn bezig met het inrichten van een nieuw boekingssysteem. Tot die tijd kunt u telefonisch of per
            e-mail een verblijf aanvragen &mdash; we helpen u graag persoonlijk verder.
          </p>
        </Container>
      </Section>

      <Section className="bg-surface-2">
        <Container>
          <h2 className="font-display text-xl font-semibold text-foreground mb-8 text-center">Onze accommodaties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[720px] mx-auto">
            {accommodaties.map((a) => (
              <Card key={a.title} title={a.title} description={a.description} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[560px] text-center">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">Verblijf aanvragen</h2>
          <p className="font-body text-muted leading-relaxed mb-8">
            Bel of mail ons met uw gewenste periode en aantal personen, dan denken we graag met u mee.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Button href="tel:+3214880214" size="lg">+32 (0)14 88 02 14</Button>
            <Button href="mailto:info@verblijfparkdebrem.be" variant="outline" size="lg">
              info@verblijfparkdebrem.be
            </Button>
          </div>
          <Button href="/contact" variant="ghost">Of gebruik het contactformulier</Button>
        </Container>
      </Section>
    </main>
  );
}
