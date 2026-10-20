import { strengths } from "../data";
import Section from "./Section";

export default function Strengths() {
  return (
    <Section
      id="strengths"
      title="What I bring"
      intro="The things a production frontend role leans on, and where I've already done them."
      tint
    >
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {strengths.map((item) => (
          <li key={item.need} className="rounded-2xl border border-line bg-white p-6">
            <h3 className="text-lg font-semibold">{item.need}</h3>
            <p className="mt-3 text-sm text-muted">{item.proof}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
