"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Online plaform",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, explicabo!",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Online plaform",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, explicabo!",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Online plaform",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, explicabo!",
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 pt-36">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl font-light mb-12 text-zinc-900 dark:text-zinc-300">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                className="block group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="text-xl font-light mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400">{project.description}</p>
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
