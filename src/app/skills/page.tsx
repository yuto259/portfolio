import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillCard } from "@/components/SkillCard";
import { skills } from "@/data/skills";
import type { SkillCategory } from "@/types/content";

export const metadata: Metadata = {
  title: "Skills",
  description: "Backend、Frontend、Database、Infrastructure、Tools、Testing、Game Developmentのスキル一覧です。",
  alternates: { canonical: "/skills" },
};

const categories: SkillCategory[] = [
  "Backend",
  "Frontend",
  "Database",
  "Infrastructure",
  "Tools",
  "Testing",
  "Game Development",
  "AI Development",
  "Development Process",
];

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionTitle
        label="Skills"
        title="技術スキル"
        description="星やパーセントではなく、各技術をどの用途で使っているかを短く整理しています。"
      />
      <dl className="mt-6 grid gap-2 rounded-lg border border-white/10 bg-surface-850 p-4 text-sm sm:grid-cols-3">
        <LegendItem term="実務経験あり" description="実務の設計・実装・テストで使用" />
        <LegendItem term="実務で利用" description="実務の調査・運用・開発支援で利用" />
        <LegendItem term="個人開発で使用" description="個人開発で使用" />
      </dl>
      <div className="mt-10 grid gap-10">
        {categories.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category === category);
          return (
            <section key={category}>
              <h2 className="text-2xl font-bold text-white">{category}</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

function LegendItem({ term, description }: { term: string; description: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <dt className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">{term}</dt>
      <dd className="text-zinc-400">{description}</dd>
    </div>
  );
}
