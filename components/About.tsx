import { siteData } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-zinc-50 py-20 md:py-28 dark:bg-zinc-950/50">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading title="About" />
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          {siteData.aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
