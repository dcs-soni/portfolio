"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { RESUME_DATA } from "@/data/RESUME_DATA";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 gap-18 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}>
          <div>
            <h2 className="text-md md:text-3xl font-normal mb-4 text-zinc-900 dark:text-zinc-200 ">
              Lets create something amazing together
            </h2>
            <div className="text-sm md:text-xl text-zinc-700 dark:text-zinc-400 mb-6">
              Im always open to new projects and collaborations.
              <p className="inline md:block"> Feel free to reach out!</p>
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="inline-flex items-center text-sm border border-black/20 dark:border-white/20 px-4 py-2 md:px-10 md:py-4 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              Say Hello
            </a>

            <div className="flex space-x-2 md:space-x-4">
              {RESUME_DATA.contact.social.map(({ name }: { name: string }) => {
                const social = RESUME_DATA.contact.social.find(
                  (item) => item.name === name
                );

                if (!social?.url) return null;

                return (
                  <motion.a
                    key={name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-800 border-zinc-400 dark:text-gray-400 dark:hover:text-white transition-colors border dark:border-white/20 px-2 py-2 rounded-lg">
                    {social?.icon}
                    <span className="sr-only">{social?.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
        <div className="mt-12 pt-6 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-900 dark:text-gray-400 text-sm mb-4 md:mb-0">
            Crafted with passion and code.
          </p>
          <motion.a
            href="#home"
            target=""
            rel="noopener noreferrer"
            className="text-zinc-700 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm"
            whileHover={{ scale: 1.05 }}>
            Made by DS
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
