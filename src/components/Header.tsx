import Link from "next/link";
import { getProfileName, profile } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { MobileMenu } from "@/components/MobileMenu";
import { Navigation } from "@/components/Navigation";

export function Header() {
  const name = getProfileName();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-surface-950/88 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300">
          <span className="block text-sm font-bold text-white">{siteConfig.name}</span>
          <span className="block text-xs text-zinc-400">
            {name} / {profile.jobTitle}
          </span>
        </Link>
        <Navigation className="hidden md:block" />
        <MobileMenu />
      </div>
    </header>
  );
}
