"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

function up(delay: number) {
  return {
    initial: { opacity: 0, y: 20 } as const,
    animate: { opacity: 1, y: 0 } as const,
    transition: { duration: 0.65, ease, delay },
  };
}

// Enige scroll-moment op de pagina, bewust voorbehouden aan het foto-overzicht
function revealTile(delay = 0) {
  return {
    initial: { opacity: 0, scale: 0.96 } as const,
    whileInView: { opacity: 1, scale: 1 } as const,
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease, delay },
  };
}

const usps = [
  {
    label: "Huisvesting voor uw personeel",
    icon: (
      <>
        <circle cx="8.5" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="9" r="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 19c0-3 2.5-5 5-5s5 2 5 5M14 19c0-2.2 1.6-4 4-4s3.5 1.6 3.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Vlakbij Turnhout en Antwerpen",
    icon: (
      <>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 21c4-4.5 7-8.2 7-11.5A7 7 0 0 0 5 9.5C5 12.8 8 16.5 12 21Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Chalets die klaarstaan voor gebruik",
    icon: (
      <path d="M4 19V9l8-5 8 5v10H4Zm5 0v-6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

const overzicht = [
  { title: "Tijdelijke woonruimte", href: "/tijdelijke-woonruimte", image: "/tijdelijke-woonruimte-tile.webp", alt: "Chalet als tijdelijke woonruimte op Verblijfpark De Brem" },
  { title: "Faciliteiten", href: "/faciliteiten", image: "/faciliteiten-jeudeboules.webp", alt: "Gasten spelen petanque op Verblijfpark De Brem" },
  { title: "Omgeving", href: "/over-het-park", image: "/omgeving-bos.webp", alt: "Bosrijke omgeving rond Verblijfpark De Brem in Lille" },
];

export function HomeContent() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-3 sm:px-5 lg:px-8">
        <div className="relative h-[270px] md:h-[700px] w-full rounded-[24px] md:rounded-[32px] overflow-hidden">
          <Image
            src="/hero-selective-color-v2.webp"
            alt="Chalet met terras op Verblijfpark De Brem"
            fill
            priority
            className="object-cover object-[68%_center] md:object-center"
            style={{ filter: "saturate(1.18) contrast(1.04) sepia(0.14) hue-rotate(-6deg) brightness(1.03)" }}
            sizes="100vw"
          />
          {/* Zachte, gerichte schaduwvlek achter de titel — geen harde kaart, wel genoeg contrast tegen de boomstammen */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 45% 50% at 15% 82%, rgba(10,14,11,0.55) 0%, rgba(10,14,11,0.2) 55%, transparent 78%)" }}
          />
          <motion.div {...up(0.1)} className="absolute left-6 bottom-10 md:left-10 md:bottom-14 max-w-[360px]">
            {/* Op mobiel staat de naam al in de header naast het logo — hier zou het dubbelop zijn */}
            <h1
              className="sr-only md:not-sr-only text-white"
              style={{ fontFamily: "var(--font-logo)", fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)", lineHeight: 1.15, textShadow: "0 2px 6px rgba(0,0,0,0.5), 0 8px 28px rgba(0,0,0,0.45)" }}
            >
              Verblijfpark<br /><span className="text-clay">De Brem</span>
            </h1>
            <div className="hidden md:block h-[3px] w-14 bg-clay my-3" />
            <p className="hidden md:block font-body text-white/90" style={{ fontSize: "1rem", textShadow: "0 2px 8px rgba(0,0,0,0.55)" }}>
              Tijdelijk verblijven
            </p>
          </motion.div>
        </div>

        {/* Zoekbalk-vormgeving zoals op de oude site — linkt door naar /boeken i.p.v. een live zoekfunctie te suggereren die er nog niet is */}
        <Container className="relative mt-4 md:-mt-12">
          <motion.div {...up(0.3)}>
            <Link
              href="/boeken"
              className="group bg-surface rounded-xl shadow-[0_20px_48px_rgba(43,71,54,0.16)] p-3 flex flex-col md:flex-row items-stretch gap-2 hover:shadow-[0_24px_56px_rgba(43,71,54,0.2)] transition-shadow"
            >
              {[
                { icon: <path d="M4 12 12 5l8 7M6 10.5V19h12v-8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />, label: "Accommodatietype" },
                { icon: <path d="M7 3v3M17 3v3M4 9h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />, label: "Aankomst en vertrek" },
                { icon: <path d="M17 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-3A3.5 3.5 0 0 0 7 18.5V20M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />, label: "Gasten" },
              ].map((field) => (
                <div key={field.label} className="flex-1 flex items-center gap-2.5 px-4 py-3 rounded-lg md:border-r md:last:border-r-0 border-line">
                  <svg className="h-4 w-4 text-muted flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {field.icon}
                  </svg>
                  <span className="font-body text-sm text-muted">{field.label}</span>
                </div>
              ))}
              <span className="flex items-center justify-center gap-2 font-display font-semibold text-sm rounded-lg px-6 py-3 bg-dark text-on-dark group-hover:bg-accent-dark transition-colors">
                Zoeken
              </span>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* USP's */}
      <Section size="sm" className="!py-8 md:!py-20">
        <Container>
          <div className="grid grid-cols-3 gap-3 md:gap-8">
            {usps.map((usp) => (
              <div key={usp.label} className="flex flex-col items-center text-center gap-1.5 md:gap-3">
                <svg className="h-5 w-5 md:h-8 md:w-8 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {usp.icon}
                </svg>
                <p className="font-body font-bold text-[11px] leading-tight md:text-sm text-foreground max-w-[100px] md:max-w-[200px]">{usp.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Intro */}
      <Section className="bg-surface-2">
        <Container className="max-w-[720px] text-center">
          <h2 className="font-display font-semibold text-foreground mb-5" style={{ fontSize: "clamp(2rem, 3.8vw, 2.75rem)" }}>
            Verblijfpark De Brem in Lille
          </h2>
          <p className="font-body text-muted leading-relaxed mb-8">
            Zoekt u tijdelijke huisvesting voor uw personeel? Verblijfpark De Brem biedt kant-en-klare chalets in
            Lille, vlakbij Turnhout en Antwerpen. Ideaal voor bedrijven die snel en zonder gedoe onderdak willen
            regelen voor arbeidsmigranten of tijdelijke medewerkers. Ook fijn voor wie zelf een tijdje een rustige
            plek zoekt om te wonen.
          </p>
          <Button href="/tijdelijke-woonruimte" variant="outline">Ontdek de mogelijkheden</Button>
        </Container>
      </Section>

      {/* Werknemershuisvesting */}
      <Section className="bg-dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="font-display font-semibold text-on-dark mb-5" style={{ fontSize: "clamp(2rem, 3.8vw, 2.75rem)" }}>
                Huisvesting voor uw personeel
              </h2>
              <p className="font-body text-on-dark-muted leading-relaxed mb-8 max-w-[480px]">
                Heeft uw bedrijf tijdelijk extra woonruimte nodig, bijvoorbeeld voor een bouwproject, seizoenswerk
                of een tijdelijke opdracht in de regio? Verblijfpark De Brem regelt snel en betrouwbaar onderdak
                voor uw arbeidsmigranten of tijdelijke medewerkers.
              </p>
              <Button href="/boeken" variant="primary">Offerte aanvragen voor uw bedrijf</Button>
            </div>
            <ul className="flex flex-col gap-4">
              {[
                "Meerdere chalets tegelijk beschikbaar",
                "Eén vast aanspreekpunt voor uw bedrijf",
                "Flexibele huurperiodes, kort of lang",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-on-dark">
                  <svg className="h-5 w-5 mt-0.5 text-clay flex-shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6 5.6 8 14.2 3.4 9.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Overzicht */}
      <Section>
        <Container>
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <h2 className="font-display font-semibold text-foreground" style={{ fontSize: "clamp(2rem, 3.8vw, 2.75rem)" }}>
              Dit vindt u bij De Brem
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {overzicht.map((item, i) => (
              <motion.div key={item.href} {...revealTile(i * 0.1)}>
                <Link href={item.href} className="group relative aspect-[4/5] rounded-lg overflow-hidden block">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(40,58,45,0.75) 0%, transparent 55%)" }}
                  />
                  <span className="absolute bottom-5 left-5 font-display text-lg font-semibold text-on-dark">
                    {item.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button href="/tijdelijke-woonruimte" size="lg">Bekijk onze accommodaties</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
