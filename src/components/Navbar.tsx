

export default function Navbar() {
  return (
    <nav id="desktop-nav" className="hidden xl:flex justify-around items-center h-[17vh]">
      <div className="logo text-2xl font-semibold cursor-default font-space">
        Roqeeb Adeyinka
      </div>
      <ul className="nav-links flex gap-8 list-none text-2xl">
        {["Profile", "About","Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-gray-500 hover:underline underline-offset-8"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
