import Link from "next/link";
import type { Metadata } from "next";
import { EmptyState } from "@/components/EmptyState";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/projects";
import type { ProjectKind, ProjectStatus } from "@/types/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Yutoの個人開発作品一覧です。AIを活用したゲーム開発の制作過程を掲載しています。",
  alternates: { canonical: "/projects" },
};

const statuses: ProjectStatus[] = ["Released", "In Development", "Prototype", "Archived"];
const kinds: ProjectKind[] = ["Game", "Web App", "Tool"];

type ProjectsPageProps = {
  searchParams?: Promise<{
    status?: string;
    kind?: string;
  }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const status = statuses.find((item) => item === params?.status);
  const kind = kinds.find((item) => item === params?.kind);
  const filteredProjects = projects.filter((project) => {
    const matchesStatus = status ? project.status === status : true;
    const matchesKind = kind ? project.kind === kind : true;
    return matchesStatus && matchesKind;
  });

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionTitle
        label="Projects"
        title="個人開発作品"
        description="AIを活用した開発手法を実践するための個人開発作品です。公開できるGitHubリンクがあるものだけ掲載しています。"
      />
      {projects.length > 1 ? (
        <div className="mt-8 grid gap-4 rounded-lg border border-white/10 bg-surface-850 p-4">
          <FilterGroup title="種類" items={kinds} queryKey="kind" activeValue={kind} />
          <FilterGroup title="開発状況" items={statuses} queryKey="status" activeValue={status} />
          {(kind || status) ? (
            <Link className="w-fit text-sm font-semibold text-accent-300 transition hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300" href="/projects">
              フィルターを解除
            </Link>
          ) : null}
        </div>
      ) : null}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {filteredProjects.length === 0 ? (
        <div className="mt-8">
          <EmptyState title="該当する作品がありません" description="別の種類または開発状況で絞り込みを変更してください。" />
        </div>
      ) : null}
    </section>
  );
}

function FilterGroup<T extends string>({
  title,
  items,
  queryKey,
  activeValue,
}: {
  title: string;
  items: readonly T[];
  queryKey: "status" | "kind";
  activeValue?: T;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <Link
            key={item}
            href={`/projects?${queryKey}=${encodeURIComponent(item)}`}
            aria-current={activeValue === item ? "true" : undefined}
            className={`rounded-md border px-3 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-300 ${
              activeValue === item
                ? "border-accent-300 bg-accent-400/12 text-accent-100"
                : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-accent-300/60 hover:text-white"
            }`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
