"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen max-w-5xl flex justify-center items-baseline pt-36   ">
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              culpa architecto explicabo est magnam eos expedita veritatis
              corrupti consectetur velit dolorem atque quas laborum
              reprehenderit quaerat repellendus eius quis odio veniam deleniti?
              Ullam illo, voluptatem iusto earum dignissimos tempore dolore esse
              amet adipisci aliquam architecto porro vero quas quos maiores?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              accusamus veritatis rem animi vel nemo adipisci, eveniet
              voluptates ut debitis quos non nisi alias id, at asperiores minus
              doloremque exercitationem voluptas reiciendis sint eos? Numquam
              doloremque libero recusandae eius, delectus doloribus, incidunt
              sint esse culpa, voluptatem at tempore nostrum dolores.
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-light">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "MongoDB",
                  "Python",
                  "Docker",
                  "PostgreSQL",
                ].map((tech) => (
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
