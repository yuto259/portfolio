import type { Metadata } from "next";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Yutoへのお問い合わせについてのご案内です。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionTitle
        label="Contact"
        title="お問い合わせ"
        description="採用や案件に関するご連絡についてのご案内です。"
      />
      <div className="mt-10 max-w-2xl rounded-lg border border-white/10 bg-surface-850 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white">連絡先</h2>
        {profile.email ? (
          <div className="mt-5 grid gap-3 text-sm">
            <p className="leading-7 text-zinc-300">
              採用や案件に関するご連絡は、以下のメールアドレスまでお願いします。
            </p>
            <a
              className="w-fit font-semibold text-accent-300 transition hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
          </div>
        ) : (
          <p className="mt-5 leading-7 text-zinc-300">
            採用や案件に関するご連絡は、応募書類または面談時にお伝えしている連絡先までお願いします。
          </p>
        )}
      </div>
    </section>
  );
}
