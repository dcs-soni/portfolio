"use client";

import { RESUME_DATA } from "@/data/RESUME_DATA";
import { motion } from "motion/react";
import Image from "next/image";
import { GitHubIcon } from "./icons";
import Link from "next/link";
import { Dot } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      role="region"
      className="min-h-screen px-6 py-14 md:py-20 md:pt-36">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}>
          <h2 className="sm:text-md md:text-lg font-semibold mb-12 text-zinc-900 dark:text-zinc-100">
            PROJECTS
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
            role="list"
            aria-label="List of projects">
            {RESUME_DATA.projects.map((project, index) => (
              <motion.div
                key={index}
                onClick={() => window.open(project.link, "_blank")}
                className="block group rounded-lg overflow-hidden shadow-lg h-full hover:border-0 hover:border-t-zinc-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                role="listitem"
                aria-label={`${project.title} - ${project.description}`}>
                <div className="flex flex-col h-full">
                  {/* Project Image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Preview of ${project.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      // className="object-cover transition-transform duration-500 group-hover:scale-105 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent "
                      className=" cursor-pointer transition-transform duration-500 group-hover:scale-105 object-cover [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0)_95%)] dark:[mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0)_95%)]"
                    />
                  </div>
                  {/* Project Info - Dark bottom section */}
                  <div className="px-6 pb-6 w-full flex flex-grow flex-col bg-gradient-to-t from-zinc-800/10 via-transparent to-transparent  ">
                    <h3 className="text-xl font-normal mb-2 text-zinc-900 dark:text-zinc-100 ">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 h-[60px] overflow-hidden text-ellipsis break-words line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-between ">
                      <p
                        className="text-xs text-zinc-500 w-60 "
                        aria-label="Technologies used">
                        {project.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center">
                            <Dot className="w-3 h-3" /> {tech}
                          </span>
                        ))}
                      </p>
                      <Link href={project.sourceCode}>
                        <GitHubIcon className="h-4 w-4 text-zinc-500" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
