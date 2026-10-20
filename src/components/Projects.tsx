import { projects } from "../data";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Products I've built or led." tint>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`rounded-2xl border bg-white p-6 ${
              p.featured ? "border-brand md:col-span-2 lg:col-span-1" : "border-line"
            }`}
          >
            {p.featured && <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wide text-brand">Featured</span>}
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted">{p.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
