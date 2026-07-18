import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { getProfileName, profile } from "@/data/profile";
import type { FocusArea } from "@/types/content";

export const metadata: Metadata = {
  title: "About",
  description: "Yutoのプロフィール、エンジニアとして大切にしていること、経験領域、AI活用に対する考え方を掲載しています。",
  alternates: { canonical: "/about" },
};

const aiWorkflow = [
  { step: "コンテキスト共有", detail: "目的、条件、既存仕様、関連コードをAIへ共有する" },
  { step: "実装・調査の依頼", detail: "小さな単位で実装や調査を依頼する" },
  { step: "レビュー・テスト", detail: "出力を自身で確認し、テストと動作確認を行う" },
];

export default function AboutPage() {
  const name = getProfileName();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionTitle
        label="About"
        title={`${name}について`}
        description="システムエンジニアとしての経歴、大切にしていること、AI活用に対する考え方を紹介します。"
      />
      <section className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="h-fit rounded-lg border border-white/10 bg-surface-850 p-6">
          <div className="flex items-center gap-4">
            <Image
              src={profile.profileImage}
              alt={profile.profileImageAlt}
              width={96}
              height={96}
              className="h-20 w-20 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-bold text-white">{name}</p>
              <p className="mt-1 text-sm text-zinc-400">{profile.location}</p>
            </div>
          </div>
          <dl className="mt-6 grid gap-4 border-t border-white/10 pt-6 text-sm">
            <Info term="職種" description={profile.jobTitle} />
            <Info term="実務経験" description="約4年半" />
            <Info term="個人開発" description="Webゲーム「Monster League」を制作中" />
            {profile.showStudioName ? <Info term="活動名" description={profile.studioName} /> : null}
          </dl>
        </div>
        <div className="grid gap-8">
          <ProfileSection title="自己紹介" paragraphs={[profile.shortBio]} />
          <ProfileSection title="エンジニアとして大切にしていること" list={profile.values} />
          <FocusAreaSection title="経験領域" areas={profile.focusAreas} />
          <section className="rounded-lg border border-white/10 bg-surface-850 p-6">
            <h2 className="text-2xl font-bold text-white">AI活用に対する考え方</h2>
            <p className="mt-4 leading-8 text-zinc-300">{profile.aiDevelopment}</p>
            <ol className="mt-6 grid gap-3 sm:grid-cols-3">
              {aiWorkflow.map((item, index) => (
                <li key={item.step} className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs font-semibold text-accent-300">STEP {index + 1}</p>
                  <p className="mt-2 font-semibold text-white">{item.step}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{item.detail}</p>
                </li>
              ))}
            </ol>
          </section>
          <ProfileSection title="現在強化していること" paragraphs={[profile.whyBuildIndie]} />
          <ProfileSection title="今後目指している方向" list={profile.futureGoals} />
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
