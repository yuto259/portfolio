import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "monster-league",
    title: "Monster League",
    kind: "Game",
    status: "In Development",
    thumbnail: "/images/projects/project-deck-builder.svg",
    mainImage: "/images/projects/project-deck-builder.svg",
    imageAlt: "Monster Leagueのプレースホルダー画像",
    summary:
      "AIを活用した開発手法を実践するために制作している、ゲーム題材の個人開発プロジェクトです。",
    overview:
      "状態管理、条件分岐、設計、テストなど幅広い実装を経験するため、ゲームを題材に開発している個人開発プロジェクトです。Claude CodeとCodexを活用しながら開発しています。",
    purpose:
      "AIを活用した開発手法を実践的に学ぶことに加え、フロントエンド開発の実務経験がまだないため、個人開発を通じてUI実装、状態管理、条件分岐、テストなどを自分で設計・実装する経験を積むことを目的に制作しています。ゲームを題材にすることで、Webアプリ開発にも応用しやすい複雑な状態変化や画面操作を継続的に検証しています。",
    features: [
      "ゲームを題材にした状態管理と条件分岐の実装",
      "Markdownによる仕様書・設計書・開発計画の管理",
      "Zustandによる状態管理とVitestによる主要ロジックの単体テスト",
    ],
    responsibilities: [
      "仕様整理と設計判断",
      "Next.js、React、TypeScriptを用いた実装",
      "Zustandを用いた状態管理の実装",
      "Vitestによる主要ロジックの単体テスト",
      "GitHubによるソースコード管理",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Vitest", "Git", "GitHub"],
    developmentPeriod: "2026年7月〜(開発中)",
    designPolicy: [
      "AIへ依頼する前に目的と完了条件を明確にする",
      "一度に大規模な変更を依頼せず、小さな単位で仕様整理、実装、レビューを進める",
      "AIの出力をそのまま採用せず、自分で仕様との整合性とコードの責務を確認する",
    ],
    implementationNotes: [
      "コミット単位で変更履歴を残し、実装内容を後から確認しやすいように管理",
      "主要ロジックは単体テストで検証し、実際にプレイしながらUIとゲームルールを改善",
      "仕様書・設計書・開発計画をMarkdownで管理し、AIへ必要なコンテキストを共有しやすくしている",
    ],
    challenges: [
      "AIに十分な前提情報を渡さないと、既存仕様と異なる実装が混ざる可能性がある",
      "ゲーム仕様は状態や条件分岐が増えやすく、変更範囲が分かりにくくなる",
    ],
    solutions: [
      "目的、条件、既存仕様、関連コードを具体的に共有してからAIへ依頼する",
      "小さな単位で実装と検証を行い、問題があれば早い段階で修正する",
    ],
    quality: [
      "単体テストを用いた主要ロジックの検証",
      "実際のプレイによるUIとゲームルールの確認",
      "ビルドやテスト結果の確認",
    ],
    futurePlans: [
      "READMEと公開情報の整理",
      "ゲームルールとUIの継続的な改善",
      "公開可能なデモURLを用意できた場合の掲載",
    ],
    links: {
      github: { label: "GitHub", href: "https://github.com/yuto259/monster_league", enabled: true },
      demo: { label: "Demo", href: "", enabled: false },
      store: { label: "Store", href: "", enabled: false },
    },
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
