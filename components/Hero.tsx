import { siteData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] items-center pt-16">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          {siteData.title}
        </p>
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          {siteData.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-zinc-600 md:text-2xl dark:text-zinc-400">
          {siteData.tagline}
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
          {siteData.description}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-300"
          >
            View Projects
          </a>
          <a
            href={siteData.resumePath}
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800/50"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
