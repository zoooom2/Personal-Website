import { experience } from "../data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {experience.map((job) => (
          <li key={job.company} className="grid gap-4 md:grid-cols-[14rem_1fr] md:gap-10">
            <div>
              <h3 className="text-xl font-semibold">{job.company}</h3>
              <p className="text-sm font-medium text-brand">{job.title}</p>
              <p className="mt-1 text-sm text-muted">{job.period}</p>
              <p className="mt-1 text-sm text-muted">{job.context}</p>
            </div>
            <ul className="space-y-3 border-l-2 border-line pl-5">
              {job.points.map((p) => (
                <li key={p} className="text-muted">{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      <p className="mt-12 text-sm text-muted">
        <strong className="text-ink">Education:</strong> BSc Electrical and Electronics Engineering, University of Ilorin (Second Class Upper).
      </p>
    </Section>
  );
}
