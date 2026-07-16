import type { Metadata } from "next";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SectionTitle } from "@/components/SectionTitle";
import { experiences } from "@/data/experiences";

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
      <div className="mt-10 grid gap-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
