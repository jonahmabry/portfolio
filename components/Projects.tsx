import Image from "next/image";
import { siteData } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Projects"
          subtitle="Selected work showcasing what I build and how I think."
        />

        <div className="flex flex-col gap-20">
          {siteData.projects.map((project, i) => (
            <article
              key={project.slug}
              className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              {project.image && (
                <div className="flex-1">
                  <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      width={800}
                      height={500}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-1 text-zinc-500 dark:text-zinc-400">
                  {project.tagline}
                </p>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  <div>
                    <span className="font-semibold text-foreground">
                      Problem:{" "}
                    </span>
                    {project.problem}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">
                      Approach:{" "}
                    </span>
                    {project.approach}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">
                      Outcome:{" "}
                    </span>
                    {project.outcome}
                  </div>
                </div>

                {/* Tech tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      Live Demo &rarr;
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-zinc-500 hover:underline dark:text-zinc-400"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
