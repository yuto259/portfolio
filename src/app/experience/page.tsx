import type { Metadata } from "next";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SectionTitle } from "@/components/SectionTitle";
import { experiences } from "@/data/experiences";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Experience",
  description: "Yutoの職務経験です。公開用の一般化した案件名で、担当工程、使用技術、担当業務を掲載しています。",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionTitle
        label="Experience"
        title="職務経験"
        description="勤務先名や顧客名、内部システム名は掲載せず、公開用に一般化した案件名で担当内容を整理しています。"
      />
      <div className="mt-8 rounded-lg border border-white/10 bg-surface-850 p-6">
        <h2 className="text-lg font-bold text-white">職務要約</h2>
        <p className="mt-3 leading-8 text-zinc-300">{profile.careerSummary}</p>
      </div>
      <ol className="relative mt-10 grid gap-8 border-l border-white/10 pl-6 sm:pl-8">
        {experiences.map((experience) => (
          <li key={experience.id} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-6 top-8 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent-400 bg-surface-900 sm:-left-8"
            />
            <ExperienceCard experience={experience} />
          </li>
        ))}
      </ol>
    </section>
  );
}
