import type { SiteConfig } from "@/types/content";

const resolveBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
};

export const siteConfig: SiteConfig = {
  name: "Yuto Portfolio",
  metaTitle: "Yuto | システムエンジニア / バックエンドエンジニアのポートフォリオ",
  subtitle: "System Engineer / Backend Engineer",
  description:
    "システムエンジニアYutoのポートフォリオサイトです。業務システム開発、Kotlin・Spring BootによるバックエンドAPI開発、AIを活用した個人開発について掲載しています。",
  baseUrl: resolveBaseUrl(),
  ogImage: "/images/common/og.png",
  locale: "ja_JP",
};
