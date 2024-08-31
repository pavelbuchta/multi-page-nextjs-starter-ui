"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Icons } from "../icons";

gsap.registerPlugin(useGSAP);

export default function OnloadAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(wrapperRef.current, {
        bottom: "100%",
        duration: 1,
        delay: 1,
        ease: "expo",
      });
    },
    { scope: container }
  );

  return (
    <div className="w-full" ref={container}>
      <div
        ref={wrapperRef}
        className="fixed bottom-0 left-0 right-0 top-0 z-[200] overflow-hidden bg-background-secondary"
      >
        <div className="flex h-screen w-full items-center justify-center">
          <Icons.logo />
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
