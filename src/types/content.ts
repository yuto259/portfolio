export type ProjectStatus = "Released" | "In Development" | "Prototype" | "Archived";

export type ProjectKind = "Game" | "Web App" | "Tool";

export type ExperienceLevel =
  | "実務経験あり"
  | "実務で利用経験"
  | "個人開発で使用"
  | "業務活用"
  | "経験あり"
  | "学習・利用経験あり";

export type SkillCategory =
  | "Backend"
  | "Frontend"
  | "Database"
  | "Infrastructure"
  | "Tools"
  | "Testing"
  | "Game Development"
  | "AI Development"
  | "Development Process";

export type SocialLinkKind = "GitHub" | "X" | "LinkedIn" | "Portfolio" | "Other";

export type SiteConfig = {
  name: string;
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
  strengths: string[];
  values: string[];
  focusAreas: string[];
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
  thumbnail: string;
  mainImage: string;
  imageAlt: string;
  summary: string;
  overview: string;
  purpose: string;
  features: string[];
  responsibilities: string[];
  techStack: string[];
  developmentPeriod: string;
  designPolicy: string[];
  implementationNotes: string[];
  challenges: string[];
  solutions: string[];
  quality: string[];
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
  category: SkillCategory;
  levels: ExperienceLevel[];
  usage: string;
};

export type SocialLink = {
  label: string;
  kind: SocialLinkKind;
  href: string;
  enabled: boolean;
};
