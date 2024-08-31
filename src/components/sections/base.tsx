"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useRef } from "react";

export default function BaseSection({
  id,
  subheadline,
  headline,
  paragraph,
  children,
  layout,
}: {
  id: string;
  subheadline: string;
  headline: string[];
  paragraph: string[];
  children: React.ReactNode;
  layout: "left" | "center" | "right";
}) {
  const formattedHeadline = headline.join(' <br class="max-sm:hidden"/>');
  const formattedParagraph = paragraph.join(' <br class="max-sm:hidden"/>');
  const container = useRef(null);
  const scrollStartRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".scroll-animation",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: scrollStartRef.current,
            start: "bottom 95%",
            end: "top 20%",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      id={id}
      ref={container}
      className={clsx("w-full px-mobile py-10 md:px-12 lg:px-20", {
        "text-left": layout === "left",
        "text-center": layout === "center",
        "text-right": layout === "right",
      })}
    >
      <h3 ref={scrollStartRef} className="scroll-animation text-accend">
        {subheadline}
      </h3>
      <h2
        dangerouslySetInnerHTML={{
          __html: formattedHeadline,
        }}
        className="scroll-animation mb-4"
      />
      <p
        dangerouslySetInnerHTML={{ __html: formattedParagraph }}
        className="scroll-animation text-[#aeaeae]"
      />
      {children}
    </section>
  );
}
