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
  subHeadingTwo: "How I Make an Impact",
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
        "I've always been fascinated by how technology works—how systems communicate, how products are built, and how complex problems are solved through code. My journey wasn't traditional, but that's what makes it exciting.",

      descriptionTwo:
        "Starting in Electronics & Communication Engineering, I explored IoT, Arduino, and Raspberry Pi, building automation and robotics projects. During the COVID lockdown, I pivoted to software development, leading me to JetBrains Academy. There, I worked with a global team to create interactive projects, automated test cases, and structured learning experiences for 500k+ learners. I contributed to project design, code reviews, and debugging, ensuring high-quality technical content and coding practices.",

      descriptionThree:
        "I wrote automated test cases using hs-test-web, JetBrains' internal testing library, enabling: Validation of user solutions inside JetBrains IDEs, Testing of web applications through real-world interactions, DOM manipulations, and API calls, and, Instant feedback to learners, improving code quality and problem-solving skills.",

      descriptionFour:
        "I thrive in async, distributed teams, adapting quickly to new technologies as per project needs. Beyond testing, I review code, fix broken test cases, and refine projects to enhance efficiency. Currently, I focus on building full-stack AI applications, solving complex engineering challenges, and optimizing workflows.",
    },
    techStack: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "MongoDB",
      "Python",
      "Docker",
      "PostgreSQL",
    ],
  },

  work: [
    {
      company: "JetBrains Academy",
      brand: "Hyperskill",
      link: "https://academy.jetbrains.com",
      badges: ["Remote", "Freelance"],
      title: "Frontend Expert",
      start: "Oct 2021",
      end: "Present",
      description: [
        "At JetBrains Academy, I developed interactive projects and wrote automated test cases, leveraging hs-test-web to validate user solutions directly inside JetBrains IDEs.",

        "I designed and tested projects across C++, HTML, CSS, JavaScript, TypeScript, React, ensuring real-time evaluation of user implementations for correctness, edge cases, and performance.",

        "Using hs-test-web, I automated testing for dynamic web apps—simulating user interactions, DOM manipulations, and HTTP requests—enhancing feedback mechanisms for learners inside JetBrains IDEs.",

        "I also refactored and debugged complex projects, aligning them with best practices to improve efficiency, maintainability, and the overall learning experience.",
      ],
    },

    {
      company: "InterviewBit Technologies",
      brand: "Scaler",
      link: "https://www.jetbrains.com/academy/",
      badges: ["Remote", "Freelance"],
      title: "Frontend Expert",
      start: "Jan 2022",
      end: "Jan 2023",
      description: [
        "At Scaler Academy, I focused on creating SEO-optimized technical content for HTML, CSS, JavaScript, and SQL, ensuring high discoverability and readability.",

        "Developed in-depth articles, tutorials, and explanations that simplified complex concepts while maintaining technical accuracy.",

        "Optimized content structure and keyword placement to enhance search engine rankings, making learning resources more accessible to a wider audience.",

        "Refined and updated technical documentation to keep it aligned with industry standards and best practices.",
      ],
    },
  ],

  projects: [
    {
      title: "StashIt",
      image:
        "https://images.pexels.com/photos/30840677/pexels-photo-30840677/free-photo-of-scenic-seascape-with-rugged-rock-formations.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://www.google.com",
      sourceCode: "https:www/facebook.com",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    },

    {
      title: "Scriblio",
      image:
        "https://images.pexels.com/photos/30840677/pexels-photo-30840677/free-photo-of-scenic-seascape-with-rugged-rock-formations.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://www.google.com",
      sourceCode: "https:www/facebook.com",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      techStack: ["React", "NextJS"],
    },
    {
      title: "StashIt",
      image:
        "https://images.pexels.com/photos/30840677/pexels-photo-30840677/free-photo-of-scenic-seascape-with-rugged-rock-formations.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://www.google.com",
      sourceCode: "https:www/facebook.com",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    },
  ],
};
