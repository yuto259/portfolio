import type { Experience } from "@/types/content";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="rounded-lg border border-white/10 bg-surface-850 p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">{experience.role}</h2>
          <p className="mt-2 leading-7 text-zinc-300">{experience.overview}</p>
        </div>
        <p className="shrink-0 rounded-full border border-accent-400/30 bg-accent-400/10 px-3 py-1 text-sm font-semibold text-accent-200">
          {experience.period}
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-accent-300">担当工程</h3>
        <ol className="mt-3 flex flex-wrap items-center gap-y-2">
          {experience.phases.map((phase, index) => (
            <li key={phase} className="flex items-center">
              <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-200">
                {phase}
              </span>
              {index < experience.phases.length - 1 ? (
                <span aria-hidden="true" className="mx-1.5 text-zinc-500">→</span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <InfoBlock title="使用技術" items={experience.technologies} />
        <InfoBlock title="担当したこと" items={experience.responsibilities} />
        <InfoBlock title="工夫したこと" items={experience.improvements} />
        <InfoBlock title="成果" items={experience.results} />
        <div>
          <h3 className="text-sm font-semibold text-accent-300">チームでの役割</h3>
          <p className="mt-3 leading-7 text-zinc-300">{experience.teamRole}</p>
        </div>
      </div>
    </article>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-sm font-semibold text-accent-300">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
