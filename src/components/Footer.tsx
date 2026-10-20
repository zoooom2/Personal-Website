import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="bg-ink py-6 text-center text-sm text-white/60">
      &copy; {new Date().getFullYear()} {profile.name} · {profile.location}
    </footer>
  );
}
