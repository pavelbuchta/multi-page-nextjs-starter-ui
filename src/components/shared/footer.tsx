"use client";

import { Icons } from "@/components/icons";
import constants from "@/config/constants";
import { useLenis } from "lenis/react";
import Link from "next/link";

export default function Footer() {
  const lenis = useLenis();

  return (
    <footer className="flex w-full justify-center px-mobile md:px-6">
      <div className="flex w-full max-w-content items-center justify-end border-t border-border py-8 sm:justify-between">
        <Icons.logo
          className="logo-hover hidden cursor-pointer sm:block"
          onClick={() => lenis?.scrollTo("#hero")}
        />
        <div className="text-sm text-foreground-secondary">
          Made by{" "}
          <Link
            className="text-foreground hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={constants.credit.websiteUrl}
          >
            {constants.credit.agencyName}
          </Link>
        </div>
      </div>
    </footer>
  );
}
