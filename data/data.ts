//for project data
/*Those are only example skills, you have to adjust them to your actual skills and experience - written by me*/
import type { Skill, Project } from "@/types/types";

export const skillsSectionData : Skill[] = [
  { name: "Tworzenie stron internetowych i aplikacji webowych", level: "skill level", description: "some description" },
  { name: "Relacyjne bazy danych", level: "skill level", description: "some description" }
]

export const projectsSectionData : Project[] = [
  {
    title: "Strona portfolio",
    description: "Responsywna strona stworzona w Next.js, TypeScript i Tailwind CSS. Zawiera sekcje prezentujące projekty, umiejętności oraz sposób kontaktu.",
    imageUrl: "/images/website-project.webp",
    link: "https://github.com/Antoni40/portfolio-website",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"]
  },
  {
    title: "Aplikacja do zarządzania wydatkami",
    description: "Aplikacja webowa umożliwiająca użytkownikom śledzenie i zarządzanie swoimi wydatkami. Zawiera funkcje dodawania, edytowania i usuwania transakcji oraz generowania raportów.",
    imageUrl: "/images/website-project.webp",
    link: "",
    tags: [""] 
  }
]

export const buttonVariants = {
  primary:
    "bg-primary text-white p-4 rounded-lg border border-border hover:bg-primary-hover",
  secondary:
    "bg-surface text-text-primary border border-border p-4 rounded-lg border border-border hover:bg-background",
  borderless:
    "bg-transparent text-text-primary hover:text-primary cursor-pointer",
};

export const buttonLinkVariants = {
  primary:
    "bg-primary text-background hover:bg-primary-hover rounded-lg p-4 border border-border font-semibold",
  secondary:
    "bg-surface text-text-primary border border-border hover:bg-background  rounded-lg p-4 border border-border font-semibold",
  text: "bg-transparent text-text-primary hover:text-primary font-semibold",
  brand:
    "bg-transparent text-text-primary hover:text-primary font-bold text-2xl",
};
