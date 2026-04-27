export interface Position {
    title: string;
    company: string;
    description: string;
    contributions?: string[];
    highlights?: string[];
    skills?: string[]; // e.g. ['Next.js', 'TypeScript', 'Tailwind CSS']
    employment_type?: string; // e.g. 'Full-time', 'Contract'
    location?: string; // e.g. 'Lagos, Nigeria · Remote'
    duration?: string; // e.g. 'Mar 2025 - Jul 2025 · 5 mos'
  }
  
  export interface Company {
    name: string;
    year: string;
    logoColor: string;
    url?: string;
    logoUrl: string;
    badge?: string;
    positions: Position[];
  }
  
  export const experienceData: Company[] = [
    // {
    //   name: "Posthearts",
    //   year: "2025",
    //   url: "https://www.posthearts.app/",
    //   logoColor: "bg-green-500",
    //   logoUrl: "/posthearts.png",
    //   positions: [
    //     {
    //       title: "Frontend Engineer",
    //       company: "Posthearts",
    //       duration: "Jan 2025 – Present · Remote",
    //       description:
    //         "Worked on Posthearts — a digital platform for sharing heartfelt letters with loved ones. Collaborated closely with a multidisciplinary team including Daniel Ayomide (Brass), Ayomide Aluko (Plutio), Bode Slomo (Brass), and Obasola (Cowrywise) to design and build a seamless, emotionally resonant user experience.",
    //       highlights: [
    //         "Architected the frontend using React.js and TypeScript with a focus on performance, accessibility, and emotional design.",
    //         "Implemented dynamic letter creation, letter scheduling and sharing features that drove engagement.",
    //         "Optimized the app’s rendering flow, reducing first load time by 25% and improving retention metrics.",
    //         "Contributed to product strategy, helping the platform attract 200+ active users and curate over 2,000 heartfelt letters in its first release.",
    //       ],
    //       skills: [
    //         "React.js",
    //         "TypeScript",
    //         "Context API",
    //         "Tailwind CSS",
    //         "UX Collaboration",
    //         "Performance Optimization",
    //       ],
    //     },
    //   ],
    // },
    {
      name: "IPC-Africa",
      year: "2022",
      url: "https://gosource.app/home",
      logoColor: "bg-amber-400",
      logoUrl: "/ipc.png",
      positions: [
        {
          title: "Senior Frontend Engineer",
          company: "Daash (by IPC-Africa)",
          duration: "Apr 2023 – Present · Lagos, Nigeria · Hybrid",
          // duration: "Apr 2023 – Present · Lagos, Nigeria · Hybrid",
          description:
            "Led frontend engineering and product direction for Daash — a SaaS ecosystem empowering food businesses to manage inventory, storefronts, POS, and kitchen operations. Oversaw architectural design, code quality, and team scaling initiatives while aligning product vision with user feedback.",
          highlights: [
            "Defined and implemented a scalable component-driven architecture using Vue 3, Nuxt 3 and TypeScript.",
            "Built POS, storefront and inventory modules that improved transaction speed by 40% and reduced user onboarding time by 30%.",
            "Collaborated cross-functionally with product managers and designers to ensure consistent design implementation and technical feasibility.",
            "Rolled out an internal payment integration system that allowed users to pay for their orders using multiple payment methods.",
          ],
          skills: [
            "Vue.js 3",
            "TypeScript",
            "Nuxt 3",
            "Pinia",
            "Vite",
            "REST API",
            "Product Strategy",
            "Agile Development",
          ],
        },
        {
          title: "Frontend Engineer",
          company: "GoSource (by IPC-Africa)",
          duration: "Sep 2022 – Apr 2023 · Lagos, Nigeria · Remote",
          description:
            "Owned the frontend development of GoSource, a B2B procurement and logistics platform. Partnered with product and design teams to launch the MVP that quickly gained traction among local distributors.",
          highlights: [
            "Delivered the MVP frontend in record time, aligning business goals with UX precision.",
            "Optimized page load and API integration, contributing to $70K in revenue within the first two months post-launch.",
            "Implemented key version 2 features including advanced order tracking and vendor management tools.",
            "Built an order request and approval workflow system that allowed managers to see, approve or reject orders from their dashboard.",
            "Leveraged user analytics and feedback to improve conversion flow, achieving 3× user growth by Q2 2023.",
          ],
          skills: [
            "Vue.js",
            "TypeScript",
            "Axios",
            "Nuxt 3",
            "UI/UX Design",
            "Performance Optimization",
            "Data Visualization",
          ],
        },
        {
          title: "Frontend Developer",
          company: "IPC-Africa",
          duration: "Feb 2022 – Sep 2022 · Lagos, Nigeria",
          description:
            "Reached out to, to help transition IPC-Africa’s core operations from manual workflows to digital systems through modern web applications.",
          highlights: [
            "Collaborated with the CEO and key stakeholders to understand the business needs and the pain points of the users.",
            "Developed internal admin dashboards and workflow automation tools.",
            "Reduced operational overhead by 45% through digitized record management.",
            "Introduced modern tooling and component reusability to streamline future product development.",
            "Scaled the frontend team from 1 to 5 engineers, mentoring team members on best practices and modern tooling.",
          ],
          skills: [
            "JavaScript",
            "Vue.js",
            "Firebase",
            "Workflow Automation",
            "System Digitization",
          ],
        },
      ],
    },
    {
      name: "Acumen Digital",
      year: "2024",
      url: "https://www.acumen.digital/",
      logoColor: "bg-red-500",
      logoUrl: "/acumen.png",
      positions: [
        {
          title: "Frontend Engineer",
          company: "Acumen Digital",
          duration: "Apr 2024 – Present · Lagos, Nigeria · Hybrid",
          description:
            "Built and maintained scalable frontend solutions for multiple client-facing fintech, agri-tech, and real-estate platforms under Acumen’s design-led engineering approach. Delivered highly-performant, maintainable code with focus on reliability and long-term scalability.",
          highlights: [
            "Architected reusable UI components across 5 major projects, cutting new feature delivery time by 40%.",
            "Integrated CI/CD pipelines and end-to-end testing (Cypress, Jest) for faster, more reliable releases.",
            "Improved product load performance by 25% through modular code refactoring and caching strategies.",
            "Collaborated closely with design and backend teams to deliver consistent, user-centered digital products.",
          ],
          contributions: [
            "CartAgro – A Farm produce marketplace that helps bridge the gap between farmers and consumers.",
            "Esusu – Group and target savings platform that allows users to save money for a specific purpose.",
            "Realbook – Real-estate management solution for landlords to track their properties and tenants.",
            "FX-P2P – Peer-to-peer foreign exchange solution that connects merchants to buyers and sellers of foreign exchange.",
            "Tendar – Internal loan management tool that allows users to manage their loans and repayments from their dashboard.",
            "Oja marketplace – Powered by Tendar, I was able to build a buy now pay later solution for the merchants and users.",
          ],
          skills: [
            "Vue.js 3",
            "TypeScript",
            "Nuxt 3",
            "Jest",
            "Cypress",
            "CI/CD",
            "Component Architecture",
            "Agile Collaboration",
          ],
        },
      ],
    },
    {
      name: "Swing Studio",
      year: "2024",
      url: "https://www.overlap.work/",
      logoColor: "bg-green-500",
      logoUrl: "/swing.png",
      positions: [
        {
          title: "Frontend Engineer",
          company: "Overlap (by Swing Studio)",
          duration: "2024 • London, United Kingdom",
          // duration: "Feb 2024 – May 2024 · London, United Kingdom · Remote",
          description:
            "Contributed to the design and development of Overlap — a team collaboration and productivity tool. Collaborated closely with backend engineers and product designers to deliver a visually cohesive, performant web experience.",
            highlights: [
              "Implemented full route authentication to isolate workspace projects and prevent cross-access data leaks.",
              "Optimized rendering performance (e.g. by memoization, lazy loading, virtualization) to reduce UI lag and improve frame rates under heavy data loads.",
              "Identified and resolved cross–component UI inconsistencies before major launch, ensuring a cohesive user experience",
              "Refactored legacy frontend modules to improve maintainability, modularity, and developer onboarding velocity",
              "Built the chat and project management interfaces, including viewing and creating projects with real-time updates.",
              "Developed a production-grade reusable component library to ensure design consistency and scalability across modules.",
              "Designed and maintained efficient state management patterns using Zustand for predictable and performant data flow.",
            ],
          skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Zustand",
            "Tailwind CSS",
          ],
        },
      ],
    },
    // {
    //   name: "Teemplot",
    //   year: "2025",
    //   logoColor: "bg-orange-100",
    //   logoUrl: "/teemplot.png",
    //   badge: "WIP",
    //   positions: [
    //     {
    //       title: "Frontend Engineer",
    //       company: "Teemplot",
    //       duration: "Jul 2025 – Present · Remote",
    //       description:
    //         "Currently building Teemplot — an AI-driven HR management platform designed to streamline employee performance tracking, recruitment, and engagement insights.",
    //       highlights: [
    //         "Designing scalable UI systems for HR analytics and talent management workflows.",
    //         "Collaborating with cross-functional teams to implement core modules and AI-assisted dashboards.",
    //       ],
    //       skills: [
    //         "Vue.js 3",
    //         "Nuxt 3",
    //         "TypeScript",
    //         "AI Integration",
    //         "Design Systems",
    //       ],
    //     },
    //   ],
    // },
  ];