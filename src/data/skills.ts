import type { AiSkill, Skill } from "@/types/content";

export const skills: Skill[] = [
  { name: "C#", group: "work-main", usage: "業務システムの更改、既存システムのマイグレーションで使用" },
  { name: "SQL", group: "work-main", usage: "業務システム開発、データ調査、データ処理で使用" },
  { name: "Kotlin", group: "work-main", usage: "REST APIの設計・実装、既存機能改修、不具合対応で使用" },
  { name: "Spring Boot", group: "work-main", usage: "KotlinによるバックエンドAPI開発で使用" },
  { name: "Git", group: "work-main", usage: "ソースコード管理、ブランチ運用、変更履歴管理で使用" },
  { name: "Linux", group: "work-main", usage: "調査、コマンド操作、運用作業で使用" },
  { name: "単体テスト", group: "work-main", usage: "業務システムやAPIの単体テストで実施" },
  { name: "結合テスト", group: "work-main", usage: "業務システムやAPIの結合テストで実施" },
  { name: "HTML / CSS", group: "work-main", usage: "Webサイト制作、マークアップで使用" },
  { name: "JavaScript", group: "work-main", usage: "Webサイト制作での画面実装で使用(個人開発でも使用)" },
  { name: "WordPress", group: "work-main", usage: "Webサイト構築で使用" },
  { name: "Python", group: "work-used", usage: "現案件での既存コードの調査で使用" },
  { name: "Docker", group: "work-used", usage: "開発環境での利用経験(コンテナ操作・動作確認)" },
  { name: "Kubernetes", group: "work-used", usage: "Podの確認など、運用時の操作で使用" },
  { name: "Ubuntu", group: "work-used", usage: "開発・調査環境として使用" },
  { name: "Java", group: "work-used", usage: "業務システム開発での一部利用経験" },
  { name: "TypeScript", group: "personal", usage: "Webゲーム・アプリ開発で使用" },
  { name: "React", group: "personal", usage: "Next.jsを用いたUI開発で使用" },
  { name: "Next.js", group: "personal", usage: "Webゲーム開発、ポートフォリオ制作で使用" },
  { name: "Tailwind CSS", group: "personal", usage: "レスポンシブなUI実装で使用" },
  { name: "Zustand", group: "personal", usage: "ゲームの状態管理に使用" },
  { name: "Vitest", group: "personal", usage: "主要ロジックの単体テストに使用" },
  { name: "Supabase", group: "personal", usage: "データベース、認証、オンライン機能の検討・実装で使用" },
  { name: "Vercel", group: "personal", usage: "Webアプリのデプロイで使用" },
  { name: "GitHub", group: "personal", usage: "リポジトリ管理、コミット履歴管理で使用" },
];

export const aiSkill: AiSkill = {
  title: "AIを活用した開発",
  description:
    "Claude CodeやCodexを、仕様確認、実装支援、不具合調査、レビューに活用しています。生成された内容は自身で確認し、テストや修正を行っています。",
  tools: ["Claude Code", "Codex"],
};

export const skillGroupLabels: Record<Skill["group"], string> = {
  "work-main": "主な実務経験",
  "work-used": "実務で利用経験あり",
  personal: "個人開発で使用",
};
