import  { useState } from "react";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="hamburger-nav" className="flex xl:hidden justify-between items-center px-6 py-4">
      <div className="logo text-xl font-semibold cursor-default">
        Roqeeb Adeyinka
      </div>
      <div className="hamburger-menu relative">
        <div
          className={`hamburger-icon flex flex-col justify-between h-6 w-8 cursor-pointer transition-all duration-300 ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-[2px] w-full bg-black transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-x-[10px] translate-y-[5px]" : ""
            }`}
          ></span>
          <span
            className={`h-[2px] w-full bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-[2px] w-full bg-black transition-all duration-300 ${
              menuOpen ? "-rotate-45 translate-x-[10px] -translate-y-[5px]" : ""
            }`}
          ></span>
        </div>
        <ul
          className={`menu-links absolute right-0 bg-white shadow-md overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          {["Profile", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="list-none">
              <a
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-3 text-xl text-black hover:bg-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
