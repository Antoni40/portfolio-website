import Image from "next/image"
import ButtonLink from "../ui/ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
}

export default function ProjectCard({project} : {project: Project}) {
  return (
    <article className="w-full flex flex-col gap-4 rounded-lg border border-border p-4">
      <div className="w-full overflow-hidden rounded-lg">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={1600}
          height={1600}
          loading="lazy"
          className="object-cover"
        />
      </div>
        <ul aria-label="Technologie" className="flex flex-wrap gap-2 text-xs text-white">
          {project.tags.map((tag, index) => (
            <li key={index} className="bg-surface p-2 rounded-full text-text-primary border border-border hover:bg-background cursor-default">
              {tag}
            </li>
          ))}
        </ul>
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="text-text-secondary line-clamp-5">{project.description}</p>
        <div className="flex w-full items-center justify-end">
          <ButtonLink href={project.link} variant="primary" text="Zobacz na GitHubie"><FontAwesomeIcon icon={faGithub} /></ButtonLink>
        </div>
    </article>
  )
}