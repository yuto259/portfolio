import type { Experience } from "@/types/content";

export const experiences: Experience[] = [
  {
    id: "economic-platform-maintenance",
    role: "経済情報プラットフォームの保守・改修",
    period: "2025年12月〜2026年7月",
    overview:
      "経済情報を扱うWebサービスの保守・改修案件にて、企業情報管理機能のREST API設計・実装を担当しました。要件に基づく機能追加、既存機能の改修、不具合の原因分析から修正・テスト・リリースまで一貫して対応しています。",
    phases: ["調査", "設計", "実装", "テスト", "リリース", "保守"],
    technologies: ["Kotlin", "Spring Boot", "Python", "SQL", "Linux", "Ubuntu", "Git", "Docker", "Kubernetes"],
    responsibilities: [
      "企業情報の取得・登録・更新に関するREST APIの設計・実装",
      "要件に基づく機能追加と既存機能の改修",
      "不具合の調査、原因分析、修正",
      "単体テスト、結合テスト、リリース対応",
      "Linux環境での調査・運用作業",
      "AIを活用した既存仕様の確認、調査、実装、コードレビューの効率化",
    ],
    improvements: [
      "定型的な運用作業を効率化するシェルスクリプトを作成",
      "エラーデータの抽出から報告までの作業を効率化",
    ],
    results: [],
    teamRole: "4〜5名規模のアジャイル開発チームで、バックエンド開発、保守・改修を担当",
  },
  {
    id: "erp-maintenance",
    role: "ERP基幹システムの保守・運用",
    period: "2025年4月〜2025年11月",
    overview:
      "ERP基幹システムの刷新案件にて、既存システムの調査と、ジョブの監視・運用業務を担当しました。業務影響を考慮しながら既存仕様を確認し、必要な対応を進める経験を積みました。",
    phases: ["調査", "分析", "保守", "運用"],
    technologies: [],
    responsibilities: ["既存システムの調査", "ジョブの監視・運用業務", "業務影響を考慮した既存仕様の確認"],
    improvements: ["既存仕様を確認しながら、必要な対応範囲を整理"],
    results: [],
    teamRole: "保守・運用担当として、既存機能の調査と対応を担当",
  },
  {
    id: "csharp-migration",
    role: "業務システムのC#マイグレーション",
    period: "2024年4月〜2025年3月",
    overview:
      "既存の業務システムを対象としたC#マイグレーション案件に携わり、上位者が作成した基本設計をもとに補助的な役割で設計内容を確認し、詳細設計、実装、テストを担当しました。既存機能の挙動を確認しながら、新しい環境へ移行するための開発を経験しています。",
    phases: ["調査", "分析", "基本設計補助", "詳細設計", "実装", "単体テスト", "結合テスト"],
    technologies: ["C#", "SQL"],
    responsibilities: ["既存仕様や処理内容の調査・分析", "基本設計内容の確認補助", "詳細設計", "C#とSQLを用いた実装", "単体テスト、結合テスト"],
    improvements: ["上位者が作成した基本設計を確認しながら詳細設計へ落とし込み、移行後の動作差分が出ないように実装内容を整理"],
    results: [],
    teamRole: "開発担当として、調査・分析から実装・テストまでを担当",
  },
  {
    id: "estimate-system-renewal",
    role: "見積作成システムの更改",
    period: "2023年1月〜2024年3月",
    overview:
      "見積作成システムの更改案件にて、上位者が作成した基本設計をもとに補助的な役割で設計内容を確認し、詳細設計、実装、テストを担当しました。業務要件と既存仕様を確認しながら、C#とSQLを用いた機能開発・改修に取り組みました。",
    phases: ["基本設計補助", "詳細設計", "実装", "単体テスト", "結合テスト"],
    technologies: ["C#", "SQL"],
    responsibilities: ["業務要件と既存仕様の確認", "基本設計内容の確認補助", "詳細設計", "C#とSQLを用いた機能開発・改修", "単体テスト、結合テスト"],
    improvements: ["上位者が作成した基本設計を確認しながら詳細設計へ落とし込み、工程ごとの確認観点を整理しながら開発を進行"],
    results: [],
    teamRole: "開発担当として、基本設計補助、詳細設計、実装、テストを担当",
  },
  {
    id: "website-wordpress",
    role: "Webサイト制作・WordPress構築（初期経験）",
    period: "2022年1月〜2022年9月",
    overview:
      "キャリア初期に、HTML、CSS、JavaScriptを用いたWebサイト制作や、WordPressを用いたサイト構築に携わりました。現在の主軸は業務系システム開発ですが、画面表示や利用者視点を意識した開発の基礎として経験しています。",
    phases: ["マークアップ", "画面実装", "WordPress構築", "表示確認", "修正"],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
    responsibilities: [
      "HTML、CSSを用いたWebページのマークアップ",
      "JavaScriptを用いた画面実装",
      "WordPressを用いたWebサイト構築",
      "デザインを基にしたページ制作",
      "表示崩れや画面動作の確認・修正",
    ],
    improvements: ["表示品質や利用者視点を意識し、画面の見え方と動作を確認しながら修正"],
    results: [],
    teamRole: "初期のWeb制作経験として、マークアップとWordPress構築を担当",
  },
];
