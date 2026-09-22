import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer bij het gebruik van de website van Verblijfpark De Brem B.V.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <main>
      <Section size="lg" className="pt-16 md:pt-20">
        <Container className="max-w-[720px]">
          <h1 className="font-display font-semibold text-foreground mb-8" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)", lineHeight: 1.1 }}>
            Disclaimer
          </h1>

          <div className="font-body text-muted leading-relaxed space-y-6">
            <p>
              Verblijfpark De Brem B.V. heeft grote zorgvuldigheid in acht genomen bij het samenstellen en
              onderhouden van deze website. Desondanks is het mogelijk dat er op de website onjuistheden en/of
              onvolkomenheden voorkomen. Verblijfpark De Brem B.V. aanvaardt geen aansprakelijkheid voor schade als
              gevolg van deze onjuistheden en/of onvolkomenheden, noch voor problemen die worden veroorzaakt door
              het gebruiken of verspreiden van deze informatie.
            </p>

            <p>
              Op de website kan, onder meer via links, worden verwezen naar informatie die wordt verstrekt of
              aangeboden door derden. De inhoud van deze informatie wordt door Verblijfpark De Brem B.V. niet nader
              beoordeeld op redelijkheid, juistheid, volledigheid of actualiteit. Verblijfpark De Brem B.V. wijst
              iedere aansprakelijkheid in dit kader nadrukkelijk van de hand.
            </p>

            <p>
              Bezoekers zijn uitsluitend gerechtigd tot het online bekijken van de aangeboden informatie en het
              gebruik van de aangeboden functionaliteiten. Zonder voorafgaande uitdrukkelijke toestemming van
              Verblijfpark De Brem B.V. is het niet toegestaan enige inhoud of functionaliteit over te nemen, te
              vermenigvuldigen of op welke wijze dan ook te publiceren.
            </p>

            <p>
              Informatie die per e-mail via internet naar Verblijfpark De Brem B.V. wordt verzonden is niet
              beveiligd, tenzij in de privacyverklaring anders is aangegeven. De inhoud van een bericht kan daarom
              niet als vertrouwelijk worden aangemerkt en verzending gebeurt op eigen risico.
            </p>

            <p>Op deze website, de privacyverklaring en deze disclaimer is het Belgische recht van toepassing.</p>

            <p>
              Verblijfpark De Brem B.V.
              <br />
              Poeyelheide z/n, 2275 Lille, België
              <br />
              +32 (0)14 88 02 14 · info@verblijfparkdebrem.be
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
