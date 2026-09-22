import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Verblijfpark De Brem in Lille voor vragen, een verblijfsaanvraag of huisvesting voor uw medewerkers.",
  alternates: { canonical: "/contact" },
};

// Let op: er is nog geen backend of e-maildienst (bv. Formspree of een serverless function) aan
// dit project gekoppeld. Het formulier hieronder (ContactForm) opent daarom bij versturen de
// eigen mailapp van de bezoeker in plaats van een "verzonden"-melding te faken. Zodra er een
// echte backend is, kan ContactForm's onSubmit vervangen worden door een echte verzendactie.

export default function ContactPage() {
  return (
    <main>
      {/* Intro */}
      <Section size="lg" className="pt-16 md:pt-20 pb-8 md:pb-10 text-center">
        <Container className="max-w-[680px]">
          <h1
            className="font-display font-semibold text-foreground mb-5"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)", lineHeight: 1.1 }}
          >
            Contact
          </h1>
          <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1.05rem" }}>
            Vraag over een verblijf, een chalet voor uzelf of huisvesting voor uw medewerkers? Neem
            gerust contact op, we denken graag met u mee.
          </p>
        </Container>
      </Section>

      {/* Direct contact */}
      <Section size="sm" className="bg-surface-2">
        <Container className="max-w-[720px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <a
              href="tel:+3214880214"
              className="group flex flex-col items-center gap-3 rounded-lg border border-line bg-surface p-8 text-center transition-all duration-200 hover:border-line-strong hover:shadow-[0_8px_28px_rgba(43,71,54,0.08)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-dim text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 .8l.8 3.6a1 1 0 0 1-.5 1.1L7 10.5a11 11 0 0 0 6.5 6.5l1-1.8a1 1 0 0 1 1.1-.5l3.6.8a1 1 0 0 1 .8 1V19a1 1 0 0 1-1 1h-1C10.6 20 4 13.4 4 6V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-foreground mb-1">Bellen</p>
                <p className="text-sm text-muted">+32 (0)14 88 02 14</p>
              </div>
            </a>
            <a
              href="mailto:info@verblijfparkdebrem.be"
              className="group flex flex-col items-center gap-3 rounded-lg border border-line bg-surface p-8 text-center transition-all duration-200 hover:border-line-strong hover:shadow-[0_8px_28px_rgba(43,71,54,0.08)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-dim text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="m4.5 6.5 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-foreground mb-1">E-mailen</p>
                <p className="text-sm text-muted">info@verblijfparkdebrem.be</p>
              </div>
            </a>
          </div>
          <p className="font-body text-muted text-sm text-center mt-6">
            We reageren zo snel mogelijk persoonlijk.
          </p>

          <div className="max-w-[480px] mx-auto mt-10 pt-10 border-t border-line">
            <h2 className="font-display text-lg font-semibold text-foreground text-center mb-6">
              Of stuur ons een bericht
            </h2>
            <ContactForm />
          </div>
        </Container>
      </Section>

      {/* Adres en kaart */}
      <Section size="sm">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="font-display font-semibold text-foreground mb-5" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
                Bezoekadres
              </h2>
              <div className="flex items-start gap-3 mb-6">
                <svg
                  className="h-4 w-4 mt-1 text-accent flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21c4-4.5 7-8.2 7-11.5A7 7 0 0 0 5 9.5C5 12.8 8 16.5 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <p className="font-body text-muted leading-relaxed">
                  Poeyelheide z/n
                  <br />
                  2275 Lille, België
                </p>
              </div>
              <p className="font-body text-muted leading-relaxed">
                Liever langs komen? Maak vooraf telefonisch of per e-mail een afspraak, dan maken we
                echt tijd voor u vrij.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-line h-[320px] md:h-[420px]">
              <iframe
                src="https://www.google.com/maps?q=Poeyelheide+z/n,+2275+Lille,+Belgi%C3%AB&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie Verblijfpark De Brem"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Sfeerfoto, zelfde breedte en afgeronde hoeken als op de andere pagina's */}
      <div className="px-3 sm:px-5 lg:px-8 pb-16 md:pb-20">
        <div className="relative w-full aspect-[1920/500] rounded-[24px] md:rounded-[32px] overflow-hidden">
          <Image
            src="/contact-hero-schommel.jpg"
            alt="Kind speelt buiten op een schommel"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </main>
  );
}
