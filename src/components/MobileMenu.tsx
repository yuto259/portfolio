"use client";

import { useEffect, useId, useState } from "react";
import { Navigation } from "@/components/Navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white transition hover:border-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300"
      >
        <span aria-hidden="true" className="space-y-1.5">
          <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </span>
      </button>
      {isOpen ? (
        <>
          <div
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setIsOpen(false)}
          />
          <div id={menuId} className="absolute left-4 right-4 top-20 z-50 rounded-lg border border-white/10 bg-surface-900 p-3 shadow-glow">
            <Navigation orientation="vertical" onNavigate={() => setIsOpen(false)} />
          </div>
        </>
      ) : null}
    </div>
  );
}
