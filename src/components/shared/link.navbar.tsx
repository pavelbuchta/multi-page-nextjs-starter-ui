"use client";

import { useLenis } from "lenis/react";
import Link from "next/link";

export default function NavbarLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  const lenis = useLenis();

  if (href.startsWith("/")) {
    return (
      <li>
        <Link href={href}>{label}</Link>
      </li>
    );
  }

  return <li onClick={() => lenis?.scrollTo(href)}>{label}</li>;
}
