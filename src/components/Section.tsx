import type { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  intro?: string;
  tint?: boolean;
  children: ReactNode;
}

export default function Section({ id, title, intro, tint, children }: Props) {
  return (
    <section id={id} className={tint ? "bg-paper" : undefined}>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
