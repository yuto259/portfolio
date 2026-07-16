import Link from "next/link";
import Image from "next/image";
import { CallToAction } from "@/components/CallToAction";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { featuredProjects } from "@/data/projects";
import { getProfileName, profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { socialLinks } from "@/data/socialLinks";

export default function HomePage() {
  const name = getProfileName();
  const visibleSocialLinks = socialLinks.filter((link) => link.enabled && link.href);
  const mainSkillNames = ["Kotlin", "Spring Boot", "REST API", "C#", "SQL", "Linux", "Git", "Unit Test", "Claude Code", "Codex"];
  const mainSkills = mainSkillNames
    .map((skillName) => skills.find((skill) => skill.name === skillName))
    .filter((skill): skill is NonNullable<typeof skill> => Boolean(skill));

  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold text-accent-300">{profile.heroTitle}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-normal text-white sm:text-5xl">
            {name}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-zinc-100">
            {profile.jobTitle}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">{profile.introduction}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex items-center justify-center rounded-md bg-accent-400 px-5 py-3 text-sm font-semibold text-surface-950 transition hover:bg-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300" href="/projects">
              Projectsを見る
            </Link>
            <Link className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-300 hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300" href="/about">
              Aboutを見る
            </Link>
            <Link className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-300 hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300" href="/contact">
              Contact
            </Link>
          </div>
          {visibleSocialLinks.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              {visibleSocialLinks.map((link) => (
                <ExternalLink key={link.label} href={link.href} className="font-semibold text-accent-300 transition hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300">
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          ) : null}
        </div>
        <div className="rounded-lg border border-white/10 bg-surface-850 p-5 shadow-glow">
          <Image
            src={profile.profileImage}
            alt={profile.profileImageAlt}
            width={800}
            height={800}
            priority
            className="aspect-square w-full rounded-md object-cover"
          />
          <div className="mt-5 grid gap-3">
            {profile.strengths.map((strength) => (
              <p key={strength} className="rounded-md bg-white/[0.04] px-4 py-3 text-sm leading-6 text-zinc-200">
                {strength}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          label="Featured Projects"
          title="注目作品"
          description="AIを活用した開発手法を実践するための個人開発です。設計意図や課題解決の過程も詳細ページにまとめています。"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          label="Skills"
          title="使用技術の一部"
          description="実務で使用しているバックエンド技術、個人開発で使用しているフロントエンド技術、AI活用の進め方を整理しています。"
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {mainSkills.map((skill) => (
            <span key={skill.name} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200">
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <CallToAction
          title="経験と制作物をあわせて確認できます"
          description="職務経験、スキル、個人開発作品を分けて掲載しています。採用検討に必要な情報へ短時間でアクセスできます。"
          primaryHref="/experience"
          primaryLabel="Experienceを見る"
          secondaryHref="/skills"
          secondaryLabel="Skillsを見る"
        />
      </section>
    </>
  );
}
