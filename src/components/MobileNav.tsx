import  { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="hamburger-nav" className="flex xl:hidden justify-between items-center px-6 py-4">
      <div className="logo text-xl font-semibold cursor-default">
        Roqeeb Adeyinka
      </div>
      <div className="relative">
        <div
          className={`flex flex-col justify-between h-6 w-8 cursor-pointer transition-all duration-300 ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen?<IoMdClose/>:<FaBars/>}
        </div>
        <ul
          className={`absolute right-0 bg-white shadow-md overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          {["Profile", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="flex flex-col">
              <a
                href={`#${item.toLowerCase()}`}
                className="px-6 py-3 text-[12px] sm:text-xl text-black hover:bg-gray-100"
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
