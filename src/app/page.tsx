import Link from "next/link";
import Image from "next/image";
import { CallToAction } from "@/components/CallToAction";
import { ExternalLink } from "@/components/ExternalLink";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { StatusBadge } from "@/components/StatusBadge";
import { featuredProjects } from "@/data/projects";
import { getProfileName, profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { socialLinks } from "@/data/socialLinks";

const careerSteps = [
  {
    period: "2022",
    title: "Webサイト制作",
    description: "HTML、CSS、JavaScript、WordPressを用いたWebサイト制作(キャリア初期)",
  },
  {
    period: "2023〜2025",
    title: "業務システム開発",
    description: "C#・SQLによる見積作成システムの更改、業務システムのマイグレーション、ERP基幹システムの保守・運用",
  },
  {
    period: "2025〜現在",
    title: "バックエンドAPI開発",
    description: "Kotlin・Spring Bootを用いたREST APIの設計・実装、既存機能の改修、テスト、リリース",
  },
];

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
            <Link className="inline-flex items-center justify-center rounded-md bg-accent-400 px-5 py-3 text-sm font-semibold text-surface-950 transition hover:bg-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300" href="/experience">
              Experienceを見る
            </Link>
            <Link className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-300 hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300" href="/projects">
              Projectsを見る
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
          <h2 className="mt-5 text-sm font-semibold text-accent-300">できること</h2>
          <div className="mt-3 grid gap-3">
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
          label="Career"
          title="経歴の流れ"
          description="システムエンジニアとして約4年半。Webサイト制作から業務システム開発を経て、現在はバックエンドAPI開発を担当しています。"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {careerSteps.map((step) => (
            <article key={step.title} className="rounded-lg border border-white/10 bg-surface-850 p-6">
              <p className="text-sm font-semibold text-accent-300">{step.period}</p>
              <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{step.description}</p>
            </article>
          ))}
        </div>
        <Link
          className="mt-6 inline-flex items-center rounded-md text-sm font-semibold text-accent-300 transition hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
          href="/experience"
        >
          職務経歴の詳細を見る
          <span aria-hidden="true" className="ml-1">→</span>
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          label="Featured Projects"
          title="注目作品"
          description="AIを活用した開発手法を実践するための個人開発です。設計意図や課題解決の過程も詳細ページにまとめています。"
        />
        {featuredProjects.length === 1 ? (
          <FeaturedProjectWide project={featuredProjects[0]} />
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
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
          description="職務経歴、スキル、個人開発をそれぞれのページに整理しています。"
          primaryHref="/experience"
          primaryLabel="Experienceを見る"
          secondaryHref="/skills"
          secondaryLabel="Skillsを見る"
        />
      </section>
    </>
  );
}

function FeaturedProjectWide({ project }: { project: (typeof featuredProjects)[number] }) {
  return (
    <article className="mt-8 grid overflow-hidden rounded-lg border border-white/10 bg-surface-850 md:grid-cols-[0.9fr_1.1fr]">
      <div className="aspect-[16/10] bg-surface-800 md:aspect-auto md:h-full">
        <Image
          src={project.thumbnail}
          alt={project.imageAlt}
          width={1200}
          height={750}
          sizes="(min-width: 768px) 45vw, 100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-zinc-300">{project.kind}</span>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 leading-7 text-zinc-300">{project.overview}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech) => (
            <li key={tech} className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs text-zinc-200">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center rounded-md bg-accent-400 px-5 py-3 text-sm font-semibold text-surface-950 transition hover:bg-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300"
          >
            詳細を見る
          </Link>
          {project.links.github?.enabled && project.links.github.href ? (
            <ExternalLink
              href={project.links.github.href}
              className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-300 hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300"
            >
              GitHub
            </ExternalLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
