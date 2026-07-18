import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { getProfileName, profile } from "@/data/profile";
import { shouldShowProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socialLinks";

export function Footer() {
  const enabledLinks = socialLinks.filter((link) => link.enabled && link.href);

  return (
    <footer className="border-t border-white/10 bg-surface-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-zinc-400">{siteConfig.subtitle}</p>
          {profile.showStudioName ? (
            <p className="mt-3 text-sm text-zinc-400">
              個人開発作品は「{profile.studioName}」の名称で制作・公開しています。
            </p>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 text-sm sm:items-end">
          <div className="flex flex-wrap gap-4 sm:justify-end">
            <Link className="text-zinc-300 transition hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300" href="/experience">
              Experience
            </Link>
            {shouldShowProjects ? (
              <Link className="text-zinc-300 transition hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300" href="/projects">
                Projects
              </Link>
            ) : null}
            {enabledLinks.map((link) => (
              <ExternalLink key={link.label} href={link.href} className="text-zinc-300 transition hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300">
                {link.label}
              </ExternalLink>
            ))}
          </div>
          <p className="text-zinc-400">© {new Date().getFullYear()} {getProfileName()}</p>
        </div>
      </div>
    </footer>
  );
}
