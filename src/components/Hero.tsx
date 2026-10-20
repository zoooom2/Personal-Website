import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile, stats } from "../data";

export default function Hero() {
  return (
    <section id="top" className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1fr_auto] md:py-20">
        <div className="rise">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            {profile.location} · Frontend Engineer at Moniepoint
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            {profile.name}
            <span className="block text-brand">Frontend Engineer</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{profile.summary}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#strengths" className="rounded-full bg-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-dark">
              See what I bring
            </a>
            <a href={profile.cv} download className="rounded-full border border-ink px-5 py-3 font-semibold transition-colors hover:bg-ink hover:text-white">
              Download CV
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 text-muted hover:text-ink">
              <FaGithub size={26} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-muted hover:text-ink">
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>
        <img
          src="/linkedIn Profile.jpg"
          alt="Portrait of Roqeeb Adeyinka"
          className="rise mx-auto aspect-square w-48 rounded-full object-cover shadow-lg md:w-72"
        />
      </div>
      <dl className="mx-auto grid max-w-6xl gap-px border-t border-line bg-line sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-white px-5 py-5">
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="font-display text-3xl font-bold text-brand">{s.value}</span>
              <span className="ml-3 text-sm text-muted">{s.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
