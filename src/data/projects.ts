import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "monster-league",
    title: "Monster League",
    kind: "Game",
    status: "In Development",
    summary:
      "ブラウザで遊べる、1人プレイのターン制モンスターカードバトルゲームです。全8ラウンドのリーグ戦を勝ち抜き、優勝を目指します。",
    overview:
      "複数のモンスターカードを使用して対戦する、1人プレイ(対CPU)のターン制カードバトルゲームです。手札からの召喚、攻撃、ターン進行といったバトルの基本ルールに加え、全8ラウンドのリーグ戦、ボス戦、報酬・進化の選択まで、一連のゲームフローをブラウザ上で実装しています。",
    purpose:
      "実務では経験のないフロントエンド開発と、AIを活用した開発手法を実践的に学ぶことを目的に制作しています。状態や条件分岐が多いゲームを題材にすることで、設計、状態管理、テストまでを一通り経験できるようにしています。",
    features: [
      "手札からのモンスター召喚、攻撃対象の選択、ターン進行のバトルロジック",
      "全8ラウンドのリーグ戦(通常バトル、ボス戦、最終ラウンドの王座戦)",
      "バトル後の報酬選択とモンスターの進化選択",
      "CPU側の行動ロジック(対戦相手の自動プレイ)",
      "優勝者と最終順位の表示、デッキ内容の確認画面",
      "Zustandによる状態管理と、Vitestによる単体テスト(11ファイル・84件)",
    ],
    responsibilities: [
      "仕様整理と設計判断",
      "Next.js、React、TypeScriptを用いた実装",
      "Zustandを用いた状態管理の設計・実装",
      "Vitestによる単体テストの作成",
      "GitHubによるソースコード管理",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Vitest", "Git", "GitHub"],
    developmentPeriod: "2026年7月〜(開発中)",
    engineering: [
      "バトル、リーグ進行、報酬、進化、CPU行動などのロジックをUIから分離し、エンジン単位のモジュールとして実装",
      "仕様書・設計書・開発計画をMarkdownで管理し、実装との対応を確認しながら開発",
      "主要ロジックを単体テストで検証し、リーグ全体を通しで実行するテストも用意",
      "コミット単位で変更履歴を残し、変更内容を後から追跡できるように管理",
    ],
    aiUsage: [
      "目的、条件、既存仕様、関連コードを共有したうえで、Claude CodeやCodexに実装や調査を依頼",
      "一度に大きな変更を依頼せず、小さな単位で仕様整理、実装、レビューを繰り返す",
      "生成されたコードは仕様との整合性を自身で確認し、テストと動作確認を行ってから採用",
    ],
    futurePlans: [
      "ブラウザでの通しプレイ確認と、UI・文言の調整",
      "ゲームバランスの調整",
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

export const shouldShowProjects = projects.length > 2;

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
