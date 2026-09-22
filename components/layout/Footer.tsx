import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const partners = [
  { name: "Iedereen Verdient Vakantie", href: "https://www.iedereenverdientvakantie.be/nl", logo: "/logo-iedereen-verdient-vakantie.png", width: 510, height: 210, className: "h-16" },
  { name: "RecreatieVerzekeringen", href: "https://recreatieverzekeringen.nl/", logo: "/logo-recreatieverzekeringen.png", width: 512, height: 86, className: "h-8" },
];

const companyLinks = [
  { label: "Over het park", href: "/over-het-park" },
  { label: "Plattegrond", href: "/plattegrond" },
  { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
  { label: "Privacyverklaring", href: "/privacyverklaring" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line" role="contentinfo">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-12 md:gap-16">
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Verblijfpark De Brem homepage" className="w-fit">
              <Logo size="lg" />
            </Link>
            <p className="text-sm text-muted max-w-[280px] leading-relaxed">
              Verblijfpark De Brem in Lille. Even lekker tot rust komen in het groen, vlakbij Turnhout en Antwerpen.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-display font-semibold uppercase tracking-widest text-subtle">Park</p>
            <nav className="grid grid-cols-1 gap-3" aria-label="Park links">
              {companyLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-foreground transition-colors w-fit">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs font-display font-semibold uppercase tracking-widest text-subtle">Contact</p>
            <div className="flex flex-col gap-3 text-sm text-muted">
              <div className="flex items-start gap-2.5">
                <svg className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21c4-4.5 7-8.2 7-11.5A7 7 0 0 0 5 9.5C5 12.8 8 16.5 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>Poeyelheide z/n<br />2275 Lille, België</span>
              </div>
              <a href="tel:+3214880214" className="flex items-center gap-2.5 hover:text-foreground transition-colors w-fit">
                <svg className="h-4 w-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 .8l.8 3.6a1 1 0 0 1-.5 1.1L7 10.5a11 11 0 0 0 6.5 6.5l1-1.8a1 1 0 0 1 1.1-.5l3.6.8a1 1 0 0 1 .8 1V19a1 1 0 0 1-1 1h-1C10.6 20 4 13.4 4 6V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                +32 (0)14 88 02 14
              </a>
              <a href="mailto:info@verblijfparkdebrem.be" className="flex items-center gap-2.5 hover:text-foreground transition-colors w-fit">
                <svg className="h-4 w-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="m4.5 6.5 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                info@verblijfparkdebrem.be
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-line bg-surface-2">
        <Container className="py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((partner) => (
              <a
                key={partner.href}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label={partner.name}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className={`${partner.className} w-auto`}
                />
              </a>
            ))}
          </div>
        </Container>
      </div>

      <div className="border-t border-line">
        <Container className="py-5">
          <p className="text-xs text-subtle text-center">
            © {year} Verblijfpark De Brem
          </p>
        </Container>
      </div>
    </footer>
  );
}
