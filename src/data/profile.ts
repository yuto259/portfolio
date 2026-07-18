import type { Profile } from "@/types/content";

export const profile: Profile = {
  displayName: "Yuto",
  fullName: "",
  useFullName: false,
  jobTitle: "システムエンジニア / バックエンドエンジニア",
  heroTitle: "エンジニア歴 約4年半 / 沖縄県",
  developerLabel: "AIを活用した個人開発",
  studioName: "Yu Studio",
  showStudioName: false,
  email: "",
  location: "沖縄県",
  introduction:
    "業務システムの開発・保守・改修を中心に、調査から設計、実装、テスト、リリースまで担当してきました。現在はKotlin・Spring Bootを用いたバックエンドAPI開発に携わっています。",
  shortBio:
    "業務システムの開発・保守・改修を中心に経験してきたシステムエンジニアです。現在はKotlinとSpring Bootを用いたバックエンドAPI開発を担当しています。キャリア初期にはWebサイト制作・WordPress構築の経験もあります。",
  careerSummary:
    "2022年にWebサイト制作からキャリアを始め、HTML、CSS、JavaScript、WordPressを用いたサイト制作を経験しました。2023年からはC#とSQLを用いた業務システム開発へ移り、見積作成システムの更改、業務システムのC#マイグレーション、ERP基幹システムの保守・運用を担当しました。2025年12月からは、経済情報プラットフォームの保守・改修案件にて、KotlinとSpring Bootを用いたREST APIの設計・実装、既存機能の改修、不具合の原因分析、テスト、リリース対応を担当しています。工程としては、調査・分析、基本設計の補助、詳細設計、実装、単体テスト、結合テスト、リリース、保守・運用まで幅広く経験してきました。",
  aiDevelopment:
    "業務および個人開発では、Claude CodeやCodexなどのAIコーディングエージェントを活用しています。設計内容、関連コード、既存仕様、エラー内容などのコンテキストを共有し、目的と条件を明確にしたうえで、調査、実装、レビュー、リファクタリングを依頼しています。AIの出力は必ず自分で確認し、仕様との整合性、コードの責務、テスト結果をレビューしています。",
  profileImage: "/images/profile/yuto-profile.png",
  profileImageAlt: "Yuのロゴを使用したYutoのプロフィール画像",
  values: [
    "既存仕様やコードを調査し、処理の流れや影響範囲を整理してから実装する",
    "関連コード、ログ、データを確認し、原因を切り分けながら解決方法を検討する",
    "必要に応じて小さく試作・検証し、早い段階で認識のずれや技術的な問題を確認する",
  ],
  focusAreas: [
    {
      title: "既存システムの調査・仕様把握",
      description:
        "既存コード、設計資料、ログ、データを確認し、処理の流れや影響範囲を整理する業務を経験しています。",
    },
    {
      title: "不具合の調査・改修",
      description:
        "発生事象の整理、関連コードやログの確認、原因の切り分けから修正・動作確認まで経験しています。",
    },
    {
      title: "業務システムの設計・開発",
      description:
        "C#・SQLを用いた業務システム開発において、基本設計の補助、詳細設計、実装、単体テスト、結合テストを経験しています。",
    },
    {
      title: "バックエンドAPIの開発・改修",
      description:
        "Kotlin・Spring Bootを用いたREST APIの設計・実装、既存機能の改修、テスト、リリースを経験しています。",
    },
    {
      title: "Webサイト制作",
      description:
        "HTML・CSS・JavaScriptを用いたマークアップや、WordPressによるWebサイト構築を経験しています。",
    },
  ],
  whyBuildIndie:
    "実務のバックエンドAPI開発と並行して、個人開発では実務経験のないフロントエンド開発と、AIを活用した開発手法を実践しています。題材には、状態管理、条件分岐、設計、テストなど幅広い実装を経験できるゲームを選択しています。",
  futureGoals: [
    "Kotlin、Spring Boot、REST API、テスト、設計の理解を深める",
    "AIと協働する開発フローを整理し、開発速度と品質の両方を高める",
    "個人開発では仕様整理、状態管理、UI実装、単体テスト、Gitによる変更管理を継続して実践する",
  ],
};

export const getProfileName = (): string =>
  profile.useFullName && profile.fullName ? profile.fullName : profile.displayName;
