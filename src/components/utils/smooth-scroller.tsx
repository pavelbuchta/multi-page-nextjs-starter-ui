"use client";

import gsap from "gsap";
import ReactLenis, { LenisRef } from "lenis/react";
import { ReactNode, useEffect, useRef } from "react";

export default function SmoothScroller({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis
      ref={lenisRef}
      root
      autoRaf={false}
      options={{ lerp: 0.1, duration: 1.2 }}
    >
      {children}
    </ReactLenis>
  );
}
