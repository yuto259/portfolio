import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { SectionTitle } from "@/components/SectionTitle";
import { StatusBadge } from "@/components/StatusBadge";
import { getProjectBySlug, projects, shouldShowProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import type { ProjectLink } from "@/types/content";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  if (!shouldShowProjects) {
    return [];
  }

  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!shouldShowProjects || !project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      ...(project.mainImage ? { images: [{ url: project.mainImage, alt: project.imageAlt ?? project.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      ...(project.mainImage ? { images: [project.mainImage] } : {}),
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!shouldShowProjects || !project) {
    notFound();
  }

  const links = [project.links.github, project.links.demo, project.links.store].filter(
    (link): link is ProjectLink => Boolean(link?.enabled && link.href),
  );

  return (
    <article className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <Link className="text-sm font-semibold text-accent-300 transition hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300" href="/projects">
        ← Projects一覧へ戻る
      </Link>
      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-zinc-300">{project.kind}</span>
        </div>
        <h1 className="mt-5 text-4xl font-bold tracking-normal text-white sm:text-5xl">{project.title}</h1>
        <p className="mt-5 text-lg leading-8 text-zinc-300">{project.overview}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <ExternalLink key={link.label} href={link.href} className="inline-flex rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent-300 hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300">
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </header>

      {project.mainImage ? (
        <Image
          src={project.mainImage}
          alt={project.imageAlt ?? `${project.title}のゲーム画面`}
          width={1200}
          height={750}
          priority
          className="mt-10 aspect-[16/10] w-full rounded-lg border border-white/10 object-cover shadow-glow"
        />
      ) : null}

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="h-fit rounded-lg border border-white/10 bg-surface-850 p-6">
          <h2 className="text-lg font-bold text-white">Project Info</h2>
          <dl className="mt-5 grid gap-4 text-sm">
            <InfoTerm term="開発期間" description={project.developmentPeriod} />
            <InfoTerm term="使用技術" description={project.techStack.join("、")} />
            <InfoTerm term="担当した範囲" description={project.responsibilities.join("、")} />
          </dl>
        </aside>
        <div className="grid gap-10">
          <ListSection title="実装済みの主要機能" items={project.features} />
          <ListSection title="設計・テストで工夫した点" items={project.engineering} />
          <ListSection title="AIの活用方法" items={project.aiUsage} />
          <TextSection title="制作の目的" text={project.purpose} />
          <ListSection title="開発状況・今後の予定" items={project.futurePlans} />
        </div>
      </div>

      {projects.length > 1 ? (
        <section className="mt-14">
          <SectionTitle title="ほかの作品も見る" description="Projects一覧から、ほかの個人開発作品を確認できます。" />
          <Link className="mt-6 inline-flex rounded-md bg-accent-400 px-5 py-3 text-sm font-semibold text-surface-950 transition hover:bg-accent-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300" href="/projects">
            Projects一覧へ
          </Link>
        </section>
      ) : null}
    </article>
  );
}

function InfoTerm({ term, description }: { term: string; description: string }) {
  return (
    <div>
      <dt className="font-semibold text-accent-300">{term}</dt>
      <dd className="mt-1 leading-6 text-zinc-300">{description}</dd>
    </div>
  );
}

function TextSection({ title, text }: { title: string; text: string }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-4 leading-8 text-zinc-300">{text}</p>
    </section>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 rounded-lg border border-white/10 bg-surface-850 p-4 leading-7 text-zinc-300">
            <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
