import { siteData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} {siteData.name}</p>
        <a
          href={siteData.resumePath}
          className="font-medium text-foreground transition-colors hover:text-accent"
        >
          Download Resume
        </a>
      </div>
    </footer>
  );
}
