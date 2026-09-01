import ProjectCard from "../layout/ProjectCard";

export default function Projects() {
  return (
    <section id="projekty"
      className="grid grid-cols-1 w-full items-center justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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

      <div>
        <ProjectCard project={{
          title: "Strona portfolio",
          description: "Responsywna strona stworzona w Next.js, TypeScript i Tailwind CSS. Zawiera sekcje prezentujące projekty, umiejętności oraz sposób kontaktu.",
          imageUrl: "/images/website-project.webp",
          link: "https://github.com/Antoni40/portfolio-website",
          tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"]
        }}/>
      </div>
      </section>
  );
}
