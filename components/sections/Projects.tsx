import ProjectCard from "../ui/ProjectCard";
import { projectsSectionData } from "@/data/data";

export default function Projects() {
  return (
    <section id="projekty"
      className="w-full"
    >
      <div className="col-span-full justify-self-start my-6">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-primary font-sm">Wybrane projekty.</p>
          <h1 className="text-4xl font-bold">Projekty</h1>
          <p className="text-text-secondary">
            Rzeczy, które tworzę, pokazują moje podejście do pracy - dbam o szczegóły i dokładność.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 w-full items-center justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
        <ProjectCard project={projectsSectionData}/>
      </div>
      </section>
  );
}
