import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "Algemene voorwaarden van Verblijfpark De Brem B.V. in Lille.",
  alternates: { canonical: "/algemene-voorwaarden" },
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <main>
      <Section size="lg" className="pt-16 md:pt-20">
        <Container className="max-w-[720px]">
          <h1 className="font-display font-semibold text-foreground mb-8" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)", lineHeight: 1.1 }}>
            Algemene voorwaarden
          </h1>

          <div className="font-body text-muted leading-relaxed space-y-8">
            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Aankomst en vertrek</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Inchecken vanaf 14u00 tot en met 18u00, een latere incheck is mogelijk op voorafgaandelijke aanvraag.</li>
                <li>Op de dag van vertrek dient u de kampeerplaats te verlaten voor 11u00 en de comforthome voor 10u00.</li>
                <li>Is de kampeerplaats niet vrij voor 11u00 of de comforthome niet vrij voor 10u00, dan brengen we een extra nacht in rekening.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Algemene voorwaarden</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Iedere gast is verplicht het huishoudelijk reglement van het verblijfpark na te leven.</li>
                <li>Het is verboden bijzettentjes, aanhangers of bestelwagens te stallen op het gehuurde perceel.</li>
                <li>De betaalde huurwaarborg van € 75 (comforthomes) wordt binnen 8 werkdagen na vertrek via overschrijving terugbetaald, zodat wij de comforthome grondig kunnen controleren. Waarborgen worden nooit terugbetaald bij de uitcheck zelf.</li>
                <li>Bij schade aan de inboedel of aan de accommodatie zelf wordt de waarborg niet terugbetaald en kunnen we eventuele kosten in rekening brengen.</li>
                <li>Bent u niet binnen 24 uur na de incheck-aankomstdatum aangekomen, dan vervalt het voorschot voor 100% en wordt de verhuring automatisch geannuleerd.</li>
                <li>Bij vroegtijdig vertrek, om welke reden dan ook, wordt er niets terugbetaald.</li>
                <li>Onderverhuring en overdracht van de huur zijn niet toegestaan.</li>
                <li>Alleen de Nederlandse taal is rechtsgeldig. Bij geschillen is uitsluitend de rechtbank van Turnhout bevoegd.</li>
                <li>Door gebruik te maken van onze diensten verklaart u kennis te hebben genomen van deze huurvoorwaarden en hiermee akkoord te gaan.</li>
                <li>Wij verhuren geen comforthomes aan alleenreizenden onder de 21 jaar.</li>
                <li>Het gebruik van vuilzakken van het park is verplicht. Deze zijn verkrijgbaar bij de receptie.</li>
                <li>Sluikstorten is ten strengste verboden.</li>
                <li>De maximaal toegelaten snelheid op het park bedraagt 10 km/u.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Bij reservering</h2>
              <p>De volledige som dient betaald te worden bij het plaatsen van de reservering.</p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Annuleringsvoorwaarden</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Bij annulering tussen de reserveringsbevestiging en 6 weken voor aankomst: 50% van de totale huursom.</li>
                <li>Bij annulering tussen 6 weken en 1 week voor aankomst: 90% van de totale huursom.</li>
                <li>Bij annulering binnen 1 week voor aankomst of op de aankomstdag zelf: de volledige huursom.</li>
                <li>Bij later aankomen of eerder vertrekken dan gereserveerd vindt geen restitutie plaats.</li>
                <li>Annuleren dient schriftelijk te gebeuren.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Opmerkingen</h2>
              <p className="mb-4">
                In periodes met een lager tarief bestaat de mogelijkheid dat er maar een beperkt aantal of geen
                activiteiten plaatsvinden. Bepaalde horeca of faciliteiten kunnen gesloten zijn of beperkte
                openingstijden hebben.
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Huisdieren zijn niet toegelaten in de comforthomes.</li>
                <li>Roken is niet toegestaan in de comforthomes.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Contact</h2>
              <p>
                Verblijfpark De Brem B.V.
                <br />
                Poeyelheide z/n, 2275 Lille, België
                <br />
                +32 (0)14 88 02 14 · info@verblijfparkdebrem.be
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}
