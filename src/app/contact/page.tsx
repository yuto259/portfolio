import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ExternalLink } from "@/components/ExternalLink";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";

export const metadata: Metadata = {
  title: "Contact",
  description: "Yutoへの問い合わせ先とサンプル問い合わせフォームです。現在フォーム送信機能は実装していません。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const enabledLinks = socialLinks.filter((link) => link.enabled && link.href);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionTitle
        label="Contact"
        title="お問い合わせ"
        description="採用や制作物に関する連絡先を掲載するページです。フォームはサンプルUIで、現在メール送信は行いません。"
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-lg border border-white/10 bg-surface-850 p-6">
          <h2 className="text-xl font-bold text-white">連絡先</h2>
          <div className="mt-5 grid gap-4 text-sm">
            {profile.email ? (
              <a className="font-semibold text-accent-300 transition hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            ) : null}
            {enabledLinks.map((link) => (
              <ExternalLink key={link.label} href={link.href} className="font-semibold text-accent-300 transition hover:text-accent-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300">
                {link.label}
              </ExternalLink>
            ))}
          </div>
          <p className="mt-6 leading-7 text-zinc-300">
            メールアドレスやSNSリンクが未設定の場合は、データファイル側で非表示にできます。
          </p>
        </aside>
        <ContactForm />
      </div>
    </section>
  );
}
