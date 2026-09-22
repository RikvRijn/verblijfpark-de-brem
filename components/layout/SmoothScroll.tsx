"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const firstRender = useRef(true);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });
    lenisRef.current = lenis;

    // GSAP ScrollTrigger integratie — activeer zodra je ScrollTrigger gebruikt:
    // import gsap from "gsap";
    // gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    // gsap.ticker.lagSmoothing(0);
    // Verwijder dan de RAF-loop hieronder.

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset naar boven bij elke routewissel. Lenis houdt zijn eigen
  // scrollpositie vast over navigaties heen, waardoor een nieuwe pagina
  // anders "beneden" opent op de plek waar je op de vorige pagina stond.
  // De eerste render slaan we over zodat browser-scrollherstel bij reload
  // intact blijft.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
