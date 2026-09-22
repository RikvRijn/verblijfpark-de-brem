import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main>
      <Section size="lg" className="pt-24 md:pt-32 text-center">
        <Container className="max-w-[560px]">
          <p className="font-display text-accent font-semibold mb-4" style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)" }}>
            404
          </p>
          <h1 className="font-display font-semibold text-foreground mb-5" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.15 }}>
            Deze pagina bestaat niet
          </h1>
          <p className="font-body text-muted leading-relaxed mb-10">
            Misschien is de link verplaatst of verlopen. Ga terug naar de homepage, of neem contact met ons op
            als u iets specifieks zocht.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/" size="lg">Naar de homepage</Button>
            <Button href="/contact" variant="outline" size="lg">Contact opnemen</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
