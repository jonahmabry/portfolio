import { siteData } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with regularly."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.skillCategories.map((cat) => (
            <div key={cat.name}>
              <h3 className="mb-3 text-sm font-semibold tracking-widest text-zinc-400 uppercase dark:text-zinc-500">
                {cat.name}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-base text-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
