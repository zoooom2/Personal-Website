import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { nav, profile } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-lg font-bold">
          {profile.name}
        </a>
        <ul className="hidden gap-7 md:flex">
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  active === id ? "text-brand" : "text-muted"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose size={24} /> : <FaBars size={20} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-white px-5 py-2 md:hidden">
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 font-medium">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
