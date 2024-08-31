"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import { useRef } from "react";

export default function HeroSection() {
  const lenis = useLenis();
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".intro-animation",
        {
          y: 100,
          opacity: 0,
        },
        {
          delay: 1.3,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
          stagger: 0.2,
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      id="hero"
      ref={container}
      className="flex w-full flex-col items-center gap-4 pb-20 pt-[134px] text-center"
    >
      <h3 className="intro-animation -mb-2.5 text-accend">
        EXAMPLE_SUBHEADLINE
      </h3>
      <h1 className="intro-animation">EXAMPLE_HEADLINE</h1>
      <p className="intro-animation text-[#aeaeae]">EXAMPLE_PARAGRAPH</p>
      <button
        onClick={() =>
          lenis?.scrollTo("#projects", {
            offset: -100,
          })
        }
        className="intro-animation mt-2 rounded-[12px] border border-foreground bg-foreground px-6 py-2.5 font-semibold tracking-tight text-background transition-colors duration-200 hover:bg-transparent hover:text-foreground"
      >
        EXAMPLE_CTA
      </button>
    </section>
  );
}
