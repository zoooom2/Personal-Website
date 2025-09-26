interface Project {
  title: string;
  description: string;
  tech?: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Flexire Consulting",
    description:
      "Lead software development efforts for dashboards and client-facing web applications. Built the company’s landing page and designed dynamic dashboards using analyst-provided data.",
    link: "https://flexireconsulting.biz",
  },
  {
    title: "BAZ Studio E-commerce",
    description:
      "Designed, built, and maintained a TypeScript MERN e-commerce platform with admin dashboard to manage orders, monitor visitor statistics, upload/edit products, and generate analytics. Migrated project to Next.js for improved performance & SEO.",
    link: "https://bazofficial.xyz",
  },
  {
    title: "Cruise Central Ticketing Platform",
    description:
      "Developed a Next.js ticketing platform for online event ticket sales. Integrated secure payment solutions and optimized for high-traffic events.",
    link: "https://cruisecentral.xyz",
  },
  {
    title: "WovenKulture Website",
    description:
      "Improved a Wix-built website under a 3-day deadline, enhancing design consistency and user experience while delivering ahead of schedule.",
    link: "https://wovenkulture.online",
  },
  {
    title: "Traditional Retail Brand",
    description:
      "Built a full-featured e-commerce platform with admin dashboard, user-side blog section, and blog management dashboard.",
    link: "https://okanran-ajangbile.com",
  },
  {
    title: "Jam Foundation Blog",
    description:
      "Built and deployed a fully responsive blog website with custom admin dashboard, enabling non-technical staff to easily manage posts and announcements.",
    link: "https://jamfoundation.org.ng",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-[10rem] max-xl:mx-[5%]">
      <h2 className="title text-5xl text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-300 rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4 text-[14px]">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-black hover:underline font-medium"
              >
                Visit Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
