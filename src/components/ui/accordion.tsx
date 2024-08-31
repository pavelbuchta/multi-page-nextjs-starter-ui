"use client";

import { Icons } from "@/components/icons";
import clsx from "clsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

export default function Accordion({
  question,
  answer,
  prefix,
}: {
  question: string;
  answer: string;
  prefix: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="scroll-animation transition-base w-full cursor-pointer rounded-[16px] border border-border bg-background px-8 py-6 text-left hover:bg-background-secondary"
      onClick={() => {
        setOpen((prev) => !prev);
        ScrollTrigger.refresh();
      }}
    >
      <header className="flex w-full items-center justify-between">
        <h6 className="font-medium">{prefix + question}</h6>
        <Icons.arrow
          className={clsx("transition-base ml-3 h-auto w-3.5 min-w-3.5", {
            "-rotate-180": open,
          })}
        />
      </header>
      <div
        className={clsx(
          "transition-base grid w-full overflow-hidden [grid-template-rows:0fr]",
          {
            "[grid-template-rows:1fr]": open,
          }
        )}
      >
        <div className="min-h-0 text-[15px] leading-[150%] text-foreground-secondary [&>div>div>a]:font-semibold [&>div>div>a]:text-foreground [&>div>div>a]:underline">
          <div
            className="pt-4 [&>a]:font-medium [&>a]:text-foreground hover:[&>a]:underline"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      </div>
    </article>
  );
}
