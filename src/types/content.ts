export type ProjectStatus = "Released" | "In Development" | "Prototype" | "Archived";

export type ProjectKind = "Game" | "Web App" | "Tool";

export type SkillGroup = "work-main" | "work-used" | "personal";

export type SocialLinkKind = "GitHub" | "X" | "LinkedIn" | "Portfolio" | "Other";

export type FocusArea = {
  title: string;
  description: string;
};

export type SiteConfig = {
  name: string;
  metaTitle: string;
  subtitle: string;
  description: string;
  baseUrl: string;
  ogImage: string;
  locale: string;
};

export type Profile = {
  displayName: string;
  fullName: string;
  useFullName: boolean;
  jobTitle: string;
  heroTitle: string;
  developerLabel: string;
  studioName: string;
  showStudioName: boolean;
  email: string;
  location: string;
  introduction: string;
  shortBio: string;
  careerSummary: string;
  aiDevelopment: string;
  profileImage: string;
  profileImageAlt: string;
  values: string[];
  focusAreas: FocusArea[];
  whyBuildIndie: string;
  futureGoals: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
  enabled: boolean;
};

export type Project = {
  slug: string;
  title: string;
  kind: ProjectKind;
  status: ProjectStatus;
  thumbnail?: string;
  mainImage?: string;
  imageAlt?: string;
  summary: string;
  overview: string;
  purpose: string;
  features: string[];
  responsibilities: string[];
  techStack: string[];
  developmentPeriod: string;
  engineering: string[];
  aiUsage: string[];
  futurePlans: string[];
  links: {
    github?: ProjectLink;
    demo?: ProjectLink;
    store?: ProjectLink;
  };
  featured: boolean;
};

export type Experience = {
  id: string;
  role: string;
  period: string;
  overview: string;
  phases: string[];
  technologies: string[];
  responsibilities: string[];
  improvements: string[];
  results: string[];
  teamRole: string;
};

export type Skill = {
  name: string;
  group: SkillGroup;
  usage: string;
};

export type AiSkill = {
  title: string;
  description: string;
  tools: string[];
};

export type SocialLink = {
  label: string;
  kind: SocialLinkKind;
  href: string;
  enabled: boolean;
};
