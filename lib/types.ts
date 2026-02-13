export interface Project {
  title: string;
  slug: string;
  tagline: string;
  problem: string;
  approach: string;
  outcome: string;
  tech: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email";
}

export interface SiteData {
  name: string;
  title: string;
  tagline: string;
  description: string;
  aboutParagraphs: string[];
  projects: Project[];
  skillCategories: SkillCategory[];
  socialLinks: SocialLink[];
  formspreeId: string;
  resumePath: string;
}
