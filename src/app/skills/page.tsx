import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { aiSkill, skillGroupLabels, skills } from "@/data/skills";
import type { SkillGroup } from "@/types/content";

export const metadata: Metadata = {
  title: "Skills",
  description: "Yutoの技術スキル一覧です。主な実務経験、実務で利用経験のある技術、個人開発で使用している技術に分けて掲載しています。",
  alternates: { canonical: "/skills" },
};

const groups: SkillGroup[] = ["work-main", "work-used", "personal"];

const groupDescriptions: Record<SkillGroup, string> = {
  "work-main": "実務の開発工程(設計・実装・テスト)で使用してきた技術です。",
  "work-used": "実務の調査・運用・環境利用の範囲で利用した経験のある技術です。",
  personal: "個人開発で使用している技術です。実務経験とは区別しています。",
};

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionTitle
        label="Skills"
        title="技術スキル"
        description="星やパーセントではなく、各技術をどの用途で使っているかを、実務と個人開発に分けて整理しています。"
      />
      <div className="mt-10 grid gap-10">
        {groups.map((group) => {
          const groupSkills = skills.filter((skill) => skill.group === group);
          return (
            <section key={group}>
              <h2 className="text-2xl font-bold text-white">{skillGroupLabels[group]}</h2>
              <p className="mt-2 text-sm text-zinc-400">{groupDescriptions[group]}</p>
              <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-surface-850">
                <dl>
                  {groupSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`grid gap-1 px-5 py-3.5 sm:grid-cols-[11rem_1fr] sm:gap-4 ${
                        index > 0 ? "border-t border-white/[0.06]" : ""
                      }`}
                    >
                      <dt className="font-semibold text-white">{skill.name}</dt>
                      <dd className="text-sm leading-6 text-zinc-300 sm:self-center">{skill.usage}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          );
        })}
        <section>
          <h2 className="text-2xl font-bold text-white">{aiSkill.title}</h2>
          <div className="mt-5 rounded-lg border border-white/10 bg-surface-850 p-6">
            <p className="leading-7 text-zinc-300">{aiSkill.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {aiSkill.tools.map((tool) => (
                <li key={tool} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}
