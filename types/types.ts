//for projects types and interfaces
import { buttonVariants, buttonLinkVariants } from "@/data/data";

export interface Skill {
  name: string;
  level: string;
  description: string;
}

export type SkillsProps = {
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

export interface ButtonProps {
  text?: string;
  variant: keyof typeof buttonVariants;
  children?: React.ReactNode;
  onClickHandler?: () => void;
};

export interface ButtonLinkProps {
  href: string;
  text?: string;
  variant: keyof typeof buttonLinkVariants;
  children?: React.ReactNode;
  rel?: string;
  target?: string;
  onClickHandler?: () => void;
};