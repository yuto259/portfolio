"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { shouldShowProjects } from "@/data/projects";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  ...(shouldShowProjects ? [{ href: "/projects", label: "Projects" }] : []),
] as const;

type NavigationProps = {
  className?: string;
  onNavigate?: () => void;
  orientation?: "horizontal" | "vertical";
};

export function Navigation({ className, onNavigate, orientation = "horizontal" }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label="メインナビゲーション">
      <ul className={orientation === "horizontal" ? "flex items-center gap-1" : "flex flex-col gap-1"}>
        {navItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={onNavigate}
                className={`block rounded-md px-3 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300 ${
                  isActive
                    ? "bg-accent-400/12 text-accent-200"
                    : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
