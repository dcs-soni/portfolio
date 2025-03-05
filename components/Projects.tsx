"use client";

import { RESUME_DATA } from "@/data/RESUME_DATA";
import { motion } from "motion/react";
import Image from "next/image";

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="List of projects">
            {RESUME_DATA.projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                className="block group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                role="listitem"
                aria-label={`${project.title} - ${project.description}`}>
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Screenshot or preview of ${project.title}`}
                    width={800}
                    height={600}
                    className="max-w-56 md:max-w-2xl mx-auto md:w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 group-hover:text-zinc-100 transition-opacity duration-300 flex items-center justify-center"
                    role="region"
                    aria-label={`Details for ${project.title}`}>
                    <div className="text-center p-6">
                      <h3 className="text-xl font-light mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400">{project.description}</p>
                      <p
                        className="text-xs text-gray-400 mt-6"
                        aria-label="Technologies used">
                        {project.techStack}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
