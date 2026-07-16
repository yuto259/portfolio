import type { Profile } from "@/types/content";

export const profile: Profile = {
  displayName: "Yuto",
  fullName: "",
  useFullName: false,
  jobTitle: "システムエンジニア / バックエンドエンジニア",
  heroTitle: "System Engineer / Backend Engineer",
  developerLabel: "AIを活用した個人開発",
  studioName: "Yu Studio",
  showStudioName: false,
  email: "",
  location: "沖縄県",
  introduction:
    "業務システムの開発・保守・改修を中心に、調査、設計、実装、テスト、リリースまで対応してきました。現在はバックエンドAPI開発とAIを活用した開発手法を磨いています。",
  shortBio:
    "業務系システムの開発・保守・改修を中心に、調査・分析、設計、実装、テスト、リリースまで経験してきたシステムエンジニアです。現在はKotlinとSpring Bootを用いたバックエンドAPI開発に携わり、AIも活用しながら、既存仕様の確認、不具合調査、実装、レビューの効率化に取り組んでいます。過去にはWebサイト制作・WordPress構築の経験もあります。",
  careerSummary:
    "システムエンジニアとして約4年半、業務系システムの開発・改修・保守を中心に携わってきました。見積作成システムの更改、業務システムのC#マイグレーション、ERP基幹システムの保守・運用を経験し、調査・分析、基本設計の補助、詳細設計、実装、単体テスト、結合テストまで幅広く担当しています。現在は、経済情報プラットフォームの保守・改修案件にて、企業情報を扱うREST APIの設計・実装、既存機能の改修、不具合の原因分析、テスト、リリース対応を担当しています。キャリア初期にはWebサイト制作・WordPress構築にも携わり、HTML、CSS、JavaScriptによるマークアップと画面実装を経験しました。",
  aiDevelopment:
    "業務および個人開発では、Claude CodeやCodexなどのAIコーディングエージェントを活用しています。設計内容、関連コード、既存仕様、エラー内容などのコンテキストを共有し、目的と条件を明確にしたうえで、調査、実装、レビュー、リファクタリングを依頼しています。AIの出力は必ず自分で確認し、仕様との整合性、コードの責務、テスト結果をレビューしています。",
  profileImage: "/images/profile/profile-placeholder.svg",
  profileImageAlt: "Yutoのプロフィール用プレースホルダー画像",
  strengths: [
    "既存システムや既存コードの調査、仕様と実装の対応関係の整理",
    "不具合の再現、原因の切り分け、修正、テスト、リリース対応",
    "AIに必要なコンテキストを共有し、出力をレビューしながら開発を進めること",
  ],
  values: [
    "既存仕様やコードを調査し、処理の流れや影響範囲を整理してから実装する",
    "関連コード、ログ、データを確認し、原因を切り分けながら解決方法を検討する",
    "必要に応じて小さく試作・検証し、早い段階で認識のずれや技術的な問題を確認する",
    "AIの出力をそのまま採用せず、自分でレビューして品質に責任を持つ",
  ],
  focusAreas: [
    "調査・分析",
    "既存仕様の把握",
    "設計",
    "実装",
    "テスト",
    "不具合原因調査",
    "Kotlin / Spring BootによるREST API開発",
  ],
  whyBuildIndie:
    "AIを活用した開発手法を実践的に学ぶため、個人開発に取り組んでいます。題材には、状態管理、条件分岐、設計、テストなど幅広い実装を経験できるゲームを選択しています。",
  futureGoals: [
    "Kotlin、Spring Boot、REST API、テスト、設計の理解を深める",
    "AIと協働する開発フローを整理し、開発速度と品質の両方を高める",
    "個人開発では仕様整理、状態管理、UI実装、単体テスト、Gitによる変更管理を継続して実践する",
  ],
};

export const getProfileName = (): string =>
  profile.useFullName && profile.fullName ? profile.fullName : profile.displayName;
