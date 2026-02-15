import { SiteData } from "./types";

export const siteData: SiteData = {
  name: "Jonah Mabry",
  title: "Software Engineering Student",
  tagline: "Building software that turns data into action.",
  description:
    "Software Engineering student at Auburn University with hands-on experience in full-stack development, AI-powered applications, and data-driven systems through competitive internships.",
  aboutParagraphs: [
    "I'm a Software Engineering student at Auburn University (4.0 GPA, Dean's List) with a passion for building tools that make complex systems accessible. My work spans full-stack development, machine learning, and AI-powered applications.",
    "At Adtran, I built a Natural Language to SQL chatbot that let non-technical users query production databases using plain English — combining LangChain multi-agent orchestration with an Angular frontend. At Simple Helix, I was one of 25 selected from 100+ applicants for a data science internship where I designed GPU-based ML training environments and built models with TensorFlow and scikit-learn.",
    "I enjoy solving problems at the intersection of software engineering and data — whether that's automating tedious workflows, building intelligent interfaces, or making information more accessible.",
  ],
  projects: [
    {
      title: "NL2SQL Chatbot",
      slug: "nl2sql-chatbot",
      tagline:
        "An AI-powered chatbot that translates natural language into SQL queries.",
      problem:
        "Non-technical users at Adtran needed to query production databases but lacked SQL knowledge, creating bottlenecks and reliance on engineering teams for routine data requests.",
      approach:
        "Designed a multi-agent orchestration workflow using LangChain for query classification, SQL generation/execution, result summarization, and conversation memory. Built a responsive Angular and Tailwind CSS frontend with Highcharts visualization components.",
      outcome:
        "Enabled non-technical users to self-serve data queries, reducing manual query overhead and improving data accessibility across the organization.",
      tech: ["LangChain", "Angular", "TypeScript", "Tailwind CSS", "SQL", "Highcharts"],
    },
    {
      title: "Grade Tracker",
      slug: "grade-tracker",
      tagline:
        "Automated GPA tracking with Canvas API integration and SMS notifications.",
      problem:
        "Manually checking grades across multiple courses on Canvas was tedious and easy to forget, making it hard to stay on top of academic performance.",
      approach:
        "Built a Python tool that integrates with the Canvas REST API to automatically retrieve course enrollment and grade data. Implemented GPA calculation with weekly change tracking and an iOS Shortcuts workflow for automated SMS updates.",
      outcome:
        "Eliminated manual grade checking entirely — GPA and grade changes are delivered automatically via text message each week.",
      tech: ["Python", "Canvas API", "iOS Shortcuts", "REST APIs"],
      repoUrl: "https://github.com/jonahmabry/grade_tracker",
    },
  ],
  skillCategories: [
    {
      name: "Languages",
      skills: ["Python", "TypeScript", "Java", "SQL"],
    },
    {
      name: "Frameworks & Libraries",
      skills: ["Angular", "LangChain", "Pandas", "NumPy", "TensorFlow", "scikit-learn"],
    },
    {
      name: "Databases & Tools",
      skills: ["SQLite", "Git/GitHub", "Claude Code"],
    },
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/jonahmabry",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/jonahmabry",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:jonahmabry@gmail.com",
      icon: "email",
    },
  ],
  formspreeId: "xgolkqea",
  resumePath: "/portfolio/Jonah Mabry Resume.pdf",
};
