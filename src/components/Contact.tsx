import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-bold sm:text-4xl">Let's work together</h2>
        <p className="mt-3 max-w-xl text-white/70">
          Happy to walk through any of the work above or talk about your team's frontend needs.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-ink hover:bg-white/90">
            <MdMail /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 font-semibold hover:bg-white/10">
            <FaPhone /> {profile.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
