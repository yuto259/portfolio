import type { Skill } from "@/types/content";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className="rounded-lg border border-white/10 bg-surface-850 p-5">
      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-300">{skill.usage}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {skill.levels.map((level) => (
          <span key={level} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
            {level}
          </span>
        ))}
      </div>
    </article>
  );
}
