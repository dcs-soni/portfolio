"use client";

import React from "react";
import { motion } from "motion/react";
import { RESUME_DATA } from "@/data/RESUME_DATA";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex justify-center items-baseline pt-36 ">
      <div className="w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="">
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
            {RESUME_DATA.work.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                {/* Timeline dot */}

                <div className="group">
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full group-hover:bg-zinc-100 duration-500 ease-in-out bg-zinc-700 transform -translate-x-1/2" />
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-5">
                      <span className="text-sm text-gray-400 whitespace-nowrap min-w-[120px]">
                        {exp.start} - {exp.end}
                      </span>
                      <div className="flex flex-col pl-8 max-w-2xl">
                        <h3 className="text-xl font-light mb-1">
                          {exp.company}
                        </h3>
                        <span className="text-sm text-gray-400">
                          {exp.title}
                        </span>
                        <ul className="mt-3 space-y-2 pl-4">
                          {exp.description.map((desc, i) => (
                            <li
                              key={i}
                              className="list-disc text-gray-400 marker:text-zinc-700 group-hover:marker:text-zinc-200  text-sm leading-relaxed pl-4">
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </div>
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
