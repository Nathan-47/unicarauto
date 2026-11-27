"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SkipLink({ skipTo }: { skipTo: string }) {
  const pathname = usePathname();
  const startRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const start = startRef.current;
    if (start) {
      start.focus({ preventScroll: true });
    }
  }, [pathname]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector<HTMLElement>(skipTo);
    if (target) {
      target.tabIndex = -1;
      target.focus();
      target.addEventListener(
        "blur",
        () => target.removeAttribute("tabindex"),
        { once: true },
      );
    }
  };

  return (
    <>
      <div ref={startRef} tabIndex={-1} style={{ outline: "none" }} />
      <a href={skipTo} onClick={onClick} className="skip-link">
        Skip to content
      </a>
    </>
  );
}
