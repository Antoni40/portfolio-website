//consider flex instead of grid for skills section, it might be better for my aim
import type { SkillsProps } from "@/types/types";

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="umiejetnosci" className="w-full">
      <div className="flex flex-col gap-1 w-full">
        <p className="text-primary font-16">To co potrafię.</p>
        <h1 className="text-4xl font-bold">Umiejętności</h1>
        <p className="text-text-secondary">
          Moje umiejętności związane z programowaniem i informatyką.
        </p>
      </div>
      <div className="my-4 w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-content-center">
          {skills.map((skill) => (
            <article key={skill.name} className="rounded-lg p-4 border border-border flex flex-col justify-center gap-2">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-text-secondary">{skill.level}</p>
                <p className="text-text-secondary">{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
