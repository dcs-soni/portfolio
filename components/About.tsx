"use client";

import { RESUME_DATA } from "@/data/RESUME_DATA";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-baseline pt-36   ">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <h2 className=" sm:text-md md:text-lg font-light text-zinc-100 mb-8">
            ABOUT ME
          </h2>
          <div className="space-y-6 text-gray-400">
            <p>{RESUME_DATA.aboutMe.descriptionOne}</p>
            <p>{RESUME_DATA.aboutMe.descroiptionTwo}</p>

            <div className="space-y-4">
              <h3 className="text-lg font-light">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {RESUME_DATA.aboutMe.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm bg-white/5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
