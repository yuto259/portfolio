import Link from "next/link";
import Image from "next/image";
import { CallToAction } from "@/components/CallToAction";
import { ExternalLink } from "@/components/ExternalLink";
import { SectionTitle } from "@/components/SectionTitle";
import { StatusBadge } from "@/components/StatusBadge";
import { featuredProjects, shouldShowProjects } from "@/data/projects";
import { getProfileName, profile } from "@/data/profile";
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
    period: "2025〜2026",
    title: "バックエンドAPI開発",
    description: "Kotlin・Spring Bootを用いたREST APIの設計・実装、既存機能の改修、テスト、リリース",
  },
];

const profileSummary = [
  { term: "実務経験", description: "約4年半" },
  { term: "主な実務技術", description: "C# / SQL / Kotlin / Spring Boot" },
  { term: "経験工程", description: "調査 / 設計 / 実装 / テスト / 保守・改修" },
  { term: "所在地", description: "沖縄県" },
];

const mainSkillNames = ["Kotlin", "Spring Boot", "C#", "SQL", "Linux", "Git", "単体テスト", "結合テスト", "Claude Code", "Codex"];

export default function HomePage() {
  const name = getProfileName();
  const githubLink = socialLinks.find((link) => link.kind === "GitHub" && link.enabled && link.href);

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
              職務経歴を見る
            </Link>
            {shouldShowProjects ? (
              <Link className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-300 hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300" href="/projects">
                制作物を見る
              </Link>
            ) : null}
            {githubLink ? (
              <ExternalLink href={githubLink.href} className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-300 hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300">
                GitHub
              </ExternalLink>
            ) : null}
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-surface-850 p-6 shadow-glow">
          <div className="flex items-center gap-4">
            <Image
              src={profile.profileImage}
              alt={profile.profileImageAlt}
              width={96}
              height={96}
              priority
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-bold text-white">{name}</p>
              <p className="mt-1 text-sm text-zinc-400">{profile.jobTitle}</p>
            </div>
          </div>
          <dl className="mt-6 grid gap-4 border-t border-white/10 pt-6 text-sm">
            {profileSummary.map((item) => (
              <div key={item.term} className="grid grid-cols-[7rem_1fr] gap-3">
                <dt className="font-semibold text-accent-300">{item.term}</dt>
                <dd className="text-zinc-200">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          label="Career"
          title="経歴の流れ"
          description="システムエンジニアとして約4年半。Webサイト制作から業務システム開発を経て、バックエンドAPI開発を経験してきました。"
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

      {shouldShowProjects ? (
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionTitle
            label="Featured Project"
            title="個人開発"
            description="個人開発で制作しているWebゲームです。設計やテストの取り組みも詳細ページにまとめています。"
          />
          {featuredProjects.map((project) => (
            <article key={project.slug} className="mt-8 rounded-lg border border-white/10 bg-surface-850 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge status={project.status} />
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-zinc-300">{project.kind}</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-zinc-300">{project.overview}</p>
              <ul className="mt-5 grid max-w-3xl gap-2">
                {project.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-zinc-300">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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
            </article>
          ))}
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          label="Skills"
          title="使用技術の一部"
          description="実務で使用しているバックエンド技術を中心に掲載しています。詳しい一覧はSkillsページにまとめています。"
        />
        <ul className="mt-8 flex flex-wrap gap-2">
          {mainSkillNames.map((skillName) => (
            <li key={skillName} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-200">
              {skillName}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <CallToAction
          title="経験とスキルを確認できます"
          description="職務経歴とスキルをそれぞれのページに整理しています。"
          primaryHref="/experience"
          primaryLabel="Experienceを見る"
          secondaryHref="/skills"
          secondaryLabel="Skillsを見る"
        />
      </section>
    </>
  );
}
