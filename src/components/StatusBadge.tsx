import type { ProjectStatus } from "@/types/content";

const statusStyles: Record<ProjectStatus, string> = {
  Released: "border-accent-400/45 bg-accent-400/12 text-accent-300",
  "In Development": "border-sky-400/45 bg-sky-400/12 text-sky-200",
  Prototype: "border-amber-300/45 bg-amber-300/12 text-amber-200",
  Archived: "border-zinc-400/35 bg-zinc-400/10 text-zinc-300",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}>
      {status}
    </span>
  );
}
