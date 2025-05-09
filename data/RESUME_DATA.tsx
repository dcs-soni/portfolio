import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons/index";

export const RESUME_DATA = {
  constants: {
    cal: "https://cal.com/divyanshusoni/30min",
    space:
      "https://divyanshusoni.notion.site/Space-1a74657276b48095baa1e9e22802b363",
  },

  name: "Divyanshu Soni",
  title: "Software Engineer",
  heroHeading: "Building thoughtful digital experiences",
  subHeadingOne: "Full-Stack Development",
  subTextOne:
    "Crafting scalable web applications, solving real-world challenges, and constantly learning new technologies on the go.",
  subHeadingTwo: "3+ Years of Impactful Work ",
  subTextTwo:
    "Experienced in full-stack development, async collaboration, and rapidly learning new technologies to build impactful solutions.",

  contact: {
    email: "divyanshusoni52@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dcs-soni",
        icon: <GitHubIcon />,
      },

      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dcs-soni/",
        icon: <LinkedInIcon />,
      },

      {
        name: "X",
        url: "https://x.com/divyanshu_soni_",
        icon: <XIcon />,
      },
    ],
  },

  aboutMe: {
    description: {
      descriptionOne:
        "I've always been fascinated by how technology works—how systems communicate, how products are built, and how complex problems are solved through code. My journey into tech wasn't traditional, but that's what makes it exciting. I enjoy breaking down technical challenges, optimizing workflows, and writing clean, efficient code.",

      descriptionTwo:
        "I started in Electronics & Communication Engineering, exploring IoT, Arduino, and Raspberry Pi to build automation and robotics projects. During the COVID lockdown, I transitioned into software development, focusing on full-stack web applications. Over time, I’ve worked extensively with technologies like JavaScript, TypeScript, React, Next.js, and Node.js, integrating databases like PostgreSQL and MongoDB with Prisma and Mongoose ORM for efficient data management.",

      descriptionThree:
        "I thrive in async, distributed teams, adapting quickly to new technologies based on project requirements. My recent focus has been on AI-powered applications, where I integrate AI models into web platforms, leveraging embeddings for intelligent search and building scalable, data-driven solutions. I'm always upskilling—whether it's exploring Redis for caching, diving deeper into DevOps practices with Docker and CI/CD pipelines, or experimenting with new AI-driven tools to improve efficiency and automation.",
    },
    techStack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "Python",
      "Docker",
      "PostgreSQL",
      "Redis",
      "ChromaDB",
      "Git",
      "GitHub",
    ],
  },

  work: [
    {
      company: "JetBrains Academy",
      brand: "Hyperskill",
      link: "https://academy.jetbrains.com",
      badges: ["Remote", "Freelance"],
      title: "Frontend ",
      start: "Oct 2021",
      end: "Present",
      description: [
        "At JetBrains Academy [Hyperskill], I developed interactive projects and wrote automated test cases, leveraging hs-test-web to validate user solutions directly inside JetBrains IDEs.",

        "I designed and tested projects across C++, HTML, CSS, JavaScript, TypeScript, React, ensuring real-time evaluation of user implementations for correctness, edge cases, and performance.",

        "Using hs-test-web, I automated testing for dynamic web apps—simulating user interactions, DOM manipulations, and HTTP requests—enhancing feedback mechanisms for learners inside JetBrains IDEs.",

        "I also refactored and debugged complex projects, along with technical articles and code exercises, aligning them with best practices to improve efficiency, maintainability, and the overall learning experience.",
      ],
    },

    {
      company: "InterviewBit Technologies",
      brand: "Scaler",
      link: "https://www.scaler.com/topics/",
      badges: ["Remote", "Freelance"],
      title: "Technical Content Writer",
      start: "Jan 2022",
      end: "Jan 2023",
      description: [
        "At Interviewbit Technologies [Scaler] , I focused on creating SEO-optimized technical content for HTML, CSS, JavaScript, and SQL, ensuring high discoverability and readability.",

        "Developed in-depth articles, tutorials, and explanations that simplified complex concepts while maintaining technical accuracy.",

        "Optimized content structure and keyword placement to enhance search engine rankings, making learning resources more accessible to a wider audience.",

        "Refined and updated technical documentation to keep it aligned with industry standards and best practices.",
      ],
    },
  ],

  projects: [
    {
      title: "Portfolio",
      image: "/port.png",
      link: "https://divyanshusoni.com",
      sourceCode: "https://github.com/dcs-soni/portfolio",
      description:
        "A modern, responsive Next.js site with dark mode, showcasing my skills, projects, and experiences.",
      techStack: ["Next.js", "TypeScript", "Tailwind", "Redis"],
    },

    {
      title: "StashIt",
      image: "/stashit.png",
      link: "https://github.com/dcs-soni/stash-it",
      sourceCode: "https://github.com/dcs-soni/stash-it",
      description:
        "An app for storing and sharing content with categorization, search, and AI-powered results using embeddings and vector search.",
      techStack: ["React.js", "TypeScript", "Chroma", "MongoDB"],
    },
    {
      title: "TrendsAI",
      image: "/trendsai.png",
      link: "https://trendsai.vercel.app/",
      sourceCode: "https://github.com/dcs-soni/trendsAI",
      description:
        "trendsAI is a platform designed to explore and discover the most innovative AI applications and models. Users can join the community to stay ahead in the AI revolution, submit their own AI projects, and engage with other AI enthusiasts.",
      techStack: ["Next.js", "PostgreSQL", "Node.js", "Zustand"],
    },

    {
      title: "VaultKey",
      image: "/vaultkey.png",
      link: "https://vault-key.vercel.app",
      sourceCode: "https://github.com/dcs-soni/vault-key",
      description:
        "vaultKey is a secure password management app that helps you store and organize your passwords effortlessly.",

      techStack: ["React", "Dexie", "TypeScript", "Magic SDK"],
    },

    // {
    //   title: "Scriblio",
    //   image: "",
    //   link: "https://www.google.com",
    //   sourceCode: "https:www/facebook.com",
    //   description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //   techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    // },
  ],
};
