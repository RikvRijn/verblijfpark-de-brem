import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Plattegrond",
  description: "Bekijk de plattegrond van Verblijfpark De Brem in Lille, met alle verblijfplaatsen, huurcaravans en voorzieningen.",
  alternates: { canonical: "/plattegrond" },
};

export default function PlattegrondPage() {
  return (
    <main>
      <Section size="lg" className="pt-16 md:pt-20 pb-8 md:pb-10 text-center">
        <Container className="max-w-[680px]">
          <h1 className="font-display font-semibold text-foreground mb-5" style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)", lineHeight: 1.1 }}>
            Plattegrond
          </h1>
          <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1.05rem" }}>
            Een overzicht van Verblijfpark De Brem: verblijfplaatsen, huurcaravans, sanitair, speeltuin en de
            overige voorzieningen op het park.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container className="max-w-[1000px]">
          <a
            href="/plattegrond.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl overflow-hidden border border-line shadow-[0_20px_48px_rgba(43,71,54,0.12)]"
          >
            <Image
              src="/plattegrond.jpg"
              alt="Plattegrond van Verblijfpark De Brem met verblijfplaatsen, huurcaravans en voorzieningen"
              width={1195}
              height={896}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(min-width: 1024px) 1000px, 100vw"
            />
          </a>
          <p className="font-body text-sm text-muted text-center mt-4">
            Tik of klik op de plattegrond om hem groter te bekijken.
          </p>
        </Container>
      </Section>

      <Section className="bg-surface-2">
        <Container className="max-w-[560px] text-center">
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">Vragen over een specifieke plek?</h2>
          <p className="font-body text-muted leading-relaxed mb-8">
            Laat ons weten wat u zoekt, dan denken we graag met u mee over de beste plek op het park.
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
