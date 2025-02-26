import React from "react";
import { motion } from "motion/react";

interface Experience {
  period: string;
  company: string;
  role: string;
  description: string[];
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      period: "2021 - 2024",
      company: "sa",
      role: "afafafafaf",
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, odit?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quae, harum consequuntur hic possimus placeat!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo, maxime sit suscipit non tempora cupiditate nihil explicabo modi laboriosam?",
      ],
    },
    {
      period: "2022 - 2023",
      company: "sa",
      role: "afafafafaf",
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, odit?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quae, harum consequuntur hic possimus placeat!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo, maxime sit suscipit non tempora cupiditate nihil explicabo modi laboriosam?",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-baseline max-w-5xl pt-36 ">
      <div className="max-4-xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12">
          <div>
            <h2 className="sm:text-md md:text-lg  font-light text-zinc-100 mb-4">
              EXPERIENCE
            </h2>
            <p className="text-zinc-600 dark:text-zinc-600">
              My Professional Journey
            </p>
          </div>

          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-white/20" />
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-white transform -translate-x-1/2" />

                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span className="text-sm text-gray-400">{exp.period}</span>
                    <h3 className="text-xl font-light">{exp.company}</h3>
                    <span className="text-sm text-gray-400">• {exp.role}</span>
                  </div>

                  <div className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <p
                        key={i}
                        className="text-gray-400 text-sm leading-relaxed">
                        {desc}
                      </p>
                    ))}
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
