import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { getProfileName, profile } from "@/data/profile";
import type { FocusArea } from "@/types/content";

export const metadata: Metadata = {
  title: "About",
  description: "Yutoのプロフィール、職務要約、強み、AIを活用した開発、個人開発への取り組みを掲載しています。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const name = getProfileName();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionTitle
        label="About"
        title={`${name}について`}
        description="顧客名、客先名、内部システム名などの機密情報を含まない、公開用プロフィールです。"
      />
      <section className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-white/10 bg-surface-850 p-6">
          <Image
            src={profile.profileImage}
            alt={profile.profileImageAlt}
            width={800}
            height={800}
            className="aspect-square w-full rounded-md object-cover"
          />
          <dl className="mt-6 grid gap-4 text-sm">
            <Info term="表示名" description={name} />
            <Info term="職種" description={profile.jobTitle} />
            <Info term="活動" description="AIを活用したゲーム題材の個人開発" />
            {profile.showStudioName ? <Info term="活動名" description={profile.studioName} /> : null}
            <Info term="経験領域" description={profile.focusAreas.map((area) => area.title).join("、")} />
          </dl>
        </div>
        <div className="grid gap-8">
          <ProfileSection title="自己紹介" paragraphs={[profile.shortBio]} />
          <ProfileSection title="職務要約" paragraphs={[profile.careerSummary]} />
          <ProfileSection title="エンジニアとして大切にしていること" list={profile.values} />
          <FocusAreaSection title="経験領域" areas={profile.focusAreas} />
          <ProfileSection title="AIを活用した開発" paragraphs={[profile.aiDevelopment]} />
          <ProfileSection title="個人開発を行う理由" paragraphs={[profile.whyBuildIndie]} />
          <ProfileSection title="今後取り組みたいこと" list={profile.futureGoals} />
        </div>
      </section>
    </div>
  );
}

function Info({ term, description }: { term: string; description: string }) {
  return (
    <div>
      <dt className="font-semibold text-accent-300">{term}</dt>
      <dd className="mt-1 text-zinc-300">{description}</dd>
    </div>
  );
}

function FocusAreaSection({ title, areas }: { title: string; areas: FocusArea[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-surface-850 p-6">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="mt-5 grid gap-4">
        {areas.map((area) => (
          <article key={area.title} className="rounded-md border border-white/10 bg-white/[0.03] p-4">
            <h3 className="font-semibold text-accent-300">{area.title}</h3>
            <p className="mt-2 leading-7 text-zinc-300">{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProfileSection({ title, paragraphs, list }: { title: string; paragraphs?: string[]; list?: string[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-surface-850 p-6">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-8 text-zinc-300">{paragraph}</p>
      ))}
      {list ? (
        <ul className="mt-4 grid gap-3">
          {list.map((item) => (
            <li key={item} className="flex gap-3 leading-7 text-zinc-300">
              <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
