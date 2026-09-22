"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Tijdelijke woonruimte", href: "/tijdelijke-woonruimte" },
  {
    label: "Over het park",
    href: "/over-het-park",
    children: [{ label: "Plattegrond", href: "/plattegrond" }],
  },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 h-[116px] transition-all duration-500 ${
        scrolled ? "bg-background/92 backdrop-blur-md border-b border-line shadow-[0_1px_0_var(--color-line)]" : ""
      }`}
      style={scrolled ? undefined : { background: "linear-gradient(to bottom, #EFEAE0 0%, #F7F4EE 60%, #FFFFFF 100%)" }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 lg:px-10 h-full flex items-center justify-between">
        <Link href="/" aria-label="Verblijfpark De Brem homepage" className="flex items-center">
          <Image
            src="/logo-horizontal-final.png"
            alt="Verblijfpark De Brem"
            width={617}
            height={228}
            className="h-20 w-auto"
            style={{ filter: "drop-shadow(0 2px 5px rgba(23,56,36,0.28))" }}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-12" aria-label="Hoofdnavigatie">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-base font-bold text-foreground hover:text-accent transition-colors duration-150"
                >
                  {link.label}
                  <svg className="h-3 w-3 text-muted transition-transform duration-150 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-150">
                  <div className="min-w-[180px] rounded-lg border border-line bg-surface py-2 shadow-[0_16px_40px_rgba(43,71,54,0.14)]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-body text-foreground hover:bg-surface-2 hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-bold text-foreground hover:text-accent transition-colors duration-150"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Button href="/boeken" size="sm">
            Boek direct
          </Button>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-1"
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-5 h-[1.5px] bg-foreground rounded transition-all duration-250 ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span className={`block w-5 h-[1.5px] bg-foreground rounded transition-all duration-250 ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`block w-5 h-[1.5px] bg-foreground rounded transition-all duration-250 ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-[116px] z-[-1]"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          />
          <div className="md:hidden absolute top-[116px] inset-x-0 bg-background border-b border-line px-6 pb-8 pt-4 flex flex-col gap-6 shadow-lg">
            <nav className="flex flex-col gap-5" aria-label="Mobiel menu">
              {navLinks.map((link) => (
                <div key={link.href} className="flex flex-col gap-3">
                  <Link
                    href={link.href}
                    className="text-base font-medium text-muted hover:text-foreground transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="pl-4 text-sm text-subtle hover:text-foreground transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
            <Button href="/boeken" fullWidth onClick={() => setMenuOpen(false)}>
              Boek direct
            </Button>
          </div>
        </>
      )}
    </header>
  );
}
