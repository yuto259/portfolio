import Link from "next/link";
import Image from "next/image";
import { StatusBadge } from "@/components/StatusBadge";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-surface-850 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent-400/40 hover:shadow-glow motion-reduce:hover:translate-y-0">
      <div className="aspect-[16/10] overflow-hidden bg-surface-800">
        <Image
          src={project.thumbnail}
          alt={project.imageAlt}
          width={1200}
          height={750}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-zinc-300">{project.kind}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 flex-1 leading-7 text-zinc-300">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title}の使用技術`}>
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs text-zinc-200">
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm leading-6 text-zinc-400">
          担当範囲: {project.responsibilities.slice(0, 3).join("、")}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 inline-flex w-fit items-center rounded-md text-sm font-semibold text-accent-300 transition hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
        >
          詳細を見る
          <span aria-hidden="true" className="ml-1">→</span>
        </Link>
      </div>
    </article>
  );
}
