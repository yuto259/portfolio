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
