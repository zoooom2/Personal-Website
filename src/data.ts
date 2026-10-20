export const profile = {
  name: "Roqeeb Adeyinka",
  role: "Frontend Engineer",
  location: "Lagos, Nigeria",
  email: "roqeebadeyinka@gmail.com",
  phone: "+234 906 067 8621",
  github: "https://github.com/zoooom2",
  linkedin: "https://linkedin.com/in/roqeeb-adeyinka",
  cv: "/Roqeeb_Adeyinka_CV.pdf",
  summary:
    "I build screens and user journeys in TypeScript, React and Next.js, on shared component systems, wired to real APIs and backed by unit, component and end-to-end tests. Currently at Moniepoint, previously lead engineer of a full e-commerce platform taken from code to live payments.",
};

export const stats = [
  { value: "4+", label: "years shipping production software" },
  { value: "250+", label: "test files, with Cypress end-to-end and CI on every PR" },
  { value: "+10%", label: "test coverage raised at Moniepoint" },
];

export interface FitItem {
  need: string;
  proof: string;
}

export const strengths: FitItem[] = [
  {
    need: "Data-heavy financial screens",
    proof:
      "At Moniepoint I build transactions, bills, reports and chart-of-accounts screens: REST-fed tables and forms with loading, empty and error states, so users can rely on what they see. I made large tables stay responsive under heavy scrolling and editing.",
  },
  {
    need: "Regulated, secure financial products",
    proof:
      "Fintech at scale, and payments end to end at BAZ Studio (Paystack, Stripe, webhook recovery, daily reconciliation). Secure frontend habits: httpOnly cookie auth, CSRF and CSP, input validation, role-based access, audit logging.",
  },
  {
    need: "Quality you can ship on",
    proof:
      "Vitest, Jest, Testing Library and Cypress, run in CI on every pull request. I migrated Moniepoint's tests from Jest to Vitest and raised coverage by 10%.",
  },
  {
    need: "Picking up new stacks fast",
    proof:
      "I've led MERN to Next.js, React 19, Tailwind 4 and Jest to Vitest migrations. The fundamentals (TypeScript, components, forms, state, testing) carry over to any framework, so I get productive quickly in new stacks.",
  },
  {
    need: "Shared components and design systems",
    proof:
      "Built a Tailwind and shadcn/ui component system with dark mode at BAZ, and fixed compatibility across shared components in Moniepoint's microfrontend setup.",
  },
  {
    need: "Working across the stack",
    proof:
      "Node.js and Express Backend-for-Frontend, GraphQL (Apollo), Docker, GitHub Actions, OpenTelemetry and New Relic for production debugging.",
  },
];

export interface Job {
  title: string;
  company: string;
  period: string;
  context: string;
  points: string[];
}

export const experience: Job[] = [
  {
    title: "Frontend Engineer",
    company: "Moniepoint",
    period: "Dec 2025 – Present",
    context: "Fintech: payments, banking and business finance",
    points: [
      "Build business accounting features: transactions, bills, savings, categories, profit-and-loss reports and chart of accounts.",
      "Integrate REST APIs into data-heavy financial tables and forms, handling loading, empty and error states.",
      "Optimised table rendering by cutting cell re-renders, batching updates with requestAnimationFrame and restructuring layouts with CSS Grid.",
      "Migrated tests from Jest to Vitest (+10% coverage) and linting from ESLint to Biome.",
      "Helped upgrade to React 19 and Tailwind CSS 4 across shared components in a microfrontend setup.",
      "Added source maps across microfrontends so production errors trace back to original code.",
      "Contributed to an Express.js Backend-for-Frontend with CSRF and Content Security Policy protection.",
    ],
  },
  {
    title: "Lead Full-Stack Developer",
    company: "BAZ Studio",
    period: "2022 – Sep 2025",
    context: "E-commerce: Next.js, React 19, strict TypeScript, ~49k lines",
    points: [
      "Led a storefront and admin back-office from screens and APIs to deployment, selling in Nigeria and internationally.",
      "Migrated the MERN app to Next.js, fixed home page layout shift (CLS) and added SEO metadata.",
      "Built admin screens with server-side search, pagination and URL-based filters, so every view can be shared and reloaded.",
      "Implemented Paystack and Stripe checkout with Valibot validation, webhook recovery and daily reconciliation.",
      "Designed an event-driven order pipeline (Kafka, Redis) with feature flags that switch off risky features instantly.",
      "Added OpenTelemetry tracing and New Relic alerting; secured the back-office with 2FA, role-based access and audit logging.",
      "Maintained 250+ Vitest and Testing Library files plus Cypress, in CI before every merge; Docker scanning and AWS deploys with smoke tests.",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "BAZ Studio E-commerce",
    description:
      "Storefront and admin back-office with Paystack and Stripe payments, order pipeline, tracing and role-based access. The platform behind my lead role.",
    featured: true,
  },
  {
    title: "Flexire Consulting",
    description:
      "Landing page and dynamic dashboards built from analyst-provided data.",
  },
  {
    title: "Cruise Central Ticketing",
    description:
      "Next.js ticketing platform with secure payments, built for high-traffic events.",
  },
  {
    title: "Okanran Ajangbile",
    description:
      "E-commerce platform with admin dashboard, blog and blog management.",
  },
  {
    title: "Jam Foundation",
    description:
      "Responsive blog with a custom admin dashboard so non-technical staff manage posts themselves.",
  },
  {
    title: "WovenKulture",
    description:
      "Redesigned a Wix site under a 3-day deadline, improving consistency and UX.",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Frontend",
    items: ["TypeScript", "JavaScript", "React 19", "Next.js (App Router)", "HTML5", "CSS3", "Tailwind CSS", "shadcn/ui", "Redux Toolkit", "Valibot"],
  },
  {
    category: "Components & systems",
    items: ["Component libraries", "Design systems", "Microfrontends", "Responsive layouts"],
  },
  {
    category: "APIs",
    items: ["REST", "GraphQL (Apollo)", "Node.js", "Express BFF"],
  },
  {
    category: "Testing",
    items: ["Vitest", "Jest", "React Testing Library", "Cypress"],
  },
  {
    category: "Secure frontend",
    items: ["httpOnly cookie auth", "CSRF", "CSP", "Input validation", "Role-based access"],
  },
  {
    category: "Workflow & debugging",
    items: ["Git & code review", "GitHub Actions", "Docker", "Biome / ESLint", "New Relic", "OpenTelemetry", "Source maps", "Claude Code"],
  },
];

export const nav = [
  { id: "strengths", label: "Strengths" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
