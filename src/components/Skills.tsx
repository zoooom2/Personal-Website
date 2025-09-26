import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiVite, SiJest, SiCypress, SiFramer, SiGraphql } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      category: "Frontend Core",
      items: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", icon: <FaReact className="text-sky-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
        { name: "Redux / Zustand", icon: <SiRedux className="text-purple-500" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
      ],
    },
    {
      category: "Styling & UI",
      items: [
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Styled Components", icon: <span className="font-bold text-pink-600">SC</span> },
        { name: "Material UI / ShadCN", icon: <span className="font-bold text-indigo-600">UI</span> },
      ],
    },
    {
      category: "Testing & Quality",
      items: [
        { name: "Jest", icon: <SiJest className="text-red-600" /> },
        { name: "Cypress", icon: <SiCypress className="text-green-600" /> },
      ],
    },
    {
      category: "Build Tools & DevOps",
      items: [
        { name: "Vite", icon: <SiVite className="text-purple-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Docker", icon: <FaDocker className="text-sky-700" /> },
      ],
    },
    {
      category: "APIs & Data",
      items: [
        { name: "REST APIs", icon: <span className="font-bold text-gray-600">REST</span> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> },
        { name: "WebSockets", icon: <span className="font-bold text-green-700">WS</span> },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div
              key={category.category}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((skill) => (
                  <li key={skill.name} className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
