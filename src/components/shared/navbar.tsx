"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { useRef } from "react";
import { Icons } from "../icons";
import { links } from "./data.navbar";
import NavbarLink from "./link.navbar";

export default function Navbar() {
  const lenis = useLenis();

  const container = useRef(null);
  const animationRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        animationRef.current,
        {
          y: -50,
        },
        {
          delay: 1.9,
          y: 0,
          opacity: 1,
          ease: "expo",
          duration: 2,
          stagger: 0.2,
        }
      );
    },
    { scope: container }
  );

  return (
    <header
      ref={container}
      className="bg-background/50 fixed left-0 right-0 top-0 z-50 flex justify-center p-mobile backdrop-blur-[6px] duration-200 [-webkit-backdrop-filter:blur(6px)] md:p-6"
    >
      <nav
        ref={animationRef}
        className="flex w-full max-w-content items-center justify-between opacity-0"
      >
        <div className="flex w-[200px] items-center justify-start">
          <Icons.logo
            className="logo-hover cursor-pointer"
            onClick={() => lenis?.scrollTo("#hero")}
          />
        </div>
        <ul className="hidden items-center gap-3 md:flex">
          {links.map((item, index) => (
            <NavbarLink key={index} {...item} />
          ))}
        </ul>
        <div className="flex w-[200px] items-center justify-end gap-4">
          <Link
            href={"/contact"}
            className="flex h-[44px] items-center justify-center rounded-[14px] border border-foreground px-6 text-[15px] font-semibold text-foreground shadow-[0px_0px_0px_0px_var(--foreground)] duration-200 hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_0px_var(--foreground)]"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
