import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Privacyverklaring van Verblijfpark De Brem B.V. in Lille.",
  alternates: { canonical: "/privacyverklaring" },
};

export default function PrivacyverklaringPage() {
  return (
    <main>
      <Section size="lg" className="pt-16 md:pt-20">
        <Container className="max-w-[720px]">
          <h1 className="font-display font-semibold text-foreground mb-8" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)", lineHeight: 1.1 }}>
            Privacyverklaring
          </h1>

          <div className="font-body text-muted leading-relaxed space-y-8">
            <p>
              Dit privacybeleid is van toepassing op alle sitebezoeken, transacties en overeenkomsten met
              Verblijfpark De Brem B.V., Poeyelheide z/n, 2275 Lille, België. KVK/BTW-nummer: [INPUT NODIG].
            </p>

            <p>
              Wij respecteren de privacy van de bezoekers van onze website en dragen er zorg voor dat de
              persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld. Hoe wij dit precies doen,
              en welke persoonsgegevens wij van u verzamelen voor welke doeleinden, leest u hieronder.
            </p>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Het gebruik van persoonsgegevens</h2>
              <p>
                Bij het gebruiken van onze website verkrijgen wij bepaalde gegevens van u. Dat kunnen
                persoonsgegevens zijn. Wij bewaren en gebruiken uitsluitend de persoonsgegevens die rechtstreeks
                door u worden opgegeven, in het kader van de door u gevraagde dienst (bijvoorbeeld via het
                contactformulier), of waarvan bij opgave duidelijk is dat ze aan ons worden verstrekt om te
                verwerken. Wij gebruiken uw persoonsgegevens niet voor andere doeleinden, tenzij u daar vooraf
                toestemming voor heeft gegeven of wij dit op grond van de wet mogen of moeten doen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Doeleinden van gebruik</h2>
              <p className="mb-4">
                Om u optimaal van dienst te kunnen zijn, is het nodig dat Verblijfpark De Brem in bepaalde gevallen
                uw persoonsgegevens opslaat. Wij gebruiken uw persoonsgegevens voor:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>het verlenen van toegang tot onze website;</li>
                <li>de uitvoering van overeenkomsten, transacties en diensten;</li>
                <li>relatiebeheer, waaronder contact opnemen als u daarom verzoekt;</li>
                <li>inzicht krijgen in het gebruik van onze website;</li>
                <li>product- en dienstontwikkeling;</li>
                <li>het bepalen van strategie en beleid;</li>
                <li>zo nodig het achterhalen van onrechtmatige gedragingen jegens Verblijfpark De Brem, haar relaties en haar medewerkers.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Omschrijving van de persoonsgegevens</h2>
              <p className="mb-4">Voor bovengenoemde doeleinden verwerken wij de volgende persoonsgegevens van u:</p>
              <ul className="space-y-2 list-disc pl-5">
                <li>NAW-gegevens;</li>
                <li>geslacht;</li>
                <li>e-mailadres;</li>
                <li>(mobiel) telefoonnummer;</li>
                <li>IP-adres;</li>
                <li>technische browserinformatie;</li>
                <li>cookie-ID;</li>
                <li>klik- en surfgedrag.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Bewaartermijnen</h2>
              <p>
                Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk is om de in deze privacyverklaring
                genoemde doeleinden te bereiken.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Vertrouwelijkheid en verstrekking aan derden</h2>
              <p>
                Wij gaan vertrouwelijk met uw persoonsgegevens om. De persoonsgegevens die wij via onze website
                verzamelen, verstrekken wij niet aan derde partijen voor hun eigen direct-marketingdoeleinden. Wij
                verstrekken uw gegevens ook niet aan andere partijen, tenzij u hier vooraf toestemming voor heeft
                gegeven, dit noodzakelijk is voor de uitvoering van de overeenkomst, of wij dit op grond van de wet
                mogen of moeten doen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Gegevensbeveiliging</h2>
              <p>
                Verblijfpark De Brem maakt gebruik van zorgvuldige veiligheidsprocedures voor de bescherming van de
                verwerkte gegevens, onder meer om te voorkomen dat onbevoegden onbedoeld toegang krijgen tot deze
                gegevens. Alleen de noodzakelijke personen hebben toegang tot uw gegevens.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Cookies</h2>
              <p className="mb-4">
                Op deze website worden cookies gebruikt om het bezoek te monitoren. Cookies zijn kleine
                informatiebestandjes die bij het bezoeken van een website automatisch kunnen worden opgeslagen op
                of uitgelezen van uw apparaat. Wij gebruiken cookies om:
              </p>
              <ul className="space-y-2 list-disc pl-5 mb-4">
                <li>functionaliteiten van de website mogelijk te maken en de website te beschermen (technische of functionele cookies);</li>
                <li>het gebruik van de website te analyseren en op basis daarvan te verbeteren (analytische cookies).</li>
              </ul>
              <p className="mb-4">
                Wij gebruiken op dit moment geen technische of functionele cookies. Voor statistieken over het
                gebruik van onze website gebruiken wij Google Analytics.
              </p>
              <p>
                U kunt zelf kiezen of u cookies accepteert. Bij de meeste browsers worden cookies automatisch
                geaccepteerd, maar u kunt uw browserinstellingen meestal zo wijzigen dat cookies worden geweigerd.
                Kiest u ervoor cookies niet te accepteren, dan kan het zijn dat u niet alle mogelijkheden van deze
                website kunt gebruiken.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Links naar andere websites</h2>
              <p>
                Onze website bevat links naar andere websites. Deze privacyverklaring is niet van toepassing op
                websites van derden waarnaar wordt gelinkt. Wij kunnen niet garanderen dat deze derden op een
                betrouwbare of veilige manier met uw persoonsgegevens omgaan. Raadpleeg daarom altijd de
                privacyverklaring van de website die u bezoekt.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Uw rechten</h2>
              <p>
                U mag ons vragen om inzage in de gegevens die van u zijn opgeslagen. Ook kunt u ons verzoeken deze
                gegevens te wijzigen, over te dragen of te verwijderen. Dit kan via{" "}
                <a href="mailto:info@verblijfparkdebrem.be" className="text-accent hover:underline">info@verblijfparkdebrem.be</a>{" "}
                of telefonisch via +32 (0)14 88 02 14.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Wijzigingen</h2>
              <p>
                Wij behouden ons het recht voor deze privacyverklaring aan te passen. Wijzigingen worden op onze
                website gepubliceerd.
              </p>
            </section>

            <section>
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">Klachten</h2>
              <p>
                Heeft u een klacht over de verwerking van uw persoonsgegevens? Neem gerust eerst contact met ons
                op. U heeft daarnaast het recht om een klacht in te dienen bij de Gegevensbeschermingsautoriteit
                (GBA).
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}
